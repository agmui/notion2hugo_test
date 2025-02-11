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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=982df686017f46e7f83e43b939940054ea622e1b73d7caed2b5f6e52da36b51d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=001c8f51888b5093f6b1b69ebeb6bc7ca04570169fd87168f23a87773fc0e908&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=39c35fcb0a4e396fe4388dcc66fb82685c03961f73f0c6971410304d80327faa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=bfc7e249b52125e44629b85ba1fcfe02d68dd7bff917c5b155ee2327adbc4591&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=ffc6320b78990d2575dce1d2a6e4a0240e9ad156dc3b166a41f656e46afffc20&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=abca46141cdfc470d52ec3b11ad7cb5f55db34f3f12fbf473ec4eadfe892c04f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43NVGFB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2EmplIgAftJRM07iv%2BvV01e8l6pSgkeDD5KQ%2FV1zCsAiEA0DboCjibRXScj47iZnYmmwPFQYDLfQS2P7c4rY%2BIj88qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfxE0mZePGbaJl11SrcAxMyUEI5tDUB9Gv3MoDp62Rxa8THka%2FeiUJp2eha1DsLGRZa9zwkVq92Ocd39NYHBSkoj0hcgzIFVmFRvBXXyXs3hy%2Bb1bMHInDBKIP4M3mvVFOaw9plpmbwCwMOMPpABypKl3DMguSxuoZHOD8m299Wt4zXG%2BffOI%2FwWny0l8rPCofNvicoBALtrqZcPUTKTW527yh8ff6GWd%2BFXso0mqYhDV7ApKXMmr%2Fa3KNutp5lA1etrHWo8nkizWr8RZ%2BluuOjarKkcghl8k%2BpQtPG0iuxiDOX9b9PehSERSx8YDlP0L4ybmcsYAi6hfZdG2GsItLTWl%2BhMTDscGhag5IX6N%2FPf%2BY0uKrPPfhjOxu0aMhIBxEWhb49AIZlapkI2sAg1rDnfcgZk3pMV8CUHIXojUPvk0BGmkiDnce8gMktIz999d4zmej309x8UhKZV%2BnDsADLCSG7PEFwVVkXgHJqSayVE%2BA8zVelY2tusmMoTUmvW6S2OKSY6TwyTG8DXaXkfEq9qv9mioEEzUnnE0bf8Gt4i0t3%2FwP5j%2Bc8XB6ZoXZUMFsoSxfeRhTp2p5VP3%2FkIq2a19i07rg05NhzGRp2X9Cgw%2F7cLioTMcNMohyKWI1td%2FhbXLhFHeUScC6jMNmtrr0GOqUBO5z6TXmjARuKoZucqaSVSuG6JIOfuXFka1sH0s1u3xuRnWZEskNXI4YTNEcJekBiFEpaaGZslx8B1c3GMDrjixJLGUw5OfdgOWm1en0hFCFRlPFZv713GJyWSnErRxRxDi3CquhT%2FSKxUBXFZtCFWGgW6BNihiI4jA%2B58grkUs91z5kV5UNek9ikIiwb2s7fGNvo3RkallB3Xql5Q%2BaetbTXgl0W&X-Amz-Signature=7ce77f3c83837c262e5e4a305a005644311da30b671bc49a00c6f865d4eb2b43&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
