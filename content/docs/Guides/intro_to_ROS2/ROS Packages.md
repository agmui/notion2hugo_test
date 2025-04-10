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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=f89f484fef1dca38f52bb3037acea65a66a4461bd1e31d18b48e58baf826184b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=55b11d00f9848ddf5222fb406e4979752eb9c608eefc8b8d7b839f7ab7b539cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=c4c71e6fbc9648bc828ef546c26f3c22dbf67de91d1d2a6a159b6bdb0e7621c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=e756657484f534035c08876417196347750987a32f31aa49747b107bcb596626&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=231cb93ec9aefa960759ef26dcd49798d5d709fb170f6470f0e18b1f42651553&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=48c8aeccb6339c95efec91fcadf3e11bce3431b0564d3826c6418d5f062c3953&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJOK4UDF%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIE0PW3D1S8lLhj2mb1%2BzWG62RIE6Ox6CAfbinD5T0p9mAiEAhdt6kTbZ%2BU%2BQznwhAGP7FR3ojz%2F4mMI%2F00%2B%2FoMtM778qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBVjeApIBysGgoX%2BircA1JlbyBV0p0GSX5FhUPxveBSW2XExa1SQAhMGEPl7XqWb0LemLDloN7YcwgucZ69tZypmB9AMJyu8OBpjCMMCet4rj46L0cEAG3oibBWRHWNl4GwUm5j%2B0qKwabRbeVjcOPHGrBu8GKMdUPEhwVjb9dS6PSa%2FhRViptuocGTchBfa9epyo%2FRHWEa3vfa%2FGFJZLQ%2BNGEKCwVtolCM8iWZNFXY5ABAeNNmm7LDmA8v34kVYgYruWI9xSJuVdAnjuktY0lve%2BOOH%2FCUqhOZ50b%2Frz4C2xz4AL7WfLdsgLbExQ15Qs%2Bj2TYPyfYCi4byAqO1OdbxQHzTaCSPExYWpOtNi0Hk30euDC11ERanxuFBLbCw7%2BeBQV4YXcjqaguB%2Bgtf8JR9uJe4vzxibOSfd3Jv9o3fpphZ5FrdcRMotlOASornM2z8%2FsNlV0uGR5%2BrDzoVszqGtgoRVg07yu2XZtZ5BwALk0%2BasM0fyfMFZcDM8Izzb7gPVWMDtUfolz9TvplJvl4yMClK0ZiouAJEypDFnWyeJEJcM%2FspMSQXsEq1PT8fz%2BKEdZzoCLLgsEEz6uTlptYuHI3G5B5RFqG1isEakgTC3S4DfFnaI1dLuI%2BeAGWkYleEYXsl8zbcXbMtMI2R4b8GOqUBUlhX24FHYe%2Fl6kMlVFO9V31Y0ZPNIyg2jN7WQdqUWH51aE%2F2peURYH%2Byoz8BZZfNVoZl32gq9IC44aUDcuIHd%2FsAHX2p1BIqpCNoWtmOMX8ic5a8KjPJ%2FgdiKg3Tz6NvIyUrrLHiNOS%2FNyTliQkBquTXHKB%2BwdLgH7Z%2FrROWMu25Nv%2FEUnpBMrk5LqQRFGSDmnyi175b%2F%2B%2FVHHncavFBfEj8pFRi&X-Amz-Signature=69ba99abc7c0e7c7fe4dc55447cd9d4b86ecff8257564cf35ab7414f9ee09cde&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
