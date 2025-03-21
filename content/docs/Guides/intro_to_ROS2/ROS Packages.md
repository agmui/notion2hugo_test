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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=b6d4e1a18473231c440f55e6015b5bf544d0cec560d1ed07955db99023f2394d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=6ef7193751e62d663d387f24878b13b620109cf8ae30c3fa75a4c0db271d66db&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=2e5e1188f2ec19f22fc4855c816637baa61becdbdd25a74632d1e9ae7c0a6ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=0016839601991cce27aa9afc9b01c284165c6299e036c0e1def84012982c8a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=44ca0f9b042a2c8ebad11430cbd7065164783900392e80477802e0cf92a10b35&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=9de69e8bc4123650a7ea6e0b253381b38660e4cd31b8c7928ce43df0497f1d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW56YGRH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDfFIl6vg9RX40XFE%2BuTm7p2ZS%2B8yXLK3NKqYg2hWmv8QIgSAQApUIOtLGs4%2F21rqvp2GBc8v%2BqD%2F9n4JNtCxrVlegqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLl4FJJCvrujsWObDyrcA6I5bs54AP7wLhurwRSUKOp2Smvd5%2FW9m5RPzkAImRwH2vv4jMxb197UERriBFFTYeRjhZcqptVTPJV9cWKqukt2dk2Y%2F3HKUAlkc%2FQRd8TYey7PS7AI0V%2BiiqsrZaprDeL9Wnu%2F%2BjJS7CZA8KgX4FzI5nPhQ7vW4CfiWN5wuA2dsZ8LHy70eCafld8qITV8F5bs1Npm%2BomYy6swADm6rH40Axu6Q1daTgvztyatqZRQX%2FvSer%2BfK1V%2FKSGkro69uday87PKOnQFy08LrPYP%2BW36%2FXXq99%2BBwGKqsVsGTCd13s4ot0MmJqhBa1mazOst%2BdQaxMVfEQSP321u%2F%2B8xCkgeAirToUVmkAJoIpI97edzJvBplcYs%2BnBOu2V4NT%2BeZdGpfgdfFNC90dm3NcXrNpkjWCPVMyO9XsCDblh%2FTJjH5rpnAfvWxwQR%2BNLECsj3esy7%2FZ4xN6ChGqWkqEHKUYmRbPZiKFQwmXsT6LLz2u4zvzcpjg35Y6GbkUvOkf9%2B7QvLLAinqD4EBZku07yqSw0VU7zyIg8sSdwJdagO2BeQn9WE5Flvkb0w2O%2FzBWOfd4GKpNMaMFtJdShaMbtJ2T9JNoGOkKAYd8FLObmltvBZ0O%2BVDzSwqYuJjX25MLP58r4GOqUBP3L0R2z5J5xIvd833xo8OR8qImUwrDdry%2BtqLs%2Fd1PaTB3mHS%2BK1LfjuXEkJA4OJvUaWC1ZqG%2FfWogL%2BuxFJWTW%2FfCCba7DuM4Yqx20aw2QY9qpeXNxhIbjKnZvOa8OQm8kXxZ%2F4EHkuuDyvJNt3uujAlUBbt8TzMUcAhQ3uKNGfFcM8%2BJ3j8nxkatentJSIbvgixigw5TtxxicayDFklDrMBkTo&X-Amz-Signature=264d3aca8541cb88050a923977b856fb87d4f01a55e7d3d52cbd0be4565dd7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
