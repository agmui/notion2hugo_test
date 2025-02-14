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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=8c57adfe27d032638b292ba862ee1d78fdae99c8f994b11dab0743ec27eaa916&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=1bb0df7b657a4a4606eb4e2a80349916b98e8cd6a0ae02ce5f044b4e977279c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=a5a67c1a5be028c17f68f593f3ea71b2dd86a24ea0025906063ea7bac8d99bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=6e7575ca0d907c1231dcfd2f1f8eaa4afd3955279b09792f1f8eb45888ab51a9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=a51d8c87cb192b1ea5623ec68178af7f40c2b5248f3c0895016ffe2190bb43f0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=eb7a951a3c4825457bebd484da7b1f8f42bdba8539132ec31a3f4584fdd10723&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI72AZS%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCL8ISnqp978OzRkbfM4zpctw0ixMxD1Uhd7Ql72op6cQIhAOPpSbXnL6Kn%2BuyF4XqJ7wjNUuWhANawlFxNKUHCaC0DKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2B1xn4UICEZ4D8LJQq3AO%2FBjbsH75CZFEZVaKzSVckOy4lkHyS8cmQyZCQsMUWHyzaoJHdnRwufwwNm4VZw8zAiOmQ61UCxf4KEEjULEFLVZA2KB7T5ibF%2FTGpXN3RULC0slZFxy6VGA3lZf8bgmCdR9YAZ3pWkAky3UdkliDtgqoZG2nB%2F1IfxBnXbqGUcxRnPni7pcqQ%2Bjr72fYxuliZ5%2FsqejS2hBE0U5csPq7GUIwI96F6CNhXnYhbGSEosnKNhKzFfT0YRBakppRj%2FlvSlBYLoLRaUGHJQpmCiG1x617Qm3cEcbL9VIOm5z2PNL707X5372o7Y%2Bo0N15K2YAt3DLq8c538VTp5ggaGH9mOauRqc03QiadoPaVWv71w0ZX77izXw8fvvATf%2F6cNn5R2rxfjMtC65QocRk5wBruHwVokPGRUPjWsw50EfHyLKfnLEbflQzkspyDZdZWPy50uxx3XYc4AwZwCoy9WROdFGaewUU4oMvLXa5j1FMJXMCJ3W1Y%2BBeSOC69zaiX3OU7LZtoKaH8ivRB%2FJsgqbv%2FKubkig3VsEbM%2FlfLdKtKgeabKulAxxkS4duCQ9dhe%2Bum52tyGsr3DP8c82POQMJ8Dx0g%2FCcyP0u5XPSmvpWkV2jBjBsQcNEbs1l0qzDo0b69BjqkAT0DgYGSYsK1DIRHWQymMMMRCSMZxahMmUxgJBrz%2B4IsOaKPYFXSz5AZEJiWdl%2Bo%2F2BHb%2BAgqzBoI5S7An%2FGlIICPyygU8S9F9%2FBpuMunjI5JhVphTIBaCUMSWuppqpbSaKql5vkjyQ6UYWRQwPeQwpDzUfwcnQRqEGbfx4H%2ByLVHuPhnn0%2B8JwS7Hme1MwjRr%2Bdnr9iYB1TF%2BfWzesZRRXzuR%2Fm&X-Amz-Signature=9526f13888a95a109fe1ab085895691c89c58679db6a09cfc01c2e5aae2818d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
