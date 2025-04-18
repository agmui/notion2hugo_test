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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=67b13f72252caf33ec68103d3d128553ff313bb2f85a4935ae8095c7b2ffb57d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=d41d2748d444b4d8aa4cbcd9e41a8180eee6378c77c71f0ec1cb46a691abc5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=55bc67f22297c28bc322a085cffa1717be66c093c85f5d788d3b18f4ef4753b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=647c6b6ee5bdfbd8f6f6cb1b4d68de68ef8a5e8bd25795fef7a9e9ecbc06f438&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=7fe1ccf0e3cd8bb0f6907f75a02f167a365e45f6e5e6c0da30b086ca589c92ad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=5e9a990efb65457dc11f713262a6a2187a38e3c319bbad05628ac4fb020616c3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676FLTDJY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPpx2HbGQS5TwEgoVvSAE%2FeWfzUTARjOx4v224a%2F8%2FtgIgAYEhhzeQBjDt4Y7puMyCoRR%2B72JeoFSLvo1j6%2FrgYmQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD39YclmjfuGH9xtbyrcA%2B6LBVXAEn2aE%2BQxqhj0EH3Rz2fbLmxYajHX0DX5MkBNmsMUuQF%2BHN6SLMddhOssfg%2B8LFpIaKHjgho1b88%2Fhy7Ul9HcsjhZAI9QI3qUVDy%2FR5chU9DZoM3zg6hEXNr3Scvsz%2B9994M%2BoAk5UiN%2BphuY4wvluoLkQYZd8%2BBta6SICVqbkYApTX0JtVPq564sS0GbCSvSpkblLtRAxJwo3pugyLsgcpdW13FmuvsGE%2FLo0WtYlIf6G%2BrJi53qEwkeeWj8dd69JOwULXwKzaoRVx%2BwLl0EbIoQWddPE4uI3S3cZck4sP9ek5gT%2FxfK2IzI%2FcBJXtdhYLKCGPQtu3c25Su118kzQjZ0dPx6saQXH0Y1KoQUvUkJzqlI0osyqPn5MRJuAHmAzbN9P3425fy%2F8qOfl4wl3ruTuAxo8Qm7X0%2Bk6vmY%2FSGKRLpfx4prIDLXKOg30W9r57L39uyuyU6hfzp3V5iOj%2Br3PyVJL17QBS6dZGH4XASBTt7pYclKW59KUDHkCb%2BABYOluIbSPBW991zguhzYqh0tPspFnNE12IzECWDUjTqk1YS0aZ5GwCRYGSHFYOVJlOxQ96CivEQqZAeJtq3LNZweED%2Bx%2F3xBbzpu%2BSMkK74IM31lDZDRMKWOicAGOqUBHZuox1VdpO8C5eIgTO6NhJ0F34J2H9dUwsy%2BD4nhHdxeNcjR%2BqI9sacSL9jX0bPTlqyNdba8Hrt6ogombe72h55UcFu2QWVlIgOlo9Rxiz1Wn6fgWmFFnMiVRX3j0R2kSIlQ8Uq8FdUS%2BYw9r6sR73vcerSoNwou66mD5PMKn%2F3XcDtK8M%2FJJ%2BiqLPWIoVD6nmWueujggq3hhds01BNHyUYTnlOv&X-Amz-Signature=2ddc28f775c5b1f7b743dbbf99f8184c23f4ef0606cb44b1dffb9248dc31f10f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
