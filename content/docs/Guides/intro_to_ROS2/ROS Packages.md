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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=18627d91a532bb668ce6e5ac9eebfe097363a30d11659e20f1880de3f787b8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=cdb4ddee176a00488af81484c52483d9016e09a9780cb9bed12f3e129bdf2e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=53a672610925e7513178d3e6aea33a348790d42fde0c84d9937a40a72bd7aeca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=c2ba7a47f4accf49f23679a56ced0c27d1bcce17a08ff8ad602b4054700fea7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=b6c50f7a651cd07aaeb932ae6f9a3a9849ffc95e0ed4d82d6aac0689a29b0d98&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=a9c508701468cdcca3ade91d4960cc367da0a7f55a5b7d7644402bc86769592a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMWHQSH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6XtSNvmC9htaZ8s%2FJs1dos7ixdcQIdzSkWi70WX8lbQIgXwHvtxfrDyXrArkmq6QpwL060IC%2BgZg1tE8q9FwsPugq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB%2FNhqVD9D8tZHZywircA5MOUEKM4z1aG7wR32Rmr0WHoGit%2Ba4RxAhxJmq5oRYtstam1Qekd6HK9AD8wx3y2iV8geIGgfs%2BauGqyGRd0d3KU6AJZg21NuZ%2F0%2Be%2Btq3Q770jycEjPOR88nZVeMpceSekEHbLGZunn7bnh%2FVwpyJihiYwM2is61J4UtemK5EnFyd7BiwT5boiMA%2BJwdu8Nfa3kbzE7ABAPEbKkIimipwZJFYsKc7QId0yEdWdiOL2fmWN2MPAGALbt9orOixqVjxEAesFoLRNWxIe%2B%2Fy%2FIP6oVe0HWraOdIlTfOkwoC8g8S5AodqVgMTF75f8FrqjCbgVjufIJ7cLWhaZxK4b65krI1mUWzYxnWJ4PBwH2H58oc200N3VxxF5iE5aXARAyiv7GGRarZw2ZNFmmkwk2CJ%2F0%2FFo%2BT%2BAN%2Bmb2PE25mP3Uhlt5edbFNGSPtt5udmnWqlcFeEUCFB2Fesv45803Kiee71wH6rVJgaPj99TnQ9GOC445bOdFAKS52nEWNIuV1pnq6RyZw%2Fo70VqG9upzQd2PfIOHC7jnbdR1bZLww5fQfkIvY6%2FrSEbU8APrCe77qQuLtelUAjBBZQ1qVz6j72Psh6Ju3OjvXKtuiiDzjnEimQi19%2BbMkga30cyMJC83r4GOqUByS9EEVrPWx9WL666aAZ06cPXtb98MiU%2BQKa0Lh9VyfoI1Pn9RSiZuRyfr326OiALFngxGXMOgKNwM1sE6s5yxh0NnMu6RwzZ2VI6tgSb8z6exQ8iuTDaYYhKlcRfs4Iw%2Bj91UxWsTR9lBZcWcZUwin1ehN9aJjLkoPUG3yICm7AkIUjyIRwSmckqCK%2FW4X%2B1onQtzmuvP3CkIl2JHGTOF7FbXg4V&X-Amz-Signature=487c188f499176ca1ad9241cd72c6253e5a464f3e1ba4fd934c1204c120aa4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
