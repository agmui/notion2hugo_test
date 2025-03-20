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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=a2403b1b75293458d39f798d2b4722c422152c099aa64dd832235eb4e0d6b33d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=f6fe643ec4b733e9933bc7ea17fb5ee99ab3946899fcd7a12a61eac0f384005c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=b4cca088fdb5f529bcb88e39577efc71ba5c90e35859c664891eeffbbf4ca48d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=02ca1e34f75cb0cb4e2cbb08175619d0e23be4a366c0155fa3937b9076cc62f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=768072351a9e8a4f952033639918897c2f6a7ed9c2d9f36dad7d41ab1840e1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=5de16c74c6b35bd409a98b3ff74912891e3d1b1db9779ba29b359898fe10f945&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI323KHR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCwpel6VlEU6f7Ltn6xgxInhhJ7tI%2Bw22zJaGIA8wr0CgIgU5XjVH8PAUVKXMRBdoKEcFkiKESRRkXmpmeDvyPdrvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN8g%2FJgRRs3%2FfKzdyrcA%2FTGMAciSwknpKgKw%2FIOaEgHhkFvWKInUyAUIOTyieeOR454truEdOZGT26sOci0q3ENyMRlZqnM%2FR8iuv0H4qwg%2BjgIeLqMV2A1%2BVm0TIB%2FaTGqFLHLIxtmTpODUheX7EwPPiHT%2BFvou%2B14URAFYlADtSgolZc3QxFppqDu2kPudvYqmDhLtNzsc%2FeiAeU34edhUToNPbDFXomCet%2Bbu6wYy5DdVCPgvICdpHbEdyP%2BEMHkvFMBNusu6CEt4qcbNq0TId7XrDyADXCy8QloetzjGIumzoUdhLHBGR6KSyTcHkzESYo2o4QGsMrseYQXrjdxdi%2Fcz4l7VbpJi6cMf4hGtRhzcFPk2bfF3My%2BZEjmBW3viBzKDVTqu%2F9nQZE0GEjml1iI6jNsrIxgxoKPRorDQxXsz8wQFjpuIKQ%2F7ykD%2FZSkPx4TvSs2DsC4dNje5BD7wgHonqY6xSy8KN0FjtJZ%2BDD3Zv37pJpQXXSjwfeeN0ZLK2NVmPGmPy7gKEFJSzGXJG1E0HPFSdTydy6lIGjrSi%2FLjQ1d8lsnGXLGGz5p0lf6n5iVrCknD960yng%2F9mc2cMYif60VQXIPzpEzqCkjEYc%2FsjbB%2B3jrVk7FBxEzuRAYcPbaodO1ZoJQMLDl8L4GOqUBbQEbI4Q%2BAYk05oHpqlqCRgBUyaVVawVYcWUbg8%2BKnf7Sv0yuR8mX5rRMw7noouiZJCMviTR1O7m1%2FKkiJCu6Cbu1XQZ1SSEEBRGbRYhANAEmLrdX4AsgLv0JJA3s9ETbuj%2BgZiScoeHbNrvo%2BTPbHzjsRkGiqNhRstSm5DnaUKeiCi6scw%2BdjIlobhD78ot6optZbla978gauM3FthFAx3R4ffZy&X-Amz-Signature=edb79d7e70ae3d2e08fbc55304883b5e8dbaac964e7b282538e7922670de0fea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
