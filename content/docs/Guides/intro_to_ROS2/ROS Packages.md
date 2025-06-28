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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=15fd7f1f9563c60f4e0335c46ed6ef310192386c7a08c45651f82e17b1534061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=74bd02bdb47fc2bc53361962aeef20baccd479ff38ffc50c132eefab586fb6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=e848f2a71931a15c363ce0ee1e7e8852ef94f225c589769f740ac009cf295af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=34e6538f5053c84952781634ee80464161b2bd3d9f972922228ed3a5041a9fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=e0255e2253cd0cf3abd042328ac483431155e2e718e85a8a2f21ed3bf51a8bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=b91efaaa2c09bff1e67285a9892c15702ea517173414808c6179ee8fbbb21b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCQFJF5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyGqY%2B7t8sskP5FkpXh%2Fmi17lLk6jB50AqFMQkXzyl7wIhAJG5TIqgRRlCUfk65otf0iMayiWoTDcjATUrza23GTRTKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiSTh1%2BiY%2BLqT3u20q3AOFB%2B0hcdkXvGuYv9dlbqzYtAjKEq2t1TYq5950vgox6N0%2FOLN6gS9jmSHgkTgbrk%2B9OiYnh7niDlWqFanlmWzJFVJpyly1wq22T5zahKrF9ES%2FgyLKF%2Be54wo6GXq%2FW5p8M7Eb425hxtwIVPxOuIPRnVU2wfO5FbrOZx4PGnI14anHSvNH3rLM%2FLaKSxU79OdZkQPNArgGulWKiUMk2pQWzQprgLDKUTfeYaqWgMndbyn%2FG48YWt2FhLexgAUxqAH8MDhTP5bskEs6S1KqSyhrRu1wwSeVUPHtl0O4%2F92VsSrJx%2FBlWPMAlWtYlw1qx1d604IXjIOvjjpjgRttCPTkoz2IAOEvTrzLDRqhfIrSeN7RLVu83evh0MxfvX2M5BZhBxz4GVuaQsi6WvyAHNn6Er%2Bkh4ONlTQABMxdxERpc8su8evpjIHcf%2FxSBQpWhIhf3F2aG%2Bq9djUHSjkgajB5y9r2vg6GQ535TAEoIDCyktWG9%2FJSxLtmDy%2BUQA3bzQzyHB8m7rK9hTqL0PAtVMci%2FMRzLp%2FvZPfuWhGGGXtUDf5WT7AE3g2W1XC822gvL7pS7lpTm0tJfOGnn4Eg1mUGL0Cmgvx%2FwfDxcVkSh%2FRQ631I9vx6bJ40wdDqNjC8oP7CBjqkAXyZYkwu1iH8Sd9SlPWmGwzCflr0kk2DzqptOZYUe9nPrWIaGUEiNJnChHlC83pGNu7czh6dvzX5I8X8qwVr6hkf8AruoUavYu5W0%2B2OVRjJ3xMy5IOX%2BAuqphovD0BL2UkLLuS6W%2FUobQ%2BurpJy2HhDwWDCngFpk97l92jZ3XuGvMNGGJZaqDaJuGKqx7%2BEu4WW2QkWYB6%2FXtCjYBrt62H%2FLAFJ&X-Amz-Signature=022c2469a0981934e991b6a33433684bf6955f0b43a51f50a52ddd2ca95c0331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
