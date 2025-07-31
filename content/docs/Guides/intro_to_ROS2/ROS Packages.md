---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=f752a9b816d8b602a3f1409321bd7556a6702953a8c0f91a7995288a2f048564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=aed40b556e2dd747258faef48c2cd075ce32e8b265e250c499bcfb52c59f17d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=ddefe3aa1b33eac9ae81d626a3b48c0622d663fe6d9f10391fba12a0f9d52358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=eed890ad4f44f767f9bfd28ac3f11576e1afeba75ba0c77c87271f2591480226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=34ab819d909b2004e081b65c9d96013eaad8acbbbddb65432a872d9231778b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=cd997d28a8bb04aab8d1bc8eb3457f9c5f1d97192af3ec710a9f871bf7e5d025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7PGHMV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T071508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtwLYSGzupzRj2psWK0UqLxkfFXp0C4rVvZZLeXTj8YgIhALEW%2BQ7VyyJghu%2Fjd7ULUrzlHhPu3vO%2FapsuXfpV70%2BBKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnld36iAX6CD2fuDEq3APbAjCnGyJj3qYQPqe40XM8K3eKJlj8wYcX7ALWWcjIRJoAgSLrzXt4TJDqmYl15Nd0GxP%2BLapUZxTb7Ht%2B77uaRZOFOdxfpfG%2Bjav97dT%2BMmoaZdmvJ67qlnHf1cdDRf%2Fqck%2Fk7HN%2B7Zoc%2ByRWWFBcZvcrmpkEXRntysV%2BCC2ryRAjRjQDsvDpDeQ5ByE%2BL%2FQCwumXz7pwvKPv%2B5Ir3uoiqUXELE2saynDC7no%2BoGL%2BHW0%2FqWFQLFuC9BCqVbdRAxzXBDMfxA7sbHUB8Hvfu9d8LK8OWChFXUEk6HAKdITgGq6EJ7Mn1U1lR0CXce6QFSrKUr8ll68CxtINPta1OVHg5BFz3YgzZuwRYJXapfWQgiqTV%2FcEEwfAyrjJ8%2F6kklTcAbMDE9rClaFiKF89W%2BNeTOGfhwVJwQJsKiRnPtrT80KHrgWo5r2YjHFIOJ3rWtud9kFSwr3XV%2BXlzFI%2BOcBDGg5Aoig6IERRugi4V%2Bpu5Jak9WuYRfga9p5fa7RORsOE2rAe1GRm3AUCBZeL7dNFT74Po6PyYd21FI4EM4vpeiN6pLjOfI%2FjJ%2BeRikoAvVtNXU%2FkL0YqLfGCenMeUYhPJTXjYlKpeXhdkCBc%2Fj9j6ixjbeXvWWEp0NLzjCdmqzEBjqkAe5tPWOFT4JB5u3cQxcqAFgk19lgIwvxkMp%2BYS1C7Eo3gYWRHI%2B94%2FSsbp1CgQGFRHis7KkFQ0GfanMD0n1IwWnEHmdRThga7ICQBLRs0aSSqrrFQpLsp6rtGEOtdlNOTIorM9jxyLAsW8Cqmzc9iVFgpoEh81JkYKbAvAWa4AtKurTCPuQ%2FIy4V6ul0VdCLntWqJU7FcBO2YPE360zptFCknI2e&X-Amz-Signature=148196316b8bb77ea553f8a4517d8c7ff3136686a7a5912df0feb8d201a539ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
