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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=f9a512f02390e4ee39533db4c345ce34128b5d5014b57c38c16c176242f4d3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=921391ee339442dd57b388caa4a9ba87a628e6e42f0577951e09608d365ee67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=ddb237f220737197e94f2bfe25a2fd3eea1efcf93ae4cea8a154fb959017ebc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=ccf844393d06af1d940953978b7210ac933c1c8f64892f1b8dd7a7122dd2bf47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=e438a804e46b66bfa4e5cdc4bbd05d2741dfffdb2e74251465661add74520146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=d217e2611e5ddeb9b0c031c4ec8ea1cbff27b2c97c21579bf6e1e4eff1f9d7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTOTSBLS%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDgP6tGsef7%2BNuRz5NdZwrIbfVQ1DUH2psHuGhugmWEtAIhAKJ7aiVhCdERMfJvIZZaywMnLY4tTIqRTmjBYSKHg%2BI9Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw4CJbnF%2FvFXRJSaIEq3AMVsp29xIKQKyAwX2RA%2BmHhHyqZ5erIot%2B4aTTbqtloVrzBpVTE2dsnZ69GomgPAcG8TrMZIaD4hwekMMtQpv8MUmjQPXKBWbisTM24kG19HR5FgJEDCcQcfTA%2Fk%2FbCmqdlaCyAYb8Tx0NDPNtIr6DQbNVHPa2gm7j6sjrkD25o5WNdjd60Uf%2FsJ4K7R508AD32EX4%2FLFAGsaMYhWw5Vg8XW%2B0fb5d8KlKpAllL8tWjQqI%2Fdq6UFLW4fVyfKE1l2AlbmQfKwqZRHSKG%2BX74aMhO5Wjg%2FMDesISBHqSCohFrdJrJGsUqtEvVmWocOQH1DVvaACGgAQ9ZyEUMn4%2FZKfz0it6ZjQcBD9YnX0It2uFHsmBgMl2E%2F9zwEu31F36TEwIxhLePcT84qrDo28vRSdzgaxGKqbarjphMWozBT9UJCgn3zGaHE9mc9J%2BxkAYmT1FmXBfIuXnZlXwwYu%2Bey77zUf6%2BeTLkkZEc4AAD%2B8TUwNQbZY0gOhca1EqTnjSmHc1sF3%2FZEg9UBMxb%2BJq6OPgCdc0%2BPO4ySfwcHJFARX1AIXkdhZSj1tLUqu1uF6ScAPam2GHy2Cp1kP06yE85GhrAixEDNryXAQyfGutXEkhZupU4WVe3dzO5B6SBVDCzu7bCBjqkAZRoIq5%2BJZ%2B5rrYOiAtDN9TmOEH5SqnpdQeskm3x%2BZ7n7CsdOq25jj8DyNBv3OwrD7UeiNqI8pEaFNr90quKEan6h8SLmP9zcJqq9pN5KS4n8dH68Baytwqeb3nHoyuUep%2FUzLCCJdsMEfVpWJDiCIv3t2ToVgr0DsSpjAxf5IZpKRu7ETCXZHf5rM%2B%2BjXsLqBDvmz2CSuyS6MUfCURvyvuyoB13&X-Amz-Signature=bc3eec7c9d12c61257d81f007680aaa5a96a80c0b84f848a24136230dad97482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
