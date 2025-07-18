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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=61709117fcb2cd01378d140933d7271a35a989df5bb551f6c4a0cf53df362fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=e3031bf7bb13a7fb619725ac01d3200947320efc3043d3c5be6f3907dee20c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=18d1ea6b3baddb4fd953442d52114037d0a13842981da4f5aa8f432298bba047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=0bccb33972f199d00438be05056461b22d89f9d1a8a3d839658550fc61296818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=da246dac64489e65dc08188e738f8525ee33614482fee61fbd04990f80dcaa3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=e451f36b834c8a73e96518db71ac30139fad2ceb8368af00447d80a84411d78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCK2E3H%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC3EBYlME1EoUU%2FdgmCVbSc3zo2iynOPR%2BnDisn6nGC6wIhANqNpYYI5Er6QFC7NDc16DTtiC3eeeW2rDe97WBANn5FKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsZqLiDRWiaX3v3dIq3ANXUr76l0wbOokASiCIWwR1p4O1vJh6FXIaayXIpjQMPL8TvtwY9FiHYIee0%2BhU6D1rQ4Ar%2BXtRUovjPxx0VE7Z%2FtauuzaBfj9GNLuXbl083%2Fd6YMvHHQin6EXwI1h7rCCNSNgBfEPQv47CuSVDlglHAM3y6L5bXIbOVKTXCVkr9rimhI2nbkNovlMNTtL96s2D4SFH7pZwgQZe1WvuR4Icy3Js0SP7VZzgoXDtZVrbADddq7ABNIGJqXZutHYRTavIBEu2FXZKdxnNo9wD0QMfbR5YSKTiyeZeqmLjpRpJcibV3bKet%2BKCsr9WfL62TptcDe1k0XxWmiNAWgHMzsya4BjfWOqpcr6%2FZ36jroO9aR%2BWv45S7ps2%2FuIqAw%2FmbXlgKeEdUeeEl8lb19Wj2gr0wj%2Fbz6947P00Px%2BRW1JhDmXZnTwTpED0DPZtQh9i%2Fm4BHgasCXMQYe0wI2MsYDltUxUvISauEmXPKx8VcxB3uOpjOdBIxTnPJQjcqMT1k%2BLVD%2BOcKzsUIUZityoWEvH3DR9ihGqTi8S4Yw96T9DFA8VxZ5HLT2IzKtoeF57Hj5GMEae%2F1keLs1ZNZghSbKEM4xJ6LABb%2FrH%2BQDV8SM6yjg9nrZweGcCyD5b%2FbjDrmerDBjqkAVxdzW0RJaevmTN%2FQET%2B%2Bvl89QQhXYKJx%2FFaMHQU4%2BTFC%2BAb1PHDDxOLBKUQV9JqTvQa7CwLmKfpUHmdI8jGLLYqbMvUYXUTzTv4C4I7ZBZTtyCgvR0Rk59qZHE1NUrYr8ltMfhaHoh%2BpyQuGZzixctJ%2BUyR9NQ6fTtciqHQSiSqQ%2FJt2Jh62IlWhJqE6xwM0MNs1MUR%2BgEOalQ9BcuTwhzMrIu%2F&X-Amz-Signature=6f01645c9ed40d1c78818a2e554c80f8dbfda59e541ffba0c8b9b722361e188a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
