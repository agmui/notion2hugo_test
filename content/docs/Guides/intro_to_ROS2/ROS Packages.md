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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=fd3300f76328cc6bf5d64394ac166fae52fb91bfec214dfffbe8215aea1acedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=215ed3f9980191deef08ffd83746e1c186f919789816b9c19fc043fbcb96456b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=b4b768f36acfc0e031ad3a7fcfbcf2aa02f74f6a259bbb3379194c5b4dafe8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=3633038236432675746985f739305e465a84582cdaf91d30a649f2089dbf577b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=81ea523e6ea3e7cc9b2894785329bb37b52bd6df3a1ec11b8ca585f9c43d8b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=5dbb7b9d52dccda0098d7ab29d60bdc902b7daa0d71f901824e5e57da5451bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PYGV75A%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCtpXQe7mLi7IVZdeDdqKj1boL7tg%2Bt9Xk0nO46ktoE9wIhALx8FyBGNL82QuvautveJBVmjePdkJbj3Dzyyox%2BwHgiKv8DCFYQABoMNjM3NDIzMTgzODA1Igx7%2BjhcQbWsHZQ9OOwq3AMAP3ntW59nQWaV0cJYELtMcNKmgGHUzRCq%2FDYMwDtWgCOuQQ2ViHKLXsxMn5%2FspEQkyVk%2Fd5j2Up3hPg6w0b7cXfjAM3Gg5%2F%2Bl%2BbEG%2F4yNKpErGxjScgvMBlCfjZztOgFUQuuL0p%2BQXTMxKF0wJb%2FzGOcVOTekxNIEL8Qm3t05%2BqMbQsQlhdjR7%2FedGcbcYxzpRt3PdVBj%2Bd6p6HzWYElJFFiQ9k0ccZX%2FZFlCN8q3vajvzzcJndVZgHwi1FScvDQBWfc5oBjVG21lUqSAe%2B%2BggEHqUQGUQiRYF4ucjzASGG%2F3voOrU3fv%2Bj0EOOLtzDnSaCzLudeZP6bUgGjXU257RvO507igv20ByETdasmBgyvHuUfy0tcNaAGCEoE6P4l5xgYDAqXQvN%2B3RKw6nTd%2B5qLYhNeNzMULyC0WvM%2FmjP%2BghiZ1L7rn%2B4wBjAkzp%2Fhp9QwiXvMvnAGO7rAs8Z4LkzzXwqAFDnzqBJYm8NXKb8Mi1nqEnb%2FWMFv%2B%2F7q8qIILRP3e5HIMRpg0DiEeuKLbiZCdl8VlWOgcl3hCgyvCtqcjeYUe%2BwXP5Ckros6gNarPzhJT7vgCCKa%2BJD9BdYi6FuqA2YbU0KdjgO9KRulZKtmRZt3rtUWgAuun%2BTCa3dzDBjqkAWtt7qT0zlIlVu2V0qYJvDpM9wjwEjX1FQsjyLnD4MpPUXVB2pMmfN9zh7xlLboZT4AMHwG3Q7yB%2FF1pnwe5fKZxealgurgiVlft01QwBeHet17A8usB09S7Hm5bR7RnNFZGT1at3hcZFVC12hSigemttbBKX1JAb77mtRIszoApeEJvVn0YPVlUWyfVzXi%2FpHr%2BXfXIE9pbao4NMM1AP5oMApdX&X-Amz-Signature=de2a40d544023fe352560997da91317e6323f28fd9b075d19e72816ed4e9c4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
