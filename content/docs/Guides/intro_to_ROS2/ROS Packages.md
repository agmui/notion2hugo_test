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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=b5283f7b17c84406b63a0da6a11c7be1c4a92444f04732891ca32ebd67d2d2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=e4fb9e42b319982a2fb47eec4f7b13bdc613db9041f3ca995d3f4854b3d22e98&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=533d1f98e1d57f46736986d06bc9eba40b78b661a52d0cb91cd03f52ef24dd96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=6ad403698c2f7a687bba2462d22e8919d5d627130601dc47bb6e75c313204fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=82aff230552c45cf26779ff092246f2cc33f6360cd43de825207f692077e3533&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=c76312145a4b9b63e2828a3291fd14688fa2a5bfff3a00ba815fda4bb1681dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJTTS6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmYGU1zbusC4pFkyn2%2ByVNLaZyZs3AXuxeJdk7Cv0G3AIgTZblMc3bpIBnUn3aQvCcueLHwV8d5tBsaSeo67i7DGYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBFmy%2BfLHNUvY63PByrcA2WtVsGQeTzcbnR1Zjitow2zTL6w2ba3h5fNtLhVBYlkQ0nUod1Kc1GriWXHYliBF5Vu4336l0xMjo42cksUZTr%2Fw7KVUEYCOcL7b2v7dZxIy8yMvbrFwPaJmf55JVWeoyHQltZ2TrLWB2GRMXX1QXowkOQxZBawC%2B%2BQTwzhMAj23icBvT4AjC6kDb5ILv6XYNsVvrLUgvqgMzybJuHmHUfQoj5l%2FFbijz310NrlFdfTJMEbRHNR1WkuZnlK%2BFw3J5%2FIRmw0vATvViZ2T7Lxq8uTMHadX1sgyhKzWGDqQinvmXu3k0IoLzRpyXfnPt9kXiXv1Iavze%2FGBqWfOV4VMGTiaRc5xrgjuVp8af0rWFxBSXaUEh4yTLvPr2dlfqJW8f6FNTIg6pcqi7X%2FnWb1VbztDgdWl49X7aFQzKCBUNx9mFb5tbxSauFlvyGcnDckd7sCovr%2Fjxnzxf3DVcM3kt0a3MAcDWAn%2FQLFao%2Fwcvn93mQDNeQ%2BrZSw9RbKN0JoFs8Eqf7S5nfJRDFkCgpaulhHaXAtyCV9UZ3E9uCmqpIsxhFbWiJVrShOMc5MQNTaSSE20oRUtpWknIdX5v%2FX4BPUGjQbLIr1gCB2YMj7hs4TKlSUOJOGL3sguV9sML3j8r8GOqUBi9sLk83Mi9vRWc4Ob4ZZS%2Bj9Hm2rAVfVdIC%2FgkXO8ax%2BLjVQCekcv%2FK%2BCZZwPOk%2BRiWFAi%2Fs2PHuUM2WukZb9x6%2F9eiLB1CgkidgAFDwNm0qE0ZV0F6fq9n45bq7fkGLS4Vvt5VuziB1XxcQPoJ4eSokV72xQyO6IPi%2F6nHBBG%2FueTCCeVNNA22Un81pUzYH3Kj9fybHWYwy22HV0%2BB940a4%2BmOs&X-Amz-Signature=d529f236e8dc2b63e1dc988829f0bd69a2e645c81b84be5ac133c863f6c25aac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
