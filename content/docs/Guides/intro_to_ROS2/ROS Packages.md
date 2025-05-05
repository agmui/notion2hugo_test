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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=177f0722da531242ba18149bd1d51bef9a94f1c8e68938492e433041328920d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=3cdb6f0e2872bbd5870d8870347c757ad75100bb1271ae7707e78894f383aba3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=3a77fb90eb622d874b4eeb664110747c028220052d74ca847f92023ff69211ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=b73946d9cf73a5cfd409ac9afe2a3cf55f406c60ac3415bbec5668c58f41ddf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=be6863177f40ac50e1c688368d35f13336abcd7002a3f7b9ec177db8af6809ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=ae1cc7136c3fc91d59a309647b95f9842c95ba907a8257188f015b5e83fd87b7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLPUHTLJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbaueG4uG2M8nfMBltBIw21SOD3PTU2MIm3HLJZg4SWAiEA7HJY%2FbI5WDuRAjUTnZqtkca1ziSpq8p9cDYr3mx0sewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFtQtFabZtfRndVn6ircAwreEJAaCNoHgoLOwRIjKASEA7unULZqOtrihDfy6%2BGM0pC40nuqDyBC0LlI0OZUvZpI3IYV6EgimwQ0ZeBNDBh87k5G%2BPugebiuErijMjUPqUs4rKknVoj0v0ajkMS8KGQcDm2sx8DyUAQuR6WjK9%2FavXM0QfRUe7fYv9WtT37bEGBfgz3Eiuk0DkD2Bd9EHLELkr6NxLlNKaoRamatCRDAHZ9aK6Ce%2F7Pg3NNLBBFLpSnb%2BT90K8MpUPlRx8OZCqUso20qmAjCLI4x1E40OkfhxbIb8dU3TXUvGrcIUNZw12BGQEx%2FlzkAqY7y8rCHHF%2BPu4cHI98rf%2FgfSTF2ijybuAyjcU4%2BWakFfsl9E%2FnDh4xnPjcC5PLtyM3tOqwZ7Ip3PQa7cDyhUWIGr%2F0uu69F4OOOnTS9SFREgS36WrlrkAu%2FkrGMpAHUKPGA%2F8kBSOt0qZNedFGeB4CcfXSUMX2cW249HzbnOIlnWz2%2BktBZwT3m3ObA9lq8%2F0%2BJWkry7ES2KJq6J9sBkofs%2B%2B2xvpWteLsmvF3jmIlbhei0LDBBeg7muHSteLtNqVDmoqAi4IlN%2FpJrjy5fhrzhf9cz%2BnMUNN6BuE5ipheZLzQdtspp9TQ0H2rXbalDdQ9pMJ2W5MAGOqUBFGUguTTRboy22dvffo8GlfKa7pKlACbKiTeT3ELuGOzBBee8I6UwpGotx4Xs31VeZ2ky4d7y5zwEz7HhK2k552uk5PFrzm%2F11%2BZvZC8QgXl6bY8%2B8WGeV%2Bvinadg0ti2tkdyvjWnd8mwDhaQVzMmUiZ82aFcnr%2FyNQQQK4CeczqWZul0gks0YzzP28zQpYqlLknm2t54IgyXQ5j1FpuMcJM%2Bppo8&X-Amz-Signature=49665c1a4b2a2c09701b7611f331e957f5e12be54fb9b43459355d8857b94ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
