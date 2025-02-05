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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=36750da8292417f19dbf22546fb81f6078034b6001fd31835e2a7eb59259513c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=d245b14b61253a1026ae5886db843890012d2a13296e51708eef0e89fd363a81&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=fae3e2cb47c605bf8441a72205b0ff566a743c9131282e144f1e4e400c0b4522&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=70fb067cbad2296ab5397792942edd3d1ade35512295fa0ba4e44794849d5e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=da65ec6104ae515e685ae9b8cdfe2e45624a79de4963f2ff1fa5fbee57e25341&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=e93ed79aaab703322c369ef4cab0c2be18a39661a7024b6280fb7279e27d1fee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJBMZFQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDmhG70g2GLc7UKn0Mj6dNmdqJsGenGZyMrK%2BpCxYx3hgIgT5kd5%2BLW%2FLfR5Du%2Bo4JQyxOgwC9x3nl4BU37y4Ut%2Fdcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKmoDgnlLuLrwOF9KyrcA9cqZQRj7KRrFOKv0r5aX8baBdELTNuC1lKPpWIhhHJuWVbGmX6WxhNKEcWCvdcv%2FSwk3gtJmQlXPeaGVj%2B5XbZFGrg%2BeDLvyxKhm8QdiHLpWrxWrbDjFlIFFB23F5a1Y0obaKarj5npwfXYFR%2FnwwEqbMD0DHa0d7aLjoRlZlFVWYCkvwods3EYYiBKOSwluVgu%2F23mwFUd5Jo6yvTfbyZ1TVF8HZtxZ%2BqQ9SwRpMyMyw5Oj2g1MIrFD6A8a%2FNKD1J7TmbT9oMergz6sFnPa1KZasT1KAqNV0iCqCJILd4zuiHFFqQM4%2BTO7ixBdg7kEjOxQWaj6jsWqHtwkI1R76wmqT%2FpSLge%2BOJSD3ZlC718PWt8sqUh%2F35%2FCycBqOp8yaz%2FCOZKRSp5B75Cn86wQA6DvxA5dPksqcKqcDwOlIb%2BoNO8LNBgjk3CdKYc8P14elnLhfXrCNIkX3OeirbhB5HzCuIYyCi2tKez4e8TkVA4Q5OmPHJi%2FmatNlvQ0qFWfWg%2BbnCfO8Jh44bFeysf2dd8w8x4XtQcLIz0H%2Fq7gqorW991DmRCjx0OIZ3IqXjfPCZfXtimhhXmk132BvRmZK8U72acOW1hHSmYIdSracE7ZwXsUYGQbK%2BDLQOQMNnQjL0GOqUBniwtOj5yGLouEQSj6FKSACSi2QA7eX4j3DUwc6FvI1W386dh1cmg8aLsMSRiJZXF%2Fuh3SoRKxlLLUH0aGQ6Ha%2BJQ47gIKvWlnZYlOc9N6DIh7davvg8bAwx7n7doMt2jfrUw2H%2FCzo2VlLip5SvNnDOWChJqbVx2qHdrKMkFjh1OdpcXPJwBDszOSqZ7hb0YqG5XL%2BHvuVzQlFW53qsffcirmzYL&X-Amz-Signature=25c977a84e4a76fc4e3c05795192c312afd739b2e33ec0c301c92c2d3f080f73&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
