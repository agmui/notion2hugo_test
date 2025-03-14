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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=9d6ea793bd3dc07b8613da642ba1895f7b80da869fae14f9d3736416be34b78b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=e83506a2d699bf4ae1578c06b4a2b3d796cb3372857bb42fd4c89bcffb35fd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=bd674d146fe4efcb9a6648be429f3581ba465a0357999153fa04742552ddd432&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=b2f1d67a137d2d79b5aa7851fb5532572c16aff47cfde36b70114478a23fbfb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=0a5c40f09cd64bb45d08a354d030c64479616f100a221ec1bc0a4b77fb548e51&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=ec1f4485f51c2c39613e2e9eb8de2d7a7d62a5d7be87285412df507dab719104&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A5B2KE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDePBOrj0Q6GVmLJqqF2oHDZEGpnrNVqS3BTJAC%2B3YAgIgJgvwFDLqG1KL%2Bo3T5PqaFS71VBm7jDQ1gmTJjYX3HYsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnTafxLhkJmlPCY4ircA%2F8fI4ABtE2x6FOwpMMDVGqzRcSCSH7WT%2B3iXJ%2B5PGMSvtjTd65ZYp9stvjhWywuDlZpEWotLhgNN4ldCYMbMTtISrvS2nMUw9wwD5aRmAMvymeye%2Bc8zvY5ty8Q%2F9VgoaDfLFUGuwU2io8w07iRKelOlYaSEaoUyNraAaBBpdZ%2BKwE33YugaQ%2BbfTCU8nrSC%2Bt8a1Mt0Neb5Ps15lHNSBHRS48x7pHRSNteFBSUg1XcH8TNVEvnTFYkMIgLtPLjEphyQDexc2b92VEXZa8616iXtYxabCUfsBxwV3BS5I4Xv992WdTMg6Rf7%2B7K782OOBWZACYAYTcqRrc29ACzd32MHUY3VnUmsXzm%2FGVLTig2x4SYOVgLg5LkaSe7vmSZxSK%2BolH2RmFFXsJUDVM8llUw8T6e1fmCtHdMXjEOpOZJQBPlpQ699hHtjzV3ne75tAdJ86NZdorRmlr0V4bGW3hkjTqwHdphwFF2ANskE08IetNLl9Fv%2BAvyslZ1dsgXr13Qe5jmjj75LIDyZjOE1tQN%2BBGnLDnfq6s24f8AD172OpgMmI7jQOseLVjN1Z1yvJAJmMcze4uDfMZ2%2FbkIgRjSMJcE24k8X%2BAr1uwCC0bFKrDJo1e0G5U%2FQXlLMKO50L4GOqUBTDBfZbPV3gZkZ%2FYPlsCyCfcmcmu6u%2FtHmnrj6sN3YHnNx9W8MuzwFQanOkMHmnHgIN8FaTT7vYKKdFezyNkXhjxJJBAjLUiuxWxavVcrMTyfr0pNwkq5R7QbH5bC2spQHvHNT%2Be7u6%2FmoCgcPCWep75F97AwrjUtD3WsCi5DHIGxX96fLR6vvI%2B6gSMUzGyzr8TaC6SpbeLbMBxb8chQ1cMR0j7T&X-Amz-Signature=98c28426974e59b5665c1f449ad11dcbfe2bcc40212c6a40f7c708f0fa2688ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
