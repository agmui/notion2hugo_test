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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=e889c233382c036776ed3ce393987280c70499581d8d1db24ec5d53bf302ebe2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=a9e1d77164f18f9ac3d53df6a695996e122ab6f2a3ac1ade617fe7c24c68716b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=aa913e24dac8ed1f74da9e5a5c6b467a297cc78a07611c4e687876f53e6209ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=9b0c6d5b0efe2208f315387e40866af2ff459d9cd89d4bca8016bcbfc6c43a29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=eae9c300b9ec61b33366e1e6bbd5c8f40aad9e8ae8c7cdd7cfcf94ee7924c8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=f5adb959a732e8e031c1a7c8cd27216977a328f659bd5b2e606b12bde62fa994&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6D3FI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIHiOw9R65jstDGHbBJWe46zAFrnrR%2Bf1jH12m8cbBhN9AiEAsRrVwa7TCtNFCgief0NFKI9PKFMxZj8OJJBdbFRYh7YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBuztB0UuXUj4AG5CrcAwyRH%2Bv9siMxNc%2BT2qBY4UcukkNG8lyYyJjW24OjmxImAo3N0V7DyTWItmQwDtl7WVTPjyBmyPc%2FFkDWeOHvZKGD85sfHrJ4AO3WWT8kWywOb7kNigq1XFBvWQXyzS9LyxIOl%2F5bkQROmi3Zv3ZLM9KXaFNf3qbE4J4BHwc2dWcBNFZqoUecWb33G%2FvkzuBU%2B60VFP79ocCsNwuf2d1oXlLiyptBS2JwarbSn43fX4xiME4eIrFX1iVpT74Dy8dts23XdjdfPXaowyhWXcSHFxx1PX7F8TFbWFXC91rvbrejMp33IGMINBYapXfvCfPO3Fu68PC4oPqiwOxMzPj1STaMP4Cn5wFFDfks%2BuvgcOo3lTfFGpFjY8kHDfsHAzVI3bayZO1%2Fy%2BucDx5B%2FcQxF%2BDOVtx%2BTIJifzZJyMQa0TOYoV8OCyTuFnxSLB9tW69JCPetQGwxJh6hCKJa%2B%2FuFx%2B3H1SxlqftIZt4LNMjQS3iBeVF2jKvgDsxxPxRN%2FI4%2F5LIpocYXoDfGEsH5hoxEn43Uxtye2quwaVfXPC2lgAkQS8CI5piNpexVNQQNVBZt%2BfMtpKO3D%2ByM5J7awLiJzFXDCTODeF7MzfDWA1b1d1usjaeTN8XrCA6Auip9MIn2g74GOqUBR5WIYoHIedF5OGwt%2BtSr01C74i9KglIu0%2FN5NUwtR2iBZkwLdojHd871VYVyiIK2wPRy5Eiom5qfZyPiYieWWrphR%2F6F8sm6RgxT8SvAc%2FNEYf1xYvNMZVPlai%2B6U2knjNyDWj01cKyeINCWuAdP9t0f1J7UT%2FDYy3AJMxJ2molGLy95IB6C1bWo0ydnpGzcRCxYBnp7o5I4YLs5UH9ZfU%2B%2FON8q&X-Amz-Signature=fa04b22ea07c1197729a324cb00305925da5d65d69c2d530b336f7bf434c07c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
