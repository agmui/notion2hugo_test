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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=a1546255d3857f284f582c8ae7c853ec77f836d9097213e3dff75fa22127e04f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=90814d335aa851496a51939aa3ad1ee8e35722d69dedcca1bbf84dd94c2fd01b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=c23b154159d7fcd895c0b29c94ec91600c6f798cfa91e22dfe63011519c85da9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=07f2175da59a66117d568545c3678fbc01343c8be0d35482c7f72f64276834f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=507725d25148544d3501164e4ae7f75a0756f2fc620d6b52b83b802aa6c7280b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=c10f1b85ca75887ba8e32de084381f94ae8265abeffb2f43296e3a4360b20dff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6MXQKG%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID3R24Xdwbv%2BRhNtF1WeZ6PghBiz9NeHEJfWzCB23mwiAiEA%2FttVVw7Cpj%2Bu%2BgoGpgqfggLsLgxSnzS5A%2F%2FssFKqMW0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfYy0G9TqyGLngRzSrcA9418WYq1xL4wKhW%2FxDx1YoSi0INV623epQm7mTmwBN9GzMXkgV%2BMlU3AycInEnujv8wMNuEJcSVnGAxmtEFakOrisazOOycdbjR861T7EqbKSqF%2FwG3AsaT%2FSfi9csr%2BY0yAQiq5QYtTpabzvLW3TaLqwdyalY1Vkb33JWwwJVZEtUDphJ4VdVEHKcLbnNSoHOfKWgYDSipA27rM1P%2FeZhevDEC2mL3%2FAZICd6mcPMu%2BnlTpJGzW6RZEBo%2F9PySrL6aH8BDP3hMBkNKeujhSCOvab8ONXdhtDdduLbfDWdSvdgEy0btYI9Da6fm8oZRVcl1vq5lU6u5OU8orv32bVHXBnWxoI%2F0zM7bvSNop4icUNQacBWbKoDcxzQrgM4RWb5KRR2JD9fvfeh929TT0vLf5o35L0BryvLZoYwUu1JmIQfQIlX82eWkkDPpuF3G2sJvtjeym%2BHqe9ekrQ520OyHg%2F5Q%2FaxXfszXmtel%2BnufgM2knZ4RhV8IlFvj6wZde4AMxyFj4gDaptEWG1RUvEdOk2m82gE5TZVw27GMIcf1TmobxuXl3Ai5BKnLHF85R%2B0ty8NeHwdqbUpQzFg0mP1F%2B3AQLzZzao1gCu2BLPQpw4a5gE%2F4AjthTdqOMMeRvMEGOqUBWWS43VyIImcP8cqrNf1uvmMQuC4QmYGm7h3QBldtlesr0qXsRhHhPom%2BPaDRV3I7WPFjBNBWHQXyxEB%2B%2Fu27JJoXoSlI5argqqx6RPBLHgvPDNXKWrsIt5pZifUXT2UXz5h9GdeYQXKVq5bLuAGjI10j%2FPWKRtzVMO4OM%2FDDeLTEFR%2BRa%2B9mNm6tCjl6rXDcthtyG6NSTV6vh%2Fq6BQSGQTL4R1mq&X-Amz-Signature=79ca9e77e3ef5431140f018cf4539011bca8fe07a9dcb6535e5eb3bf0adaf4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
