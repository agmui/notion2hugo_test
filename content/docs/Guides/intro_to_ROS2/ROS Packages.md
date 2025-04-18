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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=b8e6fbc59669e05acd98f684866b5cd59ca196fffc96ab31ac9c9956a196e64c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=000caf14f8849faf32888dc17a52324bbb0c33708acf2e99325e4412c3da11ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=b6216c6473839761a8df1d9e6e80c82d62ed1567dd0b1fc8aca15149e5ae342b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=5e1979737a89ba117f09d7063e35ff3024440113166648627470cb35dff1e97d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=3cdfe8e7a3a63265a034c4562532b934d708098240461bba02d0d5416b8de5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=b19eaa2bb5c9b5c2c8c2d61d622ce90db2723a6ca44fe200aaf78b82e1365b83&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTUYGP2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArAK6skKByQJcedqTu2hym%2FRGFHIUYLCSLgZAdbLikWAiEA0F5Gk%2FQju0fVA%2F1V50wtYi6OYSEXf7%2Brm4%2BmoMAOLLoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCVja42zjKKWSSBRbyrcA03TniXpuL%2B9DmRXyPwwjgGEfzak%2BPrOo%2B5gNWMfUJjSl9A0nECCwfviWK7%2F8Bf9AraY2M9PyMTInt0gyLN28btQb47RkJ6JRDPTaqwGZUhKc%2F%2BDKbvrtUgAtoLcfikZwNRBxYHN1yL5RneHa6M4MdlWmBYnWf%2BZp1Yvwkua2IHooRq2cs5yoE%2FfdtexG3bIVISfI7rMd0vPNuD2DnKIXEPadmXH6ARUreNk2%2FjV40JPlDuyQFAnXplTA1%2FZmEpNsM%2Fk61dbdvQxlxv4Yy2vWH9I0hHwwwPddcUWmVPyYCDyc1Nm0PClA3H0hSX2kRAObL5fFpcYIqD2OA8V1QQTGetJgecVVIBgfJiNsF0XeMTrEc7e8bgC8QnG9W%2BYhHQFmFH2kYsa%2Fl2Lz3ZRLhpnneJZUVHDkxWAoLMxNiprcqom77yZRU0GfDZwz057Fv85xkpTYgdN%2Bp8XKZ%2FMohfSyIIrZoCgE%2Fy92a4XJXHwG580J%2Bcaw21R1vYzg5gc5sKjknvUzDaVjUolISsUJrpS8zDQQRUdMdq%2BcE7qtRYbP0v9XWbPBuzi2nASkRJZ98m1JA6KysdLVseWRwi7jqh85NH31t9SkYi%2BcdPspW6xfiWB6fr8X900i92WpmhiMPXCh8AGOqUBEhGJpg%2B9APN2d6g7FWw2gr731tesGKPNbx45D0QEzB4w9Wb1hEgzftuGy9MBg8csO3cKW7vjpDiiKln1Fp8mg%2F5Rc%2Fee7S6aG%2FQNm06YRleZhwyaLT%2FYTTV9lwpZ5e1JgVvpjNievR%2BqUm99EwZZUAjRKamIED%2FdENSLo%2FJP5UEZh9E%2BJwW7ZoTCYmhmR0o6NY4Ij4A9DIr%2B6wVf1BPgv1wJrFIN&X-Amz-Signature=0588f99e1aa1d24754aa3b02023420eb9a4a6ee8e71713bcd2b5f659d56c9ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
