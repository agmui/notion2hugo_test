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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=97fa502486bf774cc3ebdd6ed613acb24812a6243cc5310176f9552d3a73324f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=6f22bae6e15894f1d811aa6d92b8629d981c32e95441606f400745728141614b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=d6d0cd8541dbc17366e7cffdd4672e47c19602452d7e9cd9a8029cdb74dbcd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=ca8b91de99725dd85c0cf4553d713d178a4a9f4ee1556b142aedeff1d943afef&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=57a351dc8ced0da121647693d266e8421c882d013ae1e7e14092af8feecd71a4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=9e3182d744b3df7d13c9b4a6078581dcc70e144652a143431c05962780f01ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YUPTVGW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF4PZkPAL%2F1Ek%2BzPM3lbFMNtENjAu4vB%2F%2BTp7xUK0wslAiBkW7a4bNy%2BlRXK%2BWxo%2FmMTyh7zrhpXF3bIzB6O8wRh1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM8UD02hGioD5sibp1KtwD%2F3fQ9tvS6lytfUFI54HLi0Cnmh%2Bmm%2Ff3jd6ZoMlpcBRl%2F32GvMadBWk%2BUR3MS0bAxEXbETeJPD783fMH6JykQW3Z3ogV26wG3klQEk6B%2FxMvTDn9noTfB8Ll1j8dzAZt5hjCyB%2FHaJxdvje0dNlNEfhGjI6FPV%2FzUJCRuKb5mpMQdAVPkLyMyGKIzw2IBUAHzEKoAUek03F%2BvNIE19tBBTLwUNeI4Nr7z784vhrEATJQkGDU3ziHf4HH1tJUnr60GkccY1BxVLyydB17%2FFcdvF53Pmr3M%2FxZeUG1pWAtGKz7boPPp5Fm1dQDONIGa%2FINIP7ttgOAJ4iwuiGCh1ngknp%2BhDJgiM%2BcSlYpGZTN7l6VmaqxpgTsFnyTsgUawpS78uIUMNIE3nnfpHOYhLY0TzfwvH74kyU6dK0tNp2TK0gnR8mL9vNS3jO8oZodjsOmE3mh0HBNsTRpLBJpZ9WjlidfXMRa75e1QNiAiSXNyWunrYPJrRNtUv8HsMBH51x%2B%2BWa4aerClRKSs9mBUUKXeuKwl%2FcBsHAxa31ehgzHJOl3RXJqEXyGlUbW5h2jz3BUjhh0sq9lOLxDzQLIKbxIBDqLbxGzuMmxlzySkAyxGyO%2FEv5yxkHDn10VTHcw98TpvgY6pgGrOd6nqy7XBwrEKLMv%2F4gi2QpQCX6DPNdfFgpV%2FWfa6RgfUN3MshUwUMxCqX049p26kKU%2FijtWlGVUJNDUU8pEE7G8NrlxtAEI%2FbQhbQrgtMf0fM6g5Rsoyo1R8edVADWKKo9pBwZI7%2B1ohXOcV%2FOq%2FH458E1XsGhHv7NnQ9L7M0aPjHwIigtoDWCo13dHC%2BZzKeux2gYeZsdxdECQFokvqmOZiGXW&X-Amz-Signature=49883456fa8d0c2b166ce78d2f6ae6fbfe37a6b81509397b7b3b7514d8613c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
