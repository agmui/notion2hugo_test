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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=943e4e2e78b4bd6b60676240b6618a85537e28a29338e866bf5d5b4eed68a210&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=bc465d090c7aa47cd999cfed2fb1de0b9c5bd7fa7eaa4c2b4b0d686c4641823d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=11c9c96d389631a0211adc5239f039058c25e3e75aea030ff7cbe5cc1be3f961&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=b6e71450ac8e10cb0584cbabc9f3c3de36f08993649881f1b1c93d3165429819&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=1f2693743fb09480d4df9d559559b3f5d466ac18ceecad44d994a43e11f30dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=e52b4dfda99e457bde6d8c2d62e3ec82a9a4507a793470545ebe15cb67ca6684&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GE2JUUA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpKu49OFiyaoYLbZEJAv2ywN3CxfkelwfhcLfJQ%2F8W3AiEAzlq1WrhE7nIgFCOY3P53mFf%2F5XG8XwpEmhjQV9NQsVoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEQg5EwP2wbfRwZvnSrcA9S7IEOEt6x6J7u11EdPMGdAVIh4y356cO8qtcTb4WdiLDPMEfKfDVMOGEgJIM%2BQlvCUfXP6DkzqiGfUrLayj4R3dX8gprJsCeMcyE8%2BpcqghfMasRR9UMhoMll9eT8pCmTmhrQldXTqwucwnthEKkvQfE8OJENa3RMK02E71NSnS2raYwSdOtDRtNvGFx3S4Rq%2F8AQGgAZ6KW%2FkgJOmJBVmb8kcqo4F2GQLq1jZX7b4o5syud%2BLVGtDTuPfyCPywI2Bffwm24ys9XrSTxlSuaSrf8QtlI%2FipBxBAjxkNmnBjkO2UC1H320a%2F15PFPJO2K29joltWyIDa8%2FUelHIhh6I4zjXzYOMUB5VfasA4eMSuV32da2ZRw62yxEdTZmkYYrtQ9sD%2BZ%2BB6ox7o0yHJzK4%2BoVZfygpw6N59NTUVI5iPNjJVFEI483xm6WEzlvZjaLs8OI%2BsTYWz8xtUFl3al%2FQahnOQ5%2FpXJymY%2Fus2MKNLUrZXW0%2B48B2XLQOVc5UNrbkMZK3PLa8WIX%2FVEfbptkaJddrfX2ehi2%2B%2Fvlf%2BslEM1dmpk8rP4NIhGKhABAWHcygHLvqWGPPVmKqkfIQCQCgIwa9nWHKhMFC7e9k7CwEuokr9z2rodt6tiBHMJeWob4GOqUBcJ2BN3jAzbrS6myVqC2LuAZW0iteMPpWUO1E7VA3XhkxSHlw3m0QLyNilGQCNFsebNU0lt4uebpy9xcB5FvhbCnvVNsM6ZLoGtIO7MlRSYzBdKdv2se2fo6iutyWUR6wt%2Fku7vmDCZZBwg%2FF8ULfzuTEZll2b4IzPzK%2B1xirBM1t3FhNgCH0YFnGVBI2gpu%2BRz1LFAllxncxDA0YWQRM%2FHQjafcX&X-Amz-Signature=8c621119eb7f10208ae262ffc7978da027294c00e299146f101490ca75cc9051&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
