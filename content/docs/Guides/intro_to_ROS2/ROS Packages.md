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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=66ad3a6b15844d717a1865863cd66f6457919584fbb4becfed624cfa048364f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=9f9ede81fdff27c7922a6b2928a2f2e20bd0968030d7eeb441395de2ad207055&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=e3affab06f2804ea7f17dd1b86f1cb39b257bf35c027c5feb821f27ee91d51fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=ec45a1ad7ef449d1d1dce64a693ec974ddb2ac27bd093ccbbb674f6a429669f5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=3e3d0b28d8a0b8717f8064ec2b6d59788ccd5b9253e373c2da60e714a68a3a51&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=d3d13c12e8f41e1cc441d7a4a5cd789a1c4f9d05eb6e8d0c0365e120dd73ca79&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QRNDQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T040808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDA1k4zi762YUh0tAdAvjwWZ6r4iiOsOSkv%2BhwzcNbhUAiEAxxK6RS9XoeWUIZavZdyTRS1vKaorU3Tg0AzS2IEc8Ecq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOMsGpjt22aOKYM0WCrcA2vseRmdvvyhowzpiNmsKyQXClEBOOZRr1hA%2BdLQLpQPh4t9V%2BVJxNDwvTYJnh80uHoRxlj6EEKmYztMrzOAUQz%2Fn0ZZKvMPzqIV79JpsE4m%2FigZIIVtHvCBPi29tnSEdv7faK1HMTaXejHLLtDrTcMInZ3FJ09rd2tKQOnAstuVMVc%2F8C%2BCgl6Mw6F06uPzthk%2BZQvpoCnDK42pBPds3f19ko9QHV5kEWG5LwyyfJtQeSDxMJV2zQSHSdXMX%2Fq5nERaGV%2FrVQDIHh9AKc%2BCVejTkxtk%2ForoYuULLtbjfv4F9t3whMShD9IdD1VPh%2BGe9mHAxCoeYCSNWVh%2FI%2B8fZwjCb93oYHnSHQPIpXyhKNtjN8ZZe6qwi%2FMRR3E6mKD1G8uiNTnxBTNgfgJ3dBGTBJWasluLgel3RzxmZ6cxK0%2FvXyunJl%2FMha2gdHlVCoHYaCtKq8%2B690R1LBzS0QzGivSxIlWq6fntTj7SD%2FNJtZViPWkzFH1SWOyCBaJKfBbjE71XQlFtcDNPl9aS6z067t2DpZKuO3H5nPSmuzGW%2BUKZ5iOhtoght15QWhof8AVyoBvBP7kphsmiMWqIbeQIL75N6Cyo%2BJHm7e80%2FYFg7hsBoiaoI1SoClWBDjoRMPv6rr4GOqUBuzoxMgFahs%2Fh%2F9HPVzLLcQ88f%2BeTTpDEZJR%2Bf465WNYKJel2bkXaPT1QLVRJhnCrw6UpYnUeV7I3nVWLSMKvRrbdpVCmIZW6LkeKH3zybhSefSDGYlCvGQIoXDrEjEOK4y1nVcwHNlSleq1cuFbTaBedeD30xmUA5cv6sbpQExtWYvIYd2B6lStm9Bf9SaWuk7iE4SQNkZM2vaB9KDBuRtVKXl3i&X-Amz-Signature=6ea3dcfd65ee6df00974d73fe0a575f04a2fc05e64a739c4b77453b1ebd834a1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
