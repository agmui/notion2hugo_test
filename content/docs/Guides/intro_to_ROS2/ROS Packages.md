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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=d6ad79e263dcc9a3d3a463d548622fe44598a3777c6001199a8a383b8ce0eaec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=55c79b5c9a5571e4b3c66956a51068786cadbf77e6699ac5a6f40a624d41ba0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=939f1e6fb048e267b7f08038ca075f83ba701f5d32f0859815c6f311c7f5b274&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=fb97eead1a7401753a2ad3aca2a38667c4f71293aba7411d066dd1219f453201&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=4e57c1f36f9b0837f66bdae869390942c0e92caeebee56a65ab31686616e0f89&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=9cd6466f4443d198312415c6826e4114cd2c7dabdc468b722826f6539b553831&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTXUKMB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCGCLgY9WimvLagK%2Bky2ci0GO1xWtEDhrfjFkFMsaOJ1wIgA2XaE%2FLmho%2FzRbAyF2pp2XX3oonTawKQtb%2BT%2BU71bWYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHKGKF9yDpzzJtvtySrcA%2BZo2wZ2zNIk9yrkL8JZeyIhe01MkWoh2AICPjyv%2Bemgn0BkSu6rEV%2BDRlauvdkbottQdNOQjwV41KtsPCjPPy5Y35TsYaleX%2F155461aEdW5eE3LkXVayLrbM1r0L7evrQHsmzPpNO3oYKmRCMcnLmOd7BLpK4znh5FobOsg8sCI1EGOZf8tNuNpkaUBBF6Bwwb7zRw6nl2M5qcRwmcTS6uNfuA7tbtCGkrMKnRTHD8RQuamUahici3wBa6QB5MMUdCiPCBtG%2FKj8YyCqn6K6IRfB1RAkl2MlAK6bcKVqmGLMzS3OEo988BH54wGVBwUVp8Dyk7%2FowbODwCvZgREX9O%2BuEyn2ztRioeTHUbUelVElPXULVyOuR7F2gFX5rhawlRbPZHWvk6%2F44jW4wuoWyLVKU6S9LetARexThxd2%2BsavhrYbxJAXykRSduwXW5qWcvcNiy4zCO7jVYjx2cJ%2FsOEQl26Q%2FyxQjIB2Muh3oOyJGe9rVwCcdnQyt5akBlko1k2qGPb%2BqNyRmMNcrplcE30QXZoFr%2BJfwB1MQrmIbqF8rZcxVuciuUqOH%2FwNoOJqdI%2BQ6pBrAzLNeDbbJ%2FTdJON15bsyUfIXZGS%2By2Z115Gc17z51pu1JVaaRWMKPKzr0GOqUBqo%2BYJ76LCAHi65%2BHCS%2FhHlAmH3W4JtIqOky2Hz%2B88g93td%2FFRNYXIK6bXCB2aW1nqcqccBiv%2BrlV7SVHUym9cfS%2Fqzs5DeOfMmYGUp16u2PZ%2B5r6UNvzYeb7jmUW4%2F7m87UTilHyeJb8B64qkyWji%2BL65H7Zq7ZqNrzewQk0xRO7a7WmhdIkYTYlUdbFeu8qbzJRNvtAs4W30zn9LC%2FsxtbhK8ft&X-Amz-Signature=aa74a778d6ddfbf8e371a6094bbfcdf7e742c0fc6d4037e5c14d97053a08099d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
