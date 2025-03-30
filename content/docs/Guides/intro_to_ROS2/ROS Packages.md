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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=378eccf0220a865e4ca7a5157345e0b023c2bb1873f66a0d42fd6eaf1f396c25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=c9c8c9b99ca5d440f4ee5602ed0c6db5540afa3e61f938f8529273a754401d65&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=ce1ffbbf2517d7c0e4d48f13e37dd3668b78101c6c5b8d90fc35b6861e954bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=baf9e817675ef435489a29ffaa5ed35892e519304ac0901c59520c3ef9483e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=c32a7a21f35eafea7cba829dee179834ae59d249979bc1cd780e48376d004d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=dceda9ce3c46ea71c0aa63827b67a632d37708b1adf01d3137187cc1e1488cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YCNBSR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCYi1Cz%2FA6kFjFgmrOqYYMVk9ks%2Fc96SzBoV%2F7WdfwXGgIgKIEgjuHLGhKfe9tHKBhVxw1WWyIpI5PgbZxVmJeSW%2B4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIS4evykt9yY6nkkyrcA1MgIJlMrkwrEr%2BBgkO9MOAJBUiTqxRp2wQYU5VXHGxassihOaERnhZmIcpYAVgqObYKKLRf2f4aymK%2BL3abhwbtfTmNlZXn8KTOGHpFHIXUMob7Mc311cHRo6sVGDobVIaYAsAch7lS%2F9qB2LAX0Lq08DFMZnneUy02rpTk53f0ObbKF26pW%2F60X%2BjXYQgNB9pfbHYLomJGUR%2FxXLGw6Y%2FOIawvdZnzBRFTz%2FFQ52RkEN0FIjw1gNbLE7VRHMDWtQtADCdFZ2uSnBlkhMBOhs0q6eo6ZHIpiSJu4WhSR9C6LimEkehRH%2FkHahHnuga2YlCR7hKqGe%2Fr5NqLp7xhX%2BwX9S6E3Zd9nEq5%2FZkF%2Bc8KWqXQgSkGazHdwkbgf8ySTYJMMWjMo4V0zeNE5zQ3jijsAYgx%2FEb9tHsUTGcyHp3LHJGs4vLlDVXrWa4sERT4qQEKw3v%2B7MjT7VyRzTcxJicr2Q%2FDOfA8lfL7%2FnNCdBgtQyESPsoAvJevTEKwJj4GeLXymMpaYERwZsVASkD%2FSVgRXNfa%2FAnoLtcf1LEaEEEaarLkYzj2Un%2FxTNrWzJDK9TtJwyu96uWtNeyTG4hKfsLIBRU7F%2Beuiu62tl9Qg4uWm3QylixHiIBC48ZJMOTpor8GOqUBxH%2B%2BnKdukP3nnYZ97IX13NWJTzmdqw6BvTQRGA4VgNT3M7sF%2FnEORP99pddf1kOibcFJ8YhNcqltXXOeuRrxo4XwnsM2A9A6UG3VZodgGMFd5zXzZBrON%2B9HepI5arr1OGtBa22fOFw2146hW%2BuG6tHNY9y6A8Cyxi5ixoCa7T3zAr4tQSc4uUcTjDydwKMVw7vAIKBNiTCRRLN7kkmGE5Ul3Ejj&X-Amz-Signature=aa64bb2138149d0665b7001ccd23a569e2d0b98053b7d6551d96daeefa53f7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
