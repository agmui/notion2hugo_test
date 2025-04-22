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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=3135bc412372896a06729fb4216e7e2819cf46a5dfacfd3357dbb396aed6782a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=57324894c3bad78875f364483b6c83ed8756186ec2d7b961a790c01f40c2bf10&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=381070ac8604b2f095ee713e28012d2090dd7e31d3e8b178640d4b0a19dec561&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=3605d6ad5ceaac7edd50cbf363c77a2e44d99d4999f735fe4867c827f4a43fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=55c8b0126d3e4999f24b3127e5a72f7471bbbf1b0cfcc992b2b15de6dbbbbeec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=956ff43790e377bb7f67e0f91b28d5e9a4224d582ed9cf202873e420499259b8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHH7KV5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEgIRaPvQj6R6rkTVr18q8WGKMOqknTNr%2FrYtXmvwYZmAiB10WaQnLSW4%2Fj%2BihpCxghP5%2FfzaMDkN1BNcS8egFEVxSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMssYECBoeyS%2B0enH%2BKtwDUsu4AC8kL%2FvphNq85sX%2FvGkCGUBkqxZE2X9KWl8M4PEDKrWjaLeED8P7wCVjSTGHpajbOUE4TEaIt%2BRnMbfFXR44zrRDfcwcUVXPu63st1h4bJ6AwfFfZUz4J1hRzQtcdp0nXRZCYAQzApitUyDY%2BUaPg0p%2BxIa6DXg9wr1rBFLSWL7el3ewhUv%2Fl1ssS6HLzh6j2hAPvkOxENjuitSESS8b0lbw%2FHbx7PMr2kBbseoIbq338QL%2BYisen16SQiq%2BxuTtgHukPAT61Nb2DDP7ZSpCNrzSBCGltFjBKN26oJLgGrNZqYdo%2F%2BoQUGXtHY1Qi0kNEp6fXW6k%2BMHg1laDzLbZdLjlYjnmNz8gEPwdnQjMQvmmP38bY4Bl3%2B33mlYhfvVINxFAd5a7rmtIJTALjJ1lqVNzbLONKoX4zqbxDeO9whpiqbZAkCnLpJG2w6GXol0i9EaUOB1kzSA27KTrOeA8V0e4hD%2FX32fHp4J4WJ7mm1qbv4fcVc%2F2MyqN9Z2pOH0vYt2etTuCdq5YW%2F9avWO3RPG8OUiPCMXi5AM0w0A2pwfSahaoKvLkn%2FT%2F97ac%2FhD3eCK31rmrChJl1INP8w21X5i4Yc5IpfKPBW51pAva%2FBTjj8QRnoezEB4w14qdwAY6pgFsm%2BuZyaQJ8qQOhiz5HNUhoZZhYPvqbbXgyKO1QagF%2B9M7yrk06ZNyF0WYk4UjDBWQIjzTwRv4m1JW9CpQx6ny5UEAZ7uv2SIIHtFEmrL2qJhNLVdE8tvnghEmvv8YHfN2mq2SQiWzm9zxQwl4qAeJ9E5E7cE1ix%2Fads5I5103LTtZv6rcAA8xoV4xpJPVHa6uLgNFZTFsR%2FZysk67UtW7faJ9vU9y&X-Amz-Signature=83ba778f809de2256a8d03073bc0807e323bf557a9ce4f92b24f1b30da1177d9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
