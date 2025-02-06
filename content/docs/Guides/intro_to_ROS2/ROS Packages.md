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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=07ba27154a3d34c764911763c8d23bfa2e0e1af5258608b51af314778d9f9e72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=81e4c79b53f67ef38f015cb1af880a835d792a54db7e4bdd1e7d6509e6597aad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=c99c15e5bcbae3d6274197c7c11e30a28d4b88e69fe239391310af5e5533be4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=53ff048a9d61fa514868f92fde4c9004ae7339528cda7a4d950180092c11025d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=25b65e9b1aeb425f9fc267554cc8e1e7b5b783db548dba8d4dfe7ef99fdcef7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=c1f57cdd9f36a4f5c3602b87c559f453e541486e3c3291aabfdfaca858517296&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIOLGL6M%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQChPAhLdgcGu3glR9kjzOsqGRJZVjEXxWLi6rZiOCtsnAIhAPhxMUPSVQt6OPdO5W3ZkozaZFzKPkO%2FnAG6%2Fx8rviF%2FKv8DCF0QABoMNjM3NDIzMTgzODA1IgzNKVVcxk%2FEM%2F4NgRoq3ANkwjqx2vDiID87ZhfZpKs8pP3%2BRQApFyLVT5UqhZ2pSSoFpSeusva0EfyumQ8nt6bPJVh96Jr3oZGbWUBK0Fg3%2BRuk2oSq6zFm1riUv0ZbCpDxPJlQKuMCvDQtw0Y%2F40uxxilnxaxG8W%2BGi9MPFTv1yup3009r8Po3OUjka5td8VwJwywzrgDSI%2Bm9dfojvndhQQqMj4e7s3BKMZBPv9bVdvW%2BfimgaamCsH6VM%2FwOh4QAMk412hGAd%2BIaTMV7OBNaipjBo10FS%2Fpt7V2c06x64Wr1LO2igx0CLVJJdER9DUT%2B8imC1ukb877CK%2FhOXyaqaIp7Rwft7ZoYg4DLhQQNctJoXMPKrY0qrNwXaVzIEMlRPLmN61tRBfCpkiFJylW3wc8pecqaCdZMG8%2B0mpmoDEL6fd%2FNN67a%2Bwqe%2FVLJo%2BPqjuqX4fuFTN7X4jEkdAUYh5qw%2FsFLF9Seo%2B%2BPYcOmT1NqAJU7PObsEqlRw1SGiLIHkoG2Axcavk41%2B%2FazJ3CkIw3DptPcEx3a5b%2BZ7AAFe%2Bc6BNjhXLC%2Bo%2FMA6NeYmbAn4bYSEgYVjTCHFuj4JDo95EeobldNazwcaCmGB5IcsNJkKq3A3eJvB0EYOr%2B%2BgPVnWyDoJyV1XmDCpjCoxZK9BjqkAfjMJXvgAQUEspKyAXlgTGTBZyAMW07xqYdUYsZ%2BDcwKsKkj3lZ%2B6bBxW7DJxg%2FVQ9tGRjhoWBKLZf9OMeeawg4Jw2d07Exd3ULWi0b6OeCYKGok%2B%2F%2BEEZdgX16xjCGirEtYjtPdh7r%2FLRfJzYetklcxQK3dqkc53JAueQ%2FbNnuuKgllFS%2FkZRhydK0y21KpB4ae1FNI2qKE5V51TRyutZYyY7L%2F&X-Amz-Signature=f1b0ceeee318572c4941db2af498f4ce7ceff8e9b31389c06f548697ccb3e90a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
