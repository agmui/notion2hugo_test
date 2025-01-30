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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=200a1e25452638ccb84523c512524ee675bec88e5fb11921463712bfa9f8871f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=8d07fd2a001421d61ba7779fae94efae436d58797621703e418a560d552e0b33&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=d5acec24896e2357f0e38010cb74d0d7a5cfb9577a86fad0a489db32f11194d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=51ab09bad1ac2ac389d7761353c4ef9fe54b004c85b7a3bff82f771985c0a03b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=393231fb19927d8a28797326d8e8a049069bcb600c77506663b243f6144da689&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=6f53291d8be1be9c81d9a8fffcb2b41ba7188eca9ece1963a5bc5f6e18b48223&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWTWOO2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwUDt3DCT%2Fu%2FiP7R49UqPwylEwuDWrMKPfE8Kc4DXCAIgIx2SNj%2BF%2F%2FqYdxDxm3OfHhSul58x2tfFfmdq%2BsH4iTgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOuBNDLci%2BojYUAWyrcAxEO%2Fdt0XT%2BJ%2Bz2enBwk4wMcFWZuv5E2QGocJSJW4KujlOAzLUzKBKtfc34VX7jtxEMqE%2B6STgRTp1gpY2Hfb3ifg3W6mBG5jTaTY6i8o5gJthNV1VWGZCYbelqcnKtzY7mURMYqDC%2BRXkp1UaTHnYaENTZWvbC%2BV%2FNWyjSiEbYqO%2FzDy3EY%2BtTHcuiO4TymW38ILN8zkHPCxgU5Z4tDI0UM5n0V91JyXiJbLCtBFBmILTW%2FbIQjrePXzB4POSTfpjuP%2FhQVC1bjY45Yyz3HcDuGjMbFYf2qw4mSQ7S6vlo39IMlIlffaZy8vGzWcvoQY7WC16K0MYam5zNr9kjJk70muHIVcXqcy1aWxZmSgUe4Iazl7EG4vyoHiOv8VCrwhDmgY2BTgI5hTbK7ENdnnk6p%2FHxLACqKg0z6okJxvjhI%2BENFAnpm%2B2iN5hTT9H0gklNW%2BmZUwPvqefpxLQU45xsRo8Ffr6QuG9tV06XmyR9y9haiDdQ7IKuAnQ9tDtzYV0dwTfYCs6sx8mNc29F2SynNY76RYVbIKMZaBeAs4GNgMZ4LAJPjzlfj2bruWfFZHeDaO4GIZFlubGDuM9SzsfKcfwEKLKJLPoWmpL%2B0L%2F72NBR1dh6xvS0jPLpSMKzP67wGOqUBLuXODzpiW%2F66NLvMA3hSUhXT8Nd20RDAovapDp%2F%2FHOgkQsUVndZDuSog%2FhozCfm%2FfT%2B7XwRDSEiNurDT4NVUjpD%2B4KHHDCKToOyaoOzzvaPuEf6ehTNiSeT%2Bj9xNVSJyGKO2j5hy84SgGEXllHPbw%2FBE%2Fws3lY%2BcYO8lZ8HmANDWDNLzuvWmXOUV%2Fs8luPSLXfBJr1yjyYpN4xW%2BDQ9gwqIXYwYx&X-Amz-Signature=53ba96a5f0612b44d66e6f1ddd51b981bf557ee09cae6e617df6a5bf0f2e6ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
