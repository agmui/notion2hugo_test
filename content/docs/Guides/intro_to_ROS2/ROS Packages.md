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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=916f6917948edb994194f4d6206f0b67891fdb4fc970a1f3bd23c9c783cb611b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=f0a80bc5c4f40ced6e8ba5e20f9a88147ca2a942a839291b09e1e80f58d5f6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=12e94c8fe14cbc2dc3037fdeae6064d9d930ad4e935a3d8768093d7fa7db241c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=1c668fefa7641ad88886f94ce7a53ef310f04b58b2ceba688816449cda865af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=bdab12dbdd55c3e73c7a0e723b5b256aaaddb5662073d199150544ae7aa252f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=e76d3d11628bf779870106dfe6874280cce7ebf38c5787206d685f279c0ffcff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5IOUYU4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQEt6lHOTxvyzAyGQaCkLhBLK3Smwn8BVXhTQ8t7EuPAiBh9WrEq1abPuG7%2B0H6GTOX0wfiBX%2FIovnXu7fqLH5Q8Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMY7JFJmzWYvQvabP2KtwDt2UiU6XPYN5qK9QtBiBAqiAXdK7nyDF5BJbKVMSY4FVdmrC3g0%2FlgTFpD%2FvhiKihm99SV8VsPHjdCVmGMI1i%2FFjdMFwS5gNYDV3aPSofSxu%2FR6IqcyLhbbHen27%2BcZc%2B8szWrAUVvQiaN7imyakpKjACPjVcKsRgnQoxarYF%2Fnv4R7PoExKhREXXt1y9bJhtztV5S0iGt3orfbcZTaWJZutIRXmiKjlgW6msM02y%2FvSnM0xo9pkxvJeJ5KYxc9X7J9RI1n7uPMtGYFyjqzrVCCrKtCs%2FUBXVBU9RXcJVdb7L90USqFfSK7K5NQIOXU%2BIjWpw78pfPxc%2BuEgM1dkNG60ILj2sHs3NMIU3ecgoHd8IIyj7pV3gLie1PLsVCag%2Fh%2F%2FQZmhz%2BpzJdjz7PoRrgPOO8lCbomLqvLdGHW%2FNyzuVV6WPdu3jgbmv4siuw2REyffprk5uRhbanUNT6L6ezws81SV79nUEIE%2BzXPYCmme%2B5GrHdAUHBHOXNKL4zPEd%2BtiFqbOTV6mM9eonbmDlCgCawgLVZlf5TL2Cl%2Fbs%2FH9dSpCfBjvGCArzvTv2GlbuF8lwIHfmMtJPSjAhPMV4EJfIBKSlu8MrxYo7S0aZHwUTiqYrDOv1FDoZhy4w2YC6xAY6pgFuWk3PBYh2mOkVYYhhCY4NAMKcRcmHbN9nR7SKsNQ8IK7NTNKKY%2Fr09aa1oCIdV5ptvUein%2BMA%2Flh50ozTa%2FeWM%2FNKqT362qnVdASrcOwSVSwRLJHAUn7BwPjFSREf9Ks1RUeq26JIHR4JfBo7BZD8VBgOG8L57xRpj9hONnf8k1w0lHyXUsbYrI5Pa9pQsSU%2FWsza9AKRhirNrRztXKOfM%2FvIRy8K&X-Amz-Signature=1ac5674ad09afd7284ae423dfff30af41a03df570857ba844799c5ac7182b2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
