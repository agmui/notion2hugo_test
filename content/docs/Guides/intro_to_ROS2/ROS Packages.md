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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=8f5ff9797c7682a9414dc3eda8b364eab8476f4b6689c15298c523eece74440b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=9c69129ea1cff302f016ab732508d5370ef09e98dc82dfbb724d6795e3494936&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=6194c142549d33c789a16afccfaa268f231333752c43ec942ecfcffbb62eb83d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=5211199999724b91f1659a6f6ec5f7190940cf7fa32622bd62ed6f33420fba8e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=0a8d2456c0912fc660e9f8e266b014360ac9e1752c08269a81414d60a9588999&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=f083c28a5b27649e29e51cb3f58c29d4ff062cc201a7cfbb9d5b1f5520c008fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST2C4F42%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8hET0pY8QR7SiIq60jmM7k2AQWx3vK3vmnuJ%2BPNICqAiEA%2BLO4lDisDinbiBHGV4OMfW4SegUejzOCmK%2Bd%2BCsnrdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJH3qKCJk403F%2Fi8eCrcA3C4ocuAkwGdJluQBgdIX1CtZBaIRqJeM8Co%2BGkumO%2Frs3ztyxvY4MZKSE%2FXAH74nFEOR4Sbha6ixYmvn51MXxdNSUHMfIW3OS2w9OC63AmmKjj%2BrtFnSbr%2BGFmiwOjdGd3ch7bqKsd3KatBw9Ktb%2Bc67EsTx5Q56qeZuYksldN8baDALm1nu223ipSA4ac3T7cV6d%2BnhuYG5tSpSbNCniMdZsMRABcvSZmLpYyqK3a2V4%2BqpMSfAWWvHcbsQjY7ZWgChwQDWF%2BySt%2FzHe%2BAuFHEUTOpv8DIRD3uPgelVIfT%2Bw58UgWAvYlJaDKi5KIbxdKcLYG4Ic1yc6FrTPKCMJoOLphLO%2BsnL8CqAAb97VjlPC6iljttLay2TeGqQXhCfAMH0idiTNSNuHwiQYIo1H3w83Tkb3JKcRb1v13xXvmbp9Vra24Q%2BDsGuEnoI8D0K4EC7xxAp41ek6NxWuRS%2F8OHHoylMCYH1jRQhtSYC2a54xp%2FVvd7Bwihyz0z%2BITbVbeIKq%2FdNGK2d2P%2Bp2FysKJneSTBTHmCR0%2FmQtRgULXfMiTuz5yr37fJs0Yt2ikyel9qSVS8QfcZYutpj3rayRu6XxViWrzwmG89e4PUDNQHT42vBKaKMR1vQaNFMMKQ3sEGOqUBpOBKN8R83lIfz6krQ8bYADPjakRBB6juxmA2k081lx527%2B664YkIBegGO7jxg3c4YAgv%2BfxyKTLcPESkMk58pNeDrI7DXNT304mIfXsHfXi4ADVbDj1mx8r43tWkl6W%2FamjK0HDAHlw%2BWBKRfh3S6kcdJ3P8OlHOqm9OXL3Mo0t%2BDL2BxObyzdz6yF0JH8j8r4KirJHMoEDDWFnXacvuj8abC%2BMA&X-Amz-Signature=3e51ac99745bd7e978b31d03f7911014bfb2fe4dbaa2102a8253b2f34e9e4823&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
