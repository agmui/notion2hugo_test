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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=b36bcfe3082815702858b25285ddb9c388c2cbf1ea4f42e9eaf3bed94c098a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=3ef8f251ce1b2aca3e3033800411a682dcd41477f366b28d8088c80abbb7ec71&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=f24838aff42c27873e4ded82613a8b985ad34f872c8881d94b9ef4a2831c3fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=07efb446b24435251749f40ff05e68dcc0032842695a13140dc7618a8953bff7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=70ec517c1f21cda9054ea3feaaa7ce0bf1358180818890127ae2ae85a399d01d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=d18f5e4dae7c458e7841ed3476a203cc14397985122e4e5d22268bff2abb34e9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q77NPEYB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFR%2FMkTPARGO49FnczDf56tB4WnQfMOcwt6UFpKQ83laAiAIhw7TUZq8RVZEdiH1bsY%2Bex7f%2FbJnqho9ZQKrKjdGqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMAwkubcFhD8oWhJV9KtwDyT4kedY%2BSQiuxuEp%2FZdTQCf7E3N%2BDWysv8vbm0rgYsnj8%2BL9IcpPypYllhJ0G0Zaqy%2F0sYBduOd9vuh664HIq1so0ICg6UW6UYmEIxuKuAV7bXiECsqKOd98wZiBnzlryJnGUAAqSBkUxMwROdtA13DJATIRP6V52ec4tKQ8%2FGHtOHGXJAYGBLsGNrFbv060gCdd1%2BL%2FSYxr2DoOL%2BQoIRdIIOZRPDAkAdFWIIuSv1k3oM2bVkYB9l4uSfPZE6roI3005TSHcveMW2lSaop9H4JEfEVpPTtwTcWN7QDq3CyvE3fozBNj4JYqRz374QX5izzWtbLhmWnAxjE%2FQbVyqQb9SyBZ696FnLA6vlJI41vVTfA2fjJ5guyTHIwCldOJChlBgOr2Ijz%2FYPGjG1fs7EVXOTRvFKNj4Q5cPXYqPEml5EED0aqVYwr5SXawdUOhgAF0ognxKS5uvJj%2Bu9ZKJfxP2Wt4sFyVL2ZNQtwtS2vTZ6%2FdMkksUD4Sce7%2BIy4cL1NUIF%2FfkXYOqh1Ig%2Bc8uHaOCxPpSLXyg4lToPrBokmXB9HZSdxO03LpHuazf6OAvIQDzClmJnImEQ6DOGm9uHX8TEyQkVorgbTiH2EA%2Fc2egLhWt%2BTR2%2BZSD6cw7sDWvwY6pgEmYy9idwizNB397xw6L%2FLieOdDMmcxJaHNqGQJSTgAlU%2BLeQgy%2BM6tVZg%2FedEDwUtw3tED%2BkQP2W%2Biu8jkoLq1v8nVwVuH6gFUl8TrHIv%2F6Y%2BQ3tKV0wRjau%2FbwCkLHzbhgXSZL4hxgAhnVePciV40bjXqBzCgn91Svm%2FOFVxkWj5sb1A%2FVyFz97cuExWi43w%2FeNMn4%2FYtCkr%2FslZPbDx5NjRYRKFI&X-Amz-Signature=1aec57b1ec005a9b7fced6d4f76d816634f9b29769d628466906cc185e48fdf1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
