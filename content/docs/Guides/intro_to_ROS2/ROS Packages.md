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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=62c040e0d5e8ddd1f32eb9b68fa87642543455cd105745de4362be9ba8af5f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=c15b050b642bb1a86d84a22bf80f88d8e3e1bf1b620b918b6b76b6e905bb6fea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=ad7c486426cca79b7ccedb6888dc7a53691ff2f780993eac841ad28b52930d91&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=e0f28d1eee7e5e60f69bc2581bcbdd106662925180e41a229d37f81a6368772b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=c12f6d0a67075d839a1ddb6d4010a9583d985ce2abbf0c72f0079f037e5135a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=f2cbb0cb6d1dde11b4f28e9f41cd8587c30f6ff061defa5ccfa28b114485c257&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7SVWELU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDE4iPndjTbdt4yH9gCwErXeIPnIJZnhl%2Bnf57OREhakAIgWZDwtA8Z46RpPOF9nmM1xIsB5oxRfvgAJeTL5R4zQ%2BoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGunUrPX1BwGsJ2FfyrcA5BJ5sx8bJPEaOzEPUWpd5oyyWayLHp8j4YYvCuCkA9yYMZwyFcS4T%2F0GDp5IlCntfjnUCGRIzkdwC7upywTJ%2BfnZF%2FosjoBHPkMQT7JqbKArYWos8EX3RNw%2F7HXYmARgnpDdF0rTJ4jIdGKBlM0wkXgIlTxgC7nQeGxTaavQrUHK8HO9hIstl5HpbaIr3PA0kEn06EcSjx3gHovc3Qg5lCTOyHHEQMGBXMHJOkkYFXYvIwjOog30cuCBLwXFwLqMB%2BmSMehm6gzZXkvcXxoLdM%2BzPWf608eaMTcQyWN6ba60hvbgRGQNvTw7D8KPbTuZXE1kFYzkkxmN4yTdIoSER4OE6SivaCeftfJEf%2BNv7mShu%2FpeojgUqkoZfCP5thk1QLVJjmARRgiityJ2h5iXWvvR%2FSngIvXOLrr1I7taUKeLQeBzFa4WepcNMqiQtjPEg9j8EEShL75eNZvagsR9k2xbGYpIIx2t071COxDvXNu10hPu5ZTt%2B32M%2FvlOe9ZpztWB6AQeM9BSg4WphK%2BAw4GzTPHY%2BcPyzB3%2BxwtJGWe6lwUzvFxqG4cfTsbOF495OEUC21HPuVXrYm6eZJJc4sNIsiwR%2BprdkPa4Uj%2F7EujwyYGK%2BkFzrkoxbXeMLSm8L4GOqUBAEp3KbOhheevim4x8TzRNR6qsqciTqo7NWNZWCiHx5ItqfCqzVf8zxaJaV0y1AhtfIAr4yytiUkn7fj0HorY%2BJbQzqLpXkp08MWhkt9adfx7DNSoVkYaSPoo15SS9bCB%2BRoTtQdLM4sMw1XAvZ%2BJQoUjmjdYsmgpJyE0ZnHl541mXhC2Dd40MpenCcHhfPpmcdw3Gp7piqfGFMGeJmeJso9xeAGk&X-Amz-Signature=4d3b54143a0405764126ae7aa5bff50788399430b728555df7229e5e98cd8573&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
