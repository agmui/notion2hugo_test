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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=0898de3c3928708231b6d3d0a801626a12d679160e20d7c3df8ee79193017b02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=0f2aef55de83dde1d0ef051b09c80c905a1ecd906bc61261d8a3b0893d7943a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=a5c941432bbf20171657a5ad7ccd8fc8cbdf06eae7e9934a52cd33eb06e0baff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=77cc37ffa3746b0f3763879d23179341f8b9b6c37010d76f8a93eb8b17553b72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=c1d343287c72e1d859f29c65d3740e91de7b155b62a84689d96ad4dffcc6228b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=56f67f67b0c3052f7d07036b85d58e8c66a7bc467128dd7490114b1bd8de71e8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HQ24QG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXHGrIR4PUdtMAvR7pMfErLGZIbr2jztv4aFsgvJNMFgIhAOJ3NPCOurTbXW9mBX7ztT9nnvPwY5RsRJBOyA1jx2OSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZcEhmQ1zFiWYcmQq3ANjPQNmF14QIf30siwBcNAkP%2FQ2aEZPtdmYaWcjxmBQDRFa%2FK5izh%2FE6B%2FOsCuvY2AChbkBOQWc0pYlA5E1ABuxrgMF1PsNl8J2Rx%2B2torS08txpdukyvnY7tJ9eO6TPgCVlFUJrM%2BZsRZxHV6204MtsLGT7zCXCBxINTguJLIYOIGRC%2BJ35HdA9zO2oPMoeW9t%2B%2BOibErd2974RNu9I6%2FEew6DyjKsWy85HOHhD%2FjSOHibjSApN4t1ZnwUouhFd5MJEvh0TeN1yWxMBO4lGMPvqjGXoiZiFNsyePkgzZnMqGSrtyD3IecTMRCVL5hdsQpgVaAXPN0StMhWNn90k3UvijbMdI94AOKz9wFQNDwlDwp9yOl4AFOzUVqFpj%2BFxwr9AQpilRI2OI50QbpEvurxMlL3zeY6Y%2BS3gVK3%2FIcCKef8msSu7%2F%2Ff%2BCCNgjqtpgOdb3NOsOL5BrTW3f%2FLES71ww2IY6PrThPnBYeQrAg%2FMFBZzST5QHqR4UCkK63bgCKFgnm2I%2FsabaPJm0e1mG%2BoSx3m4GfiKbckzk2zCQdYW4TX1zjWqV1%2BWkZjVwr6Yn9TBXEjpu2%2FH5tVOgE3IFkaNMvVhj1dvYB7njojmrnmcS072n0Up7fV3OXO3zCAnZPCBjqkAWzIi0drv2Tk0NaNhLijYptLVBdAVXvohOu1nBS0MUD9oVSZSn7tSOTne2VgExLsj3a6zPVYFt1waVH8rTY%2BhCRzcWsi1buNYXJt4%2BHevVv9W2hXyMEGDqiUOzt%2FxhtCi9PSSF0sJvdTY%2FV6muYn2d39vZSvg6nzXivvX22umtHWU%2FRmlZAWQM90FnJXUUnGMI2hSbZzdjgGJiUc0G0EfQ953j4D&X-Amz-Signature=ec3f05b4d6d36abac91f3781fbe094ae4edaffacd9497c07a5dced5e22d8672e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
