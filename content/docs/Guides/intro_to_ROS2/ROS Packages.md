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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=b1aec7c383e4bf2a3898c31280a4e267ad93c8f0ffa705d4b5bd6b62d95c3fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=bdf3a2017da13ea2c0aa3b8fb3770768bc68c7a6b4213504a6bdf7b3211b7ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=5486216798ff046300d348a55b2a407ddc39a2aabf06934701b089c5fd9db177&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=22ef9f453b2f148f91dd32c9bb85b5e294142138d4c010d8b40af73501384c80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=f4e34d255979ee037c05bdf7f276743de0f6e08dcc2c11a3337ec6affba26cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=44ad032a9c7484e9ea4c7d187b19cc1072c23e5944611a39d41ecf4cc576b49a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVEDMS4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYKU0Ue15z504%2BFNLwXL6Pq12rzI8DI9G4mwhi4TgfSAIgbk4cpDGmbLVcMNPYdQpTL49kh0jxgs5y2FcbQQ2LvikqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUuIBxvN0WFoIuXDCrcA33ZFInjqdCadmJBaDg8i9pLquUwUBwaY1PlV25WDM36W2JH9N%2Fr8Fxx8Rasul2x6JrZVsPpLxIa2Ztp6tE9%2FBU%2BYKxKdwTjvtt2rNwnIjYBQUPQ0oSiP6AfwD6%2F6i%2FK%2Bo6jJrkylrJSUXW7OIJqPDijcR5EneVk3ms1YNi%2F%2BOFcc08D0bYSRpg2RKd6kxziVsodvAHJ6MNkSGgqQWEpF3nzTfIbPO%2FvVjUjilIbcGSQ%2BR0G6jI714DLRQ6MifjVzKSjiapvBr%2BXoDODn0VuG7CsQO5ozuPArOQBmJ%2FD15IrSytUK49AqgNOjGomInEOcxFdlfZ79UhNqC2XOqRWFhMhvR9TDKMVASIXNHlxch%2BH45VJSUstK2R172E7zhNZ%2Fxz20XXK8OgQ4U0GnWyCmL4X62DJOL4hKAqv0Sb119T5prrIXi%2Beiw0ciIReqbuPh9tFGlGcqiuW6tBF4u%2BapQWgOlXFhH%2FRFXmZAPJ50JCsS62%2B8fYJdmUphZnzNOaa%2FTpUv2fIf%2BwtrQtYvtTgwwgvyLzhMFTcNJMYIc%2BGIwdxS4LYuspC1YgTupfM7FdTws6Q3qvutbTpCYJ7wT%2BznE6d%2B4%2BJs3ZQIM5mKonA5RNKp93F%2F0yOU4rIp4P7MOHhvMEGOqUBbaobGIc1Pbkxgvb0nZymbKNXSxvt%2BJWW8lOK%2FJIMCnBi2SVhsBdAl%2BediuuMFZPpmRz%2Fw%2B3DH1KifyEmsfcLaWWAoZ8KIFwcejGJCmV4RNWVK7ERh3uL93qpolHzgC81PLv3wIQbD%2BueSsER03rVglIaywq%2F70kQHQvPXhh9sNVyUY4eRbnWU4v%2FhJzc3CiOqq2Goj4h1075Q1%2BOYAzRj%2B7yY5X7&X-Amz-Signature=f773c9d22f8c34ca92438b58c2f1eecaf4044529e09ca4ea5773f95fc824b81d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
