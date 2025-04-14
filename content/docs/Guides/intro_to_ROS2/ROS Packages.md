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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=35d5287145e9502ecc31a388bb7560cb85c921cd6f2418f5f5ace05dd456e3db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=1d7306ab1f226f0685b2c20b2cbd1cea04fa7039264f2ee0cdcc10bab4b87ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=d09c667c1ff6e665795c6db44ac1fefb363198b2690853f55e276aee7b82edd6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=e755c63964a4b71254b7a9b189abf912b4982424e8a9dab23735222e7dabf695&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=0e6bc34eafde89161efabb01a60ee7ad0750db40ce7e67008856aa4db2d6e3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=6acf1646570f4a406e0ea5019b3acfdfea2fc2c772fb417f676b53ea79f8fa25&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV2RG6N%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rfDaDFQ%2ByJ2X6yYGErQO8xh9Vx%2BDusaUmdKh5BLixQIgJP97kr0PC2CUMJ1WzaqYKT%2BLi8T4aPibHgzKmimqJpkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMcN2ytaGv50%2FSoIiyrcA3GRi9uOH75YBwZppfDftXeO%2Be1vmta6Ikf%2FdmvUkxa4XwBEcWbvVJ1r8vkDVyneewvuhsMWh9ccFbPw%2FfbBfGDdxXxLsHnfVgbH9knHdP7XVw%2Bzbldjmwl3r%2FYMEwazDmBaolOoT0tevpuXov5hubhgLm1MYiTJtS7g9ukFu0sF7GQuxMx3E1InMsy51ss6cdK8YHBNmTBWNRL2Q20ET8Iw1VZh34P3lrvIpe2xc1BrjCVZD6fqM2M0blwtFWcv2GTVx1DIX7KVfgULdUHToptGLwazMxjIitFV38KeUpuTfQ0Qij9MC96LnO%2FIKX8LHA5DZEr8A%2FmaY0uOJfGu9cJl08poFY%2Bx7Bb3EPDW3jWMCVU976l%2FCsUHiDdIlr03tN6GN1GrVq7h9A7%2BfSuk0DTnzQPD0VEV%2FzkzUSdu8TvSgJ845O%2BbvViZAZXD4MkNwfJwvtf3pEi%2BlA6k5fPRXYknE4v1xmvZU33mvxxS%2B7Ysel9WkYGkqTUVcyU7I5Irc57BF37dm3w3O031XeBjUtB0rrq%2FTkDmlEE0X35M1uuYDyARE8EZodd%2Fr4G80l%2FmmTSLR%2Bd2WaIkOi9c%2BqCZUjnGEUdg4tH6evji0KrZrL43L3WbEGfFr%2BhjgGJGMK2n878GOqUBD1A6NzwRUTZNFYUGzE44wNvjk8yFfATjjbmd3CAByncjE%2B2PcN3WF%2FtuPMlU%2FpucJVXY97F%2B0z4FmkBQaV2LXk5fGrnptdvWkLRwezek4l%2Bn4VQSaVSNGsM1w4HXDi6HiqM2n5ZNovUJXEUxgqpZki53DaDvfJccxWRDdpisAHRI3J%2F%2FUFSPUSe%2Fa7xZbMTzzFFXYRrWIZqFywpx6wLDBplJ%2Bnq1&X-Amz-Signature=f858f6f169818dfe04139c2df0f83f02fdce77a8488b517a378ae6a505ce8ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
