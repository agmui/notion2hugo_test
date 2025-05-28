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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=385c4097e7c3b12a91089dadab57835d6ec4064972c44100be9e630430dd8534&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=ea4cd7840f44fcd6a302b2a72a009e67a428106cd040100b92e1444159f27bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=c6c665788e930b6c81236bd6e2b9e7606040c33c5105e1263f9cec507f56b1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=268b2fa0048ee85a2299ec960096d3291d0e72f62c523706fb63236ca6ee85b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=4a8613ac7a4ab2a8c37b188ea748478860af0ae3e3078a33c7149594adee009b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=915b3b56d4a53ca248d6e4c42f4bbd1067c07ad318642306cdbc5c4e73802dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGSKQJJC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2%2FbWwNBPdBWGQdhlC2qJhjad4pUTmuY7N06dnUaH41AiEAhZXD3qq2BSMJpVbvppjBpXkbw6Dy7o0CH%2FvxLHN1Wpkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHUJlceUnYyWlxFP8SrcA%2BNC%2B26gOoNA0UT%2FgemZYEIfeRxtPXel62CSPFLkmuRpZa7F2i%2BIG0GAsbdaZoEUJ2bOTAA%2FUNSQaH9aO%2B3BsRKBhFdhxf2SsWhZJyBFfsSENxtCBAubo3vX7QCpn29U8XsG9QGvL%2BhY6qgRik%2FDM6rgb6isqKnF4W7QS%2F5LTgFJICDQqLJCtc9iYFMExeLlWO5XsZc4E0PEXXaN%2FM%2BPETkdgGcXiqNZUYY3ugZAP9Jy486pQv61UL5JeUSTyODadTK%2F0PUD3AxfHGiaZaOtbzrIyKJq0HhIoYzziE9YpinnYe3Evn239OyQpNReJ5vftCRATLWmeB4x82XatyDO6LHZTHPXdrVPfhfVgOJ4feDRn3xzVRhWHVEM%2FmiBhg54Dw9YqjfT%2BfZMmmoKfn%2FPX9fZtFEO9fXh945iQKLHcZOSj%2BJXRQOioodZgGsJuVuadk%2BsuPD7hTY4xwwqnsn2vfNOA%2FWBzrRlXqvSIupGhnbI14ntLKLacDGk8jjiPfjWL%2BA7aODoLt7oTauTAtkjyHfYyTovmokdccG9Iy%2FjZUK2uo2g9ZmPv5Ck%2Bw2xmvTKBH6rhOtMmdc1039LyuIovuO5NOL%2F7KIBEwsr7PiZvoUWZS%2Bbp1tSJ%2BIbwUZjMKf22sEGOqUBmITNrA4E%2FbhJYID4NXAMtchb3Vna%2FGftv5wexCJ2K4k5rkB43aeHnq9xU6U8Z%2FCS9i7fQUiir%2F6WccivChEeMTwrM%2BzEd2f2zm5sKJUwJ2O5gpdmmyo%2FhC9RL7Dn4syyWWdxNeFO9foDcxQON%2BOJmzZ%2FVSEUWzrliLDLp85cIr9q7v0AWn7xDovcDKMYND6%2Fco6Mi0t26piO%2Bs2%2BD4IJVvbcrO%2Fu&X-Amz-Signature=63c639f9ede5d896aca243d290ea404ade0008f7363e85912df290f4a5943a89&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
