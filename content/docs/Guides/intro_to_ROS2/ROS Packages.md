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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=af013b0d09d8167fa5bf8f8c3f1e0ac8d0b8b9b9cc48517ab28b44f722924fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=ec8554b804d087814c3fed06732a07676acd112e09360dadee90fbec6e3bbf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=3714f926fe65c2b4b8633a91c9150cdd09d8783fe65b1c4a83ed0ef6015bc91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=fbc8348b5a2d580f9341c473fa7985b4fd768490b17710487e1252b625463646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=b513edfe44a2910273faf67b0c680c80a0e820d58e9f7bd4df99d054cb4e97f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=481cb093d39e17eeb52e8fc6cf6f82bc4aef9f1fab62c926b76ccd3e0438fcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAEKX7H%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCser6jWtfVM8CFn3I0pXUOb1JyOgZZrGEco4lCaS58QIhAIaunIGXUw8lbAggf7SZnZp7wmk8nIYmHJo247Qc3upMKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNm%2BS5gqXeVIkmxi8q3AM9u0Jq5fsghAhwuUQ639EgDC06zDJczbGM2Ga2YY0qJpHJHaiX8op%2BGUvhL4da%2FCud0tKTakTWZq0RjN8riwE0%2FAclquNaGUlRARQf%2BaBHtzo7ysfkajuclmNut3lWEIDaXqlHwWF98ozImqCalqAAI4KjhpNw3jPBDTGVW8ACOl%2F2lJAOrnaXUpRENB8yX5E3bYzrRVGyYLM6qfsuYlxq%2B292oCnALgZKtdo7QI8hbxn9%2FYaDJxLAyjA8RoV3p7YKgjX9jEJK4HqhhCTFLL29zJhCKqT5Ty%2B%2B4KaFEqzjwGZ49CVGipqxoJdS3kMg3x9y4%2Bw9acWcUznsHrRQAJWHVTSnIsvdrFLbVVTNINrYaRq%2FUnn2ckwH93Ya1BdYw09mMciQcHxpXmWQT58KcFOcqK4ZBCIdnBGoJ6fg5PJDqFS9IzU7Sq7kJwOWqvomTCdk7g1EZ7WgV8oa4M4zpd6zYrrP%2BVI5E8OGCA8AGralpxSYzqkAio4WP6ljL1%2FxkuE4I%2B9LIXAzBML%2BETBFOPiljACTse%2B4frvGq4TZh3WvQJi6pWSc1flepeLvoethJQ%2BeR1E1zFibbFUHW8R3M1rA09NpXeeitklMjzHM7oJ3bavFDwGldatMlNTxUTCn8%2FTDBjqkAS9p9zGjgMHnezCEndEpUb1Y8JeBKwqmNnHUT4eXwqM4jHBoxfxSbV%2F5JYUkL%2FZjJyWR5oZYaOsAveiYR%2FxBZCqdL0GNaAM4kxTIwUAkmzg60tKP2G7mH7hZ7zDoLbRJe82rk1GumYOFOgCB0fvkLBaujmND%2FHACLUoqMzR4AFaEX5inZ1utfM90EFJE%2FXD5QpQS7%2BmOUqgE8RI5P4sb6SIwvlNQ&X-Amz-Signature=ca5966c98c002b0768625a3242aa9f92b07df0416eda603586e8c0a7f6be1049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
