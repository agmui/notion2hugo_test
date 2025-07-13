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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=070e59e612c23ededa3e155a8fb969ffd5f5ad43563d9bdff72b2c8bb08e9df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=660c0e82c2b2b5f0b9f3d7b0c8c29b9f2670e63ca6e0fd718dc21f34ef5675f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=16a895c690a6f4c7d2a4f868a0b4e67c0a06f8034dd1c93a4a014887c2a702c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=46e44db401588f9cbe105338566587f753cf62fbc39d493e766c7dc9477212d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=2b0fe00cb6394f7219b8ed45aad2615735355219476eee35ff43f79d50743213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=4430f89e9017fad6578ad12ab6f7d727a1902b20e38b79743468656970d5bffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RIG5577%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHsYnTPBRyamFHAjonqhnX6iU%2FEtp%2BMb18d%2Bjm%2BNXPEuAiBrNmgPWHHmU3CcdZ%2Bh3NNN0bnytbSgbquPltxZYHbyFSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMvmpG655PTEiAyDNhKtwD3%2BsojD45CLE87hhqCjg3pvWXUxmaIgm6Aj%2B6mh8HjR%2BW0IyG7SrC%2FMRyJ%2BSF1uEUtCiQ16AZD81kVjnEMTrPAQDadjzhhbV%2FlfJpQgux6pTk6Q%2FzA%2F5ypf%2FSnW%2BUiEodqrPhPG7zrf7Wkh7cOhMbmf%2B1KpvvCGz6kPZZZzOGjBVWcR0gAK%2FdyF38%2FZOW2FQt8YWiskn9won6%2FGLhjCETDUtUBW7pX%2B82I9nsneTSGkAYa2djkl7WO%2F6lRUaKFAp7avrGk77l1Ty5fHuQGY7L3AwawMu%2FeIznveR5YeDpczNJr4EtO947YKIKZriLNnIBY5h4%2BShwi0HWZ%2FH4aYVB0CqybgaLmBA922lU85HNlDAEFD8UsaqQM2Q8tTvNTjKaGbPTmzYkOEIcSf8ULrDHSHZ41y53ePBD%2BYdw06BguinVoL6JZgoYBw3sbfhqePYkIc58%2BgEMlIemKL92mFVCmWdt8%2FTWbwghfywn31pik%2FkEDewi3aaZEFonSoQJhM1YudluSoSxj6%2BNxkfkJUa2UA3Ci1mhBdU0IsQUNTTLr78vI7a7f2QflbdwPzPyIFWnycj3T%2FZ%2BRbqWap5RPklqK0m85GtuSMrbvv8xAUwr%2BexG1wZUQCnm%2FIZIMHUwrubPwwY6pgEYaYlROkpL8%2BolakHAjtSRJgAkFdkIQ1s2XI350iawID5%2FPAd%2FG8ZpleIQz8WnmpgbWxJKGuF74glB%2FJf3ZVL0lPYOQjjJD7Y7nN%2B0YmZfBuZWWiup2%2FBEGYACBBM%2FCf7od0cqD0nuEyf%2FSdKrfAkOGtc1Xq%2BdKV4%2FyzLwGkgH32mYKNgrnLMQkorCXnxPXdvw5IKLMC81qpLQYD26GSO7pVHQq3yq&X-Amz-Signature=37ec9be0e6ad90f7365fca9b9a31627989a3820599da6d0459f8f5e91aa1ea48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
