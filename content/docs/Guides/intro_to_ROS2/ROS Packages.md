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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=9bf7642d6e35072b6c8ad621d11f297fbe5755d043d0077ad7add2d1cc847a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=69930cc46b24847d821f29454c5d62a041394c3d56e48c0d2516b5b2599f9c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=72a4fd7c885ebe764bb41277e3c8a1bee586aad2b45728ea34fe360268712569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=5823dbff543f5ddc1fe20645add9ac9c8c20164da39f971a58bcbbe9e697727c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=08f97e1286c7c579aa645b5df7b2988adcc8f550f3bdffe4d4882245fd9b680d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=5e784d301edba0b895e59c98a1e2b838557e4fd2cb72104353f4f4345a4c23ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NT7CTSD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdqrk9XfkL894kJmKONgvuF3bGJEagaPhmIP4vG5bmGAiB7OHMpS1qLGOEpVbOWV31VJyrA21ywoxlzwmwPA0PRHCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzHlRJkWa2DvFRuC%2FKtwD5kWyDHDbGLKm9RqLco6mE%2Fj3ZwwtPjEaI1OCoZisLoCCD8aeYPHT07Vx9ewQC6%2BT4dEpRmSVS0rKO8cEMAPeW%2F0q3kVkbKXeqqM2NMdfku4b%2FC59TfMaGgO9HEKgINttG5gr4J1Jb0MP8z2zgdSBAwmlEi%2BD9vekqhtQHFU3bEOjBCuDPp3PpeldPMLDN2iqI0Iw7PB8P6ZnMfTdbaiYFYYDhwiAY6MU8tpcRGG7hJpJKQXPKk14dlZ%2FbG4gNjdZqPelBMuHtWjCmAH%2B6YSkZKf4tV%2Bistvd7CQ%2FOqHbIuF573ZCYo5AFwugszqbkj4kLzfMkhY8smHShGD6NyMHzZ%2F3NPH0nWSxquEF95SyfaMECqNOB9vdkAWHJJNAGWFVuQwb5PwDdf6mnXRaLOarxxDqiDtBeKaYz03MRWZRO11uAtngqD1YWUgiVX2HxOzw9zydK9IItW5GradVgBsy8b%2FAKgxAAmQroYZ2Hi0C0aaXN7QUf9o6l7DBqYjNVIT1aNFqBixp3DT1R9mSU63QfvVGIb6uhAriV67PSdt2sTikpivo4Lu6eDYHAc6H0jgHojWkzpTnyzGF726Mrfmctt2Snll95pWP1pqj8JVZQ7CpEZHOaMiNDU9nGuIwkOigwwY6pgHrF%2Bqwmzn%2FdPCTKvErlaIrrU1D1f7kuK4YKlcOwHIJ%2BqAj8o57OwNT9F7U6pPn%2FzjjPT15kOPOJAHcfExxryBldVykOwS0I2eRFgEwd0ay27MMBNcufpw9YmBWZ91Dv2wj5KD1OOBj%2Bszb%2Bsr8DhbfODVWpPS%2FtAq54qWFoWbgrfp3j95Y5%2BCOMHMMs5eBs9Moz3OYQebAu5B5ss%2BjyBX1KTG3XVKt&X-Amz-Signature=625c5fea7e4cdece1e4a9c930e311b99f34bfa64a3744e71ac48a7489f7cd5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
