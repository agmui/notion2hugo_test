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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=2c73953563e34d4caacd301a07c1f57abe86536080618ac4382315b695feb5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=1ef28b21bd21f0451ca9b82f958039d1a91db21be9a0a4c4b5d1ea205c3ee535&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=c581bf9d061b4148ef46721452ff2d34e25dee471b39b15665d04d8b4005031e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=5be99e8f41a69bc8b759a288476e529add36a84133b93ae16e658d040e8e2663&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=79fa81ad4ca68ba67786bf54dc77f71f3db5a9cef59a590049365f9c449175f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=f7101832bb94572150dd78bd9d165114d6424871825f4834a151215dec32f1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAPJW2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoQgodGUFkUtMiV2jfIUGs04SjEtxvi%2Bww014Fg802qAiAoiQnXLvz%2BnoWnPbVAksVskeCQyu3IoIFsfULxD8759iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXSL4whCrrH7R1%2BkbKtwD1LETzUQOmp9gDKQw9wOY7XwGFVHpGyZnrMFJYVkGp6QGIBUyl%2BBZCBeHXgWXrkpg0mTwZUbPNpZwqd6I0srS3lEmTddzC%2BkVz8CUmNUS93z%2FMvSG%2BW9hmjrnZa5JDW4zNtT6pFraXgiLbycwqX60%2FLNM8kdUjmy1Z0DgNCIDz1y5b2ZUhrRy8%2BsZ0LXlU%2Baggz4iMG%2FZ9ykLRbY%2B1jcJzOlb7axSVC%2FsXY526%2FlAp8RaEro0pROx8VIPZvRHM8HpbjrjQ6SLiin9ce3PoXMyC7LvlN3q8Qs0ZHHMacuhD1%2BBTxdRp3Q3zLf2Q58HWyKpJUR3WYpnW5sz0aw9YPgqlY0%2F67KSFJ7KcvM16yb9aQavhrSimiSj4rDzi4kTJBeJC88%2FiwinsliCt4mR%2FVEdw2KtIiLRRPfSFnp4kQlIFeZvcBE%2FeTHnI1SewWLcGNIzqCy9nVAp%2FtN8JbF68JCWAfffdJB7eEm9VL7lmL6hM88BwLbzYPfMiZhLHER8RZmeI9szddWIUAJpmkNhjscD%2BfVW7L4qJAcQr0oyzR4v7Nu%2FVYQqse9LH0tWFTLfwFh5WT%2BGmuXPm0UX6wHgD1AIospwW0F6J%2BmTETCIcHRcLAWWw3tIaQ8Qkpryfgow2bGCvwY6pgEtKgpBtKyaa7dHHwybd%2FeNvBlT1ZT7LKxd1EKwpfoSdixrkaYIJJX4gJpO4W%2Fybu1fbnsqL27sfVNl5FtQJxpDDLRDhtha3uyMC%2Bcc8Fhy%2FbGLTgE0HGq%2Bgfhjf5eT6%2F%2BDah4AjujI0MX9JF9YoDk2p0c%2BeRdD%2F8QOMEO43CA%2Fut51VFmvNR%2FRWUrNUh1MAJc%2FePfyiYIeNvWXlRF9DPmdN3tMqoxN&X-Amz-Signature=192fa685903e679ce4af977d1547df4df8bec5db2a1f8cd58c985cba40321ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
