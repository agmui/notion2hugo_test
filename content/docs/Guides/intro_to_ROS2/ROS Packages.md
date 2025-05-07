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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=7ab96369fcae1c1769d5dae1cb5c449dce4e3fe4e1d033a02d5d6d60f36d3a38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=48f8b6639ef4a19ca240e078f099999ad16cec73185bc578273198caadfcb87d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=45a5c9a49001e5ae644344747bd65935a920d1a0b75bdc46fb9eef85ac4d60df&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=a87a4b7829307c00d6471bd0a93c01cf2aa559d7d1427a84594435f4fdb86f84&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=6678fcca9487ecf7583b3cfbc6d6d6c0269eecead78bd3eecf7c805efc8e9285&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=c121646c46e0a8217bf32203d62d5e3a19154920c6b65188fa45ed1576404fde&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2GZ5NG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDKyeNtfAGHo3%2BWGuyR%2BKOIAXY%2BRysBeKRI73VqpTFNAIgYBqTR%2FG8ap2mUk1rqIlHc%2Bvv0%2FfCMZ%2B1DQRcLRbMMpYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDM4vqRnxQojej9Tn7ircA6HM3tqQ7vVDhDposr5Gb3o%2B8OGzRJ19aNpLmOmfn8l7LkLgdrNdFfpUY%2BsBZ10u4m%2FTkLa5mU0DmUfjhchOlIX8iH8yEQlq%2BouBuy0BtWOWQdZTGeo5WyAxayQPIt8qTnnhwUJSWXkFzZi8JKA64ls8Q9niTHox3l3mOcX%2BwTAV%2FwAB6mEUiB3EDH4%2BFO7Z1FVlXx6%2B1Q5r453sZ%2FOyf0wxZtZHTFNo4eaPyk8FsN%2BLfvwWC4YEK3rqvjr33ERB1hKaAmTwb40B0R0tVUnzgwtMuuxugXrREplzizVRpUN2iO%2BmeHbJAcHLKQo1ejMSwkeej89TW4tkSnmeF2OuFjIzMEl7f1aMfLGe30kKfnsHJG1MZdvMK6%2F3dORwNYfH5oJRyEd1llP9%2BtKJcrGbvDw%2FPk1Uf2N8jJS6ZDtYJYrZOhk%2FEzCxSPKuWtpYW6ItvzcPr45H9vF9kyv4NqCb6Io2vFA5%2BSCO9SVx7AP2%2Fu0Mv618lMJAgGrz%2FpCiyZeYCaS2LVhk2baBBK%2Fin%2BHsHK8BybkxRMAnG3GsZBAnxDkm65zRfk4sHLXo4VfKHUvQm3iwBwsAcH4pGsiz0PInUzqBBnPdwic%2BAcqXukjJu5p3f0HZrXzjTjU3iRmeMI746sAGOqUBi%2FoGYQ6F2bJI26bMv8BYR%2FLgM6C7sdTWdGRLLp8IOROw0ThBDt53A4SrQJiT9NL0r96lpyfX5Qag9C3RQxamwCylgD0uLbRRZtp6QzB1qw4FJl2c2aQKr%2FaX5iogwGYsdRmow6SnMBB86kIO6Ny9VCNYaoXQ76EZjAHKchbCcf4p3DQE4uEDhi%2BVQpM%2BnP2Nfoqg6lUoscdiyLHACd6R0TvwmLsm&X-Amz-Signature=b637d8b01bd57fbbda66ec1e372533d5908ee89c8b086ae17494060a08d9e6de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
