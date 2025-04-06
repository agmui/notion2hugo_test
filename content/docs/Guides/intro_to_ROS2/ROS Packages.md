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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=6c65a562a9794fa6c3ffd35188f40fdb708785e430dccbcdf91543567a51d131&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=8cedeb8e45526c183f92bfb858b1af7bbb8dcce64ccc381f00faf32bff037259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=438449e3cc7c2a3839bb7dfc2bb2741d8cf44a2b2b696fd9e8b54950e12b15ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=132388ce5e43959012874fb1d4f5cbb1a47e2c5835258d0cf9a71c87f6643738&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=5acd99b2acc1b2bc14e74937cfec8a848956dcc069c6a78073ef45c20ecfbcda&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=99070d0af2d4e10fea0c5dccb4c19132e2f95956755476e6e5dcf99899fd8f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WXKUV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6NW4SYR0l7%2FWSpc83DxOOJzmuBAjgd7rhHXHVTIYcTAiBF8jJyVLEe0NHnNp56NowZcidEgxDot0h%2FnqJhnz5OBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMGt%2BLJfES4oBg%2F%2BtLKtwDa6w%2FgdnZjogGEmEsCoBioicRfhpvbCt0R4FO0OsFKHE7%2FRPEK1YEzL3ntRTPDmqszIKAqKDfwj5%2B5menV2sH3YE59XzPKJ%2FsV0Y%2BA4uIOkG0g7%2B5xEZIvTTzMj%2BOmHSdbvf1CLkRw1RyQkx%2BT4sIcJ6TMc8bYZ13iBQu%2FwjaOdU6ubMZt5vbi9R%2BJnDP%2FDKnCgEMHXjTe37Q7RTiO%2BBr%2Be3%2FnleXPW4jSGL9mYNsaujpunYVD6ogVUVMWJSzVxFojWG3Nxd8%2BmsAOah5Dtt%2BC9VVIe8OBtDcRY61pn8gQG5xZOCBKIequ9TEqNvsWjmPMf6UYAzxrvCAWi2Cl3%2BkFbxGsj5dHwqSzgG6M6E%2BC%2BYTOKPiGUAGeB9waT6Cz1vJx9Fce4O%2FSzUABgX167pWdlcmokyGVKzCJYEVupH6bVIci4j8CttCgZoWWo5D%2Fnrm2SNl7NK6WOuJchKNjZoe3KOXoPQ%2BvR0dGAXN3IduuKKZg0PBcNl7AYhWMz6nlKm1jV7CpfqXDb7khtAT7lUZXxdUcZ6Dah4qobd5Co%2B609EYfcrwjSgTH1QRybrPn7R1ur0ZClTFBphsjenARan8UWFi7ThVfe3Q6EYqU%2F6WyjFLzaWcNoLAhnNYr%2BowivXLvwY6pgHKDjGbi4vv1r9N7CngE4X7%2BU7uBiA6KLgJsvKJZ6Syvz9KnddMsU4RJc3kEZMITLD35f8xSXn%2Fyw0Ey2O6PjhSXolAFnduU%2B%2Bp8ZziB37tmuLLO1ke642RSljUHpAhasS1yadJcoWHeoHj1P%2FMVJ48MdQRILF9FsgY8G3viART4e%2F02PjAxaZMXvxzxQhMRN1V7XQyBNA%2BU9Fd%2BbYEt2H70exAlKDC&X-Amz-Signature=25b3223ecf2f8da3ed8cedd73643a2bb9de123a454c966280fdda378bcae6a37&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
