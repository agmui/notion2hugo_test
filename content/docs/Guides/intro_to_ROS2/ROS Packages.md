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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=fb4ae9ebe2b2ebbdcc38ffbd04ef2b44b4e92524b00fa808433e60516d590c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=5a2fa5b44b5bf0ecd4b2d99e416a54c2052b8f663aeac0e89fdf93920e7eb369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=cfe2d445727e32871cacc0a7476c800c67455948ed47cda48e8eeb2097b1cc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=0f20522600673c606df730f879179358a53f6a8172d7b62b83234ebb68245e24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=f5a65740e7fd5c769f4ad5b786894d7fd26e2d424b5737bea0109ea24190df16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=bf13d1d3c540d5805ef60a5cce52122db9771f0afcea3d6fc56093499b6b8a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3LP7P%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIESidv9nza0TScClrad6Ka7BiqPn4umqvR72jGIgKQzWAiBq%2BFIkRLuoDGHIcdxruxun1eeeX6cdwOw%2FqK8ABSgsISr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMeoYdTGTIaLevP05FKtwD1e1mRIX8bz8oj8G7ygM4%2FqKG8ZChnE7rSx26pdaBQ1axWzIhP%2Br72%2Flg07rTIJ0cavI65z7Fm%2FCM88FZy79jgUT4fQR8xZycokfhhCKjS7t67gtUQB7N4%2FqmMcqVLjCrnEK0a3d4yslGIwvq9nOpEiQ491aCQMGP%2B66KDLDCsGbU%2FpKAgi%2Fm78nmYjtIHrTeLzjqpToA%2F52sMZGvBbMWLJc87wqdgAWzMBu2mLcyy91bStEZar7GStdvf%2BTUjOHWVER83ZFZSUbxbCi3P08jCL7EMsxkR898IW6eAnau6Un6%2BeSZn43HHKqmuJVdr7LdY3qWSgxkljVjv4dXRz5EPe5pHw42BltP5Cz1mGBsX75E%2BJQMBai%2B2fsgWPVjq%2FToiXF%2Fqf%2Fgio9GiEoTdbT43ZaQbQbXQNUXd6aJLbUfZb70su%2FQXWP0gttwH4sySfG1ocxEFREdITJSDpjatHhHxAbFcQj40d9Xj6sx%2Fo7FcgJEAqyeW5EQahLxIREUHS9NuMnVlz8YArG%2BDT9IKgE%2FW6I5jKPvCnONJJJr%2FIG7SMFt4xQoBy592Ehho12xS8NAocYIUSHnO4gVQIpsxP01wwz2FezDhM9ZCt4CWwDIaJs63%2Fu3Zj0h2GPTeWww1cmaxAY6pgHPBMG3A2R7rdX7uCPS46avwq8BdZf5BXVZ7zIK6OAmF5KHKFrsKuKkeFEHhkGzQ4mvZl%2BdCawICqvsd%2BGzB4Mmpnw0ARl%2Ber91SXXHau5qnWHdBOLSMhHhlahL6aj8OITOrjI%2FCI9347WB%2Fd0XXCxcL03ASZqisqCBr9%2BFjOTZSNJS2GKmO25Oh0M3GhDT5Ks0%2BSmB1G75KDgHgJ%2FIGxOgr40ayDNP&X-Amz-Signature=43fda574530b858fc4a759cc2425222734979e716480bd7bd7eca779a46f8170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
