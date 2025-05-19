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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=766f3791e8c7e92dfcf6e2ccc865f6e95c4412585f20c737a11876e7b8e968fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=6ecf2e0d8125ab0ed8c87e69a17208c6822e89441290fd330c1380d3f4cbf6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=49bad63dd13379dbce8fd8bbc82a9eda8bf30322b82f0c85e33e0dda9c887df4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=071e1a7b081d758ac005125cee8099aa1f62cc58bce7abb528ac87b5299216e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=5eb020fe46c67e33ac65e53b8186504739e76b90a0b0ed22425e12dcc8e0bbc0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=44a0ea2f298725d83d9487a22546cdd2f635bebbff16f6b58ffba3f37ba759a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54IT6B7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTV76bXz22T4RxlCScDnqVojUEChltIdBrAJoPQztzwIgRNuYQIpJrum9zfxdyJp3MUoPR8LS2WSmIzB%2F3wRrHjAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWF4s9N%2BatiyTHWJyrcA3q%2BBO0Y%2FYID%2Fnko%2BJvTH1qtmdumKL0NTSa6UAxxAMw%2BTiolBRlCtQH2oUk0luF3MZk%2Fe%2FlII90GWsbxgQbu7qh2MXIe5T%2B6ojBfaFDMBpbVHd0ZJC13Fatmi%2F5El%2FbDvyqN8m%2FkzNyz12P1SNKSH1xVTA6ZIvo5MF8euMYnT0PD9lf1JZo1KCEakwUUUnwMd8UjwHNA%2FzSsjVl8lWzNuhBEDt8Sj%2BrOvpyeHnNFPsERo2a9eA35Xm2J9pDIAVmW%2BQeuSgiTbU%2FQSUo2SXgubAY3wD7oqJNO7Bc026Pq2O1KaZjNb%2BlpuQFQh8crVLNge2oqogRsgLAGpL%2BFqsUWusktQWBc8y7uY4VOfaTdPsNi2IdRLoOl11x5I9w4UbJPDUWJAGoWYPj3YpvvSEyRoTe8wGATCa4SyB6ACPjSsBmTuIQVf916rAO1wtwQPwyrBa8A33qp0Bag%2B%2F%2BEyUxVLU5cMWzy6cDtW4GGMNXHdtvVL7BrtbWG3VfJGWB7kuAYb%2Fza3z6lOM2YR4NztRCsM82pedbQ2Z%2BplIgEm0OE7tTvq1y6PwLXdt3W4PXTJETZBwAxi8gZXpJX5JaD7OhoOdlwK4MRCsOwZgU3H551171U3gLkTDVrsA0uHsaMMI2CrMEGOqUBqdAm1o54uZOFM%2BoWVa%2Fe94dYCiGLW8IbfsWHzk8PJPkGX0nY6MKkIYufRmt99cI96SB%2BcTV0IYQiszXEKRUsg5DYh4TLI%2B7LcK4jG%2BwQPOCSO%2FVg%2FnytyV50rjNfeK3DawhjTZz2uyb%2B4CGv63i4TYASG9sK2OCM1aq8T6BDt2QLJDYMix6KP1zTeZ%2Fi3D4ep3Za1zB0W19T%2FIUPOeVLSD%2F3a5Is&X-Amz-Signature=4bcd3b9631a0a68924226c0f38fdf988d01cbb55b41d7cef13c5610976346a38&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
