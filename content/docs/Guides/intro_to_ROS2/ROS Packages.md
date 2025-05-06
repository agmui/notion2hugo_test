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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=534c1505a680bfb6e0b9f8f6676f865cf7b419334813a69c9997962a21e61e23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=6f83d5e5c2650771168209e10c9ebb9552dbbe6c0c506bbe85d849f5fe952562&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=6dc1d78d2eab79b89dac6ed00a1def5bdf2016efbae81cbad25a8acff6d983c7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=5d8711961ccbf21cb7e60cd382bd1a605e4d53e51a62cfc9cac07ab320a2afe8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=f97d100ac073861683b062cec041f5e2e0de3cf9de3effcb5035111d7c4d570a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=36a96b707cc94909ba6e7a4a249203ec1947a28e06b2a49f6b638a85cb69bfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZ7DSSE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F6O1R04fHdkoTJAYp8lgfFrb0xrWc45H62%2Fi%2FjnCM5AIhAP3%2Bc0BjjJblm8P1%2BoFDHv70QyAAxinpZxA%2BEMtcoSiNKv8DCEMQABoMNjM3NDIzMTgzODA1IgxmuKqH36K0uPp18kAq3AMFZSyvQhVW4Ko%2BQqTqpMS3nTDyI9Gn8KwtVNPKiM6R%2FnI7iPzCW07lto05K%2BULi83UC9084CjLUjmOao%2BfV6it7ijcHDlklnGIjA%2FIVM2rzgB766ru56%2B%2BSnvuYkeuScJclkYDm0vsxiSrkFHoSNGD%2BKzMF7xAMaLP0AwFxddyoSXMll3ZdVgIQBNeyjHYiubNVoktYyYmcSBXUfvV%2FLUZVjHG%2F62qZ0UUJYBkIhKcqS7Bg48zPPpU75STr8MLEV686zKiFs%2FIvn2a6HP3PkpW6AzYW5K7rz%2FdJPONArCFzRQYTQ8v8W1dGKj9Hd6NV38JT0LKJE0lqN8ekmLFRSYZo3FfW1nQDM8ylDmFplX1PyCODgDqr7RXgd4KVOXY%2BBPriKGWx7kMIt2hNalPeRYt7TGV0ea7W9NYrfeM22p9GQZHdt4k65Bshtb%2B%2BXvxer7pmr%2FjYjZx9EuwuBybbtdnsz79qSIsegzhJK7TloHMAUX6XE5E%2BE%2FXs1YgRloWbdcAGL0kixeZOaL2IhWD%2Fn6KRZXe3S6nTnJDrqXQPMdeUI%2BNKHFIWxT3%2FxCKnzC06lgTziTCFNGpkKGDHALf3xdsjrZu3oyF317N11%2FNeL0cu0hzNfwEvMBMn%2Fj1HDC9wufABjqkASWreYSMwhWbm1x5GZ%2FiuHauuMf7DlTbd4FTAcdq6wsMciNO%2BFxnGshI8%2B85FSU8HqSFVnKiQ%2BWd%2F6QioFc13%2B2zC%2FEXRCkBXpJRXfmRJB3gQIp1ZPz2SLVBFdlpfrS4PcGD6ohLlju%2BnlEfSukm14CUbdI%2BPgmWavxOLYymo0mCdesK9FP%2B0cpGLXCoRHosiErHrlb33Hjz%2FO6hVMFJ1eLohxvU&X-Amz-Signature=c79c537063a0fd357b0d138e95ee960a3f3663f061bb0a8686df6962cb58dd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
