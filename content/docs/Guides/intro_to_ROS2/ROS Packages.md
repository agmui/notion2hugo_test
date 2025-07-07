---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=febf7e206601d214abc790c3e6f396908448f6716a5cbee547e0ef520f44bf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=d970221ed3d8ca3e4536e5243ebab0e2b4f39574b26e0efcb28c69dbfb6674e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=24c3fe4b978178bc8289aeecb13d51c27a81b3a7a147cb90f32a668e2f77cc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=f528f1341ec9bc6b0b685f66cdee033ae3e653bcbe804f1b9739d915aa37a65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=8879b166eaf65a74c37ff359a3876462892b282bc611602b23890fce2d33dada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=44c956fcb9f14e9aca3da5e4b15ecce275fff056acd762fd41064fba2a7b4a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGQJV4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGD3zDMdMItfdavtPF8V8H3T%2BJHrMVCYEie1rBxDS5HjAiEA9xskbcxX0OIuTyubS8thVTf44nJmiECqNWgzpTBRBYUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDANWxg0xTaY9e4o64SrcA0pDN3TXHfZdmse01rW9%2FkgRwo5hYSUfbfwaTS3g4aBuocapPqTvLPpr9mXRX5CL9QYy2%2BuS12%2FjbaoxFO2CgVAMCrLDBFf5aYNBkniw8Toxe0VKOcZxRBRv0QdTzKP7Lg27jAhOwBCjHbjS1HijLV0G9XuZ9AjH2C69c%2BkVGoqHjqA1WNDheqiYZXXvkAUY3rohW3zpb2EmfPedrxvS%2Bz%2B2RgFt0%2Bx1T4z6E9ZO1SjJZ%2BNigg6ygX3ueNc7%2FN8iep9EnghFTH2j1FmZORwjLeQgKhkHEYYBta21Ps7vsh3GWCNeels4rHBqTq2s7m3JbB55E6oT9nj%2FIKRUT5%2B6cot3tXlEiKUjSRmrSEFRs0XoNRih5En6rqC3%2BQImiRTiPO0Swb06aVTKVepzH%2BFCzUFrc5M4V4SIdkKp1TT6Lih9a%2B1jMSPuHqElaFaDzqwo5Z4jAy5JjhEPgkmlD84L1%2BpNFcJ5qX7gNctLkeEAFR1ej49ZBYm1cO%2BZFk2uB00T4rdR1gMiKY2lcMDNxJPtT031X6ooZjzEAMbnjGN%2BUr1X8E5zjS5Q6qXhlHADGtZGoiIjV4MAhIPBO18WLERNZD21d4f0TgI2vXa1VrdQbrdC%2BC8DD3XkqV81cFYBMIuHrMMGOqUBTrPLBkmLC7gOxJKLuqFdgyRRNq2hEKgDUBIqb1v7rxhy%2F5KVYx8Kt8TMVuD24W%2FEad1BMjKF8Tfh8%2BXnqAMF4guBID0G3Auzgu3djXlFnriMQkLiqHn9WDMaCvMywYtVfdtOWU77v%2FgRuG4OT8e57HiFGgGAtICv%2FK82l5kWpALS06YvlsRciVHwDP4S5m3jDDyZGuvFBr1Uw%2Bmmp5vRz37xKfYN&X-Amz-Signature=89f4229023f660aacdc85249a6a0c437ef18db33e4b9578254aec6492c106adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
