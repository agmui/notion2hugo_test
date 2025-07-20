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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=f994c8745e065a9832b1d5b9e513398797655593407c76a09e037f65e1f147fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=dbf74d6a2b822fd46da43b43305a602d1119e4fa31c81883b108994ead48f992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=be181c166b91c6ae75e468ec0bfcfb1d7cfe85af8614f0509bd972da5fb2e305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=b4ac78dab6b20c734a6c1c97214b4a31416b26ce974c28775b3172e8f01fc0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=2ccb9cab600a41c01d191b060f3807dc2e5faefeb8b8960db35dfc07fe018979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=7b5cad04742428c7ccc355f93e1d0fd12190360559d825d2192ecede5495585e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TABY7SC5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8WDBSkeILX9nXjZqELylRM9asvXm7ZNZYY9wQdJOhZAiEAgk%2BzZn%2Fj9fLDMOqCLpBZ3CW4NFvw1nJiC3JaZgpH1BUqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqjEUoggUxWvvOJXyrcA5lwyNER928rdajacoIfrDDFTz%2BkyJ20igsX9cPltNRrrvDsVXCfwQkNJFTOxaWBpgczzkLpZ1r5FpQgv5Fm8EsPo70eIV48FrE2Rp3yQpc%2FtMyAXilkVYVjd6mOMHbJePvWTEurCyVELWbFbJNezpR1Ah8U%2Flyw%2FoyrMi2hEdCMQFsWY9ffcgJ%2FhcYRwZgg5WM9ywsPZdM3CcE3PGKQYZf86wkOXPKt%2Fjan9lyGClXlt4Mxa2EKJHoC74jYBnn7OLvqa7wHedwDegp31VK%2B1S9LxCaor4C0i4KSPeLYDON%2BMNrpwWCgDze0NcMQT%2F2z%2FMFq9EwwB%2Bxcj0BgAGDOjJU9DbpmUMgAz6STT%2F7PMf2zZtXtLWw01k8Jrft6RZmoZN4sh9poMRQXhFB0VclWuiB%2FL5JfCWYCekpzKC1vEgyGnzZysJlsmKu0D2%2B6QdAAVSqCltmwfm4PiI8aDgk3Y3GZ1GazFvZUsM4sQu6v%2FelfI%2BNDoir5uZSSPKMQhAVZx0Z0rlg0i0H00S7fieZCOAE8gVPCOAzcAs6UI6Tiyw0RIbqz4CIRi53diVkbOP9KCFFaL6AkQiee3hGdX%2BW8k041KX4X%2FTOiaqbMyM1C02eAvwpUX6G73YmmUf2%2BMJrA8sMGOqUBS99K2hnxhBmOQ4mqSd55qq6p7nBzcuYWlzhedDAy%2FRuY8HZh1EwY7jl%2BQ4zbC7vX2HTaWtaqmVRm22r20N8WASEDuASMFXOkrAPn0ijnuTzo2ao%2FaX6d1if4wBTyVJcMT3BnEvXGJhEUDuInhRTcwh9a3qk5jLSHm42poEswYqlbvrCC4pemKIoPOAiLcfHALQM50Q%2BfsKKx%2FPl6bKKeVHFAbhHz&X-Amz-Signature=4f26fd275bd4ecb89c726a458a2a8c353f57449ca46afff9d795b06e3aa8bfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
