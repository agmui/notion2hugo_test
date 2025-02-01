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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=35cb0cb599a6cee860e534aff5c15572feca0c9030c841db74238f4ea2a156ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=1a747d438d48cb144a3f0bf359df0723424d9be4880655d6f2bf616cfd5e8507&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=e8823279345bb670e5f2e69052600c3d6904b03b9bcc337c064931fe92e23f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=e7be4a2422e484858b0466c88f8245aac0f4f4348d5723c46780a726bede95f3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=cf6841b1a5b986a148c86b8a9b586e0232dcc43bebe34668035c954bc093c1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=b82f296656926e433ffaf72fefcc0d9da0a5fce80a043bc9fbfb0fb63df8b675&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4WQ5K4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6PAMCGQcVuDKAFjBb9uOaoTxmoTmF9s%2FC3IJjwF7FTgIgbPOuYU8oBTj2g2A89HgKqDHTxVsNuFWpPTgTz77zwZIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIZlKy%2BvkJFHXwYDCrcA29ZQ50XZfrYBpidAy4WaFlk4LzW5tgSAiaXFioVXT0sAtI4SZHzHT3Y17MKC4X9Yx4%2FVLfGcPdqsZnGyXJum1KDjrOtfK%2FdWSEq0m8lC2INBlTXs%2BlL6mGFQa9nR1QPA3Ido5pkrzpqga7wm77brRLSFnnogjDHjm%2F1A%2BB3eUVid6FthBQHVQrT2TFfWliq7AXJGJcAssK5hWwhxGfma94k0WafALIwowAlSezj2NJQv2JOMAauYDPRqA6jSSeWbFldSEMtDPjbRYbvFQNqxKBOouWpd9WgzTYoaSwqQx93Vs%2BW%2BcPbB9%2FJhJVE5%2FLjzd42Pt4JBlhwZpwqYU%2Bl73G8wKFUZ7WrY4jKiaxCodVD%2FXmkW8R67Z3G17rZ2b9%2FT%2Fb4pSnZdhvjYepEP2R2ITbbpwD8%2B6uDfsZw28c%2ByTSkMATkpBBC%2F21EujszOnvR5YZXVmSGkJF0UadV1aQj0Iy4BgXPLlh%2BkVH9%2B4wcP0qchwEWvLFEWvSYbD7cQUMLVli5%2Bm7Hx0HoD1%2FNA327%2FfmoxqtNnTl0IvYVXsHZMzg2T7J%2BH00QfBGLzXLbLy1sQA76uvsCeSoThBL45E27ZFUfD5IrVBWCFQq44Ij99%2BCSaUWRYcaq635E2hyuMPju9bwGOqUBdBZyuTqX4r4Qyci145FCXKU00%2BIOxlOIfLDYsV7ZhRO2GvIEWo7ksAetkcY%2FD3%2FIAxTWhNSN%2FHRhpwRQMeF3xmqlZUt9gjml2CEIORs3SqN7pPxRWwBHCaQlNhrVmKnjVtqGY0VU1noRXoRGqrbhQGEJheBqCxW0uYAVxIGVlwvCTQFNLNXSb1GoV%2FUEAntLhABg%2Fgh1eJMTgM1rPZC3hTY8dVgA&X-Amz-Signature=63bc6b7414654873e239cb11a31af964facf28384eefca69a3adec86c8d9891b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
