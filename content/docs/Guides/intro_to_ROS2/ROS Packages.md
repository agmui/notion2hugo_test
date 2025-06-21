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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=7ef326819b5b5b98b14405bd942e9f8bb4530037c19e55d89cc91b857ff89417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=04144aaf0ee3c6a45aeff0b65f9365bd342232984169b0d5e565f1b30c8c0ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=c0abb1df0babd626db318b3d4809ce396255822920aaac360023e58fbbcce48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=4fd375b714d36c4af77a28625bc6d15241fa990da2b556cf5aa7e70148f25818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=073d0cab02eba5ea5a747e59a129e181f30527975d2808de0afd2c226dee9db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=4ce62ace1a2f8d1f254fca1dca9c68f78f3663ef66a2028db16eb8fecd730f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZDESOU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNFmldWZVb%2Fiqjyrd1S8ZKyWJuuNa%2FcF4MVXK5i6HnQIgbqX%2Fk4BkAn%2Fn4ElEjupA%2BYq2ngv8NNYt3%2BZ1Ov2VY44qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbb1oMlZicpgfyelSrcA6XIXMGx2apW1n45t3%2F9Kx%2BMvqkYDK159aLJYjrBQMn9Bko7ouehn%2FxZzpsxAUnBzoPiO18h0SybTTOSMT0wyYu%2BxBeVCOaNUClXH%2FSNiMF0bKtDAdiJgNblvrMpoc3xtXD5YhEpbLUGc%2FSLPn7I0jEblakzcQXDWlGQPsQMHR71kGGnweB3LUuDmNEA%2FPRb%2FC%2F6pPhp2FbYi%2BfNdIFF7jB85faeVe87i1PZp5HQUhhFU3F7IC3GeoUTQ%2FQQlHxDRcjSdU19ArkE5S37l8e9YLnBAFX2i%2B7OxsxhsSc2ul0D4%2BgTeNzISV14ZdlGBaZCivn0gPuGW4tWoMQQfXVoHKwsn3DmP%2BtZoaJCa3GQUE3b7JcXi9%2BCCh3Xmv5ela6jV5Mo87Rb2rVMGj4zhSM8wxuq%2FmfgeUFtUdu8%2FT67qusfB0Mqeq0mnBZ8z0hZ9pkBDSZSHoT%2FlRFW%2BhOMJzSTapd7pKq6HV%2FwJBxMLCxZJfQc8hRuVPrqVjiosgYwMprHSMDoXqtWCwaZP0dMhtN7pA6wBgu6BkVv7ZHdwplBaTDGnLLJkosUYHX%2BdEa%2FXF6EMKMCs4s6Xqv6Ge2u0%2F0JyP%2BxOD%2F8wmb6GtiWLGH%2FQlN2w6ABFPTbBIspRkMDMMCc2sIGOqUBuosra0gF9%2F%2FXYVo19G3EamSpKAX6xj4QXGwHQIVMi7Z%2BmoQ15TSJsGCl%2Bmx%2BNgGZL6LgGl8hlYCRH0n1c%2BHMTjn35nCscHW4E0idfvGLkOImMb6Z9p%2FFGqnhUzO4UD7NWxjj%2Bh2a0okhsONWFRCnN1SiV%2FQ7DqCcxvq9OmK9W5i9HhGvLH7DDFAz6kZU%2FQCnemSCgST3X1ahrn%2B%2B1Xosw4VajB2F&X-Amz-Signature=b7e65a098cc5299ed44a109289274b4bf00b88db5b9f3640f10404cb2d5594de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
