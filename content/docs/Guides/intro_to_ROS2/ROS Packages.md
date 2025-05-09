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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=bf00e708245a216b0f6eb2eaa0a08c6f5a61c06178bdef0a215569d1bc30ab90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=c74db8f106bb67949c91daa69f175d7daf63515f2e15057c0060d862e98ba347&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=a62330309a014e04e6d8951016a1a78fe2c5040ab40e8b70da7597d8acb7d85b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=0c06f9f5ac228cff464f47cedc21f3a91fbcc5feb6ee638b176285c3c93de97d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=073134c628ddf6b06b7274db3e72bcfab16adb1e01bfa14bb17bcb62fee43785&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=b0f0d54f0deed80a7dcf519de0a0f6091060102071a4d5914caef37e8b5acd73&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KVW3ZL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7mRqJ2NRgXhRYwrig0QIH4868OG%2Fdy7IGCm7p%2BVJf6AIhAOON45DqRcY32da5700uLyBAvP59M705ca9%2Bd0GvRalCKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqSSXRowRIkQmjg%2BAq3AMnhThEbIWWAFShZ0CxyFxZ64yq9nfCWu4%2FwI5vm95ty2kv%2Fwpym36eG6eaRhgLvMQEHfuW9lsyRNrVg%2FDrQoqE1Tga%2FgkW%2FuRGik5L0gXHv7Xtf1C2d9QXGN91CN3aMi18yVjCECgtOAaMF%2FxGSJRAYYu%2FXwNnJxMjBNHOx4Zw8su2Q2EwRYJI%2BnJEiGBUv5ZfiqhE5HFa5N3yaVeVVV8h3zrChyYXFKKYWokIYteLsSny3AiCOcV%2BywtOweuztWHSz2u5tNdfpFNQASBFi2dKastJn31OEddgncI3oS%2B0qHWeNW9ff88715p%2FVqX3lCNG1Q84crPfJIkzuRiqfKPMnfarF9ALgWVt5CHo5M67RmcVm6VMjVKes9ykVvN9B3M2NyuTh4PzAMY7zIWvPaulZ8kWv7STrBGxfCwDip4zvGxcpGIpv7rUIIFJVbXQiyY7t%2F7IHHZ8EfnnoezoLqtz41tKnxHDvH7OlVKhamXRChvQOPuBn8qPbA6hDE5bbPGUgWgCCMUwqpAj3ZLipyF2%2FCkeyC52Jza2xro%2Boz2thl8p7M7h3DU%2BssiWlfCBi%2FS0NqgU1BpL5mpQq6Exp8A1PDidazanP%2F%2FeAmi6X20vSTQ1yGR2Q2ij7pETfDC%2FkvfABjqkAdifiCBHvZEeJEFMsQCEnmlwWany2dOPgMIYnt3N0n6%2FZ8xf8urrkQ%2F14H07J1bqgxmaF5sdAqLNnYaBUx7elJM2ARXj1e7rapu26xL3rroCdxybLlVbXr2At6hXsCYFcGljPZLDKkH0OzmKmEvBgDXznIIOAtnpDWVosg0Rwn1REaSizXQLOlygl7uLdrMbVTM0ZyHFWQ8gU7EnuAyZt4vpr3zj&X-Amz-Signature=a607f5199bfe38f887aa121b81d5fbd4341f36c82544d9e90fdcb64db983c464&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
