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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=1b7ccfa6fe5f68b178edd95e1838d67e284a3ad409b5d6f234d396ea6ca462f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=11fe2951285034971cacb3b4cde281055e777e9b3d7cbd6eb2ec73fdda481bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=88aba2da6afff56c73105c011edc7cfb50e66b21079b3229f672163607ea07e9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=af6fc40ad86f109747e8fa3e1a663aac1134382240645a5319f667ad18663a85&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=07636123b31762f08ff3ab2fb0e996d7371eee4b37f74d3560d95090630f614d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=d153940181d62d413e908d744e79ba6f69ce93035cb74a71995384f384ab6e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BICGYX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA524ft31l0gQjDz1UDznUaWVAHiEi4gqEs06ryBuvtbAiEAjgeER4EcLFp86%2FdyG4oMWSYw1P3BmjMOSX%2FJ075DQLoq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGHgG7meQKxWKNpe1SrcA%2F16JkG0xdZg9P0%2Bh3kW3DIEh0orLbElXZNZ2mwdD6SDZeLtfzKCyq829my8VjpzPaqv7MI2WcRen%2FPa1Er7NmCwdPfs5KQrNdwFkrdo0THl77xxftkHGBXc6ll5zDIBMU%2BJ9vZFsgYHjMdghllbHAAfekoVhTh5ti3do3nPqf6f5XdUC9K%2BpmdjBu7KXQQSzK9OzVAr1zZM%2FcudQq8D5NsUbnJhgqZItJOZ72xy2WaGQmJOA3Wvq%2Fxu7ydVUnesj%2BFFypPRnJCn1SfTDJplUD%2BUUBDIEznV2TIJm2gFobPhGcEVGBZqoED%2FPTc%2FhRRzp9mkvpnQ1yanwaHXdXWIGRHa0QagmYJjGnj%2FFWGmjVxafDu2UFdIzLX703eNT%2FogzKzJ7Jp7lQgEt748V%2BI6HLHqYHtuRQBVQhUIc92A89bDno1HpWoYCYWnrxeZFZxxCuZiYfs7cyFyahGhgvfSig%2BgKqHXBYNJuQGmW84Vr99O43SwO2aUYrxqfwlyWjVq7zRSRP9zvPr9sOqJtW6VcY%2BQpBggmBVLadYrZAB8K0NqbqGT32u%2Bq6Dw3ldN1Zp67UcbBEs0NEsSupK6NphhMo8yd3fTJ9Vd%2Fg9V8g%2FNKBOoxozCQ27ppNEYe%2B4sMJr42MEGOqUBZTOObCyIDR6G2nmKnGCrbvZoZKIwn7efpdApLcGWD78B1GrUs3FRWwgQ7Za4DKqpkIkVi78aXXRaWk6gFDA7TAckH66CUb7PkBVOplYjT96I6VMiA7h5qnzKfgBzb8dHZKohZfvdMFKOIDLU0hZH7HWSZ0qZM%2FiAH8WTUDs%2B8Mxe3d%2BHsY7hcYaX1Lq3JkCQLixoSWWzifuc2oPjSKRx6rabXqOc&X-Amz-Signature=7c666b414dbd76dd5d9c546f6bf7bef823ff9478da13a7a24f1064a61b0e8014&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
