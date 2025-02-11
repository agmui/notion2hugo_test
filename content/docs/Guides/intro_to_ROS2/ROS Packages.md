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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=06793d7f9597f404b6f1a0e9f1518e04035e365b446d60f25a1d49817d17b177&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=dd3e5483652670171515d4e3696c3389449248585ddf292b095e4f8cccf7bfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=0c5113949a8040358d0445e4ab0cba70d62f291deb1c4493237f3ecf636e75cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=1baa03d14ac0dce5f2e893c4884d96c4db72910309a1c45b0a08a8c9cd702775&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=4dbca4418e1c0ac292958002abcbbe7719732e1c18e704afb9eae588cfe010ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=cdaf6173a14a27c991604fbd86bdcdd2aa87fc822cb03293f58dc2c9c53172a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFH2DLQ3%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtZIzLcoMWU6Tarb4RQHM9KRoSJ9ao3bZdJgxViUwccAiEA0jrazcX1VLAslYPzsuZjoplVQR0BehPrtkRt1O1ChB4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdo2al39W1fVkI7pircA38aVnU3GO%2FWAIhMkG5Br8lOvW4Sz8s7ioVVTAuZSGkcThAFD5hbLoJJIrrWr%2FzITVxb9hqALw%2F8P2r1enkltlp9rCUVbQIqViapQq8D3JNLsxgeOxKGuRle38OnOyU8qjquirEJTxP1EjL8gcxdfF3vM%2B%2FHAny%2FXUvw3s4rJYMx9lGOqdUg242LXpIpubCaArpCn%2F0I9UXBeb54TgnLduROw0TQSt86B2%2BGEGV7l%2Fp3impJuVScS3T8gl7vo3t2X9FW7JsDzTq%2B51LJhZZPA9FB00XdaIO4PYRL6U4AhLcVKWFIartSUH63f7%2B%2FeBGTnUXtkJmwS651V7cU3NcBPh2FepGBdntgdCyVBlH8plcFSjDZJ4uiH66Bu8fcHbFe3uX%2Fd4fkp5VFe7YopbfxFr8hcFBsLMK9UVxVHA%2FTIIojxLQIlYTWGZlFZJlDyF5AdH7PTS%2FX2qsh8FtBPwptQLynIcfRRk%2BGNuG6qFG%2Fr%2BDAfVCbCBMJvWGKWvvQMoNJ3G2zv9hZFWRU3BpBndzfHMnZVEKJv94ZDFhwiVC47e9uDXuNHxoisA%2F7zhYGLa00GJu07DnzJB29wkBJmtKEj4jAirbCCE9sf%2BkFin1rWoSE%2F28TrFFQPDtK9vUgMOTIrr0GOqUBZL7DWqu%2B5T3NIng5VNbY9kq7FBgbKjgce4rLetOXII8ou0RE9R%2FvITkh0JzBFJPEjSq2rinhoqygn35DYTgex1wOQI2udXLQQNnWqI4MEXn3l1oKbEDCNONjRZMPn2vx6jSYy3K5aVWkKYq76A6KIVnQ9KfS1S4HbNNp7Phy7ysMB83DoTI9X8%2Bdn%2Fsd95N9Z63M4CzEb7e8DnCAqE7JB7QNl13u&X-Amz-Signature=94175c893ec3f49dec6fedc86039747a680a72243e3f411556d32333cdfb6062&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
