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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=de5db0adddabb75f30ec4f19b8972ee1c8820d2204fcb2b867c4a64e6cc4d018&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=1a0621e1db0da12edc956c7596a4d5a933beec55b7a3c1e7be9fcef9b1595c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=da374576007c2544d27fb9fbe3cbbbcd1b0a303504ebe44f2555daa64d47db5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=ee2c7d0e848db7614983c88c904661cedd90b349ae25a38db39003c6e049bd86&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=e05e22dfc98da70a974d4afd7bf331cb6bd9c855f5d2aaf2e2a575e5d16f7106&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=41026cc972042d8ced251c60d5a8e24196c8bde84f6955cffa65c4faff362746&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSGF3YQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo1lzSGTLbAL9WhhDOfdx32QzdZBa0fex%2B%2BtXmga2flAiEAlKc9vYW%2BvVSTEu171qNIKSafW9yHWj6anyTxvUQS65MqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbGIyMS%2Ffe6kVqebCrcA%2B26%2Fp8L0%2BniDKmybXCIkmhSyVHkyZ74cYTl088sqZdQC%2FxgK6Cqpe7uf8ecvHYwjgP1PXEjymiXVT%2Fq1CsZ0pluxtoBAK6ef9WpS1FNkyX5QwINXzmvZh9Mh%2BGjMx0lx7tvEyBegu0XGIPT%2FYCgR61hSLgSSGJTAVJ6hgushEP08DDRVKHBOhOl7NYyHPz2b3Imi6HkwKu14T%2BaI%2BmHQn2eDamIuCdgzH%2BNe4LI5b9NiX8g%2Bpj4g5qrxq8bKp9jrFLYCAKXW9absZyZ%2BRS6nQznZarJw%2BfGF2lBkFOIoGahWTuIGR4gdtKVe0aV2TmA0IJQfWUucRzPix6e7VbrY%2FYykrpPN%2B3mwK6WgVcxl8ETxV1W3KmlXDOl8TOicaAUWR4%2FVzGbYtdTAkkwcrFblHdb8loyjldcAvcjzdzE2uzBdtyFlUT6x21ZNgYTpSEvfh1goAkwcBjolQs5n%2Bxn8CpngvGEJDsR1%2Bsy8F2Eka0xZeLtKJA19iKgn6UqD7zS8CjMe0RDz7RscdKNkVg7IqulKJyzPO2%2FLhDILyoe0M5PNsMUQmcmq89jae8Zu6lVqExMxknfAsvhupW2d6NgB3BsQh0kMYvYhXRGBUhQThvPWBgV%2BcipaFcgEaDEMKSQ77wGOqUBwiC8YqC%2Fsem1yjvoNq4OFqsOeS8t2esR1gNglM6PEOEGLhrP1e8ps%2FhzcjPUAKQd%2BPHwUsm5aZsIPvYGRTodencEiIZiZzbLq5GUGeQcE07FaXFTrczT%2BMXbvFDbKQjkDxWQZvAU9GbhHdQU%2FzGWLd6DkrgcZs%2FyYl3E2IZL4e%2BpLHux4LW0JjFefUPz3wZTmzARjrulUigtFCcPO3a8nb1T5ZYr&X-Amz-Signature=274ffd61de4fcda52f51fac22f47e22228de4942e0837417c8789e6893561067&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
