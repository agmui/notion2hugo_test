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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=8b39678de7a3d5ee5de6aeddeb27dc8fc2732e6813c6bf6a187b955e4b37db76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=7052f0fc044a7775c6e4bc8ec1cfd5d0bc980ffdb5574f5621e4f6b592809ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=574c76d0d5104077517e8cbd9cb697007d56ad7178f3a17927dc0daab1ec1988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=754c355587f7ea3045a89f7f4464bbc5066f7a4c0f8a94e2d23b1f4751014f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=ed7a8f84aadcad028228b907b5fb361ec73cb84cfb3e6d4378a84ef8e3cddd98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=8f4c7f3457241cd3c799e0a03fa956698b31ec85d008ef0fbdd48fe186b24c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATQ3GVN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDgiW01qrle09QwBioTlYs6oO4DcoM5eZMww%2FcDFI5aCAiA8bRHfvx6sqFUfPMIBWZPjDvks31ea86e2sCoD7Qhxbyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMVd5Fct10UZTmMkMAKtwD%2BQyUuX0rK%2BLYzTIp9Wn%2BUC9e8cXXTve5uqPMO7KctPAzQvfNW0K%2FjaO%2BuaLz8yh8CO5dUa0VVDHPsxg5Mp8Y41eSPIFjPABuzjLOF7%2FkLtRl6%2BgMwKjvg89JUVSKMq%2BToYdQ6jjEQJnNlxExpdoCJGD3ps1q4JIfb6zwusEjMgNAM4bF%2B2cp8Kf%2BXQ2EjdCsdG2dvivjxMSV5aWkhgAAoxMMOISWJbizFkmCZKAgC05dPisQTKl42NB1h2ajzVgCYtly8olFLzmRkHdPNe0ve0QvxyeE1%2FcC0kP90fTuZDgBN%2FKjAp1B9iWo0uBOjkr4ca9%2BSCF1KnsSHB2%2Fcp0%2Bt1kYdYbD77aOXB2kCvIGeG6v0YgfZH94NicK70hHnqZOqgDhQCUa49e4gwRMO8B2WX63XBaPAMJACVu5PQP9Ja%2Fh8UCaDT4b%2FyfRC%2B36RAeAnkaqAxYb3VTTL2h4pbAjdmHoUeFp6%2FOnvP4xP0iTfCal3nSjSPVzW%2BTwlmcCtX0Ovd2Qy0h7F5%2Fd9XIFmxdvFXobxf0xaz%2F%2BTEOmS0VkC6oeU%2BXQziUgkD9fMmcdIpuz%2FGifpScs4ddU%2BFGbaPY9am4GbYAcywVJRINLDBrxV8WvIzPyKIecfSJ2WJ4wnI%2BIxAY6pgEhZtFlEH6hhcNLTdX%2Bn9wIRdcplsZJ%2Fdk1i5UD2mhiCjtLkf66q6xo4NUbQ85t5dDh%2BMjbt7LLbtLZN7ewB%2FM5w84WCpAxNoKMmgh5TRAHI8uaNQPt5PwJTCZfLyQA1BdFXaHopUEg376Z%2BN5O%2Fci6qmfzgkIQoEjMLUMeOQvQ4aDmTiNgat6ygFX8VRlDOtbi%2BlpWzH28iXIOurn14%2FfJjSwrk%2FRr&X-Amz-Signature=efb029dfedfac7fecba460098836c3e01cea4f8206a290b25b4bd32352245472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
