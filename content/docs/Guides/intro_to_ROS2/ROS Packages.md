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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=82d5465fd2ed8b596e316533801c531139b0c0f4da884c0639b5df9b2e95d837&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=4c3aee6685f7a6eafd12303559fa2e5190b50694e403a6ead928f9b922acdc5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=dc4f82cafd99bc0399061db7353979be8e7e5fb5accee103e7ab690fc204aa50&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=96933d96716b7e26b5bc1bde9f410fae4394702a6999ee67e2cedcc966be37a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=fd16670eca7bd604456251376bfdac22b3295e8071225792b735922f25570660&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=ebf90a53c442faae4732473203a3d204f75d6c0df8cc62bf7de75bcb931eebf7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FDNILH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtsavk%2BMRhCxZ1WUglKXmZPCMdMyHmdall9gdMtPrAsAiA4U9o7XQ8aNefg8%2BpETObY3KwT4VGZdnqGROq15GmCyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1473Y7GxDvMxJ8poKtwDokf3A4sNf7%2BYtZ0WkzrGiE%2B5Pdq5%2B1yW5u%2FWjjcR4mAGKxXpOcYF6jPezEP1rHtvcAwYIooc7rNTekGQjApozuxWNFsJyDPYKsiUuXn9tWZIwXDhP1kZ%2FC%2Fc2tKjvXk%2FgeYyX847dEBnLnHh0Tgnyj6iz5He7Q2HhO2E%2Fk4nRUNIDBDZrQKH02CYXXSqPoJtr7eCE5bS%2B6S%2F44fbh92k%2BkiVaIyLOIMmXVIFFMOOHHdC%2FwK8iAjftC%2FxnNERjL9E1O31osCQfzcj1k9EJ2S8cNAEJnf7ZAdcKJMacz%2FNdK1xpB4dug%2FVlaLls8hUdgJEmg9wRNWroFvkc72xxzSlGvll%2FEoQxZvSPgAU2tlq29xcziiIkOoUSDvX7I2pJkDXVM8YA8PnxO%2BiOb8Vnn%2BLfKN1xaQfk6lFrVLf2ElZkA0835t9%2FOXR43XZjMlr7YqUCpN92qWeLDLUSJ4fDcV0tG4%2BW5bmqPWYfNh0LfNuaxKGgnvFYnpHyM6sYvVeYM%2FNCnZvdaQejED7%2Frslf9UW0DYzIYhGSjZgooALIjgLkqM9LQLRyn5PmIxoznf7hCCfcc8x8Xjo1JdemF1keehK288zO37eB%2F1MQulb2qA%2Bxx51v3pUVJK38j%2FANDIwl7WfvwY6pgGzZcIvwtOZnccsKURklL1MFO1QefbSS6vrVSW3%2Fu3jL03VdhAJiuqKoC%2BhdfXsQdAoh8cmR1ZNAKA8xZpURk8R6X9B6SxBsIAzmOAgvwSHb3Gx2s7BW9p%2Bir3eJ14e7hqsEP7%2B6BNsvBcP3rHdU3ZEhgyoFbXtIGK8fxPtMFfh8GHNLzZVhVmbRsy6JaYL7dBQOd8Z04m76jvqXb%2BGSK4lgzeeo3D5&X-Amz-Signature=d63ea671a164f173083c8297f706418eec1ab3a66c75091855b31ed57c48a42f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
