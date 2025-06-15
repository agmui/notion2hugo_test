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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=b28b8c14cc210926d72e2a6362d6cd888742dc14fcb6f9b176f97f9cae78fddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=a05955981051f14bb5a9c58c6a474e1091226a4bdd576be08e581a070d92a06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=4b364be11b82c3dd344d92f618f5c55a0e5f1dc382a03eb2685c7ac0ed017def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=f71eabbf444f496685dc29397b350a46ec78fe5a8d77db21b7540ee780674aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=612b0fff981bffedb3f412d5c0337d10ad4c49a4ed337ffa3b162108051c4f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=6febadfc4252eca359d1f946411a729abce1d90e365c7a3af7237e541bfa3a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFKJAOE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEgw%2F2rrWWZ7Zl8zXwv61116GJ8d1YTKmQ0lnrAuDicXAiEAxLzGywVPMB1zR%2BYLvHiNdaAY41nojFQSHLqseBdXSoEq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKB354MyHFmDACNRqyrcA7b7FWjbzbFCq1Kp7ktD%2B44REyGXCzxaMYba0u5HU6A%2FmBVjW24kIJfbv6YJ5VsCrSknoSICItq5qnFWBj2AuvdW7YU2GxxxN8quirCxErnXUnqCrrROT797g%2FwZyMwy7LEjM5PJKOSYFh4f7pfrVJWtdI23WonxVI%2F3F5cTyphkz6oe9r0bhVRTApmEzA3vlKlTbHsBfYGY10%2BMqDb05R4aAQ0yS6FfHJyNhn0aSxSx17RemvDqoiTftT4mn%2FtGNZ4fiLSuV%2FqgLNhkyo0FYIoKkhAJLVLyim5Le2UE2gdthiEW12wJLVJ1%2BKGm6avLjmlTaAvi0%2Bzw4Omi%2FvceUnqJdjph6P4LlEWtyu%2FH02%2BeYc6yOq5585rhaVv5LfiFCIrFXLzp9voEgFPgPPhIkklHG233xWdlN7naqDvDtOBmTDlajl7h4poLOOVSxsiHxVEedhrl39XdcHFYiSFosSEWA%2FrdPaPsNObWUAwxgS08g%2FTtHwm20Ew55jzfJoIOW11EB3bUHFNOHQwG8mOT%2FIcYZSV%2BhtUBMWZiPWHK55V6Sj83DNeOgz%2FvfwxIlt%2FLx%2B6gHsqp08VZ%2BheoYkIo0%2BqGfjdPMsLudl%2FXmGsbBy7VkXxYDtDw2moC4LUvMK7PvMIGOqUB5Mf092S1pbTCQ3B5sc3aK6kUdJC1zEJei4c5RR7TB4BvfKPCiKBeEVaJni8npnQWWUtflQxhRBpoFg%2F7%2F7kKaXEOILiBc6%2Fi8dTC6OJGeqGckvuIKJ861Dgy%2FVrekKeYS9i%2FFfjpx058lXpvebNqttv47hPSI%2FvKsuErOc1ICCS%2FChd9d8Fml6PzoF4OoF7KoPhGUvqJ8R176c3rBjTa0vAJO5cN&X-Amz-Signature=d619b81628d03c70e920dbead3f3f08fca08be7d2f535852be0c1277722bd257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
