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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=5e8f55063210e6105b9dfd339c02cd883df0752b31b3c98b26e383004e3ccc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=d8912071b83f7052c5371b2f502e2919f5940711a68d5b3ed2e99d5ef39b4d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=da6a44ef531b4520facf2f36d9f8f1d0a592a57486bd2822d2f307a5c7db8019&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=f12a950700a527f4787a909f7c7300d46fbdb5beeeb77855e36fba7801cace1a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=9359f63c4080d4ca13c49077e2904fb09f12a9eca9807a3887980da54d870207&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=c124bba082ef9e19a443323ba9a5541a9ffe18004d706e745a2ffbd0636db90c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYINDJM3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIHeejcRtcyiYLFMn7SlACTj0Ksu2wWdbZ2ApF3pLZKgMAiEArdE3ncsTHnhePV3zLpFDZu91frrTHmVUqWtQ4sKCujkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk8V4WTJf%2BTvF%2FbLircA45KJ2ppq1aHG4lmLNkzg3x2cYGagQAWMRwOg%2F1FFuEU%2FEuYbP%2BbBFa8sNNJNlTIP9kxNt7uvEaMmozMFT9RVm8qYqJAnMlDkc6Nl43ZnBEzT1XkAKLru2%2By2losbfY5Qb%2FQMR4ASSDiJJXx%2FeKOIrb1vsdHaz%2BQe%2BIWpuAIq%2FVkN3y5KwNpg8xnEZ0skbDdTaZdP%2FkaLM1ncK2UWJx0No9jQ%2FNwuf3K8GKqrfIwCJ3LFZRj1qiCxotNPs9thegnviVaE1tx1Vk%2BSsk%2BeM9BkfoZ5dybGkDFFLk2jd4m26vXqwZ78ci7Fd8WKtMs9nggY6bpnPY%2BL429HaaTzx6kO5A%2B%2Fj9%2ByEBV%2FgUVKQg3tQ%2FxjkOQnqyvBKQCocx4FYOkYCr2BE%2BT4Gdsis6ui17y1Azm4PQa%2Ff%2BejaRl9izbw%2FZTWobrO5PGxv2pK1UiM%2F2Q2bZ4E%2F4b9Ntx0ZHENX43S1SzvvDLuiT8mBEd6027i%2FJHdxpeQv5DRtRyrQfZxKrqyLkpMasbIWhEEg5fOSZXfY2D10dZmHy9ZfVZ4ueUqOZmsrQdTLwRTxGl4zDcZIwgfNQ%2Fj7xFWZtLAcXxk%2Bz5xQYG%2FZ2UXLi32T38SDzH%2F9xew2xtV%2Bnbkw9NbxsbMIelrb8GOqUBbdL4fTg9b8%2FYCnLZ26300J6mc902300gYnSiXl%2FfnoZVtOyPlNMvKyE9%2BbQcxZU8hcZvkPBInkGqM07VBj65Q6KfwhvxVXe0%2BJuNfPzBjfm%2B3e00NvPDlxGmQlcw9592B4kX%2BGKvZCC%2FJL%2BZdtssSjuwn7yubk4X1av9I4Klg9mvmKugT78P5kuwWl8tVLC2Yqcu6DF7H4%2FCF4f%2FUjdVWk%2BSTauP&X-Amz-Signature=9fe33d88061e42e9efbd6bc36ac7fa07efa25154e75409e5e69022d43d5ffcec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
