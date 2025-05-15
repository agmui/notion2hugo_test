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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=783aae793b8b589bfe03cf27c666f68fa3494768185417fd6629390b8e2ad9ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=30df624be3cf7cbeb9378bc3db29f37286abbf135ac19eea247668a51a98ae35&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=8d1f5028424fcff4267ea8ae26556f7882964cf098108bc5a78241fa5ddb4145&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=ac4b37788dba62741189003d44d7b4f22b52b5eb8ba646f32b61dfa26a948514&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=6104628b2aa71a01084c34d988665c9347a1da3db411a998aabf22c0a45c81b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=9c8924c0a4c057c9cfddccccb3675a2341b4f9dd5a5661e92a7da49b573f4278&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7M5WI2%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNFN%2FadPRCbKzngTmRvrvZOn74%2FgrdDhPHSYlaVCRsAAIgcZZGpJo%2BfnuC3sjHvXBrdYQw59Od%2B6hFcHgzH0H9Oscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO64nvC%2B6wBu3yUKXircA3RveebjcDFlS559pUq5kYrOoUCqTlcQ4EhEM6kWtG%2ByLIifbiQCoAIwQZ4rW4wqDkd5wPkKdkOFlMhXNcrfF808SrJ1wAv0V2xDpPsfIEXHPtRp%2B1fX0QmhjmHXzyTpudOA8bTbgRF8qUFFknk9fLNK96K8SK%2B%2FJEyeX%2FGQxISpUjS7jWdXsGMCL4IEkgKYdzQpniiewsgIeMxKV4BzC%2Bf37CMk6K2PWD2hAwmrouknmWSPSOTffdfzFImMqgIzp6bPLOQIKxDlCS7XrU2QdrPZ%2FBFm46iM5KumH%2F7W%2FyH9d8I2bkpXjJ8DvuH9zmqGFczrfIMvIcOKola0Yn0S4WHr0QakXaehntvmeXlYBqNuQ2yO%2BVwVVmOqYB012aY3bwnFfEeNBwCqNc5EzpwnxHr3%2BzO2ou9fYDW4DEKhl4Y9EDESVCZVkDizVlQMEe%2B4w%2Foj1ybNq%2BO8f2dREBc0W351YGW6759G8NGviW%2BcMxwONzj%2Fan3NxY1QHzGKmB5XrNjG%2B4eSffXsfbl1hc97xoma2b0gQPkSg7B4SOx7ATiwy5Rk%2FCW5bjXkoFwHmghpubk0JY2sHyzK7K0muU6X691a%2BkBMCsQfjKY6aVrGzHZLGjP0PI%2FvrlDsCaBSMKi2lcEGOqUBGDOCdMFCo%2BTKdQW7xHuZzwyLKwdw18b5%2BmaBcSfsGHd3LA7RmTZhoyC0HtAaOz0isrhmBlj1uuVtKhwfP7esI52afaWgQwwsyVVkfgcbs0ZYoHMUFDEzEQi7OTz%2FzZz6k6pE0iMsuqImqUzZQAtlmhXCB7tm%2FwJN3gsJfI9MEnnMJmJRLJAOX00k8kEswT32OB%2BDXNH75UK%2FWknv%2FgnwtGj3HARV&X-Amz-Signature=e50f4ec6c16976baa0c6f099531060b1543e9f0f5decd3433d1ae8314750d9df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
