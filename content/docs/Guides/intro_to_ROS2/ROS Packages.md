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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=af444288c84e17c53570bde275cb6963a0d53faabbf987dc716fa82df677eda1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=59897d0aea11e2eb23e83c02308dd7db44245f1e07f4e1e8ed34c6a35a44003a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=8097e40863d21eff8ad13f0b0e61e65a3bc64725409c5ca1eb0b4891fcc3466e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=7df0db22084c6cf74605be1cd7198b45e85d0486acc425d7ceeb51eb58fe68d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=fad3613a8ed1e895cb10b8dfa15b5afca047dc01625ce475584344fadb7b09b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=a064c0c0f9adf59051c672bbf6b43308a1f257dda593a92c92cdc00631cf96d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQULJ2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ4BJjhsZxldJ8I9f2H4RnfGkmLZ7UopDCn1YANpvO%2FwIhALthvW7SDEuNMcI882B7E9eXEyLcOs5E%2B%2B6n5drmmq30KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR9U%2FZeqsruMf%2FeRgq3AOzCfQS9YaV29KCvosd9q7v5PbD6PpTtgCAwExjFxxUxY5CY7ysySzmcm1YNx2E3j0pmoloCil3%2BmnLsmr0Pij4zHZuurZ8Vhur7a4GOr66IR71C3Fy%2FKJdFjEksHXaJwo0sTSxRFMmR2s6Pube%2ByxW8iQFsI5jxSocFgIeFTDrNmKlfRz50YYHtDqqvkE9aqi6HvOCFw1FtFiDIi77kBU3NTBZgp5waGNGwIlt6s4jIQdtVtuiopaIjq4lssG2klFlvkokO4qb%2FKHWLIwZk68YgjSTW%2FMuz%2BRIaLq4H34KVuzoFpXxluCMivUj2RiRekNRg51x59oJ4Z7VUSiRaqWjTud8I1l8D3KieL1e0%2BsqPFJvBLYq03uEcfGq5XeHo8wGZ4el8Uh38m7yM9qlYwvWL8jJbgf04yhFw1e3QeGSqcl5ehJ7aXN5jvGc1wyzmMNCaKegdGk2aEKzTpO6PV09GEug3Wx24M%2BMhVTaEZ9sM3F5Ob7l9XYEaFMsBvvC%2BpYDcZuOHSmrNUq2naZP5HnDZhjoLDzpyTk8co1%2B%2BHhUAdjEWTG4S3mwvaiFGqZM%2BCJnmEk8vgzoNPz5whisDuZy5ryMIEKiBxs1uqxUU%2Fcy1zZfZKi%2Bvk21%2B%2BSlLjDa2IzABjqkAQQCsJeTw3JTbxlia%2BvYDjml3T7EMDvzfNcKqdG9xlqc0j3Fdsk%2FrE94CQc2XhkF%2BZnjvyyLf3wmaU89F6pxYKW%2BVc2YfGnzpqAEjUzVWXqaCYnEytFdO24to9iNDHAuofLUZgfDp4Ruc5hFbq0wkosjcjt9WAq30i11OCtKZCwA1E0dak8hI9HfdrN%2BxrC4TRQLhz2XLthLSD31gnjNO3rEBJ%2BD&X-Amz-Signature=d4e617dc72972d0d59c16b1fae9ac8795cf1f866a1dc1b329e1e96074ce827ff&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
