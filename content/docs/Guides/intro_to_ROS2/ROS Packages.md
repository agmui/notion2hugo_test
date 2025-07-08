---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=5675733fff117db365bb00fe1ba6cc5b8046f1f9d8b36a7b354ce2b38c9e2c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=51684bcf8168b24f7cf16294148f14e3f5a5af14ef546bb6d129eac61ef300af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=2bd26954e23be4041cdd6dbcdbf70129224840a7d664cda3ce47c390ae929584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=f723d3adf45b089bc68337d7326c5a7b74657a3bc12c9f3f7db2d7ed2cc2ca12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=c8a215da20ffa135ac493a333fa3fff4458f8bbf19a97f25c38d2b5e188c2c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=228bf20032ee326cdd9a914392b2f7bc237edabf3a76d89ac19180a7db90f91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSFEEQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID97LvFy%2F8OuSZxQFGPIOthq5GNigApoUTPx23IWlFZ8AiAkUzJhuSqO7MlrcuUk6eX494Zp1qiiLhe3GuOJ6zjC5yqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNwUNuXb7Y1WGTxxtKtwD5hUIQJ3iIVyrw5ZZ7Ept7N%2B%2BgJLxRLbQcHjvmhaSkNiyBy4Tp%2BSTOVzXPslGsIUDjXlsWodLXXRi15MMlNK70gI%2FO4a4QX%2B0DhDln%2FXMmN5rEhWSoMLd5yxXWtGvfvlvW2uV%2BgCJ6pwsniiOgt6maX%2F5tLQc2lMoapM7%2B3ed2rJq0nw9302hUO%2FZHyiS6wvHM72ERN%2Brp7GbkCY5AV0CO14n%2BHSx4hEUBSsDOxCpRxdwL9DWjCALkEyqTsVSx771bEfnbQsfUqImZUxlDKfiP3MeA651Q4zmc17AcWYRkeholifIWjbUc9c4hlY3PFGaoWUZTF8HXwR3ZuBRvLiv2y4Gxln6q5HtNbNoPXmwF7XXpWZvu44Rkh%2FhUjfGGrpVD224bzwuIfV1gOyTnIK1nYimuSEzYu7XfYo2NY9HeaXhNTFOJy2TfpXJAFuh2nPxjnuQ%2FfYfuBJ0FWh%2B70Ru3J3O91W5dt5nBr0cMgC%2F66cKDkthRDP33K2f%2B9I78BAQL1Usocl0FNblwdIt98aefXqkM3%2BZ7HVfob58CbKlXkB9wsfQY1jbIBtPMzQDOdamIHWZb2cUbXoJGPG5%2BtUNMi8cralN%2Ff0TcrCn6fhKIThTaJoZoSYpC9XEouEwirS2wwY6pgGVD0nNKliEtlcTQIqccxUw6WhHlCuJ4xktYs%2BUYRsbc4bB4IunuxjmU4o6xYZ%2BkgGCD%2BPY%2Fk3Pd%2BQLgBKFiag0zmPfK7%2FlplPxXwyvM7t4JAPHFpYu8iy8txcD9CEMh5zTGQHZGkFRmDypcfi1rk2854Ct%2B5xVWKXQl%2F2aadeT2IlZtYRfdefcQfpXHyibA0KeeMeo5HSWbeh06AakiPSqvHwTNbgt&X-Amz-Signature=cf00e8f5f9d8812fa74c4f8d3e3b0b39e3cc66befca9529ab6f1ebf020dc87d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
