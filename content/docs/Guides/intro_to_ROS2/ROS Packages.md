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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=a1bc11171a3ecdfc45ca08e7e0928938094e871920ed5dc94a668caa958d22a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=fd3b60a17de9ba0fccfc4a1cbf1efe73b6e7359269b0ee6c6c94f2e61a51ec05&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=cd97bb2c20d0bcb539a088cfb8e4881eb077ae767c899d1fd6d23b9c4e780717&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=354d890304fbfac6a804654b3335cb0ca6d23255bb14d8fbb9300071e1c6d0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=dc1420a33034da37fbac59b5ec4166d2ddaf0ac5411454019b562856081b19f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=76dca4f54ae325cc22aa17ece6a257fe5eae402108136acdc96f4cc015c1c4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2O5TAK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFaG%2Bvk%2BVymVrsfR%2Be8TqcmTxT3jGDYSEQE431Ef86wRAiEAqpL%2BHOJbDCsHlk7LIl2nSpTDVxia%2By6uaTX8oGtolAcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUdS2oULhFVHzw0UircA%2Fxh3uW9TzF1D2MwkCfAX1n7BakIf0WuXzLxDbgHBjRE2wOl9jv2GY35lrqC8OmxUpATkPVWwIIDwAgEKhfzoWcSBEicERvrHSy7VUztE7bnlRBd0Sdq4mEdyJ3Zs%2BU663jZIMXl6D8WNu5CySO5h8LMta4uZ9OFmGK%2FC6exFRmHPqmug5rhEUUbwxsHzzIcpKELlFk0vZshZdNM0RD7yPRmxs592cUP8xLSPbkMYpeRN0WAFqIFx%2Bu4OoUfb36SuP1n%2BB%2BhloKEiWyAoa5NHhYQ9U8XtJltqcD%2BbMczs4VrD7hsb4wYxLNr%2FITSa%2BSKAp1DF6UTsSKFqK4NCna%2Bw%2BvzkQD8bNSGjDs%2F7ZsZd55hGNImJ%2F%2BO7FHeQwY5g8mZWm%2FKsIbrQTHC9ny65G1xky7UO5TKhcst0PjHWp9vbjjR9gZ59oOaIWZ63G%2BVaC8eJ1e%2FcfSkJVghOR%2BbPtkexGlLvV5dn287%2BkbYPzV%2FOeFcCYEPs4CpSwYDQcHIh8ZgayfjibOUnJxpDdxRsFRooV8uZlAgCAMLW%2BZx1CKjPkuYi1BS50NTMSAYKcq7rkF5i7YNAijPoOPP15WzGKDDh7%2FhqthBUD5tXYYpZX1XJnWCRR4SE2r9zJvO9uWcMO%2FK6b8GOqUBmtv7H18QAUTGIhU%2F9SlRVpUJ3cfsp7MvINw%2BXIQVJV2vL%2FHL5ix6vDvc9le5b9yi5VQv3M7wzeZAqg4IKFP9m%2B87Rj80qPlgIMHrd46JxMNfG%2BJhe03iZXMGYhRo22OIpSlJvYvkrGa5BHtF6e2dBmyC65i6%2BNobtS%2FaROmPa1jD20jIyYGs7DSNHCY6q8P3xPxcugxA8mjaeWnKtu6Iytx%2B8Yuw&X-Amz-Signature=cf580ffade2bbc3e91286428adaeb70101d97ddb185250096dc9d6ca0f985a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
