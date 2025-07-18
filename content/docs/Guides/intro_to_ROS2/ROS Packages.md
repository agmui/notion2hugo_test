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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=a6beac88b9ea8d267288efe69c951b5802d7ca5913ef60303167638b47cf59ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=2822ce8699c84eed959ec23ff19a03590df460b663948dc9458d3a80519bbf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=8d64f779e6723bb993f31b4cdd7033be2ae943d5ce7eb886649d382d7b9e4e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=ce8aa00649fcb1338aa601496b40dd979a2bfe5fd88fdd7c4a39a35ce472370a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=cae2d2b55b41b9bc3956bdb1e93554f7ebccd9bfdbd780a19b9711747a8ff33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=3a7a01423c14b1c9eafd735ffe201c4e211790828f948627b8d6b4eae21d1347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKKKZB4T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCwmPMM88b8QirwZchHTi7Dw2bugmWSBihKCBG7QvFOfwIgXWsJpJK7lEiLsNogj8l0MOmu31KorR%2F5x%2B%2F5zRgrUVEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5j5V7%2BlJ%2BdOGwzNircA4LQmAI1xrHY9xCBwcXPeNbxSJs88vO8UbsusdYhlXqyFqrxtTX0Fmnaq5Aps6OAl3SVEe0fCoUMBteVwGSGXoCTk3uQMT00qWWsyIeC5owuy3imh2cBHuqECvlaX3sdWxhumpxDH%2BPC9cNGJhZ%2FSrQuxiJWo5rXTgZRUSFO3plZ4AsEx04LteBxolomzY8qJoTQP5B7JHBEW0CltU1t4JwL7XAuazce1qFKgWYllYnl8KHwRccRUX6MciyMeHFe07PsO4WMQhY6EH%2F%2FG%2BS04ea0iYRvFZKJ4O4OTfgrncEq1E%2BFGZflp%2Fami%2BgH2YWBPOblYVoaP69Ft3LCnGo50dzZ46rdf9fZVUWvrW0ZBL0Uy5AOMEtwBvT7a7HZFbnM72jkRpUD%2F264d15A6e1ZI1Zsm4qZg7Fnv8wD4QKwJmK%2BKAmRQY4fsfn0u4uv6JvdLf9CzSx0%2BYvgnFbhlVOlj2G1CnaQP1rwMWe7WHmG7RfKlmx7Ubf0EGSkhQ6aBH%2Fh4SQUBoUbQBRggKIESpzwfynuPT9pb%2F1ijrYjhgRjtmoeQ%2FXJHq8rP0NGXCfM8v0G4Fzamwz00mX7310EiB%2FXm0HyKm4C01LoOW2W7cKAJE3Ms3hqbObFLkACx51rMNaI58MGOqUBvzTvGTyXJQkU7N3WDikJ3jLxYXPYdOnGv0SIjl8bcPiAft%2FdHHhesdQDfGiMyK6%2FTrfS9w%2FmfjcbuP4MbKadWz%2FoOv7cAjFZKcBeqbmOIhoIafchsQejBk%2BsZ%2FIAn35l9v0Rk2M0dOI3mKkmzNKlYMAWfKUtA%2Bt%2BM7J93x2P2TlzBaIQmKJW4F1qcsqOHXDpWH0pY6hHM1ucJE0zyDZjUlZ6V%2BLi&X-Amz-Signature=8b334ec84ce5e7b951f272eef744e94a92e1dfdc84ebee8162e8f2e16b94ac0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
