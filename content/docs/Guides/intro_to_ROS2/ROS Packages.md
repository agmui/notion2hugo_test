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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=1ecee92e0767f0ad9a446f1eddf67751d4303d060441f40a3bd6f60e57f911d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=48a971dba32d0779653c26e6c3b79cf5fb87d879863fd0c159c05154d40c0129&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=78129afa7e6f59dc1e4e1803690920dffa461e7049a3fafdab4042321daacb33&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=a4bee782fa9f55458d7bc0bb7f25723566b39dbc8f6d0fc47ee9d7ec64c824fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=51f1bf64d4f7cad0b02b4486c523fe773d4e09c855b2c0c0831b30d4ddf6b8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=b8bce76ae0fbf712edc8c766d67fe81491c709fd2d122304fa97f9b4bc8e9faf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7OVKCYC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS3M%2FWH5G8%2FY%2F0uzHMkXxctKVfzZjpSqoMxFfHPpLd4AiEAjRyxdGflpKz%2Bu8%2FSE1WIckswqJR7q4LblJd9tSam2dMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEQBceJmKhNFyw5GircA78eI3fozMjvZgw97UxjXDETY6%2BMLUMIsvGJW0L2F5Q5l6tdQXWgLnzsbROR2ZpQQEGos%2FTTbZFGld9K5X9R%2BqKcqB%2BnG2A5F%2FoMvI0S2tPozC24TL6IkiSb96qtCV8YHfPrzcUZN0tegmvd8x2mXydhPzZFOo2sWjlQksfXCog%2FtA6ByZjzZPjN%2Bd6kXx7r97W2s9nWKiJX9P31E2J%2FTHrOj20M6DVXZn9D0KXQ1Oc91P%2FDeuLoBKdFhrIW2CDF038ISf6dPel2qIv2h717tsAVUAFpHrQWO1Mu%2BK9injgK7Mw4U8zPV3eh00ZTsmgta%2BNHEdET1ZnE0WZgseKXYqYhUzWT3y9J3mhfn2xGkmgFJEvgdq8w0mbCW94W8bbZ2gcGKZPU9k2wv4190hOaR3pgiurc3Q63sCk7q7pRrnHGEca0ALl2qfz9AY8f8vUVlMDt%2Bbb3VvA1r88WeStPF7z2uynnr9wgCGWQbF0%2BAu1J2JAO9ite26r0lUebsP7xLxXCqjG00q5is1wQ%2FkLUB797TQ8q2qQgWLEfpIc1MZ8HUFRUuhJTFrspZiJPF0jLk7w1Q%2FK2AfB9CCO4bJmpfp0mlblj%2FGlJJtIPRvMaKJy%2F51fpme6VgcHGtULJMLGylsIGOqUBWxLUd2YPU6leHnpGa5AaGIl0ppBIuiY2S2%2Fa43ZD%2FC2UetDykWa2QM%2F3FEKT1r%2F0kpLgAf8Vwszv0oLeHDUgGMVoGaVRZOMPrbrnWqCmscgw4iUobldEM3Q7%2FBq0gVWn6nYxP%2FZXcB4Y8YqvCZtMPyWhBmQ8q2bdT9CJVBtZq%2BZ%2BFgvBpMbvj9GYkxUkScBIctb5YJcwZjn81uEHfqMLpgZTGJ6I&X-Amz-Signature=9aaae9cf975a2af015a92d2aa0a2fe1d0dc79eec21936b2f37a70d89286c8874&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
