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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=a8fb21dc49cc18bfb27fc3409ec0d67380c865820e06614294427e32025bd5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=4f589344f012feb1cfcb5f00b05acafea5a4af316da78946829fbd8a751d0490&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=00fbd2a58cfe938cc2baaedf0f5e4f2418eddf2c4617ed517cd6bd19c65fb6b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=e3a193af69960e9705565d64989fd25379a2888d8048453dd6d10860f969af8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=fa605f6ea5c80ac209e7f97d4100e785b4667130390da4fe1814f933b88ef695&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=6888027b41be37991cd310fbe954e9469a732cfc2f369fdfb05565dc07d260a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG4CT6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEny61oYAn70mWVM3YF%2FNRMDi2fvXyp5zL%2BFvEZC%2FHNrAiEAuwW%2BweJ1xlFeupMxeEcKSs9u7F3WmGN8JjOkojSG3oEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuv6AKWrWDMk8RoeyrcAy6p1KHj7IOYA1R0jD0bnT6RBCJqB8Q9BrfTLQzladIbf12V2rrAASmB0GSpuf6nfln5ako54hUVPUwCWMvfM%2F9k4H3fJFyrS4lOQBupEVvzlhK4dx%2FvMqF6hwvQCqB5NZDH3TuDGYAAsVSgnTJKLuqHjAaNN0hZSoInECUeiT36bxG0pqeW%2FQjLWEf8dp93Sps9VvchUtwgqQu8mxJxUw3bB0uTIho5sM8Sz7B2VJt9HD3tIcfk08UBgqxB1VJwif5ljb2uCC%2FTEkTtU%2FdQrqxAKhFINcHvCFWIEaL%2FWq%2B066Dl9Hy%2F%2FOR1uw0Ew%2FxWdgkGidYwZXz5B8pRIgAtPlru8nAYVuVk2rfr2ehEHvA6iXYkuEMQELj91361YB3Iz4zUH%2BwYuIPojLOURfQO6R3hBKpjW%2BDNJwgm%2BjliD6pzUNwmQRyHCz8S%2FH7KtPMAgwo2OvJnFBIroIqCG6d%2B0JBee9CKvKIrFL%2F4AbRimXlZJ1TUekXefhwJj1F1lo7q95lk2OR4n0pjjJHIX8Hs5eOR7i9dqR2En38yvtUhmQF5zQmKH4wjn6AkocfkO6C2PEusYgJAxWp3BBa0yyI%2BS0kCV1MzBc7G9o2nvbBAFsOvnzu2pV%2FDMHZmqX57MN%2B97r8GOqUBPh4tqjKnNZRktwEtnAlKXlv8hPozC5S7hSzfLc%2BzFCV%2BB8idFbrGSEiQD1%2FeEekgLwQyNdHpMSsWEQuAUpwlk3gsOgUo6OC%2F2jCdoCDh8zn40WdiuHADQIFpf1tz9VB8ReuI2CiBpLNMlS1oBHgmstwWLsNLTbPFV8%2BZB6Eaqo3njbQxuQGeQT1NICkKlv3U033I3vnVEibxZt02Ibd69rKhRW06&X-Amz-Signature=15f4661bc20dea7ed4f92a741b44523aa4e3d9863d24c0c284eb5e44791f3f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
