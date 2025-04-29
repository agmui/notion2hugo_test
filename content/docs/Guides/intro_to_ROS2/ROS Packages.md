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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=f808b6d8e51ed5295f593df04f08476b1d7160bb0b1ae02c74f086ef62d50449&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=12cb32aeee7569369029583595a39baea1596a64ca2c03594458035e634acb06&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=98f8ac4d5dd133dd07e5d9cf2677c44c4d7b55e5b5c6f3026531b6bad84e07a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=17a667d8a9351a870eec383bcd5183f45e8de88841358ca1ae781a3c1b0f1f04&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=fb9e541c3fabcd4a8860d9e704e2c597489a08ffd936b92e8c5d647d6a2c1ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=e2329a10b862a51bd62911724074c8ef850980d852434c04f1e7e960933fa55d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZV736UN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FaqVi0qxK2%2FezKSLDKTlyNKjckyemjpIc4Sfywa3v1wIgVcUnQPjJQX0d1nLn3ZPzmURzrzTuIl0cosSiBn6pVFMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTYGRYwjwj8k1WjyrcA3Q7cDCqGgUyOqjS8ohxbCdU41yh48pYmtNTH3Ds0sXUeHAlL0%2BGvYOkVcNid%2BUiFTiPwqiXgz5rq3MkknlFYZ0mcNO594fl%2FrG9SSraIGfDJpLGL4ffMVVTAz4p%2Fcb3LEuG4VT92PXRmEVbLe%2BwkaxWXPR2EvXztYlkk%2B0vztM8hcLOPiHjCLsqPKiPn22V3R83ahMFZ9S1A8W4PraIMNaFjQaZMAjw2t%2FqThlONLi6%2FQ4fT5z%2FeaMUgQ2OyD2re2vaMfNsQQzNtRp1%2B%2FACav5kHsLdcSNTNCvLBzc1h1jrFymvEAjgy2oMLgB9qSF6Tvls07bynwQLTT%2BeYn64nD1TTHMUu4TW48RfyRDi9Vq7Lf4qNprsV12e21j%2FndfV5TujQ1v8RIbKRDLVpmiYcLg4sNbhU7vUT8hhTh3YH8oXtcrKX5Iuu1OdAFNXQFSQXUmSE96jxcrpxNkQ7e6fOnlQWUV3Lc7qH3RlzelrIalriJUsKE4MhQUWYAxQvu3ijFhiGxfoLiKVVRcdwFH81riSaDiuItRNsJr%2FFC%2FVR32Bbw12JB9MmltZnhR62ZGiRDta%2F5iB5VdZj2N4OkxateTRvp9TBk9rD67lLtTp3b24rxfG%2F9gGRab1I%2FMzMOaowsAGOqUBl81ccyMjJpfxA2BypxBlBBOxl8idvGbrg5%2Fa6etvwVgOL3MS2%2BBg0LAZU0gWqFrwwcO87WF7xQvCejy5%2BFC5vBMfzOcReEgBYTBH87GJ2RufzzPtA6tn3D6%2BwJDeusxf%2F2w6GjAkW%2FnjYXFkMRZgrQ7T2Z9WCVCFMFFgOVAPQFTV2CmPFxhRxncopNIuB4m7VhfohM2lb66MeYZztctAlZjUkjz%2B&X-Amz-Signature=e6f24b190c555ee345d1df132cfc1b46b430a7bf606acef85b4fc8a502d17f60&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
