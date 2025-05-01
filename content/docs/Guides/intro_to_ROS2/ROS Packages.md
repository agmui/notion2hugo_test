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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=a91f07fb1ddd3b15526711360f0099dcae82baa4a1de63896b900dbef688a474&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=94d1dbdfd02c764da85c052bfa0c09fa315cc5e958d373fc8f48c763865a7da1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=a340331cfa6a8b99185a817e6392d9ebe8228b65129e543ffe7e7df63612d890&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=60383a287aa51d72456290e755b5d4abfebffb0dba6266d39dc66c2368124395&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=27fe15426355ae681be35f9664349b79c23f4ab5d40c39706f59229bdb2604d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=1df9267ec59b5f9a1c8cf5a139dedcbf4cc1fb9bf075c85bd0e441cdbcab2121&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVJ7BKJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDkJCsvHqTwjyGC3Rzwk%2Bd%2BkzgwGkjjMBgeI%2BuVweszKQIgBnKyUedsaghcB1H%2FRpH1CtqOo7vPZxmOU61iGNuigv4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2EFOj7WxUATQwGICrcAwS2hQcmKQlTVGIExuvRJosUxA4vH3m5XB0XUXwKU1UDOJP6kOC0m6zzEusqdT5jXJOd9%2FJhQfWeV0%2BDSy9%2BYHXSzQvXKFQj%2BjtQ5yVZ1bLXI8CkJ3ynKDNdadEczjgo7J%2Fg2mdXVvDry%2BMpGSC6jkGqcCe%2BllPrll7oV6v7utr13WR4HDnNkDprqBihe9qgJoOL%2FgDwGnx5uf0FgUhp0GrdaqK8HOKKuD9rdk99U2d5WIUKXhdmVj8nZEsIhH7Wwbti0qKV1tiZuO16mFXiYmgjkUnLlEeqq3rQWWRCP5tYPVOkYiGa4yAb9kTbSEx2LenUZP5ckWTtN3N4B4JeFncLzdTyyILCvMysPX41b2737QYca97jzYIh7CWlffEJ1vNPxr0FRhIoIzWqfcnHTXnRY2PiCnzJErcd7mbuUn9X8mv6Dj%2FzhVL01yxNO3QdNK7JbIjm%2FDGQ19fBGwqS8etr4EwILF6Xj1%2FX2pdCUODWc3JFX81AcGXrRQY92qPp53GQwTyvXoo45y7GMYvKldpkoxXSJUgFzLIkWFwLhuodOWV3jDY%2F70vSC9%2FymRjFR14p5FXTzyBlSK6QrFM2BtwHYDCO1OhGxRVV%2F8xlZrhmZedMaUSno7gnhQHAMKyRz8AGOqUBjfTYF0sUEayT04v5URdLy5M6f7qdZhE9BIqnvv8fU90zEev1fiHZN9yQft4%2FYPYEaE8lysakp92f97REtxympiw2%2FjGTiOCvc69QPPM6FRg%2FeE4p2jbM0gbAuvtiRvdWsxxn4nNgVmFSIOzpaUau6od5Udy2a0Yy%2BI9SHg7rnXpFHkqITuKEFJ2y%2BRUVNEpyR2No7uyRewENMproz9cXkEwsEae0&X-Amz-Signature=bbbffee1b44d960a12fbd167c7e0f29ddbf08e468fa14c50b5968a74d4e1d8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
