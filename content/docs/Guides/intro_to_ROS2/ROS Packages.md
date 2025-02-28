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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=720e14555fa3d81b43ae099f02dd884a0ef68e6317ca7f755307316115936713&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=ff18f7fe85771bc4a57fdb39990e7e6504822bcb3a41e0510a8b7ebb6cb67e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=5bff59fcec999de24d28c547a01e4de0c89e13482e0b1797204254e59747f6af&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=83619f9cac20c337fc218e9d7f98816b9dbb8638fb8d19f05c93ecf6387bf3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=ad63c430346f0cd11cc6a01ac2590dd054ee7fed51d9c45d2663feb997a7719b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=9e301a21a0bad5e3e7084c75bfc923a65a0e00782321fd097a61f50a25dd7638&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CZP27Q%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHEUVNOzYgIjuaK%2BewPlHftTi5mzIJGcbLfPvs4rSOAkAiEApqE5P6LQmGl0PJrgL8oyvD%2B3g7t5t5LcvVwEMGC8BAMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYJbcbX7ART5WNoJyrcAxvQCR4Q9CtJee1c2x56M8vQtaM95%2Byh%2BxwvjPaQtJyT6jTmoEPd8Z0jtrmJ%2BcDXu1zjXAumPhEo6i6zT8Z84UGMT%2Bjg3fEBBcVWau9PAX3Wjwag23ckHiJFgLTZ%2BTDNHrq2LYgHuo8BqpdcUd8WcmXgFAyJQsS94jV5ng%2BG44LLMncYqGPetwZD9kF7BG4q780hjS6xswmRP7rhckZZc%2BeI%2F4bAL8QT59EFX0Jeg0TARCK%2F90GxmQJB3DwplanAju8s57gDaabLLEWcrkadY2O1Lvga0UiQf44u%2BwOIuySZzwfoRhy2ApBV9JFZq8dNaJdmNOzGXADN4DSKTwIePfXLJcl01on18EFszrG2BoSplCXEMWOOcw5yua6ydfZuP9TcXAFxArHZTMX85kAgfADBCgbUWAv98dhiWCg6YhlJj7iLmVLZqXYu%2F3ddMRFPgBhOmcvyAIDK%2B%2FyHkDu%2Bewwtqu4P4sTbO41CG2674WyFDmK%2F4hym2QvzqHnW0q1rtuV41tnp5NJPhkgN89Ocinn%2BX5ST46UrfhrE92kcRz9Bb9DyuuTTT3XG%2BXKtGJKv1p8onSoZbhqqgjrEy7M0bg82qF2vXrbOCBWGvIGfHaFZuS7WAGDT6%2B7pSdisMIOMiL4GOqUBNzyZVoitzU9mrg7PeFse7sE9At4D2UbinIFrk9cYpxkXf6Rn4%2Fc%2FqWmD9eSltEQQme32%2BoPABBqymcvsI5zsUOrLjbye6fyzCqmZhVom09r1bVEoHn8Ewyxi6bned5H8vcTyqps5JjUULCIhxh4GZF85H0VLKinVFs1AypzZO%2F8kh0Uqmul323QMFfKdOZLmy17%2FAJRmWev69aChj2pXsnSSGS1h&X-Amz-Signature=352e2fecfb6eb2d1b7f9056d6c1b3aa12f60e9abacdd64ea9bcae0567aa6cebe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
