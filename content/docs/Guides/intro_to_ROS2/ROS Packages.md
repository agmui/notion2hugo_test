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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=0f361488f95c053a1325055aeb7160fcac0b4411b825e998bfbbdc9690634208&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=3f8d95d5ffabfc8bde953c7ebb1a0da0d98629177a467286daa34981588c8061&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=df6ce5f2a8783a6ab5dbe4c729d7118bdcb6d2d7e819e6e388c0f3882aa166c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=d695686e397efe2d8616a732952748b4f853daa6ca076166d803912abb695b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=46b4c0a5157eba943dc8fcd3c03e22e1d338fddbac95f4720c229273ef6f5c82&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=5cb9429da01ad2f6e311d064988cf6ddb8f02858733d513504897692ecce9511&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZSUCMJ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BbMFPR58543DNRuBWw6O%2B6RsieldCq50UKxeEAklSbAiAXKBThllrH7pHtZtiwrf309EMp7gGi3abiVvMfVyoNMir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMo2lutpj9uO3BdeyKtwD9K2VVZIJe6k1bXQf%2FCjSR1cJ1yhkMOgBw2sk%2Bv%2F1uCxsZrxMTKQNA2qEeFGpXOywg1Ch8NUGqIhAg301ukF%2BaydvjTpzr81C5vM7zthaBT%2BAXWeGOVk299LjbTMZr6ZkkytY1a%2FuLM%2Be0h1yUU5edVTcD7j35rudrtxGOa9eWdY7QZ34SnCQhvkJm%2BdLqIwaNkaUZyTmhBIHrcFF6zYCfqAYtaKeJPGNr5%2Br%2BnDl4nJPvrtIe6cJ0nanXrrs0JqdzCleP%2F%2Fi6KSfKI%2BHU%2FB4rGVyL0BmOFK3xg9irACBvoirHCNOtBtPjBDhWCmakA5PnMLq8epgzYVQ5KVBvyccX45gIqepbD8A2Az2SAvPrFwiO8ZE7W%2Be2DCOnD%2BlaRwP2b0%2BTR2%2BFHhBbT4gKwymqK%2FEWT3zN4XZY6kB0z5XNzIn1Y%2BF36gMOi%2FXlzVZ47c4NICTZ8j4F8Tq8F65nHtx8olqjvsOeD9%2BjM0XsOAx9kEUFJJMQnVUwauZFx8PMvPQh%2FgmAOXQbxQxZ2BFou0T9FntWPFo%2FZIXT6jYlXNDI5lOj4Jt8p0TUaWYLegONPjT7lj9Fqkl4VqS3TnajecX5WYYEf5KlOueLnmwBwOYjeUy2VMIRd%2BtHyXdjwEwtYKFwAY6pgF0r9e1Mz%2F65dLN95O0ko6H2TnR52RCuO%2BdK0AaXCJX7Wj6vz2yy0y9PTtbiUe9TN3yFLzTS6hLHTPEfOI2wIOs3WBxZLEm5V34novkNpn7zyXk2OqiRvf6MrDnrgzzvFX24n1hVPLZ1xrgNmyEq8mu2DWKin5cyU0kHb%2BIfsQEpr0TEuuHHwnrmI0wtauRYOD4Uy%2FcLcc0uLM2nzsFPROFNzt76Yxr&X-Amz-Signature=896232e8a662410cd9c6c08370c7db069affa0581255fdb3351cf8c43881744e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
