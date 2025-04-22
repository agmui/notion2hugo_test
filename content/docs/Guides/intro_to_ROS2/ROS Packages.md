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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=1952d74b40a62a2c440f3e6ecde2640f956fe29d19ecd603dbfe56904596c290&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=02810c7a0eebb2a944de355ae7e1a4c83c3629b7bb4effbdccdcd2b30d5fd173&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=487853577a4c4783212486df76855f73ed09befc7e6d29f3057ed2422a90d796&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=4942462787e546dfd8306bd52aa80b58ba7e0dab01ca275c890a2e676a270b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=da356a75a46386f30d1b3bbe7b5d063ed5455a04f9be1475488ec26065f3bc90&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=7528bef3d48c543e300fc27091c99fe64a7817104547084ce446b54d45a4762a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSXJQZPD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC7CKwqMQkJ5sZI7agEEmFnsivtCxDRQg0BivPv6RmeZAIgGLuDcXGW94qqcJpU6Y0o1mVzFcCjVLqrSUEfYaUhTwUqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP2g9nv3Ah4vPhrBSrcA0USORN8MNX3IjyLUIPowLdic5tTWhXEnwPgbzD25PbeYDTrq8b9rP5FyS0QoC1e1kM8opvDBztgadcX45zwOsPtlr2e4m1F7fjIXoo2r3CnDYkOwdDXe7bFvnUnP2mPkt7p%2Bv9wdct9krXMNZWCD0VO3MxLdS7Eu1Xyij82fFLuJG%2B%2BaU0h1dseETd1%2F7kD9%2BtY74rgzR4ZzMA5xGSFkIp6%2BWEEtod6xj%2BWD31THPxhCCHSIEL0ekaHzhzcRTg98z3DBOeN8NDs1oVducvIETRTqY6MfHFSoJmXY352doNDTeey4k4ZEArcOh5CNZPAxzEzMltSmlIuGDEpfKiUO1%2BCioe2VCAPy7it9m1driiR0T6qw9o7b1M13Ub8FWGraGPo1HacMTECXdTkBf4RcmHRnLqVS7PMK4LjQNDnJFDB8a7%2FsNvVWuS8yQW5phOwhZGV5fjRXkcvIm9SaYDk6SgCVwBvHQgjL3b%2F2TNAKzU9wrm8y%2BOEMdboulN8r5ypc2ium9ET2GeG0pzF%2BBf2pw%2Bnmu5CigN7BeW%2BKXEGV95F1EgIKKGdM2jmn52TdCLjEBoQXEy5L1iMb120Tg%2FCgTVYZbxsg5z1Ns%2BqQhwD8pPwvxeNrBdyY26DE7n9MJyjnMAGOqUBXZugWzi9tNfVTv8m4My%2FbZJjZnXJgY%2FRoujSvTyz0qdW12KeQEhnTrSWSDnFwYr0aTfwetISJijZy2HNmB8wjsubPS14ZrdhtRByUpf2M1Hfei0O%2Biv4%2BisWxcv53TRkAr90NLCuF33CC3sIPCNn%2BEG9FQqxUjlfb44C2s2IwvGu0gX3p42XB5PF27jCNtETWT4e04n6cmTvmHxlmp9Kd%2FX4SMKf&X-Amz-Signature=450bc487c6e85b267315cd3488effa11695feb14aa1bd1bd523389f2be2e1a00&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
