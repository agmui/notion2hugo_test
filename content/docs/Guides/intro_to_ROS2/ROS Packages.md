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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=d44e7e6520d7b0fa99e649dae9666cced3d4fe1a32d23ca0d389079580ec529e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=2736ae9d04ff0f29ec76dbb3eaff488d95f82ce363b2cda903c7895ddcb502fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=23cc9343fb8036fbf6e09c3305eaf3f6870b09b404f87d1c6119569045c54c12&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=333064b7c85914012fbcccc24d86e96f0de695b3b6a44a6ae8929fe23d6d0d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=4fc4e55e42ef9207380f55ce231892e967d6a698ee58f3c0d59516a7a78ee133&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=646cffb98115242970a72d43f6046913aec4b701cfcb7ca757de6c48cf1b049d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEPAOEM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFofMvkbbg4P80HQe%2F2AYWaRs8GZli55ETkaZQLm9RGIAiBTRaRp6l45Y5xVPGfaEDcavIjUV58fpoMlpOhTmvSQ6iqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5kKwtdqYQuZ2NWyCKtwDPqqjP0M60vevUIpmJyXBJQetwElp2KPmkqDoEi0ZWHsvn7D6iLEkGETlZrAyrTwHGGCywL4OSXpqNVc06FKEkN%2BZZsbIOyIyq8r%2FdwTxsXs%2FrQP%2BrDkRd5XXYXzasXHodM9Qln7gYROR13lJpjgYVZVfiTJqOVfQcrUmk64tXHUaT%2F5K9vV1m5yoTgkvMZVIT%2Baz4hVVsXsSlqL%2FjElSr7eF3B5V%2BeXDzATrJ%2BY1LfaocNKLp8n1tJvpnP22zh1NKsjOwQSCNKVZk7smoNW9H7vmD7LNfh70msyzL%2B6jcc3UtyYDxpmqGcRW5ZOYNFbxa00pFG%2BSCyf8oeCrNHBwzPKnkZsgL2W0O7%2BME63uoM9T6h5IIOqa5j8K81fNDHSDo2dSVIvgcX7q2SpBKxBBUqWQ%2Fv%2BL3tXp%2BBAbjAgxWfWKF6nhuRUBeyuyLet3U%2FKzxNchdi9uibOg8q9IcQBwx8Abnz1FbWX88D27N0RBEaLb8ECbTAmj6Wkip3TV%2FsOI5elvSkCI%2Fyhu1JxvSeti%2BZcTHQFMU6qtuBtp%2F2cZzYUoTTv8ZfER9odC%2FkpHbI2wbm7EDnlFpkxD0mfvYRQSRHTbjOr4krHE0Z0oBmnO9schsON1LLOJNjUOBLcw2tqMwQY6pgGkfH9wT4x8%2BYmom1bYLHNm6dA0gFYkZUDn2eRueKUshgNfzriug2rEq4mEm3Aa8sdEDeyhE59dgZwdWLV23c14LQaHSUa5DyChZj9XSZ5eKgty2gOFVtWxeTxVjpNzcVrI0aoZ3MlonxcP4pO7hmBT57bfzNjoGGpazfqUea3JLSaveeS5p9pk%2FEEfmAT91LSDbGlD7kqFbUZUvbxWBlySyY7GPOxF&X-Amz-Signature=a5a97d35ae4583047da6fc18d6d099fb1ee246b04a46cd5777e3bd138af87ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
