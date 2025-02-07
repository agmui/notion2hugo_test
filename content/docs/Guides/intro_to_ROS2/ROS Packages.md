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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=e0c968ddf38b671649f8a8b8e765f761fb6b81a369ce4d5a0b056a3799ca3504&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=889b73d5c9349fae6ce8e1e415fe35ac3c45482aacee6c7defbdb32d969de80a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=066c844e75f0b6910c36315e0dc77904b90a7ada41a9b7d647b3b3bf6070c10c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=d89372fecf70fbb04d4ac924439ec9d02ce4fb22c97ba85348f91772006e1c58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=6a313d1bbac2ae40a2911702673470e4ded0009e2311fdc442c2a87125ae1715&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=1ea6925b86dce29829b0ed38e2ee5ba7a544bab47b62a92c6591d4c875551dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYTHJOKZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCkSWjHyIVX2%2F3OLZIUo9n35Kdt7bA6R0qHgEzta8%2BL2QIgJ%2BqR%2FXue81RStn8r4AVhcxkkNrPJUDOxzMq2KbWhvAcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIed9RnQEtEImUgFMircAwoF4w2QMyxlOqOgdo3bvP1SSLJW0E6CWmQfyHExNgCYeELb4ZpT07MSwQcnjhhLMrLu4jjT4MoIMTLEmAF%2FHqyhBQh2bz2nCD3eqxbsBmwt%2FjNxSwZSELeHZA8SezUDqzxKbC2ItY52tNUTs50fWbqPgM4CHgGYHWcj6Z7OZvhChxBX9f1SqAXWnitlzzhmlOogBO%2BLInuZebLaPsTaEkWme2XiVinqWfVmCNqTDDfMbsvMXBFHifFGNOa%2FE9AC5gWYaxvc0peapZ81COXNX0A7akYkdgXTxfvO6nkUruy2DVFAc%2BDkYxRetkQ%2FNtPa3QTHqKnZOT7E%2FU81I056P8NoH%2FkhdLUdcdogl4ymLbH0Cn%2FSCojZj9lAp46fhH%2Bz587PfbSqlGFVvm%2FKGV%2B7T%2BV4YO4hb%2Bhdzr6sTZT%2BiFDygbeHUVpkL1tDFxESZdn1XIuR89AViXJGUlUGhRNYl25gFCj7XDZ4kL8lrresHrq0%2BotTM9Ptd5LmIgqGkZDdWnC1bQIU61EqaNzUjDcPzFnqL22sSMXd4wC3ak3ymc6M9%2BFhbZPpEgxocSkFLa2%2F0CV4xml%2BPw0H7YCLgKMTwvr3KwkUr4dnWhghAPJ%2FzcpDA9bm1O51YmjbUnyZMOn6lr0GOqUBS1%2BIF%2FnWooLxB8Z2Tittt8xL0p7gpYwMrOPK%2B0QNMEu8zwjzzujm%2BPaJkZhqbhuIlAP8DWWpAys2Gu%2Fn0JuJDADGkXgrML8GOUbQuta11fOXjc0oRL5AZKbEnN6ILiFwiwrJlP27pX5Cl5eHXAMce6hC0Pi0ktCOT070KUzvBB6pP1nCNP4AvoyKmIl2RMg8hBvhekI5tJTFMol%2Ff4oM56UKGquy&X-Amz-Signature=34493290f46e614adeea1d231675a25c434c870a5a64bc7b0eb5f15271d0bc41&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
