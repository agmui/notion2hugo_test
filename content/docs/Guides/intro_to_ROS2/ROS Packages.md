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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=c693534fb0f39cda87c1f5becef811bd9464344391e8a7e57025ab7a345ab8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=658a98871b446a15d9984b80290f3dc732f91d768c1aa8cd1878588d53331a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=fd4f4f76fa5c870a7b76e457a2ca9b49d693838f44d66aa9b857fbafd11d4dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=9666907faa8f79de1ac29b894007fff3a980ddf7271ecba2fa078b29b4d78a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=eedf52bd232d25d40ed0107f33337a4d505beb261464ce453a198b991e748dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=a931a0b1496b5c3530019291404360430b477c162863bdc2a7635c941bf8d7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMUYFCIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3gOTI6r61Ew6O6NI2GDx%2BSORoeC%2FksBWxeMAk%2FI7DZgIgMHnVdAGC3PkSG8DophC8KQxtqSsaeJfdI4JEoWkd3XAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB5GExWo87RevkQPmyrcA%2BDdhVEMeVxxZSGc6XVzZJpVVV9tlp9S%2BMuY8Hrk%2BtGMBPhb828yLmzmH50yPeA%2FMbomH9A%2B%2FbnIUWLV1ozPuBVczJmfEEXWeoOxEmVIcDL9UNbS81aykXp2ZMZd0%2Fa8plztXYsnPte4X1DndeBg4mvgqbM2wqymZ6IgcaUVIOIGtJnjlBK2zUcZtRC7VfgQMijzMIZhnzWSUIoJESWCWy7VrpaisNjqXe4C4anEmnwZOW5VxHvBLJdk9QRV8KdZdl5L%2Bf%2BJ4fPaHvjWmgOFwczv09OinenMUBwUA465%2Ft30Z1mJ%2FTVkZ70693yXrdSn1bP2eZtoK%2ByKJzUlMyiYUQ3i2Wa9Rxcuf54h4ScDdd1ZvDjMB08KQBOQJAmXS7Xv3jo9DVOgL8NlM4fmL52Oz0LglVM%2FmHpFS5SZl247AefYc3AX1cbqWnTM1s6ub1AXPvHXSB9f7erAFpaoibkkAK4%2BQRZ0TN2j1jVvD7%2BWEK54spykG2Mn%2B1P%2BzDO5wFA6TrqDgg%2BWSkhn28iez6wt51DjRgD5ZBczJjnm7kWLzXSRcqsg3tS5JGnRmZp73fLx8MlWDvQbpGxAjxcQhtO6oPvV80wdeckiGEVZuUVNNs7eiSWGKJ5QJuaGxukZMO66lsQGOqUBnOz0xX01O9WaVXXpvVoHNDG2rPJUWp3Gusf%2FuhG89t2Kc%2F4S5YpdSIa2%2BmMV2KSmvEkD1FDWuaaHc%2FFVYDmzbw8vUZlPe3dHFXwBfT05%2FIL4YgNmfWla07Rm%2BVONbfsz14oZa4kLWLFdZY6EwiReS5xPdZEGigzR8MSVAJF7iAKqyMg5yZ8xmbV7aFAm2yqxueo2zHxVr8VuuL3P88yxY6uZhEPN&X-Amz-Signature=3b7f41874117cb0cd1e4eda3ca25cd6ae6247f99848fa2dabe0300141f7a2772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
