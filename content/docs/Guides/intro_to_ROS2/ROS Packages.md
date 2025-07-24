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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=3cb33862df6fe625dbc64a4e762961c90d98388302668b6497abae8bafc258a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=06ce6823d27e5927b58644b02f2a86f61762368ed217303dab897b5589739df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=b95c243305fa2814c2da6c089644fd08bf35bd875313a331687c32a2ff10d63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=382995cbe0f4dee8cedcaafed28d3751aa587987b061bafe57b965143d8bad0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=a1c2a6bac7d55c0e30c86a4c2a5fe7e6a741cef156414420f0ce83290769595b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=fd95ae4644d128d51d4624f429e9c9051741091b86de9619532022ccae805533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEZHP7Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHywwN7THtKrwYtbh5INQb5vELvRkxywozzYMlBuI%2BcdAiAwOf5d0kpDY8ekleLQ8q4kbflKcSU15Q7rOo0b5rugFir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMzhdsmBFfszO3o71lKtwDvcp6WkEQxsTIp4ElfDkK1%2FWAy0IIoljUC3eobfb3qsJ%2F8hp7woDZQD8vPi0AhHgCoqSpMOCjyOZGU9eCsNXZHKf0EmTv5JKikOF3T5NupftSAa7%2Br%2Bodr2kBZ3u1fdTHOQlHGX6ERIBLMY%2F%2FD6evGG1imp5J50kuNSillGd0Mak2LYu5W4E9qji28jV5Rv3gGHa65LJSFgzixVEwmp7lCAQpydoR7q0BofDTnQKYbSMyGrJTsHNfZthcm5UKGgM7q0j0DS6uHMDFQGL0TOz61gqT3jJCssZGN6rIjK%2B16cp4N9zF4BTi%2F%2FEnp5Xjk18c5bDLjUUoEqhvue5ekvcch5ITRkN8oZ1yXSjuRmnd%2BM8DuAjFC3hL08H3zNUSPQhZo9YAqs1YHCUFRL03FwgYZN7PH7P3a4anj0Sxs0EGCFzLv35qetB7z%2Fs0hmyJnsQYQb1fqchkEr9ynZH18FjFl3HvqkoR4IEdK03suc%2BJXiDGPA0zGcvGB7JCS1T9APuzrS%2BR40XJqqGesCGpCn6JnJBrhcW3emTMxvkkmrQqP4ajGMqirJbAbhqqmX9Eyv%2BiiZJOZITgybD%2FAqaE99AQPiNH3slVQhzDyX990vwRADECVV0KcyH2Aer%2BXMAwqtqIxAY6pgGlsdI1rxXqOCs80l6atjwdoqdRs5GuhayO2H07i6hmo4daBMyA7Ff3qMVOaVupMA8AIJgmLhGDCDFhSbc54yiA7o%2FjlX2ckAl9dZKiRN3gabm%2BaG1CxuirlkzkGH%2BmbqfHlUPLt0X%2BfmBPCp%2FU97i6K6T7%2Fb%2FnhCWhEr9U%2FCcoVRC8aoI1ZuzKx7ZB7GlnSb7ScVlKUc4jLVIkgQ%2BihWRiYdiEzH3A&X-Amz-Signature=5a354abeb03921891a4bcf2f4b45b92aba7e90a6193d605932843a0860f4dd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
