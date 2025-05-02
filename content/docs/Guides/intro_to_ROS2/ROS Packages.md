---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=03d658dd3b53e3e058d1cc38e6f8c1176be95426cc25ac5a18620aad42a7dadc&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=ffc0d2518efc507e586b8d4fb56a8897011c3a99b9287fc3df2e27d88ab23ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=d80d4b79aabcc4a8cb4a206a8c77a935300fa9dab06a31ad8ee39741ac6b4c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=22ed8bbe48887f1498ebb7aa96c90236f16ad15c124c6e6251d3fc9a46f1c830&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=49b829bfb9e20248136b8aef77af41251a4cd0bad0805de80d574e58e79701de&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=51df5b79b719e46675d4584fd341b62596f425277a5fc69e24cce864f2a01a98&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DSBG6MK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAG2DXEW8TmUAIzKlnDnYAROhVJYLPOa5eg4J0IAJ6KPAiEAjnTn30ysmugjBwkvrMrQsYC0X6JNMN0z%2FSqe%2FxzOSMYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB69r%2FQdnJRJMzQGxircAwHpgyFU8mAH2uMrqjjuEtS8o5SZuamP3HEB4gAWcbylNl6rIPnlUQ4DfMCZcSUISLwDxtL%2BP8sVcbXPvX8vjceiQOMpRQiwFIyhnyN9MgreFnNIb7EGezCrcbs1CJLF63twXoLy7rBojqGwBe9wcE87h6n8y2AD%2FqpW7ATcJpn8jnO%2FKULYDPOlROYKu2UzWRNejkxBluwUMfNIPXsLeGQKSGAgDwdYYzyRu5mW%2BiGGJErpJPfjR998ZVB4HkXfseX3AJiRXeppig1dtjdOsLxD5NO3VlpE%2BINT58OWVNeErEW5pUpAl8TqJc45Qtmd%2F6b6aZe33%2FxK%2FFGYuAEGIZbm8TqmujpxFAwgw8ENauRg7cAokzJjkNF6cKV4hL%2FCrgMgLKT%2Brxo7lm4GhUj2%2BqVvz9wpeviFM6QHjDDzeDdLT8uT%2BKEhKLr6QIXGIq8aBAVCFrLelvXZe8usNkD3s4LjaCU%2FakDxbxrnv2ShG3EUv72vQuw%2FHK6kYvrUyxxxnZUBDVJH4USYFYNGsuAJxOGcbw5fn8ki65nZbsbUOMegQJj2UTEElGpu%2BjM0bCS%2FTh%2BKLGijLgHib3xQQi6GU9W%2FYiTXrVJ2ohuKEbTOxo3pwFgGlQn7d60eF5uSMMf00cAGOqUB1X7z%2F%2B51axjzgrMhnOHtitv4eqlerXNDBqkCfuSw389JYjmlVy9v747p8nEk28%2FBFjshqwBq8Lzv3cVRo%2BmFuRaIUM2fPezhMdCZrJE2cMoIMINZ1lwqnSJMiNjZl7uL3NzdPIs0r%2F2eJdrzrjUCN5NZv5fR%2FjqH30xhSpY9rRqskXKstFiLYLBmdY6JzRp6t2qAJrOa9h%2BY3beGALKGKlhGFn0z&X-Amz-Signature=549c1d0338f3157fcc04be13b006c8e540736b98a27b44ed220fdd060e20fbdf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
