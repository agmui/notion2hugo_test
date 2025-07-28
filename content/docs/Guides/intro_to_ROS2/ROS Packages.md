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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=0f1266012fc994237d46ca6b4d831b845a59183cdebd1b91f00a274152f5587e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=5ac933f38e597b7cec4354a02e9dcfa17098dc9cf2c69aeaf031d16945793c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=ea481449b4373a1e8dc8b3e980df88ee2d61042c5173e9bf7b5d5ab1751b5b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=7d8d6c06425d990e123dd161f4eb5fe909f54774dd48d1c3158e12f8111f39e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=ae426b6b09b303d575b88f79bc24a091f9bed3eb15a2817626c906b7d71317b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=c1ff6a95100d025563ccd84db5971454190acca06a2c37fdd71665f9f4a273b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPQMTISL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFuCnVw2pujQVuecantJZoG2Faggx8uOUfVdrjmFXfUCAiBLfNe%2Fxuyuy72HtkobvKyYl6wV35hMX1C%2FPUXf3RXbMyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8vJj5Bl5%2BuTlpNXjKtwDGz3fMWHJczQXYThI9cTxHb38sSZAA7CrV7E%2B7IyKj2FQafrTD8OiWcn4UKyfJghK3xu22U8O6K4zmop7XAH%2FlePhqpfUlKihO145F803xiZMqf8c6V3pF0OQRtYnxwrTIsy3rXZSpo3lwOlGh3okWJ03VluAQb0pDzQ6yw2zjVkmwS06mkNoJ%2FJ9M7XyKDAoJlEtw90ffIHJATbYuA%2FC7TqcC7nfvoGo5OuLguBjsyRvTS2RtpnGuFpm0Zw3G2NngKSeM9nGB3SR2ZzQVxjQu3RZLY6al1bPdR6OxgElCPH0pnKzbQ0P6mlpJBTRLf324AUYez1SkzrOCCHHVawbH%2B4zotu81BHg%2FiYUXp5iDQRFoV4jJgQDTG%2B3wacbA6Ab6VOHwWOOOeUBktvymGKCS5smx3v1BDMB8vHvuAozNh%2Fgst3S0zmtQAL4AKrTwp17HxTalLSDsBvU%2B%2B8FiK8Xuhh%2FVqI9f9y4Bi2q2yA8PgN6%2FjKDNMrEGQ6mIzGNiuAcc7nWl1kUYkmntw1aVKQ1GGJTFIZaY%2F2D8XLXDSJK0LDC9CcDH4AX2Aymas9dcU6x1y0FAwdFIY490JEcIFBvyHAXvr4By3jbaqjCNT0o8YuwWV98ZjwpoK01Fssw4uqcxAY6pgHKQztS2dujOtoFyZafRABmgD57luBH4R5SE%2Bgx7tppHGN3JlZa%2FTVmIZByKjDjDtFSQp2CDAWyrRS7vzorPCh2l%2FRJ7KY5P7hWlnH6BtO4p3dzhMWr0RtfkXOKcVyOR1z5Jv4xSWtp166GBeUio1SkBK7BCJcKrZv4N6iNG%2F5sGQrGHOjby0El%2BUGMcMbRgZhJlRkHdV3S96949H42V5fnkE%2B3Ua0n&X-Amz-Signature=4ecd2f6ed97def10fa85225d27d89adf7698c73fd8671fd53971639604de1935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
