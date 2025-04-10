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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=90fac6b668435fc21f33eb9f5b9e0a16b25f8a3f67d1cede1bfa16f3ca6fef27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=77ba52689b75a94c991b3e902531b0d072c9525e8440ed1ae99b2b2672d86b82&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=37d31e0a8095795de2869a894dcb2cfc0389665e17c0273bd27698aaf5d4c72a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=a70093dfbb937e59685f83305c38478a7832406869ab6cbfcfee87dccddeb871&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=8d199aa6d395fe407aa1d0a86456ad348594cfa1e9f5f962b7bb14a95ce4e8ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=b0759308dac25c848175247434fb7f34052669b9be0ddd1d0eb6d63eaa76ad64&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYI3XFYF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC69kuge8Q%2FASAahuvj80QkyrJaTiyLdupxBomp%2Ba1ZIwIhAOxED7l%2FihlYZ%2Fe%2FDq9KRSIFpGYCoWnGBtxbCEMz%2B09vKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5f2s0OmenC%2F3cA9sq3APiAnSRk3zmc0d529haL6LKCQVNwqMOTEFwW%2FH59kw3iPS9wWPuO5Eo7wZW0CxoqmtGp3qKZai2qPdkjz%2Fm%2FjjSBtxxfwl7d1WRgyRnq5at7DUTrVDdy7GH6bunPJQ2ECRFV0PpKNWyGp%2BwFbpMwNp1tHndsoBssdeHzhQku6RqmwhjqjRIfa3rSjZ3RQ8OeYOu4sDYqBOb%2FP47ekmc0loiYcUKe%2FCdUL89vFhxTo6%2BAca7vZIzwxWgxAUQsgrs3FA1IKgMa4SK7bay84r0imj2ToONvGpkGYsr%2BAWttX3U2bSW%2FlCRWnZsq52z7xhKOKCaS59OssEvaCFfKruwwJDgUM5561ysPMkP%2FquF1KDy6Ek%2B3JrkCYNbojnH61wsb8U4b8P9khUT6DAFu8p2va6EPDLHn%2Fsc40FUk7nRUoeHroH0rbsQEfOkONJDgYbON09IyLVSkTH7PvIPwY1Ux%2FPoHAVdhYw6H54YI%2FLytHx71BXY1ywumFGv6rXjKO8A1STzfBeNhl5dgyLq3F%2F%2FHw9m2wXHRLPvFuUkzfLqgc2OHSRiUrS%2BwKr3DXz86uXXaeOWalv3UMEt91cN7gQkdlrPOLrv3ujrfnw1t%2FTS8Dlpzhk0FFJpGb8oOgAwPzC6292%2FBjqkAWFVAV8T3nUqny9IfsoEdphD4O9zOi8N4rIEhBWHjXzFG0HI7x5bCwpB%2FIT7oFxjyssLA9R4ZAeZPHSgCWHG6GATSIOarDEhjrX4oL2TmKcnqGaxqMRikYiTGrPenHEsqYCFwLXuVruM4NmdfOlKm1lrTg02jyhrYDJGXg2m2g8tYbdUSyZ%2FaUk2%2FURkQUu%2BDuHnLsDJ%2B%2FsbYoZyamplqlLOm1HJ&X-Amz-Signature=0bc8e1be860d85d260fa4de64889418f453caff58c844368de952aa2792cdc72&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
