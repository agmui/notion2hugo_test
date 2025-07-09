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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=7608d4cb99932f8d00e71c88b0833c39a578fa45ef647366e3a7437e6af4d605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=9d6fc5fd781b55a5c5e15b20c24ab22fa0a5ce9fbb21aa3b2a5d8e1b8fc561db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=c8306dd90043e4b97f91819f540e46086c5995912412c02d7b03a2bed84418e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=6b156d2394dbe03725a00f1c364bc1e0a4864de3489ae062295ab73b03c8d6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=2a87aa95717dcb775212d2326bc9c499298b51e19c6f3f25879c6b5e8f1734ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=b2224be4281a85dc6b6d70f381e004c65cd956e24788f60b7091a1bf5e867d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGC4QSZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXQhxkSmHbbHy5vQBiTALZfNg9BoABUs2VEjWkTb2aAIhAPSvbL0NobSMF%2FOf0FPAxjG7rQy62TW7eGiMqhAw3PuvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbggeXb1KqQy6gbMYq3AP5VxM%2BZeG9QVW4BxfQDm5w5Ai3FQJXc4ob72pLKyWV8WNmM2S57C%2Bgrw6GD6RjWj8LpysrV%2FHMfN%2FtdvFsfrbCo625%2B76myrCDs45BeJ2a6DjVqUoEZOqTn4AiJ0T4dJTMvYcwz4y4rwu7IA8Q01dRYgARxxheIDmIYeNxL43UmjFDTXhOWan74KcOiSFnL6mjl8oV8%2Bj%2BJ%2FnPOr%2BfEx1d50oOrp2q9e2ecQKLmCQMJtYIG8oKCVr76SmUwAGRzx4eem9lb4QPPhfXE22pZferYtslJwObF2JnpYXiJsDJ7AJQZ%2BmGRvEXE07oSOEjLJMLt6u5sOXK60vhSDimwShssUEXnWymt5ISLo6WX58%2BFXabQ2uNcek8nIFrpzNY1bw2zedY%2BKk677pWmYbPlpA0IJneecmzv56A8gtTN4vKZ2o6v%2FeEMvEz4FMPnaN5Tm0FNPMFPOjAobE%2F2Su3bRlvC6EkP3Yt%2BjZcgV7wV4c8HJyDWqGe4coi94HO4nI2kQQjWQSPIlRc99sreg4O%2Fd2pNAhtOw9XIJkJM1e5uJyLbvh3iSOkr86kB4SOGi1SvR7UYZkJnZU5mAk8HAJGlL%2FVsdpsITiC99oY4WLKVbhyxD%2BomEIvdET%2BlAf55DDjxbvDBjqkAUSdI29CC3riG2x4CBlfTRMuhEl4cDSz4zMm9du4TD%2BPSmGu5Wkiwq%2BtcTyXM5dCSUBTY%2FYsJlnghOlp35UFppKvJL3k5V%2FFeKPHHEjdIWs8nPPkCUaWli%2FvTphXLIMJHPjlNh7P6vH0lACbbNv68E%2FG1oeYCnacFuKrrWXaxgS2VdEO1XJlZU5RTMF0rsbUCMpQu40ps%2F5oAC%2Bxp6Hh63zc%2BQSC&X-Amz-Signature=f85bf7e0e3f0c11a8dfd5c1f9f37730df702ba8d1bc6fece2cf11b52c4ca1fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
