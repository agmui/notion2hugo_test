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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=f2a7961076784dfe420970390e8d5279c17d31c9fe2d0c17852795174e613523&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=481d823d76aa7985ef73102e61bbeb0e4f014fd7c9056358691c9bd09d1142fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=08406f7c685a355731c14589ad424f6c4b419f34d07c4d01bcc19d9a7ece9ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=8ca57d40dfe416fae3f0aa7e9b81ad3edd9ad5dafa8193e899024b52db98eb06&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=4fac6d82b13f5fb643d4f826dd586f29f7c56ef4557f4529f67b545dccd0f2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=f78b6c8f0b90eefd8b40ae1ed5d461d91f9ace63775e0b0b7e60cf0733fff273&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO4PAWU7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMbeuCpeQuXzQsvBWhqrRVpVhQrayA%2BO%2F1GQs%2FEixMUAiEAwncpIJuvNtm0gcVMeIEiAUTCAKNPC5oqCWijpc9SjEEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUTTExH1PkTfo5XqSrcA0SuN0PrvXl6qWKFjAWF3IWwK5oBSsAhlE6o4eS8jlM1x5Hb15k7PeGHz4ZLnnwjboLbdYffahQlGPFNfQqd%2B7NwQTGK%2FWTjdiBSDl%2FtDbV4gPGcWVq2PWCGU73kaU1NaBoSH2qezXw17JMIYICN%2FtEgaC6YEYsxVKWjcDuj69Y%2BYJDTH82%2BTOkUwK%2BEI2zCWCnhwAmP4Nl8jKeaMpvnwqGJp31LAv8B%2BwPd5HK3lSDdydvfDQGA5mavA5fzQ%2FODTPPVuQXzjgWDoyQ%2FmfeIxIVOw0b1NnPFvzCHuZZty9sOEiTzm7BiWhenTm7kBuHRMQ3cbncORjqtsFMKdZAEk0ifpOUxjCscc%2F0qnIedca8qnNSxDuZuJ8usdc65H9tM4wmHpnGLI5tbjqviTethGRI4FyUgToI9etwhoAHC5DmLM9uUVSUd6B8luUpA%2FvFVy5mJ8qHR4zgAgTs0mkfcXFax7AANAwPBT3Eab%2BWX4b7y50z2j7%2FNl7IHSURTNWI3oZoiydKcYdccKIjrkMTCN2S3EZbFYD9Qrvwoz1JKM25T6rJAZs9qaDX5qMC0Q3Kw2ubOSrj3UjrDa974u6GyxNFBKbmpWvXVREc5UkzA5z8FpPxUGakHQ0NKobJqMPPKgb8GOqUBEeT8OJBCWlH33vvqMpiD9RiDjmcTNEC%2BxYU5kbxpdZCcDV7P8sbgeSylFfR%2BtTf0hRzkxsuItefTgpiuHbCqDPAZ0ds9hf43nZIVi6%2B00tI1x1CxamJHXGqzKwkpo7CnF7rAzZAq7oVrgWiJJ3kOXCE0FkS55mTXU%2Fw5Xna%2Fc%2BBZJDhsn0eZPNUX66MNqbx1CR8xpePyV%2F3IaBL1kRn9Aphalp5z&X-Amz-Signature=a5997b952ff4af946b4953528ff707271c0cb0fb8269892ccca5211cd02aaedf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
