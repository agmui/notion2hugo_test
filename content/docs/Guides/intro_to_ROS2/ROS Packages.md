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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=225483ca40b237e2a7bbfd323dfc649e316b590ebf35af350c9e3abff72bd3b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=c816b5ccf713a015bc29d8ee7b27443fc704919f5edbc54a51fa37db4bc4cf66&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=2612ab68357ea6766be93968823e094d9d9d93ce493179558431ad27ff1ec7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=f8c43f127c199e2ec09123b848706724f5963203bc480ac874e776bc42a6b148&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=c4aaab677ccb45a97bbcbae72e9ad3b7c16879c4d89baa59790f1e6a7ddc9077&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=381e765f0156b89fc93aaeb6114e1f08001e2965ccbe9d5d779049a0a9e6f397&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOHSNXH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCOEj%2Fk%2FaDYmLeVGNk3UFgjETc4zcSZQSzQ50g68rsCXAIgb2%2Fk6ifpQQLQzxgP%2F9wWt5X2vv2VYWJKRQm%2F%2FR7e6YMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDV0k601j7uyH8bsSrcAyJ78HgHb9yy1pCofFvTdGRTGKJCoccA%2Fwt5rOdDjnRUlIBcsUehyjuD68EiJNgXoczjCA81%2FX1Q8Kd7hJ8yoznNkQQjVw2bKXT44W9id9lGeHsL8nISkccNKCKWFFMcrxvTwnXl7fqJ%2BXLDoFkrU3qxaLqzqEAF6oV8lvxsAwCHBJpgZ42Hn4yn7dW4O5SWkEMOAWpnPaehNiPOKDvPfVmVdq%2FVBuYxj92x9eQ3x%2BPYB9kU9MVp4RaFAmPg%2BEM6cz3P0ogl6saGbz9W%2Bqfb1EJ5%2FKxkBFR6c1YmJ5CKLtoB2aNwsKkxGeUpOMiqIOiR%2B30C4HczNkAjZV6gcePyaINYE8t6jRoBw%2FBhJu6H2fLEKni9mmi69VTY%2B4RAMMQnh0PAoiq%2FuSqYc3w1qvoRH9C8z%2F0JDq8JSbum30Upwl9Ws5Qo1xifxEGtUiS6Na6Wbhcnw%2Fcn%2FpnSYYtQWp8dqSCRWH1HGo4D7sh0qDZnzdHDlqwLlbRi4wmXx4hBOFmimIh4zOy74xqJArhj4kOzfv7LIAKOsTLtUKC8GIiqSzB97qHRxQ56gmd0f7mlA5u8ZTq0KETfnvUUIyDN8qYYSKL63AJAMcwf79unyqPd%2FtUMuM3cl1XFXuxlO6SsMP%2BuysAGOqUBQgKBkqyveBq%2BlQoWjrijHJWVXlqnUbfDBzdctuSn1QPVpAohK6zExNWBwr3%2Bgn%2B9f3VK5INRrPY9trO6eSR9vlG1B6sIPijX0hADoJrlVypsYP5AJ13HHkSbfOqaibaHtGXVLN3Rq2NYiqE8C%2F%2FPySOiylk%2FZtympOW6MNOul5PeBkHMOygRCwdEbulOzGtMrLotQLAcaYIjwrWqmnSFRNCKKwp9&X-Amz-Signature=3cb198e1b8d5a7f1c11617823e051ba028bdd0be839150e3acd12950c3b8a517&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
