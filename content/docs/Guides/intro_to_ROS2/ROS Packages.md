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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=13bb9e59e246732e6d4c90b793cf61f507c9d7451964ab36b8120812c307673e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=d89f1ae6185a63e6f1cb92871015c438bc4c7ba419918f8de72679b8a564e433&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=b5f9bb5621c70622c38693ea056d86d1df17498bfa181c4b9ebef1ee5d9982de&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=2e4d16a146876a0049e9fb70d9cf962dd2f69c22fa8d868951d9a2413766fe6f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=ec058cf0190f6eb929a7b05e6831647249356d4856f51d7730e63ea459bb2f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=ede226fc27d50f0d308f8aa030ba7b945faf1c09445f25c4137ee900db081583&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB65R7GA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4FRBtcaZedu%2FWVBOe0DXfVr1aX8O%2FxxNS8zWGRf7qdAiBWQ6HqLI1Tiei1cqp5surRaYXErMFaQFv%2FZ2%2FU0BMb6Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMkuKvU64BW0TkrzRbKtwDcmrqhFNCfXBDs5yQ1Nx%2FhIxXTD%2BMqwnfZgLVUoWPhwyS%2FmO%2B5MZGxKxMhmXhYI4lEP2jRvW%2B6WpSI%2Ff%2Bf5zkM7XADQqmrlxyDCD0FQMnGQ%2F5Ji79CNOeL%2BMr2SDfnHifzQAwNorphkfVsGbpHA12EIBtg1MUFXb%2BfbLqlGEhBOEmKCd%2FMao3Ogy4Y99BIr506DcyRxn4zKZaGN9tUCbDJpaiJWMWl%2FG4lY8sWZmID7V06%2BjE8W9cLLSdi%2FJ4Lo%2FJlLXg1w0G3GBZUwkLKRm9mZ4bDHUf78pEEjxXfYbG20luISBx2FUhfHueoQoYSzPNfXS1%2Bu%2BUHGjzutkeFjz2TjW4H5Uvei6fukavIJa9YmAXoDOc9vGO4t2Mq9mlJtBf4R9PfUmSlMF1LlJ%2FdG3cMj6MnNbRC7dcvvlCP%2FIEZ6z6UVcpeou2sahgGlxVC4uL0iPpUsRCor1%2FT87g2%2F0RIKeeWDxguOfgLj52QZ8UvyOTwHb4l3O5vcEndD%2FzQ4eJ0i2Br%2BImg6lLH3arOLAiNGbgoteXc8GXyXHArfPcwDPIxuYSXTQzuh2CE%2F1m0aklrkcwAlAZZ4hhUL7oGMl%2F59ZrO6tzBZ2btMBC5bXRg6QMzXenIR4kXil9b%2BIwidObwQY6pgGSHweFkpVwgT1D3IAC1w8nFXODiMNiiKIXHqYpU%2BnM2qtp7LdhwGR%2BJMeCFOHqIIUCRKDTyCKe0fZq7tCo24ac4B1nFNm2blswnB6S4L9gze8PJJ8bWkJ7IR6BfmR6q75gTq0Ni3FgsPOsOjVN7gCQLJH5u9xR3%2BuUrFyQqE3YKo%2BFZfN1uPXSSASMnfCizACZSKt2SpZkFHjtBGtarqOIVQAzjF0I&X-Amz-Signature=d5714a3068381e5c275496b1eec0af3086ae62dc5289ed895a818dc3a993ba9c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
