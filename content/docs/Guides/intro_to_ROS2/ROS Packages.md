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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=5fd9b8973a9e30da293788f639cecea7ac2ff68de81406e40e0ab89ec3add8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=97ea08680d24f8f89ff844894574dd17b3c1db19029a758ac1d1af78bc86d606&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=4bc1869196e1cf35d191dc866450a2ce51a0d78bbc65fded7f4fe47cf2b267cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=2ed207839e02733d56457aef027a2d67fa81d83ed82f00e06d21a99230d011fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=25dce244f970cb492b1b0d554fe9ba0ded18aa97bf29dac8c8b82e340f6ba40e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=771f9e97bfc5df0e0cbe6a5b68de80a13868ed0e1840dcbbbfd466d9462ea47d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2S36C2R%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAS43FGxrY3R5%2Fk%2BXt0F%2Br%2BeTkAnoN6w8Uol%2BZRzLc8SAiEA9TGWf7Z2dCkpMIP5aiFPbzkf877592VLAx6jiAbmhjQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU%2BxgeZMG4ZGWn3WSrcA7aDUs5Rxr%2FBE%2Bg6noq0tn4JQfMQ%2F2Y0hzpRn9UlzyJ9ICEAoM%2BrthLB8P1SXa8rHK6JgfHD9aJs%2BOVQNpxHAMuPTW6m1a3EDIL8Bq6nMrYO9o18h05zJkuXCUsOagPxtEw2Gx%2F7itrgYID8xcKND7tuGGZrWFEWvXBbB06TU609HGceo9ZBCw93Km1JpxZadTRMggtg5Yu5KK%2Ffr2Ulq6eGAP%2BbYMd9gynwFbTieShWlpXzWPMXVY0HzGcbfogyDDAXD5pK7bESAadTcvcQ29fBLnlR%2FdL60H27Qn5MqweXbUxO18k76cwMErIePI%2Filxb%2FSkDZR4R08OUl4ghVqsYQClfX%2F0SJSRvtpp%2FUAiPIkJqJzGLpufG7rVJ3wy9DpodgWvEVq4Pjj5x8BVGV5GrMToX0DpvyL4OCFoia0RZfA5HSqH%2BOnsdhmP2pyubrNN2KijDtgcOCNAlP2%2FdII9QT1xjQ4DxKkh8eC5hXBtmSasJsDd%2Bl9bkSiDrW5bjQOC6gOt711sl3m6rSaWFOwTK6amBhXQErbcEvu1dMV2fAIq3CUxqD3%2FRvrW0VXqmnei0UvWDC4ZnyW%2FjFeaudhJoWMhYJJbJGHbdOlVXFe9nHcM89tSttY%2BSeQL8rMNKO5sEGOqUBevmUIncCTx7kvASqzj0XPUwG1D%2BLUNfgVzWVkNglg5xHja1R7dz1jlRK76jsyoLj9dM2ORq8OONhDPgtx%2B20WU6P2HQBdFkimT6cnyT%2FUGKWieJmeFGvltfbb5BZhQKa%2F4u2Y%2FqnjSuOszJRZ3O29hq5%2F3xS1Cm7d6SvkfOLOxBkF3KXJBjjfsyY0a5ocryROqFYVbSgPxdZQAFIPopfj%2BK3sYww&X-Amz-Signature=52792b48f321ac2ebefa5722d69ca4261d4f577251d9cae23fd90944138383f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
