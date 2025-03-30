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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=9ab3511fe2c1e84ded8ea93aa2b0fd36817a60bc5415a9401ce186efe2b68c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=b21784264b90297bf14c513d2706a752394cefffef62df8aa82a41ff20f27e43&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=72801f9d72d1e5e2adca6402ad9e48afbef6e9837f3dfe752b12189efdd57d15&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=b5418bce23d07b5397e3c10f61604b3b3603e6685a774d3f6221b073e2ddfe16&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=f6e443f13806e1bb45e8d9bed3e606324c4255ce1eade5608fba50c15117de52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=8f0d06d0e1bf1680714c4398076b82f56fb2e110f6f56f5c8e1e2faf02e06d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVBPPGL%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH55RYIxAtDGxS3S0Y0DsolrSzq0EIX3s%2B%2FD33CO944HAiBTc%2B2ICU46eBHPcTNu4YHfduEIzMbCpOUXur4ke3rc5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mCmesaTCp9VfwPjKtwDzxkdnYQvHtQou0Y3k9zSSfbun73MlUh%2BgV9GCKttks%2BUeguJvbXOp2ECKCYNYWQcYkPpN9VQMrUM2Uw8XFvLDAj8MnQa%2BveCvFkzpO7Pp%2BAF5FJ4vspgBCsoYWcAXsv5nV%2BBeVY27Y66Ur8DKnACm5xLElot80%2FOAp2KCF5ia4VJWnhfxbYvvwf78iDQ%2Bxcpqa595Jjlkwy9MdsZfYR%2FLAReUsJB3sfperxrIKmVDnammfx14QNLDkU%2FN2NudmO3t5e5wEwGJSJDa2U16sMEefLLTHNk3QfeD%2BcKANvEaVMBdQID1c2hYAiM52kxP0LdvJnvPtYnkEe1bASa15iwvjxzabHzAKc9OnWpfFbORnleT5J1uujOn4nu84ZL5oxJsnxVylXplxnvuZkP7MddaKmh%2FisMlC2T09rf1F3PK6XjuZ9sPbS5HPY7sN1YeQ92FecGRk%2BWDHxZTfDrQQQBwZCKDYVNBEypaADta6Mta1iU1VmjWZsxFRuc%2FR%2FJWss33ybTNTUdlQn%2BGxmNaPrVpGoPZL29%2BZEvW%2F11UfOtN%2By56NUvza6XZ1hulCm%2Bcc7i1Wq9Hs29K0FM2FZPCF%2F%2BQn06ln42igWhdcgmeDkUnighk82C6MZYE4MHopgw1NOlvwY6pgH%2FTMf%2BTKAR%2BseJhYLNcQFyMA87Md7DuzdcdaZBm6L%2FxmKuyxMKdkc0GMF%2FY%2FyzcDCMiFlugVDc%2BCuxfY86NQumcnknkiZPKDgLGJwUvrt%2Fyuef6xkoSSknwmpaOzOtCAtVzYeMMzURIaBq6Z48DhzKU2LROLai7CG%2BVLAbo4af7OK49vMTZP8Ziuvav8qtJjP0CZk%2BTL4heFaZQGZj9Jl5yIN3iy5N&X-Amz-Signature=1dab5ce6e6aa395f01e477db1713a1cafb71a0bcb7f20cfd56bd83ee5a29b760&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
