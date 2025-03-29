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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=86c8502f107ae6db2aac53270c4be7b16252189e60faf88b827f10c90b7f8e05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=cd682e901dc34bf593d7bfdf436021084a50cfe694804a7fe8fa4086ea52ff25&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=34d7253d1c7143a27aa3f497863c705a45bb60fda10a36510a323f25a47e7cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=33b28fbd8e85623183d5351cdfb8a163cd84961307e1c75679a1d64670772024&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=be6121e08e7de0855c392cbb699ec36c99ee6f939b922cba8c7910a869bd0f05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=731139a58cf15599607b6db8ce4045d241cbcb516a6397a0761a10e5679f2785&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNBXZ74%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIDT2O6gck9Os%2BJZYFQFMfHMttoSR189KwT6yWirJU0A5AiEA4C8rS473E%2Br3w8MvKFO0ajH7MXw3UTABuPfRcbaH7Qoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDK9IZoTFz%2FwTu7GoBircAxxIrTZvykmeKZ7lhF6%2B%2Fv0nJgEayCOrf5WIespKpHYpyVBhhOCpbIPiS3jSg8%2FHhCfvvLx3DXDK05CDBcRwlqX92y7L7lmInYGOAfCm3PoAwXunw0hXa858g3UhBBKO6T9%2BzTAVpm%2BfvtB%2BF8VdKRawPVWlWIA2C%2BdoJoipKx4KcYaZ17lr%2BEMbUFU%2FcGv0kEsJpf2HdSSBoBdpYMn31VuxBEBiBKKXVqlzAB%2Fvm6SOoTqzUS6AhhFwHt2GnNyt6grsGSy0yB21%2FwTXFs2Mcj8ei7WFtsBkhoArO0yBjEJDKouoLgEPYZCy%2BNcwgkhgXLzBd%2BLZjrpHqBvb5gGbunzqw2cEDLLBVoE1dvz6aqYydhewCDFgBpPqhp8StfHVdyHl3XIbJhRpA1deubl8G9wjBhO%2BxEDp1g41ydUqWoYxYlkC8un4TI8OFJ%2Bcq9im9EURy51EOpjsce4Gw1qSzto2N2IaCZw3RhZYwHsyrZilYklcVe3x%2BOdz03hyMzmUJXvzRaFrCR%2BRqdGSPvj%2BQ0LdUDvCxNtmZVtBVOBpwmQNGPgSEr9676dDKNTXZvofezLPuGPj7srTdIEaIYB3g2rxaBu4sC0cM8yj8qdukI9on1BGoKlMlxhckm2uMIrdob8GOqUBc9Ymgj8RHxug%2FaWW1AEuMt6XICTUyE1JhOLwWuMYCp%2FqufkM0FkpSifwrHi0hWimZGaNZMXW9FJ2bTu70qmaDDreYW0HtGHDMgFfq53Bw%2F4w8ZXDbvKLVx3DpikdXyOE%2Bf1soypBguhZGjl5cWicmV5zGPw3mNPB1vFSp5bxA6cu6yAzM5ySM6meKUo6FuOFSiOiSXJRvDaDgZ9Zgt5jOeshuVaM&X-Amz-Signature=d475ebb79897fb6201efe7822cf39b8c2e1157b71467a89f3d7194695bc2852e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
