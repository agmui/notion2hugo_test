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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=6f5360d66ebb6404f74dd10bd65fe011c999554fe2b76f8683d90d7b12077f57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=b0149b1be486cc058697dd0c5ec765123e6315beabcdf785f0233db4f8a81397&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=028ae37a3601736d88d11869018c673e2390fc640a0e0dfa378dd02593f970b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=436d92cff558133f621f1eba351eb228bbc0f07e6a3a7c16b0f0a26d44af1bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=52264f53a5a7878555d8475d281a2e98b47e7237a30401ff86d40de697524a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=d2d02f228313906148e3bdbaa9edacdd034f08f01785a0e49001536dd64be1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XECZRLU%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOlF4TfKXBGsRl7V431uV9Ex1%2BKjFf%2Fltn%2F49Q3CfqAgIhAK2C8CnBS4FKxwLM10K%2Fd3Jhq8pE2yBImWMxtvd47B%2FgKv8DCG4QABoMNjM3NDIzMTgzODA1Igy6IspPApgnt5kRRzwq3AOUmbOjj2cho2x%2F57KXDeVvcnXqa9NGMqx57Xrhchn2IgPU9ughBdk7zuAX6Q9EpaEj%2BS5fH2kgveMS5lrjS7eibv15Iqn9XY0v2ccva3IdN2P5FVaC4uiH%2BYdXLoil8dvmje%2Fhzm%2F5ntQ2GKLcsJInOaCIPXAlLHzJrW%2Bk1GJ12sYqz9FpiaVtc139QAUCo7%2Fvxysc5wjiFvgBDu23I4GvUH5oiqJQyUwJQ3vUdsBA%2FsrK8toUBJ4NMSp1lexssUdrZc2VkfmgjjYLjl7eyKnt779M%2B2JU7rs3xG2s8rvhobgqFvDbRETwB%2BDdsZ3E7M7HlEQRS2itTqSi5lM%2BONN3eJdq0Pr2ZwYLbujpr9L5SZ5LASUqx5A%2BgCrNMufPw3UR%2FOOwpViTAunmhKtQTNsEtidLPXpUp9mynl9zcBNz4MCniHMivHpzvbCEVf7fRLeCluzWX3dUCYT4OEOqIUdV%2FmRIWXIFUcBIUWbRM%2BmjTE5lVbVtVbTCzLCrf0PcIfX8gLJys9zbjE2CxevZA7H792DoFV4sIkHNDQ2GR2S3oNzemJE3YDww0zsv6xRt3KDxhDGd%2FYoRAUx8%2BuBwTClws4cHszB46IdARuMjEKRTL3AZgTdLAMPn9dYOgDDdsNrBBjqkAX82QJph%2B24h%2FLmw4ApZCTFtw%2FBS%2FiFbKAt46kFNJXkjV%2Fdho3JYXp4PCZJ%2BbJBoDM2g6THaFifvM6XB%2FYpKFK76P8KgRWrNKrQAZP2MD93YuBCOS8KXgzacutyLhPU%2BySBjzkiSqcQoSPqIBXiCPpnLeRsvtYe8PcbUYfTcN2BFwGEb%2B2z36BwUj56kJnjatM6vNgWd%2FzTZLYWBOeEa6koXH9fy&X-Amz-Signature=9a5b86b141a422d0ff9383cdf0b5516b94013820bb5741b5bd47099574d0fdc8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
