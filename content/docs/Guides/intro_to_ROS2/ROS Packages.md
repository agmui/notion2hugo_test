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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=6ad86a336fca705df80f279bb8d7737a374e22a284c2921b11ed7eee140c0669&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=0f4e04b42b17b13a24dbdd40b4286c45d673edc1ea537068c02b63b4c2ba9506&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=2716ffecc2e674aa7eae42dd056302d4cef8e4b37cdd27a568fc2f5fcaa21727&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=4920f5cbf5b1d8b4b937bccd06a88ff99ca04e031268669c1c1f400ce5fe2d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=f72fea1a283ada1736178047d768b143a7fd9df23d343a4d4ddb4b5c49d4bc57&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=58c848b6c3014dc2e351c854ba76dee14629be0c0f7cacfa2b6797531a4d9845&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGCSYNP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDoIEdNqdaNFKqv2Ev8GRohNUTjlmeaY1LEo0ZCNfVQIgOVlEfrEyohe6cW%2BgbxOMN280VUSEpbXKTrxsJ3JKAF4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeMKafXf4PZvEQJLircA6qwWJKHahQCo0L%2BJKfZhxp6ywcjSZGG%2B6vUWfYs9mKtHWQ1NSMU3napxmzvt9405mHEVhOJj4Bi%2Fkzud5%2Br9TjCRSRDOy1Um67iWjenxtu7mdKZppcck%2BlTs8QFdsUIEQgrIzw%2Bp8fRakQipSjYlLfHIyzXhV%2BDxiCInYhk4oB%2Br80e811aHQ6bXUwUvzxon8NvwnEHJYHh4jXnEy20gNieRY75P2zwpvTSVMUNmWgAx2PlkP160Y%2Bb7WGj1ExA78p%2Fj11MTuOLSgmcCdimLtIotXphWw6uMgh9L7FdMQufgu15l1xktE00LXjcQwMgzu1EbvoJpW4hPG4fjRuGQorpsZ%2Fbeg15p3iwFb7vh%2Bt%2FZahYzhvx5f2SIKSSEjMU%2FEX7zuPV9LeCnMequZHkYFh9Zl190dTaahyaceHM2B35qQxDxm1RGX3ADuvJpztOixXJnsrQGwGrij6TKMAouTCMNMWui%2F%2BrMvX2cxTz0hsBy43nYbwooojJ84Kz5RkvTfDWWSJqpRJOwbuD5THm3%2ByD525ZD%2B4cYywYl5szzA0%2BWJ1ieobGulJe%2FypCcuJyykm2gTh%2BELde8TBycB7XWNS7jGH6VzRNb1KYUnra8CYtVhv2dgVufJgwQtEZMJS758EGOqUBLG8%2FJW0L2ANv5V6YAIVMuOV9sYJC0jbPHavnlh3t5EIX1tYnOCmXaCSbIU0PqgP4m9Rii1owSfD542krp8tzzK3lWh%2BVy1Bvgqi4bbgfDlDVlYbPyznb3jZqswZcv%2BzkTFqrphmIwwUN3SFRbi8W6kGlz4Wr1fF8v2NmDoWFu8dIrG7SPwfvBbuD5gvyqYxDpb9dPJKyEJEqas1XEDROWzW0Q3nq&X-Amz-Signature=f0ab4ff0d8ea04b9b2849f49218e63e28cb57136a10908ca0c1afea22b9e3b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
