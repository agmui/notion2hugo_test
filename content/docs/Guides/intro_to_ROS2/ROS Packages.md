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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=8302b284d22c603f2bca41e3ae8e10bea676a684853aab59c16cced2f6320a68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=15d084a90fc87adaf6408175fafdfbeeddf7eaf1da91f6aefe24ee8cf76f83a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=0fbd633703a1871770f3619085bd464bf78e7030ea72e5963efa1ffe772d25eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=0e76a51fc07e0fc65e89e8e4eb1fa25b91f9cd8747ea65e2aca76cbcc8a1d602&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=9bb05ed7aef833134f0463561133ec63db5f7f0d75606dbcb85a2f88cf65944b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=c774ea020650e0108573ddfdd4c984e0154158e06358e57f84d3d18ea438bad5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624QI5VHN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeKCxjEE%2FfVwNwUN0R0gYMT06XBXxYQ5sBhAUlaZABfAiEA09WauO7Mk3NEixrJ6QsMpTrOc9TF9ytDP3jLQBXtsx0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA83ccuyZfXh87XAZyrcA3LUbfJKGATmt2Ne93%2B1v7BqwHiPgeRGRSl9PAKyJeUw9udo7GfBRdU16cEdw88w7SwhqoTAfSqAyovheeKpCQMLM0w73CdwRfy%2FmhJg20r3Tru9NCXcnD2F%2Bf3FasDPp98vdT%2FMXIbvvBlA%2BB%2Fa33vlSJa5A5qpBepMYaJmV1ObroSdQOxi%2B%2BIpAoqbmArrtIyIXBiexKPKDDSIoCNGyfwDA8bMyb%2FAUxbZgeA7z5Wn9YZeuc65Ql2Zx46gGARsB6zTfiwRT70ApaZaRKxetFRLDp%2FWLy18ykdt71BKLM4uGUM%2Fp5cL9dEDgksUvu%2Fh6FqeQYahSBBNvkl7MwuHcxD%2FRAUZZsAzgFRf0cSFuifaVhqimZdsjdfM5dY94y2GX%2F28FMMaWUV%2BvdEFzJMOwaS8Ux0eJY2BcZ5U8rbGpheRbrmcki%2BKgkAGpgmodvJEypXRNWALidHGVujY%2Bb5GwYWoRnFB046Toj6wBYS64UUBOr%2Bif3YzGBboKeCa5tKxiCCNqNgawD782mXMq4IDNc6R7icUGMq0%2BMLZfTFGaC9JeNQMPajPuiYKPbniVrOAIyORuDnVvGfU4IwD22Wpq6FQV3uNZ8gw1bDMzG0J2yXypeMkt1LTOeLa%2BOqUML7Z470GOqUBQYdlSlLyAyTJDWsx5P8XG14nDAU7ffc3zqKA74xE%2BFTAczwn8sPZXfzCMKMRigTbmyuBFuWTHHzSMlDmZRlQFKVautmk6mVoMLF5FWTAY4iaJwES8IogB8jPMfIf5kxZ3HZxzDHCLAbNw4jtr5WX0TU7mDumyHFb9WQlQOPl9hh0SoQ1hVF1AKcZ06w1ccresD9xVW2sptkeViXMy7FUh37b%2BPgd&X-Amz-Signature=7fda4db67afe5c3afeb37a736f58be3fc29bac73826b568e12fa0b9d716b1dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
