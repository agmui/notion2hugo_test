---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=2c48751e71277e595b3ff2c9f4af0d428b73755e3fea333e6c4a6751cb9d411d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=297bd24f1085044d138f642d4972cb4e050d191e0ab458b7cd6fceef6674bb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=326e7d633a00773c2dc23860a992d9b90a70e62131e7fc5ba7813b146dedc3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=0fbc74aadaedf4b4cccea634eb02e102a45fb9415abcaa05e98778aa7e109bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=ccd71172e94f2e0a1b46772ea18a078d580bb5dbd7844297bb39347ffda8c5f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=83eec2162b446472afe142c5893811ddf686c2a495fe62d5d52294583ecc81ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7F2MBJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9H42hXEaQu4SYbWeSL%2Fg9YTZ%2F1qarOcqHGXlCAdLeQIhAI%2B4yOjj9xwe8o3xWrZLd%2BSatOWeO3tkVRXB2O4FEGnLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEHk2NEkmHocLD%2FoIq3AN%2BUux2ojyHifl0H4eUgVn34gARIMyEFWQCBGk7PMdGu22d6XoLwODR7dBWTWYZTFZ38D1jiU0edfySTytuvULaIv8sqa9sWncwHUoxmx1eis7LkUOb%2FFtxHy5vVNWSmN469ziCcO%2B66cTGbJlpNAvr%2FQ%2Bhe63Nce4QCOyXk042f5brYh6qFgbWfOsO4GNRjSN%2BSov70GqldJNNAi6aXtLQwWFtqD%2BQ3tfaTNqkPJOtyaFEAEw%2BworRdS6Gw88Erz8Xfh4cPBRdfpD0lB8D4AzWCFR7l5LWyeX6Gn7XyucgFMeOQR%2F9fr%2BEE0gj99RE88C8GUXZxUFDAO0kvcr3%2F0RZRAWp0%2FXFW59D66gHTKjBi5W%2By2FK74TX7L395VI%2BfuCHK4U1MAuHeOSrjMVqbq4lKQftPiM%2B80q3DrQIl2MGjpqfSqXcYMhQDPw2kGPoYjiChceDkIwXrBZiNEelhOol4w%2FNdil25jQmDvJtv1gALGutsyL5KckJO6%2Bi8VYwKU0DuMxxXrTNSz%2F%2BAqIkOBUb73lRJqTKZYh9hWmuXwpYs8spu850pMekixz7ZLn7kZd2edPxfcIhYRUVgi%2FNzodi0YI1I9mdEuzvw%2FedYIjGdjjF%2FGLBiNVSnUZbSDCfl7XIBjqkAZ7%2Bv0Va%2Fmji%2F1MqG68L0VuVrmFSI6hn8wqwynIiEbP9rBs5cCB9gLII205261o5RU60iHsVTXw2OGRtT2tLgYqXEtM6OpP4nSx%2BrCAq622KNKGrpUJaDE%2BMnKMM%2B%2F06NFbOPGhmMakpcoJbJbvP%2FJM0Xzj%2B2V8G%2BnPdrA1cwI%2B63eyN7wDF1lf85Z9ZZ3S8rH9e8QiOfZclrYPV7BQSwGl8dPbC&X-Amz-Signature=dc41b6ef81cde91f8de0b442358f3549edc90e7188a5b961a6d0a560bff8ee40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
