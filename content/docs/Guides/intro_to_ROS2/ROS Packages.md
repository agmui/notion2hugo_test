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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=055ae5cc996ebe671ad94b0ae6e3c7fab424d22a1f1902acb0af54543c06bbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=b47afb45a0ef7574611770c32ef4f242a3d38ac8592d47e4b7cd91a13a86fe94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=d9b41f888f3004220dfabd6a7bb6dbd333137ab1aa5cb25981ea6ae832dd3905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=1c253ee829afe87fff1fadff414d4116b7dac04241d6f6f434648b3ba9534a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=860c0c422cff426ff67b01572d6b6253c09de31b082a6fb2847129ad76c4d66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=087e404dac4e8fa4b7eef91201c1c0aba4cd16577990c1ba309c2bc76cde1b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WKHMHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGfLEk6U3xJaiccKNDOGoR5atnEF%2FvXg18nCzz%2FDSIf7AiEA%2FunoPLNLIkHxDl%2FGom5mchNjxnzqNQcIhZEf2g8%2BwGYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP3kA3YpfVNDr2peVyrcAy6MXuzph33mTqApPzSL17sGinqHM5%2FHyYrmB0zhpp9n%2Fd738k%2BBPYrEjg7fXj3ARxVCCJpNNJu1IZ5dIY%2FeAkuUOk9r3ywhgVxyygolIItzK14iGKCPP4Lhp%2FPeA35VSFVPGKZexJy2fjOjt9tQCp4imm3caMdCh0WUz8DIUftrtOZK%2BOCnJqB6EfLSpGYEmlLG6uDKeOoU%2BW1zwU6DL6MsQTd6mIAwbvOPzf7itk7TvtgHTLIkDD7DNIUx0RaoUeHt8ISHrHpfc7LbBk82hd1UH1OdqNXy1wDWvq9grgkjfCN%2BGGsb2DkBZOYNJPM%2FECIaPwItt9KuAZEIncDvpbg6j%2Bzja7I%2FjgXlh0p6SciGuILoKgVGScD92M9risQd6AAq4F9Qn1brkp3jW3Q%2Fxst4jRz146YGBKkS0kJSiBpg368xmIprX0IWlNpg2acm%2FgiUu1lPa%2FibV%2FgjQC9RktCFU0J3zokftHqwSC1McWd7Rnt94jV5cSCHQ3ThStr9YC4a9cofOIwk%2FfffVbWraS4L53DVl0jljr9WOQjQa3prfkQdWtdTmH9GIk%2BrSzDYEW1M9f3Uf4QhrJ90SSGlMl4utNpKb8QU1mJPRccMuu7HmRYXEnwcyIfk6qUKMIqmo8MGOqUBeEgsZIhPsAEeVYUOfwtSaUml3%2Bq7Pa5n%2BCNsKwuEuO%2BeC5evK0cMMFcu6mRUGVJ9bTN7NPxEJaUOJyElzI7H%2BBMajZzeXBRfVsaJbACAMe6UBlKSgr39yOWDFyuBSE8wZoxuTSUhZcOUsnp9tIzpXmGiHMb7ZQGbbgXtr86m2lwPl88zPqmZUqq2L2VFwS6%2BzgwhcaO7F5bRBzILaX3piqqFp97B&X-Amz-Signature=635e78defc9da0467b7ab3c4ca290211f6d93b7a8066af616652062f2b4dbd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
