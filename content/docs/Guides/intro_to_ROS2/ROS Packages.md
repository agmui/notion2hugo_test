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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=44a18b9674562c1d6355e5447fb8bd82895a0573bd717f1f0af5a35657523c94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=1b696773dc82975ef2c8919ef5b8a25c3aeb5a77e2a42de3192daea8fe62319c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=b098feb86fc2f62cd107c71155068b32b635eade830f71b656c892b2275c8446&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=3318ee6b83ef9148edf6e4202a7860c103a8490e3568502e370655658d314a20&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=10f895ebc0e584ddac4cbeedf7751cbe65bf9e82e4693e3480ec01fd9582c402&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=1b7e86afcc107260c15659e04fbca4d3880fdb9d8e44bd5642b825f807d415d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=a823aef3c7bbff0f6fc6f43f92e9d16218cc6075fea02cb995a07fd2d268792f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
