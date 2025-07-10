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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=7efe3857bd77f6f2a6896cf3f35918f9e081d348d80b50d3c1850851a88e15c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=2bdf20fca1dab047ddbc4f6059f93c34950a177815766be674a8da34821b3eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=023b648472db9b6d09a001259c7ed0d0fe7ec0e6ae5fd0a2400a70b4d2f0adaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=b4f793575b75b7801bfb9d1752724ce48c60ea0935817109e4ae1013d4882361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=bea5506e68669b9ac5c38665f7bef014dd7bae2e67e4de4c11b69f17d8cebefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=3bfd5a158f77087bf9f28552c006e727c0eec31e6b870248eaeb6c02e1ba3ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSBRSRR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3TiBFz8%2FTFKjaxjzUsSleMV2KOqezla0UhwMRi3rMlAiA9xLARouoyTVFcWyVSLcUPR42JCzpVSNh14JL12eO0fyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsdbhmlVCe0QDkRpKtwDJHCbYsJ5L38J1PNSQN9wvnVtihvE5DTz2XHNdRXFMzSz2tlL55kgJCJ6CHt0PTIX5BQmJnUHxWdNdGSi4JGH1%2FkxU0yMQd%2BaE%2Fomw2DJwLsXQOPrw1ZEkUddtly39wCe3rzUJru%2BxUPC%2FQfTLfQeSSlNo4WjS2oP%2BZFhWfPd2DbzVK060KtxDI2xwQCOzk9oPm3Z2MEaierAw8cBh3vhn2KHHi3iVPPbjJLAkSPrQo5Rg2NJ%2BfNT3QYYBXYaQ6xihaTt4hkyHRdprIM2QCHktGJ%2FO5bosdvNhuTMpZB7s7U%2BwBgoP0a6%2FjSWgK66l3vi4ioOa2OYT9Ig5bfs5w5u%2BHfmc1vEsiz4lsXvyGjazkiJeVgvj89MG2EpciWYla966SAoSr02%2ByaskmiHdqt9DztqJYN%2Bc2pTuM1%2FOsE0aGeh%2FQvQLL2MRXUS641tRWolFql7oW5Uc%2BlAq6vxcwR7Lxqe%2F4WZQrahm3S%2FbTgUZnanAnHffBfJtlAFQa3TbB88VawhlXSVKAg0huOGF5elWS%2FRaZw%2FczNORyd6aplveHLwSIEz3KoE7dSgi00Fx57Ip%2FixOvbRgoGpnwAodQ7KmudRwjr3EwGLBdFqdN1SGhOGkohYUQvwPZZTahUwuYG%2BwwY6pgFuApeqItRgZi9460QBW9Y9gnGGC0sxsyGTOdyqhj%2Blc3xdGLhD2gwM%2Buo62bCL%2BH0tklKbNoAOkC9JyDKYTq0xw1qrD1eqi3%2BNXFA7VR1KLTxuH7XF3Sajz6vikDK4F6VM6cyaopXEY%2FPYdfQu80dGWdyNeOboCULMq%2B%2B95S%2FJ3hpcT92qxVeWSAIjuiRw1uY7UYiFMusNlX5NdwjPxC%2FztLIvaJuj&X-Amz-Signature=43f058b7657d640e76628b35720e301ed5d0281d130eb5518da8ffe0aae8bdc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
