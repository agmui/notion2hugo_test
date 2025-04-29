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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=6b89b7b30cea6f7e0befe6d0264fd21f8094f8fc33355ff02d0ad5c8368bb181&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=e9592cd6cabd37233c2189091a613f2a857b23f6b81ec490a7fa69a69295d75b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=3767e8e8773d9e74dd334b7e71e0235b139c48bd6b5ef907580228d783b263f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=bf3d180467386b3d051049fc92a4aad1b0020a72a0956da1cc5d63e8fde55463&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=b13868e7b6f5d346a4864805760f9db8b102d3e87818f17e6d103bbe9da316c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=593474ff88fac6e1e71714859a686ca51b66f03f43858298dbf1d1fc6f3deaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK4QPWW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEl%2FIe32x0yjfYzcOR%2BXQ40HccPmly0Fhqlm5iJXgxIEAiBg0P1sPJHFNCo3imEf%2B4F5mNpPysvFf1uo87FkwoRfAiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLrM0oEOH1JXDyg5kKtwDLAYoxKRdmQdkCKjFeCeS1HPy17rrT9Vy5xhlYvWHFATWW1pMZ%2BpoIoE2j1e4C7UL9weZGaMMGOaCDNfVqIx0x50tX%2BIOSb91U1pekq3WPO1MmGQ8FFOtzWxBTtPt18%2BIlDv1tDHG89ZTUtnnpmfl1z10PA4fLjvrG4FF70yBuLLBdfmdJNDf3s8W%2F6o%2F2NUvKH3W2qHc8iCWVitwBcmmTWwLPTx0uagScF2EONbx1e7fd7RWqPNOnzWiicWPIBVYRWmWLb0gQrtL4ls%2BZjM%2FuPfTXP4fY7L7aApdHvHP8QVwxcshahMeeE193RtdMwy%2FRZ4ipqM6kX%2BQHemiUrLNwg6HY9NK4pIEieBYKg%2FOCO4ddOfbHz9e0ph3U5BjfgtSV6gWafO03UGW%2FsZorPpX%2FvAXAcDDxvI0Hi%2F1Nlj9dUD9B%2Fa11aYDPbmkPfUNCGzvLK1lkns6YSnIwJyL1JIFjGC0%2BmYLKVjY%2B4kgITAlnT%2B6vslXYULtks6xJn4wiqlS%2BJZZ858NQr%2FnD7SY2WGGLJ25yGtoPmNZrl51DoI3s11CvIohE%2BAUFQX0L%2FhX9dhgjgxwjNJ1XdppCyITAEBMp2TJo3E7ckBxfcaF%2BbwOqD26Xirutrv33n6PNtcwpr%2FAwAY6pgG7XzEBovchCj%2FFDf5%2Fcvh%2BLl7mHMfz5q7DGNYbs4EZ1EDTfGWEv8Ejd6RUTLhGmRbSloKdUzWkOTkKeVQu3v1dZ6MCfV9lvak%2FTpwNirfJkEh2dAzBgZTQJ3q9LSJUHcqJ1X%2BevHQ%2F9M6pa6BYT%2F0czKNCemcwV9JK3xQbBFhK7um%2FDcU12Au2eYw0oLQhgwSKGW6agA2hmsFWXrS8lji2mOPpLRi8&X-Amz-Signature=36fd19e0a53626ddc61f40471daff6bfa032b72d6d4b151c15e4f927eb59251f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
