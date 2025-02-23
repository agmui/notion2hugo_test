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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=bb3fa995c75c7ad37d4850d30c4dcab011ee2a4e23c0ef0a490ca618b2ffd4af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=1901fb14a411e992dd39363fea0081bed1269e1fa94be035bec90f0ebe2696f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=644e94182297d1012684adb45732fdec394100ec8a92ce1fb53440af08032c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=894ccd4379ca136d5221b8af25c97e8a7512799e136d37d29bcb5407b3f8ae99&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=4a13105cdf08a822906dbcfba56fdb6ea5ab2fe0937f61491ab7db6c173bb1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=094a423e2ad552ede910b804b5078613aee4a89c0114e7404fe4aa5aa9409e81&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDQV4E7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiqnlgvIMCNyoEK3Zw%2BGskTM6FgX%2FWiveX57bTiEm%2BSAIgBopkJ3nXV%2FhR%2FGMUyBVw4vgxaGgkLWsm32Iv67U%2Fs3wq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJ9egOnFUVVSMA0vPCrcAyZV6YXMTnN9z2YhyCiS%2BTSjX1jOc8b3I57VB%2BbEmxthSGL2ZRTZcp5YWJ8FZKcox3GW83V2N72Vbb2NhKO%2FQq0uE1G96P9XdRjBE6P8I%2BCROBgAitcQ9BOs6IrS%2FrSk9r6VXhXsf3CBoWGcKnzx5M44VMMmAwtr0dZCk1dcYpuYPvnv1v7jL96fWgLbaAkDsfxr8yH3HJ0OhhCWUtqKqu5RDzkwskQn8A9KF2Lv28qVeB3hJc6L30rv%2BJqIEwoN1cGQE9Vl2sodM%2B%2FT5xqyX17tkUq9a2d56dEYl1EsomxhEXAWIah9ncFDUTIvOFTYvXdjyQYr0B6qxs1rFatVk3LKtB0zs%2Bc9Hqos8ve6Haf8gCzEzQTh3ube8ah2TrRcxte0Zsi%2B0Sw5EvWlTu5mjsDlX49GgajpI32NMe2LKb6SAkASG2t8jAhu6dB7xXTGdBY3bVSCjdEXe6Rg8m0yRN%2BIMI1w21uSyXYzTc6NW6YP4HShzDmvC%2FpWEi6kh1QwkCNSHmTSYQaYhvXSDa8AKESqYxaHZZBtI0wlDH8W0l4iN9zz7fdslmSARCsJBH3GQENYeXgUJ9YXumkIojbc3sj%2BAtOutsBzda13U0rkiH8SPZF6EKaBWSBX3Ln6MK%2Fm670GOqUBjRkge0bnQFYGdGE1v1Meh%2BFJs3Ty7rbPeAjUkPcxcCQ3xNUjmuq33WhCeqvaJIkMbzIqMZON2ZAI6pxpEaCXUTfvPxlpT7YkpYJgUR%2BjvNbtiltzrxbetAsVJdKQ7RVwhUuzT3Qqr1nG7vH49vW0fbRdlP%2B7vAr%2FG0IqBdqJL8Xx8KTSqmSc%2FLwYuw960PEwL63MUpL%2Bdkauk3Az2VF9jJ8z9iNr&X-Amz-Signature=9050df02f3de1b58938df210e662069cc2206fa08396b98930dfc87cfe95ed5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
