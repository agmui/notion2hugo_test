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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=8ec189fa7fc002b7fac9f68139b629bb8834720ff0cf5d4c5ee8b5511de5fc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=2324eb219febab4f243ef6a45bd867b0955f45f04889a14470250d4e7c3fcdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=9dd6f629c0b739e4aaff28e2a0905cb10415582526a8a847c4694ca83dc32e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=6058553e6c68f8aa3f0c6817374f78548d775a5f559d83a0bd9dbfdfeb8a6533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=a13bf8746a7f3d6dabe372419bcea1bcefd5a737155d69667bb5a8645a3b3e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=e6dd929b5a9154f3c764007e9e71485f6fb5568f0ae22d8ea363d137f9185603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=5dd413e7d5199212b93817f59b88e0451a5791737f54797ed456a0df90eeca79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
