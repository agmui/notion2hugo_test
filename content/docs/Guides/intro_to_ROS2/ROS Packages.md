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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=2eea6ac61ce02501a174f3a6157dd408999043d011e3e120b28c25a23f8fde19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=c0704292c4052d3847b7737c869413b808bca553fa9e6d542f41a1ee497e6879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=c5ff1d3bed34b40d385a9dc084b1ba9daeba5833fbe17a10da7a23efa3c933ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=fc8745aa618027ee0148cd0aa5b575e1a7ae60d490449913d39fdf1e3bfd0b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=524087aa75fbb27def4d24600c0948839ac911e26b2393958b7c0dd02d9b6c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=1f76fbf5e4bfc23683d9c9860dd67fc4962164f8b1a50c44f8829b9b3f943e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGOZCIB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICB7uPArt5TmYxpWsAO%2B%2BI%2BNujIbUCvfryl5Yf7xSKWRAiEAyRhykVQRz8Qp0JTY3FVju25tTpnngiUv2LUppPxB9JEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHN6Coa6xGnLC6BWkircA6ZWqQNA8nEefEFUNqTsfW2sD%2FyRC9qATvQqasO2Encvg66Meys8yPox7E10ceceTLAFEwmbo50X4tTi%2F118OXzPEtPanWEPX8LrGTC5Vlr%2BssOF3S64SkJr9FjwvvYFWyj7iSubVQtE6GFXMQbeqaRFzuipwGyrlrHWrDm4TLr%2FYIgdLIqVNkdEXc0ekHJ%2Fic2idK%2BvHNEbRiMwL1hQICvhXeBHiC0ob5b84gaaHwiKGDC%2BnTYMq45J1u9gpkw1yBysDvmBi6e5aGAaGx%2F1IJYOIP7Df9NvX8lIej%2FVMV88TJPP4LcvFqq0GhVPmipEktrzXcWqT3nOya8Xtootv%2BnYACTFXhjHNpreYLt8pBdqr0gcnM8lDwhLVZLfAs9iigpLUkIxZ8eMTRSFB%2Fimh9SVEeIhwznAT6VEMKH%2F19hAL8tji1oV%2B5KAl4fOarFbwjjEKnIMLiQO6iHGWJhzvPbiYyfiwH%2BaWtIQVvefe6b%2FBqSorbj5fvYMukto4HZStfR8vdnX7LH%2B%2BDH6X2fs0groQWOKOBxbyPxO8ndmPJf3xYOZNG98DPw8opbreQqCdlJ652S3H%2BwcWxDu6%2FJ3dWAJzD7Xk%2BAZ940AVzlf2QL4%2FNRu1jl29rl0vd%2B8MMDgp8oGOqUB6KHjWpq8cYbSw5Qg5ij5NSYjalCu5HDzen07DOYP73K5hSA46hde4iuzzjSFSpYQjB4gTCUoQ2ZUuUsS001u7xJpk4GB04%2Fk%2FXUU2utqv41PNokMo%2BGaZJq%2BIb%2B52pO3JaJehXGI4ZgTDdnIYn0SmDde2VtqWl2bAG74ljp1coggsMiHl61Zsm3NsxkmCANzb5xR8Nd62E2NxbnrfuKxRj7peKM9&X-Amz-Signature=abf8803b90084c14f2917bf5debfe15e5d813aeadf4f98b9193e2b5b36636e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
