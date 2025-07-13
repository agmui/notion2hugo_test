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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=d55a6dfae8082f1d8c1ebd78e987de9d18d40adad7068a11fc0d7350a9ca38b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=5df702993e62adf93f88d8e013bdfad61135601ae7c88e01e7a6f4f64af8a68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=8c08186e2593bd2190084662dd29433343bddb77bef1abedf433a482643876d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=0feee7e148af1602a7b84cfd6482a908e3af640dcb4a5be7539c4624480d8497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=fba0fe842902a31901df2b15cab7b56233abdcc0139810987c75a4336dfda4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=2e3776696b04b628ba71fe3d3c8fff81b1c7f8fb13347ce59bd2837470424ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OX53RUX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5zuoebUbxs5w7WOsFoxaoe1RKIrltsVdlCGOr97f8XAiBRDshVxsz4a8yNQLkQ3e8N4JqUwushiVKEfwQo0I1jLyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMwehLr1rTBmnEUtUBKtwDAWdpZmmA%2B87ECdBHKzeFH4ZUFH6PDSGVHqy2osl9JHOA%2FURxhh7C9dZAP3N%2B10UIcwsXYOHKAFOw5owLfCChOyssNC15FBJOvTyherBg6mnOoIipySJpmtalMyMhwkXNgFwtSNvsO7TRGyBuNfHbAQWM4iMwieArA1YdXYqNjAXQcux9lLtLQyvGoy8TCZ4iHkrIM7xxMYDebR0dH5hvCHibo1gRlfFm1QyJbNBp%2FYCbuQQM8qozqJMWSarSyBM9V6UgR0eLQZ9cz6fcb94H%2BnBeSkRsM4lEcksYMnxIYQXaFEU6GHf7Ezy18J0gyRaVK732yywJu%2Bro22U0Q5xUAEzPfeu%2FxFCB7n6LimHhhsTJ9tf9%2FHI0uihzTs1eOt9tZBblN7LpDzU4l5X5SWnxAi8OOjWU3POxEEeyvh8ZZj4MkuajafHojQj20qmWMxHc2BFungVove2PEWbn29vn%2B6wOR2MHT7JCHmGKl6Yjfq2awdTo5mAhJKGfcuIbZWGWfUkCi3x70mv53Q0OYVHKHtx0i2M942il0fKvwMNQiKKP099HWk%2FFWe0moua1PVkHkw%2FYjPZWRkg7fZ4u4XdJayKJRfHXSAvKde6JEDEqiCT9YP5Kzs%2FxfmflykkwscXOwwY6pgEjYl2%2FOAf3wIv8epvYuoUQlPuWxIqh37ieqCRcUYRCywRlBiWZP1RPzIqbggD%2FuAhzz3zUYQCjmyvNmNNHiyUQTbEAxUwYOh7B%2BbEDa0Fi8D4GZEyex5W9cI%2FX0BJb6HOjAdmLGKd2EnSiCi0az2NyyZi35cvGgE5P2IFtGUI3nlTL1Aiwt53wpnopRu%2Bx76kufteRY7moXW0s9mNIuaY7NzwBKKzC&X-Amz-Signature=b462f06200b4f5bbfbb3c3dce1867ad8d7267596c22c4ae0f40f0bc6c59dea5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
