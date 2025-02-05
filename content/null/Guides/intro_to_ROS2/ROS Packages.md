---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=7be6592433b905edb2961b483eb74e1871de01add537aa4cb00dea45e2ed587f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=1e6d5e8ddb1ccc88917d1cf9b0f6750434a4315d4379816d45760e38ef1f44f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=76be32c9445191b0f1606be2670d13038eb358cbd0789c58466e59dcb8bd3bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=6acb4e7ceef125dbc6b361d0ed11f2538118641eb66fa688cc54626d274a8c98&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=6e83198db220310f6cb3aca642e0c3980fff5ddb25a93e79fc78dc9d51997ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=0034f9a2d84092ae4d7df0485323d945efff7a86c7459cf0240bc30b796c8475&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7QMRX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T031151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIDDGJ445Pt66Hbk8T1SyPSfGy0iCvxF1iAgeQ6ANTYLZAiAnE%2FC4p28WJdupwsdLEmd27dpQUlO1SgtM8VpPUwgYQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM7Y0ijKlZ82C8Xf8NKtwDv6DrxRb4hdv7uGWT5VCdC07yYM71vJEGG%2FX8MRXjbGr1aXTcbbVxbqkT7sQlIbahN1a1f6YL%2F40sY3Q6SOpyTJmVy5hPbfZJHXzIuqhWkMpqRGE7RfDzeXw5zg23ZWSetHe8Np4FBjWyD3r0cd7Kct8opbbJTUfrEtzNwm57a%2FBWSWlNDRwoouWHnhftSNrusm3PswzV%2F%2FiPsYNakwrQnzi7gkyvpw5Hjh3IoK81KQT1p%2FG2pFCnKWsAznTGXLWwCov4z5L8PAkO3e%2F%2BOMTeAxASkRfosMLCH6wverxh2hap5pTldwZepU0bNDZxZrq19djrV%2BpHVBTNUfJFisqOPAq3WAt8VX0ztrOHwYwNTI9IAjNPijs4viL6dUOi4rGf1g8UBAxB9Vc7ZnHdHJF9Qz%2F3uplsLzBeRY9XPhq%2FhV9N7kvIe1f%2By4z2La2MiemGaip0Wf5r1cct0OQLoaixaV%2BZ7Wu0UkKTzMbZ6eDgCaxhG2GLNecXgETqCasVcC9a8kQ56NzOOZZ%2B9TJjnRSygTzD%2FSEY1wCxeogmMaU%2FTjf8XFiV5e5EQscuF9IslAOa7UEkbsDjbBqQU%2B8ux2ygdmqJJ%2Bz%2FeTd1J%2BlRnsS7ZMN%2BC390yN5z5NFkxKcw0c%2BKvQY6pgG3rvRjdtj0u9EKCKlgR0gfAcAwUdAvR1rCLo67FMp5QXo%2FxPIic0YwicTR5cxxbmUSvooQbIV3vwJjAcI7K3%2B2yXlm4MlvH1J%2BgKn%2F2gvcO9pHX3p0x73%2F342QfaH9bMQR91%2Fd5GwlIggDm8sHJjaKlUIggaNm1R7kAPvdbgfbk95QsJvseqCKZeCGQqIapLkQu2z76xLcaamAcho9FCq5FeW%2BtgLd&X-Amz-Signature=e7349c17ba1690acccab7b51c3dd53cfea9f55878f48672c3adbdf87266a132c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
