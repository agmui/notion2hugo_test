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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=10ee905c5a8373258505cd1ec5b199b5c104e9b22198c5b3fdad8d5e217a17f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=48c9e1762a2278331548a4045a2ae811d774285937191973979ebb91a2a954f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=0a01f0405fe216cfeff277919b7381574cbd6330ddf9192671ea02077145a284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=c22261d6dda4a88d498e60b9b8450c1ffd5aed0fe410fba13f82a97d6b9767c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=643b53ceb43a359e0035c8ee31368ccfe72e37c7c6ae95656d2f647b91b390da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=227402448f0b426da0d5c0954a9502ef386d6a1e1af2a333feab12077e9729ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KUBCTO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCWYVYJEDz3O3B1w3FFlsOdPvg34KF1aAtEr6ApoE03NgIgOo5B%2B8SfyT147mWkHo7r7ZXTgerL2WKbFylIGQYsiLAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHv1lgQ95czPbBgqSrcAy%2FJfEo%2Fp%2F6TUSioLeDB5jZBvOAfsUcy46YdMErpMhtEhB0GAAXwAwML%2BUbc1%2B6AJ1UUdX%2BXYR5ykTfmGY6%2BDytyYO%2BML%2BfeZTeSRE5PUNHTl2GicvkYnBRaoGlCuBrVoD0IWlr6Z78S5THF84vrRuLpy2NoHbd%2B5dBI1QFcGG7gLmphwxkKvMBrr7jQJR8Mvz5uE053RCUzRWzXQq3DboKb5ioh%2BZaQxWtU2p%2FN0yBSXJz3fp4psiB5kkNGEekVSDi%2BW7EWcLPi1HjTlfwfWIuKAEYM7h1jIsijEqylhVx8D0emb%2B%2FGZ%2BUq80aS7ljvh%2FJw9QrAmlWv6GiJ6VREubEMNf57J5%2Bp0wmT3w%2Bu9s6lOvDFk2igWZ0cpUZGIDQkG0A4wY%2FmxHYr4QcAp6HL1o7EGc%2BSRD1Kt5edn%2FsTYyHN0h94nDpCkdJa9ArZ6fQPjTuZJwy6zfo548HM2HiYoTaOpmj1zwuJ1YFrLvVGsnd%2BIU3%2BWts8ut5efIuf2D8Vw5k4sozwC9p6BGmb3yZeIVRu2BRNP7Q9oaDbSlHerBcxt91B57J%2Bm%2B%2BLP%2Br875ER8O5HdwMey%2FWKkbOUGRkfN1RtwVp7BWEMhFn1t2sGQunA1LNPBHTmi5SyUfjSMKTnlscGOqUB%2FspompSnLE%2BrJtf7JLY86i2WSvdBLY0nCIYQxf6v6qjoZYuMLX8SKl5EwmlXnx3TwG0gIfNJo6nXc4q0qSQqroXVhfSKfuz3h67qkTQ3BwR%2FvAe%2BczRRUYVwY1E%2FeRZzySn7sCsoif2q73viH3D7zLZsrfbvEsHxaq%2FkCPUIhprq%2BiFx8QP3H72crS62lvPTnYcA4NxJWpaMlZInmbaXVtNQvjD3&X-Amz-Signature=8ebd4d65d04fcfa6e374d58fdd931981a04d95b183cfee3dedb4bed0c3080897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
