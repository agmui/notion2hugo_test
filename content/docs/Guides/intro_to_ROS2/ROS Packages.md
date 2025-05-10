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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=a1d549ea2df2e324bc02b4df44dc10717b8b3f496fc632c4cd954e9de80365da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=736ce64dcfae4495f189c5c4042eebbf4ed6abfa59991c34fb2a1c693a08df71&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=4d46e472a93184fb5b1fc4f6a090f3c81f7e0c4a916a577e905d62114e5e6397&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=38587133090b9d5d45b538c6e50857817d5619e2c51ca34c423356d4a79642ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=0476ebf5647cc6cd919c04c84c2309e4134dda66c166b1c55bccfe10a22478a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=0e283fcb58cbd16e016c4cf07c2037af64f76b0e6765e7c7f5ef2c1e24753243&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676DS3BJF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3mHgqQDl6LPU0%2BJShU57xulEVtTVIgaaDzKp7LXqwIgbRlfn35PCjEB%2B7zLDe0o%2Bq9X1ZjirhUXE9iUMY5FT0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDdMgLH%2Fd%2B7xnUw0CrcAwJryGrd%2FojQHhOYRUfvP%2B8jWPPZmudzR4oSSDmZk4G4kjuFcMQ31PzeihfCoVZHCEzf%2FXMrDIS7OCIbMHmGCb1sNNRkq2zdB7VCOIHaZFLsyvrUFvj8ytuAziFKPkZ50Sv%2BHqykv5kQVElOyDOk2ZrCx7oZGvlQgfi7DBFpicCD%2BJnp7iFFHD9cR%2BX4GimxMaHwXa9XFA3yRt%2F%2BEDwBb155qxDSaegkI8weG2ALe%2Fx4w%2F5Ym4KUGX9JEYW33fvNh0FSSsfwpkYEN2uglYkAXNDt%2BW%2BBh27A3rIPayVe0cHP9j6OzK1lwQ1qJf8qamYlqwwgc%2BKKdmSINpo50BMfzOKAyp2gqiWYrTp0CW66l1h15U7i6dHN%2Bo0rjgN6jhmJbVRO2jARZRMjJQL5jyBrgWMLcMO33JksDLF5NGOBbTXPGeXSN3%2FfaJZQunZld51Dq6nhDLWQZs%2F%2BtwKE6c7Nj2J17y2aNpzXt5xwNAA8ibuGoyR%2F9EeXf2kxkGkSloWshnnOYu%2FnvFKvpB6Cy9Yulsrf3zUuv%2BLKrVskupRz5ziu9cfZlmZ2%2Bl26ar%2Bm7a5FB6fb0gqs6RWdlALzaT%2BHxzmQAKxdWB6rcE6FhGY2FbESpSi%2BY2Al2r3ZrSNcMM%2FW%2B8AGOqUBqRbP62JigM0Y%2BQ5kcVx3Xp3OTTO0Gisv3fMh6PEski6UAsY06DYe5Dh5YZcIxJyntGaceRf6dPTcNIZHapJFmWhhwRwIHsd3r5RHcEELEHVw9SYEilH5crty6TY44WTpb0Lb3EgApAWFlkjIGxwh34TIGBGmkpNioJQwyvP2L5xBK%2Fv0o7NU2MKZxUPOgBJFxBsMRCSQtTdq2YgZY1aQr23AgYT9&X-Amz-Signature=ccd1caa934ef2c409d755410c31bda7e23e30a3ddb42d902c10adcedad44b8d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
