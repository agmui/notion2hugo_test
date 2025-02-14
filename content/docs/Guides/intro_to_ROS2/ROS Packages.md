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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=cbd33a74b07fdb1c4333015378d67caac0380021c51a04ea4432025ed7dbb34b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=8a4f832741f65162e5baa7446b9c5b41d99592b60c3c1bfdbe8eea5e26564bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=762d05d19e6f55d9902811c2ef49d0b68d0b80be7ab690dcc8160376f864c723&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=e00b65ea2adca2d01d774d739a7edec045c16500dbb194012377bd758f3baa07&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=5da6220da58915263ff0a041e39b0ea310ed4f6c5f4b9acb5b80a55c46fb8a11&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=0027e2b7288b7a0f2954a4ae9d526bf8cedd07556756a466b3603ef1149864b9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSHC4JD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDUEqp2ukz3Js%2B%2Fjv%2B0lRT8vh09ZjjkLieITTPbBCMTZwIgJBMBGLoN8v4Dr%2F%2FDkMnAkP%2B5nK1JDT9cO5dSWjgOsJkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLkO9RmOC3selJpAISrcA1qdI15MwekJA39wKFJLRKoP3RWgn3c4E6xN6hBI2g4Nl3PmgWZ%2FLkO03OCDYG%2BgUA%2BcSG3asSpNkHl0To2n73ninIhRY7vuxzIhW72w8SaPmkLD1LYMaPdKfZkIXkLyi50fXEeZ3lbRy%2B1BR4IJi9p7FY%2F6%2BDmvsVXqQDoEbgfCn88fe%2BZGykU%2F4NnXR73S2XOXz0InOq4tyOH%2BXL9%2FgVXlSbpqtjdHu3HNBklntfX8mZnTqVk1IiM06mvhozxu4nei3McwtsAeMHxuTlzcD3E%2FXxEKj6n13xS01j%2Bae13IwFJW2mMJxb3aopHhkyua2lW0GxdjcsTNerBre%2FSqylLiw9XQJxXE1Psz%2F9rhWM%2BATax8QHSLV8igT1VMiSv9kRMR7Ztc9dF2%2BVQ1UqQRcOaN50jaPisoLqb3LJe%2BbGa6dh4oiwMvOUhGf7eZWu6ChbBTzsMGCq1%2FvywkKbIBy0Bd0tYnqXJc7OvWtTx0Ml80zpi9bc5EIRmL3UgZnTMctk%2BnfaoHszWxZrcszqN%2B7pW6fGDnBawgOPznkX7nQsWuVu8qCsHXZTRUeYrpU4EJvenAZqReYLlSrN5%2FBehAqJ88qdrmbs7nMWjmouhXZOyC6XdsGyswqsbYi24CMPX6vb0GOqUB%2FtUTC16Cw7i1iayu6zzJMjVxrpzXRi1FOfeU9C%2FcPlBOOQupyxiqENuI0zGPD%2FfhbEL8%2Fy3hJXO%2B%2B1uNZFHY%2Fq8LLP%2FZnPMGnqDv3sNw73oKdmhSmtsbF66G4e2lKQFrB%2Bo4UWDC%2BC3xoytvULxz8qNH6oLv52GCdViu2S6rW4iau%2FR7IWFqoDQjwc2ISdgtwk7Ww25N6Xmy91J6a3Xe12iyGPRl&X-Amz-Signature=b23ca0fede761dd734b9227bbf6ca037984a61ea814e283879413b1c060ed147&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
