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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=0278288a77673857a6a4507ee20fa911b8a78143bcff27ca548efa625665da88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=95aec30d04679349b0a40ed5965b1fe8a86b5d9e6cb8a7d0c4ec5dabeba2fd88&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=4cdd13e347250ddaf9eac0fdc52f9e42fdca79f902512695e825fe6dedf012f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=938d28e9f320f4df303624fc10b98fd069c1614f0060b782bb7ab5979a73f155&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=6fa662b2dc053c3284e86029f87e09249a37469238cae81d630e48f04180c816&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=8ff36fdc0633760c32032d25491d9acdc03342446294f5edebe748e034f84dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XXGHC6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBoLv9%2BZmPmtEhfGJKgmpeajKFaTe2ZLiTA6enh%2BmQqZAiEAzJUCr%2FEWhoBsWKLwO5A6Tmju2Ya1ZG4f48Yx%2FtLetMAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFTORTfDeTrDuEx%2BayrcA6HML3olKc2g5Bx6%2Bfl2cQqrH1%2B7pB7i21okAgAS0beu7Gh%2F5y%2FYT%2FtKOA02igePYL%2Bw4qo7RDnM%2BptvAY1%2B5SnxOOwXxXotTXKAkeaJd%2FOlFIp0xU8VG4LrTe9IhPPrIvwsYeJ8KXetANrM7mFtSn1KkYqtzn17YkX%2Bez%2B%2BEbAAKLjE%2FwLkpTamC88xRVTrorpSKCWEf3nqeoNdIEdx0kFZDuF3Bd5zmdBslGJ0YwE3uL2UsE2BUWUPwVMQYe%2BYpdNIU%2BqZaaWWy2kfsEzu%2FDssJoP5j9NTokizXCsIPyDWyaC9h1tNe0Ng0fzakeabp%2FHtT5Wcn6%2FNemN9Rq0A0T7svT8%2Bqks9XlZ849AakWNzfrBzV%2Bw%2B8lNZOFBOtmNgyM9piyTUBsWaJSwOOQkBZzswto5u20FJ8E3Ijb0NKvwSqLtQaXAf5DMLs%2BH6vbKNwA9j2sKa1Q8uKD2Xrurmp3ZhY1MS1rBED7a9wdBpP0xXk%2BrinPObmRjWmgD2zMgH9Ha0cSsjkr0cvrcyHAdpFjo4DKJW7ccmJdJtUMkjPxV6mXDtQbY6yQI92SfqcaAtmX16DSvy6oEyEcubDlLmpqFAdgnt5sLxEST4I10yvZ3Da7pRKLU5%2FHD2LmTRMMuCsr4GOqUBpa8wvzZChFVTYMaRICKpe87oFIsLpY3ZlWkvvWD8JR1YmOl9i0OmwWbdZYDL%2B52URvWUQBYwOEvHjryjLm9ARvMqJvz3EzY370TZIdSMNaa3dImTGAwSEnVAveBoHSKAhegPo7I8UrtxkRiWliMSmcyCL9A4Pe09gu1jotS%2FwODEdUU2ze6Mo0pO4auNVpzWzc1UHHfRVtdrEURQ70VRotncAHwG&X-Amz-Signature=707f0c0f73e95c6293b205220fd424763d02e837855e6189a4be262e520afaa3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
