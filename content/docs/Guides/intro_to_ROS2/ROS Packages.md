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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=28c543ad15a0b985a40389f671597465a714a1555837a40a65c7d4405c306606&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=8dcda6609848afa6216095cf91419ca3fdfb609eb3a769ea41b8d39b6ec0fb50&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=42a4d4094c75f420d076202a7c3a926008921eda189286d5a17abc75c759d504&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=12fcc89e8146a0104b81743cbf7cc3450d090a8585ce5c0ac4d102d589c93d44&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=346396b8b99d97ccbd95182d63a6caceedfabbfabde9526b9faf1e7038bd8211&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=0763f1104462954517ffbeff540a50624bc00941d591d2c6ad4b2ba30041a356&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWEAKVH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx5GNCR7%2FR6RwGzg8FGDZnFSNkH%2Ftx73qabV3llxnKjAiAz%2FbvB7Ngb3dy4B984U3ZNKmK2%2Fy1hlQ1sh0Xzlc4ECCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM8ATv3bQxgRM3B6rtKtwD68iWcP%2FgNCpz6eK6xTF9KglNpTNAEFZn22U%2BVfJVJeefZPZnPr%2BibiN4OiXW9%2FDL%2FSt4LyHGVypKoTY3TxUqZJxK7YeCM2ZpRj9PxtaMI4cEHjtQKom9gCprxBTCeqL6yO3yAEjqjm2Z47g773fSV%2FY9DDeH4mWoZo7N20ieUq%2B6BmxiNVpOTLDXbxxgl3hg0rqqopEKruDLynGn4BBqHg%2BXlwXekaj8gJed0dBfV9Cli0q063g%2Fe7zLg6Ii4InuidrPU4MN24LGmc4zlMP7l4mVftdXRvLmLwQepANp6qFeHFol8hQfVCKZk%2BZ4AeB4gFdKr1I2IIQN5SRpBFckyhFt5LzGJX6rH6YXjR9BbSaxVQaUqjcMQtTHFIDnKJc6lpXAVQTWjqZUrIABLDWUW2Yf2zuMLx9z8m2SdcCDy7g6e%2FStmYMRDYsSqp2F5lUmQrgvraenxxf%2Bi%2BnuH8dJzYZkt71wOLFqNCWVAzBosy4jEHk7t12EgasQ5bmmL9W03MMvjPnAOr0SU0LpCKTnYq990bfTq4DEmUZh8T3sj2%2F4hffWgwRm0xZEa1V5Txa4gPGF2kNBOfzzKSompXlxgksRQKKCBYMFbLhlYb%2BpDjR7OaVJpY8deSSnJHww5cnjwAY6pgF4Dd9a18PutOPsj3DSwX1a1WiVpmaq4AfGk1EgAMR0g06oOcmFQtAeI4719MnSOKqnfOdZxf50tBI5hpI7ZVOtdktsAbxpAR2M4DVYJtRmteEOg08gjzlBgNMxcanjvyvK5L0gSxCvwnPQ4S7VTj7seqYj1KiKrnvJIqtBo8xIu5MztxbZZxdzL4StmleMtDRHIgGDKwuehaYkOOYa1%2BP0QZn6dOVF&X-Amz-Signature=c3e53d2772755179971c0adab79c278703b171d72317069c526db3cf376dd090&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
