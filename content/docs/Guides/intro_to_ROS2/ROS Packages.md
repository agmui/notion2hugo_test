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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=67538d3bac6ba31eec3e7247b33e1d28ad68281b7b255ae18b944bc8d8dfc88d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=249f78a4c4c335e9c68cf0978f8c2a92eef13830b774ab99522e29784e5bab54&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=b93dc10bcf02dc7e96812c9f528e24cfa07b96b344953d75ba26336bd6653501&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=7d538522ea87002d317dc00eb5c23493e7c92040976b6754f855b6ce3cc45b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=a79a52e5992b93b64c01d1156d54d9176d49070b1e7695c67a992ee307a1ef8f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=f5c4dfc28eab451d053ea6938b9d223056ab7041906316524aaeea2f89201837&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5QDD6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClc1ql7K4ozDOa3uS2c92kG1rg2KjR7U4wBz10IBxEjAiEAxpg9dez0AbiSasaiHrowJpIWGkTVfLtdGKTpIPJ7eJ0q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNI7kXB0Z8dGP7Dp%2ByrcAxfEB9xyqMGdFOTJ6YrBpElm0Hr84u1KJicpu3n2y%2FTdd2fboYFU1KXAH2od5HUyq1fCzoUWAjgrQJ1ACz%2FCOLXIKFc9QFBWJFE8T%2Fsc73u6Wu4Miv2X6Mxr3DSiH7%2BtkdTzVZUrpfObdto7bDd%2BnG2YcpTTOzZh6rjKK9IMyfv06QxBqED6s4WbXJcyUP8QNOz36x6PaCXbXFsOpoVuRPch6Yuxp3p7kdk%2FzPYGaQxfviA7avoK6V5bGyuspCPLL%2FqRUeXKLKP3DqqW8oNs4nT1Zm%2FgYjcnr92ITXPRFCIzwY9ddGgzh7GbqK5R4xalvZOc51FjwHTNj6JG3GLa0OVfi17f8nfmTg8NTvwY2lNOZqXwgDR14w7WMr1Sjs13kYDWLD6Lz0N0WvaitsarGnieyCfbLrvaO5tMpd8d2vY01xPcO9X5E7IRL%2Fw4Qf5jjcUfXmxyDBfY5guKrHk5mKOh%2FRv1AvzzY%2FEaNxF4ueptwdEBxoS47obe9f0hSv6O5pzJ%2FeZ1LbB%2FZ4T2eIyIl1ovwHugbUEA1avggKUwyp96xT0l8JuCgQ%2Fg5W2IlYL2B7zaiTG1NpWbyx56XXI5oaO6l7Gbm5lmlv8pis38fk3y9noi40HRy6H3syn%2BMOfu1b4GOqUBe9mHB3rPh%2FA4HBcSzqHb7yezUzJWzah0Jk5nq49PbV5K9rdH31eQMJWUYNgpz3Grgm2FwTetrbqgtE8uw5WlvnTiPoLK0OY9vkDkTmWf8ohR%2BfQK6tIWyhlK3V4ZkwmdRgC%2BZiMaUX%2BWG%2Bq3HTX4aSJqmqqqoujqgSGp7S8BPcmr4%2FOpSrnTjCythEEAlDqJoTJzL%2Foe3mJrXF3wTsJ2vXiu2NZw&X-Amz-Signature=ae6aaaeec2c817214744adc49565b0c4d7170ed247624c969bb6755d7c875a89&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
