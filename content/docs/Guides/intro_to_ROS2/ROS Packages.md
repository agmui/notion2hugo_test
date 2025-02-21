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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=c99970efabb07b8a57b2b2972a2ed2c5f655d4de3b1de6555b60f355ecd93711&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=da06387800aec9bd6d07d96a07a111c3b2b3c5117e4f4d845a6eb242b54e08d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=f731ba7ff892009d03c69eb314c0da3e6a447c62d23214e200783c8968bc52db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=b0c34f88b3fe26df6c0a8ee3daf40dbd07efd88cf3eab9c5af7fa69b7bc45f50&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=84a2668bad9b3f6941ed425a89927660a2f780ccf489d0ba73e4bbc351c928d7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=513fae9118e5444deb54f9c8fd600c47a0d3c440a65e9d9a097e846900e140c9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XBLYME%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqMIMzCz9ACXnqvNE1H1Za4y4YU5LirLFe%2Bh%2BF4lndOAiBhK2%2FhIsHqb14p%2FXv0nqUYeRemB77d53gCsk2Ii8fkkSqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAS0%2FwE2QgGH7Tx7JKtwD7M0jdnQR3dIkgYu5esxYqxY%2FpqYgIx%2B4kxlXLJ3brSnWNVArqRSuDAF5F9EbWvsLegdsQjbturjbGIBInfZPOKvniS6%2B8Ceg%2BAkQDlehQgxM2DOVCwf5N7sNkIuZAmxAdGxbiW3i79J7h5NZ14BaSqHX4Q72sPj6BY1%2BHxLkkse1CmWj4%2BoWO8lkBbbuezv85gX6jNrdh3dQd6KUEZDplBM4yN9r1GO0Qm2QdNrX%2Brut%2Bxrhp2HwI9R6fEX%2Fwp3ks2G4k9lxtsB%2BLE1ud01eB%2F1y34N6u3RlVENKhlgmYUP74N3jDlzRadHnl%2Bs8aPOQ6SG%2BnmL45CFOvg3XUfReNcbeL1iiR5VO8%2Bt4JRbYb%2FZbfaemyUGhyzGKFNTT8YBEGVsHkK9pqYDuDPgjR5Tut6MkbHDh8d%2B0%2BAt7%2BSFL623DGYXOchxxSHxlCkThX8w5jze9SJ93Tz9P49ww9Kw7R%2BErqS38v6e%2F1IIttQcGheX%2BwO%2FGPaTHzC9aQ8yBzlDA9pXi15vdypaL9nhjHEDfFtc8Xr52VWfGDR%2Bzuocd2aO3iUtDpVTQ%2B17vQHJBAeGIq1ajBv4kjvkrfm%2BVCImUE131VQixs8McDxJzAjtk0VOzpfXPLBu0I5hTyNcwlfbjvQY6pgFULiGyah8wKQATPh%2BReBtYxJXvNye8fvRWjYlC7L2XfONaGbRg4GT3dc4502e0Nj9A2pMFtl1jE%2BN%2B96i1pI5DseQu86XHsudCbCH8cb8E5vZ%2FkKaKyBsoYSYHWsSS16uLJY4FV4ZfmRgmuqmAs3wMNe9xyXEhxNXJRHDBiymyTyxxnKM5KsT0HumncmvM%2FrjO8j5%2BGfCs3bXGTwblrb0SibXDv9Yr&X-Amz-Signature=ed19fc0ea418c2ea13f1309b85691f42d8ec73466203235ae1a34004c6261eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
