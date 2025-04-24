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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=db3015edd388cf952774cb140bb69a13339f387d62d74ea58a166ee921483c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=3d4b34e4219d05e82e25c6d42f2960c9d4af96200497738a1fe601f5c5b823d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=94378971d74e4270d57d2878527d66ebb9070e31737ded0ad326dd50e1318843&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=f39fa421e6aef7755242091bdc19ab75688e092d3c7b267bb5ec2ed34f0a47c7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=dec4650fc961342f1353835ab6ee3235c490635e91cb19b67b1fad68439e98da&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=c41d4fc6e421156ccb874075f96c55dfe9fdb38c3f3c730c2063d040188783b2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM362OSQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHhvGeGylqIhz%2Fek5g3juDRrBbdbHYx%2FxVGTF7jm%2BxaZAiAfJ82cTxeWqOAC4LwZDASCGdOis9OF4P0m3BA9oSBFdSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM6Cu4ymjVYHAV01HLKtwDnqyuWE9Pm8uWsi2M3fE59jUNNEw2ZOQiedMffAJqy0XlbuAIYjdxt0jDmmeAZYY1nhu%2B95TFJJfMt0dXNgj3bKh%2FB0iiyxAVwIJ%2BF1tLa0cRMKMnxdhxwyoNx5VAQ17MIg2W5BOxL%2F%2FYQ8UaCiEZusnxgXla50dBURwGqGo42QX%2FneVca4mpWTF2xKNG6mSAko%2FyQWh9KLpHM5%2B%2BrcgeRgKnsAtaH7cIZGSuInNEuvOig2iBO1%2BprLF5SVItAu6FrR7pyidBEhGKedGketNBGt7RetONHZp76rTiUd8X2KevEF41yKlxNXXR7stFvHnpz9FL9kXpDnYp29KHRqdNqgVK7FHAwvh0rUxgPTwTksBwTznzSur4JAHvV6sSg4tYEcpD9MFOlB14P5p86AfWfhx4QYDR2ovUxXM%2F9MOsP%2BS2UnhTZ5hRbwDB%2FNvwVjSmzho48KmvpAB3y7Vcn5YAGxoy%2FtGTQ6Bq9hKEd7azcT3%2BzGgon2f9HggRAMnlYdhf3m9oGpe4qPdc%2Fy%2Fkw8ICcku0dnJ%2FBnNCIGNle0yxHENWccoFN6QkVByebGi8fekaryFjsd5z21xlMQHl875qOog6vVTmkFsc0MB5X4z9CkNVyVZdHC3%2F3fJ7UvcwlqCowAY6pgGO8mWtZvvjXEPd5VmSF3HA7zPZdtS5fbztG8Zf68A3wAqD2gM7SOKxRfhJjDjGJfc8v7fMwYNGjkDv046m6cFVsa8LMXiPwTRtPSGTBckQD5UCwwLr2UqERBJ5T6TiUG0PiT08q3oEeMe8222FkKUNDmKIU%2FbRP4GJpdagWrWbNL3KfXIUy9HOdC65bmb79blCrc8yETK1kzbonceOCV3TB6X9%2FTUB&X-Amz-Signature=d3c39c6a4136a9afa493f2593311b4dfcfba1d3028b0a8dd643f66c3a179b369&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
