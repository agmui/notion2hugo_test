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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=4f9b7bd21acb6e5b0ca2c142292336ea2f122c9bfd403826cfe5390375109670&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=c15e34fa48e545d77ed5d9f5774ac20f7d653426d8ee922cdfceb4915291de04&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=f70c5c4f4026f18acab1b73aa94ba9f76cf38dde1a4217f2c6ad07d0cfb3ea33&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=894368098e21db40bf0c22ee80c53ee8040f3dff86bcf7ee9e8e8f343219ee69&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=7798ead92c7032c9edaaf9c553a72855110891fbed60b50016814e9acb0e7592&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=172ea5a965e68408fd584d551a288d1231b6aeb36191da04c151f4265274c699&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RER7XAL6%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGkwP0ZUPJmQkL8WHk4N9NwPwTm2Db2RLBiwCfbwjuqCAiBOAL2lHrYVaofj0mpBPJ%2BVHIQV6y0X70TvDqcaQZTK%2BSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu%2BcMoWyCHB5J0zO2KtwDLpUV6yQmf8srIXJePTBZrd0HaPE2uG88lpQsnHHJuYLJXllCey1HOCztdLrdmcZIrSDn6GNmRU76QV%2FDdqGUp520hdtRyE0P0lAlpk1vVxg4vicU3QRPq5mBB%2Foboo1SZJiuZS9mzrlApzLobbcMh3T5nkmKNnbgifNRHfOSU8jYOHxFpx74nohPD%2Bds1%2FOIBC%2Fv9FKJSU3XwwcxU8gxWKnYWB7Ce%2BGG5kQJ8WbvdDYL0Y1U72DrP51Ml%2FhM%2FptmDkaklbQ4j8%2B5t8pdexLuAVu21bwYQkeqbIPdugySDHX6IllUah4eJi8%2F9tYHFDu57N7BqE0qnPxVo8accxTi3F40FJTE%2BqQxA7%2FYIwG6knduK3jAgxJWhLTeFiu3maRNm9YavK1HjE9ayCm7WYGFc0Z%2FTrCPIOQqhHTA4Zc1jS322TShBW2T1YBgY%2FkEDQzqTyQ%2Bj81xzJY7KwLStepWx8UHlsY0mOKorfqpKIZvflWv4CC0rKE%2BkUmrPowlrmglpeVL3wqRKyramu%2F8OKevNYoC36o2zfgqR0yEZdOgDqGapky3YFsgOlxYqRz%2BLfirq0PloS4XnfYEVeQSuwKIjr2yG%2Fewt%2BIQCD%2B462KwABUgyhbxsgyjfVW9UjEwspbIwQY6pgF%2BPUNkejO2hN0LOHeK4weHHvhURk8w00sCalOrrPanb%2FnqJPnnJTuhZ3%2FNnyUtnMuZ%2FlOv7XmNpN9iy8vBIORFufplRGrqPtGHQKm4DsNxHhsI57jwtZQaEf%2BkdDInnarjoavUio6T6Ug2Lb%2BH42VVcd%2BOOAIOjl1LAkhcrA0IK2utNlxhw7gg5Z6Wj6CKyUQPtTykhzWICLb75DYUzahC09sBRQOK&X-Amz-Signature=7e13a88a928bea6553709b10c4ce1ae503bc055a786ac11bf9568bf3f8a2b0df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
