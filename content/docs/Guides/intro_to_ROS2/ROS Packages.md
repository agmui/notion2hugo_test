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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=4a0984cd6bdfcae146bd64c2c6fc29890854b0aa5cc18b81755847ec277b6c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=a5734c23553f7a840b9d806600ae08c62958871a0d844aa6436e7d49b0afb4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=26f0ba24aca91b5a4f173c71b5d211b3bf56820d758828c52cb27ecd79dcc728&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=5c6207b620440671d8fe8bf896fa4c69f5020119d9127aa0f0fe336dfceb6cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=8154902d84ed42caf8d48113fdb9c1573d070a8a3a7908ae604e54492b183adc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=30584239c408503ce8e10550b4bd1b60a33726e5b9c99ef8d6db1bc464659a91&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UA75IL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVvN171vne82ZFsH%2Bsq5%2Bp43yYyGSEldLWQrPHHQpB6AiBI13SMohx7ks%2FXkrbqoMR87HzbeeXd0NbG%2BqtQzduPPSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrwK8iZjbMAiRA8NhKtwDc6RHtAMejLaSqv4Si8fzjjhoJ0yoVVcVCveW7qd1u38zTN40P%2BJSvVAHss6EaAWL4tsXorApCZDQLlYHv0is8TgA3C1Z%2FDrBpdwD%2Bjl4fbo9F2YMnS%2FNRXcXI9nbDJXKBr7IecNy07RWxkjgwsBfUT4OOqvovnO6j5%2B1u%2B5auGcV%2ByHmQPtRpvH4Szyzgb5YNbYX1sy6hIk0pM%2Fv8zvNxY7NNooTMPH9j1TSeoSSfE7fTPGSh5X7zM6KT9SOXSDtmlDEGlPMZQjp5%2BGiOh57g272tvICaU9ysJzjvLfcFkJckg0EHJ1eoEj%2F07eOcQTFlw7pbhYg81ORXby4ex%2BE0shnGLYnsEqK88LFMJTCdHUL%2Fc9%2B%2BP6mk%2BJ0KeycnXsVBsVydRWPFa9rdV7KryeFbjJsO7mVA3dJDbFaRVs%2B8hTx4cz%2BiAWPX2J38GkMgweJFCdUQXiL%2FfBI176ttxQt8zUIaceSl1txg%2FPKWEondYb2lDtLJbFLYJ%2F%2BzIjLDzn2CZKdD%2FILOg2VMhpf8PNZOWo1GRycv7ZpAb9R9H%2BB9ufIgZO8QQ%2FBE9KuIIq%2BJ3o7OtxZRgaUjnXasGTJJ8GVTygjNG04h6BWdq0NeR7WWPHOcV3R8dG10WHgGNUwsKK0wQY6pgEs8j%2FFsXDC74X5nbBSDA23xzFZnO5blWrmNRtIwEFEg6VbksiGmWoP9szHyBOpGt5A7qT%2FOZp03YcvvwTrcZVbQTikhVuRpHDZSdONf4eg52ehWmPWdarWWsiwpxHhhmQ75XBnaV5aQq53eBqBRkbfMAjRRghB3zM7%2BQJ%2F%2BUg8UIQP3NMs8%2FAyHlPyo%2FO7y%2BLXK%2F8CMgNp85gj0FxK%2FFMw98FrHX52&X-Amz-Signature=e20e920e6bf0de281632605ea685cc88d4285d3091db8ee7496fc6e0f20e9ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
