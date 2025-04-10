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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=62c0f3326627fa24ce68173a1848c808254f887a18d39974be0bf4fe9be09ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=708fa875f17d0ad20500052252e387fb090ee7b220a2ea26d2cf9d13557a2acb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=bc477d7414585bd2dfe882ee58b8c521292fa32ccb6c12966711756720f084f9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=85e96332f94b2da5a3b12c428892a4f90ddf1a013c4d1232cd2d967a0db762b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=40bbb224252d6880c3710542753ccea976d5b39289db69a4e102eca9ef921dde&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=7e3f41abc584aeb786fec6b89d2b9e4ea8adf4fbe1108e7f7295deec453b0045&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774KEDOD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDNTaauONK9IV2NJAUsYrdvHhvPxgLF%2FRVq9%2B52hKBRBQIgUhGuKf3CfxQP%2Fm5taCQnxSOT5XZrNZae%2BdR4zGfNprUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoGYAckrhJl57OvbyrcA3%2BZ1PWexOKJ7fbTe%2BpUe%2FLfvF1t64XicNrJ5jOaFPTy20xhT27ThoVwUYETbQQLj9wqLeXYF71LgteUdE1SIfKPaVIQYmQUIodRXa3pRxv5P0iH76no8SzKhslpOMgSJ2iCZ9WmyDF8W83iZU53%2FrfM089kg6TkX5hTNB3M8dVjJs4qqmp5yXUh%2BJ%2FA8gkP8epbe3CzZA%2FY7AZqTRfYR12Y6n%2FG42%2BlcU%2BFt8tcq7Kar8uTy18q5VgaAH09s4vizcV%2Fm19dhrBVCO5jdzGoVM9hmHR1SJQjV79rxXsz4x833ieYVJshLhKAZFyjXZf0S5n%2BGkzfstFU8Wys4Ar7Q1EuI1LcdBZYgRf4HZB%2FtJk%2BnjenZ%2BiP7WHdL2rx6cKp3EZZHn3W94k4nMKLwi5U6RzIXFhOYLFFkni8zbsJmeTC%2BPsF1Ie2hEJ3dBcl1EdTmXD%2B1GDj6q6HRjpkOfx21ThUe%2FABo825I6s9EbesTJpp87ib%2F8VFMcVFYZRITiBhBZljZvfFGA2oxlvtV%2B3yTsKdz%2FjitxcRtD8ZJ%2FI7FVq6KSFp%2BkQO7kR%2FRQH%2B8NllSG%2B%2B3cewPpXvG%2F1JAYRvVyHoKB07TF1A38AQ3HYWLUPLfAWMvQ60NUgKX%2FvNMPLT378GOqUBWdBvR%2FQJCwgwO%2FVjAiEdUbmgf%2BhNMQBM02SDzDVESDIEAwGqgfIThqjumWl2o%2BcaI655GvbZSo7AsXYDhq02bCF%2FNEsJNAZCaIfW4P20jwfOoiyw68FSR6U%2FYDdZhBNKxbgHy6Qzg6NJ%2B5CP2Z65inMUu7AokijC0malglr%2Bto5TbPKt1hdwAioNxNjYd0lyaxskdVpQ%2BG1D1GHD0nHjC5815wtd&X-Amz-Signature=8fc1b88ab1d07e7733a5d85c234ed899094235cd77ad75fb784444855cb355db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
