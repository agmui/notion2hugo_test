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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=5fc918a783b7793fa01b8dc2e9107b1bb72fa6ea7712503ee633c8226d2c51f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=482286c36e30fb5f2769035bb5de4020187e49321d8d0317be347280719af685&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=dee757a6cb0e76dd3e9cee40020c3daee47f5a0539b4d404d32f6fee7dbf198b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=efb41f8fd7a895308dfcdd0c0fb97f6fa31d164bf4a04faf94238107b171b3be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=aaab8d5b77df8c1c6b8c2031da35a85873f203a3787a677da8f633d9ecfc992d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=4bc5553173aba152011bbf1d1a740ffc10fc24f3dcf09ece9c8908257597e2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OG2ESOY%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD4U3N696KaKchTiBxxjnAhAS5NT1JCpicx22cyufLX6AIhAPomsUxAeB5Efmuuqh%2B2AE9fzR%2FIrILTFLeWxKL7LfZuKv8DCG8QABoMNjM3NDIzMTgzODA1IgwpruRpHDMUly9lzgUq3ANs1yXdTz%2F%2FwR88FN4OFZSpWzFOZv3zf6LFtJd9I26R9i2KmF4CPXdR0LKkWNyOU0%2FtwfUBttENi5xLqrZ7HgsNH7icFYpWQp8uODDw4xlOj5GIfvBbngWSQL%2Fq4jWSmS6BythywlQWFTykEbaNDiR0rReQ3rBcMjR0wp8DXd5ld0S4hGKziRxXIjxn0hKUz9%2FKXzxIhLqmUga4OzoxGH62whIKaYU%2FNmBmfTdciRIyyfm8HprPYxGD9lFP2dOUBFefHlA%2FDFo09yljyR%2FZSgLnVXtB5JzdAZyqUcrsWqLtaFc5EF4cnQjSWyW45vB7sBVA4b64l8G4On%2FC1RW2Sh2XnRwqis42C5CLy49eYe8pK1xtGe4aqSIR8vRmj6CdNUlUjXpgFGDSzMp%2F66ScaM68xSFoY5bsUNvyhD3HoRWD98LCxXiHNw15Tv527uuLDru3%2Fj9k%2BIKl6JUnwNUzTWBqNvHsZZYVCSJI9sxoIdauR%2BiJUiPaHDRDiMO392bORtYQmmSm7uIQI1MJmPR6F0LCfUzBtICLBb%2FU%2FygGoxnzAkAUxGuHxsd01St8IhnVqXmcmAbwoPP9l9iYX%2BXOesTIiMoVuUhKy%2FCSXWQZjbDUBrj%2Fzb%2BLTrMV6DnWiDCjlcu9BjqkASUshfX4gtBmnFU%2BLoAzJ4ECjQJY%2FBV6Xnj6d72%2B1C8OjfBXD8duoOraRIRPmoYCMe%2BZctBnBdnuEOdxr4LZvoQhoUFPZUKejFU%2FkuGlwkxxFZc7je2k3iZSA%2Fm6KlZjBckmgP4%2FoIjqPuJvPARonNkHdYbaoabReEkoNWnVqFWwJ04tpaJdJlvce1rcZS6XX%2BQZwhWPPNusAGS86QNBpeNzEs%2Bj&X-Amz-Signature=592094ccf2532ba0d02d2e0d5c3be429bd2faf6f1ac93fce1755fae4dec12000&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
