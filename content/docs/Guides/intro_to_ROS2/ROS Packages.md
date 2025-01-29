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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=1880463d2227c8841d2394b74971f4e68beac8cb5e1d54bdd3dcd914e4575711&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=688443b23c26c3c00432ce176cb8fd8a8a21345252c0604c836659022a680167&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=3d7802e548e22f4baafd57586b8dcc73aed3bd4eb55742973d03cf6aa7ee2762&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=ab3f88a224267c0b7fcea8590c4162d244a03c1d33fba61865d7f4346ada70f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=f19d602175aa22ef19c9cdf4ae8849e88a908b4f89df472c4e6eb1204ccfe628&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=d18378929ab475ef5cb02a0afd6e1cb511a82e2667d1a674ecc393cef40416f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE5GRDW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHkNrSvQ1F%2BDDAk0Xy68a7nXcIp0TE80z9Ke6VAO2vX7AiAoG4JKLq0GmJyeSZSMM9pdIm5jA8kr7ikSaN75qBx2%2BCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwHpuURDXPpjd36dHKtwDwAzOGhhXBpHJlPRC79e%2F6kWfTDDg2Ue8DS%2B%2FcwsN3IXz1BdPrI8Py%2Bdt%2F7Wq%2B8aOfcmP%2Fjay7Vtrivq4qZo31cdH4kzOGuJAOinC4jV53%2BSiE4KsNwGU6Z%2Bn3bDcDiZAn3oxY%2Bjofea3yLzDdmgNi7qneniLoGIk59gFpdv%2BfNO%2FgAcEsdFish2smziqBoW5rjKn1nXwFVAMzfZGr5p4ez2KaAbrbqflAP9IwIWTvCuihz7Ly5omP3B29Rbvf2ytW%2F730Bhl4eRDEU4SKzc6PRZXUv7QN8wkhbSHmp6zY4%2FUkII1ccwXCnQ8qdLhd0Z9NmEfSAWWK8KEiv158JAWV1piuog0VIeUGRcO8ylwTNPnf2zEJ6secQ3pxn8ViRJ%2FrOs0NTren3BKn9LXOqJ2Dcokj4KSdNwMKI5habUlxIoYVQGwxvNslg6tPVVkWZEBKFc0ctAGUizfseAuIDynB5kSsKTe7aG2YGoJkKmXKt3Cab1Q%2BwnDTaZ%2FobRDAF04BaYGqqtBrZ9S6p4JCau3tTX45V6xCCBUtOBBlEoDswRTFBwArMy8Y%2F7EdmJswcKmR3%2FveEk1ZSB0GxjFqDpbd7%2Ft9YjoB1gaNRUyEQIcpg3D1mMheneAZmqZvWIwo4XmvAY6pgHezEOu3em1gy84OL9xHTCQ5cSrhAbu8FL0f9FsoUxk4VAz2jGmMVOg1EQgZEFYJkU%2FcLycPPFX0iluR%2F3HdtunPevJK9Fc6UO7MG6WxakAoM%2Bq%2BPmfU70N5TFs5z1r4yZ2QUcK%2Fau6Q6MDhGGduXI2PEpkOPixrs%2Bov3kA7TjVtBE8vCvXb0wl5PRmMNiQfH0YJR9SDB0yZkZ%2FkeKTuo%2BKEbLhXw8L&X-Amz-Signature=5575a9d2a7d2da297247dcda3ac901d3b6e7185e4af7048e3f42cd3629b5959a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
