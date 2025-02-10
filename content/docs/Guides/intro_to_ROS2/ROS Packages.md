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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=13ce1904664584c01f376f6083c577b81b3726dad0bf74222ba72a9b44116caf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=bcaa5b39d290cdf09367733310875f39f18f2db9c98dade81ac2f41b3b4f034b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=aba27a18bfda09ee2f4347ce758c3fb38f1089c9bb5bd453ad11656c0d823ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=aad009c506368452e8f6988ff695bae861a968a2afdcc0925d56e5b221fa8597&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=e8e104687943ba5a42e10bb5cbf7a07f6e0d53676f2b504ae4b005f2d1bd1680&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=0dd02711fba52c0d1e0f21aa871cca16c788141429422dffe5bdc62aa560db97&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ7CH4I%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbYsTqjh%2BEpJGDS%2BK%2FS9vDvqy9kP3j3AjJpizkMXDkQIgCOBRPK4ftHphyZbd%2FFcJyS5acG8%2BlolNl5cA32THm9gqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9OWOZr0S588fqqmSrcA9CBIUL2uHHcgTbCQQ%2BBmzHWR9owqWjpWdbf4XZua%2FbT%2F%2F0s1w1d%2Fl9%2FYHJU42zW8zJVw2Km0m10HI%2BB8%2BJUEcpymq8SudOiE59d1k4w%2BaSOTd3%2B8eXD12dGI2fCN55j0QGheGLz6Nre3KSwfc7v2jOMJtOKfTgjbDY28zp3Fd3AKZq%2BU%2FlysS73PMO95p%2F%2Fj7WjGWNaqEvAavDwF5Aa1RhfDuYI6ENchArV%2BFu7CztgnLLbOOuCwON3iZCpM1dIpqXAUb4eFug6J9LdS5Bxi4Qka7CNLcI8yOrHSkKIZkC4VvZX2prNENVvgB8Hzd13DRWk%2FKxVPd4cLJKZLtoL174h14aWhV%2FKgbPZ2iHfk8qNmYwdS3Z4DUGOXzulSiZib5MnEbGkG4Q86gGEncx35xMaPoBXae9jncsi3WJSIBrSi3Km5vNdvo%2BguPKEh%2FNTuZ6wej0pcLOzSRUOcFST3WqRlF%2FRpM844EuCCQ2A5Nr5GLuqMktGeZRi5Id1s3hJJHvFJ%2B9S0hZA70XKNJyOS2aJYa1ne4w72%2FMd%2FsQRi%2BFlRb66WGOjNSSqAAHRk8uKDM%2FonWh5sr4ZewsDrRnT3DG6Net32Oi9sev8IPYcLqnSBn6RJGtHzfPvqRYhMK2fqL0GOqUB94CNyPizUlw36f8A6tCtXIVqs63%2F4Ffjd3nfZT4BjpWKyu0JyWhshOFOtgczBa7rwWqDfEzxtbcjwl%2Bm2QMj5O1wuw4thZz%2BdYmR0oOWaF%2B0DUTfrUoqVcHVnpFVnkfCXmpY9ogkHangkllJqTEdOQIWXZGDxg%2FYgsa94jtdRi1fTPdmUD%2F%2BznXLBpkeXMEj1TmfgrP8YT0PPkJev7oCPkkljheX&X-Amz-Signature=b7fc47954dfdb08f8a1776e3cdf53becc7aa345b7c216edcafc23c8d8b2648fa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
