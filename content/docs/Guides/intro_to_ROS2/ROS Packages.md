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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=47f32d204f09517a85c9e70476f87b4635d1d6c92b58461de4e6ea83401789b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=9f2af4af89a1ad27c132d4dc0e2dd2a75f428b8c9461a73f18349481f8d23e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=e4b8e7a953ceba8fcb6a7ce856c7d1ad2097ee046eca638ced8b6f8dc086123d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=d019705ccc127b0040d40ac9096c2902fd63761caa247a3923d671d6e567fc64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=0070b63436c3d09bd4da7ceb6c6b126a5672d153ad398613266c27c24e43e519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=d92725dac2afd029efab6d273bf8b984d333bdbe61d8b2634502bb37594886a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VPFFRQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWGc45w02BKdKhGFZqdiFQqs8MPHVo6LOjzrgdd1nkLAiAV8N3sGEw8%2FVX5cRB04x%2FhlK5o5DSgM74WqLBn5TIXLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMph%2BmVagERXT2smdtKtwD3RgUmBN6g%2Bb4nn3gM1O6OGp%2F%2BR1CnanIxZXllgJL6jk6lukJukCdTiLqw8jr%2FKY6BKpu2fJ0jEsRlNNjik2paBTnTSgBlDGFCf6jZWOxa9RdICpdQv3xiyr5GRqjXheBNlC%2FEVkB7m26%2BcGVYKsxebnQDWKq0ZiIasVdtCk4dQVLjgF4tdzV6fFF0Bl64iTS%2FBbzH6k5UsgJse0XLR3sEpjtOS0jwGrTJbRt%2BDJcpeo9S%2FSXpalbBKxPmp4l9P8Rk3i%2BVlZoYAx3hCDN3%2Fze4sBPO0EVV0Rd%2Bn1arSrshLCKWNfICW98Hjz%2BXfveDIXZe5Xa7fd9pnngyeauUn6yRznDjJrdVE0NlqWJyEirmrYn0Z%2FXF5TshkywybhMUQZ3k%2FJ%2FLi%2FMhQ4KFyaJ2h1mB7ToxSwl5eWjsDD4a%2FgtEQtYLMb5DuOTcdQXRDtPvuzAs0LTozDJ4CZlMGOdrj5szo%2BVBB8RN064tzlAuvjCJBPtdVySai1Hj4mp2xZ0m5xjIQdp6jqi2Nf2cy9ceUOdzgtkSC5e21U%2FVd21vcGvueOMkkZweCDXWDPvt7wx6gE7Rml%2F7JOCnl7KQigcwyIgwQEqey%2FgV8khybE4ga9eh%2F6EL9WTrpHBcPC%2F3%2Bwwls6JwwY6pgFY0u0EIIK%2BWDnlisfDPlnlbY2Q6UN8Px8Wal2NqeLYwvQ6geEdXVReJ5y%2BfGejaFbwDH4HL4UCYPjgS8Fy6HFsigbKeSHSXOWn%2B48IPF%2BzVhYzCg%2BRWx%2B%2FvnhF%2BQQXrf8KOo%2F%2FL3pYw6pjmKt8okUkORA%2FR1zoEdqtFiUCjbCRySifGFXQ6iWDdybiKPNlPmo9Gj%2FZ0hsPAqO4wnzpzRZjnAfD37%2BA&X-Amz-Signature=ab6eb488384a94e0ddc49848bbe65781d29434f2eac509c313e3240a677c8bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
