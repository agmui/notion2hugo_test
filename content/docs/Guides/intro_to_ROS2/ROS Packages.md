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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=df4a747f42903a144d53fbe3382be84f45a0f5f332a986fdb99bff50aa10ff2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=609910673490d909a86634fb4beaccc27f16853ceac632db729c4c70a92a8c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=5836d0855defb431d2013516946a5401c4716f6793180bb889178bd73276abd9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=838272b2ac9df61609be5eca870c6dee2597e4fdade98b187af0bf2295b55b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=7e89f892bcf478701b4474cb2fc749a1e371add4f84589793698276f12b4ec32&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=8c153e8317e53e5e456453cb70613661095fb6c4727fe2fe133e04e1e7509e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCX5DBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpY98IadYq4SKaPi4ixbddTninz40PPDaWi7%2Fu3IJ0sAIgNyceIpHNhnobU4Me2xnD0504DdtLRXUoGApYrKny78gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGAqkjWyvgPT9Lbf2CrcA9hV1ADr%2BnhaLWkZxVoE2BCwIBN6ikrAjS6GL%2BCej4dQxOhLacvFSIdDMHmfZSHXwCKPKl52xB4Ky4uI2u%2BtCeyUJTipGQSRLJhHgNJ0zyRBxQsSHV0vRMiqvVpnah6IEj3XE1St9q%2B0z8FZSGdIjXqJL0YE3kPIn%2FeSzcQkcF5HAgFdzQ5YkEtchihDOI1Tbjqmn5ClmYge4Zac2t0cQDB37s%2BZphmMncRAFxy5aQgNHi5plFnBar15Jf1yq3968a0fTY%2BcdgSDIvcmgg0smob9nnqkZmbzn%2BB1Uz93VHnSUkNlr%2FGGoYPhVhQUTvIZvGmQi81TPS%2Bu47cJk8NyBEh445hDD40hQFmVeYpTi58LMxDOAauEt7kyEoVw%2Ff7GnCODL9S%2FGQJRQldspWvYCfFHpdY%2B1U5Qeh000fhnYRLuzTS66Rj3u5NTQMUsd5BWQyW1YuoMJidfNQXjYyxMaKWQq5z4c%2Bz29Rxu791ZUTjt%2BIdKwBly%2Fyoq%2BR%2BlxJfWPg%2B2MURtoxaaI4ElcaTjA1AaMBZFeKFW6LAsVwFEpME2fzV058VW64WU3jNIrEtdLxPx6t2Oq0%2Bo2247azL79j7Sc2bhvLIBPU%2Bs0GBGdWasurOxM%2BRF%2F%2Fhn3v6wMMP%2FyL8GOqUBbdIs2XsAsySluzl2Cn6%2B6t%2FFlBXpcoxnGJsUoU6xcqrF6%2FkR8MblD1O3KsRGczesNj%2BrJGi42ijx9mysxB0yXlXxinoh2YQzMVbvehAR8ETP%2FzSHMRkIF9xzQtR9xT9MGrfmah8PEN%2FeEzd0ejvVIgXE410zhjPoEYyu1oraavuo4n%2FtdenzrnF9moNFqM2bxhMgjSJ58f94QFBn%2FLaoPWdwG463&X-Amz-Signature=7cb52617b42436863200395104faa19b8beb17f2be7b84f68352faa363f6c8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
