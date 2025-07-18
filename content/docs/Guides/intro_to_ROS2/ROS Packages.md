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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=648a10528014a809c135dcc177a5fd27df5e51aabad73ecd916c19b0c737d376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=cf5330614bd7c038ef9565f6380edc4dc3d165c8e5e5c1d27a65ab59f7d4202f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=81d89b95406462cb7837f7a8ca7005372b3ab9b0e1425c32c066b655082c783b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=0c80defa385039b6152d68d08db56358c021d53b1243089d6224a16cadad7c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=374914f999be6e0d15ff27b9c9667afdc3f9c9c5843d43781dda70ae94a0c09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=a0a6d4aed6491ac5d83353ca840905c4a41712692d6813c10b2c62c3c225ab7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQQFO2J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDFFaOo3z2hD7ehzZ0LVjmENKMySp9cqIgeJwoov1Po8QIgeT6HqyaaLCiKyVqK5J2KUMPnReYeIsqHhWSdeCSC5asqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5ccfLGIKJCtCu%2BvSrcAzKsd65Bs4FPF4zpOdP63pBeBktyynQyDW8ZLo9uRlfWX71p4hNFX7zNQNqebv3tE4FCe0HrULCTdU4pob3%2FVJH%2BtxjT2ly5fnAz4iFaE0P42YgUdQXk%2BtgxcDTjo0eFS2Q9UIxQSIFrMUhbbndlqdF8zZH0FVikj1415smk18o9qeBc9v%2FbXdM8nFwCGBmFWNFSFeshLDkD2IQcnhAJxYfdVWeddihsqDgEZB35u2%2FMcYABaVk5ujBl9J%2Bm54uXMnh39%2BYraVeFuMNC8j4v6Zmwdy4hHH0gCd9joTo%2BJjOguRevYm1jKWxeyHrmvNx8GkrL5kYkP8ISkNQMW6Wgl5CH%2FBIovP1Ld9q9FSPQwt%2Bonft9ISxG9zAxSzddyJgdkfvWE2gMABDgZK017Ie1Y4FfP430yYr16DxZJRFtZ049SHQP4HODvFZLJWuBSgy89dwDFO6YCcHtcd9mRZsE0DzvIyloUfuDEpNCg8ygM8WUZE%2FssknI0wUh5UmFBGBiYXj%2BnBED1AIQf%2FYfgxUTFp2bT7tXN6mIle7QBK4U7CIu4zgaGQ%2BVDuH4kLvYAxKigHJAXVyMuLaK2cqxBKYKYPZRPnbM%2FAgAa88NTcDr7mX%2BYIdKK%2F0N2CevNNzRMLij6MMGOqUBtX1VhuM7w4lbt1zw1cmtm8987eJmmglzmK6rMRAQgIKA8yYhBMnnq%2Bt9MvJlUQToBVrUOfjd4OMx2ekZ9ZemoFJRqfNeGW6S68oDYJ9LTMqwOXsk%2F2P5EpDNzI95kvl2HKcVzaNshDLvTpUBq6CpodFlr7Aaxni8nuAqjM7VtmhGErwS5QyfD84TXPpT8qraVbB%2BV1DYfI091WdsQBUwQ8cERBzc&X-Amz-Signature=c8b488b962fa9c58e7a36fe26df119e53648ac64ea5eea14121d670815cc9e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
