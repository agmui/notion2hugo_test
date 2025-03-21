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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=6bfb9b7f402c7d8ce6476792e732059f028332a6b8c9ac8a06ddb9db7f2c3452&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=49c7daeff8348f0fd871093b0c3c7cb5b01ae223f5e00c0996f2919cf707643b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=29cfd9ba70c0e8cf4085b3bde966fbbe132705fee433f1967f4e90dde3a4943a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=e32817962dc5abfc52ffb49af77a32d4fd670441787ae2d7056399a9bbb90607&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=b341f87ea2aaf22f393376656f189a98cba2b46a06dd570ad7dc1abae9a36b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=3566ea8c8832b9a27f09b7813a9e70b181a1cfa57b86b0057aa1eaa9f4179a62&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUV4OQ3Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCWBToXe518nDlXNWLY0%2FSHwbKk7NLl1TRzBv0UvmY2SQIhAOMjvmfNZLoBawoxdS1JCRz04Goe6NtC2w4vFti7MSUMKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv2mzykKyaiwnKJNEq3ANs7GhDdF8ocI%2BKfDedSScMxwXlBnLw3w9IClrrKwW1gZAPQ5iTi1sG%2Bm0mKF17VbsxYep4EKGoh74hJmmTxPwSy5aF6%2FSHrGn72XIxp5N%2BPd4DXCtlzg%2FdE1wT8Spo1tsROEYxTsXJlEHYyWXkAFi%2FvEzQAlcPnBJcCDNXZcD0sIdz37DxHOWeB%2Frimav3WJsbSSd16zJcu5FzOH70cu7kpN9jwgWpqLCc0YBfLvUDAJ5ThKUMMcZ3tmOa8LR8qezh9z2b1IaLSJlVIz3q%2FL1jJ0r3upzECgM27PKi%2FxPcpmjz4FMPfbbtmsWkTZFe%2F%2BahGYUW8nzx4H%2Bx%2BWKULsKgkt8FV45DL9%2FDosZjDDNR1J7DGWAgispmxCJonS5nKuDY4rsNmwTT96kYOBhKZ5Q9jLFAjeROvty1IQvLchGQsLk9tuALXuXR32St9uZGKochLaKw7cfXQvMUx1XJXBoumg6y1tJ3ZCeErVlrAUF6jK%2Bq8PGG%2FzzoIXfLyhh4iD1v9UGZe7QuDt1W0MLLzxeAb%2BNyyI%2FDzhZS6Fb9tDxuOZsZ8zhvL1ZG185mhCunzQBO4GYrZLlUhfIuVNMbDWJmZ6Dwp38N1emSgYv3Dv%2BJFYr7N3TjkDU4sLEWxjCP2%2Fa%2BBjqkAYwtc0zpuXhpBO2LhttQjCAhul8IEOq%2FtY%2FQ7l30Jh7KmjEsz%2BbRXakaIJxD%2FlGYM%2BEuiWVULfcRrkLBAPwjGiMssryN6gUAuMYIMaGSeHpUhxoUUgcQwBJLjXiNUdblnohvNbq6g9dB66FxwDGXVMnDOxu%2Bw9vi1gHi056K416Yn%2Bn77%2Fwk%2BXeIt9W6tV9E1jbKHtTseEs03eTjRy%2BvdRjhQAjg&X-Amz-Signature=460c342a7e1025e1fbe9bac883a51b1849da90cdf01ea77661773f004342cc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
