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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=45948c74d487cb04ecbbe2f2579190fc684d522a08a90e6f4a58ac16d032a8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=9259c16d2d55275cc877b4784abf8021447aa1c2f67f641bc4c5935359c56e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=7b82e1cecfa782bc976625a4900b97abdf38f3775c5e88ffca09decb6f908d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=70f7e39496f986376ea99e4b3c55ec90b56c31d9c0ef40cc2796ffb368d94533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=435f8dda10c67edd5b36083d06898310dbb25f512c54296b261ec395f8e3e8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=b340cf9684660dc195796a94692f5261d7749f97fe5d535f9df991a5afe7f3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H42OVR7%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHPXtnlRlRlOdTUqJDBlNMYWpqhvLaHTICqHRIQTJaeRAiEApUtvbr57oKEoeJnGSn9VvmXrpcXpboSuZqgXk3y56osq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPTWV%2BVKtf6L0GPI3ircA%2B%2FXIMaPizTZsLHbfeHY24tMOEhjlffHUK4g1k9xTBYRIsvDyZGv9dsNPPRYB1XoM%2Bvko0uUoZzEnlK1rrjXXAvG53x6rdtyflQvUVsCM3GoQnlwedCsSl9fgv%2FeHjHgOrM4Wse8I0B4I33%2FFNt7cPAvkle%2BEK3d33%2FihKeZ51mTm%2BHdSinwPQ6g1CZgoWWc9u%2Bf8OYSde6TGE%2Bu%2FH%2BRpwTHKdgEaxrmZmHVK6kJ8hPSaZt60kbNBynGNrq4j%2Bx%2FMlAcQQrSfnw2xo1dBk7xg7E5E3NKcA82H%2BNOQOehnj6tuC3tAy4BnDzdRjZfKD6dJkJ%2BYvgDSkor9GdGkZ%2BT9A5EVCNSEVODGADNrxR12khTcI17XkzXm%2FHa7joCb235vZXa%2FuSB7AuSHeRLjyvbhtka%2FISCvoAIh1HRPVjsg7vuC38w%2BQHtNUWKAfr0cIlXHovtH%2BIOFbh49KNFTAJ7kwdkaJAXATRUU3yJFBqxdTzFPEcqr9HEuTpBNBSYaPRuyO1IKJXolkFA0lS27vY4wl9lPrW0DepXn5HzmRi3dsfWNm55CavIC022uFUJ3oCKpd04IHTI%2BgNmWVnwdwgv3%2FO5nTorohacBmaxfRvQioTt302accbOQuJQqAPeMPT9%2BcIGOqUBaY9OtY1XTApwCNpbI1v4Ffise9vXEwe2abvqQ%2FsuJb0FrnMFxK5lCrMu%2FNJwKcDyOKRJNGiC2vVd1c8BksL84%2B%2BlmMz0BkdrWOMfex5hIaq4oa9UfG2KD1tos1ZIvKDr1Ce1tSuz42Gs4yvPcWG40UtZphKBhgebUZcUDIQtxoToVRbfLIO3ig1GUPIfT3zPZ5z1P4bXHp6VBWX65a%2FrdygrFtuc&X-Amz-Signature=a45fc5b8a4fd32a3c17daf5fbf0036d4969dc6de0c92b2bc76860b8bf41fe1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
