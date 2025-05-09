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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=be963a110735f2c124e91bd56645e11901228028d11cd97a99ae4d7c6a729922&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=0445e8d253643f562fd87f218b3cf05d9b77f39a9ab5a047807cd25363f2b273&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=cdaa5a69905cf3ecb59460d191b0600a709ff0982fa10492b5b64314c1e2a80d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=eb3b52df041d66ef618ee3f2b2b8f1181b3c2eab9f54977cb0f9e6814ab127a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=b58796c800a95b19f83df50024408fcefe62b9e9fec1854d93d39871d23e2690&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=9f166c2c199aee988a9324d25b9a631a2f1d43d370a53ad42e506cfdd67d1ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCHB4XZI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbP34PwcBNQadwt5ANF7x6WdWL2brupLmhdc2EIgTY1AiEAh0bUdlH4s2uZOMcrvaTzQlF8Mkn228KWX7AN0iayAekqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7wmJkDxhCEJVFn1SrcAxLFJQtbMWM1zQXDX5Tj6iNguGLf7QpsJjySqSRS%2B19IK%2Bk45r7hQ6CAgi8qSq5s6rgpIUAryFGnN%2Fdlj%2Fzi08zYdGqUN%2BPbqkga6KUtDGpdkZYNGd7y0MxZJAFYzTyG9PQPa0Q5Qs1Qwc%2FlwoYqibsc22J4ZbsitUU8ibgqpEsz1Aj%2FyILwaBiDBnRmSH0G7K6tsyLHkuC1iIcq53NFkxcD0NwnwGlHNsrubp5Jlj8VYVpdrLvGWQBpvxFGhXaWwsfZmWnbCurqQHyhz9brgQd5nrzg5oe5OoXFWLx%2Fw0y19qxExM5ksu%2FrV9hfBFZ7vA77%2FmDy4Ks%2B88064uK5u64AWIkWAHnyJIAMJCit8IcLkK1RkcUMDYcXvNtW8w3jsaxprgDUKGQyfmY5YR02KcYmAX6dss6CggpK4jexvxPYTA2k6KozEfZdLBexMMyecFWg3%2FUBFTJVKxP3N4Ll1VkyVO2QHY2pQ10NzULoPUbD1u52eloeYnCGt6T8mgcgXE6MdiQOoC8j0KgkCyeKilb4jSQgYAn4Gw%2FrbQP%2BJdIwHl9FoRfuyMP5Xz0NDGmarb0LcEcmNaPfoEv%2Fzg5WbAxvA3pK72emKR%2FrVodFVlFeoE9L1Phf%2FMuNQqG%2BMNXu9sAGOqUByt6wtNqhTMzmLOi6Y1pvQ%2F1PCLqwM432d1WfbxGvSY8CtBqXvPi1Sj5lMaT75JK04NzZaCE1ln8SohFBL1Z%2FufgF8pCyy8VSgngzUM2qoCllW1fKqOAcmv26w1H7M7sWOtNI1vlzBvEnV59P3Xa8V4NYgieiuX4FY21aaO7sjICxsXRaMdA8DYh37r74U9bUeOr5mJtZaVxNZ%2Bbj6KL7kAFGHCUn&X-Amz-Signature=653b84cf9a379ee16b5009e1ca1779d02243f109352e0b5edcdacd8cbb4541df&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
