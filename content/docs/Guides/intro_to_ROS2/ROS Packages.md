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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=3ba3a1d2a9598fd7f1eb8645e7e3e8b6620eae607cb13a7de359df137b975cde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=1b9b0fbe87740a6a8c810a5d8dcb7788ffca5f3477a537bdbdde40051ecbb9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=f335966174a7ec52e265c26a525f99597401d7e9ae5ce32ef5a6b326e25129cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=dc17262b032b06d6716f4732032b08fbf3210a4eeb638b8c12df1173a953d951&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=0a90fb82c25e1d9e635d9290044b3dacb2fcd603cc05d3dbc7e07ab5f354be80&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=ddb87775a6a7b95463475931e14636bc26cfc974dad338d80bb0bb4477b041a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJT42CY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCnYaLiNnmGytodA%2Fn1cuwT2BfVkrunYQPJQ94Z1H7YsAIgMDzGQVQA0mbv01wRfZCHip1dxw4KDPJOWkP%2FHZtQqJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHj%2FgWTpz4Rps6qkKyrcAxr%2FDItGERw%2BaebHu5h6%2B0IgO%2Ft3dsDo7Hnhvj2lpwmSGk%2BgtD7FjR1yR666WeULws7hFa4dFlpSiVcwrfyPTFS5cXdwVhZXD6WNie1tU%2FhopleLbNR9vZrOjPLtNpuCPlOJ%2BV665QLlwAjfL57VjEHIoVwwmsrlg%2FLGBqojTB4qapKDeh5wCK3jEYT6KitnbiDuJ8qy5ZDS8jUUS%2FMRNeUf6O1Os%2F2b1qggMRy93uqODafsVaEDP8eui8%2BU9JXaFV4nLBIKfm1V2RdccbDENcs8KLY9Isgq%2FHxg%2BfGsVlzy%2FVCrv9Y%2BBWdjMhhFDwnMzYX0Y3nAxtg8dJ%2Brm33L%2FTfV3Sfh%2BihLZ6q0mQCXypEpcEd7%2BHdpoCSNRf2%2FUqQuycKeU37oJ54tUL%2BfloOc5%2FdzaAtdH%2BZsBgAzjIyRCqr84ZTk0I%2Fegtkrzijca6mZGX1WbCTwta1BSN51SGdv%2BdrOZ2h1DpWPbi3ZmLA%2FnP3Fuiwo1djOrGSElrzkBWSTNellwecAy%2BDcr4IlOFw7k3LDYYafBCbzkVQM1hl9S32Vs3I3jaOW4rTxzCBowWIGaUObLYr7KgGbOX9IcO1WDDV1XlLrRqd%2FlKTvzzXystWzh1mm6YBiZrmqhBEdMPfj%2BL0GOqUBDFidw2HLhS392VlcGODZq1OjaeSBCSyXCpbcoM7Na0eC0TTvimSFOG6P9Ifk8UYRUdVFW7Kb%2BHl2pxLtS0vVvADgwBmlY0MuqZ%2FZsoHz9PAtml7XYed1rlhPouAm%2FhGsrKOfEbIRPZTtfGHYvSfaSH1miVgtu8urK1yhJeWQfjZtENsd07vhkvdkuMzH3r8LwWZfZldHLln%2FZ%2Fn63cUM%2BbtKl3Gx&X-Amz-Signature=21c4c6723eb42a60971a84c764558ed22d8aba70a92360bac282081ddcf521e2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
