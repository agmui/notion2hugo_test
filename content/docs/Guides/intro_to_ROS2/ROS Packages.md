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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=dd72fa9d349fa2b1eefac83460bfd71151d0d373b5b4da728ddc0e2d8f5569fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=5468d5b9a9c5f510f056f0476524ef576ab1d844370a4773193ff53675c65c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=490e6f340aa1244896a547e7862dfc6963f8d54b340d6805ef7838c023214377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=d6f7184e452ca884a61311ad50f959f7aba7be5d384ed9527c9d0651555278d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=0a5345329f6415f0f7d23409fad203156bf742e4d3105023ef24f8ae82c44f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=1af6983ac7c3507e8f7aa8d13db313278a61228f29da4c26651e25a163352868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXOI3DGV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGCI%2FfDFqoaK2%2FKdIwj47TSFr4e1A3YI%2BQ3XPr3G4dQIgJTJymQsoVIWp%2Bo2T9QQ9FGRIE%2B8%2BS38eWNsA%2BmEIlVUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEYze5XM%2FaeJERmbFCrcA3vSSKiCfcw3vYuiKvhW%2BMHA%2BEw4ZGF7f27K0tHs3W1LOOoeFRrATeatR5i%2Be42exSytaqv8BD1Dd7NjcYKOcrxyMuFOOelQPlC6C9F8csGCCE0oRkWK17jXyp9xgLTQpAdw0NMaPVs5LvubUDgyV4v%2FWWcZo5HFLhYUepj908Tu0J7%2FX2C1YGLd91YfgbACSzm0QGhkGAtZ1i9TUGn4uXqB%2FuhW5fuXmVM%2BgFQORxXp2eDP4jGWvGH6fjC20UOEQLbkby60E138e9a23JBeTcfqq6victuQR3K12a393VDsNcqk2lugKa9zdaotpUh4nWUyzl095P2RN92tnQKXDN%2Fa14LAEo%2FulxzqVLi%2B9nRT0x9LmxyE77ZYUOl%2BD%2FWK2YbwqgsZFp7OcDRE4TPZJuujoay2fIZjbU4egIpeRAr54XuUD4cqb90aDhMxzLpzig4tzv5%2Fgfjigy8TqEqQX1NxMjNz9%2Bl9djPJh56ehtz%2FhPNqj7Tv2buPex4nb419%2BQmp%2FISy3piMofeTikFsbzoK8U%2BRSEv%2FYkf2QXDmEjcYdyM4rqW0%2F%2FBXcR1HORrB2IrJgW%2Bx73bsagK4B9hs%2F8BnFbTHibB%2FiitS%2FeMDydvF11ro0z3RykamMOZUMOnZvsQGOqUBTFBdIaTgS2jLVO4oNF25q2vkrHyhbJh5RMbJio94zrkKcCOwCYw3WzTNbp%2BYhyxiJcv6ZEo5fuQQdRHkDZlLLUECeKf0xnwOsYSU2uE2sLDB5kTFPV0800GT4nVJdztki2v%2B%2Fuu5J73ucAb%2FZB9Hgvs3ljkJEpvQl9sZ1BMsQ4q9U%2BRDDG70obVcyATDXs5s1PXb2emPj%2BB%2Fx%2BYP1qGYCfUOOS7R&X-Amz-Signature=88ce9d926902d0cd9c7dee934922b29bc0ae77183314dea1305aea6dca219372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
