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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=09b5503eda9ac1307a3b106364e1d128e17a7c477186789339f978b95dce8889&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=04ad37608e67cd9039f6e8607e053eae7758fd975bc1d9bc61128a6bceec8def&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=a80485b499e9bcac7200e703783fb837d1cfa422c2c9018e36295df005402ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=ee11bb0ce7751f82de2dac6fd91039fe9ac1effb2e8f55a23c39763d8e2f23a2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=6a8980b6567cbec3b031d45b340485dff85baf10ad96107504d267373ca22bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=84a8c6b8e6d56e2700fb86596e9fb90f3bd3728d95ede6473c2e6d24ab839e17&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T36AYZQO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B7l39D%2Fj21CRgMQ4z37hmdPKXv2%2F0%2FYnhkn%2BfjhAXrAiEAiLGtzycubtI5OPsZ0pqW3bEbL5OA7NQWIvPpA5yqF1Mq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLxqc0otZSm7URNWQircAyra2pCyy6zuXDkTSRRUysYUSwO2DYIWo3CjJZqviRHBuPcetUxrGarGFu4ciPV4i50ZgLxL06Nq6E6Uzh6UdVk6P2zJwgjqs6tMoVu0uMU3ByiyrTScGnDTu%2F2IVSe%2BNoWIyro7SX%2BK1vzvGeG0UuLV180mRFOr9BEFUmWIxc3rmR%2FHPvrpX76kmlsRpzPay8Gz9YXrKDmxT92n1sSAJ7UISvr%2F8hMukpO%2B%2Fn7QJFCGI70wS5lQxZbCHw4ctiOIXHqJoCtO7JY2FFEMGCsJId%2FvYjJPlwmKCV8nKllzZpq%2Fi3D%2FF0%2FIzAUOa6Gb6elxdyovcD6P5RII%2Fi5tNEQoCGnig0bMigMXbo66gWy1hZDjBenA8j9YQDufWqliR2ECGFnF1%2FyISYyAGgqvDN6PXVM%2B17zDvzcC%2BTnn5KMY%2Ffvvj0XaxNdVG1B4F6MLwe6QPWpRfE28TKHB6TQ70dnG9Gise%2BVv9YLvrtI0liQrWQBPJ2HxYck4YUR1VR8%2BBukrcXU5AoXyM5G4JdWxwnnavZRi%2BpZflEgB8rUCAn8NCxwhQ5%2BnpeAYJnQ2oAJJRtqFiQ%2Fb%2FzeH0Sqy9N%2F0EvrNBJ3CRYcs3MQ6tznLdM8L1tz%2FxOAS7mD%2FK%2BgdiEc5MJGQp74GOqUBTUNaDndnsFHw%2FbyV4MgX%2BAj8twqnnKWoLwYF%2FN1GJ5ufBkHASDwfPnHmf%2BEZFjtGPNrIDBcKZ6sEU5ahw1tuOViOOJG38ELiFG92fby8rXGvYDW3%2Fe%2FyFbQ5lo%2B10OUOxWb2y1%2BGin26X%2Fcue%2BHvl6yWZ2WL4iQr4aihlLYhj4qtiZKal4CdpsOqnxKp3o5UQsUBeBSbVvlbRxwC2fXpnDsLjdqn&X-Amz-Signature=84cab939c3e72c014ccb2ea364a09d81a9f3d181bdc98b7483322c94eb3ab4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
