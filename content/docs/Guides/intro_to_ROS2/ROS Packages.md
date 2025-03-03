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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=45df73453d1083b0728214b22f73cc99ac8abbaf6f1a7c4a64cc4f85ce9689ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=ecff6b4a70211b567804115b64f6aad64e11e8b1e4922d8687dce800ea2f5459&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=f3c94567c1323dcdebe69dcc11cdd81401e6f4f282da871cf41a7942bd494577&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=11ad36553dd724327ce8894e568e72a3b03eb9446900a6651374d6320a41a1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=31935dc6aba23595ff20d1445b82863a624e4ecceb10798ef4a8e834baabd058&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=064419dce324fe0c6c0bda9f81ccee38ec32fa6d7a2766967575035895a5c1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKJ5AIS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6x7868D4XyXLm3RtU0DS9dn8ZKyJnKbOnq9Txj3QJZgIhAPAjFV7srkCOMoicxMgqZk7l04dczCXXgamxAnOPcK5VKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BFvkWxB5HsN8DO9Aq3AMjBKQj5W9pO6BWgkq6VCtkOuP76bwMv37CIeVzWpf%2B7tVs5fhVvB7qH3EFBP4UqIBJs0wnXpoMjlVI1eJYjrgJKUuOeIB%2BIOHhfU6fUYz56ebZPEKedy3YarAi%2FfxVcBBJOy0NtcnV8vP%2BRgCaCaXKH%2FQHLjCeZsLcFkuslvt%2Fcjf%2B6fN8GX3ZrGP3hjf7zAEhPcgz2VPgMqLO3KnP%2FJ4tA%2BICe58ZA%2BN4xcW29DDpv01Mbs59DsplrGiSDRWm7lhOchuyajiV8UTQQ5eNAh7pyBz6X%2BlcuC3QiAE7%2FVan0kn0%2BLpS5OEy8KwOIyYIQODusft3tFskFacD8K%2FdanB1hJbJyx59tBFoz%2Byce4YfVJU0YEd554YfI2yzj4WxetjbDGnX8D5Rmfj59%2FwwjTRD9oXOBj8Vtgv5qfprXEK1lxpoVBhtywiyzGCfiixeMhwHZCeMH0It2eZucWBbWe7xfMR9yz2EyB426cvuVoDios59p2WY6eHqmDjGRq%2B9KpatZI3ftEvY8lf5QO%2F2e1zL84GTPYG563%2B9Q1Yk6Mcg3OJXnaBAf7qnD6Y7PQrSRLkt6YM05C54uUbiSie%2BeuX0kBwXM3j%2Fi%2BjpzI126VOkfQz3qoimBF%2BT8T9COTD32Za%2BBjqkAX4wIJ8BIjJqHqaADrrCmgSMCuDXGlqL8A7WZ%2BkORm8KdrtVnxhi7%2FPUOnTcDtN2dPt5Zu10fYu7I43c45d6dmLMuRay4N%2F4ThVoYTpHEO7YVOF8c9SpL1BkMcFcObByQrQhEMeI7Wgjl%2FEYDrEsTMe9WSJeeriUXLFbTH9G89a8kpn0C%2BJT6a9%2B0ysQ%2BPMzyP6%2F9qd03%2Fm5UGEwlbMV6jeuumTs&X-Amz-Signature=a087668e6d5070372dc8099b367d855773a1e52dcb2d9b6cff176497978a5466&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
