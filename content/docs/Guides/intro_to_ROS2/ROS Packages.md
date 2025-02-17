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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=364685c4ff83938f31bf235113307fb3116041b711602e2c35f50bb48d3a7de3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=a739ec74635f3ef2d40de7a57db0989cfa4d6fe7635dad150f997d338e7d02a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=55d56cf5f52369fb16fef3fa4a29876493d8c71224be4efd9ec900c8534d9e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=6d3034e84b581392ae2b133d3a6810290343b50bc6e994cefab789646c2045a7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=0b52ca261e54fb9b7221c1407720d9a74f40c2d6f8ef7cbb34b0258e28e1435e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=8b6cb776096d1e6710218a22ce736a90a86ed5f094be616724dd831b3a4eaac4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN4BQQ3H%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCYg6ouTMFa%2BFwgeGtJDmcWEpxzz2h%2BPBnOK0yRbRq7VQIgOOYkxuROkqgk014xwfnygirFH%2FY46NgtGDXrbzmOHPYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDD2GQ62BPEP93orxjCrcAwqHAIzlUf7Mmli4pDtCv5IOH%2F9aI3EOBYvnqppVTk%2Bsa0t8%2FhTdXssh4kJOB2f301nCs93URcwxDbUkZI5DbJ6EXq2kxng0ZhEM0cJirEhxNBYfaXe0RsMsraX1sMMnirVf%2Bi13IKdkz8nNi7r2rTRF1lDgTR3MkSw92eIAJZPl0g7C6JiO4LUlUO1YG2MfCS4hSaZHHyumSY7rBDDeLnA9voYwtKby2ossYnFKzLTN8xuQGuHbVb2Fqe8CAOFh7Qi58ZmF%2BBtYelYvOslTUeU%2BLK1iaCHvH4ugZFV%2FP9tAU8%2B5zbocNlubtQXf1SP5aWJP%2BJyRrzG9Kv%2FBnE%2B1O5zYk9ZeQN%2F9M5WlmMepGOw5geHmLNP2%2FMVJHQHHAFaap2NlAc3sPjHCkUv9q56psjkTPbBAlyXZHHdUBKO%2FCUmcGVi9nxU8plYR6V7F8kwZByH2vgrxH2C7Hdvv7%2Bdg7aVJx2WUuv8SpFTfk2qo4MFw4Ymgmts33hYfH0Z4q51elEjtjVa9swEl6QOJBAJv1YbUjuPsOxIBtyf16Rsd%2FnJFJFbTqRI9dpLBsKvO7ZRmBHQYdDNuJPE3dngeldvqrSzDEWANGELKXMaGvDfgiYrc1bh%2FkTjnAZlQ4vsjMMmWzb0GOqUBcepG91SBJOF65Mwzl126Xd8KzTtufJYZ3jgJ%2FFa8DSUt2G1f8WTBGuzQPSFnFCBI%2BTq4LSDuJQE8XjTILDkM5zGJjoYuPR68mAoOt1W6CP%2BUeAxrvclxdVPYVgGZD%2BD5scoLe2ob5cFWE6A8ILXQG%2Bd7bWahdiNHd%2FgDATKnHwu7ho89zPbtpvx2BD4Cu3iWxIjC4F8EdOZNIcxHD4WOeFJ3FEfS&X-Amz-Signature=8f9d2a5601e0ddbf6abb3509f719806112d424f7ac9c4cf6377ee5e25b39188e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
