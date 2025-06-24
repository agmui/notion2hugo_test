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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=54d40c9144c24e3111db34c3554c4ebf88c717fe248028d38019c7acc905c784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=0531a6339b63c7dcae35f5bd55bd3c8d120d670a8231eca5c821775ea1276de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=11bd2fb2e5027975d2dd7000eddf9018398d1baca738d5cfb30b493a287e9d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=cafeb1fa79d70c9b666c01784ba52d2e33d19c92e8fa342df6d9e35f3fcdd34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=e13342990e7d47326aef0f2eb3728758d8bbd9d3e3b3fe12d34332e84be74886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=9b27846cd84178b1204d4c3523fdc33891fc496b6c5cf20cdd14e1784d14a7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64MAPJJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBXbtmeDW7BsAhTWYbHw1qm5daXXnoCnWfrhBFoYXrymAiAnVZFnWV46pTmbR5ZpwyZo2UuIkJiMxG1LMGg%2FaDms4Sr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6io4jA%2BJu9kTN9RKtwDSUuTlAKnXn62OVkJv%2BPXQI5flpBBFXC9pj8001zG45RVpDgoKk%2BHvmkkhAINmmT%2BkJchSt3H5uomDzYSnt8VAS79Ot3xkhmPmbBA%2Bf46m7VgNL6HhQvRPlGSs5LQ53GQrJFZOSIL3P75%2BQU4lCT4gLrWBil2w6oX3Ckdm%2FXHndbidMGecfcgNLWbISWS0ELeEOqB32UHfDFT20Kj69RWGmjWu0kt9A5Ek7hejC5SVTLfEOnOC%2BG4XAr2ubIhjJHFOFlROqbJZ9HY0djsRTHRDTd1gRqOotrzSVwqmN38iO4iiWijPZEMx33GmHbO3w1%2BDoItBmKP00cZlbvQkxoD0P4r60aKiqTddRAAuOlbQx%2BqLkXeh9ho2ZMXqmYIBJ%2BDTwLN5ZvxPruohWsX9UxKusv2q37yZH7tMkHCsdrKu2QCfxRvGZE3Z70L1k3Q%2BJsfSyotdkGxdspmjGHhYSRjhEjpoQ0%2FBEEZpZeH8XOPSJpfFWLn9V3h42%2BkyIZ0thM%2FIfeQNW2R5Kk%2FcYXbnv6FAfO3yQwxo0xlhoPModMCeLjVJw8sCEz7Igto8Cj1gfFjS1pGNmXl1eo4vvEQrGb59UTKgsdqXDbW8FL2L%2BLVtFQZOvICCnTm9v20CHYwtNzqwgY6pgEkl%2BuHuLOuUehLS6aAPQfK9ImOxUMOLwQCtMgGKE3TZqzAXnus1VGbJN57z3rrGIkYQ2cpS%2Fff2%2FYDT%2BxpvpiMpk4JTjgwt02mLAb0khCpM5sqdoIpFjwkS6tFa1zo1HYe1dcdV%2BguSMQaPJiaAjcdQsNDg11sReYq%2B5yzJ9scrkkX13O9HsZEFIRZQeI%2FMYWHeHWm1hsbRLEO%2FgxbK24msvk80L%2FA&X-Amz-Signature=9d1317ba92669c39e40dc46c2e6f04c5a3140e96bc4b48c7f01fb7b35f2cc631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
