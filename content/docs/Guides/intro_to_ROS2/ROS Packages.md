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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=bc315ce2b3f8d5998207ce153045acf6513c76321ad8a928d9b007f7dd94a33d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=469552d553619b075d20a712a53c12a6def114d56d042d29f5ce78f1424fd5df&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=915da4dace8fdeb8e1871f2d68037e9d4a727141d7434a6f0ff5217a6339d0c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=94f8a2926d5e181bd19041bd8d96876182eec9ba1bdb643ebb8ca11c4bd32299&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=4ff4f100fd697e929bcc6cba2e2b65951815a368b657d571b1e1ff4099c95c9a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=1e22ba5971425ebfd8a6c594f64ef3e36c782741e5abf9d68ac9c6a667d572d0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRKNQM6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDkouyBjstzGMpaHhi9%2B5%2FAnNsNDZZ2SUGACx0MXFdEhQIhAJL%2Bw9hv6lmAUoZ%2FRdCdpdSuoRhWZ2G7KNQrdCPRcXh6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igzym3WMICZu0NVRG2oq3AN7be6T7VNmU4rN%2BpvHlKnGO65tcYba900SOBULKjAyqdq1Z4YHcUu6EmD1BgBmUxkvXHFMfHbEENvY5QL3gMxYje8qYCI9NnXxD7HboJupsHOhpoxGkhjW7LgrLP57jyl%2BY17cBH6WThQ%2FQwz0qMdQZ%2BJpLPbpfh5iq10CgWGMrTuFzzLoECw5D%2FvDqY36e%2F8KkrZSFiH1oMU8S2H%2B97ZZKLpXh%2FvSEE5dCWLdP1GdjJSKlupSX9pQk22ZOXR81pdTxR3F%2FNTxUkYNtmnxlOJEi5zLqqVZaHaZnTpZJygf97Zrpwfv76DTqoOqHTqjCmWhA%2BJY1zjD09a1f2ma8OOx2TJKwehjO0HgmCrCVqtJW9uhnLUs5H9MFaUyAJIwkQmKPjPcOnB%2BetH%2BvPCRRvduJh07GMUsKLj44HghtmP37fn%2Fcw89uViSh%2F%2Fl%2FdMRBzR%2BLx7GXoxwe6LyC38A5IFfChYXN6ekjwrAQm4Ixc0L1MyL5ccSF8Hqzaf1AVRu1zjDhgVnsOJiNoP5scMUHHUHWvqifnf%2BDrIKJmHI%2FPgBvDPf1S0fTyD3GNHeC9ScXfeq6hULzaHdKtQP73PaEkA%2BkyHhRHyoxFDwZwqoskq2FYHbAR1fAemZnLXg1zC3rN%2FABjqkAUqXzoP9V5NkKMpoO2lWj4Mm55RGzMG0VlYs%2BgX1Ac1qcZ3b0fuBXTUW20BZBp%2F4S%2BP%2F%2B%2FJVdMGb9gHFwg6csL4GSTRlQCnCXm5ESlYiYdqVu%2F1X2Gq1kElR%2F7yFsWveL6ZTy1Y13DxjfyphtnVfmfgEY14vWIbcbslgeeq3AXDQ0i8lDbnmL7CctPPyEnnVkVVP%2BVs98kvoxTBwNligYCYdkmqd&X-Amz-Signature=9d2cc225cef2e43cb352f120c79916582068166b4952a5956ca7d3cad842c4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
