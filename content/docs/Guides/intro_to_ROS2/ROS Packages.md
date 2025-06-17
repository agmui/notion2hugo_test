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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=08b4099c0004eac1938d89b496cf140cd35db25ee3eb8350a558d8b3918c68a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=41f5a17776ba9ced1e5045dfe83ba121762a6bbe617eea49381b08a58fe57572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=0ad6cbd210a5b5efc87ec51633bc1609aac27f70dce811b8747d091a56042fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=8a90ea634a14026f09dfd0eb10a13c335c5defb1c70654f735cc18139f8f64b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=48a9fdf96c88a7e9014fdca0db1080b81590e9d4a7a8c5c79de9e8878f8f087c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=b7293677147e965d4c5d4813a83130fbe1c3292928db29c0b8bdb81b1f601e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKKLL4Q%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Or8i325LKEZGn826UEMASZK8KpBhXq7jZMNtcEseUAIhALr4oh%2B7RqIXnGRuShEetqJOlPsYXxcx5FtpE96EYmywKv8DCHUQABoMNjM3NDIzMTgzODA1IgynUz20P6QdX5ebFLkq3ANoU8PfejbrzWHstgGg9%2BXo9tH0W0wOLhtNJ7WdZCHn5GfBzw7%2Bu2nopllBjfhFPUQLrGV6t2QrsWHsSzMMZCFb7uoPdzQUOOP1edy6AdXsdz7UqJXfs%2FsKh5BuUM7hh%2Bg31TZno4dUJTI5uZQ7dH8bs4nlQ%2BB1gtzf%2FQ%2FnB7TK2ZWxdXNyarxnEtXvrs2uy%2BZwaPxopN2kJxHASpDxoS1awJTvzeRlXpnPbqf4Ndbn%2F7Fct5%2F8kgGP4mxPbr9bHYkEWzJSGMGXcIauvtcawUA2Jmn2MFDkk2GI6eedoYryCQ9W1iSwvJJhQFVnDf1Ydoph1VDcidWkPCUj4Yey7ffB%2FMkw2zaL3BGXCEsEVmZn09Se6KJbm9tEFYYvYT114RjPGaVEbqD3DBI2VFdS7dv6RKOhqHPdwDqervzOw%2B5kQIyEsBOxg8OoHesVXrkEt1yOQTMIj7McL5x2aY3yAuLi3wPQ0qZu%2FoG30inVqUeJF%2BFTPHIDHV%2Buo%2BVxHtlAg6NREprepdTBM13Adizn9Rc61EcW1Oym7Cxl7aNWUp2AiYajeTB86znKGdNc4xjt5hroLwK0JkKeWW9iLoe%2FsFHKd1e8DcA1gP067tphUZaJTlvQ8aIPJzWfyjsGAjCDp8XCBjqkAcYMmlERTg6Tris0Bm5qCWxzpmSfVDXaJKCRHY%2FdrLSt9C71Y1ouhtNUe0U0uB6g3Wxutae8mWp7be3b1ElY9YweL9vYlua85IvIKAJy3E6yjMkuwsThXEPEG5Qd8xFxVSGxrhfYhGJMwbWDNon8ADwi0lsz51lwroSF6MxJUTNoPIpyW0Ghgora4fkD0fDChHzRO97X6nnC1UKPJmPOvb6FbvXs&X-Amz-Signature=fe6daf5f8e49164ef35f1d79e5c63cb391d8a606685c6f7844619194978519ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
