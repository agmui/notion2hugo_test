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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=031d13145e8e05f2440fef710648bddbe9d5eaedcbd0b90e85852e56f303efd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=05b9adff1f201e0fc3de72eb87d66e9a8e1c10cc299ba5b5dd182ac508f8b89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=c1ee964c30cee1c9c737a1b708fdf1d384ecade4d62ba3d8c0899790066a5178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=6279dc103855af96236aaed4808264994599f835b60165754ddf6fc3fb391f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=129386e6a3831c86e3cfe93d083bcfc69c778343276f537d7f9faff4ee36af37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=5f1e3446cf7aa57803064375bd6df9970935485c47464372f6486ad6be70dc74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KOBDJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFOSPWG0PSrO8neyB6a8XCzOqViIJGLYbqmtPCzw4vSzAiB7av1wbjt5JlBjgbug1YyRdiArdS6eevEyRkxYb6T5Kir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM23svAW8OPJPW%2BeIdKtwDJcerSIVXa8p4mHfYYFfrYaSAIuCajobUgeIk93c%2F56EOdNyxXxnAYEY6lHOUriW12GCmdk33RIKM1vQF9Fin0GzcslhJtUBS5MUhaCM%2BWeAuHoppIdEPT0g3E2A9oDuiAM0sVv9ecsEfN0LA8Lu8jDO98e6JOYGXvSovcQEtcL%2FPIuKTbToM9Nd8xPX1kVltDds4bdGNhAI8fyrLQu8qw4UzBg9HX8%2BwHhBo1V2ExvvSJjsURnBhwoOaYwlE7PVijuam11FViJZyhUTkXlsEmIYBaEnpNO5dYOoCTjb9F2kQrj1XnnfE7QsvbFVwlUz2zzv2l%2Bi4KRdgahwtiYISiqWtxO4r%2BwgVve8sbStOS2AeFsX2q%2B8biPIvaF%2F7XY2d7hJaGaLDFm1gHivMWOf269dZG3kKSkLKvP3hoE5G5MzlTAlFZfsVztkTag5H6vHQJXoPiWzjImnxcwazFDYwgnrcf9IuNfca6BoMEzwPyuFzovlMcRe84ck6UGjV%2B9ewpqep2Wk4NJkCA1UbdVNsbxOsj6hwis0NG2dASyyNlvs9EVPmFjyREuqVVg5YQKAvzRgBBh%2F1hQkFu3zt%2BsWO9KvqUz82QT2CuEYz1fIVKB3MZI0h7eXjUz93WugwhZLjwwY6pgEtiZD1DlibsTXLJOommhIEPsOle2K5TEdT9DlNNbFsPgZ1FTiOg%2BfM5r%2F21acW%2FXNDL%2FKITbJuvwXWekIEB6I92%2BiwQ8UfniAEI%2FufHeLTovyhNiD%2FeY4HG9uVvhxLwBo9F%2FWsAZwJ8ZCMDWmcSUv9hT%2FveyH%2FsLa67VIRVFrDkp%2B9O2RDwdZT3n5u%2BGQwduBEC88X%2FXD%2B50aCgQcUzolQSY5GbiFu&X-Amz-Signature=5ba0367f0a41c6f29a01efc08d19dd06e1fac9e0e2880d89d0507356d034a68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
