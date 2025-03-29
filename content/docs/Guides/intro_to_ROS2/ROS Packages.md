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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=3df23a2f84aec7dd3cc9ae0993b5c2d4930da84702e8b045b1cf6188c3d9aa6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=ccb4feb935139ad07f4782faedd9ee381eb7e25cc1598f52981d86ab0d9490e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=eef88dc623acf3866ae97723d095da28d29256074bbfcd0547996d83164a1dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=b0a29aeb27ba147974899b25110a1426115ec501ce7c10373e0aac545f46ebe1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=7529e16de5704aacb84f4affe64cdac762717d95beb48a111127aa0643a9f056&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=8d67494520499395c5628afcd4d3961c4cbecdfcdc66cd887efb340031c90950&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KNA26K%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBG7EThAB7qKgUNdKni%2Fnl4f2ia%2BbdHjHLgDcvj9jvbjAiBGNdxCTk2iLtxWjVDK%2BqRM4ZIZJoC6WUpbNskYShajxSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9r0qZQVaOMt7BmDwKtwDSAuvbOHB0X%2F45GGz%2BgiTe92TU59j9%2FQJkq0QPfwEJexKq8bsIrK5H2oUfZz87aJSrEMPsHYsiKFkmhxTxLUZvBAZU7trSEgD%2FCfj624Ly5bMjm%2BM6WYTbwH3%2Bs47%2B0zuOV31BLEF6UeE20h%2B2wmdl6I%2F28l0EQKPeLUiJ5OITuLssDkAD4MDo9FyAO2W4XuBgsxH3V1PxFNVGsvB2GnPvPydM16LQ5mYAHy0sr57Vx7UFftel6rTSKjlF6D0IdAoNziSg2LkXlYDf3CeJ%2F1TVE77dobLaV0h0pRnD6wQWfZaXtsLBzFVy5L3MjQgZY8DrE6AmXdef97a2ZHAuBwUB%2FhJLdpP%2Bvj3OQhqmnTm5IEC3Wa8vjUPzTNy%2BixJX2Zw0GSl5ik3IxuGSCG9M3aS3TClIKZUTqbdfGqW3N3nwFrO7nCHw3R6p1HsVHlwnEXMA4VIu7qNv%2FGBEpBOj3yKY%2BdsSJ0g1ERVcML7asTQoF7fJyfTaVMsUcLfVCq7gEGvjBK%2FlXQ%2FwMGRO16KSJ8q6hOMRSRA07GBQHbBGrdu6XppGIs3jwkgIzKl40MoRxxeFgWIO0F1KSsCsMsLmPp9SXWScLbYNp3FqR%2Bi7WLs3A8MkKAZRJujkPiAcr8whPGgvwY6pgFen1gJM%2BWGbqFoD80Sw0tIp3HuJROtiiai%2FVn0QYBchSBnJZ1TYmi%2Fcq2Pk7vySLJRGPWFRhc%2BD5xa4fXTjx4YrMmP5uuT9TyZBmMJA4orsVfHsgtKAo1z50wB9PUBpG1J4EZErJjcI3iD2UE67FShKE%2Fy6IkuWXsvXoBE3lBRudJ3C6gUHqvzD3bRGPlCqfima0Mbfq6ItjIDIa0dp8iXYQTvzl%2Fs&X-Amz-Signature=ad389a3a60f71549db067280f6ae6a4b38a37e125c6b2c44564c78fddefa1e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
