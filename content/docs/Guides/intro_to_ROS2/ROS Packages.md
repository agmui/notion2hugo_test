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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=a6530989a598fd317dc98a50f747138616dc63e9f2645bfdf04c496d72efbfaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=8eb7efeb9df45c751ffa37c742bde01e797575baf560c49da2735a5e3d5be688&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=1b70575027243935c4f5d6ee9b92d47de2e7a1718f3146921c12f8754c033917&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=56e361887be6ee363610423866fde0d7ac062186579c1d817bab777ab067577e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=f82ed9575b91e23f760b6f79379d1d9f41915e5adda23350c44a1044e429562f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=a6dc2b435ed428faa59405b0d6449983802dd3864250724bac396d3c3fb9f6d2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNA7EL7%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEGEvTpzjKunTKo9GMlgmBSlXUATK2Qz2t7Je9uIJRU6AiBL%2BMoae6BjLdar4rw0x1iqiiwQGJGLaE2Ta3HzHX19piqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BwZvLVDeSUgIuoFjKtwDpzwm%2BOnNxqNSIM3yfhU6aVTXXQkPdljzD057Ctt9n5Ja23ayTJcW3DkVT2xtygENy2NAmM%2BoLdifaBoIxKUICGkLa7oLgLAXqsWcU2piXoWUFSFtytaHrinfCYLC%2BoqEez9RBg7YfeFYqBR2HJynXosCDi%2Bi2T9grFUf%2BEKI2RdqtILklAewHJLKneRLJE%2B%2BG1q4Ivj1k%2BxcpZ8s%2FF5b13N%2BIVE2Dcx%2Fwgnq7v6r8m5QTORV%2FuI%2B3X4bO9zh271B0WaxLUHyLd08mnLyTdUpsqhTkMV7qHKFbWA%2BZ609YEtshWLpurObFnkG2QfTr9OTW4mdggQb8Hir2azeYchuBXdD8gwC6KKnv4qMIJ9r5UnTChAIQGgcUvwaXzScUjF8SEsEcgFwBQ7Qr1taYG1%2BAAq0dpw7eeTGN2fFzurD0FwtjhZfiU7KaFm6BuWogEQu42ZnL2zpGm5M0zh%2FEmRiqcNqx4nMAr37YP8JfrOylCPSMN4IYbBNMj7QIUDKFSlHMHYPfADw3w0MwVDmKDlGfbvtAKKe6LtuTlYwho%2FC9DngwE4ahwowmhvLn60kXDdbBv8BU02ew8%2BkUwHvKTstxFYaV7KNyqHfwSzaBs3gYHBzyfIo%2BWrJ0AkjCBgwwuP9vgY6pgHMAuUY9M68y1gn9xZUhb0OyNNFvijz6Hq%2Bm0Q21aWpLCFc9C%2BnEsMi00cv9C4PM918l8LwUkrUjiKNXaZLkSDqqZDlPnlw0kz9B7%2BRcEMfNRWBFPDB%2Fr58jZ7SKv4B%2B7uZ5i8Pr1zQdQV6aWrdf23%2FHqxylEXwbrfC8JGo2hkytGmI5fAk6vOMN8QFJHrjDzM8Vg148L%2F1gERkPC2TlUjr8YA0rHj7&X-Amz-Signature=120f5aee642bc82589ee5180046cca1c51d0acedc8fb9235132b5d424533ec73&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
