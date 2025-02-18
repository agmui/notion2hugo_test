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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=7decdb66c4f185e432f73080d22ef55fad299c78b740ab4b3ff24157cbebb3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=17c3a7b0d6b5346b91067755d906465f4641e241d6040a1cae59facd0278b66a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=1ef6ff51ec47c2bf001e9c6dc0fb2d2c8fa65b1169c67726f11675f3a5d691b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=2368b69b12d55240b914f184b3b4afa604dcb29c54a177da695f81fb71515bed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=f3003d08c043125a43d9b8789b639da71dc6a7d45008f3134677aaf84adabcc9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=c7e8487f549700f474589826212046693d2abf23ebf093cb164fee7557b11e44&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKQ7IBL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T110215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIF%2BlIIdC5MsCesyCCSpm3mH6PHx7MZiFZmF4Xs0WboByAiAKiQIXAP6xCW3bifjCsFgoz7%2B8exQQGJhdr2qaJBBaJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQO1qqGEpj7QAqlbKtwDm6OTF82twC9NHDTYTLTH4isqxR2OTxONTyPiAKuXowPrrWSvRL6tQtyPpLaHLWYGut9eqFprJZEB0MoqOKt7PvK0AREPrPypjTyGxrO7F2jUioZ6o%2Fh0qaQYwYZLdfpbvVJeFyoWwND9EXKrH6yu3eC5NTTSXVCK2X%2FEdEFtl3C1xiqMPV3q%2Bo64SdfcZu8bWWRzpb6w5GOneGQU8E0%2Fl6SXry1DhW%2BYOa%2Bn9Jx1WpFqpEOpLUmJnWNZ1pFAqLrbd1WbV7CNS8UerYbZjAkI4SOrREX8vSFvu7vHgrecmzKRNV5zBssy3c9VW0AqxruC10NuCOU47mgBb2iOyjFdWZGuYS0BAvZZbgCsDmDFsTRY3RBgzw8cRb5Fq4FQtoPWaYvnysGkKyJW%2FcoW60kvkvSmsjj%2BDhOa9IedgK4phTCB1lg8qk7vdYglbCMYyNiCcPdM9EX7YDMv4ckmA8EFA9mAsorPviyvauzxW%2Fx4zDMwr2IKwl%2BqSVSlb%2B5nU8akkWEtSj0cuFvpcGeQ60ZkoIb99TOew4X4N1229tl9bS%2FaFa2aMuRd82to%2BPh6aS8%2BZa6P5rMIqY5fLxNrQ6EOpFCcMeDYP%2Bx6g%2B%2B1aUF3KCeWTXdMkHG0L8AycfQw%2FL7RvQY6pgFtvcUWJSbBm7Cl%2B8uMQIUc1dZjWY%2BfIKMRIwQfvfK2i%2Bs%2BuqV6VPluCWITfvqhLLZZPeiVZXXDgIXb4hCTQRfMP9ZI4rMkNTrGsPP9tZCfJRnBilrDxbYdbfnuC%2B2jiCLUzXP0r%2B998iyfeLb6vMRRySaX655PodFW4RZS0X3HQzTV5zuARL2J6VhPPFllRCPR3RVK01XR%2FVXmrM67Yy4Zp4HV5r4y&X-Amz-Signature=707db9d344d9f96998f13c1815fb59cbfd56d14f7f4497688e062d30d0fe70d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
