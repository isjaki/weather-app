import Vue from 'vue';

/** Register icon components globally */
const registerIcons = () => {
  const requireComponent = require.context(
    '@/ui/components/icons',
    true,
    /[A-Z]\w+Icon\.(vue|js)$/,
  );

  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);

    const componentName = fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');

    // Icon component global registration
    Vue.component(
      componentName,
      componentConfig.default || componentConfig,
    );
  });
};

export default registerIcons;
