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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=87a9526e5ae54485b36505fb1c804bfd97412f8bc39fbbaee0755e97ae9c44cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=600e98524c72dc06b2e13e5c636dbc478105f8763ada792329d211be9dc0a54f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=ed390164a71e6ab386615170feee0f98c57123968159a12361a9f2815d03a9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=5fd4bf763fa0635e0d5e84e2824bfcdad7415b67daf21b7a3248f98c86d48495&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=137e23c6c162ada0195253c497aa76ca6df0b72eb364340f98225352c70f8668&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=d20e873412953717d07ef9fe5ed32e01335acd19fe761d547c314236c635881c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZGSH46%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD1p53CxM88A7zrNNqFr5Yz%2FvTJFgEAmHobOQvRdNlJHgIhAOrAwBsUiscak01MWeKXklw9%2BmZKNPrV53lSlmCqe2NwKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rsQNxpqZuZGfaxEq3AM%2FKjs4412d%2FQC3dkLosWQ%2B%2BAG687HOpGothc3Xy2zdZXjvsnyxtoPKHfBB%2BnHmkGZAa%2Bieii94rL4UMGCK83hhzSvw04Rqx6y7H%2BNQ%2BeALMgeFWKYEb90nWgzO0eUBmkHAWYuL5r%2FEqs3sF3dWzgVuVTz2KvfnYT%2Feyw1LOvj7nQ2JxLh%2BX%2FtbZEQQ4Ja69l6CNvJpSpO6JVNUutLlW%2FVWNTg5j%2FFl2h%2BOsA8aw1xSjSFHoP3cBAACHphSbmQgKEqRRAQONxImaQaKWcQLDDhAcJZuhASoGqZdNJ%2BOJNiibHzpRz4WEyChyjbv%2FSwC4WdUdGURpC9SKDpDZp7tMGzN%2BvnJaVbB1rskvnhwL69emBgezXEkn0mWqh3yPO3wHasSOTwOfmwrmP0B%2BksMJhLGww%2Bn%2FWpbOaCh4%2F%2Fu4ufe9wE5%2FlGgF0xiBwOlHt%2Fctyz0KlIzi0waSr%2BA267NIpAWvQVF6BZXM58ecu2MYaB%2F7Yx%2BWvUq1sNomXZQocZ6W%2BdBQ5gVglDb5kcWxvL0Xk%2BgHgCepjYbAkluwyf2GaS%2BqF%2BVn5Kt1LuUvPlZRj9EA05kBNo7RW2s4%2BYZYtKfxYILART2eH7bj1ohj3gkBtXGzy9sVbI9jH3702fkPjCDzf%2B%2BBjqkAVTZuL01gML35Tb7uFa3ckqYeR4kW9H7qL%2BHQJ76SDQ%2F1uT8FvhAXEsUbkSLZKnsEiPbprJW1Ofdt8DbMVZHQgNvQggPdOnVQAax9ADHLaUUSygJwmgfK2yYj8JD0Pbg%2BmCtEqqbtlAm96wabIlojMUDjeFEFrCWm2ub%2BBAjmKIeXvbKKSdUb4AjVURMjlBnvZPzSteZd6ux4WvpfW%2BQLesznypu&X-Amz-Signature=3a49d24dd9b927c88f7cdf2803819e660cf079b9c4870fb2cc7b16328449a08a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
