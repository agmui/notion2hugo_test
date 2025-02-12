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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=50d062fd222ad2cf959edf41c512052744e14fe5dfb0218a51d20033f2cfb4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=8a1e53759ea139759de0c4e8509f3f501bccb670039345f7dbbe3d93d469c4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=67f845efaca3f44cad358e3a2aa32a9e4a45471046bb4aaffc65f863c0181e23&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=e14004e30ab1ed8080c08986b3a497fa983db9376cfd094fc7e41b7ac10e25b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=ec6401359c73cfb020cfbed0ff0447e927cc4054364834433a74b611a148633c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=df96b0b518aed2bb7e0caef57decae12157203f5559bf97ed66d77482230a96b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRZKRAM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiyhD%2BxxiRuGYXMUkVYFD44WhgQftJxGy5Xc9E7uMURAIhALjxeQfRbWc5wRtX17kBOHKzGeeRET21UmOL8MgWEMDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2BL8RV2m8J88KTeAq3AOUv0U0Pf4BOxlqR5N9HJVbcGjEUP5eFU5y66Q0fKga1U3DvECSW2bB%2FQAim7rk6WL7YPoc79Ff5iUhAGoIDgkeqzE031ZkKtMGd3TydLJTKqwiPV2wUFElpRDNGm7B2ZpXOIin8%2FW%2BJ4h5cbkNt8HQN3z0ZmqIBeJPT9GrT5gRLaXYfwLOcq0U9lemC6OElzGSHH7KdzPjtc39FcvkU0yetVbup4dPUrzbMtnuKCoXbbUGeoYMc%2BfPNROYbJwzEqqXmm9UlnfVw3vX7AlermsuXch7IHR1tzumwZAQcCFuLYIyQc60ANi9F0HfL6ZODRb205sYIw%2BB1VCUdRoj%2F0ameeLw9HI0k0uXEIxBQc0363P7AVGPGw8R6KbImL%2Ff3xyOhJeKwl8Wj1vQQJ3GikeW%2F7ASpwobWBWeqxlRYlBfDM%2Fs3Lk4K7U8VXa0jrt0W42wOmq1pNnkms%2BpToDtZhHTswhpIJ7tcyG%2FwG2Fvq6RQ%2Fxul6lKfqkBiGSQTWKWnUwfh2X4y2k14UE8Nz2kuYUF15AKmYfhTM1bdxkcB9dTkRHxJ52iiybKwzqmwh1gUdBVx3fnXjPOSAzEo2otDNJg0FcS4VfFTvOcLrouV6zKeHoVwbZ8B1C1SZFp3jDR7q%2B9BjqkAd%2BtKi3vjNNDLECAGdkt0K0xwwj4g3Fjmm78HjvJsHINfgZM%2F%2FmVXSXEazIOxYWTjPWyFaUNTr1N24EHJuSjsks8AJTskNJSL2b1mhRZjsNxVrhxDK5V7ATtx%2FlAPo0SfYBXZk0QmbuTpKw6lEK8Ths6iwhvHZPlnKJNRdl4LEghIdSL9chf00%2BVp%2F8qJvgItgDc2HLiDBZn1JFqfCgT%2BNDVIqtK&X-Amz-Signature=ff6f9af59815a5e4046d99c9bad464afd8e80b7c3ad59c69a96f2e4ac8ded47c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
