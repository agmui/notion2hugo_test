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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=73731fedfe7a237c389e41aaf5a4300c918c443dce8a75678885eccd80cbbe07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=be8deeaee55b957b03dbe207a4473087dc6a494a9fb0e02108178bd5ff7db5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=4373a731e0a8c1e6aedc957ee7a13eae93cf244e9588c1d4f7c5b6ac036f428c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=1116a2560f42b1626c47e0b1ddbcddaf226bcecc07925fcb1bf12c1aa98fcede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=7ac8d044032d31098f87aa989a3bb649c6a5d0c0cd51ed0ebd94112330c199ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=673e61336283cf69ac0631352ae4ff22c173b4d94077fce47d776dcf61c1c0f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5SAURO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T230908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkhDgQOxz%2FQIzhpbjtZ6Q8DNKRGl6G0nupJ9lApGQ9JAiEA7DJ3mDLddVKc4tJZMXD8568L7EWCMOFvYoyUCr1%2B1hEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN32xPHi8jE6qsQJ9CrcAxEXqnhgnI%2BRm9vZGw4NXJG1SCd5IqD%2FFqNMJceDM5Em6IJHaSS%2FLpbk5NEu78k7UX4kuWj10Gwn0o3xnAhSdCxlnDoJrA02pV66wMOB1z9mQD9ufcOmRxWwx45%2FBgr6S4ym1DW3IC0dHHA3hFAGbTyKrfadgdKRDSGxCAYCXwwZDph0SzMq1K%2BfjVf5KRry8KORnTYzlXSIUt8CUBDpdhPKTjLJQiUR8R0ptwp0GOLZS7l2tymZIBZoorx%2BBFtmHmiAkrPzqjtuH9IqviRmrXlN0Fq15jVO3TBGB77En15zR1ArxjRauZQmd5X59xKDD3AluvqoYtVx24MHye%2Bq%2FgJ3VEAN3zzEmQpjRRR7OOV5OQ24iB5tisD3GudApNKa6B0hTenJgVZOrg4gOAvynEY%2Bg9BVRUXifHxDLN3Ck0FbcojbW9n1RRsLP%2FnHY8LLG10R4yOe%2BhtQN%2Bnu1SCpCXJJdNUNvFPlDWEQZjoak7Se9Wi9LO8GNUWjtFNMuJs8USGUETrl14tYLf%2FY3rthM4dJLwsf%2B2zoA1mqd%2BgE9tjX%2BGmLULqQwDD7PmeOXCE37WSwG1akpKvpicO2fbmwOAku59P61whQmT%2BQntKVhUzTDEhNmT5LkyVNk8wOMO6y1sIGOqUB0pNrFaC4XvfifsJE%2BwjaFyeOVQD4iMUctFPzDyP6xNT748sLCbOHouPHxTvMx539KunApmQgCCWIM6HbPpS1lmN58qXiy3Nmrs4fpNTB3edHnK4PUu0z8UDASbLAsgpfnkWmvR0FiX8RLktbd4sznsGWfCwKJv2r9Kz1574GkJgTEBbXDqH8Nmyd5ePyB5bNhZZmTuJOw7AxoPX9DpEyiCNY7Rpo&X-Amz-Signature=1f7ad46d38a6ee0ab9871502dc6c6dbb238262d400893d1f53262196771d457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
