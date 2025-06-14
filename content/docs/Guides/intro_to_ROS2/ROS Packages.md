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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=470d3c77dbdc2c2e05577c28676791cb8559a2cda751f15f5a77029249ee4c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=18422bdb50491e7cdeda1e06b3b37e2a7dbc340bd008aaff0ac24c7bdc295f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=2bd89199a885d262072c7defd3c0860549018cd5803dc60915a682eb22283d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=85a628457ebea157facf8aa46ad77dfeb437737922934d3d2a655266901ad0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=496d00420e7cc85bf99323dc515e9579e3a5bcbe47046aefe6b097d6dce01573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=6b012533ebf0a071a4384b9dc68715a8550412de9d29b0d0c41cb83bd9fa7154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBJ5EIY%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDXrLG5MI5ZvzwC5rocPYKD2kViFyGybi4o7TUHdYPYBAiBKiFqxMt1a1rKJqC5EMe79p3RiXpp0HNrU4AK269%2Brjyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7pKqb%2BjYoSfNF6QdKtwDBa%2BwJaVh%2BCdKa1PHwmT9l2rX%2Br2Y9rhY54QrbIvEUGeijPGfxVzelFVjaShKyoj2LtT9QgTOXaIJUABB8k6yma2IUwQcpdaR7g6nOhywqBtORqIGMxsbW3o0Ah18WGjzrV9B%2BfXizGcs%2Bc54nyv3IXycwcBJmzCzg5344RhfsRJN8lzPzQTu0V24Pb2eGMwDY30LWsgBbQyJaZzFVoaHqR4sYC1AZjdvvPOLIKC84Vqh6mfrt64wEkzs%2Fi2hlWfne2mBRMfRDnBkQphjNP%2B%2Bc%2BnGgEQLVjbIFPcl0lrSwX13KT79Lc6sMHAJk8pPNcpWcyB4J7Z9kJ2GoQhTA86h0CiUxnpGj87e2WKRisgUn85jJYxd3XSysVd6YyNyqHRNjW%2BN%2FWeyek%2BVB88XEwekYQQvavr90xx0SjFkcqufVNYBWpPwJ0FcPC9pEa3yVWrW%2BI8CGFhCQSayRH8OZX%2FPia6ZCjwoewEw3%2FvUhBTpg1Dt8GEo0FhALSxYl9lptFFuX4zbFF60d3RcE7EH4hxZXViWlLj662lJLLGldp2BUrIQV4COwACzffEX781NEpxGfq9RLf2utyIHUEXZQlZvDS6Rj1L71BehC%2FKdu%2BeGpVTgYndG%2B5BczLgdhD0wgKW3wgY6pgGArAPr%2F%2BX15VFx%2FgI4jECDUHLWNp%2BCR%2BXppuhf61pY4HnNDS6E1lPtJ83s5aOu65GlWX2La1bzKqayx3QpZ%2FRn%2FvPFcI%2BDbQEmNOF16BzXBltPYsa1Xkol7oB%2F2MW5ChJjFe5EtXnnCwFoYmAHSeUkCwZ6kpl6TObTFXaOv0j%2Fm9Ej8vNoRAll5xn3LMf40wApGUnz2e0101OlM0ZeIBNpBO8XUDcr&X-Amz-Signature=235631a1e36e3e5be7140d422d62cb3363858c25011900efccd1f18ab4e1b209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
