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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=9108f6aacee02c72c9aa941b3db5bf827a5825520907378935506402cac2ffde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=18d1df19ae02b2b9e777d15b5fadd6c20a46018c9bb108871ee75e293c8c2e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=1e9f28e34d23f8313bee52f4529d7349bda6cb95a9a56dc8904b998fd523c067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=3242ace4ef27a86bc4825caef1e3e02353c1ddb789b6f6bebb615b274fd94265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=ae71cc8a69e6395fa97122ffb38e8e0f092aa18cfbf1b08e8d3faf49ec19a1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=826506ac8769306566c2ee2a121fbf0ea5af84901e658bfa5d76fc75a8d328f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNYCQU7R%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCICa0GDvbNXh5sk2iYjrXqaTIBsyXHjSuEUzBfjg4mXZsAiEAs6DaEVKZ2Mjk%2FBwRCIEA2SY8D4jNuwB15qXCQEzN7Xkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHKRO4rOHvnYxltQ2CrcA9gF8dnjCoXrzU9tHFFqd5ii6JTmYJDzBB1l5QE%2B3n2k432amdJVxII2T0j3S1b8dsjqf6w3FpFwy1O6MiUayUeerrUJgCCBcFMhbaV3hPh68UhDCbV1lHmr9%2BD4r4czFEyySWWZ60UovnwZEfvi4CF8VFw77%2FXxuXsAroIM%2BBaKmW5tMmJva3sfzoxlj8jmnugaKBp35o0NqSui6eIxu93wtMUQ9ar42AsBVJ3KcwCWMpTjntOrcWnPG%2Fvf4tnM8MmDJMQPoLn9WlJJDDpqS8vop54FGnVzu1VFUstCgEk7UduLi0LXdS7yAoPHyo42D0ohwqBRH%2FJwYbnLu4e%2BATUfCWyxCT98SzYwfTdslQKnesGSDI8O%2Boua7jdhuWXn95GIjhF9RfcDruFT1TUJuXk9YI5mdEzuvXB9Rs70DdcYh5teA2EZLFo%2Fn56R1w%2FsYDcyfndwxBcXwiTk%2FJovHhPFfl7naDEuJEM%2F%2BUf4mUcSuWa78HYDzAnjtoHOLezuEgUGA6NqcspVYfI3%2BTH3dwGn%2FxzzYdhVY6jZpgaoGOERYC2ijTTUABf4GLI7iOppLTANlFd2NetKSs2rFPTKoUOQeW1sn2dHT7YQscIafO7%2BsMyISNm0e7cq9XSzMNXK9sIGOqUBl43cQOIjwAf%2FRfS36rvEfVCHEAhxQK%2F9nBb74s%2BjsmvVjUGudp%2BaEQegQZZo%2FueLwCs5Pgxi51%2FXffHi8W4vdV9hJLxBgZ%2BDbZMusi6vpex7aGKhuU6lxwR6FiCGgdcA1CwNdBiJ9Qwry8maLsBZZdaU0czUtQ0twDVzekQJT9PGqeVccqVFQU1juvb18JkLuWOWeOlxaOpLSMpM9xBqrGMD0EZR&X-Amz-Signature=39a35ab8f687061f35b7599934709b13c88081864692bdb1adf9f1556b1139c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
