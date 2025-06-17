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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=a587d0001cec6abceb0ea4f0b7d6428a1848f95d87625159a4a423dc201ee8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=c9b76cac02a114094acb2985fdf631ccf21c029c9c2afa3b2c1a85512d635db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=961638761b61a62cc823681eff1ca7660c948de263c29a49bae447ef30896b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=6e9c16474a43a2b6c0aac9e32bba094750c82b3c844e17557e366a77efe058f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=d3621b27ee20e13d153520bb1b7143d94dfd3fd27fe9f18e983ef34c2ab5b54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=a56ffc10c63eec5a0c766ce3da32c9928d105598681fb50a27115eb78afd694b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHIOAXH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fs8r1AYpgjdZlz2T1wTAhuxZoELXWv9lhF2P6gOtXAgIgKIVBVAiM8iqLcUOjN%2BsPIxR8qbZp5ZAlRJukYWo7ehUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKpjQUJw%2BMpqpzvabircA6CDEHNpGy7JsUHpa6uxy%2FrTruS%2FLmohSGxroZnK9pPdW2HgrFc9j5Pij1wdrqtrkjiOTm%2FQ5NFrmxYJbxSgR%2BNwCL4jelbT4Y70U0hi8V5IcHfkGT0%2F3BCkxkRobO0CRYkz0ZeypGFCU%2FAV1E5Nlni19CWGYoRhXLPnm2S3DKKdQeznm4X5XRvxqrMBleovPJc02X8N%2BzcXpr7eVFhmZY4A%2Bj3XDCDGC4QOKzdDdVWa4zLjR1PIxKm5cgfuuWsNZGYlYWidbHJuYmjEA1w1wOKvXkYveVEwMTG71MoWTkBhdJp%2Ft30q2q2Bc1cgkqzxS2yH9WaPgB1wJkflf8qPnUDiYXvCkBagquJWgpH0MDl4QIVHrYXJpSlfRSGLnfBhNn0a263ZISQFWral5xdlXn7Wh6tLdLyxHKDL9Fk0lPf2iHqSYdQTN06AbXJQIpZ2OR4YdWShoCIVG%2BfKr%2Ba1K7Z6REAX8FE%2B0dCW9QA75f%2FVTUeL%2Fw2o1STMy%2FLoUl%2BvRPnCA54gTVO23LuE9Ze7xMX%2BWyEtWa4zT5eN%2FHG7jelENVoSwBf%2FwKEQa4hQZBllACym6AkxArJDBZ8gQVSnyxqmL9Zu7hG5D3E6KQceq4%2FciL66KeP0jlbvA0i7MIPsw8IGOqUBbWpHI7SBUTqK8WdKVSJfrgNhoSeQXq3Pjwf3UvZHQBn57kivC0HA%2BEVa8lFZJS4ismBO69jfCTb6STnPIeVVJY%2F%2BkvrfPAzWkPtfglgQUeM6Xh2ZnhW11FAg5tH9xwQTu1zIK6ii4H9WjJFM1ephHYyp7E55D%2Bz4Kn28XmmJ6nYP1tK%2B2f0u3MZYFdq7OyUGAep956PVf6GVx0gaOYU4kPBJ89wY&X-Amz-Signature=6999153ad40cfea4b70c1b4fc2c7d3b153d693b2470c6fc8b2e037323eb9cff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
