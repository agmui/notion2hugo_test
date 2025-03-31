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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=dd23bf568745ada34dd3754bf75fc60f924494fea1bcd78c6b81ca1f2180dd40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=02a0b9643282e8a7c2609c231c03c87f3d84e9b5fcf75cbf473f5bbea43954a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=4bcfdf68d73549a3b85fed870776172583a932f0dfaaed1a2686938321812aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=ce76b95a2f013310ac784dade1ec0083fae1ce74d2a1bc85be2a08199c139d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=5010b56799db974ecf8e329de9c02780a3a38df84a94b6a9e2e94bf64c4785be&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=fffb6d6e6010d3edd16320fc476b25ff3d7f6f9d852bab361d00e6e9920afa09&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BBMO6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCnHj1otwHRLLz1zy6QLhIkPvxddg26qxoWfDam3JZ%2F7gIgTGih7pgOeO8EUbjfCT7BCZyJ%2F0WmKoymONij7XBesBgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdYerhAYUcR4R%2F01ircAz7tKwKYe07yV7tcPBUHeXs1UUkIjm5IiDWhI5ZT5cfEr6uy6sjNO7iBVLjCY1b8jXG6OVH88ZGPt3CGBON%2FQzYI4ldvUnoETy1YJjIhcP5ohu%2BqvSVo0bYmVJTFKpgimHjNXc%2Fc6TnYNp5ryA%2FXwllL2Gk8s2CRGc8FO60%2F6XdeKYnhGxDCdxL8TD68CECJ1M3tomSSPgrl2QcuV%2BHP5JOR5p0H%2BdHf%2FOSnf24TMXrb9IbOqcTnUXSIvlB%2BS36N1giPu8UDPlEW%2BpoIapN9UZU%2BXFNnW%2BDDHJ5eZSPWLHXzQjGA1rRBrCE8cyvSVtmIk79LHsfLq63m6uF%2BhtCP%2ByHEoS526S33uSwyeBk%2BFrFryo1bbewR1SPQvugmDHOMh7D7A5T1iyYGngjyO31aOgWI2cgmvQpTrN6CqbZx3EHQI1uP7fLsHUB5EQO%2BvqffjH78iSdLzKbGoqO%2FbBEvdPtmw7h0pGaqqXfoKZtJ8b91s9t0uWyaaIA9s0XhLMxrNc8UUMGLIMasYq9KJWMhlOOY3yoPjg8B0Rv7OCMdm%2Bp16o40aTc6oIYqtP8bHltVx432xL71BCZb9KbO4f7rMRj9QGjhp7Zh5osJXT166pVQA33h56aE%2FkJH6nnFMMfLqL8GOqUBRA%2FCkSOhTH0%2BfsdWVwps49QR9PqZP9KXDjkAFuS93cvV28%2BaBJN6K1uCDFIefIcBsq1l1fk9EcyekRKlImfJlgktPRWy1g9HtF%2FjdiYMgrBXTmzZTIy4PRR7DBIx0NoAlS7NwlavCnqNFtH3zKl6o4ua%2BIMYfZiRysEw3dHrxwNOQ2nv%2B7353USZztLc8Xk7d%2FbQVSLcsRosPTH5IuvWSStHz0Vu&X-Amz-Signature=fa7a4c43ef95b8c6097c53fb4ef96341dd2495fdf4133557a581d4043315d133&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
