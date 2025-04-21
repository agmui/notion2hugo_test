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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=715fe9f6df0b22e297088abfa2980d20a8cb786ac5a3cd979ab4f6cf5219dea6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=731a3205dfa7f2c3f0eb9f7c8c9c407dcb69779578757e5144d355cc974993be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=4c43a838ef2daf431bbd9d87bf9b77245b13ab4ed06dd29db7b74c531fb93612&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=873a80f44fdaebf5311fd15ae88e276d2920619855bbf07a91dcdab7ec6a5bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=7945a62730c31662f34ca7c9d3037df5e4a4e72104c65562894ed37ced4b7ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=733141b9ad2088ed4c040caf919af9bef8bab83f344d39c5aa127437d8a37ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVWNI3T%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIG1k5%2BoMdLsvhooHhn0sLwsfhJSf1Pw%2BBqPejj4IbJQkAiAlSMXSwf7ZavO8YmeshgDHu%2FjZr1nkdl5Wiv384z0X7yqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkAgBi%2B2KqMPZL3VKtwDFmyPGzgvXQTC0n%2FeB3VEN25W%2FNGRa%2F%2F5FeV%2Fyh6X2Sm%2FIDNt2HEv0yNYf5mgwSFvYxseLS%2FqNfi%2Bj8CsNtjZnfwLO%2FAkPbXW8XGD%2BPmlYg9omxz3DFweOFnri3RcBMqNIL9WbmRESXy5eQFCpraLikcH1yoK6E%2FqExgSgTs4ykuLql7CIXbqya0Z3Q%2FHfIlT8%2Fo4q8Hg4PIo%2Fq%2F8ldoquJsNuG4PKaba4XzXdPNCeDBjvRbONLtcj8SirR2GhFKyfW6V%2Fdu1nXOkbiFnfSagxseaG8SjBVhzsdVPPqRr%2B0z06srMLS04YbPSAv61P4KAXFlrAx0NptYmg67lmbcqfJ5qs%2FspMyVEvPEO0iKOnt3l3jCX0pMRzXoTazGjRbm71UCpc9dzLzp%2BSomzKURNiq78AyisDcuuf8X%2B8Gi19rkx3BRqTDiVFOX4mIM%2BTGZIyw2kCchL1oiwDKLWQnlO9Oh4AfjzBv2NTDZpNgEL7g4iEDP6KIPZKCL4PVMI%2BUruEPoU3SRv53O4jNrEkRCpBNRnO96T7mImScmE4xoHVM0YQoJaDFHQo2CfQrtu2bQzVPH8S1OVMkUIJHfhtt1wq1dfKnN3IdAXpc5kyy5SMxXQ2JRwhEHwgrxmrUww8tKZwAY6pgFoB8MQorkeeXiBhXtI8%2BOV%2BEX%2BgrAnD68tbAboIgVnylkpl7WyKaK4Ucm%2FAKYw7Ei1T93voiwDE6YIbe3yBdcbwKG%2BnMMMM4Fjb%2BWqXISkH93vGsp4JqsbFlItc569VpPA%2BnhVRcPQWBjEC5a54YZXnt%2F1LDxLvJYhrLlvsCKHvwI5NLpUiO9VHy5R%2BDq82jk%2BYvIKXAmqetcB%2FZYaiBeECy2hUxpk&X-Amz-Signature=5f233216aacda8d4f119f613327995e3e636f1d57fbc55761eacfc59fe77bfad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
