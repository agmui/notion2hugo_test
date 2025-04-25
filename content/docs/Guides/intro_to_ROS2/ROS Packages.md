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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=e49909bfaeaef9b4bdae82494133258c5b2838775116bb209c5fa34c45ee8ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=a9d2ccf2921c4a4d40c1b45c1aa3d162265ddcf3e5593d6b8408a72f987c855a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=215dc583a3dccacd9b0dd14759b77c3e14d2d84abaaed62b2c4e36770d31848e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=3ff2742c5570b5e4b2bd9f8d8daada3b7521fceac5e5f0937859e55c8de424c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=048b3e4039b6d8486cd8898c7614ac7eaf1172420efe4145de008a570a982060&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=46aa8e6a5321facaa3e8a0b1dbad9b43816318676ece6041bb440ed687419f45&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QEQQOC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMQd%2FUFJUYAIsyBUc9SZGVq9i0YV%2FuUIFihWPw2R%2FcAiEAg1tcg%2BQXo7aizM5%2BvR%2B5W1%2FUqUylOw3Q%2FFv8vuKc0ioq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGr02R%2FeXvUfSYcWVSrcA7KiZfGqNGCx%2BDc55zxEwlojki9IghNPh4SDKD1F5b3CdjXE6LdSNd8O89YC7RTogAphuHVS2%2FMAN7AFiy8PkYqgldWfz9T%2BpIshaV1S0%2BEo7fbb1JkST6lOf9LxYbPdohbpoAPuD4TPsGMJ0Ml6Al94LMCiUXhQs0GkD4kQCowbrZP97noPEOqf7c7DQ9nq%2BXzuGzAYREPgYFnvxpa8ix7ygwfGyhHOlT4QK1TgT6DQALkKZtcHVwClSGFC5bGEKRt2RLzyq5uVGwKhdOzc%2FMxfAOxDHhGn%2BtCGHyHbNZ%2FxdEVC%2BmQDWpWHT3DRfcRCZ0F5s9HoWtySNzYY4l1C9G0%2B6KT2e6Tf8IVN25xXjYVA3rjvzL8ugWHWY7YEz%2BmXRi6nkp3M7mivQaT04FrNXnEgGOrOAeETCQmkGxfP4q2Vg67o5eWp3%2Bm9ms%2F%2B8Op1oukyKF7k4AtQY2VN6XmD4yjuSK9VKUZ77dHNjlhWN5vVxvQ346dfCX2%2BUlKahwTkT87WoWnVnv5%2FFnpI4Eiyi%2B0fRNCADhKKvLd1wHR%2BiROFFf0R69utynXwEOgPCr83GnM7fN7q3JmpspTeqc%2FtMJqdmS9SngGNX8Uf%2F9tYQGfC1GJsKmLNQ1I3JxM2ML3NrsAGOqUBie2OZo45Be1Q5owVCkPXt5jjIebUtsRi%2FsBO%2FBCpXhaFgv%2FkI%2BUVPNwnhR4oUE6MdYhPhVXMvTLXZGbMospQxz7RcPwTHI14qe5ymA5oTX4IqY5StWpHAX%2BFTe9nU10pzZR%2FBz9KltUgnMVLcMMwtkePwE5CmpwbFH98AHzfUohd%2FQ%2Fk4v8531LI3nw4cDk7tOyDZJCbSYvD8g84W8Qf8Y6ZKIL%2F&X-Amz-Signature=28128890c6213484f950129158e19e0b53ced417fb02bebb925bfb9267964018&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
