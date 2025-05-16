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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=87245d33e60b389db2e0df87eaf2bd3e52f8dd79527eef626b46b4461ca0da81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=8c558107fd44cba77f985e5773355f49ca724be5dfd1c4326417f6fb9925fcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=7c055e3dc62a61a6b77c128af74a6fb25afc05269cee41a49ed70a69d9c7814c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=d9c5012ee08917939960a24b2e063c7f7d7f364fbee1efd964003d418db4c000&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=d394515637a4f58eaf009bbd1040955a202295c9b73a2f5614606b5a94819f96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=43944d82601f33103e66fdd4293a823fa3da21f5fc2c1f8c8b8093ee1095a1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSPKNVWW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKPNbIA9g5PRNwWJNwetSJqAcRVCfXsF5ZxMFZQ3LmzAiAPl0cMhURTkLIN6GWmjkrsf8VSmabFxv4iTgmC%2B491PCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMZUvpFEHJonmBm1NLKtwD5%2BUUWGfkv0nQXArsAq8gs1cfWfJgt%2FnaMrM1U%2B%2F6IWiN9W1WH6yywjbjaKR4bNVmZeZJ3j9Af1lfRVf1KtRKVsDsK%2BFgpB%2FEYn4oEnlrAxz3DwoHKvHVc%2Fhq06dLF%2F%2BdKTRZLF3c7uxfHzROHjuVapaUtnRI791bW1tP%2BjWgvAm1IbFIduB2fsbJ8ZnkQowB8kN2R5mwKNsVW4v%2FX8HGwFXoyjwZfB92T3slpecil19S%2BaB3qukLrqTuuXUBIMXABikCmnZb%2FZubiaQLFBPyV%2BOzAVzr3amaKemdJVq80fhtYWU9rnxaImpiiB4kb2W1%2Bu50U5FX%2BceAwHzj0sa13wR4W%2FLZ5dUkS5exV5dTjgmktwzNRUxX3FHKDvK%2Bqo5LQPdJ%2BkxYykaDcXzJ9ezXMDS0lSV0cYvdaei2NXkiYgdmCMC%2FWXi4vtses61b%2F8PVmOF0hkGP%2BnNSrGetIKw7pY1CmXKI5yB4nwwwykCSPgcKO%2BCoEZvBJGoav5J9CyeUpj1D9jbwp5%2FXA2IxoZ5kQMacB0621mLmF7D0JJUxC8aEuZFUgTztccNfENHpCpgY4P8P1x8rgei8z4cCSx6CaVIlIvPkk0GxSVCKMSbq8Dn%2F%2FZlJoXIBKkpFHncw8oabwQY6pgHsQiSemcACGXGALG5rQP066O4QpCdZ60turiVaOnFlWrKqMN11T%2BsAa9b5NMzv8VhevUUi2lV%2BlC83IymzD1Ih379X29GWaWItStExq2svpoYenCDoa2uHEANYXg94UQ2ActSwMrDu7f%2F21vOp105ZHtLCF4mOiu1teBsxY7iWvVHBf6XrlrWxnS%2Ff%2Ffl0LBGtBJ9iOsQxqsy5Kg%2BcSmaf67pE8zbQ&X-Amz-Signature=4b4f915673ba90b5956110152da47dbd097a10bf309b801a95f6c7f1993cc96c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
