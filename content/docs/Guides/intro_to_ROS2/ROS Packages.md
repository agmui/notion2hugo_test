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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=1f2bdbbfeb4e79d0aa2aaa8fe1a6f68d0565333d9a4ed846963069783fde4e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=eee8c7d8f50c7be3738ef6cf853b465aa4dfe3e5e50d3cca2d8c1e19f8c25bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=4c25af399aeb2e7af1c524c562875c1fb93063401cb63adea9044a9eb84b7569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=062425d6accfd5094135c625a5c6cd875fffcdb04f82df910ea886c61809fc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=43ed13b026c9e73faf3c3ed14dc33ba583b3e3f427a50af5233115c82a2a3adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=3539128cdea9fe02e93f5aef335e3f1b41037f9af1fe01b14f55b70c1267f3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GLZUSWN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCnHDMWQhRuustj7w1izyXcOkZtTRIfGpr0ywLHHFCpLAIgcE7lSAuUGnFb0Z2R1sBVT%2BpSL2pb3WmICz%2FJErCW6Ogq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDP0Nvnfs0MBrrBdRGSrcA%2B%2BBcB7fU3Uzv2HG%2BkioRi9CJHCRqjdTwCdNUxKd0cw30sS1YoqCVn3ibi0qLSLab1cWEMzJQWjvC2gAuW37ey9fGhKacbUmc6%2BC8BYvYOg3jGiwhCNdKVUVyDeRVvjJF7ioNiIgKmze8xqZZDvlD9M5wiGWdPCt9uZzBm68vCdSITuzLWY%2FKk9KxQVm3ytQk3GbXYAlDMGMvvPff8Ys6Z3SEXGlKH47nMQv9u0yf52uxZsb81YxejTKIi9TPi7GgOifmoOcYdiOmw2Erthbwa58HT7Z5h5XZExPS3r%2FCeZe6cpQtFBBeYDikOGcAgGP%2ByqPUnbgQP%2Fv58KKnYpNC1zIiS1L2PIWvDa9gVnl7TkaOhVdr0DGaFqpkxXiox7EbkssRcmU14QwXGShtwLqPatTrR2uh6%2FAI1I2yh%2BSNUVYokxLw2HE44nrXmlNitXmG%2FyPKpzxPTynDT7%2BtpHi5eCj4wr7H%2B9Kc%2FRj5cPdBfCiFVs4ozQtSNQRO927Brnhx9fI43tyRZAuDkal1ikkoTlhx2ef88VzZ4WDCU%2Fch5lOTw27uqh1Vv2yq83E1rA9IXZIEllJsBupdAux8AdeKTp62dlverTCSRQaVL8o5ekJfQBO5Db%2FbHThFNb2MNb8%2BcQGOqUBlr04JVa%2FaRI8agEv2hghIQb4x2AglRPWzcXMEJMDdLnR%2F6kGaOPuHV3FvKQQiC2LedEc4iU%2FpDvUpidaleXEVZm9GS97Cd330CJm0AggsG6tGvUJVhhWrd%2B4y%2FlpNUVt3t5MoBiDu8bPAU0TCJY9xpxZRayJH50IxGQ75NEcn2k6NGi3ItmH1U6aQp1ujJ5ZwfHBb%2FKzYju4C8J8wx2bb369Qq0D&X-Amz-Signature=6dce2bf0f382fcabd2e04e7f4f4841918d50b76fbb35b51f8ba484052fe13434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
