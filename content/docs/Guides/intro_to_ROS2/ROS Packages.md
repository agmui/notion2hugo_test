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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=b829e83cf54428de38336799968e92bd2fe6b74d0e8e19284287578de4afa6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=f101ee4a9ee2e55987e8bac2675944bfe7f3f959bc8b341795b36706fcb10ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=ef6cbf0514ee33df163966add871566ef79c1ca819db9f8657bab28e5cfdc585&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=d5a65caedb8cf2adbffe7f3462c01b0bf6dcd035599b2c69004f64f1aee7353d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=6b17e0a0b283fabd63fc2ad5507c73fe87b3619cd49e3578e9c9326a79027c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=7812fafcf33a59af09a58deec8693abfd0a49b89749a6e7bf33378747404ca25&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM6KNZT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLd%2B9ZI7EoZgYiuco%2BDHqk%2FduP7%2BY5P6pAij0%2FkIBJQIhALvDfsQYOczkMzu4pUzbdkSO4h3Qc9Asaj2PF6EL%2BTZyKv8DCCEQABoMNjM3NDIzMTgzODA1IgwH%2BpbURAe571STsIMq3APMtDbmwwx9ZN%2B1RuZKrbgjgEmlZk9rDHDDXHqEXnoi1kyJ6B8deeBlQjTYyvsPJrci7RcUnX5N52%2FFgtgdOe7n0PDml39CNxdg%2BlTWh5oEOI9sayZG5vbiZ%2Bl1RQW8CNk91RjR8fXxwMSdDj8oRfMBe1DhWaZgXVBgJJCedoDgw195nvUE0pFoBnJpgb76aCDvT53sAg9zVRQ9ImSFv8CFVet%2FpkjrdEOcQ7AhCUUG7uTqAZgswLYwbkuf3ExI%2BgoNOwTh4YDRmkxNm2q0csh%2FvdoINZ02AEsbIKygu09h99CZz2ShwwQ5sg6T9T%2BbwxC9GYrnENPAD0SNPOzhCIjl9UcHUn5FVb7MxOas7%2Fo9mEwjiuTSG8Q11pPz1anJlPTsA9eW%2FqbQL6%2Br0lW10Slzi0CHIDiGPS5KTCc6RjU0Kap02ZlYn7cTgCqPb6S%2Fo4ASoRJURvROhyfWBA9PAL0nibckpddvIuQdJeeFfyNkiljWuqfubSr99iGG9Mo3sIiF3yVLyzTRqhqhCcFEbXJWvyIgT03ri2rB70JxD1SwFKSUyqyR1PgF6l70Jum28rNDy%2BCu1uEIfXL6a2AzbGxWqepasBmFF6zc12DoVUa82dUuSYAuCV8pxPFAyDC7xqO%2BBjqkAQZ05YDmkpLzee%2B1C563hWruJL2MSj8to3xwMma66V21jMuflbEkpwXlIY277bDvt0GgjrPll6HzSnGzT%2FS2TlxpdSVwqV5et88PRO5KMeho7Datf6usXnxB3%2FW8K0x3zFq%2B4hQZXzE8Wwmd6xqBLFw0AZP5NgAKjyjPf03C0ylMM59H%2BuF1L7eLIg44Aoxrq6VrXti207ecF9FM9bz1oZ3AhGvW&X-Amz-Signature=36bb372972781e307d7c4ab7746602a86ff1a6738ecf53300aaf682b5f3a64d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
