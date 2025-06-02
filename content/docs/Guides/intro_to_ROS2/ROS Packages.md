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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=1ba43e410ff14010754e0cb5e56353a409b95298c626270d9242f592a165064f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=2fb10944c66df30cf7acdde5d265b7f20487e4099f7c029de1b8607205f48df3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=b5c68672cbab666c725efafc6b2fc78bde3d069baae8086c96192d18e38e733b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=a4e91a78fa993b3f5df4cbce6b3be09fbab87352007cbdb63cc690c130f83b99&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=a43d3bc62493eabfcca7026b66cb1ab07c2aff36669a10e73cee480f0ab0e79e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=bea65940ff555fd8af598d500c01b911add04e747ebba7fec7a807dcc11d5076&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LA5NO3F%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGX5asI255sMXfjxIfiUNOKg%2Fm%2BRq6tRBG4LUGNAjC5%2FAiEAxc85JTmTpWVuWVblZJHXuz8YQctoExMxXFL6ven6QYwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNABrVxK7zNoOgYg5SrcA6yZ94Nsj69gJl%2BWDahyQz4HjKmyiT9swYiSt8%2BSa%2BQ3T46usHPQ7GKMpSBOt0De%2FSkqdhpFDNb8Tn%2BBO%2FmN9fUqhqHaAXgpc0BzpjMPrXdE5Jg0YPvSGT6Nsu12aSRardfubSmzGSixQiOuim9icQ5kmcOyGR0moQyaPZviHmBhLKjM1Jrj%2B5ZScfC5LhttWjXPEgyFnqUJGcgOhrbQjrnbLSqZXMABVSyMKQcsxyHcYCUqbtDkvJmWLkKK75sHRl25x3Ra5R1VTkBB4E83XLkKLRfE5UNEdYP52OUrtUX%2Btfa3csQ%2BnOTG1o%2BHZabb1i5tB6rvGAfa%2BP6d2IiloJCq6B1kkTuO1mi3vG9v6i1EOrTftMl62BfB%2B2UpWnfYtKpOjRxJpYc5R61Ojjp6HeDJYv29d%2Frn3GhmuA19dYP8xsJZsfXuD12FboXMeTpXwlke%2FTvB%2FYgB%2BOztDQos3DcN4AAuI%2F0oXRpo1niyllYFEcPJKpyqMn8iltxuxXvT%2BBjwLD8KBVgUQDkbQkFO6jr6qI6z6pnBFvkKfaHyXcKzCFThT95MIBt9nlvocbkkl5gUAFqR1vYLS7VcyJ62lpSaCtTP6JADQzqIGRos4GECiQCjPj5WwlVwjLfcML7O88EGOqUBPRIdl%2FbOAvAsq2bYDmQHrQysdrpLtggbEahF4DWkmMVFBclHt5vYpIWxCo3ihOkZXaHVy8J5NvzfCUR16OaQfVOH2QxqErzfr56C04X8kmT%2FzKf71Rz6%2BX%2BhLZN0%2FYspnljGyDfsI6VihllCGlj2N2TLaKa5Ui9f4JLi%2ByN8Kz1lX8jVxdKCpTUSffFsr49mbQNQZwyS9Gv%2FzdVncZqIqxOzYYYM&X-Amz-Signature=75da776718ab2dac116354c974091bc8fa8b9f009f007271bd0163935b4fde0c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
