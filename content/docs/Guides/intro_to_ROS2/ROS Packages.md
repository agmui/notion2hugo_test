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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=258f9352921bb4f2c1b61ff42ce8f561ad552242627f6d1ac99fe6f700585d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=3cfe79c2337c6a2c7762d7f8646f9d93ecec16803625a663c4731a2d78176df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=d61fa6f012f41d648284d532b2ef595bc89aa25d3d7ba626bfccb509f6ad828b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=1fc4773097636cb73e1cf4e5000b39624ab2a6eda5c47d04b672dad7afc4bde2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=b034bd1f30ffdfb05ab6ac753bf0a92397976dc4aeb8eef76e5f4d56ecd6a419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=8e452e0702ca0a990e2ed7267673c9e85465081945848bbecd0ee3b5a035ee17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJJIF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICR%2FimnsbM5g%2BxhL1To9vTQwMHCKQKBWNyGVSbTynJsqAiApKHXr5bOH0dtbJVRS7cHAvuCIGn0uNEW%2BI2xnQnvWWCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM%2BzFweM8w34JCFdD8KtwDV86eJ7WbByilOrBaDlsFpqiYAKTJevGPXryjAGxdXGPeGzKGd%2Bfr4Zf9bwNLyVfJy0ZG%2BBleWgBWR2HeN5LpXJcJpM5yhdtq6o5GUiG1GOlVzCqTgJduM0T3KQrD20ErSB2aSiQo8exXXBfZsUPyE7OSSXO6LPECCupSns0Oy1Q%2BWwwQiWIFOOdXcbC0NOIYTIFCA6FHz2qqQvlMqPiATom9%2BtUZ%2ByOOdtLaw%2BXC%2FIRoDlwS80nBVAihKhzEbHheb1KTh%2FO4epnvQXU0pQTkFqbb8Ex6cvaXfy2wHww69iVLb7lebpYtg1Y3edu05GVfMyrcaweGIhR3PmdkiYRRia2QKT2OzmZv6FVPI4EDrYtV45ipQ%2B725qj9mW%2BE3XGBfbMIbaS67CZlj1RSxyU8CO6OVrP%2FctRUeG%2FudlyfPCykSV0YWUMvT0iSSJV5b8mi2umRbAhkNT%2BZ40PwJOEd4u0F9g7I5G%2B5K8tNuAx1I6Qt2YbmzvfiZ%2FH44hPZeElSyVtQ4Uncy1n19L9GycYomM5%2FAAvFSn8E1wvm%2BSB2%2FB8YOb5EeBqMkIZhzPmho4KXEX%2Bgs5%2Bm1yDBbVZidFWflun7wIdYiWU109N1hkfw3wsUVHPbVWBH3eojGngwkYHCxAY6pgElWVbVj8Ltb2zkYW96R3s0%2BsX3HxuM98b1fZBf9ZLYhHcRywqwsmPbSE8BYyl6t1%2FiZy783JHVZvrBUYH78QLaXZDi6P9F7vfzvxsf0gYEkRqYr57yOEWfjvYzZ%2Bti2h4yZL7I5tIIQDS6KlUVFCjCPXIqWtwvw6JYaKWXZe5ualUAVxy8RpY59LfkWOUre8Wx9qoZH%2FBDV9jc%2B84GujNr9QLo0Vdq&X-Amz-Signature=6368d9299debb0341453fb6580a32b5754cca6b278333ceccbaeafc875bfa246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
