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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=d376a979aa83940804768b0d62fa3f195e37e44f2ac016bb4a32bccd999ed012&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=393de1d83055524427bf87857f54f09e0c695906b237eff006cdc15fb423c91b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=4e343499fff6e81d11b7aa393544670d77126122b5458272dbcecb9d34de0a61&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=edc9c06847cd8d50778ea06ab17ef960b6d2a7078ff42c8d82a94ec730748d24&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=018a16d4f5afe2254e99404e2b18d096da42e195d694b7b0ef7ed1faa792ec42&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=f97e00ed7d909e5e4404de9549df533ef537fb406a0f8564cc4530efb39cbafe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5ZXCH7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEz97KPmgio8l87wBAvxcNQT%2B94RbBpRphFHWjnjNIigIhAMUfTvKc2BSjYSHPPNjTfuFD%2BJZVN6LhNcv7eWb7WNgGKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwho6LivYI%2Bdvx61ZYq3ANVTYKDDCzzqJJceshq%2FlHTardN3JPa1hlYZdN62vHHJ%2F8uYIifgz9PZFdbnWfzMesRPLdxcg3D5p2IeLajHM2Lie9rJgp3AeMhgyJMz8OqjRIugO45ONE4itE%2FI5PJ76fnt%2BToF7FH9UqYIbW9WD7k5apm07b3oZgEvKlu6fLQtQrJmf%2FvKqEHpJIUWCRwniMcQcKaVuQ69XaCWqa4hehJO4Y8GfA3H7fCIVOh2KxBBLV18LrPlElU1Yrp0J9JLMKF%2FgK3bwgTRkLFREn4vIaDJIF8X%2Br0MhMgUidZHrfoTPUM9uMQW5yGNKlzx5AJ4yQWDpFLReaULV0UMKutC8MOnjWzXISQiHuxaEf%2Flq2RCrYL2j07OYveUX2FEQSsnwuz17%2B%2FVG7ws9ya9YKzAtjQbi9GTXABO1asKfPQcDmoPP9iHrXUDaci%2BgQr73IXlZoxn8j%2FL86J2iHnzNlo22EkXfIcho5p1zib6VckF08hFrT9xL2Xysc%2BH9AjYLtfm5GN%2FqH17E5F9SGUKUvC23jB8mqVUpZG7i23gk8WKwE%2FNgBFX%2BJ5ylgllrM4eax8R1is2lods8%2BK6Xnn64Z9eKVyiwGdrXrZy%2FbsOd42hFvp465N9%2Fi67jj%2Bz4lVfzCerbHBBjqkAVFgysdYb79PrPZXQRJa4qmVwfHqb%2FtNuNmUCIaa%2BINvT2Nd2SR6LNLpGcmbQSTwJGG2CduK7sJtMX4ymshTs1fjQXaGQZIhVh8qFGKlqXfYO3M8OoN4TtOtlEXf%2Fb3yySjj4D8FwrJonCwhbrV581qlhsfRF1knmQvoPOEGd72nDI%2F7MFQpe09TXqw0hOv50xLbxpI8Fxp3BqBvOj%2BOlMqo9rNZ&X-Amz-Signature=9648908374e061338600728d57bbdc36fcb9d0cbb61f20bca69b89db20cf0d53&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
