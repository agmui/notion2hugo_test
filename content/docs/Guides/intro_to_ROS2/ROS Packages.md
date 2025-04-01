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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=a20fc1063f23e2c23c9a57ebca941cfed6013852117b7afff471bb1673976c65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=f0ae2375a94dc57ecfcdb33b491d0f35ef531623ef91f8346dede2f148af1332&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=0d81a0265557e6b04d60c92c0821e91cc0cae9a7f9897dc97c9bbe7e54a5a92f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=032212c21e4f720326eafde5b94dfa167aa730f805fd17b94a0d896c9a6362a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=4519456c396a5210173ea3ed07817d18b9b087532ab3f575ef157341174b996c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=b9c1cc5bedddf8e5b99772fb72637b471bafeaaf41e6acc8aff8f62d9deb68fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYNO5XM%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEHp4iEQJxn8ckYwU7PTo3A1XW7KoSjBInq4x1ywqKQCAiEA%2F0wd9%2BI8rz5N66kePNQ%2FGYxhWvkI%2B7Zm9APiTTzqqAoqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3M0gMcAf%2FvmUnvFSrcA5Y1e9P1E28l3%2BN0oxUW621Ys%2BnB0zVLrYZJnXZBw0teGB94OnNnAvdCT%2FQCJvwTReo978rLKn%2FXI5cPu4jG4LXMc%2FR8L0vHJS3xcB5OQ3%2FPjeDHJA4SNX97NlakhwgbENtu%2FyAz4dN8Ikfpg%2FM0NIOtEnGmT5p7H6KcN8y7coqrVJQKbLWqN0CgSfrEAqfEo3aqWqxuV5mrhBstcbju9yqsBXDv6srwBI20SKTD2q9Iof4GVImQNZQrY4%2Bxg5774og9hTF0Y8y6OjhANykI6gUytx9pZmWtEPTkLt4y92XrTozDZOiHoiXbhoj%2F%2BAz8pzgcbnB3ViLuQf0AH%2F2bVFeYSmJaYh9QgMkOSWU%2FmQyxS%2FO0xe1HHri%2FDfCyPMrCi3R97eVBVACmXISto6GmEqaUo%2BbanJYqSIQPN9t2vuKFpvuPSH4sZw8B079YZFuI5sBR6NqJdz%2BqJv820o55M%2B3sS6zWQW5iTUC%2F8RluvetcEqZ54cZig8h%2FlQRxcQTTEGks6BZ3z9pROHiy9Hf9NjPSa14ubN70x9xFrD3oGeB4QPwHNLSV0HOG0uo7aJ1XKu%2FYXhEkbhNXJHyLxpjhxbuGvpDv7iS6NRzGXef%2BCYYReiJq671H9MCLdkb%2FMPHLrr8GOqUBE9SImv7X832vErJXIlauOC%2Bd2LEoiNTBnpDze3BRDw%2BG9fzdFIdeqRu0j6NljUdx9asjMNZ3D77wc%2BCSfTNnxXvfP4ZOvRAXai4EGlbxz%2B3cYcj5Dfr%2F%2FoYsdgnb4OZCGlfUAQFjcNQnvHVE2EBg9tT%2BGu4mjxYgsuKH%2FpXmWt%2BoXcClwmtubBq93QwFVaCWcLBi2ow6TmzxFF2kq0FlJiB5bLqa&X-Amz-Signature=a5d4704ad8ae532ab993ce7e581de1339fb0efc638b1c97e53ecb0caae859c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
