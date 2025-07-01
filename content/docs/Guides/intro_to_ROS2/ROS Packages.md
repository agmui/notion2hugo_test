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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=57dac56924a70cbc59411ada3caec2eabf29ba93deffb7e2a1dc500da597d3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=451de42af72ad2f233fddd5c877a7ccd4cc60aefd20ba14fc868020d458c8b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=f5c81046afc6b01313c7d7f723c3a98b18f570da27d87e4f66124e8c7720a6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=975bb6fbaa10f6e31e9d8d20b47452a9008101a04d5f40133bdd415718d98eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=f4429d433aad80b61a95f513d34c35e7c7ddfc7eea97851b79371a3d6800bd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=4f9d99a1c95da7059aa2db687795f75e48023f3c3a31508375354052a64b8a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDCLWJ5%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGV8qB9pyZcWfYBeW3Ye9vTL5HS96YNHkFLefm6IChAIhAPT3R8oAIZGTkBwYw%2Bvwh8aquZnowarXfqvGmQgOkSmtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz71JkBP22WnkPVJxQq3AO3TDPRCSiudhVCD5K2DnYoLIGvTuoBFnUbyFAc10Uzwq5jVSDz8YFaGTGXrBxfbOrGx6Gz2%2FDauze%2FBpaZiq227zfRaxr%2BRppAqH%2FlNKrfGMc1z6%2BKUg7zQD4YVEVQj0Mfhp7kO%2FzwgqBT0Ql6qNpm8zNn25D6PJc%2Br1L9DxBUS%2FLyBTr%2Fyyg6xwD%2Fs4AX3vpZvyGHhcPMEgP7WWvqE4A1df3glvudUbGx%2B9QR%2FJ582r4rxNMntF53ehEt2aztZM0DV4RhqjksPpU4Rta8QeKRxiAWTU9h52BBwGftDkdpRXHfWMthsJ13EV3O57gkCg1taqxZ60R24DoeVkct2D42zXDzJPM7%2Fea5rjMmZbNudmkZTMnpoubcebtbu6fV4DoJFRjWp0rAR6wWddA7WHnESoyOFEnptsJdmqLIES%2BfxVVeGu1ZqxOp33WseYltu9dZl%2Bc1079Vmz8TPP2paVqTL6cdKcUAHuz%2FVxffYREQuBswV2qx0T4wUfVZUvyq0Ojac67S%2Fr64gPDBulM5M5m1Ppxqdkyj%2B%2B0mE1oxE43uu1HBh45I8etTbn%2FBMZOjgew5gSMLEA1LdFe9V3meF66662I8QqqDb6XtCsMVOuqg1XfQXCnCpnWhMdoT%2FTC8y43DBjqkAWXj6mGe%2BxRAxwIgNzW56H5CyeORT69fv7vrfy48%2F3XjQxnKBBq4kcdOBhTl9sx9M%2BDcAQKk6uS4rnGfgGAEkJwY8ms1rmK9eerE5%2Fjx4RIBEUKggyApGEbBz5rIRzI2XDT3cLGQKLAF8KAm9goFgqMpiQ8CPP54dIGpOq6GYcYlx6igP5fZuK78hWRVsEcyUatiQhg8VJvBNrBW0qNra9mIza6P&X-Amz-Signature=5fbcb2079df3c942e2ee9a3ff274a7f21da7203590945c2aee70b773f80ba813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
