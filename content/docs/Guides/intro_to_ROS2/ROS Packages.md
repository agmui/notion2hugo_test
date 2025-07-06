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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=14fd16f9b14f13d993d56e904fb3aad7dffaa6287e86db0e95dcec08d0664946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=780a22764a9949c2787a4e7109f1af7c9d15424e163943419c9b3e7e3b7056fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=50a3a4e99d6a642cdaca7607dd39acc04aebf8daaf465baf6c614102f3064028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=38d25b95d6fe9d73a0cd62159e435082095b0acbd41e9a88db29a4c78eca7291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=da8f02034c5dcdfb74bcf09526dc96e7fd65f875f95616eb9765582d181290de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=242556bc3c9b36239097910248221919883ef1e05e955b4e8134b3e47afd99b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDXJIYC%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIF1P5MzvVoHOjjgbtcz0auMXmRFUr5Nlvh%2BcKutXebs8AiBr50btEe7bstfHDGDWwNqhHJnITWeW%2BDhaIdJJMnUCair%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMOpx0ybhIpPUPRCjpKtwDEareSyaxsIfzMgXryEwi6DHtMQo9mZYfDC4CQLlnvV6dA%2BuYiPJ0PXCZAYYAOyaynL01vLyu8BIFtqoEELpjylEfQPNQNHwurOTe71AvdC5i9qV6e1YqJj5xX%2BkDLOO0nrB7Ocjv4qgpKMp1M3%2BC4MKlhYrIgjQU%2BGcQLH7ebOMIixwLk2uYSci92jmwTTNOaAvNRjIb%2BDwEa0cQacID%2BrWbQBqoMDgELSnHJndMMyyq4QlaYOV90GdIikv2Lt02araz%2BMn%2B%2BDp4gQOWUjE6eXVmveup9GuY2ROaIwm0rrBt56v%2BBefzLhJGtkBi%2Fyg0Fqjm8q9vq23hbkwvQka4sB3vvJmB%2B8fLWkrFHCfJieLf7gVhGsFqqkgNkDLXjMm1yG54SvGmel69heAdApSY8QZyZjZ0TJwMfoqvlLCfrRd7ejg1JtLuwnHxxzGP%2FuWckstnRIm6qe8IJFEowQYqHVef5pgemAMOFfdHR8aQXSd397xkrOQ3jwbyjkCju%2B2ep6Cz1WN8oAm2NTVf%2B8lBLAbfcruVmvSMns9VhL4fwaIOemH6Xir8DVkCaVK0efUMxBiLdBT5nhesGpeoaWhJ4tLcDNzjgLPzpehN2KrFe8i52OZGb5wXDHr6xr8wy8qpwwY6pgFEXnRAoKFqdG%2BsHp6u8FZjQOaKL0XRTQ6gmDZe%2FYG8PHdZfGvdAhVVQp7wHOLGEEe31IPhyBusg8BGddj1jvkJFQOnb8A1Wm9Mnv3mUnSfcu2bReRlcwvnzvEOh5oR1v7sBMPgD%2FO1D7%2BI9ZFG34Q%2BE6DDBaxFKvc5cTjAAn%2BkULg2cPe6CtnyBNHLuKzjobbuH6aWW2c%2BwdA5eAHHZ8efYRLwERbQ&X-Amz-Signature=f1d793f2c708c0ed3ffe9d52755b1836063c3e0c366e26b30bbf151402ff4508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
