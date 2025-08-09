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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=49aa27f8c642bc09c2722845c3202750edec79ab35593e7cd7b9e2ea383cea56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=fecf3bd21f08dea6dab4d57dd0491ace0c045254cab5d2771438236aabe14784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=cca80ec05eb07c6ef8b06b849c57ae2d0f962c4c0cf06b20d69ce1dceee0519f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=ad3ab4254858beb4d23c6981a0b7d74523dca6a2353ecb26aa637b89679c6002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=331232f5ff6fa78cdc3f454c2c024dcd532c9bcfeacdb25a8ddf8f8b6a1be596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=0a92098c91c0bd7eaf52f1ed4bb939bffc25fba1a1c9b67c3d36308ba9332730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTL7ZTJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiOcY0uiFMfHFl2XwInjCQKlqjYY3V9Uzf9tr6g9MmCQIhAPEhjJnTmDkahqXRAvBEtnmpyIs6BR4eCfPYegVxwBgrKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDmPW0Oq6kLWfBos8q3ANrj0vZR7tqap8ZMYVsDKoKkvJhI2%2FfEjbGYqdkP2hDvqtPrEsJ0dshLVHO7SBDcXS4KydWJcWjv%2Fco8ehrlBXAz%2FvXuN3%2FjlgQE5waZDW%2FUzjcurmveREu1wDVXU5IiqW%2Fdd5Ko8FY%2BGKiWSI2qXTae7OI%2BnoCnJ11ITk4KFSmIiCe3MPtZl2KoBz0%2Bad8jGPVJ6Rt0QXgZVeKb1jP73pvNdNV2D1MDJCwa%2B7ywYKU0zqVIX4apY6MMDAU3%2B9jp3PWRbGXOityNzdnYsTlKx0zsOuFE0skXvyg4bmW7s8HttNpEnK12VjrA3UGIf%2FXLk9YWN5QGxlllMbtjUIrFJ4tDz1CQOfZ%2B3MG07cMI%2BFpn%2FtQqP6wSJ2O%2B9rKoyVpDguwtH3Ifah2wZanRZ8qQ6vG4ZIjgbUILNCcnJUgjPlqaPVYFzjm9Jx3PX1QLBzpYsdzD4698MIhzZog7unG4mP3sE%2Fppy9x1MxKxm7BG4dkUpzIeWaGpsSG6lXgkVbT9HwmmO88X%2B5wSwuX6fsMQoXXgkw7YzbKXdaw8AJG%2FJTTygnhh504pA4fM9AoAybpKtRDIQq362WqyeR7%2Fr0GzrgAALYUDI3VXiRHmBNXvp5NQunLvfD7fU6oQEguYjCoi9%2FEBjqkAUAQDxWl0VbCbCnFzGLwupnjJEr383EIUGJx8chOSpurGZokxMKCUoDwouZPO7SwLbnfBmddlriQMUNRCJhuZbAxs4fFynTQuSoTkXYo3%2BbWv80mLawBYCDO1X%2Bk1QZFSJSsqAGG0B7X%2FAVZe2Gw3NtPemikwYDgl7w%2FmLPo%2B7sE%2FmtngjGEvzm99znV2DKxVsl3igioClhtM9ev7A8kI73WwzEY&X-Amz-Signature=c74c9fd24401c3c27c2956616a5575155ef9a94e937bedc55c2474255a92fa0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
