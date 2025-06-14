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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=20326c3f1ca1e1ea1d0be81ffe43c3a82e0e5365a6d30ddb307a6e2921422b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=0d2d7113107d7ac889c040bbe99f34658a955285f2abb8b4af879a8975563203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=9c9437c12fec4ef799ea4d82231146d13e64ed8eb1a5599f1d3fa5b25238dd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=465bc4f089a9bec3a89a634241d55379514b305e11f314f51c4acc48d7257965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=584d7603bf584354072d200a4aed6d9d5fa984f1707b69ea1075bbcfa1c65659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=4c3e7314a484c62505fe865292b3a007098ee5ee9d9d9b39efe29df304b28654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YON2NKXS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIQCje6auuFdy7Nr6HmqZXec96P2s2E8Z%2FBWrUVIbHeijrQIfIdxY9KHvt7waWhwnUGEGgA7fWuNNJvmWdCCNEz3mwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJBA6IUxyPq320lzoKtwD4BbGCMBRFjF6Wef5IY4ePEx%2BI%2BFbG8yEYRIdfAvOL7KWEvTRHeRBXyzW70oMC%2FLIganH5PGxniXHqQeF5OoHKXbZYGquB2i33%2FsqMA6WemEcTTxyA76lfAiBaxMwJNHoZ79nD1Cf920UhTX8QGh8%2BgSIyqIC2SHBkTUa3Rc0npFB35pOsJiVZMhsMYBeUKnitM9tqnP7rIcXUHhhqpVcU2zW%2BexZDqKQgOOo%2Fy6p7ebEtEPIFtcqpZ8gl%2FSD3VB3jMPBbFOy32p4I%2B9JGgY8%2FC7%2BU4wuQrt%2BWrJXvi0TmbmzI1YPQ7RW4OecP%2BufggV%2BBiRiEU%2BfWxz5i8lKn883wm7IMhEgVoMwQAHUnc8aEpSE4wnQrMUfugrligzeZSVk7s9HmmPqJL619nyj9I2aPAofz%2FMLPDwUiujUT9vKxXLtFfFZFAEcXUc2oVjs%2BnmtlOkdJfN6PEjO4AZ6yllqf9ObUpwryJ1F%2F1hI2oiovYpkeA16pIh%2Bld1wQQqfzOkTPEUeXRKbQlqhQYzoXIsWkt4p%2BTPjpM2maZaGpqfkwds%2FHmxjIvJgk6V%2B%2BnE%2F96xHEMAbad%2BqbSuxqR4wE9A53pRngNig5YbKvCtJI5wvmY37QWmEA8jWHKd21p0wpo2zwgY6pgEu5dFc9hkYK85kX%2Fh5XnLtZTJ6zjyz6l84HxRaFwpCTZZf8fNruU4kiB%2FOdK7kJh7iWGXjO7xw8mzl%2FHNTG%2BcvSI23wqSx9rXenL2ge66CdWUIpR%2FOD81C38VM3%2FljxATU6UOmOvqDrRzb1zD1ktlGpWqM25XICeEXpU5N0vZb78U04Jd9m35SIm3OfCozwWX68oBYG7pSzdUe7uwL1gqJyzCayzv6&X-Amz-Signature=57e65b856ab438e2529f4d5fa193f4c4f08c6f0fa607341fc231a1481aec94a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
