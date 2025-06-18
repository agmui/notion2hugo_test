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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=3ccfd25ce66c4c5885951b420dbf561ce6f17855305966d5334efd4fddaff2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=604d6ee22c42f8bc5871bbf090b40a5ba9ef76887b214d22514faecbd18cbf82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=4838e3b4edfbc324fafaf1c1772273276fdcadf1f3d83ed60cca7333171cc68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=5c31b5ddf23b1bd0288812e85cc17a34b0ae83a3bee3597ddf0a1c10a0b5a516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=75dafdf0bd3267a4e5eb5ec75db41da49f8e4c5a7c8446b5c6f04fe21c4769b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=c20495e00a9817ea9346b5dce856431901cf622474a1f83ac88aa4308626e815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URE4F2EB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0an8y6j6XShmC5yhE%2FyuOBuAd140q7UM%2Fr3AovQ%2BpwIgaeSsxJxStneOaLdtD%2Bc8%2FP73ZT8Q5TpMBL9TdQxDaEYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKSZxgD%2B6%2FC9dPFoCrcA5JjyrVdkq5IMxkbjtK3dRsWeydzEaNV5ScobOwBalO2aISlXuHDnyWqr7ObP8GPF2g5GXtqQsVMk18DW7%2FDTp6PHQ%2FEnshWeiz4VJIK9tvd1%2Bz6qfpX63UfSUuBQYfQD2TPf4fxnIEXnRynHFmFzKucLYWG6hIQjlh8LCU9BCwZQpG2VWYCAOAYshvWp4NvVHVrDdjiQkcLosTxfuW%2FxFW%2BI7vBwcxEAJMv%2BaBA5rEOV0meH2p4cjqpPrdjKx9CROUh%2F6KmV4WKTbObfZfE7GJXpEto%2FqYGHawW3Y9ohSTTGLsVlVfbRiZUK4jyINXImoDZBajgqM1fMgRYgt3lS1fz3j7ETYzK2zlHpDuWtETwYGNkKfq3b8Ko3MPyorKtyJL5s6uQqB0i%2FIbyFPQPRMW202XEIdRh5cjIl1fFq1B1L%2F7%2BV7FfSRrz5gx12l4nl36Uuut7N4Q7dn1GvV%2FxVDgtWp%2FoBHB1AghtjoCmdjAhaOJCfroJfT1jTICyfla9dCZCFcfiMIB%2BHvheoMZDfMWQ%2FN7a2V2UbLuHe6HKncz9%2FUp7GZVLGlc5Dkbh4WfcoWUjruiy28Je0rcVBKy0f1jiRdowgtnoof7qBdZm8MgvykaSBqEcpeOIzWwnMN77y8IGOqUBIhbP7QFaUz0Ub8Jt9FXbRGZNGhYabj13ipeHPh%2FTHJs%2Fmgqa2CL%2BY67szGGcjOlrltPZj4HC1Ntmcl3Clock6YXYvD9P7SGW3JdAmQ41atymw4%2FqAXMVcbBbC3C%2F3S3SE7zlBM0JdS1yybTVXZh4nRWAwlF%2FHCZDvN0Vpu0v1PZkLEHwYieHAv7IC%2F41dtH%2Bov5yRnmSTGhho6YkxvSFFKh%2BRsQz&X-Amz-Signature=cbadeb7ff1e5f385b6e33c7dd186811ba76c9af1027b8c3fc7e0eb29a388b172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
