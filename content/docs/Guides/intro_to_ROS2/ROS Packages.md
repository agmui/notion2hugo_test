---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=931fd81fd8dc5cb7a253df18b20d9044e0b816176342a340caf61c746b61426f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=6c82057b69c5f01f783f40d5c167f34b27c25cc3316e28176f452b684ba30108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=16c3060bc7be22b0ca169f1e39dfe47ad1347cb6392f968a5b3e9a330ce41479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=15ec10a6dcdd338e533f1bbe3d5930c320f7ead099014f748fb8a8c51b5126c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=83bacc961be9f4fcb93b6936bb2c982e18a1df1b10bf0336a8116d754ef626f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=e88d31e83d7d95c82887987822a7122f11e387e208e8f5e0b0930769e32a1cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZECQWE%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCR%2FwDLtxTOVMfKawaomiEQndceWn8kIORviAbw7HlPigIgHJU2adOX2ig%2Fy%2FmHTmCZunm6SXNIESUb%2FtUbw%2FDTbxEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3V2dV6bR7r15kfTyrcA84hFFL0rm04DKY33XviZ%2FOdnHf1FArLGzpuRH1Ms5Hlrj51rEGtEqRovEZYEaQHBpwHjQW1aDYYQYoylBj%2BGl39E28jgCj2t50Ya8KW6IuCApOCUT0vsDbqXaSiI453FZObKbMmZGTbaBYHyUJTOFYUrpchsVKdQKV95r%2BHPIOZDZx370eFwKpaGWglupMllo0h2Ir0c4xrNlL3dSlU2bUcUKDAKj2chqEruygvwMUHzOFSNnevS%2FI83Jt6%2F%2BlMcPAf3dpHDwdV%2BgyrjRznTq6sX5PbGPL6DmPEYujhIPMbJz7e9rVIvhnmyhio68gd%2F8gMXf5YovoqJDv33zLSA0RXukXb3WRFs9jd5ORRt%2Fexw7uLVkyJ2B6ujmRPz%2F5HWKsQ76eAtbCUFmIffIgr0Z079jJ7RHuym9i9T8G2kGwAHRT6uLj%2BWrh8AQju%2BuYAXiTm0fvhtT7cN38p5yFAScqX5wsILPOppqElzehsXSjdcjGxX%2BimOABl55LZ0JeAdEzz4pEZE76iYjxmzA3OFT64JhrmJVSAIpoCrQn%2FdGaYPyFwrw%2BRj4dxOVxQq4KlBV1CbqRBBIoMR%2Bs24xvJ7kXd%2FVrbY4b4FOIhAqy6ZpdMF%2FV3dYAxK%2FrScSSIMMu7xMgGOqUBp11lwXlDv0jnQlwrxTH5JOsljwsEVzqT0i6dvxL8JcJpnx9XaJd0lYY3J2%2FUXxfuSoT0G%2F8Rhms%2BANsbpC8VVclRIC92%2FTKjLoTZytQIZOCGT%2BzU%2FF01kgChTzsXcm%2FkjvxtkTa2L4r7fhD3zzm%2FiJZvXonJLggYNxk9pd1U0C6pOdrEMbDKHmkCHp89bUaqA4fZi5xra%2B0D9J9mV6%2BTZdYolHVG&X-Amz-Signature=fe922513c9b8947755ce653285249a9477edad3336ffc566191ee8050d2ff344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
