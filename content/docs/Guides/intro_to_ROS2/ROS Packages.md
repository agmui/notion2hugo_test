---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=f9f96d6410772ac125d87014e27306e4bafe1503097e2790df67c11824c0fd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=3b967274a6c5b951fb3edd9c3191a37a0852eee1672de781315b557e0424914c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=1d261dff8d7dfccb738bf3ea6879842b3641e13c79005021b8e588cb076a052e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=b7da40f4fe20135ed86d73ed6bac4b87ec7865158d5b6ea331cfad795757170a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=0e57c39fccfb8d016266eef8444a8ca0a7364809ccb71689ac6bd3af94ec15ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=63262463e3a4c68e29f148691b5e9583c3367ad88ff4fc921652c195f3f51cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS467RP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC96maAqY7fKi9YB0THaU%2FpK%2F7vJphM%2BmDfic2Zg2Sc6AiEApeX%2FepqHY0%2Bbf0KcE8r0GCPp7Za5leUZPijfWsrkFL0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHUnsd6bS78GRcgircA4EQ8ughMVT7ZQEKIxxfzwglsHt7UoXFxdNDJyCUszrLLOkwrCKLBW1zvBzN0crflJbwWVdt5ND5KNCSdpONTOYIrzIrNc617DHz60%2Bqr66xzloG8ZWjRSUFO0QQz7Z9M1t48xDaQSHRGmnEYLCENERSgSzvBTSbKqyQH5THS%2BMp7yAO3SNIqgGLkPZ3ssv3qxR1CaltkEL7LMMI3pMTwW2XYyCHP%2FZs%2B9aE%2Bc68EUD%2FTJBZlgYzTEweo7%2FCiyOEQGpfNQvQfqOJg2%2FdZpYZ3hVLU5qsLmOb6xIc%2BDQZKS8N0qmpTTEXXJYKnjvhVIV%2FueUqJv%2FgouSMjXRjexK1B3lnTqGH5M6O%2FNCrJW7KodXiQTyF4hxmu0fVaYjd5tTKXs5ElvFtsB1GRhJhd5B2vzK92wSuUGV%2Bkb3VzAs7EWj8%2BPnwNOEP1HkQvMohOWA639WhIlbn4cC7Z%2Fb6v0W%2B91DTf04Y2ZC2yfA4jfaMi3v1SSXH9pg1IR9l4vMRVQ8KcgLaQ%2FDQAJ02iTfQx1naizzlqPq7tWKSn9PcLE0aSdeZL1CDOSH55AJpxT%2F8O42n9u05KnpCSO7yAgv9CSbL3Der0%2BLhkzM74WrBn1JwgAR4tjh%2FuM3CJCJZ5FKjMKvX4tEGOqUBz1l71N9HwIvI%2FYpjt1rVfeGnvlMiXj782Ylomn6zL7YU0%2FMe5Y6rgHIkWgAwKbwBRQKRUrBVosnV76rgGTZEB%2FUSUyvokrHONl301UkVEE4LZ0FtVisj%2BZSyUTi5RCV53pUKfqDXSPriMSV1RVbPNtSPgR6HK4H9LBgoB26wenN8fTbG7IALHKrF4kfkN7FMjQwpWs1pyToL6CaVuXu43letDrq6&X-Amz-Signature=0dd2543e20463604365a14672c35fdf0fb532593c8bcec54ba1442a92aeb8f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
