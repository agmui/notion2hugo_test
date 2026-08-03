---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=477c503efacae42401a4cb1dc322b2efd6d4f2a4f84ca985e5c13b587d730bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=88e965846c7486fe06c6122664e1b45ac921e3fd6b5bc2e71c6a9b80d600df96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=5a759328f076fafa43f2185c390a0df844a199a1dff42c40c0b6ba259020ce33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=ed01cbd365a8eabd9aaa93c2ee00f9cb038b90d791ebfc677f48f3198f5b5d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=a5bcff2779d86df02f2f3751dd832e5991d3edf4a1db1cac989342f344406fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=a680558f5dc21e051274822f9ec063b6f04fcd5be8b5dac181b6b70eec9c3db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIWY4AZ6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFCGvMrtrmOANlG6htmhGFyHbGtBR1DakA48rK%2BoNh8YAiB10VSKl%2F4YfuzFEMKCCIFpIteqwCx06vbRvXng2mhdlCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lZVwHMC8VtnwBv%2BKtwDwyDn17ZF42MlpvabxtuU%2Fb3It8Ydh%2Bb8v98xLBMwiBRTSA8k%2B1OY3Tcc%2BvRnMq8qB9Dq7NTwc5uu9pFQZ3z5OmahZCFPoV8HRC4mb9jVJif8CVnLryhsfO39HKipP2AZW7%2BVkiT2LHxrNDEkmAOGwD9bOLIp6nCHtVByp8QxQbAyQ2pX7GZzucIVXB6TDbncWwGQhmsgSMHcN2QXi37EsqGvxkVvLpkTMHqww3w%2B6u1CsLEQcyarfiRGELkqIYxcnBmw2MFCXEU06RIg6CD%2FjIUad9ABWTJDHbg7KW2yVRCCLG8pRVoxgU5N5kZeLRp6ZDnkpGnMzfcjgk1RMvjFiJnHAs9aI2bamk%2FjuHGy%2BeZXK4EWRarxAr%2BTS1tdbrk2WKcpy8M%2BdXef2nyw%2BS6LJHF%2Bjg%2B7MfagI4TfKJZBl7vDNXtCAc1cchB2IHENyEs2DZ4S6xTkFDqFeMc2CUcOEIZVgTFDJqHeQF%2BVOoIKr2SxftSmSzsVBnHM6q4xRwQkQjOlaYfrOs6ONlRsDOU4HB923XELD%2BaoxdFPR%2BqjJYxH9fknij%2FZElhKFuBwKVGeH%2BLG5%2BBVCxj69fKIu2Nn9Xm6F9QwR6xxQ01DR8cEsP4EKmu9YQ3k3KPbgkQwgOS%2F0wY6pgGYNu1fFS%2BD4IG4xz7xMDCacK6wg55IAuxcZZs0Esocdo%2Bx8GId061XNRXpWuSByKXCHKz17rYRWb%2BGCpice4eMsRxTuLS7CQRJMzy4nbOrvsbmZGurDYWfjDkV%2FhHSaX9gy5bJkISR%2ByWkLxOSzPB7QqREBCORx7oQSEL0EkbEojP9%2B1gi2dQaonDBiInk1DX3eTOXuSIbiSIPBIAE5crE%2FLgkB7N7&X-Amz-Signature=0aaa56022171c94708ca0c34e4250953016d177ffec8cd1fed568db333d4f79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
