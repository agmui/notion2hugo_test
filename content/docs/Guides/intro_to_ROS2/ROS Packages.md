---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=5ff951d1ba1a20823ae21ce06c4984b9a2b3f2364ea2ca1a2d6129f239760217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=b92f41d71edab7d08d8879096b8e2afc8b2e01dd9ca29bb6eb280900c8d558bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=ecc61365697705091913c413ca80da1a35c4b8f33d27a5648ce29c3a896dad62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=dad69bf4be853ff455d53189caaec8d79646d905d3297299763a74d068947b2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=6f468a970589e6ecf2a3d4b64f2cf8feee838a99ca211e5d4275dcc727e01913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=e285ac7775ac6155bb1e246b9a50638cb38f80800a2636393dba21c93013c46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZNOZWF%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGCyhE2m5fl3fw%2BwEPgLOcQo0xm4FbV88X7VVyL5xgbtAiEAhFkqhV1iz0o0BmoGhA6EZ9GqYjZ64U%2BJPJVOGQWlYJ8qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHs2a%2BqHflHnmPP0iSrcAwEnMpov3hKsKf%2B50syQKdMfks3NVZ7A7QvP7TgGUCkc6awINbPt2lyKGT%2BuG6XutQgBPv7naMVWrKTzr4KcHAlkxijraQx3yuNElBE6xWwCZWU8RHQ0XbTsGF46qoOFc8X20nTvXV8%2F1uitP9YMAtEQ8Duc%2BY8PV8MWlD0RBStzWoREAq0jf%2BH3NkEQQEZq1MJnGHcrRwCyjhorKJD%2B83MQBiunmnbPW68%2BPhDx79TmdVpfod88gDyRtGbhB8mF%2FIo6g0etac5xvyMmOM2qxJiWL5n6%2Bm9XtvN68wwrUw%2BXiqmpx3vEIwK%2FRQaxuE8sw92zoXWJa9%2BumVx2fMoir1IuptblR9r%2BdO%2BQcy5NRMz6SHssHxhGXNj4A5yqJURgbC%2FXtd%2BeEWsApHKOR46ViNdCActUhvCWhM1behIATHRR%2Boobze88V4mdLnf0FTCgWvePQBRKK439HaQ%2FKvAoWOY7OmuW458jm9gimlC03C%2BTL16%2Ftod%2B7%2Fbardra0zf27jK5xy1GVhpftkRyyzrYTbyyUMWtqUMdPPUcapEvP7m5NaFcj%2FkrA4Q2liBhPsVX0wrnbBD5ObZdAjTs%2FrIiy3XegkwC%2FWCZymuAJAu%2BOPK5gMGb3cvdwhrqPI8jMM2EssMGOqUBNpgf6kGxXd3NIDqn%2BoP2UTq3OWHRtWmrlY2dZxJb7o9bIJFP%2F6K75MkM1NeRUOpJXTzdC4TEiX9041qMMWcRehzuyGgWqMPtt8SrEPE5fvo0VhxIyYwTD3lcVLvY9sW5RGWcLLY9QsusTCa85hH5UBx%2FhSXfdBnJJfgI9BMXymsBX9a8oTez7ewAjL0eYIsijLe7tqm5STbp3YJ%2BiVb6rHs4WisJ&X-Amz-Signature=c80bd9313995954ed6406191f8e1f3350d128dd0861d69b39cbc7594bc946110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
