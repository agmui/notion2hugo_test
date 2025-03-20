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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=c6e630751f927e4741463062cf766fe3200f3825e0e702c5cca53081830853f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=0fb1545e58ed38fc373988a5334800035a9fcbb001b96a8d3291372b3a82c8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=ae5837f906f1935702dc3f35b9ad62fc455a88c1069b01780f5245a0502ae1ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=c1552d198ff2d5ff54a520968dcd2489ef7688f284f728e756d89ec58940ed00&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=acd9c0ab264f2df9669eae1323ef364d39810b9531ce3123190042367df2b472&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=72bb4e70663697c3883a1f18d17509afdb1ac1c302767ba614886ee6f9294145&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGQEFTP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHZF4xfU1MkGbLokuLd4lhI9CqHS73S%2BhMEjcUXAJJOaAiEAzXEyCMyD%2BvJsYMyEda99MXGMl0CXYlBvcdsf6pZ2%2F9IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf8yUcl%2B8fEmsffzSrcA4mR%2FJZ5I0G9LM7KI98nFuvHGP270as%2FAFl1intG4gHlgCNmmZhDbmi%2BPMgg9wsbSSMP7nxGWBlpUCkiT5Ik5An2wtw7uIugCbpZgNi%2FSFGUOCglPd%2F03qyw0jZ7rB0dGdYVZ2TEU4nUkN3zyxfZVLzHPt7tX6%2BZtnPgrR8MGqHNd6XPFWIX%2FXuWtwDae537ICvVeMpY4T0eUO%2F16VPXmfcw%2BXbcB3BHMTBW4fm3R2BtUXa4Uj8YRx7AB1AkSBAWfhdWKqPgGT2r7%2F8fTnpAcfH81i5nd3je6YrNMaXBg1TA03Nbx4RmG%2BikTeQgCvdJHaV%2B2nFl85pfvcOrvAspZPn5JM78IEt77pLYp1y2Kp8uRUSPh8xRwC3lQ7M9jw5EhQSjVNa%2F3NZweYuJlsPvjhh4UIO%2Fb8KXhiktv6WycUQmltuW6SRmY0uCWYsP9wJo9NoW4kVemJRbjAbiYlv7nGF9awkK729IegDVP3zvmZlPGP5UQUgpoBLsFxhtlyXVt%2BrccxTF%2F5tdU3Gf4%2Bu9%2BRbSTYlFQtnVXe%2BJ83QG23C8rdKLYdn1Y%2BbOpabe4v%2BuVB5uLFVy%2FMCqmCBAQx7fBGz1BYSk61yS3u7bx58bLSt0swq%2BoDMVSHyoUaDZMOuG8r4GOqUBZnckUivUwRelFoQDstuDz3YttRDhgZfa6kDt5mHIYGTSs5OA5MtTsosJFntW3by8sNZaHmUphK1zndrA1el%2Bzxf8cMajspVsWy04rFvFtPElqAsfDVk%2BFf%2FjtNgJwOW0L%2FF321PkdTaZb4koHvBtbl9kBvx7tSxoPXyu3BxjfLFXkVc%2F7Z1M5jO4jJNTYQQ0Q5uk5AZiA9abm7Xv1Z%2F0BSqrAjtX&X-Amz-Signature=7a0271c90849581162a2a601a56fcdc25741b393f03cfb108c23dfef672ba5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
