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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=ee2fd67710d23aab119ed7fa49da11f59e66979c8128288cf0f30231d653463b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=1f0d60f404243fa50716bab4509e4438de9efd23a8db45a07b2e795e39d8f8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=a69b24041e84713b9f5fdf082f1f2eb0267c9f730bbdf739e414b4132bb7be2a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=882dc25609f125762b8c84693784bb02cb3a57028a314a0fc775eb8f6eebd463&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=9229c109f3cb6b0f201e279b2af973054bbc233f9ea307c56b71e3bdef2b4422&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=080c9eb7af04cd7e7a19f3172716c1f5daeef34585bde6eb35b8b986627fe90a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TR24HWY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjIJA0Cu8Nwsx%2BY2qur4xvX%2BT1Jd%2BzHQrhNav1udr8yAiAz5tw3wvdDiAmBiCjelP9AgPKyqmm1Acu4Yvzflt8rZir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM8lOrSm%2F1AI9D1WwSKtwDEw9s%2F9%2FgKAfjubcUnwiSnY0X%2BL4JHLwNoluiklcBJ2DSQwUp%2BACKLcO8aASKiCmhKB%2FTry%2FsGhqEVE5lKLE2jHm0Jmfm1ptMe9jyy%2B%2FN4USPd5PHMSveezeHDdKzThcN8MCGZt87cnJy3v0f8nWKS0oPEyrK2AUm%2FoHzFyFUhdPflfmSfO6ddsgFNbRs4tjbowSDK3OxT0xn3Np8n6LmSsOrAzWlYkYeutfv%2BW6AechlKf8ghrTaeUDU%2FHyTex53BCFrTLBuuthQsg%2FiprdZtmLwi%2FWKFVo8cyoxvxs81iWaKqgU0sgXIB%2FUu02cCJSSfSvqSY2An4i1ZYAoh2Yy7xhx3xmyndLjSvuHayFSr1w5uJyc76o96PHncCpnhZy28jquan%2Br7pRsKOuErc6cBYlHAsbdd3XXHR0X4yqC9HbGOvBceSpUOZH%2F2sK0eR4TA0zcgF2CoOebIFkzZOtJVbq04iBJQ4vaeQhofri%2F9svBd5Mqt3dAsLHOkpJ%2FnZGJoqsQHtO%2FnILA%2BNnZYpPnpxmWju10nbaVb0nomBEh4k6sOzIkm2p9nBO2eWBm7e5aYy67tHB2Cn3uBV6tCwGsTimXGmd3H%2Fsj8YaUsQ%2FB5i8k0ZzAl3WAtkLguh0w1IeGwAY6pgGKgqBJCMRTAipA4KumNbCgLBr%2FoME3xIADIU0VLGaG0Z9Rx21Epe3QvChcrxN1Dd7pLjVyN0NJhLCA%2Folm3EE9wSo9LWLmM6LiHNK%2BqkqBj2QPh%2B2PaF9WGLzydia7PrjahfO4VFFsuykx79inbaUQLVYFh42%2FTd3fmd1SDJG1VZobhEjOhfYdam8HqZNSsAQ5DoVj0QhK4s96WWTcsH%2BPr8aLDgml&X-Amz-Signature=b7e60e5d2983db7013801f5586db8e2c2222477417f72a180adb9f248c91990e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
