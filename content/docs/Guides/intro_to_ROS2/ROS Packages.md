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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=9a885d27c45f7a69d7730a27853ba10cd440f1ad65907bd9af27134833266c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=1b871f3e8dc518f56ce2fd9512dbeb108a52bdffd23e82c26559c1bebd77d75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=5001c16efc91604dfcba5827448be375da20f3c85e13a03c986002103cb48dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=60fb0b3dd853585657bdc0cdb7efd5659bb2d8badf85c7f29911a0951cee3e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=ee2dac23da1593c8851f5accae282666cbe144710cfdce66c998199f1c9afdee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=3bd22576c605242f13eba3759e99a213cea89967d5fd46107627a9ef46c9db19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQVIOXJT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC4MjfYDjl21M9CacSAFAtQsmFwm%2FcGp%2FTJDT754vv9hgIgeEl7SgOeBjSQmbVd4FSO5tm3xej1pDV4SKiTqOsKJv0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKt5m%2BJstEkWim3TACrcA%2FRyIqhfJM7KBFaicbJGI15F%2BrzSjz5%2B7dQsjXcg8gmOYZWfMmQUCtblBoCJVzyvvMj%2FiQoQPSZ%2FDWCT6a2rf1ZUGXcqNzLgFdD7WHoA44HhY4dXguYVmYYOH8u8OuG6lg%2BNTRTHST3%2Fynw34myJV0xJ7zpIV9eCLzBQVq5DUEkFEBobtdAHNQ7cIHWK4F98PCUiQ%2BiaaIuSkkhFn1tjEGROe%2FxoTWWr%2ByhMskxaKbZfQl2kCf73hF6oOT3pX2lTG8VISErDNefY%2FY%2F5iXDqLK1iPj4l0jPbCpn2TyziJ4nIiTABQqJ6D0ET0YUQbbaEUGfmtZpYM%2FB8rd3%2F8BTbi%2BFfzpMqwGub1PDQ98RtxVkR8pKY2T%2BBbafFDHOD0RUqEAvQznzAVJ2hySmvb1CG0wfOAX92zZiDY0Rbfbxtf4pR%2BXhfWsgRt1W1pf9UZk6Gfu1Crfy1wnxrBJbqJgoriCGJFxqcVdfVy9Axwnr7S5PkZezv%2FRKIEDjJE7KMWmKQPPuSTSawEJnG2Kd19mlXIzMKX%2FP0QbZGBm0XjaxHlo7qO%2Fko2P%2FI4Mva2845BXlFFGSUChGwmMIQRxsM9KRx8PetnghuIN5SzYsGGVNzd0PuSJigJrLvJNHr1uKNMJvRj8QGOqUBUT4hJpVxTnPr0uDYkZnFH4hzVu4gEyYfick1hvk1gnvkKzqcE4%2B18Cx74zKPBQhE6hwGa%2F%2BLx0vjjGLeC%2FibVKbJD7P3eHNV5BFdRX493gnNrUGB8oEKiVePYnf9hcEoOIjeRo0GHnbyfWclo7pJhXTZRY0IctfZvW839mZTeMFc8CmlY5L%2FCsH56MYwQqfatMEQL%2FRJcaFWm77272uBAyMHsZ5e&X-Amz-Signature=75ce9579d22a56ec24625d5a642680995677d645ebe17c098512555cbf12c4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
