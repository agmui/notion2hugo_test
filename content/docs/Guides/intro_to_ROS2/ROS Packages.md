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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=4954aa57c5619b3f9550667e333cf1fd5f7b2f3057403449ec117486014682d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=0a4fa57021afdea9db8b26e80cfddfe1bdb49670803b04cdbc756d103537e5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=42bd2461223c0081e54bd92ae778490f8cb9eae7c190d55f1744835e00cbbdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=1bbb2b9faeb1ed8fa078c7b75e1f2857612c192a15cedaa1b1afff5605ebc863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=d1cbac14989c84f7be05174c4eb8724fea8c8f3816f226f2de06ba537ec4248e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=8efe1d3dd5418fb038d62411ee9bcb91a0f168c8e04760aefd891d97573b7636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3QRAVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCObx847jcLACkCq3gFdC95TyMwTxqDMl6ym9BT0aXajwIgSfNPfh2reCraTbXpZtI%2Fh6JxXzlpY2iKZNBtIw%2FctFsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1R0itroEtRJm%2B2zyrcAwo0iZxu%2FFHD2OahoheynDTSoE4uyIR2nZKKAoiNMoZFe57M3H3hs4oiWV3BBXXMCJLNARR7VqyXX0frzqrz0IZYG4MRM5svC1DyG8TwVuH5XrLcpesqX0FZXwJbc7w6SvEqWJbEYENEZ1ADHNv8VoVAGmEncTAcrBmQmuUVFgxecdt%2BSuoSmBJv4Kl7TpTSRYaeCzIT3zkc4xo7a1zZE%2B2uwXXF4f8QqezJEWOyqiTQ3ByDkewWtGNrlZ%2F2WPhXg8MUiLooPfe62E9X2ErofqswygyKzzdHdvjbhBpWkIdWlItBWZWFqDgUStWDylRYYl1DJcs6kxduZQOPWaBNFulJ9%2BhyB1XWpoyxprCcFSeunOIdhk43jOwPvYtKji0CamuyZqqY09EXAB4bL%2BIIl4aOMYZ5pQ5VOan9M1JwEgcld%2F5v1ioO8Fa0bcZphmuqcWs%2BZg%2FO4mJSxHjLHg42lxVj6zq4gX1teofaZcl7wBBcl2YXNqgW2Kq6AHNVa81oRy88k0JqOO94N0jPIY9TOA6%2FKAJdgk1rtTLSQoHYpwSic6ROU8HDZXJxghfEb%2FtjhzuKAR2cgpw2idSumMYur9gJX7hOX8swCyiLWDZySi0mQJcQBmUhKCZjAtqhMIOR%2F8IGOqUBbR7uifwcz7cBFL97CF0uaGhD8JTl7pswDc%2BgWq3l8nJmWDwK%2BbMprKWr%2FxoTImvYhVTAVZcBNhl%2Bn8gQDQPyg8wdY3UbNwxKRXKUs5LR1JLwtL2HCizS1zWe6P%2F1JK%2FDyKaJvX%2Fr%2B3Kjp73ni%2BlP%2B%2B9N3tpOKPD4qDQDcLLOGg1KhWGR5x5B5ayW2Qa1JwR5EBI%2BacAYRlf%2BeSKtZ03oiYGzMVVV&X-Amz-Signature=006f33ff5c2bf811d3268bbac54b64682e13d5475f11b0094db7bfe893923c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
