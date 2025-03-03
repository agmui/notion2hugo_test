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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=f1a4a87a93ccf9092aad39bd1b3e9a6208261b895c7286e601b3ebc088c26bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=1f299d004218d298a0bb71e2081534ae22be2b11a9cbd53f435e1bfadc36f445&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=a3ac6743fb5efeafb7420a7d25b470eef15b94569478cc7c06ed15e3a9a9e3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=72312a29f804f676a335bf7ffcbdb00d6224d97878771d33264085bc07e53d74&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=66d40e7163e07208948a11dca04bc38d2b57e24fba89da9c3cc9b16eec13805d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=4c013e5fe8c8810441055258b4aa3432bdadd660452e7e481b770a8ca3729747&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKY6KRIX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgscR7c5tfm3QibIE9ElYEbgkOkEuPlBcW%2BtY2kdAwBAiAx6RSm94W8EDUzL5UxGvFNHw%2BuKDKnRAHGJFo5a%2FifziqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTK7kEBSiVy0qdfquKtwDhRmNpfXPV%2FEO8GqDjmRPLhPZISW2IYsKulw01ALTpvNzkPCPn3jlpVahUDFnhSeULEj3YlF8Yot8Xllvbx%2Bq7vC6GP%2BVB2m8Yp2YW50ylMhuXge%2F4s3S5qXBwqzr9%2B1JNwsg6JT7KKp4wBneDwfDLN0eMhQX1iPIo4s0MlDkvuZNojZywfNm8DA2lbOORoBOJOnloAUsdFGd%2BcJzRejP%2Fx193f%2F44%2FUJ4npIfis795PyVqVSWLf%2BKh91MLfoq2yRQBIsnP71hROjhtInFcdUMCt5ebfA6MuCvyS3uQwMK5%2F2oBA00BZ8cB%2Fr44oEn0bcQkYq2Hy%2BhBMs2emsL%2Bb6SLYZkUwE9Z8RJalfQjs%2BuInTSPYjGTeMbnVLrowLJmsbK688nF4AGjZS1fDHJ0hUsMVYMPcE3KJ%2BhA%2FHsL08B3fS5X%2BBhyqXnpgU%2BiLyQxDg91OOu9fJkLkoAGPxG0tyPKUABKdsnPNQYe6NdoFq%2FZVqfzVQcKD5euccaAd57wVEd84BHuK%2BT8Ir0TLngnQo8KrkLZhq1U5pIIhkEuu26mzYEbVPqemIGDfLPN8dwjDsjaGomba0umV2NAD6UP1zZb6axsfwAL%2FG%2Be7Bw8uEijATnrRebT%2F1O5bfuQsw%2FtuXvgY6pgFL0lw4JYCDqb1SqEV3s%2FD28czVchyA85D6kPyCt3bK9mbkqh8W3GNgqm9YMSqKQXrkeiZ3qOs5kx54ahz51VM2qbKDfK7LNU7KwliEOcMC5GduyYv63sEl7yjKOdjEKIYgXZ%2BQtfq4J8usoDdP39wuhOB%2ByYoDhJhhcGnQt134HMLGzQn0jtea56mNd4STtucVOB3vvO5lFQRbYOPvdjD3aGO9nCdj&X-Amz-Signature=e9b21bd502897ea2448d264debcfaade05fc21fa38d9c78386e914cf330dca4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
