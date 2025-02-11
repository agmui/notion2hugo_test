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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=99960d2f37abae73fe34654c7ab9fe2549ea544f35e11985499bf75f82eb05bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=bcb9d5f64712cfa3cd0eaf987b5f61ddcd746f214c0ada06a7cf9ee95495c642&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=c09543723b7923dcdfee93655fc3e225808a6d8dd727baf58cf210c6c6241b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=08b7ed2891381eb7844beb8d1b8d076db2df4c425aeb9759fd12c72a1582bc56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=174fe707d10c65f572b5524b16b53542ace9b10fe4126bca340210e426f8fb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=321844388e8c630651047327069a534b30379d99e614e140ea226b264b0753a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSP66QYG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhKw7HyZmzAwdDNq5mClxOFX2R%2Bb%2BY%2FcsMz8KktCOGFAiEAzhQuM4fPGJfdFE%2BigDb0sNuQA2AYTZ%2Bc2cwo4uQt5wQqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWCMmr%2FDKI0n63VrCrcAyJ6%2BHDhmu63N81mhijpy0sxRs4bbcsHHQPndi9WjQhs%2FhoVs44HAjWnQE%2F1aHe4oFQl2DhOFVr4iOhjfo9TT6SXHO2TC8sKLM3okmWYO26vX46339sN%2BDhmyiD7Lqr1O%2FBCkeKLYQWV87C6BS3dHkjOhnWFl%2BuvH%2Bndl4zGlvIb%2F5IjN%2FJODLX8yOZonfg2CUOhLsItv9UTVluglDq5vYBqiWJX9gEXjcQsiSJgJU4DUMwjzf3BCAXhxnUxd5eQgpit9%2FjYl40zGg%2BE4%2FAvtuaQOfyBYi0Mx8%2FNI2XNAqcivLIXxdCTMpaBJ2aZBsZjORwv3bL0TYt9fDBDVbH9Ei%2BwVzxEHP5oYZ44dliyeZrjHgdg6eLhH9TzgJnTxVaHHeBvDyfRpJGJ4Qc37QTFhjIlMjGHI2tipeo%2FIei%2FcuTLt4%2BRz2auxS8W4fXk5eG1Rvw90tEgnMcO6bWv8Ax79tX6zFd3vaYajK1lR%2FB3%2BlmWNDECI8np%2Bsm%2FcoqeI%2FiDaCI6yqKJWEeNkVcNYb%2F4%2FFpAPidiClj7lderD1Ar%2Fe1UYSoY9B2b%2F%2BlRiDJoCg%2BbvIH2kTA9IJfsSOWKVQIMtFwhF5dRENr%2Be4d45cEnTfDarjBUsJlL0GcFRp1eMMTIrr0GOqUBj6aAaoDUnXlksGdQqyjiqwO3MUU2Hns1bwdMNBXI9qpWnGRwv%2FlcCCSzNQ0QStoZ23MCvlZLv0t4DpAILEptUg55DMWGV3eAjDtN1EJ%2BMN6yMZOB1bgyowOqEWbFyBvdYSt1A5ajqu4BQDg5QwqSfmFBcrucLnLN8B%2BZbpbTiFY3pJnU9UIouC%2BaPyUQm33ZnlYjPt045JSgYbz9fj5Pca3OtPrm&X-Amz-Signature=fe64d55cc9bbef936e941e61fd5f584750045d17afd314dcc752ba6241a02a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
