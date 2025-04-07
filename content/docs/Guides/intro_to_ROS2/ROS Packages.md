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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=dcee1413a82d2e59600fc816df8032f049568848929deb961d91a0a03a776b6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=e29df66e232613a2e0945526dd204ef7bfb7f8c14fa2afcd98d79ec412ed02cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=9c99e2d1422a4066315f1c851c8a4450459c8378c09e501d56ba4867c31bdc1c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=749d931b83e69591281af334ac75f231617bb594367d7d0b52590c6c4152d0be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=869122cbc1726cf36825160e45a16e49dcbcf28251dbadcb55cfd7f1c75885c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=71e2b3dec712a8afbd4634e0d4ce456ad6a7ef34d7c216577f810f843aa769c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCCKQQD%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZRCiRzY9ym8QnMHeczHMq0PsVgWkfOUmGq3DCCz9fZAIgcQ%2BTy5%2BepV8IS0SKgpRyZQdLxxosR%2BOVj8aLsKMMBVkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAe7Pu%2BzUF9xunax6ircA4yumPYgxk5g1WPfKDmZO0faNXhmnKQ4wTtulBBJ%2B2A%2BkmIwfRIsqrnSlQAqJPMaqVbsJ794CR1CyERpbFSHGBLwumVNPQeCNTIbxWLU9Liyr%2BksPGkkYnqjhMjG6nXI%2F76kH2JhVI1QDYAtRJEla2yZGaMH91n59vigaxuu3NdRtT4QQCg8vRHWUDPS728K97iATCqVVif1F3IlQNqlxY5VcTWquInl%2FyirxMH%2FqmhU7K9WSVV4MqMOtDy9iJuVTgW01l5RLGIfdzTaVEV09umLdt1bRMXB5Nbnv3I2SjVCLHiYPkEG4dVtofFSGaML6wtzyHeqbzPE84C3i0Ewf3POkI0yX6HGRsTk%2BKHOBDrZn8mtEm7JAkiQexFuN%2F9iJhyAEDlSqxGokEiYFrAedzeT2BvEjFe8VjE3KtE4J%2BvvTXPAZ8AHaSaqwcx%2FaOJuHEshqE4ZuyIBCX0oYo9X6Bnl1bEUW1E4capQMSSddys2PAe6vW9Ved%2BmLLLQmuMP7Xz0NA4z3lpYymXvNgIp4eVc21gb7ZRKOJ98oQZmPvsZqYC23dM669owpmD0ladPHhSbOSsy0zRElLvkYM7SCd5yEnDBdA5Jk59abluS593wJOpHqg9zddE1O%2B%2FMMNzk0L8GOqUB2CCcsvO0wA1SHzQL8jxqhwn%2F2fXcifffQEhLX8X7rLFFL6uA1jQG33p8z35%2B1HhVGbH4cB9vHJ3skw3jQnPBp%2BpdCJsAMU6aiQID3jFruFuMepwRzjI7JmN4BBMjPi45YWi2jimEqkZimVwkphCszw5vwuduONatePcntqmMcFvNrTi0z3JFCh32IovSIbS3jw%2FbZCDyLMqlwzf%2FH7jRVfbm5vlI&X-Amz-Signature=f9d5b1b3bbe0a685fdd554fbeaca405ce1a0a9506b6859b914071c8120c5327b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
