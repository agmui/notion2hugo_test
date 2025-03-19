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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=2260f7764e56811566bdcc4580c35e2687af768c3f502e0d1404e0642fb75c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=e7496417e9e89a35d1802a4ab12fddcada4a938d33031efc5576fd20558f58f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=51cd285ae97e7d79fd4db2c3810c0f69867bdce0fc5527f9884e5fd2b109db7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=faee778bd0e5dc6bd93fe565f2367aa2756e32bba03cf01df96eadcc06e92e78&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=c9ac903196aa6370af93af1eb965d8cf70de59a676436792e679214e868c4120&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=2a230c5de44128bacf2ea68cc16cb38d01e1514c00969248b8a7a5c877051848&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDPR44Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD1QwWTUtA0NbDLm6ov5MEErjg3O5e5g7ZxMpPb9XSGVwIgUyHcT4du%2FXCZd5ucWc%2F5Llp9MY4D3sOu2fFEennWbU8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBYjvGnxUxxzsOxSJSrcA31RXVOqr%2FuuAMPs%2B4LHRmAsDD%2BP%2Fd0uvsyW2Nku3VhcomvA%2BE%2BYkvWS%2FMuiC8sYZZY49Fs9qE%2FSECm0zcZJxThQWCaHilx9Jh8L%2BnGKEvvhkFn22vg45MpJTLmHlos3el70SnjKrkuYoNd3o7eGfw7FKdFMj00YWlJNTJo47eBg3lj88FQilOSUVt3cyFWba0iY5xPHov4DAgAve5Pj1oPhlmiJgU4tlWZJqhJwFOJpYX2PhRQb3jPnzLuziP%2BeBXtJ9giwRniEYgGT79ubu9pnlT3OWOC4J2lpKuNNW3Bec6BtoJ0JjD2PNFOx3av6ZLWqjRD3ag8opZHpt6DMzeQn3QjfrYWz1A93FTeiB5tXfzYgQVKtSGUJ2O0yEsM8G%2F92ssB7dvdwk2%2F0eqecYriqAlXadklA0hQBZ8cEtc%2BybJEQTrffm71ppDgy4nR5Eo8oMDF2KXQVEsbEl3udVgMLPoGJiSNsaG1F08KUcLIfwjbQHToELIKq7ka8pMM0Cu5iyE2awqnW0wKUcuhq8PCe8WOSAvvbYB2hMv7fPuXPrcfCu6kgulV%2FHY11BkQGSDWmWz3b3nXlbSFCyYFHx4xaUuTZRd%2FpzukWXqlSTjsq5g4MWdTrqt2ZXnQJMN3i6b4GOqUBems6iFKY5FTPxudvOMasIVnq74mvJp1To6iPKmSK7%2BabH3vxbIYHc5XOAk6K3uEKDabvJHYWVtBW44YF%2BO94ykBPPpYmC3J61GJRO3pPXh0XeWCpSt8tAfYLZJ0q5jlDt7ox%2BvhNm%2Fd%2B8oX%2FjRN945PaySLsPCDJUNQ2i68Y%2FVh6OJN%2F0C3NPPIq5p0X7lBDeJW3mVZ7qrLstiLL9MwEycKryrSr&X-Amz-Signature=276384b7753e20778a3e1423c593b491698ba9ae00605962e7e2c6e01d488935&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
