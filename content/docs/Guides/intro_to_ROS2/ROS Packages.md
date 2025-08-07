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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=80dec475904ccdd31f98450731c75f3737abf1be79d2f83a85400fe244f0431b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=51685ceb3e938c222cef314eabe5f52d7936920d09ecce583d0280bccb062591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=aec1016c417d8e9b940abae30163e1686ef708e55abcb4cb01239955814a9cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=57d8f9fb81642acbe5ccbf3a6c2d961e910518cb6bd2709b54cc238b37acb9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=972e5becf460b51f3deac66fedf28526c2fbbc74990558c241384ce1d0729ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=bd4c9b1f29e904db596b254ba3f83211afe2cb1458a509ec300cf62808a291e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXORZ7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIA6cjprtbJdracyTyMG%2B79bWMdy6SO%2FDtnVWlesjapLcAiEAwxe99cCI2a78vpT%2Bun3WoNV%2FX8PKPG6BeWgKznJqpRsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGreHNxEdHe6C1oBSrcAy4WQyZO%2ByG4Y4dpdgNUR5%2BK2zU3LOYTwiTwHiVYhvIK5u8S7BAdyAsh7mELKYAkdE5WscVsPwv0%2BDOzc9ntIZpe9Vj5uMaMmj3TGBSnUwqlB%2F4FgcdG72LtTyW7l3y6mU0Q2aY%2B%2Bzo1lSlnWhr5HdCVW%2F0lf2Et%2Ftk72QqWKhhCKzp8XoHrmmDl3pSVz6dUg%2BNn17hiamUCFhbUt%2F8xJk95ddfRWeNTsF0EMGMqvMa2xW7WQwfSIJqbVotmljvQMs01eBj1Xe%2B6e2b%2FQIGktXYaMzjA%2Fmq%2Fxdat0YEWeyf9UF17BERAfKIIPnsaMqmwTL%2BGtLTihmeX4WuGK4KO4rh91OgSU2IYcKBw2B6jHxyc6STYrIdP4W2ugePNIT532kCRUTWamvioaZI012jrDMsR%2Fop%2B9GS8%2FYwCEYj4GMRatGa88SpzRW7boWZgBlmzZxg5%2BvKbZ3xeBzxKtidVwuDImDc7IP%2B1IJzpyycJfMiSSygMc3FJmhsPmSz%2Fyj2RPMD3WJkb%2FX8wJZ%2B3n1z6ULJwBVsQlEdy6bw852RKK8Jm9pAT%2F10z2muBfK7%2FIdl4F%2FsCpH%2B7fmsqai%2FIJKkRh9Lzi8dY6y7wvg3sGMRZPBXKUZa5JBdRMTKnioQ8MKui0MQGOqUB1hQjQVT8sx5qxcF9%2FoS2ViqOu9J4OMRJFNTcB2UrrHt4NkSdW1sHMtHeFbmhqbLsTcE9cN04i9a4Nzuxxkz54Ccq14DY%2FSuq1S2b%2BbACL%2BBtkmYFzZkLFziCoV1xHfUYhEmvkP00PdLn0GGzKZsBFDRz%2F2wHZupMrvUV21fJXuMyKtvyCHn5jB4G0mSIksBxIJgGCXGXAuOFlIwPm0V3kwitn5wv&X-Amz-Signature=5075864f2893dc96e0cdf2a1778217c088c0e8fe6a15629a90e550cb77b9403f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
