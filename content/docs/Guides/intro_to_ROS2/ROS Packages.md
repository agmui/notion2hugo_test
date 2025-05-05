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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=276c4513f30511f8a2c4e975595bae9aa461362d8beaf9b584dc324927a50e42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=6be9b5ac36a01d4288fbbd67b252245211984cc9cef19d548af68b897dba2323&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=d6d574bbaaef1434939d3ed19a311e64d3e08c3f9b88f15bc8241c83c8fcf4be&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=d36aef45630abf984cdfdc1b6a2b318df0625d94ffefb030a71d393b2f4768c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=96b39bd6c954a98f85d7479a91d50d9caa244505379da63665b5791ffd9a0547&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=a680d70434e4d4cdaabcef918faaa29420a6b1c62793fecf3428c2d31013f541&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U776MO6N%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IiAluBO35B7TRUwA8txm%2F4esPPmmnfY2bfJVUwoC1QIhAMZueeBMEFnixtDbmwADrrb5iPSbGC0yapaar9KNEwieKv8DCCsQABoMNjM3NDIzMTgzODA1Igz1bOipYF42ihJfa4wq3AOdeMrokZMVWLrjJFPhIUK3c%2FvAgM1PCMdoXW6HSoPC0OGXgUuBhfdjYAThjny5FY0OiL%2FMQO71PZhSMXmr2XX50JZQghOhjODRc0zbd%2Ff30CSmQO84zHECYnAwEk85xUHn2XpNFK8ikr7zuOKMdhvafMzSlw4tK8c%2BVWrS9V69IzFhIX93S3Xd5FFP86E5Ry9nNayN8%2BCntnLR4EJ7d25D0s15C%2BcDRJQOfmchRdFATZNPYXkW%2BF0BF%2Fqcg%2B7WqiaZC0J%2Bj4LvK%2FzOpJa%2BI3uHjQy9y4NAwjuk8BoM%2FF3DZBptnMw%2BPBlh4qKZeRjQTYxJLmzArmO6VOGQ5z5AaOOIXhs%2F2yEZ%2F5mxYY76BCqm4ODlgAb%2FOB0Pn87d5KF84JQRTjoUe4u5NIALn7disvJJxAW0Fc0XtiX2KRoJfT28bgB8Cf%2Ffkhtvu1phWpPQ9pEpDoW2OAxQ0EHNQ0TshtRMlJVCqVBKwNbfh%2FdlxxyW4lX0tyVOoB36GWWDSAhm4011P9F5uZxvO39Zs%2FyCqGtjJE8H93U3j0j2APSZHItErpIAe%2B6HDogllTDkOFP2LWeCDCNnY0Yij5K5zjsovdiArg31qGz%2BjFxUMhvRRRNU%2BKxdSw%2FNLQBmH8CU7jCBm%2BLABjqkAYFYhmZNhz%2BYjklzrpHc5FyiF3ZwcVV%2BWISORqxbwO%2Bf24IOqdqye49helh07dBauq6DQyaYQ2R7HmZjY0gDvCY%2Bc09UDpflmFR3k6v4zYuEHU7zTVb5V4y0ouaWMWzuvQJx8RyDExtc82Wu%2Bj%2FxZRamhVZHHlxgP0lhHV27fFiNNdZ7IEy4B22cIdrDkoP%2BhL90IFkCiwEE8JEL%2Fu202Z3lWvft&X-Amz-Signature=779771acf1b26ed6844412dba4b64ec2304154c4599bfc61bcfc7304eb68f193&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
