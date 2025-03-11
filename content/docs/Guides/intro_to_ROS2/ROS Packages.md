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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=d764d8f214ae3388c49e03663b3b79323e076f82b62ca1e9f119025a9c55a512&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=47cf4ffe266839a20af06d3ff6c4b5c6faea56fa998b64ac78a0258d4cc18f19&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=b421d4afa5c6af2486035a656a4422c995b0de5076a25b865087506244e9bc66&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=a40bbc83e3e5368b20f8f42663178b3b36decf98ff46ca11ed474aaab586d6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=8d72771493a9f4f2da9f30ad3e23d690687539609657086259b53f80e16baf96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=241f469d63dc40481f4aba0d4e628db637ceeb6085594c69050af52277574a03&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX7MAPVS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAOQBodlctGX1CUMEiDLhKbuz48vP9tAYnve7r3LFIpWAiEAk59sRL3E76bDpw5Rb8GF9A%2B7TijCd%2FVs5Kq9kVrOtOcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQLLSSGrVbeiFGuASrcA8PXliF8xfFWPclJ2A0%2FthFgxU53fTKsdi3gIGtFglZy6Ga0CbMXy7j%2BsqgxcuKiG5fIxk8TqviHPKZyRMg41MXO3uEgEbDoNdS1DNbRGsUZZNDrF8IWxCi8NNOmIwydLuWJO7SVoDR%2BUWWfE6N2ovuXfeGkUZFYcNya%2Bzk3RFrHPfX%2B451U6ruJTaGSa2A3307ThlK6P%2Fj%2FBNZXj0my51z%2FVH19QjoiS%2BuKkzQSRQvIo6ihzQBMzjTHZn5sfV1%2FXA5fCCK2ox2rf%2B1j3q7TuwcTTWEB0UzLNijXckFFGRlcMq0k7Cdu5wu0Y9ApIGb%2BNBoevC6XasThOO9y8PArl4Cc1jGfCybu8L9sr8k5SKbVDIPzLQjClqv0ccPjQEt5Rt%2FQfcaRLwvUE4GnhjDpLXR0dMX1MH8PIq3tBBHNzVJzUV7xERTvrR5ZQAu8xIzIg1Q%2FwGLLZFiYuBdrkOCLsy1IibmQ2mR4PCLJem0xYCfEHNYVrN%2Fg3j%2FSZtCQNOuHUCTlVBXq2O83pNDHjZTtrLi0FlCnRO4y%2Fy6fEHEDe3CBsUhL6DVrWnNtYTBaHYIpLrkbO%2Fg8eBn7mOwq%2BVyhk37AWxiFJ4gBhkgiizIY0pDudJNVTndBuEnL8L6nMPDRwr4GOqUBHHhQmET%2F10H1wx%2BAnozX6O%2BbhQbIzFMEtrlXDtJ2kSUw15TQbEbP%2FMwPRIVwsmWZK%2BQ7M4ZwGOuNN6E6a6EgGDkwswZadKYW8Tk%2FuNvMOwxBLwVWDc46TIUSxhqivkGQthVciJK8k255jb7NZz7xiHkvItS8Ss6jzgsh4w5H1mJV14PS78F5IsWF5ERit9QYv1VyIf83VyVyJAjhea1dtCOx%2BLSH&X-Amz-Signature=30489e878726aabf600c899922f68aff0706f84e1211974d5964e7b8e78edf6e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
