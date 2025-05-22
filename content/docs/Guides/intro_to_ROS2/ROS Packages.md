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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=5704b836154552612af8c185214a6e0c255fea58157a9616a6df99b7c0e0ce12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=99e565b1f58d6e3059d44967b2f7fb8f9a0544c4715b988efef36e73254db085&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=405653b83ad991133c025d65639d5ae46cd9f5b0587ff9b7bb0e73288b86ff05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=09a89558986dbda8d8a80b40478e5c71b23bf1b8f1ea24b3722195f9ff3387e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=1becbc5221a06d4d48b0aac2d7061270d177e51b4c3745ca37a2494379b185b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=45ebb0296d43edea36d9691e706e0613ed2bc41f66b5762e33b3127ce35b6d93&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZ6MHP3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDzXI0%2FtPXaJbCy7jYiG1KUPVnU174b1Lh3EeHW222JVwIhAKbglSw3NcEvVVJRZaxTgkzPVLK%2Bnc55ZMUAkMGK3KV8KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzYmzYCvhEVtT9v0Eq3ANVmc4SFRWsfJjnhlr0iRDIti%2F2DQCGVwYI3fg3RWUXag7e4XOrs5ISFXx1Nlsez2kON8fySNF4lnTkVAIk9pvUAANOs6XnGvOeq7S7eR8YdG9vkH7hobNuHBEgTR3axyp%2FiDkFl6JYZ33PI5L4Wx0Wcn%2F80t2ZQLUd402J%2B%2ByCa0g%2FS%2FBzrDmd7fK8szYVLWMfO06W5s0qQmhLkJ6JT3x64OKpVHinCYUMmbjjqq0qwTPwqAgs9qxNL3Brl81rlS4xycfqiZBxrwuTxDx%2BkYD8oejoar7CFRj58Nmd2T1CplKpJWXOxBxi7Vxm5wjeO5gSlY65c6Ufa616yrzLGTzs%2FWUKLtheKQZPPrh4pGe%2B6klv0TD1Mxwk4U6Oxz1uljhSmT148r6JYMXLnTs3It2VuxIPIm%2BR2W2%2B32%2BXiNrhWtHb5wkgECGojCZGHpsHQ1JK1OjwBdiGruLzXyDHbkja1L50Zd85jWb0nsjwXtazLV77lnp9uvyXX7N308NmRoWqu%2F5%2FLNWFZwssblw6Jrz3p1apjhrKlVgIxpsQpuwkQZiJvPMH31LLwmlK1eaF5zA5qh2XlVvRAIHZEnRfeGx4SVrRVfjTlUtK2%2FAMmhdepIACOMHxSUkfRXreLjCk4rzBBjqkAcqZHt3qIrnB0TY9vwA9oLkD8vf1cNzUpSgDVOerEoLhBhK18VXTvVeWi2i9i0Kksv%2FUSdhMwTZZUMYflnQ9kTzJ5Q%2Ffmfyf4%2B7IV6Pl%2FmtbZ8EeuN03xBPzbo88AOYd6sUEpcl5pZkZCqJ%2FwAKwouwv4VU%2F0ym%2BT6CmxeuyOm%2BGE1%2BEyisqVkZZrujXY0NX5emy5%2FiLfqz%2FVsG%2FcFsNzZkgAodI&X-Amz-Signature=fac88b5dca2810696e462c172c67aa300a4619ccf88413bfefd3e4fc474173ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
