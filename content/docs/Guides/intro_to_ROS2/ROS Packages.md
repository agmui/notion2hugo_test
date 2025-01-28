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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=9cfc6333b4a9fa34dbd19632124386bc775d82d7a39409cc954276ab0c38f8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=ac67b3afed6370e0a28a05fa3633efba2bf938f9b83b868713cc753fe1731dac&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=071f4527ac79a1d7b31cc87613925132c971b169d7464a20f28082ac392c74f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=4e20a62133d79f12afaf03c7e2627487798b81bcf4c1d55404ac25e89e235637&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=30b0153e2f90fcb504ed4db9159dd4ebabf187f60ba516eb54a26dd512fe0b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=8e883b6c043ffaabb8923ad08aab739954c117b8e498768fbac13e5a97daa277&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MJAKAI%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH%2Bw3EvQ7JBfpZYdCt65t1s3ctq5JGhbjCMTaPQ%2FtfcHAiEAibHQnHtheAeJA%2F9S5bOEuJEVv%2F%2B97lv%2FYftHaEu8VjUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEkkpxV6dlzpWzqctSrcAx%2FDCuPwvBeRVGMw%2FqLTxjAuRJpiQG%2FhJex4anhUBNe96hTB9Q45GvlH8N59JzJoMfNGv9AJ2XGF%2Bpaum5%2Fu5PQUU00Q10iQ%2BKdemuETyIFZ7jQDvrwfXGOkCR20RZgp3B3s%2F7sM6fiBMlL8%2BzioTibS0edT6B%2FbIY7sm9kAcOB8DEe%2BCFPC056NxfzvaOec1eYkNae7%2BWx9HO9ooLfCBh68sA%2B1hI8ERseU%2BNXa96TwDgaNScTDvY32nGjVXVmSqZCQJCADBzSGNiGsOD1xf%2Fwty%2F%2FjzpxizXaG93gjOOEbUIDFgLeIBdMOHzAJyjckXXEi7FOy85UvD8Vz%2BK9omtEewoQspzjkbg%2FNn8emXvKPp2v5lisr3xcBzDXnE1cFLybvQOnbZba222tlnXWowo9rm1z9RDiufZJl0FSqD%2BH1GlNZzaXmqR%2B2qff2qQiwEvhQju20dbiiOqG0bFOF6MrdiD4SuJP1OSwGpjSca3kCjo%2Fg7AbgdDhmvIDh7W1imusYbg0cicLMvuHO%2BGmhDMVPkzjmxwFlScOGUtyttFuzqDJkf6BM08mjQRNApdHqzeevEVNWWKLWs3H%2BtlLbajWM3wURwcLYtdV4NSNXpUJmJfZQMmjdFdNUu6X9MMqV5bwGOqUB0cibfxeQslfh4MHS5KUhQu6L4m8gqkCTyDQWKxy502pj9ya2ml2zDAzOLRtFz%2BvQ%2FUtKcSbfj6bbDXzOfXYbZXTRRwI0vszC31gq80T0uBu%2F3nLtsPtX%2FWUGNbnGavg%2FEVauHEMd9dRSY9SELEuzSPTXA3X0%2BLyX9HDF8BFj2UsymKXUaU39MMGVL6wTLht7%2FGNrOcR2A1WBNxzUINNyaOdrFKDW&X-Amz-Signature=d2e6e7e258f0a7e661a677d140c1fcf15599649d726415403a68cddfbc4a0443&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
