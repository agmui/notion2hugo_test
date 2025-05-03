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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=df027d875585b1ed9b88373a5d383b5d799aef7623e9288054cb271dcfa35ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=a1d0b2a929c472934b8bee514f649bb69f93914e05adddd46c6dcd723f565c73&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=5a01ecb37cf38479736aa83a85dd5a6e33cd0e3cc17df451fd09911f4dfd7176&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=ae942f82b9e4fef8d229a4e427a52d3ecdd330f699ed47052a948d9205390399&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=306db64b04cab335d64311f679a611eee3f7ac1c78a61bdd3040d222a330350b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=8bfa754c61f1bc5315ffa625efcdb918a06409a46ae4dd2ea575afd478531535&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JYZNNI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCYpGp0yLOUGFhFHyvXKT2WjZYS4UFMJq4WJfXjsVJCXAIhAJUPrVuKXBOeGHxnXoxnd5Eh1HQlJjUUTF8GpYF62D9YKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmqeQ8RXepBOm9NuYq3ANVmOxwdzJkTXHxbFi1ItESZHLqXu%2F3svP4%2BSV3KWvSk7jYYWX92IG1OysMOykLT8DdJwyi3h8G9nLLQFClD1QNgeS7qKgsa9SEYpuBlex6JXlnSkapU7Yz9PKVWvCTC6On4FE1sc6ybUo5IR4CrBZawliJTNRU3IweJ9kbYOFOziAdkqO46mL3eC8xWxzxnlWYxJzt4gx8XvOwpcSH4UaWVBfcucIploUavApNRDQ7M1X89N38nGWCKVLU81HCi2kwqqN6KkFGzNl%2B%2BX36QtEf8QC3A3NdJkFHTJRlsvEu02GJwPN0EX5oA1l%2FEAX25HHRuUbs0k%2BglJAg5O9hqh18VDLPA%2BI6umkxg94mB7x3890gcj%2Bdx3PJWHylt%2B5QgzVjs%2BKIQ4pJ3CTSrPd3i1n9Ak5hN%2FiOwzBu9y7AVTeSW21d9WnHM5HmYZugqHJdOV0NDHhOp6FSD4s8VUPG8blRctBiBsifpw3q0Vzcwg5BnzEj2JerMcBtT%2B%2F0NCGnA%2BI3PGe7lBZGsXOAE15ngTng4EC%2FRoPW74reeoU70eLBnnGlx8y0fSnIusapf%2BwceVGd%2FJlhAhUb4gA%2BErpz4Em0m0isCXyfCCJ6Z2sF7vM04k3Mm3rw5nvnV6hzNDDx3tfABjqkARsf8Iunx3ZrP2Lgv%2FFHOx1horWWSEKY95ms9gZEWTnUDkZvYOj2NzTVZ%2BGmLM1m4ZakE5udYpajTfaPbQi7UuQDI2KVIKukD553drNIS4pfq%2BQPbp8fWh7zQP%2BTaZPOl2tAgCIyZ9iZCCPJDOCKlr6wmkYY7INyu%2FnHIXd5f5vFNa46boww8oYYKNL0kqKahZzFNypTGYiMvqO5q9sr8C6xS5f6&X-Amz-Signature=1715c8f6f029edbb0911266bfd090701bea2dae8bd2148e1c89c6a58c6d0862e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
