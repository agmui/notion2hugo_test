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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=f1992cc97f9e7ed7b919e8048fe10375af14c38c4606e429fd55f091bb5b3c05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=d1fc8378476c343a54224030eb28e876435febf11dec5efb2e8092b5837ba74f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=ed144249b2dc89395e4d9fc553ed977b3c6f462cd0c19c1d1d72ac92428531c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=9ee5f09817c36a10eda7a4b0bc62dc97f86e0475191cc7913c4ec50641223f13&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=cb0714b609e46f905223cafe31ee6a1e6901732fe22d782f2efb7b14d55f151a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=1810c2a4f9d47951678ccfe5bea8cb2f3c0191db0027e5133169e4d6ffb23700&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OZENE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQClwZncMTuSaqhDTbA2kNEo%2B%2BLTUC5sfm8HMhDR5Z02ngIhAP3N%2F7VNa7xUmiJgPQ8TZbcNn3d6XA7jM3le8vPBd1EXKv8DCCYQABoMNjM3NDIzMTgzODA1IgyNJf3SKHogchRg3u8q3APcIv10MXCG2i%2B8DuESnq28uqUkjH4VoM2je9OZQdcS3yTOY1cDzEnyIMxNDZN9gIycvKtgYZWelLVTNrECubYT1bEt%2B4XbIh6HcN2HAZWXsdqHQWeCFilMAq3cFk%2BVS9d5tYGtoLTstckuX55GUIoOaurjHZmXNQRv2TO15oxQ%2BGcYfN1QxAfwPCiy%2BYX07YonP7ldoZb9fRZlBVM6vCRjXRdhWTxtFB0agCk8Xvw1Z%2B7fK8unZy8KYqaXON5IaxcyeMZiKIqTAuwPphs8JNsF%2FkjqTOVZz4IxeUMC7vUzGVbF8mZuC4i1xkX31KuTjgVvEATWRplVaOi0yeLso7l%2BgACatXCcZs5ytj6QB0x9fL26Kj8FXdJqAiXUnJM3G95hnwudp8Ao65gSROhW8716AQbmwk%2BhwTf%2B6v2fQbOfClL%2Fn%2FdEeF0Pp%2Bya%2B7ioWBaFap7IzyIFy6admRPpkejcKYw%2BApo%2BccxtbgnaSMY6F8EO%2FPA5wqScNZvp2NQnKn3f4XQ16PH7xpRAeSDKmnzbITBZ%2FpCQCAE%2FobQg06umEf%2BmWjlflFPFUnhIC6MBYRRUCFNc%2FBMYhxJc8T4gRXLriEPGZXW6rPYHBJe4WsVI26nZy5zpmo%2F0gd2qEzDrv4a9BjqkARiZLZl3eh4xapqoAy49VRinX7O37hSatRgyskMQCxZDD0D%2BqWDv7ENSvjzL56bgmQoFeQ6B72jZDCIqdQ%2BJiKwgcTeQw%2Bs8OsTIi7JuYSOa1u4GMrQXu1gwa6f1vvM8nq2kZ4X%2F4mlFvzEOExDFqxk0%2B4oRWA48HlJYf1iNlGOY21Bs5mjYn9uBA7v4TZO3ZLm6tzlWc2TT91x%2FA3hdn4jW77TN&X-Amz-Signature=146af0827af5b3715bce1c0dca6a2bcd124f49442f689a427b2917fd171abce5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
