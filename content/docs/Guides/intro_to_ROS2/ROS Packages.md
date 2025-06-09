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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=468338af015da2a86eb2efb78eb1abbb9bf5d043ffc7a674a9c97f290f65a22f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=141eee58bb209d86270348f08f0f88b15651f1c353284f72f8e43d16c4f6ab41&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=1e99746d322eb567cab50ea32105578796aa9b4fa2e9ea39fc636481e81416a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=4c49f71a0b5cf4312fea3b06cab69fd827514e02a5c826f4e332a46970562961&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=528e99b55c2e4a625f0a653ae8db5dbfd48bcc6881d4cf49437d19f08163cb78&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=43162d6cb013279100df8ef8262c6f7b6502b2361f0b61c4ba47d15489b26b47&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKZP3YP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtV13rNMou0XY09swzbq%2FlbCFZuujzFVvAmfYqqcKXKAIgUU%2FlT9RCu5TLkg5NuezLALnaDY95vZMVMkByew78z7cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBkAeHuAMYRZTp6MSrcA%2BUQ16EUtbJjLejC2EANA9D%2ByXZmhyJjGpwrq5T4dUwEK82coPLbBlnY8US2Z6AVMK3PfbgQFcAumbxXnr2s0XAuPPgyYMPlHD6OHX8xN33WRfVRPn08FMx%2BjdNugmQauun%2BbmCh4M6qivHEhBTgA5yhZsJxUxoZ8tmtdiVAaowBisXiLjef9mPf39sRZyYC6VV7MakcmjfRakrl%2FQniBCL4u7f%2FER3cvwJDpXxuCrx2QtRyww4SMbvlDGG96nQxOpggE784ToFTQq2MW7huhihpDqDRaUHiO3W06KjyCjVFB0KSdfOvArVN4VWhUM9HcqzJkugFkTESH9F0j0OJ0%2FFJ8M%2BncmbFSAqOheJV2khCcRBBgacAJ5%2FEFzfjW7rZxmWRzYvy7zEzy4UUwCZ9QCC4fdreGVY%2B8xR8Y913mXCA6S72ATCWQzChU77qG85dkNu5vHwUMazQVfHu5L5cfYsWPkyhn7z1XPeYGO90kI9YSqEr%2FF8VVxLfSrYcUFIGOyioueJzu3OBNdfPBnDgEoT0udMpNPSLdd1PxrfYwxSSSfxjxoWmBStorbNcSbd44ZsFS3evIl30xSrAo1l6QfMzurBhfN5edxyPAY2uJWU%2BqB2faAzWq9NjrW0aMIfLnMIGOqUBXtL4qQwSrsq4GKLi4Jd46G%2By%2Ff%2BfFT5aRjhhwbjCBcnsw2N%2FwdbXeisrqTANkX6swdOz4lf3jOyjcXeESdekP%2FKrpACL%2BSDEZgwHRRsFrr0smhZ%2Fl9MvCctctyA0YrXAEH9ope%2B%2BITsi7NbG6dGXs3saRIW2%2BmW07ytp6M8L8C%2BuxFdXPczxxmYUHYtuLUsuTaIaDlwOWtuRLQ%2BmKKlNJY%2FOhusI&X-Amz-Signature=870174060bbd7ceb2459ce35a6c2b261c9ebbfcbeb35a592030dce2bd1bd95ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
