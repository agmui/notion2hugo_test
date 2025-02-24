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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=bae814e956e333020306dd00b8c6996620d1323bc1edf17e537c4774e27ab4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=207f4d9768fe9ef3505710056b19dee6ecf6cb7f2e974f6930d5db0b91367cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=59b7fa37833ca58776f9732866088797cf6cf7fd1a57dcec238cadaad9a0853d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=806444e4755c6915a044e43dd85ea0602d449019bd7dd136a9db0872f4847215&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=3f2235dea1fd64ed6c539d4372b02714de5de014210f57d705fe19d77039f005&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=aab2900928db19289c4892ce900211a175618fe67500a5ec28b54b44a91a19ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXOCCKBH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1onA9j%2FZcNoZ%2Fd4omLkoWgfe7ZuSGBBt3hzaYmgXjCAiBJxMaXJnIlPpgsirjo2a4V8ycyCfbA4iGlekEgkwxCCir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMipeDdNpV00eJr0ziKtwDIicWhzCjDnEQNw1uNskrJceMjuZ4k5nvXkSNNaGBoR0oE%2Fu6rD1mJc3Y%2FLKW6Jiayjels%2FN7REQogDr2sIZUZCaNbkHdohA2i7yHLP0Uup%2BLp5SKeyRX7hWwOc5YeeFg7lHlSxRCgdmHngtswJej4ZQT5%2FgKe24l9iqxukkzv2f7tus0PUazgBSXFWBDfr0tYj2rEMCssNPO%2BxusBPbKJFH23Hio4Zi7%2B75Nu32Jf%2FWZp5yv7aRT3x8NfO1NZV6NhDF7VQnIIYhgMcG1hheMy1e8pJFF%2F9bcxL3S7wwWHjNElbMAR6kD%2Bvku8Vg90pgVMzon6mMjhw4VQ9suDVlMQKsE859AkootEvGXyBZU%2BnEh9b%2FPEmvAk%2BWtyhNh6kV2DXK%2FZgiIiAVjuULUdS4Iw2mLPd6vCApgCgmGjksp06cUk9aUDeIgoki1SGhR31MYOFEgLfTyiJeSMgTcN5FGCs7n%2Fbl3jgFzxsQGnlKzhTTlNb8UzCos2GNpD1jEMZzaVp3%2FapjFr14ttaCIM0iQr2BwZkbl4G3vogjyM0I0OiS0LVPn9FPwTVmCj427JSSNXhFZCrd2H1XrZ0a1hvFakqxrQn2f8ddhEA39BnTXAdQzpTrth1vjL9v18h4wuJzyvQY6pgG%2BH5pYz9gIRGqEEFERAMjPYy%2BXyT21OogIz%2B9U33NYv8VlTrke9yVXfK%2Bp3vsASZOihcZBlhV8dNVgREJesRJXkVLlwq7veABAug1seS1qLQPWqUA67VIx%2F4BBq88Mp0w3KAqUEBUaVFnizGuy83JUB6xmdYiZvDkrolVO%2FB5CPVjQGDWB8KVA3aR%2BCcQk%2BqMbTH%2FCMiW%2BP9xiujlPTSVD%2F5s74r71&X-Amz-Signature=e605dad56aa7928b6589b37ed0c9108f3b23e574793eac6198212c7776b670ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
