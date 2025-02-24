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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=1b0164f36dddccf161b55cd6d054b70bdcfd87beeb9f92ba7a0648a06c4d475e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=56037f97533a84e69de776f628cf2a515b36736c152547540ed45ffc37071984&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=da9aace5231f1a629e24031a0a378858e90db822314bfca90bfa2656075f293f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=86d2d6c8d0fbd36e7a388660b9e700be2b8304206e6c6edc242d3b633ec4d235&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=b48e07c3ab5ef950610c0315a2aa6b260dcf42841bd12c32a715e0b8340b09e2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=2ae4eee2e754942b0401f5d8955de1624192cfd5c444f5694955b40d9124ceb7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3ETMVU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCau1hqz7p90h0HWyI6VeSa3gOly5PV9AsmwoiAwR6j6QIhANWmYSH0cb2P%2B%2BcESjtYwkSnocUh4IjAcma5qqoQ7YzEKv8DCDQQABoMNjM3NDIzMTgzODA1IgwjD6ud2Ra3OQfYpKAq3AOMtiUSk4iodzuaObVRzf4l1SzEUt80nCphf5XmPOzSUfPPXNSHQ%2Bv%2FOgX%2BATjAK0PlJr4shhSdFRPLd1lPkwwk4TO1%2FB3s5akqitlbzcmxSqGZaNx%2BXOl30HjWqVPfdPpCOVbUoX0KlT%2BRuLbf%2BuN421GxSnT2XYxSWRuvMTNhVKTR06v5VbKI7f7DBgmGKhlnxKJHJoLO3JuoTmaweZHq8z2wc8oKmfH7r00WWd0PiiV9hTQxS8Tzd5%2Bnamnu5%2Bqt85Z1B9JHHqxmGaC9e973rc0YyLzkgECBL2fRorFrzwJKRJb8ZCioia%2BKZhRx56VQtOrFnU0wekdWy7Pggx%2FHAzamt275GxtxzK1CSz0vsLGdD%2B9%2Bb8VVtjEsKGD%2FEEAB4LBK5LsxVuwy6vxNqkSmFBDcift%2BnRNUwnOl5Llmc4Hm%2FSE5zLYtOER%2F8wYVHlAbC9joJqIXtXlDYTYg%2B3tLNgRHfMUL5OXc2Lkw9gg%2B%2FDjjP7Zlt81rD8xOLx9dkqZJBuMqYIJS3bEjJAIG1a2PbJ79f0inlbQ8z5ZVeUt5OspRFOZaho93erkhXywq3SNLj%2FoLiMUJdDN8SmCi%2F52%2B9IhMElXSDuI9SyN2jFDcOZC%2BtnF628Aq8%2B7X%2BjD0%2FPK9BjqkAc4m8kQ8oQ0PI%2F9u%2FGpAZRH9S6Su45SNq9TBWJL3LiSVEfyMlq7JZZZDW%2F6RFeBaeguSlkhBPNbOadUnHrIuBKFSXt6XqcNRIYfEMnMdXWzdOglOYtJpCL7YDbjR8n4nsvNjXyPxvFNqSPc8jm%2B8DefGwV3dXRHMBuD5ihCmsOaYAcy50ogZRBBDQdFJbTWdUbn4XLvqDatjBfcUcxuGzkNEMXHZ&X-Amz-Signature=464fc646dfdf6436b60c0726038bc5ae730da7632e1cac4eb43a550bad1eeeb9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
