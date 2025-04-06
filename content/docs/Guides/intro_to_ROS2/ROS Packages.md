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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=0207f30bc198e5e94b9cbc85a11067a2e9fe8668c9c22d8a253a0abba06ffb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=02e0f24657c6c8b20ead9afda6cedba111357ac5b9fa504159a8c60cfaa6435f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=221493ff5bc068bb2ce995264a2ae81bfe154c8c9af6298f18ff713e13438f60&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=7af3fe5dd71db6dd60f2ae03d782612ef16bb5a0ca1b1962d7390b6ebeb3714a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=28474807b8100fe37f1986e37e799f885a1f0cc38bd97e3c83aaa7f6ba649fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=cc54d315ebd8a24be7ae05e9738f538cfb4f1fd2f09c6ac699740c9a569a6d43&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIFSS62%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjHAMsS0AnAgIjk2Q8DO1DsA4wM4BOtzj2XbNEBHAx8wIgI9VhmX%2B0Rs%2B%2BTuiCsvAahBPD7Kc37qh9eC167qaeM4Yq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEti28nBF3O6eTZOJircAyXoBRHN246l%2Fg4omZS7etF1yxrPwFRbgWwC22K5VLt2q9dE536OUouYH1myThk%2FWVNvZg4TwlmLEkeMGqjkspyjkka%2B5kBdfdqloi9kUdeOdHD%2BvlV7kTxSB4FRUHXeK5ZkR2I1Mw5C52r2DDKyyDJN6euCDZtEjPVWDrM8k2t%2BhFoY5t9lVXzyAgYQHXN7RO3Z1gnAqRbn6ZFFDXSlcm3zFzepvRTeV2J7320wsxnH8OrhxTz%2FL7hS%2FcSgdhmKkjSC1mPicu566byWCqHHZKB3MZ3TtNNXeSvA3E%2BJXge3DGADBU7kO9an6uqTDmifmCQL%2BWyLMaTwh9WmtkBh0Gn%2FJL6LhnBIo4lY1ljOHdusM60Jwdmu6rTrJhqNDeOBZcdYOtAG78ocqz8bziK0ruPsPtnsT4EBrzknQcM8hUF2ttzxEjInXYrgjDwOUdz0Vx8OQPoXP9gmdS4YPK16j9Wmm6IJnx%2FSbhQfKgEACqOS6hnYYAtJVOnfijPrR4JExw%2F9IpXGitI5sVMeZcTPI1kCPxdTEbYKbxvaCGomLthHdTliT5fZIwrTSMqAf3x2NeIRhaf7yLqKCwRu6jgqMzwqfTYafUZCzVDx9t4j%2FjzHF%2FkCVoPJOHtNjA9PMPPCxr8GOqUB3kG04LsfWUmHR9OWP3MuopYVi%2BfbBfQcthw8YG9zeToLXXkdC%2BDrhRK17Gw%2F3CoUh6aOejXBZl%2F8ccKwRiRTNvfJ87pWUTOeD0%2BZMaEVcWuJejg1PV1DrvAs3GBUAkSRsgmB3fVOZYTUG5CpmiK7AQa5vWUqil4SuOfLQGukafPXKqx0EjXSsYfN8JxvXbmyBUKcD0LM3cbpbyh4N7uR5OTexiKQ&X-Amz-Signature=503bdbba3a64b7a310e50cc310cd9005afdace9ffeeece131e46a79858b47113&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
