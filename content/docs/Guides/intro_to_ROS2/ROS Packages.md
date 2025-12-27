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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=ef63db7597a6e0d6c35c18ae94d6455f278e523559ba0f9cf1779f79fbdfe15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=08673b7af06d433d8e2eaad8582cb8fac9e86d5bbe81cbb04f2ad0dde25e54fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=a2a7d7c4151ae27392e061c249dededa1ee676f2782ab996e02513956da6db87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=e1a2e1b1ea5e925b3bea95f7d65df03f4c914ed26fa8cdf42f7405600f5dbbf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=197288ec181eeb433150282aab0a69e5413117c5c24621ccb01b1af2d110188c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=2d6dbd29fc5b9e64352ecb60b0c4471f6eb600fd9d652710fcb866d40b1a93cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LTRACC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdS5ixxQFLz%2F3dgte0H%2F2%2FfWoLpxpGHmrcNWcOSXyHegIhAKPAEMWf%2FVv35r3Ak368TPe5Sy0AFAg75cQrDeRAiDFdKv8DCGMQABoMNjM3NDIzMTgzODA1Igxy4QoMpeHD7YhxMlsq3AP5rGCjWJmrPHmP4%2FK63Oo%2FADYRK5aSmtIJs1Xzd8hhiH2B1e1r%2Bp34%2BDQShy19G2ik%2Fn%2BLmBUouDkk0fFU5G9C6fITuzUkK8QU1vQ3RlxwQd1f%2FAR6lK5xxUJdseZPXO4BCDurXkXPcN1GlBIo04HXbIXoyOds6ePtPCrcsRNnJsX4KxJS8DIPQC3Or5uHlRoMWj7rCb5Q1V9VMolJqr3CZuYUaWl6H6yJzqXhxsKfVPCsjMqVOC9mu2Q%2BtT%2FdnWXudnL2YGhcsZfsTqf5KX4hdIcAPVVRC0iRRfyJuk3XKCfXGv%2FfhhomHnHE3Dj7lUPWOO9GQXPfzfsbf0BynqWO6WWvnlc6p0xNuSKFtPgHdvTnwou0ERPzmIBcpxS%2BQXoWVWHkXd%2BTSUXtdnoz6uNnffZO4oWAPHZlw4%2FdFfE1jC8DxxgP8sSGqX3WSPyr7kMmitNy2XFm1BezHFGMhwYB5GRAD4CUgDeoOtkI4uZw0M2LRY%2BUV7XY52DBZcLODoGjUgiKYC6KEg%2FDmpH8fWuww0qZloQscPJfz2ohdKrZKE%2BDQ7Ggske7uJlgWWFaeaEscioHwlsZOaeUQvl8qpL6lVhLswRgffYTp8vzwZNi2FNgfbZhJ2xuffYxyzCb7LzKBjqkASo%2BwbiT5ecRV%2Blhyp4ppgte%2FMGmmCUgfsDvO7OiEjiLPeUX8pZNsk8d%2Bwk3Xpa2hXbvZT0Y8KkqR%2F7KmD%2BlKkzSG7stuZFCpZcRpNC6j5z1bqAlUum9vRvFQCAe6DjScijEAiWKiZzr3dE0sdt347skFlRVZsII2%2FJqng8i4O5UushozGZfedIbSMKwIsghAMdjq2PsvkalfApqnwgC%2BAUpK9gH&X-Amz-Signature=23486adae597c7eb3d9b336d212b8e98f8e2eed3a3013dec568fd8c820005a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
