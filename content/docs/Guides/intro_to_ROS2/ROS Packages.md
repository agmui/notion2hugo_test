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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=f908bf7207443bea8b5a6ec5543634fddd3dcb5d424ab19ad1d81d8f47be20f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=dfcc4de799ffdf59b9179c45cb128a43a1f8418c18ac9f2f2e40f889c5c955eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=084724457c1a780c2af345f3e5c6067365dd1284a3d49ac655af13b11a602a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=feb1ef8bb08a1a8101e40bfaa8d8b35e5a5221fc0344587937205a3ba16a346d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=00da111ea3d040513dc0bdab1a5397634f83ad1bfbc9823d054b6db5bee4bef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=af2ee3a273d1df4bb013e84a05b434ce7f2985d5b0b515792d69c4b2974d0d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VYCFVMN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC3HdPSNN6gTSsIvMAG9MLzQx%2BngcDobSvYB4MWksio8wIhAOdIZap5VjS1zGIKRMrJ147J%2F211mDwi23u4hzSr%2BpDpKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZlSolLE5utkOwWA0q3AMmvpOEFqr82xpnvBenjeXMe1DhAA918X1Yxkz60BvK114xhnLl9fRE1R0bHh7yBICLkFARxTy0xixBqq1hDwM%2B9vl2Mm9dszrvk0DnZSGxvI%2FnD3fRWu9L8U1T16l81UsR4Iuif9Qv%2BmwTFduOEwwA1yImeC8kza9PahYQ2e474BNCXTwIcOk%2FKjt60usQ0AnmoB%2FLSw%2B27dxmU1RfzOnEagiuoMgNryeps1ch3CNQbdJQOwHM6%2BvFUmNfEsXcPWkDXldSyagWFTSMcut9oQ0aQ2nG1F%2F3II6wKYTu5dTi3SgmBjrx8xobp1bQvcvHeXcGPTPLmymvmr2i2mRKYy0fGwV3UTY1lNUhgxNs3BGpJISc4joUsNaMMYHnwAJ5RLk4xFtV10rVyAzU1fO8YeuWBGp2ga%2BNqVyUKV2z2uBwMdE3ekYlKn8a6a30tIp3PWXDlOHPFDOe51WwUVz1eAzcFyktVfkVh%2BBVD4oV%2BuX%2B2v7QSphICRAU304VeYeH37xhriykeQejj92BqtbKL%2F%2F6r0tka0DsAV7%2FfmWxCMmxRYjPgDWKjyaxKQFL03eP4tpXHGbnNlj6ezlrG0p0UZVLi6CAsYJ5SdMbobSKicrejQAfikGfVoFobeyPfjCqh6vCBjqkAT2mbOqjGI4ZnB%2FTbDOddQO7JQXa%2FhCGx4g4MWzI1GWIQOhwIsoSBe%2FCcO%2FOF2zK6S50rwceE%2BtRoSwYsYjNbYF8H%2FAY0pZQQzCslurUXbFMGVWJcckqqh7smxE%2BUc6EdVNqEqNHJ5gBM7uixQZicLgEdGQni5AB1NW2%2BXEcahhFteatyE2VA6lbjTgIvhb9yHg8SGf7drprj9v5HVunC1APOsth&X-Amz-Signature=69ea50f8c67b62babd4e08414ced0b7e423cb073eebd6c305a26def6916d6fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
