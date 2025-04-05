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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=5ccc4b50c4ba519a2698213c526fa533e17435c46a2898548edd75931375b6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=50b7a7a414d2c78e3ac040d162a64cd70bf796be3eedc47a0d235b97dc064504&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=602d6c243aa151ef11dfce94a90e7f6024d3a2e570b7e79a8ca3468cc114f240&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=c4be3a0867a8b0766c47498c5ec2a673a918337fde4f3afdfc6d715faaf9c6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=50dc9355e597f560172cebca4b345ad7a6d619d60b76b6a2674f645f631841c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=8cf7ea390389fa52d50ab1496948b38fd9a762a429acb9b4d1da9c99a1eafa62&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRB54YD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIY5DpS14zGb0lIo4bI17J8Z38zg0ox5TZwXQfM6FOHAiBjbET1gOjqBT8cR7alpVxHLqadRq67RelGv%2F%2BnJATt3Sr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM04UmHJBcOxLUYZgIKtwD%2Bzt%2Blh%2FluzPOlEP%2Bb1MRIPIGTTO%2BGGZU0ANYkiinyfn1Owvrz6imTdM5J6bxqFkmRTDrBR8q%2F0igHAgHOKWCBsb2sJ8Rq2lIQ0S1%2Fd5wgIl7yd2CWA8m%2BwmPRVp3JLd5Ru60VRydxWnIeuU9ixTFTZiw2HKiXHtZd4GXyBupdCiwpPZ02ZbcC9xzR%2B22f7wMZ%2FGvbEN3%2BwgimTSh6aiPGLEc8AdSTLh1GlrbXpPnlhbKpbBXvbIsDkg6eOubN%2BB6lnBK%2FtwgFa7nQU3jZSzmyz8YqJubrQZaGPmkL%2BIbzTcdckPyprDb7ZNnARmS522ugWeRJJ4220te%2FETvftK%2FoCEyEvYE1udPFVkxUMqcNr2VcHejClxvOUaQy6848JiytiCLXFKjuxk3%2BI0QsHNLMLKkKS%2Ft%2F4oe5qTXDKIkpkHLidCXdDP52Lji%2BQx2rbR5C7KrkliLVhPWbN1KJ15eF7Y%2Bktz%2F9X4UwkzXsfEYp2r6yCBouWs35s24QOPQSIYly%2BTvQoK8DGa1JKcMrUbNI1Lx5IX%2BDQLccIvAVzcn50fEtyHfsmdNd7toUq31LQ21aCOGi83kCxDE0IK4zZLE0LeGpLgCJz0lyu9u3KNCNzOpf7pqiajD6hR9soow65LGvwY6pgFcN8cgHAyi%2F4L74khoEmwlcFO5CdMR0zdTC1ngPMQblUEpaY2TkPofW7jW1ukqm4%2Fi%2BvCgnuvZY9YuVUhU9AQyDaftWQ4%2BDgi6aGTyVua4QTrMlKws%2B0%2B5or51grzpp7AOBlQiCY%2BWN%2FUMl9L4qv%2FPiFj%2F2FL3OhQMwL10zetIM3mLKzFthIJmVem5gIgVOeIQiejtNKqOACy1k4VF4UrxrpUnV1zy&X-Amz-Signature=75b6e12533df662d65d22ddcf5f2114331039ad2d377b01b91bd2178ca1b2223&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
