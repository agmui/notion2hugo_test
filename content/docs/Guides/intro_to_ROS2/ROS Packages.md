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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=ae5f41d3222f071be76f3927ed3fda408f641cf2b0422600a779a53b341f6851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=8638a71867d82428091d22f567e69bb02dd168bfb5687f7ed2f3db0c6d583867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=fee1dfe9a5a79bfc32033eabc39fa8b0dc27c0b8c8205b4fbb8d5aec221fbb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=779b128a433178eb54920a482724afba5967ba5295f714dfc5bea9c6768468fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=31e7fd00d6d7e8c6db3dfd30b8f0c1bec5c55ce267cd781a052d71395016d40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=fb8cbd5c6af2e779fe0f5490bc8782943c5aebaadbf5d1991018b32cbc95c438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYK5IAS7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDLmDkdXzlLvt7Ai7aQpW12F9fLz%2FqoV88Hef2IXlIZ5wIhALihCgDNC9HXJ7nsZTs9CqkspS77VsvOzW7VvFz2gEQ9Kv8DCFoQABoMNjM3NDIzMTgzODA1Igy2EWNwO2z1ZC%2FF6WMq3AM3hw4XD27WR%2FKv%2B7Da3H3MsFA9a1n14JyLDhoeF%2BXnWULXnfVxz%2F4aHg89BwuYdwOS7bqDcxQWlmQ5US6SJ3g4bEmstGlDuqOEIHKldPsiY3N59%2BNst0JQBO17Kmt6up%2FziojB0sn626MWf3wPe7%2F1DSgqPyIGzLIZh9737bKrcU7pN9lfUR4oJtuDvhpbkeyzA0ogygV88Zcmc4h%2BARlxXvXwS6QMQaERjYiB4hLCvnJ%2FACsbvWQMeSjBMuMnj%2Foi%2BPP%2FUyAgp8slPLC0iWSiTY%2BjNkgVYudnRPJSCxKlDa%2BJHkWRmKkZi73LsgSdZSu0uX6bTddqTrLih1ByMJcvfRDCekTMrt40zlHHsoYXs4yAKf6sC7Rmheux8laWG4iAX5B%2FBDN4L5xt1n1m41aW2F0pjxshYzD1A1hae%2Bj2T2pobDMELpLIodHUv8FkkJ3uoYCwlf65eLti2HBpwK5OVgQMt1KXfj1jLZT8DsdNSUlTcYALdXohFEdNtTY%2BziEVNnTn0FOayTT7rh0lI%2F3iBiHDiKRmRKl%2BipsNieclT88g0Miop1LRAyW8ZECCgFT5tPfDD%2BYsnL2M1aDMWsBkPrCb9edm361zbrQdkdZTczjZErnYGF1GEZ0nsDD9s7%2FCBjqkAU7wO5VWEyixy7%2BcT5nsOQKQdcNqu9lRp4u4hbURJd%2FA1QyidxR1E2r9Qpxr6Aw8Iec0nXZEg8v4dxKw6zVdexxuS3OtsHLseS4o20BDf151awO%2FbH3os9ZNylwEwlcpJYImzr6FISCk0vBSZILLLRd5x%2BysORN9iieQqchv7BfCTqVKeA4FcyrTgoqKUihEmJfPVeQHqm7YTKyGao6HuXXRv0Lf&X-Amz-Signature=f068e9839f7d64e45512f4d0132fbe749c328ec480110946afde7f1174aa45fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
