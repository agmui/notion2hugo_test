---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=aeb8c3b66360d320a821c9de88d7d23e5694b557f042f48d1e78121b8e31cd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=01edfe910c57045f45d44386c333d6f1f7c1b497b056f3019704ccee67aab738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=33ecdf748738ce407357180d6d2c5d92b8f5786260f43f04332354b48d9e3a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=46d080f533488d0e6d69cb512c5a6cb88a09dac82e3dcb36bf31bee00104557b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=33741a1f8a8f02677431622d69f009bb3e9620ae8fd9df74a987275cec2c552b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=f029cf0b4c5eb59990c96604437d317f8d515427eec995930fdcd88919f32b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BV2ENDJ%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCID7x%2BcmpT7HnXYyqePEvG2Sia%2Fm08Kw9WA1YD4ZzdeOcAiBYKBnrYIGRj5NA9qCtbn%2F2yQjsH%2BWZeUQiSpMyiCkDeSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZ94I4KtKtesZwi6KtwDObTR8joZClNoVuWXtaRDDPWaHSxvcay%2F3Dut2RVcIWnFQ7ZP%2FqUZA%2BRmejSwnu6j1AdYRFgMhirjBJRGFnHZMs43ZYpaovoRHDtoEjWhuPdR5jHEHUw8EkD4qnWytDykC6uWdyXETiP0Ku4G2CPk6L5RmRPWVk2SckJ2mfa6xbkALoWZx%2FyboisTl5c6teSt18OWvz4MsZ%2BiVekZj8ndjO7n%2BeXrBQuvfcJiTwu4yA1QS6HFD8J66ffpKiodFfYWxIo8gG7gVxZhl236OHoRvHM90qwhTRhOrHwG6RPSaHV7vj0L079rzWJrHG%2BROC3AnjyaVgBPymmtpHXp1vfIMYQgfbgnmSzmbpKz5mf0NagD3TNA6CpZR9lKWfhNbUbZalHhOoINNCIFjcihpopZBIDlC6PxC7HELup0Dn1KmFtuA4shJQDqGhHl%2FntEN2IQdFCZERVG3QcVwbBJNEnclYfy7q3SIXRzsyqm7NYQVxCaEuXGVzw2LKYV0EyVUqF%2BeVrdTXQshACjRBnAuClB243c0FaGxFxAwhR8zCoaP9Obf5S4GrzdrpUcITGwTRNPc7y%2FwPtp%2BwQcPGo1%2B7VtLRhDGZz9WEnvCLb8APQnZbdgWeQfnSL17MzBD8kw04uDxgY6pgGs6bb4KX1Cz8sjreVF9K44lMazU23dlZYY%2FqAKL0Sd3dEp%2BZgerighP%2FxHrOMBjNcN2auvwbhE3KtQF4%2FaTKqOQfWKjYICp%2BBbBzo0X4bGkfrhDpLPqQvpmzY8%2FlMUMJkGLyb3GFBNMy9r2vasr8myPVdfyP7C7jtCj1PhPr%2BU%2Be%2FrpMNFdAuiORDR16MSmWgzgmf3oHwJ5g2pwa2dGTWAYvwllpX1&X-Amz-Signature=1cf00f631feb3ee90b111822149ba4e95f8b6551f53b9a2c80590164daf45a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
