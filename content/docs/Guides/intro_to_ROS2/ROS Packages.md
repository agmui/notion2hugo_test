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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=128cf2e17f8842e47ee83599831ce348d6a0c9bd69ff741c8d283bae37857209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=602c23dd006c0595b896565a8237fbdd53d8cbe1d552661c119311c114cdaa98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=71999f7eccb8fa4c304640486b515e8e2aa2bc4c5a0629be128553735b2163ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=27434f55367def7129bce0a4f5c250fdc1ac0bbc59827b59789239a93d206236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=40e7aed37b3a0f1acad3b8d2c856196c1d93d76a650fed634f6a4aa8ba6d3b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=ded11374bfec4a2ab1e6264b60f3dae2b58dc5e65d05d900ed8df57e2a56d2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNATUBH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7xsUdzvU%2BXFLJIa7zTvWsIJsxZU71PeOhtG4FxmwMwIgV%2BcG6UlR17ShsWjY3qNnhzH98S8VC5XcHlc2hZE08WQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdJV%2Ftg8yPjPQUX9SrcA6EvBD0gPg%2BY3Vs1KJwRMaMcv71o%2FJKj1HQb2zLM6lMoyrPM%2BFNNZUi5iLGfdOJVXv50DADG%2FOMiiwMk3JnSAacxoYoONCV4cTcwgVmkV155QIo5II2o6HH%2Bmdtq2uMRcYf30Sx9R1RhvKg3F4vU2h6un0HCInDOW13y0uanINc3FZYHSCyZWl7%2BqGMQ9RnQ2MKeY%2FjlcGhfmTXEOjvYBt6edbxvjorQlfvE81oTWHc1VCOtquGvT4yGS%2Ft5ZjLyBTyIhmnVtwd3A0dERj4wSXr7y1HUttLeS8Pk5ZH0FEugWXAw09dYgof2oglrUp2wcQ4fC14nNUYst4WuDXWsf6lMwXQGAP2%2BUgc7CExNuL2ZfpQJ3H0VcAkmCMzaRA0uc2HxvSYn4wKZ8JrRgT3IqQL6vG0iGsdU45nrCfFJKNBa8LUMpEE0p5Qgl7NoGpKquIPr1eACWguIiiT6OqbeZmGCDa06QI3oZ1zu971XBBgTKdOixt7%2B3SiMNdaOW%2FsD%2B7Sb2yLLEGarbB2NiPXZSI0LB6VtBs88V1NGDoK0JmHThQCNUuVwwaOqEIKYleKG9cAYDCDaZVZEIjhit0%2FbJdUbvzly%2BqumtpTGt2fJE%2BDPT2yW%2BifQbj2gpFbEMOm6lMMGOqUBvmVG8HJaiZFrbW%2Be1Z2GG7BHkHvjnrGYRZCPlEAJdgg9jxQfCW743GyxTvx6LZNEceVXYkroTCrbDikS4vugxjpsxHCkfAj1T8zw3rPjhw5adv1s1bD1FAQrbmOaLK125vWt3gQuTntN2sQKM92K3dQfapCtrNSgAXaVQ8DefL1ZnME9SVhKR9N%2FNJwCQ8VSPUgVsVHVCqFZMoHNGOpLQ%2F7NtNAR&X-Amz-Signature=41388026acf310873c1366cad1825337a61db43d17a6c0c8fae39a501b989854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
