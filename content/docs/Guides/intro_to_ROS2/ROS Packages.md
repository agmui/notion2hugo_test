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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=6efaaed873b25c887b9c4db15f99b4e6c47b6e53ebcbcac03cd0fdc395736919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=0aa8ecd83185deb339b5b0961e1dfc74527a57719bdafa47a3fa20fa4b55f8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=9e9292a626ad04c0eea3669de1e7762498e54cdcc7851bc488a16009cc9c415f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=1dee900a1ebdf9a20dd3e413d1b1991380d077b8134745e08d3b96ef10421d49&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=58bd6ed2777d29cac30e13c644b8c2ad7dd91fe79baa1fac962baabb5c411e96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=ff1ccaedc19996b934941fe67db609c26bc27264900b5d96fa9b26ace8c7543c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNNR65M2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiK68ZIEvaFoTNOSLrpqqy4YeCCwgTVer7TD%2BuQIciVQIgAfiXKMISVC8motp%2FlgjyEhuDmvwyyS4UxqeVdEFKb3wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiXjV8iP2sMVXlZVyrcA6IfckrrYNRX1BZNCST3p89ciIc1dqHI57K4FK1bi4LWvzIXXBoS%2FkEL6lo%2BQmgUiDeSPJPh8VWNlszRMp0XXI5dbu6qpKm9IuFu6B8b94YdTsYEGwHadb6Pmn%2FqYmrjR67FPuCIRBbR6sKpRTvVjrRE%2Fj0xuNaBoDEz347C3ir5jQZGKhDeH9t5WcA1q%2BOPjRGGkm8nHxlbndL6woIYstC%2BulA6RYTLRkKaKZ%2FjEqhDGIPAeEHifwffGA%2FfqerU%2B6JsposuDKbuAs2eNNUjBR9O6b9a6eT%2B1L13Q2fRuEbkJ84ca0Mp6l0RoGv731PmGqEJxE30%2Be9gl9aNkP%2F6d%2B683FgRpv1LHUhGO7kSYS9EpDkSa%2FInstl%2Bgty2nbpO1uqqd1RM3hPS4kRK%2BzCx3D5lnotMUiUxC32zRgDNQlUdkIKeDQlTdoki9Nim3im9HVQWr5hvE9yhxff6bHcpyvwpfKKqHrdXeamA6fhnIk86AY5Fj%2Fmi7H3m5SCK5RBAbIy1J9HS0RqBV60RZdk2G6B56UAEJHJuxSRdsm7BmI06X6KADRA%2FLt%2BDS4AHwQ2Lj3GMf8%2BtX3beji39MSHqLLoFxMQN%2FbrvxKOuWkrjZ8%2F7szvE8UnFHjZoICb8MOHxgL8GOqUB4LPeaoyp7EBRTdLJhkiUSPK2LjS0IOMfl0y6jjW0Q%2BORiDOi7LJI%2BN1jHjwcdyEYKWjSBKnY5ce76qTd53f5C%2FJaHPQL24ADnlo2ZA%2BZACjICRdd5vugZvmN6B6qZl0pIem7z5vOPnoAhtCCA1yGNKvZFRKSTXtH68kjSflvYYrHyXCisoQtsE%2BjNmN8NKDOwOsCE8EPugalfcXjdRBAABMxex1E&X-Amz-Signature=1b7a19c9fff6f16a0bd0b8e21a57243bd6a0c473eebfeb3b030ae05733d193b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
