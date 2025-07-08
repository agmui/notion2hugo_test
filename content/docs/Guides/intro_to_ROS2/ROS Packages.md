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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=3381e5b1c6618a6a4f07938c98c8bdc098116435af0cddd9f9481e54b297f3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=ead9fd2d6a1445f0c020cf39234926b72a416e547a7a08234a0ffd5ee8bab514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=e57e75f6153dfe24a8f1707080337e9694147bae17a64fc87ea790c75dfe6d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=746db4fc194237bc907834ccdfde9e8fa050d93e2b76550ffd09724d1743e83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=51b5fff03e6d30abc9e409c48182f53183446c563d25c09ce48a9512f4cbf587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=2d32ac285c5c3ec04055ec64f3e475be62c4a4a330a43ef30a560f07cea09116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VJVTANN%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyxWqVM1m%2F8TEYEWzK0x7cMJBvl8e1nxfheXazGB506gIgfuO1icgAPxeS%2BMKG9LWncDaP1P%2B5QCypA%2Bzybcn9AL4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHpu1uYwookiBaSCrcAyEAIlgkqvapke%2BfeDFSEwGArfbU6TilxuNtIGsHjDThFEI4AlkOjJvi6yKQ4cg4ow20YxfP6PzBl%2BiUFkRO1TtsI1IsxvHv6TvLgQ4Vf1fDl0tUf1RFVmcGaR1%2B1zHrIcpTyOrtpFzBHwzjJ59z%2Fy1HxhRz1qcnXj%2FOsYB0%2FTKx00ZAGISRc0mDmvxiN2GN03nj580m%2FGxSPX41M70clNw2Ii0V0nvVZm8ur%2Bzlyxih5Y5Ek0%2FZl8V59JyIgbrEHZUggeAp2AqnzF7Muft9D8UlKw3lGsBiLgzUBNCG7szYh%2BoC7fRBnJpeeMuMxBkt6IczkKOXVuWThye3TEIBwmaGp1zpn5tMQi0z9hS3JOo7S3k0JnHnULqlSiL5w68cLAZLMHTnLkKyAUXN9WBTEo0R%2Bvdf1edd2Moo7J9%2BHkTkzI1LrK7VXNBfqKQ3d8shZyODoi9Ejd8VuiwS0VFrbrpLVcMbvydJyaw7VzTMNdSOA0EL4m0SSFqcrHGayggW0Jec4NGAxTfy1X8d2X47vifovsUiPovHXGEbL%2BdaIxCY2KjjF%2BAmF46cwOInq9bmi9dMr%2FP2%2F8ee6FVJHLPvIa6Zm0VUcwaOP4inn0j73D%2FLKwSzQzSYM0SUmsyhMNTTtMMGOqUBCDA90AETG8zUHdNO8hdzgtDJn90%2BZoEVG8iwTan8Ch1YY9%2Bbv8zM%2FKIWvEv0tJWUrM2VMf7DkdqHT3XDA8eG0p9Y0M1Z4VaXWpMTTv8w02YXR%2Bf0eXJYaEObfxtnlpyl8p7tXEL%2FXf8UwVfDEeajyiKJWnDEZ3WNpAJF8WSSIUkvH7BM5m2hEzGAHYy%2FSOC1GlPfUzUSffzLlKB868WxNAVx9igF&X-Amz-Signature=bb94d4201a2a04fce60a1ed4f69228ddc553bcb4cb43dc631fbb3dcd76c7763f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
