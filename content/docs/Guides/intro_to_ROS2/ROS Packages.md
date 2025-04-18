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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=db2ce772b011faa427ce78d043766c44ab58bd579d614c508ee2437b1a3e9674&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=ac5bdc06294ce648d10c56bf46c46c9a08c055f30f27b5a48b5f49dde1f31901&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=7b20f35e1d7806339dde4f885541858b940098e708ead4a3a8c06efb3c76e9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=78a9f959f1a5694e3584e5b8da0cb97d4977b3d815702bb995b69ebdcbbe5cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=4917bc0ccd67f5d5a8713acf4d7219491081eddb2b24ab1a5689780c332f0ace&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=30fc0b2aca74ffe89e38adaeff13616d5a83558a9f0a6e2996a6ceda11e5093b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARYAXRW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjY%2FacHvnYD4WigU%2FMcaVnPNNFUAtsjxd1pvyQMD6asgIhAKQiLfrgZ62zP74vWXSYnBA1y8YrDNGHwnVaFv%2BYQcjSKv8DCG0QABoMNjM3NDIzMTgzODA1Igx7fIXXPZsI4MqKvIMq3AN3X6TDiueG%2BsmlDDC4dFrxpkRHJ4Orx1uM2MpLbc7TDE8MZg6sfCNJjaTi4AhvHoNV%2B7o9yJN%2F4M7PYywlzY5LANlMd4RHuWV4OTQvXBtG%2Fvxa8V2gcOLa%2FncEY%2BXzgZ13NCQkMnBR3jtjtYiEQzRKrJZaIJP6Gv3hwBZ6%2F%2FxCmq2U1Q34V3pwG95Jh7SyO7fv2EkWBkg0yRm6EYdSf9nerusdA8kKawGO5cOUqDUORAdFKncLVubJHJ%2B%2FDsCNojZvSOU%2BqRuYKvTCPi5vrpNsD3WW5UeKkiE4miVlpI3hakuRAusdGDzRKYLfnLTTuQn%2BI3Yes5OKoS0NIWu%2BIvztJSInwt4BMPh87YsbFwMGBqB0YMTf8JVdwVd%2BMuXQAbzZjrVS1cwBoi%2Bpt5AbIuA7c%2Fklfy7xZWB3uNzlyv2gaydjCQgz%2FciuGfm1FHkxUt1nfypDtE8K9zclpQZ4uONYLqwbSBt4mNOcrBhnZDVLXMIyiLoKj1SmkpT1r60c1i%2FVIDgxaYJRaPiJOUWutQN6vTBP5A5VW%2BHzz0sU1AxsU8t%2FLRbQTU5u8uQUkrnMcvF0KcUzuWGZMpRAlJIrLL7R4JtbZesDOcAT4oXUfsNCkCyLZET83a41ZS0jejCdj4fABjqkAbyxNT6z5wWs2%2Bvb3cghI0%2BNcxXcdk6OmDhh%2F7HLid5F99HKHUe%2F3O4yjPXOo0yxP17p4CdnOcgIy%2BtOD30prQGtuVTyI%2FSU8J7pLTiJ2QeAUtYbpzHHIuVR2Zb%2Fz2LW9qg9RO8lroPwxP1wo1qAg5WmSvCfNsfhatHR7RPgknyb2mIP8HsfBqNIdMC8YKfgVOTFCVSwMuMV84%2B9DB8Liz06nvbT&X-Amz-Signature=6b529b771d8aa1e30d8ef5745260602850f1df3dc7a5309951b7c93bc65f47d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
