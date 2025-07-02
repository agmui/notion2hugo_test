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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=fe41a5188ba6517eb8197edfd96a91b08f1405953eb5385493be462cd2f741eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=6cef526c9987546d0b9491f24757b5541a23cd7c1186d41d969313d906204db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=0da8f1faaefd12d0f01dba53a6de0743f1e7ae7cacacc029b208b02d9a199412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=cdfe0f0cf62eaccef86d9e6f361827ddd4b4ba6f906a003ff49cd3d129f6a968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=5971ba37d87bc9b71c57e2452692caa8bb142562d12df9a3ec43683ee7f4186a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=60f364f380627c6e4848278228971b8f566480bfb3bd11dc17d70036610c4102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X62OT23M%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMCbFLAHUVxivoeeVWYFB8JX3YGYwBjHyMDL7dVzVdlQIgRz1RQj5FxomdQSufZDLaExGyLcq6j8pKhabghJdQdPgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAlMPOwHnJgRA4u5%2FSrcA7BmSIWqCyyFidSe5SyQLR8eKskOiEwu7161hDYIp2mQSmrqnsoWUH1fZo8UN13ty6A8La5RSbq7SoAn4gg3HUPRtaMQZpDwOQ53UFiiLKox2kvnYrIpk1mgHcxSn8OKCDb9YC6Lp3If1xScsyaYV8WYV9rxMOyFQxbSGDu9rZfpAhIajenoaFUjBFgIp49ntGyBL0MWi%2F1LRVXdDYYKPhZDCL7CDZbzJX1SZVZJAG9ZdtE3IBOb0Xxnn7%2Bx5kT7DhvJnmyJnE4kRcgVccOxlmUjh0Ib3IKjrh5wQ67G4KICtTLO56G0BtMqzahpQaZn949QBI2e7CoY5X9uRREnJ3Wc6h2mSZEwcEe5WPFQIVcG60srZYgS6%2Bj%2BWDu%2F40IxB%2Bhgywur9T6ZOZGaA%2Bv4GdIX2GxZx68iUQGZJndxpDIdjSdV9TDnTa%2FnxwQyrnsIwknlIXUx3%2BDKysBiOkQ%2BY%2Bx3F8Rq5K28WhINzkGN0NslWZwICHbzzd0ZxbRz7m53PIF2M%2BwsolK6T31uS%2F0UxEKAdl8inhALz4bKvfMa%2BwXnEo3X0zhNJ68k01AWm%2F7cIG8flaChOhfRO9%2BL1Xls2BdXuAyoWQay7WB5UYqtK4Hq7vSllNTS5Qz5c9NBMM2TlMMGOqUBiCqOnLz4AhoH%2BIoWODXex34gEeoPM0SphDAR5yOc1LOGwbpdL3iCuF3EvESFtaRkOQhWkDafKlG0DDezTjOkiUdGrpBxa4k%2BqdhNx%2B3CvtRYPvKOM%2BLHbj88r6hC4aMlDwkZLxiHlV7x%2FVMdkenAuojb%2BHtkTyfoVJLxPifkbZDQIqqPl%2Bps3qz%2BjlhtwVa3Qck6rfWypg3TX3ZvtsQq3WQqPnBJ&X-Amz-Signature=eceafe69ccae4f94414b90129beead52908fb8a8dfdc1e24879f74ec396ea0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
