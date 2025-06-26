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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=d1b15773fbc50131b799867be01193845c42024a3395cac3950709dd674e65dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=2e67fccb85fb03cea9f417986e096ed2dd612fd550028c700459f8683bd0697b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=3c36ab104ff8f578b56dba771bd02708384e0101c4d93d362f957f3d14b5c369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=5004c6ee7f6c54c67e74a2a847d2acd3fd20edfa51f69eef1e4d90f5c25b31a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=78fa847ccc6f2e51fb4d757c8f394c2aa55efbe86f0b97ba56fca2accdc7b53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=38af21024afa53ad3e5652300e385e1988df348f229cbc8ff84a698421941d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S236437N%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC%2BR%2FjSGF4KrQEvtM%2FO1iqxQitup4fTd4Rk8woGlZ5auQIhALsCBvNNUNmWAh7oIAjF9wM0ZlUp25qag7hEsMFMRDL4Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxoEJrDpc%2FHQqv33y4q3ANC9NAGwMhF5KqtjJr%2Bm0bakTMW1wOEfy95Ir9QvmzMADGPggEc1bsKbbYJk2ZfjY5coBCvScYOLUITSsRM9O0%2FKYx3sXVmITkJKrUo827ogg5ouRqyXLpUhxUFpQhEt59mzID4RaxwHbJf8boQHbMrFRD1Ah3RKKqYv0QMivlfEtc3YiSKsGmCiR0DxcOZspBHJU14ikkZ7GpbiAJyO34KxTFxHu6TbfZWYPfKIp3Fkmy%2BB2s%2BsMb%2FY19f32VJnFEsYfdX8Xe3dPtBsl3iKzH4RukMDuFGKdoUjXP6qnRMePK5Cz0dXhjObuiTzfjW4d%2FZJUA7Sx4t3DSo%2BR7RqXhSZOrZLyRES97AR1MFITjg3V%2F%2FygKkhDU%2BmrbB6a0hmiqrZ8BDpiNbmtFj4t%2B8ukGlurX2HHh%2BF2W%2Fy9OyBjBsULgycpbWDcCW1LbaFl8g93ULqS%2FiOu6Z0OQYE5KOvQMeKhaYeOfY%2B%2FihjPFmi%2BtUA9k5R1pBf4IWMuil9mQio249OxQB39okgEn4Xl56w2h5OZohC0Be2h86MHpJFHiHYTVM6%2FwV8jd7T9OBVsTCIb%2Bl8dp8huu5bAq2zemY5sYfNqCL8oPBgFyiCXVv%2FefPclytx%2Bz2vfwDpVSMfTCphPbCBjqkAacpKXCbzcbCcTFQWpDvELbSQZWkQliHEPQfbB7wUhDXDgHYJ1rEyD8zrmvlVJUBdYxTq2CCGWTu4IStkDl5x2UF2%2BAQ%2BldQ0ZpwU9MzovWQS4j9CTrzDeqCt8SerLhpXWlRMOI0VMgs1fPeXZL7386puzEpLNwIgpeL%2FuSlRvZew1ABYM3EtNFtuqxvO79XIR569RAqTQ4MAhk1J8AtB5ou%2FDi1&X-Amz-Signature=ba37287b2b5947fc7a92a8c2e826284b1f1dbf88fb2c0308b5cf1c1e87438472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
