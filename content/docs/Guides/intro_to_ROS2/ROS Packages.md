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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=3fe5ee8b924cf4f34a8ff2f1f35909971aed7d737f80b9b56ef60b54bb4ab08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=e3e5c86b8814e6a7257725837a379f8001819bfcc51be3578b918884b042e9cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=3d3ead3dc37bf913c0e09e5a2f7b5216d05a474018b17423b2a28ce6410b797b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=0e8a5f1b766e6579c6dd35c99b4f03079d92e426a54444f6e11343f6843c6027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=ea6d7c00ed6b464bccfff014b0934e674d6451a5030518181059136ac43aefc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=917cd9024640b1386cdc00cddd351236a157120946c0e8fafeadc9cc94246552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAM6BT7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoNO6iODwb54Nvz91PmBzJ%2BCwkdru2oPcr3A5w6%2FTO3AiBPxxqSRPqHQRP547NBE8aZYEsnwVFiaDj%2F6qHqEcv0QCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTbRG%2BVzsFvpXRMSmKtwDHfvCuV4QzQNoNEtI5A%2BdmELw5WexPVjYdgfp4AomayiwNePpfRxJqKp61NpG510pPzc%2FwG5v%2Fz1HqBRPoExKwugWPyLlDxpMqoKeVry2MEvUoina%2BxNDEhuXewtmHzLyIemraFxfHX92hX3crwJDB1uDDC2vfwdMebCfM590Q7hSRr4Wp96h9MkIPzTPUgJ%2F5VQgr6AtSHEP%2BUr2%2FfvL9SEX0Exo2ORxmJlnYph8aNVsMic1UH6hAn1JJSLKI4LH2AYwaIsqDeGgacVhLu%2BAVPWa6mgCUB5mxSjhcRoUpRoCw1O0dgyKxiBQL%2BOeS6Mau0p1sgx0NyCcNyhyFBVktpi5OEpWrKGQ4VEJGZT9Qe4xxu%2BIwDSokSN2bmL%2BUUTWJaZC%2FJfprhx3dBKgNn3du5UR5YXvb4Ha%2BNb%2FLoGFXiJ0ThBYBcP0J9SpljLhEZADx6J3fdnPc56nSE9jGQ3Noj4Y8k4anTNVUnR1s8xO2zg0bIxTLdLlq4sDCeNAAIWd5LT6knxwbcW%2FPe9oXdEbJ7AYK3Jn0MnN7bIrzR79XoiDKTomMbZ9Z3zvOsx8s4fG45%2B%2BIXzFzR9UsdFtBLtxSpV9uYtImIARQVYi5uLDjw634JSm9WP1Ue%2BBRaYwn%2Bu5wwY6pgG9OFgkLkCj1lJnvHlIJzBGaWeJ%2FTGjXhUgUQXzl6WPx%2Be4omPnqkjnSEyJP%2B%2F52JCxkl%2F3jE8io0C4jKd2CMHhhTvVSUcaWZ1i2Xy4ckUR%2BMpITF5k%2FOBMPAmykfD89Uu6mP7S3X3oFY8aN1FBw6k9pq7%2FT4vp63V6yCUZZnmqRpRmOAsqIA0kxE5QOKxRqvL9qRN4BwZ%2FRzBslfo4OIrKnIKxmBSE&X-Amz-Signature=f3e372cdf392d28dd38df8d17fef46be67e2601961e64fc85fb7962bc562bdce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
