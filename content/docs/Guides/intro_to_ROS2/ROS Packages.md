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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=6ef390a681bcfecadaf17a22b26482e128a1e2e02ab49467a48ebbc3f02fea66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=fd74191cb8df02cf91d52c030da4548934a22fa6ed5b655f21d3cfdc45bc9e57&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=789d95391189a73216607d30a8970c795371e10bbb310e996140a808c9849cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=f44f8c0db734f4f49587ae7c6f8b02c99e8e8ac39e1c546e4f19b6a98a135b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=814dcb93f071cfd88c6e7170fa36d0821c24c6dc832a944456cfa95aceaaa4a8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=24b57ef07b9156aa8a23d85cfb8c1590b4b74c3a59b0f9b05aaefc0fb9e8e04e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARO5GK2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpmQezHyzQrd0%2FOfjCzI1VnBQ0atGsszGeBgPIEfTqFAiEA%2FS4ltej8XAfb4%2B7GEaJEbosw68TmAuK8fZ2wCIxu1TAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIPZN9QQNMfQpuiuNircA6AjpnE8AY3ghFpX0r2KB6s3DyibyPpkvc87qfJhQDK0JPoia%2Fg6qjVSPnT3SyBKmEuhpYmR8m6%2BqD0lex6YVnb3GvoBAfR4xgK1Kmu09rJ56cbA5RQnxBA7e9ik2kFwvJGUxdasFiJK75%2F0ayRUQYowTRwYrhb%2FEAkpEVeNnBY%2BvSyc90qXS1Iy3qxABxwtlSxFx%2Bghg5iYW6Qs13jNAz4rcIv4uoU4C9qnjbzFuePncBTjmB4i4l0NRTiIyLpK9P7hdOIMrnZVPNOp2fQM7QzxRtza8cB%2FLWd2qZ6oKTj6hW4uww3SrRI6026W43zqhTbVBp9HQ4DnDvPk2TLn7IToZkB4XUxzGc4ZEx9vCBXqjSg%2Bgh4wZChHQfJ%2BrllSt8%2FYnn3o61HwSKgxWCxHgEVM%2FZ8SKthU0yhyb0lva2cuiL%2B5LjiKaZCa8Kdi5kMV2oE01Jzh3Jr4zZjofWoDkHoX8si3bVFGFVPH9ZAR2amCJPgNKTq9%2Bi38LMU6gCUi5j7DhRrg3SuHnMwMRpfJaRgW%2Bs2TnzcN%2Bq33pcXpJmHdgzVTF6Yw1sIswQhUmsqQsW5sAwaP2rD81A%2FRQXvtBfWdceDWF2x8xCtXykEDdKnhe6wNpQ5H9WuM7G3xMMK25L4GOqUBkyGFU7SVeqHWiRjs49HtaPjtYO%2BrJJD2hF9mcGiNhEhDo25z4IDR%2BdPSQetlv6wD9x5vnDlwMyaCtWeRvTaizeRyvtFBx2g8X70fOmBPGk3%2FPnEGuRq3G8pqbovz728Yn7p4AAoyL49zt2Sx3rSG49cEwlD1laXHoJkkue8c8r2XiJDuq%2BBGADhKnY8UDONAkENzp7CmUd5hJzvo8uL91kgAPRTU&X-Amz-Signature=fab72197b38e4596c8a0daf36e76b1dcd52cea2bddd265b832d828ba89efa9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
