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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=cadccb0d01ae0fdead4d90c1a8b81b2b41da46f80888f15bc090548bc78a47bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=3651f756bd64dac663ae9dba9bcaec033b48eeea029f6fadb052bcc6df4b4f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=ff36bc291a42abcd07723ad7625e06ce9a8cf7356cdc2a5f9948ec23590ed612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=84280d18de6dc362ea5adb68633a709c9768bfaf8655e4c9b8fd17a9f182ea03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=27463c030a87146b0c8fa8ebd57e59630a36e39f97229b953676d9babdf9b7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=fd4a1655fb1592bacbee336fa93fb8ed1e5c9302c11de32a56896fc35e7a1cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKK6Q2GG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeJkU4rS5uIp2iRbv1l4lzcAzi4jvlPfBPVB2GmqJ3owIhAM1Zgjty97q3AnQPfbR7oopd5hCiRfyEpPVn29cQRlMxKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoR31PAEfNwnC5D%2Bsq3AMDXNNwS9DL8NTJ209WIS0IFnZXVutmOyRCZpMgb2Z1OV6sfNulqoJDR0mtMz1Yj7snFTElmgMFtzWl2dliWrb7ie39X%2BHtdRgmmJMPbsmZBw6Wg0TJc55ewV6pDMq7NxxVNUFW7aieP5llmwhdxShgvDc0MCY83oyJG3WeKlrRqI9Qbu6pBcQvWQciTLWFuJqj%2FELN2Vj3MUlBlwewtBo7U9E7Dr0F1qmDXEgejO9J3Vs0DtlyY1xbLVPcVHOUBjr7veemwnaMei4gzLVCbcgjmU5OPNkt%2BCSB3oJpAr393zUX2ueYWy4B6BeZbmpNVh7Q%2B%2FS1i7jtYG0NB8tEnA99o3quG1Z2P8w50oBuRIdEQkDcMy1MUPlPYPB9QUN4xM7dvN4BAJsmk0yaFJ2RyjkuIGIoYDs9Y1cKclnqNXy3hAB3F%2FFA9j3H69GhlmzLVfC5l1TUsMOJ6VPjNGw9UXc7LH1ClrsjPYvkARVm4j5s6Ds0LwPGV%2BagSavpM1K5yfZttEFJEnMa4IySuXtA3HA7QZ%2BeciqYynt5k4JcTItvWxBMZP4l50HtfIIwLr4VlYfcgAfZBLTAd34uAi7gh7GMfgLquuuliL8qh5ZESao99%2F9TjI7HA%2FQXFZxVrzCLloLDBjqkARoh0wKRJljdcGrM7Gjv0F4fEGn1PSiP%2BvhyILqN0jEaisVdVAdm79Pubd54KhW0NCdAm62LY79vQcmopDyAjF%2F8yBfiiulNWEenEf2WsVqAOYznvfhalYt4PwJe3f7bM%2Bq1kQXI9oMLjGmtfUQa4VbM7LzBd6CRZJxSdOdQWAVEaJjxogLi8UpZMC9rXLixAyws2R4a2KfyyA1lVoiztPxqpV2X&X-Amz-Signature=d6a4417ec0cf7c2623f432393bfa26de93683e5288b2a8ab469fb7058dc4831b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
