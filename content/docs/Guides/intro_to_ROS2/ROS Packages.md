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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=2e1ad903e90a02de7505f45d12552f5a7c923e4e1eaa48c9e81d55660954b514&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=1f393d42a18c6bdfec1132149245cf008f4f11893e7c8fae60b19a366d65495a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=99fac3af7eeea260f73715fc8a4daa315d044b4d531da85221f34256208efda4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=dab4656a22803bcb953bd722dcc56ac6d484c7f19620b35d58e3a1c919ee3cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=901f941856cbef97ecc19ddaab6e5e73c7d3911a331b070804fbdeafe87214a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=13ab2c24383503d15c44b1042118fd04b1b4839a1f31c9d53fa7af24f4e7c9bc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZJL2RX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHxIF%2BAo8fdlDv%2BKRgdmVrpu7acGk0P5FBOt%2FKj5e9KlAiARHI3qCNqlSvVvrFGSUJJ218WBTCtfaeOtiwSzDw2oJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQhgDszjZcJJHcpNKtwDCEbR4ReXUxLC4ZT8QmMl84thkJ9p1Crb6bvGuC%2FR4th7bTFkhqVNoqT3XNJ5BXcDPPcbLAHjhwm3WRGvpM2USMJU6Ddy4j%2FjrPRZziOsEG%2F%2F9aAZgi5gQHB19XGaYMfV%2BJiAX62ndw9bPHviy1NYmoiyRKY%2F02gRfWnlhK2Y6E6qFFBruof0UU85oZINA28HFUUyTsXE%2FJ9WxwBgtrHA91tAi0Z6CwAYJJhWHa3Zt4IJsELPvjcQZ2M9TSOLuzxtPhfEjs9rAj%2BAGUIXo0tlzkQtcvnOh%2BYRCA48VOWEfWlr0YAeXlEpMkoZwwYiNT2GIqt%2FH6nVSsPAkmTRtKGLgZq946o57bcmaEPnZ7WZJH1MNZ5tVAXbqrrLWYk0Agb%2B1EXNQ7XB0aFn4PSmrZbTP1URejsxGV54qmGoDc9wEJB2h1De9EE219BnJr3oyGtvbVRaQZodLfpY%2B%2BxypfWJbotiiTp2O%2BZGUhl3%2BjRMOMPL5smHZXH6F91sssE4sp6J0YDV1e9WUEbmKPmkXNdHY03MlT22EPt9yD5wBaMuMBD2BylsRvqGw6RyWOddoL2kP1ayi8xzfSXwZQFjrKvAOiICBcUsv%2Fv1c42%2F9liQyPhUXwUHTafiWK7TbLsw7MGOwAY6pgGb1awjK6gn7RMp0NwE7txqC5PaQQCclT%2B3BvZCu1pz820Ljqd8VUe7%2BmbwzvB0Cppe2grkeXUFbfna6PPxaQ4Spugly4P82BPvQqtRYh84qrce0Daq1XFhEDonc0QM4jCWT6rooLX3AySlNyHjyZSYAhreLV7lApUhp3tQLnLpeYH8wHVulxaBRqcfs0sCyKxeESYREoCsXlCLzpCXQpqUmKSzc0i0&X-Amz-Signature=1e4903b93831eb61aacb8aa480465be4e35ab95bfb7828e225901d9d3feab28c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
