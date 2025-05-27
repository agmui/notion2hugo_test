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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=c91e9521d025a333ef1993cc14a0cbee64119f89da9f0f0afa88f26a2643bb24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=93222d9a85a68faeba452b0b7531216f67d0e2e253acf23e333360e5fed27ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=ad2114969ba66d25c42a2e707a1fc5f617607238c2f176e06f7e80eb03294ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=5b6e17b219d6b2ff0acd91299d568570371e462351b2208fa5ed09bc6c538545&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=18036fceccf9a260d101c1a20bd4f0425309b203a9f2b54bb7993df4d7dd5d64&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=3dbad467331a85f2c2550122b3cb15e6d86def1dbfe82f4283e1d9bef64209a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643VN3ZE4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw82yGcuaQkie1wmnucUyWULqEFXqalc%2Fr%2B%2FaTx6XbVgIhAO8hpcphzv%2FybTj6TFlcwuMRnh0xScQt5zIM2NOywKuzKv8DCFoQABoMNjM3NDIzMTgzODA1IgxMq%2BuUeLMQrH8lk20q3ANcyHYQReN2lS0uo7Lf%2BRn9J7TyO3%2BSXINtzvOGTdSGZMKbAnqoNpA4ESPooDU%2BAUM0zdwED8dUzcZAGJ7pt7jrP9bH9dURk%2B9X0gPRDZs14OpKqKxkrHlPmjy7rRxrsHS%2BxC7FtVr1QoSJzqaHIbSctX0bVxRofJ4kd%2B2SPxKZQQsCiLEpARho6wHU2EcVk0XZcwUWB86N9H1F2P3hHrXiOQrWwhdrGc29qOGW8NHXxD%2FcaZdaSkg0W4rBqS3xGrrPrlGl%2Fa1cXRp9fk8nlUZvgBSKeeNmT3DNMk%2BtxsG5D8n4A3XpvCn4%2BL%2BwE2zKgyEF9OdngTjKpoxyyOvD7OePhM6AxfUTYx6eDMhyZCrt0j4yRod2Uw5Vq5qD2%2FuVOqE2lsS3mbF0BsOEOU6eA3Iv4etO2Ft4C2IAJe6ZeKECotP6e9nmO4D%2FIdGWJFNKteJtJ8%2Bf2g3HBb1eEKi2iqvH3LGh%2FyUXV%2B5QKr3r6AnbTd60rT4%2BMbaptrTGychZhXJ74ChLo2J5ICf0ay3kO49FaKtbCbhBqF91CQAVUMVAq76mgkv5%2BDbFUCx3J22eIDolb5weFPK%2BCQOouEp8CYhO55s%2Bb7OdvZRhz9TwzbVKeA1zGKlmKUdf4LUKMTD3gNbBBjqkAfUo%2B%2Fd%2B%2FDNqA8%2FLr0vP3kLN9ds2l%2Fn6DUfvsRkGQ%2FdIzeJdIIx%2FILWkDK2X%2BRigSJGlVCSzeOBklTgGwsiu96%2BIZMczXcXzeH7hiGF7QVzOIRBkNdWrerqOh6z0bIEz3ujBBAyEtyJIZ0keI9am1vimPVqHRDDab4NojIgYmTDx543lnJyHpHZdJLR3MTOsAtzLEwGcqPrebG4CrGIlbBkUekMV&X-Amz-Signature=41ab944f96377caecb30e546aa948c8bb4c30f200f59eec73e16803149a48347&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
