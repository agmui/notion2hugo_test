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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=9dcdfc11f831c9cea4db41746faa4898e8b7f14646e26ec65e03e3a17bf21631&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=d54ba62a85974075d697f0eccf1d2186b8bad5250df4a193ba3d3105b3f69731&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=747e60454557571318c056c3d483a3a33a1da535b19dbfdbcee08078e6a6f7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=2f89632a2b79d5a41e1595d0f404b19153681bb14d4ef93aeacc09f9c6889bab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=f97c1ec476e72d6492185ee33ba6eeb10b9c567a2ee60296ed18754795be4379&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=9fb6428d64b10a387efe3bcbcdf1ec2392f801c54d3431b5fdd8293e32aee959&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLF452R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6H6TNHIC1dJPReWRIMJnvc03IwNL7N1BZKKu9b6x8wIhAPPCIxls1W82mb41Tm1457JB09fpI4UsAvWK2fpI3go5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxJLI3y3rwprOogAoq3AONvOrVtJBUnYGfhRagAmYosu8cbMpRI71ny9xX7c1LPULUMFNQN1dvbiHodqCoUOowsF408VyK74xad1sW8DAJ0baKlCRV03A4%2F0KaXJoQR9RdM5XFY65nVmS9t%2FDDjOXYwDtHEhaVbtvAC09xijwEVKyX56bQQEdhu7OpzZ8BfHm3SzhfGIP3nzI39bdZV09b0h2VZtuI1VOTIvX7G%2FkpuqYrMOQXLHLqZkGQxIdSXS3aHK7whIUJApoq2SiNwmoNntS9wuY8rArhmsSGlzN9I5%2B19rRxsqKsR9vPu4HzhNaXvuFEzjZR%2BI5Y32cRf30AEw8A1qAJHm1pqI7HM5gUJljw2oBVwMXXShnnRE0ILziAppessc7Q8HDFlN7q31h2eJCYnVIcVJhj0E5d%2BPnsZlNN7uMrdydy%2FXVcI7%2BfvVSRFFM5uh0rf2DlwZEIfxgWc1t5Rge9Ac%2FwAU5MnTR0J72PaXXhcvwao0EQn3J93oQCbc6f9vxXum4Iu1hiR9NtmPCpTE7aqXx31DXMEsCgtcFtj26kpKxQhM%2FYa2PXxbH37FPgUVTup5BLGTb1Ba%2BkO%2FJy35HwoB%2BQFMpw5aQz2YGXtatT8W460Nt%2FJ4CDBRh9bwo8LazrHqBMOTCT35%2FCBjqkAeydyfTyx3PkiT44RM44rr2HEvcc4miFBmsaExud25BkSr%2B%2BlKTkdu2MhEu7%2BS44vZdju1Xx3NM9WgtUsrYi3X7LcyE1g4m9BWtwQ5re2QxZY4eJPQ%2BuXeI2AdmMPdOhStNKu%2FuZypPZEkuz4%2Fo1HwpHTQ3AujBQQqTq7b%2BxAQ3k58Zc42ngUISIpdiOeku1OH0LiSD9L%2F9i63N%2FLR%2FjYHYG6EVo&X-Amz-Signature=109100e5e4cdf20877ce5de227e4430293496089b5275a206e3a97e6fb0596b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
