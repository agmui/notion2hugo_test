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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=2e4089f5efc62ac30011a9c4e4d345e68c5eefa4bfd1bb47ffc998e7a02d6772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=1158213750e445f00dee9518f1f1d41880af21b8ea6f84737bfd3774c39b78d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=18e36901990b44aba05d8dd2a7d5495cf59402514d254dee59dee1d7722b9922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=2ba9a9c3f63491eab6273e439a17497e331d7257a8c79bcc1d125bdd71d2ae1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=77f6f5ab95051b0c124d6a6d2e0e7f06723852ebbc1112723227f448fee43f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=3d1e2328e4cae36ffe3b222479bfccfc7ce079ec240448317d6d165dddd5c376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7UW67QP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGtcmVRYHcRCoA2py25cSt4YIV2P7gxcJGQhylA7%2FzigAiEA7dwsoVDiaJPbtbndq455u0vOlorLaXug3NnLFNWs7Y0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBeHngiipz1S8HaiyrcA453AB5nZAkagYeSfyEvK29BKTfswRCB6kiQXiF73kKd5xxqgrE4vRqruSYWKqIz2oqbQSiBNbEptne7E3j5dZAQ5idVA%2Bl6DrKWP1K288iVoflySaQh%2FmDWJXA2uv0YZmkylTNnev%2BPB8W77MN105F5VjsJcrNwcc5eY%2Frlwqb1wb6GyG%2Bf0jx9F54Wft6ozVpJkGlhuD399ZO81k8Nj7HPNiJ9KbG9q76jX3Nw9%2FldaktCUY5%2FGwsyZv826f8DJPaT%2BSMVx9%2Bmmp%2B2%2BUKV%2BVhCfFLCho3A0PcIWGGSpqPtHJJD6XGYQr9YcGqTnrgFU0%2FXKTkOAB5UwRiu8V9fah6U98aSAtiHDNo%2F6yn%2Ff1%2BFrWAVCKcrDdTBltQ%2FcRTN%2B2kzqFQ%2FDvMMmK9zQ%2BiiSeEAAO52LBZhs21IOcKU9Hg1WRSId5segBveVMicI%2BRS9pGhmK%2BgkaYZDlUEXDmpq5Gh%2BjiVhZsPYVUHXMex7F9s6iQ4iQg3PIJvlrdnNxzcTEXGVEwaxhC8eN7JSSaEofou0jE26sAsWx1%2BacXSJ0McM9COtRewWPt993ZM53FhncuigTozr257bY7G0eBKqgYLJAzFHaGibB3%2BJDhkihKcT9RtEAgv%2BlhxzxmDMLKTm8QGOqUB52nCldCq9%2F%2FUm6Pn4ahySoPgzNr1xF4dAhuf%2BR%2FAlYeC5Lc3ou4n%2FpwWn%2FxM6Gb75r%2BkGrTuWy5oJ5mwWIpmrzUF8%2FyWk3ORYkswtJIsPAQehMrIX0ll6uoRPcDcF287RMS3D7TnzXLLLzxjmJkVxBrTkR7r%2BneKW%2FhjqUaVXkUGRMuDb0NNTq2l6IgbJHv02ERCuBa7GPfUgbp6gNz81VOIBwxv&X-Amz-Signature=6ef3918ffa0d848d4cd0a4243976ae49cfcd2c2e3cee20af9fb2b5fdc3b6d510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
