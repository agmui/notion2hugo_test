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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=bc2f5686ef4e9ddf043e0cba18f88e68ed9c95895b99dfd2a1ffaf09baa3dadb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=c8bab57213dd06abd6807e6a8453c6aa9ebccb151a898fa8134d4bf3a81caf40&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=0ce293b35654fcfb4956082629a73813417cc6c220474b4d7b443486d23023ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=25a7baa648794fc18c6d085940a82df29bc4f4b44439ba2fd46f1871e91bddcf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=2a1ea664f3720875bba3bbbdd986be3d7b01c756d3ab4112172744aecc3336fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=aec2cff6c3374af20ba786d973d5bb449dd4fd13212ea934d408aeb46a332f40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY5ZEVH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4O23mzQJhcKVZJiEqSBaQaH%2FQ%2FwFULLr0feY%2Fu2IzAiEAqgJVetBCHrNT725JxIE4clDYoTIDmNK1hOVd%2FKQQsqwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEUGjw7T5URhsGBUSircA9LJtZCCP3v9qFJKjrBHFe%2B6uR%2BBK6nmdOOJ5d13uydkQzvGWRsg4ocW2kOYIAWG2NsA%2FoaweEX8PUNXloHprPuxNQQpTPajn7rHzLiBV1IItl%2FpdVaN7KCltTxcYAFbCzAKpuNsDHLa8t9tcYGbxLNsjVHjScuZ67RokEGMTC1XRRnxIe2%2BTeC8Lx%2FCLV2a%2BW1jlJle6Ru8HjhuXxjWgVA5e72BMligquAKuf9Th8R0fn1C%2Fn5LOZW5ksDsLn9IfXV56JsYY7kx5EE%2Bt%2BB3G%2FWIKBxXBkl7VfWtdOiNt3%2B7mlVNukfrlDXslBPQaYQXe%2BlVne1arwgLu%2FTcJ5mCVLnvogtr0Igsdb1yKHeqaWuQymdd4RAIJ1UP5eLvBXBjkvgHHD3f0wAIVj9SP%2F0UKpWnM1PKbSUFbsHn0MaOm1WnfWLzFX4Dt7DDtsVdbL5nptNmsbPwzRNjZfE%2BhOLcu3zjKJ9JrPdeXN2Wk8M6T0lCClzFcsmlr%2B2%2FaRf9VUGkhKcsMsLSbx4tAYCc7ujyqm9xg8zGWgGxoIz6OEj%2FiWSbPfchFy2uW1VbGHgaKJB3QbsDt8OCC5%2FTfoeA9QMWZQpzXnVkFxIJ5dfMZ2kZUdUNRadABMLV4Ds%2B2UaXMPyr4L4GOqUBXSPLUhX8vfgw8Jqve%2Bl4sb2r0lzl84HE3bX5%2FS7iX%2F2URaOiC4LO6WZAx0hG1W%2FhnGecQoDB2uCoGOnPfYr8Mt25o5Y%2Bo9ytH4M9puAnleOdPOm1%2B%2BoJbTkDm6QaTCrePVtku9sediU11CEB%2FKcKcMRGCVAKZeukADFCt6PXc1PmcLWszTFrun%2BDflGw7d2rgi9VtfcszHcy8Ug7OoS1%2BzR14%2Fh4&X-Amz-Signature=cd4ec19dceae41f65d273c9968e451add57f4c47719e01714ad9d7b427d68367&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
