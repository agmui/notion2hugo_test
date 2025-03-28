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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=0095f10d6d884186be79c7d7f79f4a76af42cb47ac5188bf78c6b9ad993c20fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=23ac41dffab1eedc2c90963844500e75a9b68af191264740cce02d2a2e2ce40e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=c430d50f3f701adafca770e96043fd9b86846c230be6f6762ae402631633dd93&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=931829ba3dab2917bd10eef715e847d6d286a9433ef4ef7c4f208bcc1928b771&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=15f90d203c488465e46d181c578a8bad7dc8f10e7a515ba9b866df6522c1344c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=2843dae33d9d7230263a71aaadd9fec1ce33c8b137099b0297d427e2d1dd8c40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3K3YILB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1QKA4q1zVia2yr8YRcppa7GOOykm8wdKMPoZE7EkXgQIgPIJf8mmKYlfdgpMhbV1DBO1r%2BWIIvx40JXn8bAKVnaQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEXHiMSny8Bpm%2BBtVCrcA6YW%2F8v4MN68LeeEJvKPMNitF6F%2F3cyzGCGzhYqfcLWkFQ15DvQh18eC4XPjq1r5RmxeibtOHOSy6iFLm0d%2FKbcTtA65NnXAp40bcV87smE3daadcokOUEvrxciu7eLr1g1vJg%2Fxn2WeTUzHdnjIT%2BGm%2BSmesJwdDiVuTOfzwCQj%2F6NlHLOeiyn59kWnBWeYsHI73k5XMMto5vBIHc13QV2P4ttnapVTvBRmVhIKnD%2FJuAyNHCjh3ij9bAxvbEUI8cElNRiQWAEOuN7wA5U39mcA1xtd1gnZy5D0pNsa%2FRS87NkS6GHTs%2BsW1E7HcgypTyt3ex6jjkK3VUZ8HWGZ5REITH6TIL5wAcbebHi1fi0PqSfJpNVbGbNv3MTTuTWZAqBg0a1yAEUYFxhG7SfidEaoyXENCw16%2FcEbsrj3Uu%2B0Q7X2W1RD0ynCez%2BmDAK1w9nRE%2BjbDT9NmuKcTKtTsPywdl0dHflwyPcOHoD%2BgBnM8f6uAuKjNEvunNq9%2FkDfOqz2ledavYqRdR8I5gotNEGRhXH3mCGIvwyKiXGbLX7eGI0rgB9SJViNhxCXxIGobsqeIzqdbl5mM479OxHtq%2FCUvwCGqYq2nbxiqQ9WKoD778sGB5Sa1rBeCSE1MI%2Fumr8GOqUBh3oyfBOs%2FeyS%2BjltasF%2B%2Fd7HkSkuQ7r0opjxI7omHlCb8swJ3bd%2FTK89mO9ET9NuRE3sowO8dHo3deFmPLD4eSRIuIOX4HyvAxZVxAQldAvDyeBmpEWz7lq%2BRIC3ihTjc2MpImlyccezUgiun59w2L5KL0WrplfSmGbdycTX5JaIJjxMMTHXWBtVYljGDL6ilkLDk9pPEQ4h69CfFBAlwpglsqu%2F&X-Amz-Signature=870d8872173bf0966e1811cedbb2b03446ce69b0a83e6082643ae0cf37b2c949&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
