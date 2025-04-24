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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=203ffd69bff07babebb59d9c398954981f5337189eab56a0072fa7575be9ef09&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=4d32c5453d0471e07ab5e5cbdc0a27b7b8f7377e2cd948f9e2d5f10dcfba97d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=b33d97734eaec1b62a86eaa52c58246dc07ef637ca4c00241f055610bde572d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=826cc0610e93fa7fcbcd000e22e0ea1af318a451ec55fc51eb3426509994a105&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=d096cd3ca2a798a8a90b83ccafe62836f086bc158d11b044230ea5573f695792&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=2a925dc6ffcbb918d05a5f2c7b03fcbe1f4569e89a9049f8487bf4d8d8398c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVZLLZA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBUrHMdpiBHiiqzzikiOx1um%2BbOfjNneqfwRi4agRKWTAiBwGXFV8jy1iQCHW174ZaV9aQy5sZN8TCRLdvdQB3IOWyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ3KhSY00O8KsPAz3KtwDGF52ilfO8TFXktjHagD1QMFpJRLCeAxGiHYRaZxOQvcIOud1M4w2Iet0YOvbg%2BHDjpz%2BKX24CdIkXNjgzhg3gM644IXFSKPeCv%2FW%2FwxpOLDowkn7AK0R9O9JHUeAsrh265T3gGDsweNQNKo73ItoVKmJTpmpDkg68jjCg6IRJuSa9LLRRh8AOlwRLhgrdZb4dXSgb3i6fws2YL4SElZicXPsmYaaof1Ps5mXpgbj1LW%2F1QiL3QIrb%2BQhkDY1mdjFcreMq6UOZIa5pF0BPtB7b1mYvUIjPJAJ2NpADFaV%2ByHhq%2FbS1HXNznfVEyrj%2BhhWBEqabJNGVjt2ldY%2FvY3nOSgdvc8psvIzAmv3O9VYV050PChrwGJac1bD8dM90q8atXyMTcppnYrFTSE6gQPHqedrXGIyRHo5aXDL07O5mrKjBuTW2Sth76QReaS6hVD4fmyL7Mo2Srx%2BUNli8JEhLcRlou73uWam3P%2F3HBtXg%2FOBeix8OWCjHartoATo0qDlPBKCQeug4lW6rY2IuFqrLqQftjth%2BObzXw9vblOjPwOZ5%2F1rDvHFEOKWILFv2DoF%2FDuh9HvJSpfLrCrDrlmL1kaNV%2FuJTCBaehtEr5DRAdVKTa3NPwH7CJvSYsUwrfylwAY6pgEVbCrOCrbr1S8LLRvc2lVeb%2B7vnpwQarDzz6pO3O4vWuPsV27AWN%2FkoGsFmXuDlfcE8idG0%2FWOK%2FSeKVTFKX0rt%2FcJ4X5rxQnR2NDyOhpvpLDQ%2FXf%2F5wmjkPr92sd%2BtitgrB7sWgovN3bz9UPQTQgpvpDptE9vjn4WuGeDEoof2zPW1AYabdtOhRfEVmNlvV3w3X1yaEqnqyDkRfhJzSd6jd8FNQYL&X-Amz-Signature=493d7a9af1680a3d7e75faf4d3fccadb58e0365975457638a1ad7f7f5c851dd7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
