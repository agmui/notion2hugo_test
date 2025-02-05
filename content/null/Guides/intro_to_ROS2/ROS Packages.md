---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=5ade83fa5bb98e1e5a49e065a2c9615c67e05f8c0c9faafda1ce05a6b0822653&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=ae86e821ad94b2011e3b43c3d25c1851f5cdd2e120af0837a74c9987d8f3b3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=469d913c63f241d067f8b72d990a54b2d289fb97cb734877b5afc62d6e625d18&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=636783faf4835f3b9f0049783695cbe159e615418976799bc0971d6619c2b66e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=a0adbb6f69d0434d63d96ad9efe7beec84a35d3bbff9eb7e101417ee013b4cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=9fc77bd5a76e61158286f61ddb062d37c32f1c06bd2b75a5eb5d9c7ab289e817&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEMPRFA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCoDCCkLOpjwEgOqBEfV9Zb47%2Bf5J3iSp2L1LUHM9sNSwIgeNaZYXnFmEYp39YVrJJGnDsH1vkEzWcK8nUiKSOsvWEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHuhWC3mPzDINbFhhSrcAzEBfYL%2Bqzweab%2BT0S5TqDJYKHBkR%2F4iY3czg5UaJLeABGqxI33fUczjYURiGJjwGpDubCJwZ3IeNdi1X4pjFZ3taRAPm56L4nvmxtDa75erImRgy0u08IS7MuFovKI4XGeQB%2BU3Zne81ftPcGAvo9CKvAcz4ZXUG4sekiPoKINyhsC9iNUDwJB4nVeZouiHSTyfxL212nvKcn5zhcyMl3Tw44QOIi6Ild98ksoAT6jnbkiVJHdFfmGN86fzghMpoHKqLzrAVxt8FD4e35S1vKN%2BeTvqAPPoZGEeY46dyGCTyNRcSNJgkKt3GvYmH2gIvn5egiyLlxY6e6zyR0ztFhyW8oWTSIAOcdbreGlfWynAIBbPyGohHN1AzqE0EZ%2Fqhu9KGaD3xJKuiuYQVMSaRv8w0TMjKTIlUCNKMEIhF4lT%2BAoP4Y0RxMSCF6aNX8dlN5471qnGCujaue8NjV%2BGSqv5hrc72ZKvwGZaBlYrfoMG%2BcE1f1eteb5pJY6Efg99c4nCXbYZK5voGlnTYYwIf4UmSX2cCvIf8G4EjumQbnXA4EbKduyXsjFLRanXKTJYZjCPxKpg%2Bl93X%2BwS0rHeSXvSiviCjJ2Z2s0eFaBH6%2BWGdYS5ZcJWTXATcYFRMPSXjL0GOqUBG3YQuey3PoRBhF3nbThrC0kcc3or0vlNsfb2SKmHeb6TPZYnNO4YTC7p6dsAjgBWNCpWzuKu7hi77T8poMD7furuQZUtc55j%2FwP3P43JCxmmL29EN7fICeUVR8QSbFrcoCRHKtjLWqjEk8jSsr%2FhvAKUR4fgjNr%2BVcOnn%2FJVLWz9vTsSwp7F9KYEKJMl%2BYM58vZsADZNqhfspu0%2FApoDBj6VqkLr&X-Amz-Signature=b3d02edeb69815a1e2b2da97f18dedf8b4c593637eacb298eebf7655a268a052&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
