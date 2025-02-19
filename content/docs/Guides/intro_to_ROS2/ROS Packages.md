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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=e85467877dae256cadfea99edf8765385a658de07e5a1b0e79bae726a24f5613&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=ee43cd88e4199c065115e534f7eb491387c8b77f1bf35e1158526c82b8af743f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=314655bf1589d6101f17ee4da8abfb35e93e2a28f1aceb1690695b71e863d3e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=cb102f8ef6639a31d475d19e70c974019528d623f0e6ce6229997e90c1ffa95d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=ddc253683ea5f242da23d00c96437f4b88e3cb4536ac45c252a70d45fcdf727d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=ce89857181e68e3be1a92fad84671d58dfa5f231032042196106cacb721b2f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH44PWW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC%2BpNdvRVWJNTyPkcIDM%2BIOdBYdelWX74FDkG3Ne%2FLf4gIgGvIscKDD3LsQF2myyuosHXKGRRo4B8yJxZqvsODV1rAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjvm7GJHB6lQJNQFircA65ErZuikIAzO3N%2FjrTRQTvoe3DpuPi5hoTlbG1gpX%2Fj3DoepoeB7PbWpVltLZu7w4gMnlJ2i%2F2P8ysg0suAiaAapS8CeUBBVdUbdXGG5clJTpBWlmULeTzlCEXtKEtS4GSlz6KVR1o30LqGQl3wDOgLard7F1iTvQm2PB%2Fcn0HFZWdg0Wd0vb1rBebluILElWwYvYAtPM7QtXU2SMxR7g8VBl8Jr1rMDA7%2FChRx07W9MWbUS30M5cOqaN5Pv7bel3q4llWKB1lKSrv5e4KtF%2FfLW4F1FXguC7Y01xWyjwIcdD8EhMr945CPuemNVgj3mGt%2B553dUGgEfIZzrCNMinOP7jPf2xQGmd9aOuSNtAs3B9GgpyDck62d4Iq1iSXeypcN27UqIFYZsVhIgApunFxdhmyRVl8i01Y7B6WNhcXJBzSj%2BKRbn4DW8F3Ifk8RHvq%2FWp0zRN82e%2FBYBoxL9eq7jHGVpQB8FsYhXzhOIgVkvOvBLZAXhhEHafAhDG2s91kthEtXv4cdsECBBZa7byN9HAfaIlDQOhpcJCmX9oyBlB8dfYaqqb6U5M9fpYmjm5k3ZBHohFXjPWM6mdz4Ra1kfK4XnQrH5voaDIgY9qGyVPGggo5I6cSpxgtYMNf61r0GOqUBUUiB06wCp8TybJp0SzuRbnDbZO6iacepRIMoLWKEKEbCLnob%2FCBBqxYLPaCtKE3c7fW1wY5L%2Fq0cC5ZuSBU04oL2WcssFp%2BhjVubbTxIEhmt%2FT3kIM0M%2BB7FbsxOYggdqSI1%2BPrAOabpW0nAf0v39OxilDF%2F8IXDyvFtCvUDwyp69YpVSvICUNwlBKeD0CQmWVlu5vBW%2FpTxsPcgXMeI9BRoVsNx&X-Amz-Signature=802535ca37d68a5a2879e11144bc6f6aa0b1e7d190771d06fced2b7c39f5e1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
