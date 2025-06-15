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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=8e5757c3e3613714eb83e64bca404d7a2fed4255a1774d02aa1ba057da09403a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=e18ffa75a6940d6d0a31d0db2b11f025a28bba432cbdc6c8e102115b73e32317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=e9cde398815cf878fc992713dd1895e2ead6140ed9f3aeff2e0d1f8389da23cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=b8bd0601c47c0eeffe64f26da06af7007c6bd8b14028cb6b510ebb31234a901e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=e296bb214082eb1a2c8059ee80bbda876a34db4c2e836660c41498091133e8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=3f2801ab7920c0c5b9d1391c6a1ec97b61af082d2dcc2d845c916e9119c4b335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WCYWSBO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEslAXaQWXXhZRlXSu59tIxYaJGicAt1b38TYMrtpfPhAiEA8FqHxrZUwvxYPvBzX5DkpbhU6uBVNku3LGxhBhrMPKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJOJuF2F9Q6tpdBFYyrcAzOeiz%2BOjAifYx6ep3S9WilNUK3LUiMZADMyuiu1%2BOfbWPVPAAqLwsa2aDVYzHTqbt9H74e%2Fb4v%2FSAEJf6V%2Bs2EEEuREG9Pk%2FpyONpLt71C4bKkpY%2FYIspBmYj8%2BwCYMHt%2F5BL5BGHQQ7Qm4u1t3dXEgcWYxfeY4DPy%2BL%2F2pCP8mNtwZdh%2BHmwx3EdSEqxO3dmnLtlc%2BIOV1xUqWVa5swU%2BqO2UewU51RgsKTtabTJIEc%2BquaPnQAcJOPV2nmWpaBtnmxhD9chxqDpMUqbwHuPS0RfKJZ3y%2FMTzuBhc7JGcSOrgaqOKdKXCa8ecAQQfY%2B392KoDrh1TT9JvCc0OYeUQIKKxODFiNXM6KuUGcEV9AA47W7sSvWSCdjYiZBfrNxVCq74rmShPdqx5ALKA1XQPG9SMZIhxgVTfKenYrorKwUXmH6Gze1JDpBjiuSjMcEAeUwhaT1Hz5HfGUXddK7720xfLRfTFB943R%2FGOE3tHO55STCOYC3k1tHRYXTpRma6m9a%2BBVCSmFlfuqE%2BzVTvPdTO2ClKiv7uYhSUn9C4Ks2ZFgjUA07VXfLRS%2FxEuT%2BhjFIV0DjBTeBu3vQxl2VAiGJJGxtSUfLP4Uol29AJBN0AodaBdTeGZCsp7ZMOeEusIGOqUBpKLzCdeCZqhCKqCiZ%2BlWIp80ENQKyaOxYZsf7dMCHRM797b3DR%2FXYYynTkYD8TDTF2VvlDY9AQo45W0Ov%2FUpFdg3xfnjvX6%2Byfk8%2FmwxeactbDKtj9xjV6MumzBgFL1gVcYM9qL1Pu1nm94uHl38Mcm3NbgEq6mgOmTts4G4U9TIfUUpdlxlRWXuyQkF3iwiPdxVqca8lRbBF0juoAvH5Pa2pBG2&X-Amz-Signature=85846748b948658bfec4470f890b5e023d2c48dd07038b9dfd2776daae07b1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
