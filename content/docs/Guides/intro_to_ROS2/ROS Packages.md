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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=377f8dbc50befd567bd894136057fe2f847aab4db7a5aa9377da2a0742e9c701&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=0456c55b5101570489a3a401204389f7f29bbe11257f99b000f2ba6f87c22167&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=b051ecbf7aeda13d935dceda847c9f2e1fa0b9f4dbc55be2bee9a14c4b0d09c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=dbcf9ac30388c7f4dd7ffbc6b19863c54fe5cffb2f068184db2e2eadc27f9892&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=84b69272b2e8b33b37669023e971965f6f48e7cfcac3095575f91cf07a9a72e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=aac5b0473d45ef4903e5230898006ba6f33ac5d61a1578c51133d04eac698a54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VH75YNK%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgqZ1YvQt209L4svY1haNFn5cbV3sMjgsOi3pp58f%2BoAiEA6Y0g0EjikLUGbd4uYlGDG7Vzb1%2Fn0vOQ3%2FKpjT4dBYEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyr5R4qZaV4OOXRdircA0fAoLqLBzc6LQdf%2FhYalwPATyN7bdh7U1NHd1cFKLX8bd38Tyy%2Ff7kUBXAVkA6HK33cILyb0u6TuLUmMTB0O1d0t03yzc%2B%2FbRbUp3hXAnrA04ICa0gqt1BmLNrCD2Us2n0yGvoh3esxvII352XV4XkCHiLbW736r1iTS426YMymZccLfMKTLhgMbrVc3Qywsk0pX8Bl%2BGMCYWSKWhWdWFzPKp27TJl2Tw052A2PZwWMv6mGlssiOCCnTLH8yPvlbSktIQSWK%2BMrDF6J6OQZdQ34aS47HL6NaFVeUbJrK%2BW4%2FcsWlOTaUESK%2BNsRted2OGweFy6k7d5dx2FlpJmqdhcMV8NlTXhpRpHYAVpmppe4gjApggiavCJgx6CH69Db2IoFWXTKtMmYoY0YWK7%2BCirulsxq8f6193xwYuBxxBP30NjwlQ7VJ2XDdu1SxT8lYJKRBXdcoeRlnNGP0lZqs54o4VfVSqaiczTfQ0gOsjRX%2BcQ%2F4nxB1Myk%2B042AVEvwNpc6Rh6CPdFQSaet08TDnHBJvb7QKGd%2Bi0KgA6XIM5CBWsyTfyLU9APHrotVQK3sAWHQOo8tE5JMQo9565AxncSdxJxaihvsJH7XuHlEuzWZ3rmyeDOlYbCoZaeMKyylsIGOqUBs27wwj5Rw5yNdSOTJoIFcfXWq0bcAoz8B1fcj4Mv3sYisqw6x5mmUyCmtrNPuzlEyMWXT435PmHz%2FxDHNLZ3E5l1bGvGwOAjdEZDpJ9JEtuPvwSN7iocDJIGRFbYgfiPzPdUVDmQGDNlDbpvQuJQY5kjE1OOjy1NXkWa0c8lKI72oGCHYAtn8S%2Fe%2B6lr9Ls6mViKKrWvicgY5UHNh7UFPUvV7a0p&X-Amz-Signature=ff38fa735b9f1fb71066de827059310b8bdc5afcecb7128463525f3c3f3e4901&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
