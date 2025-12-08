---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=0179fdbb94a25e7bb5fdd59b3a38dc59557dfdf1e13a9e2469239cf852585534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=31fa6b285432539c8173e61097345c436dea5f17753d4d66a427117005d3fd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=3fa28a82fa85bd2f88fcac37884c6b7921bcc2b3d81e82daf4f4c437187697dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=e4e6739b20e78dfdef63c3a8c19679f5698d422787e32f8c83e102971dec3911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=823c0cc0fb714c44deddb85cb39c2bacb29e4fad9b955044f762acb0dafff44d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=d09aaae4ac7fcdd11d0d0e53350ae31eeda24994e7646617273dfbccd918f5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMFYCFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRADoY7QfI7VkaJYphjAcvI0%2B%2FpsxB3NfX1cW8oD0AAiBTjGxmbVFbuPEF1W%2F%2FUkHO0GyqKJ9u5k2%2FADn8KhX07SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDwoMJzC9%2BE53Whh4KtwDb8smkG5t8w%2BZImqjqc%2B9KbcvdHwTzmichTPn6Clv9B8BFCoEE5SGK6fWCMeLXXsJzWesQBfiJy%2Ba%2B6xIKv8P2uW6uGRCuzK6RotBE5O6WiV6k3ebvA0YR8bDy%2FtCuJCzQZovnrQtIF6WvnjvKaOc2LNTV3sqpDbpALV4Kg2OaKuWXSdUEy0wdOpL5xrwyYytkD9ioS6VjkJDapOo2JBuhJ3aCjHGC43ACK%2Fa2N6vX2vNijUnbi4h8QaCMSsjZt2cCW2VDg3SN%2BpxsyMqKXLB0KXQvbyi78GpR8iYeF4CfWPrIDTIJR58zFZ%2F%2BIMg9ZgOKJCkWloXLEHemfoFmcQ7pNYXKUZJ5rNODcwZKVZJC6yE1cTu3c72v%2FgMGARVVNnv63aCNLY4n3xAsEVJ3VT49UYVFEOPEPTJ6ziORnf5NN9pnp6ax778aO05ZAoIrv6K2Gj4Tem3KCy4FO49ijXueb12iqCclNt9oL2tpkQ2WIAw5uT9jZ4NjUv%2FVvyjU9D4VU2qboocAwV8OlZqA%2BGqlN5F636fRXlPJk%2FjTIGpbR4fxhROHH34%2B7YkgSlxkZzo8GyTkSccz9qVr9v3dwYgfumEuk6Ry%2F1rK72Eal%2FBafXvx9ISjwLRLPfvwOsw5tHYyQY6pgHn4xK2DzciOX6GdjyGQqPG0mmYyNECaMigDWRfzMkXII9fYqAPAE57B3FxIC7lAXSYl5j1%2FVz9RRKYATZF8u9fdQj4wwOhhnK6C2cMMTznzxLv33DR%2BGVhA3EFxsJAvR9yauoCkdI1Oeu2pjkb6Qj9%2FhlN92a3gToQEWSH1HoE8J3mXq2blPELcFvb7W3jxOZgfX%2BKTv3w22hXJwLvYcSTdV5zF0cI&X-Amz-Signature=2bfe98fd00a6553a63609a7fd76ce25058861b2c6a790aeb932ea8ac882cae36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
