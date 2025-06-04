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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=fb3b879a255a5ca1cbd13c1fb35f0caaa1ddb55dc82ae8dc097fd529e5464c53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=89c604491b94deac812a26fc39af0a71873ac751ddf0b9772f1a04a549c3b49a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=0d978a9abb3a1911660e601b338cb071af67167643bdd66bc8755a8936a80045&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=65023a99ac0d5a864d9d27144961ac16dd2614cebf2d937b8d98321ccd8f0a09&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=fe460370d017aa90022d3d6526b4ccbe937c94ec25929a4e77ac95cf16e74422&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=1b4d8a6e8052a9ed61888c05c4340b72e32ce50969820a6984d21c4769426d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOI65AS%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFcjyF5MJZr5kuIJHlN7b08i3rHp9ervnh58ci%2FMClKbAiEA9cm9ctSKnJbolCqd3WGzhvzDF2d%2FLHKw528B1Y1uisEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEM6ejYV1H6mdq91SircA5br95UPEn5hLC9priHJez2eJQNqceiQtfhjJfz%2B5piYBS%2F4SS1MP%2BpoIrTJ1UmGZddSBCdmfSfEEGgHUOtv7zmG92UBv%2BIxkXEyHkU%2FO7%2FJ5mf4NpWy%2Fm%2Bjzq2im3HowTGvXrk3HAzFMtZXSAbfOLPOgm7EU3qpLt0Ofaiqk%2BusJNAtKX6k7VLOvSYXVzUFSan6pic4zY2lbbwcw5K9OfISp4UmHaOY1MvWEOXNmzLGw7JXdNGDYdH861RnrhUXzlOxW2l01lfCN2G5UcHhWQcTuQFf6ugQYspGW4NBHa5ZWcwEGALKm0PPzeWcq%2Fz0C1lN3c6aGIScU9bajFXSwdAAb6dcRjWA88DFYRv5Bv1luRdEkJLVtyBYD17jYF4mFGBc3jM2P9RhQoPOsju1wojukbnBJ1rguDJMA7MgwfIwyt8Dqrs7HshlHHkmcppW6ONin4afowYrh0yzrqL7bQWZ3PXPcEXYGDwY%2BGXm11PINWg5RGN5QyvuQW%2BdZiNcF0J6a66FqvFZ4v6qcVoiRvrGRFFiFuTgjt%2B7Sqp2iLvtvzPytQGiP2kUUXm9lnFgs%2BCp%2BPuSLujTjSFcWevoj5pDEEd55yl3Foo6rTQ95e6AWIgP4g5Z82M5MCvIMN6I%2F8EGOqUBwaxQReD2aRxsldXs3G%2BR7gBarMo1992Hlxo02n9lgPflmhk3xcfogZiWkJd8dLZ8z2h0uv4%2B%2BN9e4q6SPMlq4EyeXKfQS5doRcIJJ52TlFXKN505JXYUS0nu2Fu%2F76Z0xJyJ0%2FgTTAupd4Xl3ZGaDmo03k7CxhMhbou%2BKAxwJbC30I%2Brw5xPMCIE38Vgl4dplRfhkEq0k4UujIbDYL8VmwwQ3DQD&X-Amz-Signature=34c032956dbc65ca567303d171f96de0dcbd270a2c672ffe1619fe508da830b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
