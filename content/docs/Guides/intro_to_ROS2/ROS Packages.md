---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=0d4f43165e5779aa3880a22e54b110ace51dd6b79234f6c73943e1af8a0e1f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=18d848a1940ace01b0b97271b3cedd3ab51f291d4c88d3f30ea6d1e102a40f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=86d89ca5466ac7f34c459474142c260af8146a1e0fdc28f48c3001a18b1c6c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=18ba72d02e807ba00546b2d599c4a29a9f02241ea59be649389f7d89058dacc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=4c3f78bc24fac3c09d477c6d206a84e8037c0b6fa967cb25c13557e46d1c6c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=4219165a1f32ad152718f6e9a544a6f78a9180974c50f107e97fbfcd1c4aed93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKKPACKB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpW7IXXCPNK6vLApj8%2FgGCS5OucsAa0KzEM7wZsWC2MAIhANanSbYCCSSWiZ6SsOyJvOifHQDowJSkHmV7E9LxixREKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt9C6m8Yd6Fl7lVsYq3AMp59In3HKhimSh0dVA9IHbHD1HM9n558yr7dwxndSW7HaxER15CfHZFhuT%2FnTUI1D%2FOWRTv8m0RYZnIDA56Qjc8D7IxzvbaP9wUcevbhVzMXN0ETfhQxQBLr4KGi57ZWPPCAYPiuAFLffOr2NPzXE%2FbkBv1QoOQYm14L2bHOVLxHRma8CTRMTlkrov1O4UMcmBOiS7XnDrL14VWw2VHUvmM7RLp1iIFhDcNLxyfuvBBfjgc1Xll4BXAULoBmL40XO9JRAprgl0N8vGEPLmvwBTOePh4o2bWId1z%2FLGQyIb9SNdzxzhn1TrSmOH7QOlHLHxDEJqDlsI9JM%2FHQ7Bdj2PFeARZh%2FUH5D7N5z5825oBW6cQ6fKgX0uOA59VMGeKjvWdPwYustlGUoqieIiAz2aspU71%2Ffp1kOmx%2F1yz%2Fd5eBTTAokTpVYAiyjg2jQrmLJ2lj15o9rnFBxmL1Cf2kX6btaPkk2FPy2YBYG0p%2BBptxcrblMaF6eetPPFf67sM1w2Tcpu49V0SQJbpEFon%2BZpgbACWtyB5bxk781R4SRVECtP95tFI%2BM7oFtgmz44GDTUIKmsoJIaJRjXPxCNoM1g90%2BqSbY5RXHVzA85lm4m334jgpDEzUAXJkYKdjDGoqrEBjqkAVs6f7yp4Vh5yndMt2vbPt5%2BDOTmvj%2Fkex1P3ChozRiUmGCJUmLF9g8CFKIyAYhpYJv7V0ydHixffC%2BPHvQa%2BD%2BkvbdH8%2FdbZ633dMGvqeGQOrTUuQROaoa%2F62WbSzWnQSGVlBHjDmt3yDHH3Kme2nECzNzhBE5IQNsNyyUftPYmGNbdCMWozgShlcWR5hQ8xRErg9RB1ze%2BBygqoLBgJEBSwLbH&X-Amz-Signature=2d4fb2aea77b93c9b7edcc89f068563ece820b0fee4c905a9f056ab55c4ba8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
