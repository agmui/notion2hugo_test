---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=15735fc070c369c71627ed396baee30d9a61eb13eddc87798f03b339b0cd1ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=985a49007cbb52f6020d089899b097b0f903b19a205876b383a90df310f2a5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=58a163567b8badeb48867fbe8086080b88d1090f9853aed417a2f0a2850b85eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=c592e6a4036afae2a9a57b56535ba60ed27b9b7c0a74386803009036dff301d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=6fe97df170fc56b2588847c1308c30e83516d608062399976c9b0b607f9288c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=a949c264ca21ea91e7d629c498be7ab67760e9feb39fadb315b47d03003e4ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3Y3H76%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHPX8SgR1z%2FrqdR39AuDmcBQ%2FLZR9hid%2FSb%2FVrg002VAiEAnYLHGHwXoejQXuqnkIhH7s%2BzG8YpQ3P2RHtcF0bJXnkq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPsHWtFauQnnHcukmircA4M%2Blbaep7D9Jj8B9ycRVD8M%2Fkvkae7DxNo9xFiq4H7MStT68kGsmoK%2B4Hg9QMK9SFIV9EUfg6C70v%2F7XFAX%2F3VVQzE4xeQOs%2F5VRxKapVc72Htowgby35QVJSRztySnhQCcoLSUQbnUXoExh3V93IHfN9KrFTK%2ByeThwy4T4wtYIbdipmQYfyJ%2BFOnhfRYvYA0gfdb8QkUr4viSe49LshCe%2Bz5M3dRM4xn3htct%2FxisD6NqNkCe7dH2VKP839dVmC%2F2bEvsUpjeWC%2B1Fw4BxXNC3cp6AwJZfdTA5rTzAj4y1aaxB4GwKfqimByQO%2F5%2BqIHghGotc6cYyxhzTVcfGtzzAYME6b%2Fn4KQl5j76Q92D5Sq%2BCf8A4uk5TqqBBsvhdKlnlNSnm%2F6bfDLRUiWTWXLc%2BYhg0Fzt5br%2Fy1Z9DjLh5HvVAjjUBlQzJn8vaiGE9O1k0mpeSA4vtD6Zo3J3rt%2B9B05x4HGe%2F2Rnrd4y3i5q7bfPVKOy3TPmgi6i4re2oFy1Dy47ZsiQekorloIB4kTK2qmkxHazBJLMOT1b1%2Fxu6pXsM8DSONlNLFfL2VvCsMcVTudZLNYxdASTawds3gUr4BLK7eKMAnpm9uVONx3k%2Bdls%2FLcOXka99ypHMIKRuMQGOqUBCLTpPHBucVllIVbUIDH%2BiaovLdu17%2BgdQHupAMLfn3q7VcPyIjHRxXlqyG6eXswMsFVqfaS3GO6kV8GvYCgJTfj0MrMskrrxUi4IxYPVH7gix6FpfujTF4fgCLLAhtxjSoTdBJvsuDVwFUygkRto1NFQ4BPm2IPoCtHoAuko5E7L5iy8GUHujSU6VQw4ImORJPL84zbBMmwIG%2Bg9z2y69%2FCO%2FXnf&X-Amz-Signature=36413c9b2d2ae59e7730eaafbaf2fe7340dfdc86acc994966f8b6f8ff7b5e5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
