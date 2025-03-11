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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=d73772dde0b1b72fc693242e62c3723096be0f897a6a79f92f489d12b9dfdcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=83d656ec82a953a47ff33509856ec7e422ac1bd8b709bfc874f3108109d3bd04&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=8cf073dc15f440bfd766f91ce899c8407b23b54ba1760a5639a160b5a660cfc3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=e29532418c8d6e0acb98ff4c14879e096777bfdb131a36fe9044d00c7206632e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=281ccccefc07bfa63636f802e0c8c6f88cef452b3dd95e2073c9929bcfb1fb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=7e18bb110fe7d086e0421771fe66508dd8aaf0de57123728d9cfb94a69af747b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPCTWRS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAJgFb8CeU3pWHHFyJkunE0QHhJFmnQGh4qFBqPekH6xAiByJG%2BhEJAqOy%2FJLIa6VojPeivqfjlcM7o1PBGqb%2BqPZCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDK9krnUPEQkGsVZlKtwDiI7djQD2TePZ3N6QPt7yogh0VRip%2FOurvFLxGatzFGQHy0uMdFC6ifGeCAhgWNuhB2Os7FIGauASPeI87vQZGE2VXnW8FiXe8YMgDbLA%2BF4rILfGnu58PANuGH%2BSWb3%2B5gRWGJcJmKPL6QIAroYLVH6gbHlsLIeBro06Zber1rKL5kaOp%2B9szkdcA7ZTYPPy2Jv1VXD44SKb8PP25No5izP%2F1rDgRw3gpo7QIB9fLay5vL%2B2b31X8BTq3yjvzRBbitf%2FwCdC917KfHP0ZN2N1zhaekuE5UBQEAE0B13Ll2uYYWKsBadaLVINs7GzW0BUARwjdYK3FHd5lY4KMLsff1WyruugSh9jzN0RCYw1JTm1BVVUxxR2kei3NJsDxFNJnbjSve9i13uMu%2F1xP3d1xfSL8F%2FGlsL3hlc0lPPdY5eszVaDojZv%2BJHacZh%2Bd77OdrRQflTjJQAUUEpwkZeH53RAbMNOsT4850MEm5C%2BGV3TPUnBhldP2TbPw76Z3IMMyiYANyzChZEQpaOPdmUnrUStK7aovw9KxE1PXRSPmAHckNgUDczQ1%2BzCUslxrNRvDxknjlktQZWjTPEbtyo2sB7mFebMvTld9waOhnGVuMUunAxFcHavY9W1ig8w0tC%2BvgY6pgEGDsckffQ%2FTY9O52%2FKdojQpFiCzCMmL0B2nVIGTusByV6fmQfYbrBWdGyAU2baHPssV9KBHyjtQULw4H2%2Fxst39AhQOfI%2BXavfZ%2FxiB%2BcTqNVSBOYT%2BA0Tko7KS3gG3wq%2BcAX7eRN6gn%2BHCfrHVHVGXdWeaez7fhF04bDg5mSN%2FsVd5NnmqSQeIDulOEYqTM3Ue5B%2BFS092ilp2SATfkWUQwgjsmU3&X-Amz-Signature=ff4f49ceb0df493ab97ee1f1c474cc4980467eb7c6ddd409cb55647554f6f2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
