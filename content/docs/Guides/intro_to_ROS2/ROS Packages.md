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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=a737ff92e55f3450f715c3fe3407cdf3093c23f9df0d0d5638893f73715f29cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=a1d815ab0f506acc94997be85e960d27035dde571e549579cfbed47bc8485987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=bb228b7a3eb87b324ae4ca317d7d70926c165cea0bb8a3688722585d46c9dfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=a4e202638d6596a3813203cc580ce936aab4b340013b362af2594e2cd99a252b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=8cb2e50ae8e923b7c8baf36243079bf32dd1769d52aa0528ecd4a5bfbd2d5d6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=47772c64cbb86f519888627c9f63873e111c42b25478073e2332a851cf91a415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWR4FHG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpDYB21ezWE2oTCw4F%2FRhtyI3FL3oonDEuO4PubcHJeAiEA2e4wcCzP3C7zdPSPZAja5Wzp5MgAKmJfyDiUumMcUx8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCJxO86qCjEldUxvSrcAwOdJVfdc2kBuPZWgnC94ApsMsHF%2F2bKTKZ0FtQzvsJ9HdYoDoJ6FSpjIoTd3Wk5hyprcbfqjwlv1FBbYRW6uLbzBLkjqzJfIhQWqJewuFYB91N0ThdBJRrUeP92qdQTyx3bYt3uWO15su8L2sDZvJpCfrRpi3jC5qweMUhbLgBimr%2FifhMOcZaY6QTAMoe1UIRbh%2FptbVLOSR5pxhF1H40ikXOTVStT5aSvVtTxjxEly0QOEudSWH1sVHWp4QJzgBK3K%2F72GmOEQr5tqIytScGsKG2nhJIylydWg6bU9DvT4%2FBmO7ewnm%2B0UNmP7CgGH5FZD237DGNdV3xuGCS0%2FWh2Aceyhyzfj0ZwwHIQSAyNYcyK%2FltzpJtebNqCnVOgM%2BHBj6MGADydeg0KiwwiM9CBrJ8lS56uqMagotyUv6rCq3%2FXRg01Hb5iF4dIh7vnxf4S7InVBEJiBv8uh3gmRuHKJDrJ6oPbX3rADKJYr2YFBkfmizXhA5XowtvWMW9d0TuvhZ4VWpQe2LByWG5qh8NN1m%2BcgF7S65ybanvtNewpJ8Vvkpp0vznkEJ9lG%2BiQR5CRUWXqydyHOcQ110LI7S7KgJOZg5S00M7ylmEUkdlYCOaV8QFOheQqwJ2VMKiQ%2F8IGOqUBoZA%2FMqJpbHprn%2Fv5L3wQzfzLj7Gh8DqFCcwEoJq2Tk8ROWEudjH3CW%2BF71Zx5TWoEL%2FezLl7Ns769Oy8qatlm%2FNgNjm65GQwU8zypZvfHxxU%2FBbirI35wuugel8f9098SFT%2FJBvmFZXxZbfsJpzEIzBkvVc0wi9u4w4gRs2gSX1f1y3VpHsQmO3c1DiMUOUIAfCkKLetGJCXLR9VIZ4Qv44RwMie&X-Amz-Signature=c5c4c717156358ced936fe2c573a616f78ea38af0d9feeaabbabd50cd3796730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
