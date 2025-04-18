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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=6b0d6a7aba9613463cfb3de0190ada73a197888c2a0e6b8b67afe9ea5dcfa30c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=7f1ff7c453737116771eb338b9b3297becfa277865d6403206cb023ba28c76ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=ad6577195f0ab5b60456187171edb4ba1d1c754793a1895e69beb10191a70e75&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=f9c13320abc63fb1af0d4161d9f12b74c5b2fcfe61c3c4b43df49f916fadcafa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=d88f494e2d0cc3e9e00e74204aa740e86c5aba46ac72f280119dc7102935621f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=0e3f29e21a683240a57b2e5608c0f6b4d4ce011d187c5116f9916694456cfce3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEO3XTP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC1OL2sZbOHxn0g3D8EklSQobrK17R3QT%2FzH8FF0QtlGwIfTqs9q0WQ%2BW5ZK7wmqXJS5tJtYX2izYWMqIbV1Ah6xyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyy%2FvQv3nbl%2BgKYe%2BKtwDH132XyGZRIYfgk1YplpMmmXcr9C70L5ZOGql%2BZ2xJGWI2sB2JKnDmbv%2FtLLCl8qvDt0f%2BvoUjE0s2ayzQay1A09cCEtCVFrQNdXhSD693qoYDE6BrjYKQC2hxGDJkFIzB6dF0UpOqYxNJL6fXIyHAXZEJbJx8E9r0Z8Sx1ZIZ%2BeU2E5FWgndYKyJTVYEQ5QsuWtz7Bbiqxzz%2BQyI3xrb39L5vwjAyCr%2FQGNkxyW%2BvAynybiG4CH0Xc8q80M49NdO54OaxDD2WdiMQApBJukl9tYPMz%2BAtbXUk%2B9R%2B1L5ZsCbe5pFw0XMidc6qHgP6ZmyhT1PHcubbcHjT1IZvbp3JlybJ0Z83Slrhv8MLnBqgcQb4EvkMk6UEVXxvkCIh1emNEjla302ls5JGAJssStLwNw13aEo7KdxI%2BqYRtdqioKwaRLnsLgaPXzxvksBmby2U31%2BZBFTIcg36ZsiexGKjuMPda9AKVmDtgrCXEk6yIHcMdgkqk2amGnHohGyaJK6o45RABB3auO8SjtwBx8vxJakmKRsmhaEE3HSI3NY%2BZElOhGM769X0Pn0V2nt%2Be8XG5dsQzYt%2BgGzYwjR5Qhj4e7kOAPb%2FZFbcsDipzmJck3eEbPOncQw4drgURQwrZiLwAY6pgGz4BStcrVvlnGZ%2FHLsj3gdChMPItS%2BOFIHMIwJY2%2F%2F8KkLpASPHRu7YmCa8GNUeFyuA15RvUFtJrHqGuBYuickTLdg8PyYgRF6Pee8f1jjtoU5CFm6Cpk5JDMt52ezhImzss69K%2FQiELUyinlHOEaj5OSHwzB8guWFeliVLAC6iUWPpHIwfA%2BeNHwsip%2FmFyveSLLvk5hJD0y3FMK%2FCG5JPeq7jATS&X-Amz-Signature=c16352adb5f8cbc1863433c1a92b2ca4629e67fdae0ec08eabd337c771b9b9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
