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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=6985b80a7b1e3a5e41dd85516854e7a136708f48f76dde1b5c74d7a4bbf3d53e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=ddbf9b1bbe246855955c7a266dcd26a662d1745636b7c4bc264b3727bd6f8e31&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=83e94ed00bf2bda5ce8c48d3befa7e50fc9f462c9f00ca8f1a396eafb68a81ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=785327236e84a86880f02827d7753ea8ee68cc6106e92e7bdbef064b37f6dc38&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=aee8d4506b33da97f8a2db4a49c515b57e56d6fae79fb6e2a565206d7983cddf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=f34aba8ba7b02c274b8a0bf9a6fa380bb4df5aa99df83024c838334cc0c96e48&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LWOTXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBiSb9BqJaE0DgYx5LQYkXOoaoAZcdSlZGobPTNVex%2FlAiEAtr6YFZFNWGZLsm5%2Fcl5r4AljdtSb3NNhGkevK1EdXJoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIr1kuf4kYHWmHWeBSrcAwDbNS3ZA3UdsALkaajLdzzkgtzL3ltnOVrYGSc3M9dRSURi0wydB8L%2F9SliGM4HglZ5ROMxCIkTWkNTKU8Oo7P82bxvwrBUnRoqR18bx3ubcfJRTLQGudpkK4K4vKGTzAHHzJBtf72UleQq6uOsKMDjF5uayAcl53T32NdPE2EP7Hf%2Bs%2B6hZuoxVJIjiolOG40GA095hslDWuDMwzkm%2BSr0UQFoDCmryH1j59QHJ1eRyzpivJlHJNk9ejSHdBZV3FCwpCY1GNlzvjXcM5coiTpWty7IJxzj72qDjmuY0fxJlbd1in3nSKR7EIS68H9%2Fot5CJuGfihqd7Kuuttv5p5eARKTKPD4ElLKQRTgF9%2B1d%2BKyei0br2gsGUkg9LzQ9bR0O%2B5sBR3Q8%2FpTtaM4aivf046hzITJQwk6UynbsUi%2B1CBoWe6nGmzAqyO3wLFkAi6YQDR4xIKwa9VxGSS%2F3zxxzwptxzPzDxKSb5bFY060updk1yReTNRG1jYeOlqXPBtXe0QTfVKI5AH8%2FDI%2Fmh2eRBAMuVU1IGg%2BfYm4LFTBUNqHkHQyGcH9%2FVZf8xSK%2F%2Fdty4xMl8GHTIn%2FTgHyGQ0F5GrErR8FMYJbTKJsnkP%2Bs1GVGf0MEuIjB3Y%2F4MIn9kL0GOqUBrfQCZ%2B30BKFnHVP0haVyaYUCtkOPLBvSlm1SbRwiFmqt1Crl0G%2Bx5PQuNZu984SuX7vstXYe%2BVrPoxSnBj%2BdIDTQFWjNWS%2FwOtREZrUUsAzIQ%2BXUCm4GrYgPImnjLAc7ak6rfQ3PJ%2BQFJt5oaPY784SONiEuWgqWxHcR22Nohr3Wb6gWPrW8XMmitcThBLnJ5oO5Qlj9EDi8XzVs3ARR%2FegFcRjk&X-Amz-Signature=2a52fe9b8f24ad9b9b0105d3ebc2f56e846a6da876d919ecd24eb61b39422ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
