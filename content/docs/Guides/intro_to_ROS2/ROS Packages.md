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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=7f048398978767de48e57d21714eb2cec74fce54e86a28318125a5b550ec279a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=b4ccbf548606ac5d46c5b4272d406eea48bcf26db86255f46735be1544fc4254&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=3cae84f077f6c4f16971ea98f3807ddf2822deb653a23ea546ab8fb49f75b4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=5cab2056bfebb3dd1f25bc2f90e1272f9605d6bfb8d558a8e7a220c311d22102&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=6e2e3ed86bc037a0ce492eb9b24cfa0069b73449dc197d90239a0cb67ab9ab2d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=2f469ea0fd071a142e59a77c26059b4370a96be2f8e0730df23cdc90d90c4bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZP5Y5I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUw1rDum794CyHgnzgIvTQvdzANPQQlLH%2FHcaFAyhFkAiEA%2Fbk%2Bcm1WOxTiYyk%2BlkCMcTwYuLvHaAuDB9EUxsifMgYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDs%2F9jUEWGgmtaf4eCrcA7BNI%2F5FVD3gAnVaeKeu5qJaOz4XsE6bAJ0z5trH4TmP6JgrCu6FYQUY42k0zWrTJMslz7AjYc4wosp74xCElnvMC3dxBF2CMLainuNfNBoUhcEMHUSSxECbYRbUaOYVf%2B4VH33p4d9I22PNyp8EdwlISOjSUlZLmzFAlJMTqFjmMU7x7J53B4IKsQzBz2WWG%2BzY3xxBnfBf1upDK0RDMOgcVXaHNjgliSYouj4bon6RodZ8%2F%2FASAH6BzTnTUK5f%2BP38u52kdLdUO8B6aKdL6ENY8K3G1LLV%2FBy0OjdDy%2BIdlKohiLW9dv0QQWcNtDfnyojs%2F9k2ZD5ZDEQf2iZypPTPyWV78JWPcj4w4OPzjGcbyZjRpwBkEKVNsE56Kep56kmsuSyfYppjlfvJY%2F2gmKEPgApdBJmlsomMto67koL7PI5lMmz2NH2FB34tSS%2FZL3nJP4IUOt9rmhyyvPGWJWs9Csz9sBWRZzd2kFk82b72BzyNpYHId2xbaDBgZAq7LNSBOjhYwboU3Xoo6XmTMfegv5xWsiGPfBLZPVb0dZDWnvuwMrKYnAlSUBgr2XBMaLLEqTDKUzbdfp9Xf3vODK8s87swPmPGjXII3KCAlNmsX%2Fmzf5ZCrOHf49biMMnPxMAGOqUBdIoh4yD4%2FIOcCLyUlzoUX5SqMOIyjr4YQxqfwtTxg8vG0KzKT7tzzQrQKwppg%2BqnoMuaJkuSb6e1drRshm9zRGjfmQo0mOQKNAschj2ZDzRlUn3LwolDZ6VSH1khGD%2F5elHP3mYIL6jWyS1SVoHz903sRBGz4obvf7hnLXGiPvO6iZrxBHRYkdXd1kROAMQv0KdS6h14VsU5N1%2BV3DEx0C%2BdX40k&X-Amz-Signature=f53780108415c30fc0cca6041772322ec25faac04802721397e369c61536ce54&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
