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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=7f57f2125f65125f00170d62631502eb270d2bbf2fc247eb6e36107f620b1ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=13ce83493700cb77ec32330f1c3ec5d73d4a6517aa0f9f8f7bf5ee9333ee1072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=94f567a67eb2ce0cab3667de28c2fedb9f2c40c4276e2a0c8ffdb11423b0fe3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=0c1c054ac362a4a599bf75d5af2e9908d6b3d1a279d6f0610c0ff422f9b5ba6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=cd011203fd24a096e9a0bb2f25b7bb89b315d79bd396347de926a068ad6b5076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=18c34524c7ddd01a4b9c113379db15dfb49f83d1c242184b04a61e202e7cb3e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XXJFBIN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCM7wfEI%2FQeuqdrnaG7a78MjnKrIjjfz84dYn6SILfQQgIhAKdIyg79btNEEOh%2BWSboM26K9BJpuJkgYL6PcTvnLx1RKv8DCEQQABoMNjM3NDIzMTgzODA1IgyovgRrsCxSUBrPgEUq3AP%2FPP5xQtqU6x6MCvKbmDVyvotQ26rA2CCVzURxk%2FSq56xkIKigEmG%2F1yTuFPZ%2FP6YZ6AvY0%2BC5tO1g8mmEqTzsk7Y%2F6cNZb9ekSXtpkhw5kl1WQAOV1xPlym72MEUpU0goh%2FtCfVK2Q5vQrIl3nLxoXsd%2F7tUixithNWPxjpz%2FSS73gYlqTIb51uflC5OxZoiF5dZUpkA1j4YSXvLAnFN4RNSXn7TPoULfIGNGFCxFjuL5n69g2Ml2BpcsXgEuc48pZydYWMRSxAZFLv9nRXbv71%2BsbUIZHcJ1lAy9HE5cFGHsfLZB4I8xzLFYyumCU7mSkJSs3PUQrjiKcl%2FNAQd8MQTyQXun8KEGlMIKqcuEatpTLmjFV5IsYzCYHt1GCotsNhpbEx7AE4LAyOKcBUERomBDq8abUn%2FnzNc8K0NDhGj3fKvWfNbrQMpk9yhZYiiOZQNVcUb8coAQO1iy9pSbIG%2BajAqY4niqymE1MMRQYfSS5zce%2B9ClcyyMC1pozS%2FHInX0IoN8GslV0PXTJ1ODfcfJ9oXWkFsQ5a9Thvkjo1PbAJsJjP2YLNxLWxCH90JhY5lQ9HKyDiMJdeX6Lku8KhW1n2Il8Z5DXFJw4GOrGEZe5HCeeuivTfUnYTCU2djDBjqkAVWJYd5ACw07pWbyKqMsuX%2FNWYI0%2F3Tm1eklgjJbkVvlWTdQTgL5c20JpAuRHipTBEoi%2BH4mLIE4epSB3PRX5JOM0UxWxcnqeqa9NCmWBLGMZU%2BHizQ8vga8Qd%2BnNGlFbCV86%2BgDGpFMvzdnj3d%2B5DzxNB8De6KKa50KcICBPu4KG1h1nZ3q%2F5ZDaLrjeHWmR8JDjRmQOgVxOsXSecHMdR4O5PAV&X-Amz-Signature=0776fb2fbd72ec6d13730386f927463d72a83aa76572271ca45f8a979252eb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
