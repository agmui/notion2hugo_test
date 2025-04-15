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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=51902cc63f027f9d04601f5d824c5be6867513e304f5df2a3cbe5f6d61ff9609&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=b680e4d425e43ea9031bc874db8afd53a871b1dea162769df8a2b0ccf6647260&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=b067b8a44ce53a358c00434efbcb595cc660dc4fe5320364eb7c3dd9e1e22266&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=ee9b18f62238e56c4c15a9697579ad76cb882571a6ed42a0b1b1b8f22cb8f191&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=aaec572b033f3a0a604b29ea6712adf69a7b8e29279818b07e11e2e7ad03c864&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=5011de2829b036bd462308cffa96c8f6cebb50bc12b45a6da4ada935fbcc20c6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3BXNKO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjwii6ebhhHhj%2FwR%2BTYSMsCkIM%2FQ2uvhCNvzJY7SRbQIhANm8i1O2SAaNzD28Sa6m%2BbWIfQII25BmRMrxOhNb%2BlmIKv8DCC8QABoMNjM3NDIzMTgzODA1Igy8MCvLNTVvf7erHfYq3AMypIbooFXV3p5s73LwHkjCX7LhW%2FVIYQN7yomsZzy%2FmSP%2BtFvjJxjAYwxf9uXxvaQbvzMFHNunoIZAD2dGKEEbdvFWBXY4OPAEwjXsLtk8RRNwY90RZw%2Bf3EWWQxFlabWXJBcHgzieKYsNPUbANmsPLWBXDM6e6ZdKLQYL1KlW2%2BkA0ia4usOOaeSVtf5Qobg7TZBqh9sDrc80GKRUIKqi%2FnR2qkpug9f6kJIZeD38Uc2ZAFNZRRYsshfkETcMxtALtjrGxrVIwFcAlvsOaPJcLr89mxFIpzxV3DZJ7ojZ9fvAo8RU3hEWsup4K7oOm0W2yFybj%2Bm6zxgdEF0VYFMLFMcYKUcA3m%2BNg72HPf0%2B1Fxr%2FuBreJPwL%2FIKZzTyQtFnKx9MLmh5y8qxgFAY8tebmTA6daZUIOhmVokatvDZ6X063t2W7MiPWx45j03w9eqwbXsrJA2rYnT%2BfFx3D2sdhsGzum4l7ca21SxLcUy5vf7y4glQMHYBCeE75GJnBXf8SeYYP60NhtNxIcKSH6WnaR0t2hUiV5e78QJSGzx%2FrtzCtAhUmDetAIFbp7ibmn9MOArbuL3ITwWUn83eFGdIEs9wdVDVnxq6R%2FEVwQyjQ3Daa5PVHvCSz3%2BWCDDTwvm%2FBjqkAR%2B2%2Flkut0brb4oeCo%2BK1JVTNM1ZXCEjEGfTVKAvqWLBYd%2BhCKmpeaMlHfgkOtn8eQSC0Q13ssuml8q9aTsDHXX5P3iKyF8PCFe5Lnxz5PI%2BmuNABUu9yjvQZiWKIEVL7IaRpKi0naPPMbWvbiRWiQZJCrFaCHb2nTe%2BC4zYueGnvKmplhyh5BRZNLgPQfKc7ryGollF55ztGoYkcPbw79SUTKgE&X-Amz-Signature=31230ca14eb1a7b95ecc7e42463ea5873bfb71fa86956391921998d5479e18f2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
