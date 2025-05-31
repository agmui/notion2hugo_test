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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=69ba543fce7392a3f3d794a05c1a5a707578c7ed3963dbeccab98fe2bb859104&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=3f32d450b4a264fe29bda5e706f20fa01d43a085459ee9cd3bd72e6a15f1d8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=8aba4d5205a0aa71e6a81e56316db17a6bf68426ab8a31158dac91a85f3edede&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=3432fe1e7f6bbac5e826a8ddbda802c9954682098f4983d2edcc144b5cee61c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=bb0bc9405c5a9e53f2419ea6e4d6231973bcad192891d3ea89c51ca005b22cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=b4e4c3602911eb2c5d5fd2b0934fdb22463770b628eb89aecd0e3b76fc545aba&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FR6S7V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWPo57SxmMEY2ZIayZKMVp1xc8bcwCHcEVBht8oBrPZAiBFfCsmxLLoA7%2FXvYOzrhDLTBLyuKuSIsELkAvnfmO4WSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9fMVjaUhK7CFVyXKtwDOJUQCeH73YFdtP7xaicBrv1EqxciTbBHhx5ImvNfmR8POpy%2BTyjq51yJhuPF4N6iPIQbuD91EHySCZVtIn6%2Bx1gxIU9%2BR5ssFDUxJjSHjZ5GeUhWJm0ziyvbpTYarE%2FX0IN8g8O4Vsm4EgFHnM0IKgbDfSfiBZEDO%2Fj1y4ck2HNu3th4u8F1ZcTScCuf5gnCULxQLEJ%2Ft6UI5hf7wh4VNPQzwNKnuNolEhEhVG2UCGyFEyfBUfuXCmuICBvJxgqg6Oj%2BdeDUJlwgtRX98vkaUyUweJsAeu9bCWmNkywX3Ir5LcN9qJ2Q71ZHpLI3RAIYH%2BzFS7MqznhRULVQsOwhxHlKDIW5n2yiEYj5MuXgoPSjjRg6vgiYjQgkpOk2Kffj6yO5Uuwwl13uVoynf5iiz3Iom7%2BBB9aolmTKt%2B1bASTXo%2Btwt2FbfTWEnUkzG0IW2CDcMALhZQdMpufG1igSOnwHdMqpBu%2FUZb9YtaMpTMx3ZECHvBSwV1i94O5Sp4l57Eu4Ygg%2BpaUx2lOUyLJFwF8zs2%2BEIOENITvzx3gyQ2Vq4LnMFNdMyTf70XjJecetYI%2BB4zaIhMPqt5dqy7%2ByTHAEouTqeUmELHvF2WnjhFScJpxPwnVYydr9ICowwJfpwQY6pgF7SJxlRsMSaMPm4hHXUa9bbFIjvORFQR6FZHSl87Ml%2BxxcDWZN0W%2BrxMIji9eez7JkJSaoh6XyuP%2BXp2WcaVwZAXpc0lSj1OUQfP07ydXdE5sdVa49h0baVWke5jZvK1jwNzDtF4FmHffrIZXt5olORVNdSC%2BqeoaWYo7CqIY5GMWOTI00uNllcX3l5FS8Ux3r4RTyZ41Xoq4EUemJxiS5NIrCy%2FGA&X-Amz-Signature=0d81d6efa641fa7a7900283d7b39cc544f6dcd96fe9a2dc7759c731b7d2d31bc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
