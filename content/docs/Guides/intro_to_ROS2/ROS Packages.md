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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=6a907506cc6f78fe131699507c9bb0253e2a39d7c5affe1514477858685c272c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=c837d26fb35ea43a269a76e28749606f1c4a12106cefaffb903432e42547ad2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=9b9bb45b12bef09d26a1b689aba661528be811d2f4f12a4bf9451909ec5311ee&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=13aba46a1a2d9a7ce031989642bce642f25f55d05513a297dd9cd8d3251bdf93&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=c63ecea085d7752d8ed0a749312a8998fd5d8f875681c0f6301c321ef62c8ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=ff4f82d061b29eefe60bad5bc488fbe1ae11851944f77cc9d8e082930b69aa04&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYP4NSF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC4TuS0dpZiME64ussTRuKnLf9R9pmw6XD3f%2Fum9Y%2F39gIgWDF78xSkE2idberNgD8hvZIvETwCzXMtZwBIY12cd1Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD10uLdeLat48sPVcSrcA9XxDD39wBzu6SSpa4l8DR6Yz%2B%2Bu6ojGEdvxt0PVocJWvmyPFRoxdwTfUOBRfKM7sbAt6AdV%2BSPP3upkL86pDI%2Fm6hOfwEJbgaCNvReKnPXPUfwvJFC7Jn7e9peIzELaLnO0drMEi%2FfXpsL%2FhQv0sNowbn7RmUxO4NrL82UJ4qP7SzDQaBoIXNc%2BYes6pn1ZfOGvgpdcNo%2F5jDj85Qpux%2BwBfePocLGFyt6EekQ5cQTfm5xSID1eGtpwgyPnHXpXFCyJ%2FwnlWQGHOEicPyI2Br8EQgGhcAofo2xpRctqjq5FiRgV7AzC4ynzwXVYRxOuAnkFXMT1%2B2q8W76jRuSlEbuAzfJOavwRNOvlX6Jh1sieJmobn6lrI440WWGQH%2BOZvoIaF3uJvzaT0vnpT2orbtX0j2BLg8bgbO1xGJT06TjXy5E72Kk0%2FK8KUwbDFIy6FWSv9ejbFAsqWCEpu13N9l7mP31g9WfU0191zYs7l53uMpLD7CdvM2tDVqCvAEUS%2FdfTeqe1Uuw8TOWqLOx4ISAIOiI18jRWrTL5VLj%2F8R3KU3hXBbfcvmvOPwkYTOYqjTbhKiREfIOB0OWdlhsrUGRuAOlNWoUJR58oSkHyWWsFg03PHdnCeFimpmvLMI%2B8674GOqUBuRXq5amsgAgnj53HRSg0y8EN0SADm1CDhGP7XOKvCWoZdyUdrOMsroJr5tA9BgOWOOXNLEpeVgW%2BYiaPFGrPp1IERnHbLWtyWJn3Ygq%2BfqieEITBAKW%2BZ%2BWepjuu0yNOntGLFeiTGgJBkp13VLT3waVjm2Tynf%2FaVC%2Bo2kNZHJod1gKe%2FVio081RU%2Bofv%2B%2FzHY3Lm5ec%2FrGEtprAXLz%2BhXDHc27G&X-Amz-Signature=01e72e8fceb36f3dbd0397ea80528c664df9a33e25115c1057c64461c34e9ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
