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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=e2a31235822920a9589d32345912d84e6f3e48a990cec4b139cf4fd1cdda2a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=9283d629970577c272ef1e148a76eb54d0cf76982eac2dbae878da00b9de3ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=16d9839d19d774831f3a1a097a16507d774773c6c3d8e256a2d77e04e874e2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=b574bc3dbf0a0fc35212b9341a4bb370afa8208212244e98891f08eeace56a71&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=68ccd5affb9c14feca107d507f52d59fb77342153a4f3e17fb5e05d3ca9fb2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=bf5e71a91b564b9182b64988314036bb6ef1261e600129e436e931791c8ff14c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATFM3IN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUxJN3aQuOZMfQfLN7E6OhnmtdFHnxLAva6lkCFObqaQIhAJZ%2BR8OpSXbwKG%2Fl8MC0%2FQiORbXr9B16BoU7q6I1slgwKv8DCEoQABoMNjM3NDIzMTgzODA1IgxBuRWVswiJ2%2BHmrTwq3AMQ8jezTRhQVq7D1xV829viZ7JU02ToJ25uXB0vyAfTaS5%2BPVhMDt34h5bBs3mVrgohE6D%2F7nCPG6PNGmSNINmg2jqbyCUyO6kFfps9ziTv2Y0uEIFXDOqyzQC%2Bv3hXh7b4sNHjb%2FtavJ3kgJBIxYqrTpZx8ub71v9AYyBv0DogxShVi802mhKwM6ZXceKcWy1P5flUkcoH7FSUMvrbrrrTWr4SBhedVvprEJzJlxhaQn31w44A8wp6FoZkP6CnLXON1Pu9ArjDi4dEqMvElNfNgd2zKEsBBlGS3i%2BuUG0oXPIIx%2BX87DsOpU4m7P8nf7BlwX27Sm%2FRdLjjaoLJvxK9Lh7hcQzH6jRV6xbKrZXpwGBp%2B5OORLT2O7aexsS3eO1LE%2BwngWWN%2BIYMAAeGLFqTyRumQfaAU76H%2BNeiODlSfqRMf0AfbDMNn3onQSvq0Q9jo6kiUci1Jckw7s30qcBRtYFvGjeE1siySwpCcgIdFweg8mycoG0YzubjSl10ytbkgVYkqXICdN5geEeJE2f8G39dSicoyieRk86qGltQ2FuNZcW6K5v9tBYoUWRUQiIrWuSuZfHnvvUZ4l1D89SzGBvCXCk9%2F7vliy81Aglwtzl%2Bar7pMi2nsRco6jCjqbTABjqkAccNnzDMbHKR%2B9H7Jz%2FEHQ3KoQZ0IDGKY%2FZ8CaGCktUI6jx1yKUaliMXjOUu9VKy%2FVFUdY6YI8YX%2B5Q8HhSooeChXI%2Bm3rnqPQFIx948qGFDsgC49fLPpLAN0SLuqwMHbJ4YI2retalwpMmncZ9aOL6UXPhkGhs1U%2FiSTepsv5%2B2B2tqak41AWQWLdaEUnvfw3cImpOPSpRU0zVCbv6H5AFY60%2FQ&X-Amz-Signature=1fffa9564961cbdfd4ed4740bd438e8e8a4eb1f00fa0ee7ef368ec1a45947095&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
