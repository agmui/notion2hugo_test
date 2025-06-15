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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=360df7038afbb2840deb4136144efa03ec4d6fd8f0cceda4ec5bfc41041789b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=fac8e7f486fe67b6afce3996c07fe00c2b803d4df0f01094fb50c3281f728ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=6d1c405b7a84dd6902708b475a7bcd7400503cd294021d14048bdfce6cfba550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=a4b42ca81bedfed0b0926ce559ca88532f8769e3f2b3e7adc9ac2e250c6ffd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=1c0bd8495d9157fc15195d0ad436cbe7d61d75ea235c88130a2587cb3485f26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=be83dec14fbf064e566a24b03e7f7b14c20444f54a13d516e038d9aba1126c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NHRW5Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHOEqIp7I%2F72LB5zEpxojOrH59Wh9yb6BeOw7l9WIUgnAiB7G6oGC7vi8J9rE6yWwJ2nMX8vcBrWIBthG%2FvxK30LSyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMkZvVadk8AEckg%2BFNKtwDV31sKYAJHZCaGM1gZfkn6hhPzDuyBJ0Mqj6RBaGV5BasWAP0qN9rh5vEMFjl37x67rZqxyQxT71WbubDhMZBs90CGzCi1eFfxTLpcB%2FQ67sctsl3w%2BEXBtV1URsetHu3OmvI3tZ04M6omQO%2FfkgJL79kJ43r3cj7GmDNpv2uxNBUJ8btK0OGvQ3tgSertBLc4A96jnGCBXtwedK4YGmNZNzgu5ROAplOsybHOVt5mS2eLlJmwm4Pyf2eoWZJpiVmHBjkDhqPX5daqvLuvM%2BAt9FPwQshcQM7smHaCCjSgJMSbyQksXYOZjS79PqKc28egtJbDbGxqhAAJeftIQmsPQ%2B%2FFbYLrUbx0y1bBkVKOR7Sar9pqmj85kFn6kz%2BX6OBTu1IQZUF%2FcQM4pJysl%2FOrf6yd51yrtW0NsmHt8N%2FlGjqbzMBi8bgZcI4tlCyesCczWA%2B%2F1Jp%2Bk%2F4GhoaJuF4eLpK4Wuhgms58deivTWBTGfXBIdpxb%2FuLFJk1nSLjSudUvSrmPmH5hFoP2L3Evt2LZtz3HXuLANx9Pnw%2BqN%2Bi389KXbDRwBA6AuG4WSBk0hM3%2FhLe8Vw7PZUKDjMs6eks8rXchz9jcPtrPqWEGQm1p9wtFmDClUYMTUBSgowms%2B8wgY6pgG9ujLe5aTFDnoCeVqMC%2BnCK8JO3%2FT%2FMN%2FCHGC7yL9M7W%2BTirgS5ZQ0oUi7BdXcDi0H7aOuJp8P7PPl%2Fg4inNlCG4f9hSxXmKEWgGf17ut0gLu6T3O%2Bbqe5Sz1N5q1Z46XKdcJNtEQsUkMd%2BIhJzqekPtx1Clm1%2FBhFYWahsvNShL5TwatzKmjzzie2NH9%2BimnHC2AJwy3DYvxQ8LeYfA0DGu56tdkp&X-Amz-Signature=114de9d0f8b5e58c99a38337c71c86064957240acdb6b3082019f59a5edca8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
