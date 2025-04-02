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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=844becf13f472ccd5d4f9c1e5d7219363574731e19f27fd2814c55183f75339a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=16325ad484e2242c4be8e855d5a282c99cbb58bb0b53d1137e3c32fdb4cf2fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=7b4e250ffaecec7c82730bbfe2beba088a54e5ea992bbed6b3f1dda3697bdb2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=9976943e88a3a5a1a7a6fad78dd0ac643c79b7932e6ffe100d00c4aad9843ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=98be329ca88a30a7f9883956e057123a3e6183f6e0771146eb8a22e3ec041c38&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=84b525d1c3d87538f8ee83dcdb85c1d007d3707f8353f3e4d5d6b432cbd40ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPNERMZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCGHfYnlItEZ9SvLSiVp99LJAoSHWHYbnXxY3qVtkPwpwIhAMvNA3rXTRQ93AugTHpZdTHWdaW6qsIqp%2BKqDaarVsK%2BKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRyzOKSor6pi23Jcoq3APdY2De%2FxTFLiX8ui4paExW8RGkVc4qp6P8XNwY88ImniJ%2FSFV7xiu%2FbtlbCZl%2B8JKLtEscfJMGWSe2GK98qp1ul0GaOL%2FBcLYfSZ1bg7jAIOSvLNwzP2WBdPTN9CjzmTg4huYkp30xA%2FrvC40wchvbVlwMX6m08hMCvJBy9qJNDtyS8T%2BmiSz%2BIFKSyVR6mRD%2FIKSTwpxJWK60u3VTKmqXOViuITypnOnDoJcmr1FEbXZmwK%2FIC%2F0V5E8Aqh4zCfgPSsM0ItBFEjWu9NKLzVKE%2B723ebpDxz7he%2FBdjbjUsqomAzotEOU3YIE8acOvVRkCPXh5eVOT8uZehW8P4lNmo%2BGnARj8dk5jarUr1lAgpCTqJmCDAJR%2BIRhM1IkJqcI9CPd3uFLCp0HSteTw2c3GfyhBpbaU%2FGue51vDTi%2FLe3xv9hrtQTyiqGYsUBbQ25PLnMUemfwFpng8qiuN3iPqE6KEMRAQ50EpOsidwoYzfmVhlRAaYwJp9lI2TOvYLR%2F0V8t2nr7p0nQuywinidzx5lDYv4mrxOnAOM81ISsJVmw8IanKoIoA0N2N6qlULxLy%2FZK8gwc8QpC1Ba8KWnvwfvJm%2FSeZvdS%2F2Pfk2e%2FnWflbhg5lq3MTpK3boTCd4LS%2FBjqkAdIgJDihb%2BzVMpnHrh%2BM3czvn5HS%2FDcNQgYjnK3O6EQZhmTvRUXPMNxFScNy9VgunuBu4upYXkO7fI77t%2BPWRlUHcKtQ25DqmiYFNCTucYb3iksclvIktqS7lskThhQEcDOyTAsa3aE%2BoweXVaW0plDQIkUwvgH09z0SdkYSEYyJ9m1gJ0eIeAKtTrujR5LZ4TI6FAotyKeRmE2BX13JifMTTOBs&X-Amz-Signature=32fd962b574b2806ad907cd59c8b3498d36e6d06925aa8f93b16aa494f291126&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
