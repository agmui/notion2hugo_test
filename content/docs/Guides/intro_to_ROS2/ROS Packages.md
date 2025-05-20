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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=e19c90468f4f2b4955f0b8ed260de81ea6a049a01d6ffd16dff0ad8c57d050f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=5fac7a6ff2a7d22746ef25b400bfebc0985f60024c90fc13042b636b73d8d9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=ac7e33e4900e24b4beb582425c384db2d8ea29aad090ab1468cdbc183ece0ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=3fa44c3030a5960e6277f70b304a396485cd5efb39f66d6af42efc7d0ba80858&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=df51224d0ec9e40be58bcf87146a03af14f2950e6a18ef5a62fba1fc6dfeff65&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=b025d3bcc6ce056a25d26bb90b85c2c5b48d5ce3c5e09ae9c59f49328328be0c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OW6BACU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsO38EMqN54nhRCQ%2F%2FuVcjaj5sVok50ECvXXB%2BL6A3fwIgUnQ0w%2FXJVucVmV2Sv%2BklG4ARvfey4ZLGapzZXLDaPE0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1cZdhrkBVaw84toCrcA7fzwdbiV3lCHIHG9vFV1jUudiVWMAWP%2FprXJUiK4X%2F56ExpdlbH1dv5%2BR8S7ysckccxGQerpUxDODWBEeKCJkrJFLki1cDl8vZeWRZDCvj8tSjxfX4iOmHnqO%2FMcY55VG3YuIMWQ0nzPXz0%2BVFmkHb1Dw1oZTSeZIl0PhLe1AEZJ2eXtkFN4xJXKifk%2F%2F5IwqhtBlXhRkcNmTQiJEA7iNe%2BDqPf9G6tma1DdGLCb%2BmMu7GiqE%2B5llmum26j3a3SguFohwJvuvV5YXkgbz2R6vhRd8AyZtNzVqYW%2F92FW6UgHGPyvhosZwGaod5xW0iRsg0AvRcO%2F%2Fgm%2FSEx8Jb8p%2FWbNUSjUmQoK0Cp47pyY7lNXCQFljx5OjP%2F3kOCySGzRXd1tzBurTRA7%2BV60YY5GEWO6G1af89vpnKQqBBODGpRQkne3IaZfzuhyEeUunZdhOSoP5oHKrofcSucsJJShEXZelTz252mYkf9TgqPrvJek450TLN4XVDLuG9uKnVEKrReJteJMxS%2FCDQN5W2CAk74DCa8NMpnJcgtUPA95TalDjl6cSMgDCyet2tzQr%2FYSED6o%2FaV%2FSkRaRK%2F6r4AkKN0t9lLIOZWMT%2BYkfHq%2FgBQ%2BZZV67jiQuQJC7J9MNPJssEGOqUBHiZqefZ5V2ejOdWn6VYOyyTzjIVxXSICLWvPyQaDnq7Foy8vkmuKQWOL72WrARwvIIV5BS8pTEpHFWlq9RVNw1XJGCsC%2FOg%2Bh8RzsDfNm2F9me2FZjdwqTnKqmWOFHj5o9Sg%2BUjSpZVWmAJjzXJ1MT9ZbdE4dQJ6P7%2BigusmqVXSB22VUWoV0E3yZn4k22FcVS%2FfWsqLCmp9wIu%2B6%2FEYNIq4ThtO&X-Amz-Signature=c991fa1c53d1a5df78a0aa0fadeca94e0c6071b4960ccc97208a1c68ca57cc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
