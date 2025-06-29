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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=5771b057b0e505c6d1b940aeaeb97c9754f8a0e546d0e650314a43ed6152054f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=11fbefe7b453ddd525c3433cc4a1d93eda7694ea2e6e6b01babea3802a14a26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=adfe40b73c7da071a4714da097b80ddc4b276e806ae2dc780e110cad2c5a7703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=a2abd24e2361727da1d35b51593a4c264d2a38e26c9a17121a44bb23c4ca88f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=b2892a00875327cde641f8217ab2ce0c16c6d2d13cab9b748264a0fbca0abc7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=9443ab19ecac0c1467ffdd480e8e2002bc6cd0a453c9158c31e3593612acc983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2HI2I7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAT8VlkdTUxMnRhye2%2F05QfdYQ3B1Xy9%2FevuuxqSe3HIAiB%2FWcdmDWDh%2BoBP49Qro36FXppxSvfmvmYY6xntAyA7BiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMnbz1e8SZ0fNjsI4KtwDPUA8i2om5GLK3aqmGJ0hOfhULVXQAcT1k9fb2ONHnZJ8ueamIqu0iIg561wNu2v7bNNsXnp9l167wKIa%2FKEq4AjVDSoPV5XiddMe7nAAu76nxY2B3B4WVG%2BpxcoB0jgtmagMT%2B4Sf2ErutNQJ3UXwEaPqm4SUCcCD1EDIGVVidMUxL8dKREHlbfFvWkDFqC3vMICcxtpDEymHWEMhkBTFw8JC%2FVgctRGqE06VkKIaGDF6vZPiV54DjEH9qDZqjlkCOX%2ByRYu46SsNUs7o0wNgrM8EMpAF1WFv3FmH3EOE3eF6LajFIi5%2BHRdhlw9psFZhUvVZmhGzVv8EUP0OlMxWW0gUFdcv9oU4GKxMFkYCIPEW%2FaIfsUcdk%2BAIqxto5lYC6%2Bl%2FAcVrFYmNiAtB21QcttBLtWqWEdaoM4nvKzwlEeue9Fx%2FV%2BM6h8HM1bnADJld2fLZyLYHmlD86WSdFssMvlWn1M1f4k0nzgbvxa3yn0E%2BNKVzRQaUBmb3BYTMTQ802mVLc%2B5CHgqw7SECFE4rC84z2NiWcxnXhkdIonsen76Gv56QJsrVnHTdVwM79mIoI9k%2BktW52TYakH%2FDsnQqatV4g0pFLhjDmzqapzvU%2FpbQf1mXpY3ByA8xr4ws7uEwwY6pgG5z%2FHV8y2s1oYHjtBaYZvpUHSet9ZNQeoHJhoPc6PVSR5nHK%2FwMgSGKdgusQcWNalSDFEDLnYJBgASpeM4I2jJV885iIM8kDsyTBZVkV3TFwYX83cV2UEgVdrgMX97lDFSbVjwCYrLmcAurKlYHjxJBnfdDBPp53iyRPphf7zvCQK9GZ9HeVa4RcQqrZepHdzo6tpmHvi2UEKxW8s0%2BwRMrr1Ct8Rm&X-Amz-Signature=41de571ebf33b800a15fa210444fcbb562f068e7c91868945e8fed686f1aaa74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
