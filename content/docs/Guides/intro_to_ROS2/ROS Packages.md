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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=3be4cb4dab6b2833c109d3cbcfde10e1cc9952d46851f0113ee53c8faaf9861d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=1836ee8ca65fc1096f11d5f0e2a1cd265cb6a86b018d40a9800ebf8b968f80a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=a75942977b97cf5bc3274d25b1fc5ea366eda7734243fb96720552e3610089db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=04a335957cf290a021aa525abcc6fcc5744865dd2af642ed45d3018fd7df03e2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=139b53a768e18ee90448419b0dc50eb9c46fe16f961e0bb714fd264f237df83b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=78b6f15e6b7243fad04a8b7f012f5ee7c84acefac18b112b3a11d7cfff7f9da4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UBV4XEN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBrCsbo%2B5wWAOehYJNe0PYRNLmJ3Wfpy7govW2XfYW3bAiEA0RkEDSTcHocTlcWBSAMncVqxhazXnQODDAHwNFLDqBQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGybsa0v3ymOeq0PyrcAw8tQfvjAJ963d2mxqCc4WAXKdLq%2FwvcQZjNQI9Z6Yx9hrrR598KlTvWu2N7rRs3WT%2F%2F%2B1ZSlDpIrFIu367wnE91J4k2G9xi%2BSeifSqjww2l9w2ag4BtH91tpVPC1ga%2FDz2JQAY40iBorifdtEGXkSlPf4xvGC4mtAkdnqJ80APGEDDgzAMWSHReyqy0f1JjNIj%2B6AysP0avRknQ1UnNyi%2FS08kLNkaEDdSU5D31SZi276Y99K0lmsivusdBCruEI934YCXJQ19PHzjYoYos723%2B%2B0dx4kVNcSbbpRh1ZuczlcJ7TNGHn%2BfxWkOfXOrUq42Nw4lzYee1iZ0dPzcmVc%2FBQbf89cVUJcI1Ft6nHYRLQO99QLUcv9b%2FGZgcv%2Fq9FCC5CyVW0ZqTpGzp5eTOY1rvQa27loBpia2QuHcxKqPQfgCd3gRmw2CVzynpGOKscqBEgW7soYgTdW3%2B%2BrbmK7T5Woh7utN9tOE93kjZ%2BvL1ZfAJ%2FMYe5mcqlEsz%2BtSc2dn3jL5IwORPB5%2B1n2amvcMjIB89i47PjBRxVVpKlF5lepYBE%2F%2BeZlwTgkuDH77lz%2FPR6OusA4R2P7rY0vM2iYIKdYZOCcrqbtGzp9xfGIWXTTnSRgWRtueN0USEMMDVm70GOqUBpQK4paZGRTEn7xHJ%2B40%2F54iIDRK10qfoP5qWuMnrWvgLtnSj5fq3GvOz%2Fe5S9TvJ0Rqp1awfmnlhy%2FUVPYCz0JbO90aTsh7tRdIBTRc8ztHoLmAMx0Qw7wIYM2QDnV4OkLs0FvvFwMAKa6yekqEzPlC8k0jYLfTYGtaa8wCElpWemw0FFbT3E1%2B8UveUJFeqRG6lYh5wEhws9I3QEDvnigOQfLPf&X-Amz-Signature=4649ed099972b57a7355d0b5993085fbd39b045628f3cb0e07389e7b2708c591&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
