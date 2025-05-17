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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=de2a333e8f8964a0a43a202c0fc80d446f09cc9d715b0e56d159e7532f18461f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=00fb3a78fc6373484864314250abd3036472698f5100be8466ac761aa7c18a27&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=b2b2f2946d13e173820ea1e6d1c06560663dcabce02f30ca7c509187d0a8c09f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=0e2c38471ddff05a04c39c283b76e01208d36e7f2bbd6f11bc9f558f14f7f894&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=4829e2f4cb5dff102744bee77b1aa3f57a49c612e278e133192fed0a70958a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=83ad13d68ae0440f25e79b4acd9c8e85509dab4e947d9ce01457687908664911&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MTK6QI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEttKCqr0kw8z4JP4AROFCrJrUOt1VHmO3%2BmHfFKWFxAiEA0zZU3wHKMPJMgpQypRYo9e%2BB2OzWfulw1oyS%2Fz%2BRVXMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDkSFiixofgALE8dXyrcAz4mcNL5elBm63N%2FeQFE%2FtDGHVMyd%2Fjit%2BaWkYX98snrNbB0Am7FojTogtGo3x5Q88EHY%2FYYtB%2F7ZWrChkcG1NS49%2FldYCxRxWpoBCVK76Ik3VMeXOYMZnULdjnXHmsPy4sET5T1jNHFFDf9eouaSDwt2rvWd5zSNWt9Omnb%2FvWpPY0T8EDGt2%2F4gDatH8u5wXAXdmhPRKApVqTtb3aYxnxzv9RnT0qbKcEZOCcXD%2FG4bCqiY%2B1iH2q%2FwRvm0PCKMQSMx1Y9X5I4lhYPmNb1IcGljeMkdOOORVkm4RO%2F5IaCuCfGEVVSSTjEQ408QuU54vZ1652zefG1uuNAzunyvyscOy8lxPl86gupL%2Fi60cylYYC4m7RQqcFa4yrYwnge2sco%2FO5faj1EN1Rqiui2QDPIEPLkHQW7EIB0o6RbtP0Cc2gsIMvBjA4GmtN29iGABm8%2BFbVJMoCsR3i26%2B6XdJVXiee0NE17AO5StiVyRmdOCULN2vvb49mrQ0koKiZqnuKhN7dIk8hgZzTMP4MVnFN7UXUn9AxIqWqNYOslvbKH92CZEMvniNf1y%2BQQ9%2BjMaZ222LveJfcy6LCi8bi8E3SQOarbuc%2BaluVEeJQDy9MYnNmg2udkTkLNU6j%2FMLi8ocEGOqUBx2oQ3GbnHSyyd%2FOynOcUZfH3YcsTKaw70IjkBWbM1tFL2Xx97vBpIiR6SXB4K7RyLB0jiuH0LlZ4vOLaDZOFUnrWHFeaGev%2BjW68h%2FF6OJo9bct7szoRfsLKIagYr9PPpb5e3%2B6sBNavpdbWnlCK5bdSuPBqNUQt5ZhaDYiQ4%2Bz%2FTaEmXa3x1uf%2F2vfyMmlFR%2B4hZRIf84ZygHm0nYiUHr66BFXE&X-Amz-Signature=93a917ddd31eb6a4dcc5b4687e99321e2eb19b4ab6665e1e1c5d9d12e19d7be0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
