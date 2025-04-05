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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=d5d1dee1fcdf3548b334a4fbd208bbc48e420c8377ce6e4de76a8b6dda7dff0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=e4ab7d19b49c052af33d758fcaeec9516b979d8f6202ba603c9581f34646bf62&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=6e39510e800cb11f51a072a9e9b11b3adca491d81f0fce61d22f25da5a62e644&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=fab1c7b519642cadc2749750ee3741d2ad1080025c7429fc660e488bd80b31c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=d209315fa1224efcbca5af224aebe18a3393cad1d11059a8f1599b40a153ec19&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=308cb331b1e95581e846087ef3f475cda024205edee6bfbd9c8085726d01e2a7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGYY77M%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEElAqAX65NCfxPhQgwZPFgu5QtQnNaja1sMgr%2F%2B4rNWAiEAxk7gH8lCUPQ%2FEbiCp%2F4obHQ5U5khAkrghL1riCQNan4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPVZBkRt%2BIqWG0QU4yrcA5lx5hl8vLo6emrh9RVXgxriyNpKilIgsapoMq1T4K7jLxjPNM0qheNaxTtIgOicVprk8QuMrewozumNyJddGanobZsBtXpZ9LHuowfJrV1LkbMVkuTWkgm6LjYJ11AOJ8shbfvW7HEs5orTLze%2FsoLEIc7HsdgSdWpFxctR6Z8WwPPebBAinJHbf7C%2BvI4YSHDKPVUJAgcCfxOx%2FKkg7kDYXqpHkOD5vBmqHfc9C8kWUBohvAtryax%2FrlSStZZUnRgBKTlKpQ4iWzFYURHR11mq9BQCQVCp7Fe%2BrwPIG8Jvs8KGm%2BymQiboSE1PcnUpb4BQnIdPSIRsarTOKbjHPXbK%2BNzXWKq9040plXpbQijAS%2BvO6RAjD6bzQUH%2BA12d%2FqF3QgptKrtFrhdM0BEVjtqwoo3cNKO5A4%2BQtdb6PAvDKAeN6qjaIV9bCrEgyYXKDCNVmNO5Vw0NRMLG7pBjOZbf4jMe4lWAjizg7mnOJBBqvCUb25q7YJIsU8KK%2BfEsWVWAzodqsV%2FrN%2BMu%2BPMnNGmPmOFzQlebnY2la0I1X%2FfLYKi%2F1KsMAwZLcv0f1M0L6zZZZ7l6w2efo4emn%2FE1gW%2Bn3AUGYE%2BANBjG98DUIxqc7R0TK0MJlOjBZZkqMOXDxr8GOqUBgh6jbE4b%2F124%2B6H3K9R55ie7TPI7Mk1Ixx3tUZqnXtv8m5rhoFFicpfVSKe9s%2FmFB4l%2FKyqJU6rVTBbiOZOhy0jvkrXBGyiWK%2B%2ByCvYwQm8HsAe8f8MT5%2F6UOHbdisxPRTR6S6gEyOYhNcMjBfFO4TDmHXQtZgrkhGnryfrWpbQle3Z9Jbelrs7zLb8ur8%2FMQxHKEBjk7Y4Dg6j1ntBYteDCYqph&X-Amz-Signature=5daaa663f17dfba5e4aa851260204491dc08bcebf7370281c276d1c085b4b2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
