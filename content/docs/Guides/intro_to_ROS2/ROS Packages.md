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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=c38cf266a59fad51c5b44476492e9cdf5e7b033926f424374a5a6e17b878ad66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=a8555963f912ba4387fb0469a17a1e7f41724c0c39e047a1b288fe9cae413a61&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=6b85e76f25d6cb068fa399f615ee1a68701643c6d9b01456a86cc83afabbd941&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=07b24bd6579d30166d349c463b520433c820c02c00a894e3fb7d5b92cacaf509&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=6adeb951c50ec924bbe634c1c72b8eb6cca1533f735de1ef64a2a5c7934884e9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=16203e1f7bcb9aa4df454507dded33883ecce8d4740b52757fb8aa0c81ba3dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BTYW62%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7zvwewOGCnQP4D0aovQ88mJRTlsMNqL8%2Bdp8FC6Ep2QIgeZJ39Mm7QEe%2FqPCQVWdX5qTht0bCGQfUa1%2FlyKlq4oQqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSdJasV%2Bkess9VZUyrcA8ucWSEihTQ2tMVCJ%2FiWLb%2Br6wVDbFCd4nIWN1HDsToVKhcMJKIKM9ShSxjpDIpStOR04EV5W5IsIl8b1QcUziHGo%2BvZQSkwFjjR34JBkgPPLdNz6HwXOeJYyJ5h15eOQ2yUihuQV18wUxYRB5DW1ZNsCdnhfUfQYEDt4NK9WakDRPpjk28pvxubhcJrdoDo%2FoPhR16xpjW9EfeJ5mRnSVrJ68jrRPzEMCGA%2FggSRWxysBEVuXXIk2NPeZ7Syb9l%2F%2FzXimFdHm3D5O1jBFoc0g6VBCUeOfgTTivYB5y5JemxOBPX9VZHtl3voWyRxld3yPNLi7I5TqVManRZaysF1%2FkZZwLUeauqWT%2BAFkeAAPDr39CZgDLY%2FzeIVCwKdGP5oVxI%2FnGdbjzmCt8zrohVtR%2FBOP6V0EVCTqJrQ9N2zIC9DOCNCZ9zE1ipAh%2FuErVbO6g68%2BYimHDfL5%2BGkVTyBPs%2Fp33GZeFrl%2BOvsluodqfl%2BRjjw3DG%2BaMT3bmvICEoJAN4YopKfyfyEeJ3PPymJN38lnEAWibYxZBHTylRa6N5AvYhsgVWDRSp9GQGz6GK%2FoU33p5KLGxXN5Pzv54Y3R8wGfSoYKhONabVHPM7LEmuR2chvUqyeE21E99fMJrlyb4GOqUBNFccSQD0KJaeK%2FIxQYh%2F0SL0COZ7qzdTcjCBYNu9mMJSsNVU0TmfEoDPqkYFmD%2Bamw0U2KKzQTe7HXiswShyKG1x9rOnJX4KAbSdzuVc3BxVEG%2FSqYVZ0VuLtMkCorWjAb2aPw7jSpjIysbS6EDHc8ZiyhTi0Fy%2BgmQpyWXL7F38KZMERu0I4PDatd616NP%2B5LzbvpcOHho4YVeG4%2FnOeWISJmVB&X-Amz-Signature=668bbcfc1fea1667ac81ae90006d7c8d64b292a9757deb4beac92a409ee7f0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
