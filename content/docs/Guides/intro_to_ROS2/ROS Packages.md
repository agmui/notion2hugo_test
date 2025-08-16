---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=a3a152e5d5ce5639f2a75e866c4ad747bb9dc14f04683db3b9521a57d20fceba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=4c1532e35951f4c1e549f6544f2db649c97f300a52cd2ba33ab01435dcbcc551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=c56dc315009cdf6fc605be50e7146be89cd1104d1f61a4c10e9ca7d5566e1e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=2a1fa55c47efcac9804403bd6a14188fb0f53db7b39ebb1b8d4f3a4275fca720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=2deb5881d10926091acdf2cbc1b17ae805bec32a4e301a5d3b746ad70557d394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=5010565991260f43a697094360984807450a449e892b3ec27abb6ec149faaf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KA3YOR4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGzt0dG1MKFGXLxOIYRzbjB%2FJ3KQKDKd3tk269%2Bz4mEzAiEA4ToTRXcc6At99oVt2xvtfnYdn6%2Fd1NKsXA1XyuQiHg4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKDa0IXYSV%2F40jAfBircAxGgJ%2BbUUeixysSeX2wOQsEY8%2B7XQXNSZ9u3RWxa4i9brWVXBCat1C3UMP3hgkfXLO%2BHEUQYNvm6LL3wHOwNMSZXx%2Bv0DHXF%2FdLzsH8KiluWOgz1Gp9lrL%2FaC%2FERPqbXAEWeXfiL9j7LPM80pknz%2BAF5m5wyDfewKsYv5tenvs3NFcimiYXVgzTkn4qbOKuKvLuaS%2FDGS6veBc2xqJFcghPh1vhuUZynVu7H4FRGRvB89OdESgcMkxtl3nSptxGf46w%2F7MZ%2BX9kwRHci2sPp%2BHJNIT%2F6gTWI57KGWiWoxujxs30%2BR9QoCTDB69CVlKP0R%2BgUTcUiD61t477aDcs5dqf0XpLSpHRAS4ukSw2UxnsAZMzsYgUA0dL4ojrB9CMqF5CkgzpUXI6AsqInbf0pKtEMyWHYNf%2FRB464G%2FmVCQfOncMe8E77ytbV%2B7FCNKNIIta5r6x%2FrfwxHQLt3OaFxynoMNMacA98VVgqfeaZOcgNlaJIA8jeTBmqAcZ1A4DuuEwXPT7Z6sodtWPQn7G0NuhQyHOjhmYjggUHxAjoXn6HHSFa2sZUVUgV0Iw8hlv0iD0OxU%2BzAQHVPGrDYpzNRPm9aJwIwKrDTN4yteu4uOMOwg6ZIcrCg0TUWP6tMK3Y%2FsQGOqUBV7PzVYIBlWG52xSR20rBG9AdBlWhtYWaW8ShwY1m13I0f74854CdRAy%2FI8%2FtVdeVy35VeULwJPKdfViL78M5yAiSC2B2EJmH1IecY9rVaNviZnWV8N1gVboD18QfBzLQnGqu3TJ20p6%2FiQRf9e2TZIBnsydEmoI6SEZ2eV7H1zLOQZ26ocQxvXh8%2Bnixdf2EGQD9aqER4xxVfiBQHzdwXnELRZmm&X-Amz-Signature=978ac66dbe42118dab0b79b9d78ed8a97120c2575d0f7bbc73ae7062f87eaf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
