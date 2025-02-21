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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=b1e502d61327445d76779c4fca61ae0d566da2b6a2f7519cf1f3b1bf8c53eead&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=abaf8149ded4ef64a84a800f9ad9e65b0052a3126de39d1a4aa349008de0693c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=f247792029e6804296184907eb08fc46be49fd70e94ec3c9a4cfcac5f24f190f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=cf60fe856c6f10c0d3adcb98765731cbff69a64a4186b2d25281397aaeef183b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=8ed9274e389f6ff63d9b5de562395745ec333314b00eae60703f6143591b770b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=429e4d7a6b420cb263197dd7d106ed34fe21e2fee29db1010dbbf400f22c00a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS5Q2M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKhmpDeadXWqvBhH4E%2BatAdA6EEvfIAZ6oJGJn3OHeXAIgajiQ4GnGkWBmhyRFfU0LpBgOjfy71JaVt7%2FYt%2BnMh7EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BjgQ9ICEOoWk9E7ircAyjCSrgOYw3JfkJs7tyn%2Fuaq6plEUftl4KhmavyRehVA9nsaxvyNBVLBoF1jizmZoJCUrGBeh6SbSCuxRrqdr9I9Sv9T2qXyoJ%2F%2BeANGTgfEoDkplJQtvBrfUEaCgDqBu27MrioUHp15u2ata2lZ1iSySp4bG3bHMkqcN7IcVCPzWzdPcZ8oWY%2Brc23M2JwarXKid9uzZ6Z2r3G79hwvkBHbXqr7gUyI%2BjfEWixc7GQKcNb%2F5FhVlaQCauRjSSoYBCC676pOmSDoT2xM%2BQu7P5Q1jnRkimiK0cAJze0Btd%2BO7JLHZPrWyh3ZwHyBKGulqUfXY11d8bimC9iK4KM8CMmEOs0CQfburvG8y55iKWTFvMhNDPdxC9REkSB7HQFnemRThqNn74Q%2B8ftw3CytjDO%2BLI8VB%2Bl5a9IxQRbYJsw7sDFHnO39EX%2BLU8tazO7NauZ01Iys0SB5RDfZA%2BDVoRj3a%2Bq4hyPf%2BJIpCL0kCrHS6RRA5P7%2FvyujzGsYSsXJK%2FA0x%2BasyHCew7gre2g5BvP3xBoyLj4flKxHP6yqs2kbKnmsfETjBXJVHA%2Fw%2Blcb01Y1v8%2FzaGMGvckFAmZEwQ4FfLoT1DxbmsbadmLRRCVD9qraCb7LQPGel64WMOaA470GOqUBvmcNs1AfE89gTRbl7wtwaKUbqhN4YP8GiWmR4jyQB3hCN7lQ6yJOEIkWsKsBxRAZintrJqPY7j%2B8cieerG0v6hbIov3dPJLehisKSLuaZlIwxJumin7vPHw3JWW8G8uW1X3mQTj2UbfIBrnjudyNtdmcf3mN30GiBiV%2FG%2FSO%2BOFe1pNHf%2B3Wpi2Wt%2FMnY%2FjbfiBOayCM7DlUGqFOPxrZmjcTvxTP&X-Amz-Signature=ebcbbcd2091389d811675643a9c3a5483fd7ddb1b1699767bb5ddecbf05804e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
