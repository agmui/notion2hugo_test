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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=b93ca4c27d41958d636fc8474f78eb21a8a836d22f6a315f339697605188f6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=a7e787008cfb7fa66f89f5b31c60d80a527dfb6c17253bd719be2022eb33b3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=3cf52362a22316ad11981d06add7e65bdc2fe554fc703eb10389189fca5e8ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=cffdc96f3baeff46e85e8e3cc46e5f7c66891563c7aa689d95565a566a6ed86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=0efd56dbccdcf334e25b0ee6d9f12df5c4d02205ee12eb67d87fadbc78180964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=ca8cee9c9e427641fde073c246ba855c9c8591930f744bae6eb16554298afd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SSRXOW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsRk6E7I%2BXipmcp5zGrOQhX9znumcowrUJtJxmKNimaQIhAOOwQfHbI5I5%2BXnoUDYEn%2FUAcgsuLJSJgrnK88FXMrV%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDmP1MZlJBU3sBlDoq3AOaC4515kNYM4MfVnx%2B%2FJzBVHoANt5Mml6EP1%2BUkG%2FrcEfo2QmyI6F93JQ73KOtOE%2FXkcnDRDQ%2Fc1ekxsyNHabPx51GlJ0Z3u0zXHcnj8R%2F7ZsqCJwLp5ydh%2B4KBvBXsyCP9SIeb%2BHEJ8kifdzMwsFLQYRYR82NK59HEmCa6Y9Cyr%2FcAsrLaR6fN4SC7IwPcNzkubmYttDpYQyntieqGaW2nAJMgqRh6gD7czLnQq1fjGNdP9A1BGQ4WccMlRPv8JWbU20PGq0EUPdQtlhmxWS6EZIaIUSkcSQ6xudJtNNE%2BCfcQLYXlNLttglGmKaHNVIZRmN%2F1ch%2BE28ZwmwPbomaxdoqUsx5akrWf8lg6I9s31L%2FfOZnNLUHR6%2Bcyx1yd%2FNhOKlJTMLclR9z3m5LULfEzJTWqcIZ%2FMBA1gvU8ccBC%2Bk1uvt6ZR93kWm0DfJ9MTkTcjPOaNHsqEp5PVSP34m01Eoc8GSmuPdZeJiESGzjeTPVNPG%2BAL%2FJH2J83nwD%2B6%2B0rc1Nc%2FIz%2FK3nMRN6oM8k9%2BDldiqF2g96gtjOrQ%2BebpkCawv1A4yU8lY2a4mz%2Fe3TMQBqbsXGm120JHNx7gGETWsnUiYcQVZd%2BVO2GAP9RzIF0mkskaFXyHYQ7DCB08LDBjqkAcbF8ZfxqQrxlUNzMIs0aWvt4SOk7gh%2BCB%2Fl83Ul8UB%2FheJsMF%2FFjLobcWIk5HXtLsVWW%2BiwUfqMAVRIsRvMABGTwZhmG9nO1unMnUq1HYIiE%2FvdvYI7pv8LmCJPcuG81GTct1ctZBZ9AkRJ18cBPYti%2BM14vi46YE4v%2BM0ORFArYtPx0onnixxFX3V1f8oO0B0Q5Vo4XEeph7aJmaW46QlftVRq&X-Amz-Signature=423061cda2f56cc559411ee8520d1daa19bea8a8b04e38da236172d11d1850ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
