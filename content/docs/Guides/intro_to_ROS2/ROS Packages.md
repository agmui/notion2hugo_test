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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=83c960e804a1e3117992c846efe8c27c72f004892748b45d311b8687a2643970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=5aeafb77c944b20bfe4c0b5485f3f0a4ded8e3af6926738be235c1ac320a7a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=58672c33f9d649db0846d9626c90fd1c235f5bbd5c60a7be953b0a7f079d031d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=f2411e65db079066180e0900ac90cbd19646cd04f7d12e7202a5f0e545f23948&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=c08d07cd1ab53acd3c0ef8c7eff371d57990e76db9b742e6da3bea03d133b42c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=9faa4d4be6467508ca8f51e804e4c41376b1e5502053c9f1bbbae6a30d1d9aee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EM7VB4X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtUpsFM4WL68x19iBQ0gZCxuBMGmt%2B3DiwEw85gTgvAIgebkj5CA3K8Z5Iy9T3m4yi6KFnckHy3dhr1oldWfI60kqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMftH67o6%2B29finGlyrcAx9INz9IDljIQ07BCw9Y80ZcadBKkIdinxt9297p8EFaO7ylTJj3PbaWzcqMRPUeSHAnoAQTZF3%2B18HV7DvG2pcTIn8uB%2Fvq4ofs2puo80PRinSpesT093IE6WLRJxhArvA7Sycc8XWtrikhGymNwkknC1utRIt1tk8HXQtwq7Ld8We2mUTIK%2BXqZICPZw%2FmmllmPHCQL0ZL1FRgiB9NiXWX%2BxxX1RXg%2Fvj6maJL9tnieWhUqPoZSPGn4G7wvlPiEw1FukGOjx1b9Ya%2BSTKcyxOxHqDFFUzkiR4JmTJckGxk4%2FGaQW2dDAd1EBlu35wRVq5sCBBttdS3u9%2FeUjXeR7xoOYcRGEr7FVaEQTWFqJgw0U91x0nD9C2kvFUdz5PF2dkPXYSvCiqGiKOWkoJug2y0AUtZallqJkhUyDXXF7EkwynzZI2m3j18sGtAJ3%2FYoWx8Slt8Jad7Sq1gnq8Mh3SjbjZUNOor06I7Vj7xOBOZkZBBiDAEdY5dq7WagmiUVbwjbTAyUiYc5I3h0V2NIlGQoR%2FUJ4CT%2BkZinvv8P1wKlEnqdMP6g2hBs0DuMD86QPxhKqOglO5MspTCQpSQivPKaMkHWKg0SwhaxmrX1LwYLzk08vPHEumPuIstMPy94r0GOqUBzT7G1IoL21tSudAldLg2mVSAfxs%2BHhEFmPbuVyBoqczJRPLlRZVgHaGzOy7rcnhEvE8wMLXI85y81SNTC6sMY6ZlBhMWO3iT%2F%2Bp8UW74IRdVllzPAK1FKq6VlHo%2BV3BWcbHgcYYZLrAfCcsdIgnXfZRfOtNlxsP1iDFVj3V7OLWPEWPJgiVVrfqPYwSH3uBQsXuvM7hjmdfRuGB8Woz0O1Nd6MBs&X-Amz-Signature=9cf4a82efff51af7baa32330d733a7cdacbdd6d46688fdc2f756fab02b835f89&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
