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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=15957272c90adba1ea12e44fb4d9ceba386755f8ce2ccd981f721ec40a775f73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=b6b1c5d665ea818d4d8dae0e458e5af743a32b4bfd7817c00d1a7e7f168e157e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=4b2e17aef5446cf5708ecb0eae3726874f181b8994a3c1591a0c8ebf75cc96a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=8ae519a5d9844fcd3f7fd3aa1f3cec9dfb620533b4f4e02ee9a434cf6720b63a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=732eb02e43c199d1498f231bb9cacf68553b502e25666b68f09d0339076b78d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=df10a9c835264095478b8a73ba39601989f7b8a7571f74b6d19f619d4a0b8ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6EW7VD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDhK2rwA6jS%2B%2FK3%2FAMes3zsZxPeG5NtkFsk49ZBNKokAIhAOVwswqSPmKzdncdtI1eCMinqhEx48DfxNAv3K%2BGkh6SKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaMvD857HFRT%2BbfYMq3APdmKvpi0amt8sNQCQUQZmx1Jc3zK3NYi6mEnas1qNnL%2B3uoKjYksF%2B42lcNwcOGusHHvUbIO7ZZszX2O5aM%2B6q3ohp%2BixhcqcGGTJDUSqyH5pZTJJVlX8Kg4RC8Da%2FPeFBt5SmdSg1Jb%2BrIUP%2BhV3XDOuXHPaRyK1Pg05HYdRrkZLj0dbFB0dHrDsUq3fGYeHgaeMz1TZ1jaFoQb6R3RTqU2%2BNHeN4%2Bs8YV73FOwGYpt%2BY4jXSlcnzCqyDSTNjXqlruzLkn%2BdKoZv2Rll33zQb%2FsjbLZNaDW82eYFUoj%2FHs6VHt6gzErYkz%2FgHMp4AJ8xL9Dy30n5LUKG50RPFHQ65NNLBJkz9y7lLktospw8%2BA8QYT%2BrOfflZCv23VxtNPZRC9IhM6h1DtLP%2BecIeXV4SJhnyqxvpPK%2BAvYEz7qPZ4%2FWWHuZpg5Fs7tSWkMS%2BbiACoyGRjwTI1hZOxGwtdH5rcyPxHWvlZCAoIb%2FC%2FR4BnJKL9ayiD1gAaI%2Bxg4rywI5AXxvxvY05f6hxy%2FTtkIh6fYpdz5d3YgN2Lw16jE2MrqtSCXMenyao6Y%2Fi93W5JQfFdJaiaxXX539YNPK2ya%2FLLaTZMvSjB4esPXAdR3rmcoy2KaxZdpcJQDuPJzC8h5%2FCBjqkAeXZbb4BKrElCzb%2BA%2Fvk9ZV4G4kalTRd4wtGrTsMK2hkDBDaCfv%2B%2BOfiy097DgHEZZ7hkCrzQBho%2F5YFvww4JB5liZJg%2BmCcHWtYW8sIPzU%2BKC6kKzsE2RNVln8DI3%2FjLKnLvqY9pT%2BsfAOaejHDGp1YKw89exfpuBFBPDKNHHC1dPHepb1gcjeDwpp0WfNSQupkSGh2UJNicT5KRW5oeb6o%2B3LX&X-Amz-Signature=8a1fa02032018892c2813123e00c5f3a003f74e524749ad0f6f62570bff44bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
