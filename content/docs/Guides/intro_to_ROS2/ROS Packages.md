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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=5aa5ef3242424a3f19c0320224e2825d48e1c5a7b55b4a4ae6b7312e7ecbbbc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=2e009e130bd74298ae955cfb2531d93d02d2911cddcacba24f2581c3bb809258&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=16cc060db28f743e7b4847ef5173412bd109b7ccc9d57b8ac82207197327e008&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=0a647b7de4401c6e69389a66785200807c139cac97382562811d8be6963514a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=71a65a8bbb6160f20a6eed431cdef44fe70be2c8e896171f795edb9ac4980ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=b0ee2fad927d1cd00d71601a77a29a55d18d0715c2094e7d641be9314099826e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652SJSME6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDQiU8mGRDVpKT1ZqFzl3LEX5X4eH6FChm5%2BdMm70KAiEApBuLazSYEiO8J51QVznbLKtv4VahbHCJea7CqomgVVgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC7NSANGlN9LWqpz0ircA4AnVCbvQl5WQ%2Bdbi2JMqlPmzALhwyyzkMjk6dVVrnmXLoP222xStr11GWr2cQR6hkAuVNItrR%2Fz7tbHthLyeQiEzL6iIgCRWBEfYeG67FqkQBwZOLQoGHAE%2BTpu29n0zbvdiBvy9%2FyRl%2FdEstRRPv4H26iTWvAwb8k%2BsCKoUtoez0uqwjA4hYHt1tffJjySODPzBzOOeqvz%2B3jkLcjq3U%2FE9fUjQa60IZmmIATe27egYZGM%2BLIxfghaxrOnkNsnZtSl%2BiJ%2Fix4XhIg2F6hm10PJcQNgD0HabAgBy3vYnoIxllgXMBpXXUU7BbuOWiFISOyFyvFLy6zW0TOxG6iyXS5Se%2Bwz488efQt9MyE1a0bsdGzaNc1LQh59%2Bpk8eP3MoWpN4px6SvpI00ewBg0sdsYJD5ELNqVbQ%2FptSkGjmAcxtBDUvp0bbY3sbuxuzCcjrkxoyocNMQikpAVFi1cN3aPsQlZXvmg7liEhXKkN1SS538QVBhrsS7uWDAJ4O%2FZnUXpyEcFV5ExEfE3LgtrQ%2FGj3jh1KEN1jrnCa9QP10XUmkLzbFPka4EHMjVR7HXBQsFSuAOZnGtazECof1S1EZQJsbANiz2VInGhPRBeZWYQHQrPXCy%2BjY8ktnAnjMOOHq74GOqUBCEU1Q3oisHDvQW8DVbl0XLK3oimwUr%2Fctw%2BfxGt0ZYomA8A%2Btd501KhaNvMXAizteU0OV5zIKI8cYQ1VF%2BDIUwsouKSOd82i9689mPenkuwlYzjUsYcHbeUcTaVQA4r2YRe6fA2WD9Md8wPWtM1fGMLQ3EGrrMzh0c0cIo3GA%2F4UZ8baU04ad9VHAvBSmfELN8nJ9AFja1z5SlR1jv8quYi9E8Uy&X-Amz-Signature=d5650807799289431788c1af267de3ae07bb2dbf0b191dcbc9b896cfbbeab51b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
