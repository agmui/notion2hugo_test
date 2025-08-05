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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=c4b67eddc9422e64aaa12a1457b7a17b83402859d39af976b457266009f5947a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=5e2b4500c2d83d8a0cc6b2b58bb95de20da903fe24446372756973c08c38d614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=404ae9d5bc4538720f53fa936995f02a5a1fc2ccc33ddf819159d46f9ce34f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=933cac6126e08b4f6e0c1a6fdcd4142b2c28f012bac586f732bf9107eb9aff4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=d478e06feb8b998966bf6ede40c8a69df3c910fe0c32a6a2ad9e387477bd1916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=6cfe33222a72a091ff36451a08e92d624b8070a00b22734ad0b061a6dc55b85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJRJWKZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIAR1cpoPCOBYnPGnUiqY%2Bhxf4LBmv7gWSQouF0cf842hAiEApNbKalynNHq65DoSZNEx9EsDX23%2FXiTCE0WZYxjI47gq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHdVuGlbgeHatMk%2FbircA65F2VSABh5%2BCF7FUEsR2AdQHr%2Bv2Bl1X9jxrAzq970Y7YCWlqPb2azl%2BF5d%2BubmEJLNCHlCXLmupRqfSOQs%2FEDs8EKJOXARrJnLzNfjoybsQMbD6ijPRIPyDmMYyxMzyWq6b4%2Fc5LmM5ooTxXnouNSl6%2FgZ1cwWoFF2zUAlbevtfbWOPs4AUdgqvuPTuF3oKibqJScXIA0dOBxr0YvqjOzYEGSfPqjq18S70%2B8AbJAIQ00RgsyJ10w09vnnXUsX4gYO4ZzwinnBMsl8%2BktjH9HlEILUdTk22WDwLLeWyAMGOUHCzhHqpF2ls1bALwWl1GGjPdhFqq6EXzWNVa7C%2FcMlpxyfcxUkbYOT%2B2kpi%2BcgWM%2FSCI%2FHZGzwRWtWCkBpVBW5acg3IXB7YkG9%2FsS68F0gObAiAi8ejWcsEyJJzsAp1%2FlTQ566fR8tV8FzmplfpVJRSMvWJu7ZtjJ9C0iF97N4ajXmVKpGd6fVGUu%2Fnmm%2Fizq7PAJOakEhgivLOYnwGA2g5mq4bHAwNUEfc0Y8Aizy5z6I1yZ2mQG9LE5al%2FmPWBm%2FdcOG8DBCPpTzCGqXqZ6VYSc4cKXY%2FGggotl%2BheUlziOOKBGk1nmDY8AE0zf427uulngzRpLevVnhMLSHysQGOqUB1dUAPOUK%2FMLjpKtYv5qIbmFiQ9ZOMq33%2F2PhLBdgAhTSYsErnjwERMD0hzHurTcMuAieLfp3kBZ01vWhRyeBInxCbzXU1hNTQkbGdR6caYMt0OqIzB66kLhqxVfmmRQRi9TYnFNeD5xK5bXJu4kJor5Br2lRYMi2%2FXo2Mu3CWLACD24Xxt6yKnB99%2FOI%2BjBtYFCA8vxwXsKkqsQQuWSwsOzNhlG4&X-Amz-Signature=a7312a6942984507d360498544db598ff4adb8161b601bd41cc748a4e08abe6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
