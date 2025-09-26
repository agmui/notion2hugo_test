---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=6a8d0fca9d204823dd1fd1f92b3ccba1ac4a31af01265d5a785e2fc3539df91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=c5f35e6d6902b659e9f4b62a6d967ca52e9c1c55cef84a78f777cf8200a53a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=c4ff8a7ffb3ba9d3cabd66b8e167dfd4f09550700eda2d61701ddb6b0befb24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=4033931a592e00bfeb5f158744699665d495afb4c70d357273ea68ef7cd086ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=8a8aa01a7c03415d7139d9db08ed283d16cbfc1ab953cee0d916818cbaa85f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=df8bd553f92e19156b2abce2e292d6dfa8b9699974a6b1c6d58a85f500629088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R342IVTY%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGO5BuHbdpsoO8cSpJiQrl2dddsv8jOonAwZJFFkWWKAIhAMntZ5AOl1QhvkDlgLuHxntv3evLCxGAKJBFEXzPK6HpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCnmHpLbLdbeQ9Rwq3APPRezXbRWhVnimn3nq4Mx%2FGQG78d%2B7TCYJ075%2BHka9S532zkUHHkYIN5UknEk9befepncf1K1Fxupco3ZiZ%2FKS%2FtjHRCnJRmicDfSRJP2dnjkxdMrGxcoryN70o6HmeMfzucgYFimX05Y8NZtReEAcQZpG4GeB1tYmtfYVvZX00ddSq6eKj77lVo6qC%2F%2F3w9IDFtATZhjGe5dLZWRneO9b3MQJ8day2JwXE3E0kxx%2F5nSxUhhjfKPN8tdg7eFSyAB%2BeG%2F8vjcvn2sG%2FSNIagCQk%2F7I1ttmtReQ%2B91H5eb3j8c8PAX5BIUliAoHpFIhaPZzLYbtPRem5gEWPpT6IDaZf5T34cM7rOVCAJNHjJgEMdO%2B9T8wM4U80qFFE2PjAbBuUTn%2BSkK9A3WVosposZMLe25c7IMEgERCqjP51OR%2BxLnlRUcs4miBBq1v%2F2gYKjNorCemE5gnNkMAZT2XJf7hAORUVTETqgKPiiR27ReJWxDk9Xz6Umsi1ZsodBbCPfAOH8KLwJXRp4F3lSWTDjfM0Ier3QRwRXT48hMblHYR0xPlQWlX%2BJUD8YWChFdat7TFxdlUft98WEeHXtbJoIHGbCkAdkgKdjy%2Bh9Vs10CvAb73iFpIKqvf67Lk7zDOp9fGBjqkATfa52biUyWW8urA1NqmQUHGgeIQDPj6%2F%2FG9rkgnnhYvn1CVrPqjckukpuezCDq47QSjuJzzHj%2B3obeIoPWBbi4n1V75b6tM8hQhOAYrq%2BQ%2FbewS7IxdOdDz7oyOVMtLoX7S8Fic7JIT9YLSdlUeLLOkZD2AWAdKRKMW7zy2qWNXqaEWBM06YrMG1xVP2rTvT58Evvhn5ugG8juHVCh4SdCYcD1v&X-Amz-Signature=3e1edacd2b0dee75fcc0652304468599786cc5fbc9fa0fb2666aa4207e442858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
