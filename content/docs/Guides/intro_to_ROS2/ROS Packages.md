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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=440ae9ef6fb70c1d1733cf0d207fa14851af141620546a3f84a09672140bedeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=172d257a5deab07f0cf48550ca3f1b8dfdea8c5b09dedd52875d490594c757f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=2c54096c4063ca8a9916e56c532fa96d80e3f605322da189b7e4ed6c1bfcd0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=829582b276badf8ee436e134fc2e785a842cb9862c014780d80ce12305fe6e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=93a2c587413f7797511ee38c86f78130250a3621bb3931c009aecc81aa6ab08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=f047aade5761a5a97945f7fd0799b761598324b06e616ff63c0ac6f8d212790f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OTNXC7M%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIC2%2BKQrUsjOexBy2J3ET32sPzQ4daWq8vO6pBZLTHeXdAiB%2FQlucYUJDWVJqCMqtNQ6f9uQ7QwH4Xzmh1lmH1P0lcyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQZpnGioOBhxgSQhUKtwDQUKT8YJxBRIlm73ySZjIOLStpFkMDHf0wAnSDX7jt3JtnUnynmdoLCdt%2BS2Qxa7pcUiGXyxCl114ryBprNYvrPDw3AcrmUuSenjqJPqKTyEBTsxrKmp22S7j0WbB%2FqmL4Ys2uIiuU7ko49z72h0Yv1VvYJM4O450C5UksFUZDmjWXreyPfG1mL2Ed00%2B8qRYduoNhBeFCvr98GnNBF4vQr8tyMLiZLSfvcVGo%2FRdP89OsNuqqCWxheuG7qjmaCNU0mRwnUOtd90U4iFe0WqQUT8%2B0iuOaXcHYwcwLyhQp8J0zmMTSiQB5y4h9O8bZwA8IqBWHhHTg%2B524IKe1hg%2FJzjWFfqSEh4ByxqAsto4rl%2FLkjo8ugthFKg5an36ZHWCtaKShwtDxER2zxKbB2mmJAX7PTUIfbhMHdFC1Y3MGs%2BTzmyUKZA876J3%2FiOGOAQrrOeYrHM4QQ0HdlFBNRVjWjAcTlkQSjRmaMON1qBuha%2Bfcq7iFA%2FFGYnhaqcKJuJh1goDlT%2F7n%2B4PT47gPSIjuuMzWxGSmGb%2FRfiBWJZHAZw6Y14PbyKJWJ8T7Kc2hppc%2Ffne0jz4BrUEH1f4xz6FvYrfyvovS7p4gtg3%2FnQNMK%2BLzQyy7C0TyCFJ8rcwn%2Fi%2FxAY6pgHpcHpwTzj7wtCErlnAqwPJrI1AzXzwYy4ZpGTnbA%2B6blVHghybEhDQCSJXqlqgfCaEQThdzg4s2z5qnJa%2F%2BOA6zHfpvlI8KKNXYV2TLMRtiAm2oDhdE%2FZicVZ3luMFrla4tAhM0B%2FYgnEx8kXXh908uNikSpmCoXh1Ea%2FHO0kWJNfp7h8%2FwJz9mxvPAi6ZtQvPhAMVBXL%2B9H%2FjlDqpNPzCOCaGZm%2Fu&X-Amz-Signature=c491e9c81a63508ad554a234f3a7e302fa3476c571e340658fb2f9f7446a783a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
