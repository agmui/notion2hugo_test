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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=530026db33842861176fad0fee51aa77016f299f2ff40186f336274e72c45bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=7dea0ea1dcc86ecd86cf1d661a91762517fff2813355a6aa3a9f7a5c245c93ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=943cdc36cfb70572dea379ba6bcb0f7a60fc7d43f4e3ae9834bc1596a408346d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=34b19c54dcd406845110d419cd610f5dcbb54ec49f3c0269838d8a4659317223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=2159f14c0bbfc9cc688e627a3de95b4b30370c66bf8cdd566cf0e98b307bb15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=761ecb718eda1e6620585c0af3d467701509f6d903d5b07a01904290dd292978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKI6ISD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGeJrUiSUmyNuTZRla1jovtF0jMxcPnatU79qQqWmy%2FnAiEAnuN1J73119shghhBRuqY%2Bh9%2BNXqFjRy6oEuGXFwbEUoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIe6M2hiJ20KM2%2Bn5yrcA9Zljx8a5dm21tDnH%2FlLgrV8Zf%2Fa60Rvu1sZrJHtqIOdo5LUowfwKPLMCiQepZG79Ev34iLeyVYVxlV8FvtmohOb7yZ8N9ecqSOFq7hhwXBsAlDw0%2FHzmrXLBW41kbyyQ9L77jzBEYEPTsczgFFzWMyNmMjuMYrbV3iy2Hq0haRdCuM4Z0sf6QUUlbyMvCGDnSMYXXfJ%2Bh6T03YPE5hrmVrXd%2B0PYfrOjBxE2Y7T25qvkD1msgxqY1Tm1lchpNvmtst2i2tzdS16MhYmGr%2FtW6F%2Fol4Iv8GCdmtX%2FYhCOjhASyVdtRwickr%2BkdSdaNSl6%2FkX2uTjDDpiWuKWYTAa285pKBIGsKZ5MeEXs%2Be7rSg2zgUtreE1xEAxCE%2FgF3%2BTTkdgc9LVkQp%2Bhg%2Frn3ai3wSoHFfrA0z9qYnyofM6B9J1NiIQ3Xm5JP%2FyIF89RhBW1Q1PPn0gFmfNXPV%2FnKyB6Qf%2F94QoRkFvGY5bpcruLg7Ua1hLugb2qFsTa1j%2FrA2iOFnFtalGPhBcNELUtFAlJHev3pQMEp06YCg2I4AWOgTlPcP%2BjFJl%2BdeuOeGHSIGRUIVPFxhmmIc1QGkcgYuED1uEnppvG9o2kEgoVazunqtOe6TdNRE0nBBIXYfLMKOP28IGOqUB0DrJvcIWrBExIhD9mCa2cyq5SDH9Q5JxI%2BtrffrdXqt0rc%2FNN3c6Ek1l5NNG2U2hseg3t9UaClWErre4gfnLvw9t4L8zIRDtxHPYAHmeNFfcFEE9n8E0rGfClZRPM8GIvDJ3bwOSStyPimmVwk7tekUCT7uI5K%2BU8sv2DskwH0asHCh3wOH6koDsjaLTS%2Fu66sZzEFsYubkwnJrXVeGCKc5UgSRw&X-Amz-Signature=06b4a3d2103fb61d7888b58b08f88882889942b02e83ef3e599c4ac3ef8918d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
