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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=fb53f6b5eaed1337784469a80687016f5e9c5bb589d5fc8070c254546a2e3f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=22e0a1d1540d322254eb0ccffcb3dcffbbe4ee2ef4f752342def6f7f34285bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=2e425d7081e6b7f1b084b0192de82e32983a3073374aa9e74849034485aac576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=6cded53cbd92612df6a6f4f8350c01b17e531697ccf4ca6e2f5d9337de51b344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=08acac8abdebf0d3c55910b42a22a7c7f4b0fb894ccbecbcc5a78b0b5d5bce56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=c57bc0ed2de5e8bd92b3be813b978a88e53bc63927a5f0f783388a1f74d3a47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPA2EP2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC4FunG90iKGfkqQ5y2RTXFJfnwCn8%2FzYaBlYAkxFnYlAIgEC7FDqkIyZyEVdp9AMk816bErZyyymhhZH4Up3bAUNAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPkHhzynHHqRMiA5BircA6xJ%2BL4LLj4NWJ8wND%2BdqHvu%2BsTfheLeYEP8Ss0gxcRjP0eFRAZqrzVIwORcJ02T3Y3sswZnPjEpveH4Xxo3dHo9UyELy3EqB16zFl8kHTcSXWGZmshEEDE7M4MpDPH3CakCnxqJTAa4VOfdTFT21PAX%2BF2JWSeHamW4hirDzuB0e%2BGKLAlnvmTt2ngQ1zXM2L359y4PFGFHymEMW7lEzGYQu2%2BeAIdO5OQdA60x8%2F3y5O92zm0J7X3dFosFfs7CMLiy4hYbQSEjITO1G8WMzBGd6WjCEXylZ4AKPzuDaP3rLAYDH87xNu4bgNcTEBj9HNN4dH3t9TImSqozPkqWMCOab%2Bxhny7a9gvvEFq4iCZBgsfzLsBtQaxGtkcZW%2B4OqRpnvRPKs6HH7kE2N0u1PuagEnMekg6K%2B8hzha3hzzXjAVwerufN3MLKx64%2F5d%2FnqKVW9bgjhoAXBNZFc4mR3g6ZMvku0tplPp0zVLAf3RjjoP15WfCdfWXiEFVnNsjJvwmXzRa5QPzVCMJB3oeWwaFQlcR9rKe7NCwVyrk6fcxOXcAsBG8iYv6b8pxMnEsuMhiLHVQY0jfzpTjCd6L26ydNqi5u6eK18fUdsZQv3z7UNxFeV%2Bk8ydPxCunhMMPMt8IGOqUB7x0Tlk9jAAt9nkqqan8fjdTvowfwmuUHiayxOltFOhBK%2FSMkNY%2F7ElRPlAUtyf2jMB0Q0PdCDwyJWdccA7Stszy0Q4cNqFbA%2FNpvIl2Beas%2BNHsUiTKSPtecyTULBeCwikY2RQ3pKLnXrVnnk8xHylyFl0sygcSyNV9lERqIv8J3tVnFehBBJl%2FXX%2Fb8ZCs6MWZkbcKgRriOL4XTC%2BUgv82uk6BM&X-Amz-Signature=d8241b29d6dd0f5a9d72ec8d7ed86ad62a04656518b69835280b0fe8f6603d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
