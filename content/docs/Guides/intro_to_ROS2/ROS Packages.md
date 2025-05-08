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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=03a63b4796fd7d7ce36103eb8e06ed1a45a78094d6fd171805db6172d0c9a67d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=b5d9415184952ea46532a30fa3406452bfdd22ffeb02704b1490ed7af682e83f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=2d584c75e63f83bf3bddb160a302c310c4529e8713dc8443a952e73d6ae69a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=3fd18d9630ae0f8d61678e609d480c70d2a2c7c2c8d9a9af0a8fc2b23d025ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=82dc8251a42667a112e6b0c7441d5742ed4a59191b87bf28f67dafb1d01a5448&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=2454dfc9e691e389c69d1cac53dfd0a7ff294d6185755a702b9371a1e6a05def&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIPUEFW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ZW5EOdRhuuxif1dpE0MdkbwhIkoSdMLlU%2F9NlEqB8AIgC08276f5u8DpwaUvibYJKm46O4GhmHxoEdweTMO6Cj8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDfFguNW%2BL5QTwr6fCrcA27tjulJONk%2FYreNLWW7OcZGhKJV6HokMpnVAreFEK2cJyN1UcIDy4yXUkWwu8mYAidNYT5230WfsdhpQGeaWVqS5tRUdFMz1X3TrMlAbwB%2BVNE9cJLgqwPBt%2B%2Fz81LcjeSyklRL4B7jDr72EatCs3PmlrQstaVyfOK41ATDaw8FRLGwM2U%2BcqaLqZ0ogJc2FMNY3wZwBe%2FyTCKhS3CaMaNMJWMYM9ow1bxdfZmMtTZl5LaVtnTwevksK%2FU3pftM6VBiPOeRpSPiOVd82x1mx5aYsVjMkFSLKHkASiscjfUk7wnyDcSyyfjbOU2F74zFE3W%2F0wbcNz%2B%2BjCdRnBfYu4dlHY3wbseYEcnqhKrryCkolgDdUM2erkiZbN6Sj8Q6m5ZGJGd3GcOn%2Fdi6ONr2qSryuWAs18zxwy8PJWDpzXG6OI8UpkRyT%2BSH7mqU%2FtTpSYfENjDhYzbtAdtgGVO57tyKP7USQinAvbFkUaTInlQ9YZS5j%2FnI1F8VjHd%2B4S2H0KCWie3ukfUA1yueiqYNUZth67toQXyOjh48a1OBZIY7Co1sCT4uC6KiFYc2bzodwjGTJ%2BdrYa370JPwV925%2BXSeo30hiCwVBLUqFzVddsYxsVtmmbAZ92T5qA3lMMLC8MAGOqUBbI6TaEVB%2B3SapgpPZy0myVW%2F%2F3Y7vbF2eEdmiIBdhTE2%2BLg5ggwzEbGMlGzKC%2BmUepG7BR%2FLHyA1fFixpsBWlXOeAnX9QQdI0BMhD98kmOpXtEyqLqF1VSvWVaaFjwJBUEdZPHfreNkd%2B71V2gSQwftZPd3wOw3taKwR4biiAofxp9dH7djIIylaUSQWlteiE54HPdp7DeToPMuY199hEsmqcaVs&X-Amz-Signature=866669dfddf7e704374cca67572a47acd6a13022e86f2f87f527b9a18b234ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
