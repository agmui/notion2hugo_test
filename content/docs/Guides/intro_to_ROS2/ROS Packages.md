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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=04cf2ba6774ca8eee6d548425287255a2c4d837f856ec9e68a06ee366c370532&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=812622a414d451abc4bbbcba14c495171fdce83fda493f49e231ae27b67badda&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=c7bcab8d501b729e2b658b644e2d7498fc341f40d1011313aa0f7c8a94c637e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=cbd139641f7ba98a33aff3183a1c3410bb144fc451e291c256919b91fd979ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=0bcf93d82ddfe48be1595b45990e664b4705f07839db4745fd6af7144165af1f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=fb1ad6000988a80a5d0a7fd593e5fc9f0c353797fdea76096e890464193b514a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMATWFBX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfGuQTEO499msFnn6LBbe1ckorulwCkhofGo93GcCaCAiEAiYOfPKhxvDPJ2hesT%2BJvwcnbgx1s%2F0t4TSljGvNUPQsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgiIxPhEgCmgjFyUircA6x4PvWcoGI820%2Bft0GZvqpBsB6AXqyfqVYO9d%2BZS2uQZmoWrA7vPZtMmMjkhlkIJAzWQGPWqhi7AjHz4J1dkgWZk6rEECL6cMsrLjs1EwlyH6xLajCujO56ZsvD6gr5TekPZPwOGfzEGycwkU8xbCTTx%2Bt5S6Kj0tvPnViQcYXQ7b7%2FUCWdfZc6mR%2BEz6PRgWiF1dK1yDQFbtdaphv%2BaK7g0YuAPTfFMjtXW3tIHWMz1j1p%2FsQOBa0aqukMGe%2F6wXVmIkHfCRLtBgGLegd%2BNvmBVnbNHB7TdtbyVkK0dIwtHfIf%2FngecqDRjnym4QZqmhug%2BWIo4OlLiBY5nKPYFOXh4GHBqoR2oxEGd8yVrMXIi1ZP0aAFJwU%2BKBFnQ%2FCz7Uq%2Bq0J5MSVe9y2Nz7YlJgGdJXyd9QY4os8ScVhrmspxN4HcRkC2fVuobcs96OrGVBa2frmoUJovzJpglWFjyCfMZBiPE%2FHjvExsqBJqWJV0qWnPB1ciKsGV%2BJTVhUa7zy7JBPfs3XRMimVyvPfQQvRLkvaMlSoUXYxUFj2EySSKZ3bsF%2BKBTmhbkSF7hf8HmhIOl2HJlsxTTF9dLjScCVnrWM7KfsxHrsf896AP3u2t6BSpSzVc%2BsmWqqWkMOeQ8r8GOqUBylK%2BzkgRn4rHka0cp4SjxIdAl2kk%2BMPk2AOec%2BHbyEVKsRRDu%2B5XLEb5RJOa49YFz5XzjiTPF6bZneViitIMPVRJZ5wdTxmHH7gcjI8IXJpP9e2yN4zOXooh9ng0OoZgznjRLvoDJV15f3q2gBgO%2F0T5uBVg8yIsF3NgkKn0BnoEMZBbhk42HW5%2Fb6YllSYnBCdE%2BaIMfm86M9KwCJZZEhw75R4d&X-Amz-Signature=adee967bd4805e33916dca86ae788a57af4afbd892e12638997774009c09efe6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
