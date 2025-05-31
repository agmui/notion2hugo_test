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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=a5622630cf219e4a59e1db364ba85c84d322bb602969828160183737bc9834b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=f984f3dce0d90cc178f8c7c9c807e80fa7a82379ac31b1667d2f10f4e2ac8b03&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=6fad47e4e022941fdf33e98c349b69916592fa930416e379a3532c448fd941d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=3939aad97011627e8b6283a226169dd48c763fcc6e78b61c301cc336d46c964e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=58608bec329c4dc764f25b5938166dad322412dcab4e0eae27e8d04d761a271d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=ce9acf7e32ad632f4b6e44714e5fb5e4bce1da8254d7024683c0ba26cd624e41&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYLNHQX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2p2gF2j3No7O0Tcy2%2BTH%2FjX3VOQq5pK%2BuOM61uJa2zAiBjGuSoNkwjnGNVIxMesvjbDbfCh4UXVZstWIJWVojSfCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuVllbgeLrDwGMhkEKtwDOji%2B72XjhbwKV9KEA6bHyPIVvfwYxh1SuRh44xSa8v%2F0E3KGqN4XuwgTt%2F5MyFct%2F4%2FmYpO6DbzbRd%2BOA9GOCJX%2B%2FAlUaDzUdJhciYzEjzPymsV9oZ2fvBxiO8sP1oDOAJiBI9VS5y1Ij6vsBy7C6QbuiLdZWUNcxm4yRX9t7zzOa0%2FwrLEDqmyp%2Fh79FpgFQXP9olA%2Feu1eqzZWCI9OyFnrsbu1Zz9SEr0YN2zRo0%2ByK9X5iVPQEACfdGXDRWoOW6qo60lkZ0%2F%2FvJcABp6C%2BWWoYD4yNDj%2BzFgCrV4T1fjdiNswueQsS5VbUtO6KZlK3ce%2By1m8urIoy8lszZ1zGBan0Zw56dSi1PQQMqbGvBH3ztr21vdVb15gzQQPnXbofQK5sKOuuZXDFohfDlPmOunW%2FNB5ZRFg%2FR%2B9ITqeZuer2lOzqeZNN27dBFoeW8QU%2FQsPMswLg9o0YzFLgiT9cWOuDidHbpAhJ5KYL9A3vfHSg%2BQgL%2BDG%2Fe6dtI6FXcsLVR%2Bn6gKYa6T%2Ff6COXWIQwF9mN2%2FtVUulqEQECRRD1Se0%2FAMvwL1DahbEaNbjEXCD2TPemfTeTzIrJAlm5bpBrhzaXYOVKGKhBo74kLzTdCFObSEuJHajZYNWhFIws8LrwQY6pgFkNJ6Mo3MVreLkR8QrQl%2FDDWYUyiGHirCaVmaq%2FXS3TrhwViquRMBMB2wy9IPPStneaCzKBuANxg1peKXzF6VTNnpZo52jvVxwUn9bQSrYJavHNZIbs7lAl%2FWNX47ZKRqynQLbZ%2F0%2FGGtLfiba1TAr8YxtBvbt9WlH%2FH6s9Xdlpu7%2BaR10Ev4DqYotovVrqLbX%2BCzfLpIt9uhgMWNbZ4NxGVICBbnc&X-Amz-Signature=c9dfeb8ffbc5e3e964f6011732dc401b9f40c483c29ae9c7126dcb6c3e7073c7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
