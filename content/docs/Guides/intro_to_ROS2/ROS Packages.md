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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=5aa562b8653e4bd53a788bc8326a03eba1592757357cce39fd9b2e3b062dc77c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=6575a591723811618884bdf105d106c093f4ec9f72f5f1a26ab958cacc67df7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=32f9ecd1c7f7bfb7c0e689d4345605330a9e13d8ea1607ec97607806aba76746&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=cca2148b513b10b3bf6d036a3b06a240bf96b6d78ea2dfc64bbe6f6dfd1b6720&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=03f694d7a27195ed639d23d3fce309b46d2d63055b1aca3b31ab7919a0a6f194&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=ea4cbfa36385a0725916a7684e57bc233866270bb9c0196307447cb08bf38133&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPNDNCJ4%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOQcrF1XcC%2FCPfJ8%2F%2BxCFpFg5psFIygaDOfalWxICNlAiB%2Bux8xuJEaUf1SVWKW2JJgOdlN4dcIDQphSOnLSygaKyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0Zwp0I3%2B%2FmNIZYjtKtwDbLwvXW4TdctKwVy94rfgO%2BEL6Z2R%2Fj%2BpPIzSgKLl8hOxyE8xvVHKn9tfvCy2MrFVVCRixdqEsDYN0JM9wJplbZdhIu6fYR5c8tnZ9kGLbFuc6MuPU%2F%2BD1XG8ZSbfKeEmG2O3a4XanbrgaRU3GkeX8YyAghuNC6JmnhfXj5CVgGc99nwigYlGs10AaGuZsNmEwMaJdkmoJzOnnTMju4EECXYh9H6omhyZdk%2BzRsgsBwRI4BL1jVyKMlQZwnKEA6MBqU5N50s6VwotYaXA3NNoYakJq7FW5YUzXibwd3EJrfuMJXxBIxHL8RCa0l0E3sbXN3N0ghLViykaouyMP6gFoDABUMcYGyzD3KE6WBVxWvtbFGvG2E2xnOEXL5jZbY6tyl6LezV1d%2FHBUz1J%2FlgE7l85uGAjQg%2Bo0BuWB03UQNWH6pMJ11ymfk95qkSZ103gdzNGNKY%2BxxZFb0XXEDfr8wzVgBdtMvVCkRYfr9IslH%2F5Hc2laO9yMBM44hS2lggfof0%2Bw5TiQJ8GtbHj%2BxwWTDO1%2BScXHbU8FngpznR46TFTma%2BJqKZ7CYv%2FBhPMkwXwTZpwgWXdk8W7gdpaq0beOEIEgY5XnECwXPdgYoy3bTDnlVmpK7GH9o25HNwwgLu%2BwAY6pgGDrYQL4MKmgo1Dg3dQFq2yhkA8epbA9z3l8x4SUfMwyKoW9OqKWh%2FAA%2BQvfF4s3f3uydsisPxq3NuzwxVhVsyZTTxXMbjnAOGFPGazUySPff0lLIHvX6htobu6%2FbMLJlqAfJfwswOlUraRVhAlFaNuuiBhUMKoFN9ggm9SR6ynecgiJi4R9U%2FOLDCbZqtsh7jbM7mUVFtyYfYAV0I7FUG2HonWZsKQ&X-Amz-Signature=116f3660d1908cce48f29856fa6761306b65d719c9a4e10cb7c9c595b03e98f1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
