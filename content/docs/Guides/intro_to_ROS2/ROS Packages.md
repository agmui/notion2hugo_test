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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=6abd06ff4c370262a6879cf388cfd8d91768b05e2e8e5771d1b0d7f52ba5a06b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=b9662df85ac52b27667a08812f4960d4b9b276f5ec3fb4eaeae6f707c0980650&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=9194c4acd5e81a27fb0de5387c853177e11f4934a7bc03f6e436260b59afad95&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=0eff73ddc21689787a738e79a0e667eb13b0f39bdb3680f39d30780da31b6bda&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=675c3d9fdf6edbbf3a22e664ce3c95b3f96d3b549acfd427a01699061bae6c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=628925442f2c969ca0a2a4d6d1eb3239c7b0c87a2280fe4943a1ad54d3a99c13&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T54OYRYN%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDoHnVM4N9646jQT8zkdg8ybvgB4o1l8LTr6iXSgEe%2FEAIgNlswhU%2FLtFSuQgkY8Mg%2Fs57aiJZwLgLfZCglOErXbPcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbZfm8NZ9Mw3Co8XCrcAxmMDxTSn%2FGz4hBYy3sVl9yrIzLBJfqNtTerj7pfdEsAcpojMZ6ullcGpAs%2BKFne0dC9oJJXyL4m4B%2Fe9mcfY3iULtC9LfiacZZcvUvsydiz4c98bHc7enTGDo7t2LpO2aDUYeIrHV%2F3qtZdHchb4x0%2By%2F4pq7hCWTCLg4prvsEjVmmGQbGZDSEXDFxd1LyMHOZup5l4JcWeXJVSNl0UKEOMF8U11inh9uy83j%2BxS44ldrf9r6F5MYBXcjMr8L%2Fuw%2FJYQxVVaU4Ej8tb9F4FlQrxx4G4MAbFmVfyl9ABuFNVX0VgIwqMenEEmqLSIahp7AuV2WZqlrJp2dcFXgALTojlxr1TJbKJ193A%2B41s7px2RLTtEvSPvPT6zcynU%2BcxVxKzK%2Bd%2Bdvg1JrvciZqGJeghWWBB9LLLO3ml31BWo7eNoWtVXXjcp9mcgqboJ%2BAV%2BsdeDztp0%2F4bEOmAjUjZFtp7Jf52th6CLfUCTBawGuFbdzo0aP0TN3GObdyLqQwam0htxm0BhNpptvY6yMeUJTArRUZlix%2BG8odH%2FCW2bP4FeSN6gFU3v9XQfzR7mwE0wWTe6DdmR22Xx5OpejJ5rRWHlA0e5r8w9uoUfaNc1ul87gD%2FqEs3eZ7vlbsgMPqBkcAGOqUB%2FgVqmqO12zNGssrucLwiMe6hnjLUef19iEZtBnRMeJgAg46yDkkTsH3%2B%2FTwLLpwUtpChm7PY%2B6R4jcDRi%2Fh7KIDjtOJU3B%2BEJ9V33TMj3oEbyAsgeZWneaQv7VI%2BoarZfayRd%2FGEbh%2Bb0KJ37OcLYDg3Nvv94wdYWUR7LgHAKZsKeYjU0NfAaiBqfQm1rzJ%2F123XPmlNvgoPj%2F%2FYcgwYQ0lITmnK&X-Amz-Signature=e44ae3ec950e201ff64d52a7deabe80430d33e9d167315bb2c64156e1dfe0aba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
