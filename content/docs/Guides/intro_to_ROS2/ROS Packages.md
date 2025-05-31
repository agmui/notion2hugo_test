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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=bc5a027c2ce1d18d28bb51fab616dcb3d02b389097594bcf3457fccd029a2392&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=732fdec76ba0e281727e1fe11c62891acb929635099c82cc698a7810bdd3cf46&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=8c671203798fe7a16564fa2c8993bd22629e994e8c21a04a5e6f5e3c09b5c6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=0193ad566043b7658bb939e703560af73a0242a45cd6160a34a673da247e7845&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=333246911734024d67014ebe7731d08f7a61ebf433adbdfa64a30dc515e8d81e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=5c37f9478a2c0604a8e8df1b8d4d6c3a9f5b817ce586c542525f031a11372811&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG37KYLK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk6jMxPGPh3d8pENCzY42Y37xXWrXlrPtt1MhvQFWlDwIhAK831DHbds890NOM1SSG0iYyleWQwZs1XRQOfEMYHVKoKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZxxKWp4QQH%2BVEDQq3AMmzEnOWWI7IB22qiekuj97%2FsX9pj0lUfBrO%2FGxOK2oKJVGeBCxezL4Frwrmq2oABWwEWomtS%2BIZvvry5Sx4lExDlmfN39cEUQo%2FVbWlDpbIYLdNFm9ADNZF3ObWtz%2BvfiJoqNYz%2FMsziIWAegUrFzJ%2FBFWMlB0JP0sX%2FemJgid1XxJzJpYnRAyBdsySHH52g1Or1yyZPjitrfYWLUYmv%2FxGi9WEpAlp5F4REaIVOavnBGVXDWXRiiJVbMJvP7qzcsb7IvjJKtXR0o7Tnp3d54GInnSQZtDjHy2NxG1XC1f1JvT77KBvEYgIoWv53bymCHAeR9KeEK8qWgE8ny9uwWu66xiqOQ3k5%2FeDEhtkMzKPLsiwsKBLaa4N5pyAKZ2MjapLzA1SULwMsTSKvDeHvfaAw28T46JBVn7959Ues42DD7TqY5tmlfIxPiB2ueYdzul4zU%2FouXdI%2FGdvoinrAi4WlvgLv%2BSW3ui7bRlYAExE4G%2FMVKU%2F%2BUBNkR5dou1Ud8q6DHIw1Ov5%2F4EE1ca5naiYMGlV3WuCKkm6GHMbCA97dovJ5wJp5R%2Be3MXr7MZXcagv5D98Z%2BCjWHQDfPFtDo2hqqBh8lcuO6sF8HdmZ%2FkhhUTITNC719nK29FfTCLvenBBjqkAY7aiXbu0jIcToYt8ZvKl3xBNwzAu8NcYeT4%2FqbE5lbSbixrbV%2BlLzWhBwLtJpnuYmV3ExfF7KEJauT79KMV6%2BdpYK4tJxwv2M0aW2SoUCzgXgQqMAbhYqL1csgmcxsUJTzbAYIS2Zazd74rKWVozJe5nnr%2B0ywR%2Bfw4Ips8EvrVf6JldBW4%2F6GHqzEYqcnop5ThElGw8U%2FZdyIDT5IdUUeXjOLg&X-Amz-Signature=227e5e5748e6786012df898afb2ae52dbc0507aeb3895cc04d78ece72b37fd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
