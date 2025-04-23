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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=908bfe2cfd39356b95ec9ddd0ff6343011fab69d5056e6a3afedc574966b2d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=f944c3602f41ebd4f464cb621541d7f7e8fbdad3cc7788b9b7f0fbc10311a7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=4c0d97d0f521757abc65bee2ded7b9e8a0906d41eb45e7645773fd6b47f205d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=4e79e3af3de0af7c8345708b01f51341173687310bfa4174282e2a74ce70b714&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=c35943baa6297870af02eb2d9a8d269eb6a964843e437367105cd0c429af7cee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=0fd494ad97170eea9d68b374061434d3cdeee673c9d7d42f09466ec1d9444354&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3KNVJXY%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIBToqy30wTnDeFFQM98E9bn%2FLvvYvCAbI8M%2FJ5%2FEUY%2FLAiEA9vXoNYiLkYG%2BybZHd2EGt9yt4N0NptcPjZNuWORm2hQqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUPtSZX5YfAlLJ%2BDircA7Zjnh32OTucdqqzj4X%2FmnkzBjwa%2F4Xle5wHZC0jtpQdRk6grQ%2BYflqcuCiKAFMKSAJSPii0NHcdYxEXURlsuSLBqRA9Yzee7tb9A31pUEz3aIYC0Tp3AMahnrU0MRPwd%2BqRE0CLsn68KpWN2uEucA2NDLIX4d1cbsrJHCEw14Q4h5BCLrAWjvpnpia1%2Fy%2BywnJ0PlgpkH%2FwgTffFhvrMbfDDXvgR3ZI%2BoMHoNRwy3lnPHoBr1ybIxXIZj0ZYmMO%2BobLVGCYYnNiui1y1U1I60nsnw01bY%2BkzClId4MiNe3l7gUwVstPyTaAzMOLoAima2zDiDRuijj7kGDQx51Dvhih2Jfn7dqltORkJqaQVKFZiH4Ac1HLDHJrNB6LVh7dzAB8WpDBmRGs4ns8AXQYerzxGEGQSWvf0%2BS788JbO9pGR3vlWecFF4YTIvU23OKfpLKevq5EkjZSoTbxw3Fq8Yu9z3thrQP4oSgA7JkM%2BGocjr08n4fEQqhy0Lf1LoaxneBETc3uSXnbiSgxVK9%2FJ698piXZU4%2F6bd3pn8XtEMm%2FcyTSg88VxMSlXPGZSIrTHDON967mzvsxfcPjU0mYUApjTnD8sRiO07TDbQHPYEzs4BIgrm8dci5VEYDAMICpo8AGOqUByjIBNcApoumc%2BuUMgYqqUbxFImblGGU%2B9%2BoiTKZOiSBHUR2PUOhA6ogcIrLrA8httmIZ2UH%2FrKOqApFaYXkVPkpJcaFsNY0HuMfKgiOaX4ZettQIMXy4W2Fs89rU6cS2VbCklrXY4O0hAeOFIy9mGhp3TBeyMHtM%2B3qE3StCWX%2B9zbYhYadQ%2B%2BoSH5Eo%2Bodn4%2BVTW%2BoEA7h10xwbXJ4kMt29htTN&X-Amz-Signature=f5846f621dab12e40af93bf31dadab41a36e7a08b491d67f484787fb3457905a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
