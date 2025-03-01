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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=e17e1aac0119afcdb241279f265704007d82028ec1e2744ddce217c443bc18b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=b07f3a40f5827d558099a9840d054b46a172d82238e6989f6aeb7a70c027f655&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=84ffb412bd92a4948f68d8b4cf440d0d1e96373c68902f59d5f29578bf9ac27f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=74a696baebe335f5ae4099eac80bec1b5b2f128c89ebb2ea4fa4bdf8a670ece8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=92bd4563b47b9e1768b8c76b29c13a6da4a5d329da061cdc9440f90c79dc9d34&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=abcb8ba8209cae246e60b6d428b23bffb67f8cfb5c1bc088fe529b504db96919&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QH2ACU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBwTW5XGOTJ9tMMVzkMkZW5hvVyVKHXk3ogV9medeAQVAiEAkeoahZXzCwx7TtngOhQ%2BrWz%2B%2B9lStE0KV4rn3tADa0kqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8U55bUUK%2FLncaI5ircA5JPIHJO%2Bj0fr2ceUtMYwH5SouLsvwrckZp4BwD8Fydoef8heFIuMYvqnPBBAsZsYimFFcrkmuEl7jCCIo3oeKVp2ocu59BeUd4afszBS6Kz%2Ft6BTCRwGt6O9mmltlunfDshviss10NeI4QF2xhWUwFvSqXy6cx3LH%2BGNOB0qVe56rAXfiW92c5nlVHukfSlLTfP8KHrj0Mjfk33lcoNWeX9z8t2M8bBCGfwBZD3xY3CLolcOcclDOIg%2F6jNy5WoS81hD3ogYQgubgruSTYNMBlDiKyTVsd2QCAmFmhhTrwgH5Mk42Xskx4JYKGpMf%2B%2Bx6QY6P1lnpSPsUBkAOv9vxPOYC4FsLlvh9HmZQjcUmctMqJ4UHUwLDqj9UAf3xS6I4HuZSU%2Bww5BMkTVp6HX7zs8mY%2B8a0dJb6WnTDYdpib1%2BZfPfYn9nWnc9UhbXT1E58d34Fmcey%2FtEns0P4O%2F9rqefAlZMvLu2%2FaPenSEH3B92Qn9g%2BcyrrkjbKbVzckMFrXGeiUw5bpa2TpY6S9U1HSdt38hAN8jnMiWtBy6aa102kUblHvMFdszA2X3NeO0oIoR%2Bzgqv1a4AQKts2y5urf3JdvCxCfK16Dt0Ia0eF%2BYPr8Oo3zObtdN3uF9MKnHjb4GOqUBXiuxW0k4ImCporMUVKopB87eloN%2BN6pT8s9NgjDWco4t%2B9lu87DInSHyH0XFwHpk618FLMfF0hpEfyakL0ybKLC8aXGlDlTAGRNcul3E9qvA7Kt0isrDlG26WnNh%2BtMxUl81CkwKBXmjG3GQInNO7YUVrJFmBt%2FdWaBoU1KgkVauxz0sWZM6oeBYSMXH9bSTfGMPKtg5PBWVlBRMn6AJW4VQWNyi&X-Amz-Signature=5693de45d571fe01155582c1b3af54149508a314a4402210b1f8c0ab081e755c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
