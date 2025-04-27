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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=0106f8c78f78950d3de0fa20c72b0a6d581130cdc5838d5e625a8d984a61f589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=c560ed201e4bb6b7acb8f3bb9104d55674277bfb59c8b9267ae45f9785be25c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=e10ede153e12b4dbed0e8ef4d0f2bf8a0ed58d79e7825cfbe21b9e603570b47e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=66bffd311a3738f2f13e8902c3d76c4c46e8183dd80f2be970568ac0517138df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=3c1bb3db5154db9e44b56aa87c2fcd55d2b568e318837ded96790eb50e9bcd84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=63f68797d77e1af01efabfdb799861ae6fcc6cd68465084594f2fe91b8f6e57c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGJGVCN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDUXbuR03WqXjAkPVQU6xRV%2B2SC%2FtNe8Py7FfLxY8MQIgXty5MOpSbqXpCU2vxU%2FiO27JomN%2Fq1Y32jvMiNR0MKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNTRAZOCKuVwf3nQhircA1fcB9GFbqi3PcD43QM3y%2BSw%2Fy7GdfodZhD02i4DqVy6%2FNf6MHb8NVz2u6wk9jbvHIFhNxpdPd8Fxzc0IIbYQnV6An15nEgrOwbSXP7Oh1snVPtWSWOnKDJp68FaG21dxzLo%2BQKYecrZ%2FDf5DHnjhGnIlTmRgnytC1yWRrnff5wAl7kC4pGaE9tL0%2BB0L8E8Lw7NWwPq8qpePmJefaEH05f%2BH7vjz3tnboqSv%2FHL%2FPMDFdiYsbr5%2BCvbI8dSOplTurGpzlraSdj1AjBo7umzy%2F68SgT4xCLSAKp0LuzRYk3O8HVWwRNYuzu6L9lwchWWXewHvb%2BbcDJ3mThMn%2FgOTK%2FmpkYPpgRtifXLZt1fgB%2Bw1BCvKcpd%2FSDkVVnBsA1Os%2FrHG2VRLkVvhN4hnMqsmRvlvzwX3jYlEtiPxdDsJnwXZYAw6LJkUlOgOMNx4S9V2iJX3CNdC%2F79jI%2BEtOM5xkNgk%2FUNyN5wf24vgehbdlK%2BMZUTEIlkvEIhW7d%2FCCJvmSTssNtegweJzHihFaEZGvthfeCHKE%2FV6OMhob4BMhP8VusETbmgLyURVWBonk54t4wOFWCjANWxxBQWa5bF0kXkWHhCb83eN2tlBrBgrT8hI25SWGX7sD9BGEd0MLyKusAGOqUB%2BILzmACNFe%2FP2JHbLZN1lsVPjlHd1XTARc5qQeCxaiBDMhM5kGbEeTT2S928ADmsFRuj9HiitvJk1Q1h%2F6YeCZLRQYu8dyR9RNDNiA%2FDd8qYOWAsV%2BGECy3w3Plf3pLW33dnekxi0Xs8ZFHRIDUQHECyPjYIHHIRKNnY0OoGVrx2OQgf5CEuS50daAb5wNI9KbkeednePBEjCNv%2F63n8jMQsY8dM&X-Amz-Signature=170854bd77bdfeb7b71ac2ec4070e0a9028cd1cc579f6e131052a11c05a779d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
