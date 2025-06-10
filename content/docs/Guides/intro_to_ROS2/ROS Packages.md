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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=3b3ae7e599f0223f5d67d5d38b9b4e0ff181bc7bcde692cfb0724702fe2dcecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=89c07c96d51403680ba91b788be01afed711955c4c97d340d8c249777019fce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=be25b7436e414462b6e3c1e37bbf8d5a651f91628617cd71840a12afc658bd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=a55c818c475011914045d55f57a42a66ec3c8dd5557679bf85feaed6cf18457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=bcd63c1898d2331735388e9c321e1f4ffc6e8ed75e628052609205f5bfb8a5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=e8e9b45da28b516a4cdc1ecceeaae57ce2ba3e568caa78a32d2b4b5a55e59e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YLCRQV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGl26uequAPsSSVjaSnDi94vVC0LuITeA9kbgXjWgzy5AiEA9ATRsEV6feW3%2FAA0Afp83EvY%2BrFMMqeG5o%2Bq%2BCb%2BoM8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzpf2dvrO%2FlIooC1yrcA8bAgaH0GUt9TwWXYyQpUZtnWhEEspAczY4M%2FI%2BGn%2BhDxTz6X5gEuRROoUcqjgHx1yoypUXPOzoRzTjPOHhmLFLBLnSSZzLmXP4eIshr9dGTNndpv%2BXicraD83utXco45nrmdgldx20gXyDvWkAHAhgbo8qRHyzkg3vRZfxr1IM0OOyMnOgztaMPGdVMOzWOBAjs9VJ9Id5QgkZLXuHBMyKokxFBijJcKZWbsxig9Fz8Pk8d2y%2B202lC1jQD6ouv5NnFBisr%2BLq5bKrFE5lg%2F2tipK0JdmYt4wMxwe9MC3BOXM2mhrGPgxA9gK%2Bpp6Ynu1Rbj4HDrcpRmyNAYiP2N63xeBBU3TREIcNBAsH4%2BmEPkizgdiGzvzRORClBHYnNC3wr1Dviq0GWBOMfD%2FRyu5Bm%2BatFAWzhwRQP0CpW%2FYcOs9pIjykJhxies4ZL9oQ5S21uWmJfWg2qveC5lP1u2ylfWXwP0p%2F7eDEzjuQsaxdQEZIazfsCx6F3AfQ3BHi%2FQ6dh%2F%2FuiCDk4ECl08cKZj1hgV0wEmXBZMGxCvyR3Q44LdWZ7WpwA3AV6oMdjq0fJl%2FZzveCdVNAlYVHCBMrdY9RjB6m09R%2FGG94JUo9RercHkl%2B0zvCrZ46hHAARMMqzosIGOqUBtIUnhAy8y%2BEEBdL8QZYxzESAUMq2sB%2BoVG5v6tShvljbs2ZQ6FFV7V%2BqB7XDnZbx8KQNhB5kR2IWKOlEF0CPlPpLemdDraAqQM%2B2mGe%2BMDQPdc7Xa4Rm2BFjUVMhL3BVNURFa8P1p9ehk%2BxIOwN%2BzQFQL0L%2B66Duu8vIrztQ%2By8hymcqrFo5DadxcIEz%2B81ltWryH%2BKytLZmHRtnfzMszFMUZEkx&X-Amz-Signature=4b80958f84344e0bf62cd251528e2e626694ad0d2e3c79a588f4c5141da526ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
