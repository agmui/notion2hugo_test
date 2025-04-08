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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=de3c9812de070464d7bea6d0a0bc448163c7b277c6828d032efbe6a7cde2daeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=8632fdfcaa4e9e6580d180eac3c890beedebdf665f6b476da3543e769aa8b299&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=52d84b20e38baa365d5f1d4b96a669271fa26d786b30747906c6ed12e2a3062a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=41be92f87fd314bee9c9673805190aa2074572b69befc31471bb7e33688ac0ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=1df59f4010301b9b2aa950ca9542a1b978477456950cde7b3e41b1fe2619f479&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=fafeda70c389e68605c6dfaa8d1f14d3a28f66ebfee072b8afe09b156a465730&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRULVPGO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDtI59HaGFPnwTi3xa0kQqW%2BmLqz3vmC4Wzsq040rRsaAIhAMTR5gCHRD5SH8KnSEAQtLJC18%2BZlSQGZs1dwUdPd9aCKv8DCH8QABoMNjM3NDIzMTgzODA1IgzDsJjMh7%2FCtu78bBIq3ANWctvyLYNffByyB25tkQ1AiUASlJ1vPL7Mdou0p8Dh8BDK4PZYuIJsuOPuQMCPHuQBRQ9c%2BJfpOKNeY3ZmHd6h2A91t5MIqeoGxwTcolVv%2BZaoYurUJX58hIiet0c1hMwv8dUx6kTZPFiW1acsmv7xb%2BLBrg6ennuIKYmV9ZdpPlOswqRF5GmGXXAvWdRCDJ71%2B3z28ZNnqjp5sBHXnnx63OyhvfD6aSmxLalz5N7f0QZDZ13mOMuRRWvvL6s2omZchMo622KmxOU1alRLGQjPuhw%2Fu%2FUb1gtnysuaF%2FntRlibemAXsbgXHPC1gCFtsH9kV4FIzLRLD6ww8ttX6Tjfm0%2BiK0LUZUR0pjPGpGi%2BNIeJsIaVuO%2BX0aytr8SkdHwMaY3ZE1on364HBL%2B7B9KyWziB8Enm6kANezoLbB6DqnBVdtPciYkyET1kUK0SmGPHP64HgZ0rSV10uh%2F0Hgb7Ld5nYLSWPUvCIy5jbb2y3glDoFMU8ikl%2B4vId8UW79%2B0KneN8Ob1W0IcYClgPCOD1IfRY6sJaCzrwbCH%2F6RrapZfia%2Bplfe5R8aI0%2Fl2U%2BIjy4%2BR%2BmOVNtxDRdaP7m6k5pvmXcYnuWY8T5yGAfpg%2B%2F4sZMJpqlrlNcUBtzDbqda%2FBjqkAajVVDq48%2F4A%2BrjsdhgUYYoeIfMKY3hdBGJCWGJdd2NSLyrMvcKL50EUiCPH0rMry%2BFE3xPTNU4YK1pT1Ohtu4isBuyol9BAUfgZUo15Ct4KRamy4d1vs1M9GcKOGkkq66vijZLEDOKZJAd%2B%2BK7tjDAOgLfqYhVoaKnT%2BC4Cf%2BTrJvv%2BhnBcP9IVkyIwWtgLGbu4%2FEvGkFfRf0%2F2oPwujrHT7%2Fj2&X-Amz-Signature=72ac3972e74096f017007ee54c29afeb776f5080358ea4a82c56a6959429b877&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
