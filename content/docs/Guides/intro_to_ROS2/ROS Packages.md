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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=e6ae1b181758ade027adac96ad6391a174b57f7feb2a8dc4a2167b1f09cbbb12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=ce5e8c4e1634b83ab82fb70e6fee7c33fc11746cb17ea0adaa28a76e191a261d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=f7c9674ac9729ead015952a2a777efff1904e00977267ac2eb8e669af0a10a28&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=ba125e0e9d7e045ae9ed37714130787a676eac1bfe324bfe7c55c536f1e47486&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=9ff2b934f3832bde9ca2e824e5f69e330726c0c280c90dde1ba11e34188a3477&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=29674c2439891e4aa6b63a976cfc6e0de911d9a2f2218aa6a9014d78cf3cb21e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K66W2GF%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCcsUgfue%2B90fO0eWg%2FZWqEmnVXyRuIPnHg1hVsKkEKmwIgRg5jdjwThBwEiQQUx1xB19b1jxsoOTWb3bs%2BoaICgVcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRvR9pz7PS5OOhUpSrcA%2BnoCau0ymMFsH1aKtIgWuh143%2Bv1iczdYw%2F0ThfzuCbIokmQFMr7rXsxbkXBuJbeQXDuG4ErEYgOaqlqaVrGoVZkBKgpAEcqSv8%2B%2FyYe1JXLy7fveOqtND1%2Bh3tcj5O0ZG5Sy8dFDbnKZlJjI0ayAETmlYTwc%2ByC0LeiKBE7iWolB6G4UB7MNiCerO2C9bWDDwzXvd8TbjpshvT8wepDVQz3reLbNLeRS%2Bk7L15lXQlPws55yh4NpGOmiIt%2BeIiE0dQbfJURRlTC0Sw8xiIMbZk8p0ZdAS1MR6LiOJMhBztOd9nHV83p3e4fHnqvfV0PFo5bUm6LDL%2F%2BGKmpis5BAa9dxHw1ArMOsFtESQL2XbPq%2FxXOAKxFK1pxJbACSsEbxR%2FE2PL2dw3OiXA6yjpZu%2BFlBjBhwuVOTqQQrjBlCBfu8A7yS7AikzL%2FDYYnBLo0m8YA1k9YaGpDmJfhNuVUYhpEupCm5V0%2BnLq8Ul8QrzE4bJji75WziMdidAdNar7ucQSjAyioBsHz%2F2vojsL7IH2viZw6oP1LG7vFuphsFYPc72q0pwireCf9gnvjbeP5WRuszFXeAn4418RbVEWO3rlhqumxEcNiZhFDyilUC33fLglaPyLBuPXmbjCMIX%2FvcEGOqUBgeJeDKYON0v6IRffzmjBy%2BqPoTogHwSuguCWOQJWF7dTsZELsu1ZG7KqnAvp7yKLVzxvAci2TWWTwc6oxiTyriMGBdvmlICcJ63QRdEMgsR0EhOS%2ByOb3F2dERzIL4mOfZKtXxx9jdykTlEe8B8GCRvp01zGb%2FJiySZ14Uic5%2BvZD%2Fr37ksFBguD%2BQ1aroN3NFyMnv%2FmJssq3NXlG2Er6QhQg1b%2F&X-Amz-Signature=4468a675b7e9e9f3bfc7b145c476b64aaea1d19418bd777a5ea8c01d4621c8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
