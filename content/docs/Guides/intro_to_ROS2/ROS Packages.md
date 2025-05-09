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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=e6039cdcf6263f773f6933946766cf04717f55133711b85f7f5f46c85d1fbc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=1a2748f595d7549532feaddd521ec4e8988f84cf498e5ad5a3150a2f1f972dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=f525098e686712bdf5393769e7d1e3093c711b720ecd1ba9dd738f7b82c14590&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=f4a6e5bee005ff5d74d17924a7189a8cf2571e229298b5956161758a3dcfe11c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=871b8e8b98922f51f65270024135d2376c1e438f427f7308903f8db8e8683b85&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=5b65464beea761d874a3a0b8d43b8a61b74d849287213b8220a71794aa951689&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DO7QSKJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBY4MVrOKmCsKFPaiwelJKlSPQFDLYi%2BjS9sQrOPcrAiAeoPbt1dqda33qe2n3rrgI84huXEYPSRY%2FYdSroYDLBCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk4Z%2BEzjS45nv0IuzKtwDSBc8gK%2BJgLT0vAjxO4nceP4OXXXoocCjMVCo4s3AgXylfsxiG3zFN%2FTKQkoGfz%2FewdbfXRoRYFwrxmJxe0n7HqjyxwKTzHDZXc0W2p5SKkWDOQLzYPz1ey%2BVxt4iQgTJmmusAcyvYcOWnA8Bzl9B4qjnnDKvnBtBbuKQX0TV%2FIwPd%2BFYB86EEMRxNOlF4ugRa91xLdX9AGpLFeC6tCdSA0txBOQ50lEzel4RPA7Pa0RThjk0NfY5vKAdzy4BnR2Ut7TGEe3AtuDTMXs4mmWKp45XPjYcFQoP8j%2Fa8FRYeidnEF8877LO4ypG84ecKAf4NDaVRj3hwqDw68yReQZMygej8gCprAPOKjz%2B59tW5tC99TiM9oe9%2BJQExWgLzEdwPwOvMM2LlJA18pMWVfMPUNLl7928jknBdH1tv1RWCNeqpi4AqBoF2BZ29zL9rfVwvqbFixDLIJDkg5pdwdLvbxaAY1CmUVMq8QiKRG1JAcw3EOpNL52uJy5ip81%2BWx3lOSK45UbulBxV1MuqX9SsvRioF1eDSuxq1saPSvKEClD2dn237VLq6WW%2BoAZ7PC%2Fu7SWvWmfKW5iS5RKwJgW%2BxJIL3HDWCJzog%2FHfeUZLhLntnh5kVEl%2FpvtOyqUwpIH6wAY6pgGwR9xiFOOaSV%2BSuOxNz4aDiLQUrHYrQ45wQszIFTURYFgKJS1fI1DeaTdHfDxLek4OtXay0trt8a586qIkxv0D8ioElBr4ARek9VIOEMkrr3cMitL7P8f%2FXyBVwvWJ3hTvR%2FvmK8XQBxKuOogOEaqSIYDoly%2FO2WNxysIDJhVRxiUgqLz%2F01FihVTHPXEUOoO82IlUzZyOGSVZlQoEK1DmChq2wWr6&X-Amz-Signature=d0d648d5eaa2509829767e9a539f844fc810faf2f60cb768ca122be863adc185&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
