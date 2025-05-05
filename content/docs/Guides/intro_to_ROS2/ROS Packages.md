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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=5328657da1f1b9ca3878f8eadd5764a7f5ae7cb3c303a16dec95d187fc5b6884&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=125d63f193718101adc746774a73377633c7f83c330fbb1e5a564fc3e05d2e95&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=ca10be58992c9d844422165fad4d4e63234662ae7b8eff4dd1d41f98a51e0083&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=307c5784186db7517a82821e7cdd357437d84b922be6fa97a0829c642b5aeb23&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=3c3f2c65468fb436a3dea543c31615daf373b9090abc304c49c86c35507b63f5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=16602b2d2249585b9d8371c93fa6b66f8cd1cf7ccdc68d76125dbc977906b856&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KSC2HT%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3yyCvZiU%2FJG0TsSyK%2Ffp3LOS3TyUzCdVP1C7U0f2cFAiEAiAnRkByIA3OpgcZdXNG1K5155JhrAQf6LEu%2BI11dVwUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOawBIyx%2BaM0k%2BB85ircA%2BUVPOrX%2F8KU7ylHMp4UYbiZmoxTEMKYxSg1lRC8SkbOTgiRHxrOyqiJfick%2BK33QnIMdfnp8OOEDNqTw4OXt%2FSTu5U9t8pOl1FOCNdJnL9EU3txA9IuY35Sdo%2FGWXTlXxjBG7jE%2BkCby1J1F7bdiKITOjkD9JzjZkSIjn6ezaIMu7ga9bFdM6iKby0g9P7%2BaPdwy57jSDwgKOKyo%2Bj58Mz%2FiZj5E5d49pd%2FzEVuHPgwHRl66jhonzYNmFmEAJ5BZBlaYR28146v3iFdmIk0mlRHd6enWSmVU8Sz070NCjt3QHvu0CCbU2sqP1CZ9Iq5fJ2Vpa3qyzeKp4POvEb%2BkVyNWO8mA03BrC6OvpYRUyg4VyRbeV6wibBBLxauIJ1uccp9MQia7bfV41aYsGl3Kln87uKNYaYfs0KJ0kHTH1E6Ye%2FXb0gzA1qHP7yNmcUzaRVGPsQM1Rlmj94Oxlj2vdc1XhESJgmyI0YLKej3wEJcj7F%2B%2BiROZTbrJownd1uP3Sxv1YJwyhr9sp%2FuDyeWAVTJ6rWbx2sUKNxmG49B%2BpLc5bB3FevoeVkbNmAIYjH5Q1bjyKrMmKLPrJmHVY2fU06ykt3wjuGXypuwZ0QRpNsmtsR2HJtnj5lmBAuPMOHP4cAGOqUBOLymJLgfxWSjeg7M6KcBpOUFwKFMM9lMlTN1%2Bo34Ti9xVIZ6uhe61qo65soiWthkSIyyLjmUx3arJqojk9%2FtypPRJ71RZF51fJzBMccvpHTQeumbsXf1beP0%2BgrKNknUZpD0u%2BK6kssI0VXg8jvy9mQ4xMcFvMQS%2FrUlo0PtdKooKrLoftY87JXkk%2FMxsequPU2oqPVOmwzkTPQNjOmNs%2Bp%2BfEmw&X-Amz-Signature=5f3d357524186eab4015c6adf476dda5d94ede6969965e1a11b9338b9034784d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
