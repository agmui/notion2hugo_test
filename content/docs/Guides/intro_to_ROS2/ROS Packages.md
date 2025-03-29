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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=f5da5927c66a9eec1a6649e14ff79da7e5c286b5674ca1da06309c2ff4598a04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=461e36a2df8e5f4f0b0647c78d6e638265e129ba5dc77f1d07d11d33dc604f57&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=783549d3b965fce8d3c03cae57d97cd257ed88ff910292f1bc34b285961365ab&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=a6141cb2092b8c084a68487e67a1de217b5becd2618d6363af102d61a0e57e07&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=115019191a182e03d1fe954762b5f5dd312b5ecfad00c72f77bbb39612493808&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=f6672d6b75c7ceba72155ea912b252e56820a7228784346bbff5933dfb64d386&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDKHVWM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCRyrA2Pm3iHsG%2F6GrwQZaZjNbyO5cwwz2%2FikCq%2FYyBzwIgOCfiEQmsQiTWA0D1npdj9RpB1QsqI5d6FGtstQW0VDIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG7jJIFSZ8xWiQIZRyrcA53YP25Hlws77YwKnAO4UGvjamvslJ1oBRfnN01qJEwdXL2b7XmsG14TpjHLoDEoNJkq7B2cin3V97WPOvH2R%2FRD3O2QCQrWUh2SgdT3Xyc8CtSrpl%2F79OwMOGJQqidFkYKYY%2FtVnVD7HZfswcRqAJzbtz%2BrhqJDl2q3G8PzODH39ELeKNAiQutt6S6eldoUcSK3oGgzhr4AhCf3EfiYR8XRoHl1B0xrKDHNLogw5Yat79lZ07VnKeyd9%2FGZ4h1hClDGo31xoV1FoRSoP7yhwmwfdJ7%2FbNo4wPlrSZxlp5%2ByQrjjCE4tuhBL1cj7r%2BDoJrLNjozkv01YPkjzoL01TacMqw49PszmrcrlmenYhV2NhhcvlbmaRG6wQI639giPrLAOUVd%2F1Md1b39AoImrEu80%2FzGDP6WzMpZxgbl5b4ACx%2BQYkhdgZBbhjgF%2FHOR7aaLdEzR4Q2iV0sAS5clHfDAsKs4O%2FCGpEb%2BlyqC2PXf27guvrst8oo6H0cV%2Ft6%2Fw84WhPhWG6BAwv2JBbx9N2i5iEBXCJqcOrQEV9%2FJfL8UNGowjkxvu8dO1WEIJjTk9FVUSmm41zZyclmmi2NHiSj4SFQs8JncbnSDrzzq3OEf14HRwI%2BXe53KODYRZMJ21n78GOqUBxVjzoAg1V%2F8%2BU1RCVXlgpotnyh6IMNF5GQmgBD1wOjOYo6fZ%2FLxWwFeAtAS6UytY2RnPnQDSTCBzkvyR1lYMHM0Xgn3JmByM%2F25BkEp8dvBgVfnDEII88tZYpvty9PcFQctXFxxEnVt%2F4fWfc1SM35WlciP6w%2BtyS43EMsIiZD1aOQ8SZFlgv1IxI6pcdZR9%2F4ZTAjbFChycri%2BjRgQmqo0hAL2z&X-Amz-Signature=d752dc3924a0329921a9e0773bd4e5a7e40beec0f0091711368898c5dafb59f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
