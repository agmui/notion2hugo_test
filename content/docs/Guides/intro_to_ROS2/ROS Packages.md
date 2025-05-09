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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=0986fed0d22795f0a8fc3e31e3e6c941a5a446be44442d8f5a38859827d66328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=95b718bcc46c5c861fdaa9ec7a368b00c4829cc2d18e8638d0ba5f8011bf1b59&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=76e160ec75eaf29c7ba788030e64c99881aee3f2a7387fe1ba6200f0965c7783&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=8ae6d5840d407b2bbedeec3e235290f85e4f0a21d4cb89007de98a75ae46e7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=c0220e70c1b362d1c172cf82efc140895b2c15b8a86e1aadb51ffea0ce9c00f6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=e35123364566cb2662ae43efa651a115a234ed2f9b78c30340000994fe9a7659&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUEWQKO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgR15nGkMjevqqncw%2BosIH6jtpnC%2BbctUpupvpqtcGbAiEAqlhFru%2FVtZz%2BtezjxGNdcO5mbLGJTk%2BQ%2FlOvSUnVlhsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID8tmFo7P0DXBSY%2FircA3tHBh1VO0do4I0gukJGYhV%2FE1Bh7DyhQjBUmppMkdNtKMFPzdsoTNNqX5IsWGUOYkmCyNuXTJnP86zgUD2C93lZMQgUUhKv%2Bnmm4%2B7c%2FIc%2Bt9sQ%2FZBPiYs4gj%2Fr167BPz8Djjna0NT79sWF4LQp5nnD12Wd2rwF0s9mBP45xnx7iR9c9W53Izf6zkPzLuKf5nlZjTG0I0tBCwKIH%2Fv%2B7VRfOzsZcB%2Flnv71YCJ%2BNEhch96H7NwNycBhJV2DdbTKjBgL7fQdLJBqx242huRKOmFh4EzK3gK1b%2FvFL6ZthUC1q9uDSpduDofEdv316jmwvZgWcWP%2Bdyu4N59ydAmAUBSXTnPEr2g74zSERs7x93pFapxOQWg6FA97OVrQHlOzlbk8q%2BI63lzcvXYh4ETcUc%2Bc6BiaAN4P3OcjXZ9Q8sqU75rr%2Fn%2FvBh%2Bu9igpEjbrdjlhyZcogYWr%2FU7MNglEbwQRnOFyiZocA4MWa17%2Ff6kvh4tUHg80qgRjBizrxCBMLWFGsZ5Dyx5QEzgA7ZJr396pflGcEaL0ijP4%2Bc9dsCdiKC7XtYLDj6VTQKOLBqu3DvHHmyIV6bqxKYl15Sg7QjXq%2Fbrl5WGbt03uR%2BvOOAiT2Nhs88OQi7rMpPsXMPrE%2BcAGOqUBjKC6MKl6c8viaMJxDuyTJwoyVdS5oKZd70wehRM5P7N4mxIHdn%2B9NmrM%2Fx1B3htNfGvpQFEDn6NFP%2FfyGUcfKQorlwLTJ5sRBgx0gfFXN2Jz4LtY4JAopVNGOdtfEhkXvPu1hh9zCeP3LHn%2BXiHo5yQRXp73nnvRdewWSU9K68joLkB12X8uqrv32kznMfF2La%2Bwn0mU2not6upACBs63LI20ls8&X-Amz-Signature=883b772b601b7ef8a88edca6eb82b7e00417903378371cbe8c693179f1b77808&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
