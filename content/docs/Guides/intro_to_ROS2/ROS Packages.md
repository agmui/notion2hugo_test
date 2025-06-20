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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=74ca183d4cba54234ba8bdab84c815357d6f43903f91bac0a54b4bd034eea5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=4e7e208bd4b56a4b11003aa8ac873f854e497785e97dcc8fda1dff4200353596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=93852f966f09d19723c2c0aaf883a8ecc8f3933e6ac7b673b93a3f4f8f0e6695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=e3698ae2527c1c0508a18e8193f0d5cee83ec271c1fa7ec5444b1b25163fa63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=a8dce0167e380b4292e1dd52a08861112887d84d565489b790afdf6f48bb5f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=c0c514efdce907345fec008b46a3524ad5c887aec7bd0051186d9dac9230ae1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAHDLJD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnyI4UaUQbzrAhqYy0guaUPwd1xXrCKUEEVvzCVp%2BsNAiAeN91txMq%2F0W6QdrqQJmD5nlxz8I7osgOHfMvD0AqdvSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpgJrUsj7V4zu8otSKtwDwZQ04tTp3LQLuqlXljIHjf58VV%2BLouLbrU2qnzwpyBXr%2BTvkVo47%2BrMD8%2Bndmr9%2BSxrQuxvabXxnQWBmHMFeBiA3WEB9VANP5lxnAW%2FeoO0Lj3AsZFRSWZYvl8RFGhzAa%2Bb0DxyLcSVJS6Wn3Jfgm16T%2Fa8Z%2BOFWPoPLBkzvsFvAds6KwSBGhOdA%2FbaF%2FCOqtxyR4jL2rP3jJNXLtmCqT51eGDacUlwV0VRnK7mOWEBn48ynCI86qxji%2FvgAZgtR1bngLCrWxa8iR54LagfDFPSLwSqtt6NexPBQYTbsp5HTda%2F8hbAyfsX3pVf86w1AZMoZDpore%2FEi0u2EE6qkHBX21v8z0fNY4czwuMqIw9a50ICEREbkTSinSOAwdp9%2Bp6ykCGYchwfMCmK1alTRkVB0J0wyPtH%2BJhnxVxYW%2FITrDQm95HWyK8gPuf5YcT3ai65xXJk5lkCDNb%2FnJ07qJvjQoJOHVmOvTfHsfbRugr90UebnQO18jGNoYgkNxbnMW3ux7Epu5Hun5UHF%2FUn%2BmwYY%2FBoM0uTYZWF9edPI0sD4pyyCqFEYSOamG4bGAz0YKzCFBLYfccvZgZF4DCSCoVxT%2BApbqPZ7GoyKNLnaH5QdUbixYxcsvG%2FpDCswwfHUwgY6pgFyDNAoJOG1aN8ET8D9fR7EsXsuqBNMuRa4BhUzLKnajtg7fWAYjCzl7a%2F4oQsePiSp92VHblRvudL9h9PlnkdFScHG4BFjXy2%2Bj0K%2BRo%2BHjuImO0v5EqlnATd4TncY8jVnkLSO3ii0qyAvtXsllChe1EnENJntL3q%2FArElw%2Ffln%2FLOX5CM%2F6sT2Mbz%2B9LwMXQS7CSSMfyFplNmLG8zl8Pp2BRlUMlO&X-Amz-Signature=4f1c683dd3fd99f79d0897dbfcc14e95c6350012e418dfbb7dad7c61a4e69c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
