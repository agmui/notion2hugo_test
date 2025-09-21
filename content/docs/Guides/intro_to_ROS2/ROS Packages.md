---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=708ae4f5291f648e485c6ad3af787607eb021967467df77c908ae2055bd06419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=62b21372857d88153f252fc9e4eeef79a8973e8cd8445b8ec9b7f057a465f8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=0d63ca370f423c2d779c92ec399928fc5bb40fee7c15665f1ff4ff81193a794a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=a9a8ebd0289d1209b2c04f6c194a67a41784ed42056b0f48ac6fdf7433c199c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=ea6fe8b965e6b8f5e6d806da88374497d21aed4b2938e99b61973805b0aa41c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=c063aa1ce1f9dd40bd055640918b2127ed59396fcbb4acc99d08561cd1396dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJBA3KK%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8DQTspT61%2B1lYdJmhGti4%2F8Tpbvf96h4iBnCrWcyRNwIhAKDmi07kaK4YtNEXk1eDNz5F7HdUDJpBj0U3qx5rqu40KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7TLe26E4JetCGtnEq3ANWmw2j%2Bc5mqJBqBFT7ObqS1KmnLXFE%2BTE2VnSy4%2Fv68PN92UfrLkQp9tF0IZFjg%2FJmDB759on73tNGDgV8vHLRwRsUhW6NhMuRCKs72PQjcqRBHoUkGqPm84yax5Uh%2FVLLTtucv8fl9DLPs%2B%2BBKuEmWO3%2Bu6VvL3qNufGrvWjAmKpYxYcH0yNo5rGPQ7swCrePE%2Fx3U97JPBtfbMEIoHAVdxwyKtC6QoZq9d6NMkEJBWz06XMDWS0PqR%2BO5zeGcCYTEzD1DhyyXcxOZdl5mILAmlHnI4zNTeZPdNoqYuPnds%2Bzm4kvdM3AK4dMTAeqSOYXLn0VdC1cQTMWWOEzOn19F43Yjoo0pnjJ6HLeERxrRaplPkOqNFBEnlOs%2BW9Sfm1FfXnwyAg0IX7IUu9l%2FLfMw9ZB9tTNIVWiNaYsqaNNZJe21XhEWjmdoxmy8Om8o3YlIvRl0cpQl7b2k3CLeUIzpM3Z1Pql0pZve1oYC47VIuYNXoQrmWiGbG0cXu8warR6z%2FsC1S047ZpR241ZVkGsT5lbCNJfKAD1ghEdar7IkoKa%2FOmzlzrIyBSylpS2Hhg8kvDx1DEjmP%2FCEHotK0qfrhYnLZPHPIeshexF2kmJ%2BIbFnWzH%2BzbmhkHuQjC9nr3GBjqkASpA5%2FzsEbDTj%2F4lbDeeNzWXH7dCVWQVNktQoFZzZaAhW%2BAjJ0C%2BNZkyvjH4O%2FZpGsBURMpN1xJI9lHVCqPENVQ%2BLP6UC7U0OLViFieaS2o6%2FFwqqoTT7E%2F%2FOZIy0%2Bv0Baf8NKj7F5a0J0kWvOK6iXRInxjTjzLjoPA%2B8%2FjyO%2Bfemurq8iqbaQcW5kfz%2FrR61DeqN1boDwN%2B1hcPzwR7iM0ZYM29&X-Amz-Signature=185d04065128a490313b42f6ef730e05308199aa345874e26c875cfdac4a6c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
