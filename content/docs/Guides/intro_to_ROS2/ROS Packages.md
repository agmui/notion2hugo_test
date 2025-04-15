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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=8e85c9464c969614dfbe19117877c28d5b1d7a47aed05fd7b74c894fbce90393&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=d142cecbb1a84f2a452141a7a90c17d31a8b1084096963daff1d5bb1bfc03919&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=010191d4898565aeef0e664fb10ef2d9ec55db833813312ccd70cadcae26168a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=9de0b7e99cf941e3b9c475ada0162f121138226258131b577fda29400a49087e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=beb873290e9731241f4c27398bfd3339305bd536dad2c1353069b1f92d47bd80&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=b2c3d1aa98d22bce448feeb7241ee39eda28dece03ef4e4fdeacbc9f5bfb380f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YM2KMY%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZnRcnXKtjq2OOCLehnypXFP0G0VAxUCUSKeur2%2B8RMQIgU0MFhxBA10pd1lTyMwYQpp290ixOHNQ3zd1UQXcVfYsq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPZ%2BWE0a8YPmeSRp8SrcAy1GqluA3c7waismePPzfY8gUDCalJdHPknFI%2BoPKx3RKYjv7zFOXQQ81XHaJltuVPKur%2F2b8CkUdU2oqodgkiOuh%2Bl2z0%2BDZsCD7nGGX2tVkxyM5fRInEbP2eBsEOJaI8NvVx4czXY6SNh6kQVq7lWkZTbnX5f62T3DbzHjKG5Tcx6Aqmwg%2BdkJZ2xvSQEuL44TpLYggFgtihtdn%2B7CM5GWP0o0Im3Mcn3IhfVgZrEbUQexIVlaufajTzZDzAhSyirA41iGVwlC3UWPTg9UEcxMiuaGnMw0JiefHjQXr%2B9NNK2VTiU2%2BT9KVtoTJEfF55XXzN83KwWC36h1OOhJ4SnTDkIEyJ6j%2Fbt%2FAgaMUMvz0nzsDSW0SYDz4to2i9LhCsH09qBk5ImXljuquk1NtjHaYt2TTFNriUavi5KM4%2Bsa4h%2BkU%2B4A%2BGcjpZIjLKiVIYCa%2FK5XP4QtSm%2B0Yu30%2FmtsjM9SuEPJ985Oo40THbhYxy%2FD1C0dhQbJZcH2zN3oH7nDp1ZYgBDiGdho76QxJLPcYYHMz1IrEn2jlxnpcKoTIlhY4JNX3mb%2FiOyGTcLPpwCdygTAs545iwLxkiF8%2BU%2Bcot3x%2BTg%2BGUk9LwSWsqnch4GJLK1i2GoUbuEBMKHr9r8GOqUBOaxB%2Fws%2BxmIJ6xPyd2k8Gee2mtkCevC1dDa8slgv5QMleAaXjL66aE9kJGJlHd706mwVFpjcabTnmkOontJwMS8C8mgrWz8nWgM9N2bdUJiAhxPYyBpWuCZuHv1Gf8a1ou%2FCswqN2I3sBb3LXihmtBOwK9DvUyVpUa2DtNNQt9TtpPyTOnoINqEqtCJKIF1KHbjFVg%2Fpwiq82Md1wkpxSrVspGy2&X-Amz-Signature=c7a9b97c080711cff69958e223a184ff0a6263b8073496ef0304b1d95137a0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
