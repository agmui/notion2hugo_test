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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=bd3b956b4fbbe2f2596457aabb97e51dee2cc43aa9fcaf4807053259088af0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=6a25df18903e78406c7a94f96a0c657cb184a5dffda6bebc4df2ff541a960c10&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=a58cd175047f57d06da9ab4ea79b1d653b408cb79b8b68c7e77225c3be146a43&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=021308d701dfbbd3bee2f9e83030c874c9dad86ccb969d93b9acdab71c318a80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=f31561b6370d26374b0089b4f162cbb9233215723f7399bb783d07aa042db969&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=15a184c426196bbf5e180e80f982a1301d001233d4209309c025691b1507409f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWU2YJ7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwW3JVhFAgtmtVhb%2FJ2lrDByN1YGhX92CRwTpsuBuNrAiEA3UdvJ%2Foe9iuflfh7MBFpbpmdQC1gwAYTOlUVaXdhL3Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDEKddrMuAmhHOhbjSrcA1U%2BN1K7wFOFSR3Rz0eWeWgWRJ%2F6iHZOHqwT93r7zOY4SoDmyeOzYU6S24wA50udF1Gk4bqnXXlHjJrCq7%2FV%2B2ccSaup4%2BxU%2FC7fQRk%2BoU00szsHefLJEGTanTIk3tsKuryQqc8UWOHy6NlHDf%2FqgDh46XMMfyCWnBTb6bBDFstzMajrVjq09hpSvRVVTFKYTXFYBhi97JtTOUMRUjDRThUnMEphSeO0IVDiJtvGzgGwo%2BBgAkkmoxUh2x3Q7GmwXd11mYR2xLrr5yZar1zt3Wdm%2BTlnr4Pe1fWMOxfBLmr87KfJQdl24Af3E0wDs9pyHGVuL5aCHMkQsHO%2B9Af4fiacdoM96RRcq5HUG29YEOFoS6wIPma6LIGwpPOdOkZiCnsL%2FU7YXj%2BC4mcXLHEOhY742ZgGYpOtMAXaJ4WDk6DjJfn9jsCv9KXlwLuGjApbQpowMgifQWLT7DBBm%2Fdi9vKuwW3wC4M1Yw711b44pJpcthC%2FEfjpASk94T5HnZnYCVMLLPggo0pAt6qDEG5M7DyPrDPMcDqDoso0Kr%2F5t2%2BfrMwXYlW9znNkSbybPhbI%2FFPkR%2FnJK7FgwFoYA%2FA098Huauq3RuA%2FM1JGoAk0qqcPsexzaR6TVXCtwyNKMKnkw78GOqUBgfsSy7VfxNTRWnFON67MWSxDTQ9wVpezPJntohC6CxkEL6LvWtd4zdm6%2FM8v8UCC%2FuV0x8Vk63ILjIPxK4AYoAZnGIVJVJ9AFlN3rEm3iOl0fp%2FAzmqZ%2Fb5iHXiLbYwra7EF6tJLu8ViEIwgzKuJvgXckUyQpVYymbTkPO54PBUmHNwB3TXt9ajSpOlQ3erSHkQrm3P0L56iYiIzzvm56qpio1GT&X-Amz-Signature=0158c8ad6cd3ad1f318eae7bee0d9d4b0acf5a9aecf020ec451937551cc9e9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
