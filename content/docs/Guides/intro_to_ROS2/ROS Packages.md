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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=946d52c41ae7ef355b9a7a368a1fd653037eccd90626a5a08f102fc5d62a5d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=da434cc6128ba819853be5f8cdcc2b808db9b389df55756c29ea9b48ee598e31&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=7a6c2c4a05e2b81ab7e7f5873b7a788da98699043871a5b2d736941d756921fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=f65eeb6f8d5deb0414efc9f0b7df52165b53259729a8ef8d5ec135c9e727eae0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=5137ba4ef63c74eb32b6fb45193439faa03142ee90bb00542abe46f38f325733&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=5dc544ebe02187ee1924e7624f70dadd99cf9537f48327ecf9fd8f638832a7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7U7EZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUfpqbs9ff6RGXYD3HxXtvsmvkyFvGMzcDTXEwTg8iyQIhAJSTyi%2BzvzH%2FfiL9H07IZ8dhoO6nm1wUE3tMXZr8h8PvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNqFWt8Du5KjcVAnAq3APALeoLs8fZeHW%2FP32J%2F3uo9ilV%2BDc%2F2g1DjVn52KHoNA6OaNTfKlO%2FCW9xPGyolOE2D51VfvpMdfK7d%2BEx5XMD%2BWhPFm14WkVlvmYvG0cYNAVhRRinkEmVMf3CJNU9eCmavE6Hm%2B15myFRr%2BlwgLT01OjGrDI9MNzXiZfGx7wayCDeFmXSU63kk4kv6MzKz%2F5GacTva5PsRIXWcqNPE35CkuGQ3A23ddlGJlehJH9xXf%2Ft%2B0t3G5qskEG0ArAbXNBiQUwcvddu3cMna4WpjPpOrTqa34OmC7%2FX88rwaVDHnmTtA0JLQ17DbNRFT6Xfb8JOjpRMTiOsR1%2FkS3oJP%2BBiw9ynftxt5Ne0aodSDveVEcgiYMmUhzlijFoL2KkWf8hK2gZrAYfdpDgcuHZ1aPMrGooqr6LaIQi4B3SDgTCf%2Fv10pLsm%2FwmQ1Vyws3b3NWWlp4SlhoKznAQQZKRb9CcMgG3G1OqahxgrCKrgEoWpCRsF8Ij84c3VR%2FnE%2BQIvIM80WI8bRQZHdubvDKoXWlw1sm8V8nNHPK3XJ79wbfwe92pYnrdiy6fxhbcPe1wgkKqy%2FHzxPkJeSohwVZ1ZhGXF2ZhalJERzrrfaP8ku9poBFD%2Fw3uA5XCMLGVcMTCSy6%2FBBjqkAb%2B%2B%2BdwlZ6aKnJN8291jrFSU6kg7WMa4GN6zp5Mal56hGqU4WfheDCZcldn6cLI74h4xv9WfA1iZr%2BO%2BDW6irxisK8asZdttFaJB2%2F7mmz02FfBT46o%2Fh6o9aYnrO27GBfuRoCXPu78MhgxtCMP8miAwSfoOqwBKXcY500j26MlwJ9qxk%2F1U2LMfsC12BPZR6M6hHYnVmSkx8l8ySLU%2B7V1fTHVy&X-Amz-Signature=f08a3ada7e3bc50cf907cc9b53cd2cef65a21b75caa37cdf9d27b495d2b4edb1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
