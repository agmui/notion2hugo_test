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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=2d5bbab5022f020b2853bbf01bcb852ffdbfbd4cd053ea2bfe82e5c8e8299dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=81149e59345dc203a632a00fad1f254936ab68a41c742263b1792a2184abe6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=05221d42ea4d58402de099ec8909f186bd468d821e7324806817089f1149ed43&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=c2a67b602ddc9e76f63ecd79f5da8540ffc1f12c2aa83bd4702b61ad2c2327d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=6c71ec4647ae2e76f73d25e8658bd9a171070ed096083d1637168176fb94ed1c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=bf59b48aee34a3d3b377b606b25be35d249a45bd6ad25000d36b998b0c562869&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFARMYJD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCzwFaezdPqOv%2F4uJn32R%2BlhQ%2BEMqBypMZJf%2FdILgk6PwIhAPCslysKqZhQT0%2BxqO0mQR4GQJGG8g6ugmkMaiK8tsH%2FKv8DCGAQABoMNjM3NDIzMTgzODA1IgyApKLmWOzXIOg4qvIq3APpIgSefbuXia6BCjwye4WLuS1HqoFrYOQMk3fwfLhgJkZnDcEtzcAAIiLPIWS9jW46WdrC6yq9OpmkrzmKvz25cpcyVOJ41CwT%2BNcF0uIpJiGpg0gBmD2ZCi0Sg%2FOF5zsPgYlRvTbe2yzh7dBTSWecVC60hVwCp8HMqlLBWjBpRCPKay1M0dr3JF4gRHjJny4htw6RWR1PCbbZD2EW1xr8GPJiTp78xHKVhJi1bgQDKYry%2BlmBRC5tiaxhj48jhfyoUjXCPtLd5lUx7UdEgTZ0BP5Y%2FpvKKSTXBEJfkyEFpYSUFjBXBaRXaOoU04pPDzNotbTZTLgnzKSoA3h2taSDklLyjUwwKGgaciwfh0EmbT2qiRkMbhqjZZm%2Bbz4mH3oLORTq3ROQj7fTPbGMYVdSZafbSlUqe7N8BG6AQbZKvUjiT%2FX8%2BBuY7A4J3FmcIOwb2agBq%2FLqp0EB%2Bm4%2FkUBRfkhS%2BWz4dbGaWi%2Bzz8qRrkkWtX0aHkSQdXosKWTBFyxREm526ClGP1Ekqd1d%2FCQShJ0iOdFiezXm8ke%2FfPtohocjyxoG6VK%2FsfIMWy1OhuK%2FQWJBO2kiLYOTp3ZuEu6A1liUXUqV89GaHAsgU0vPN1pPAdCuiUt4KFXRyzD%2FsrG%2BBjqkAeJtgGTUJurJNsGjqFmwi3hY2O1%2BVUtqkuvqAbKKRy7Qgido9%2FpRp8IczqZ6KixsVIQOiBU1%2BBBGuAQXRpm2ZmACtEDtIbeFhOjV2pQj9ptfbGCrByGsd4A4aF2ir7EUjO53zLp6EdHSUzRNx6G%2BdrLcfxebS215mT4iP72Ej4fIHAIoFIqAiRUG3zJCLqgQ3mJ6yo%2FOx9rQEZ6QcpfH3UVwJSUk&X-Amz-Signature=3d80bd8cebc184bcc0a9da1eeb867cd5f45a84cee9c32c38844fe9b9ee1e71db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
