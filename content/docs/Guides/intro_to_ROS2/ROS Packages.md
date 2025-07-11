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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=f4635dc06a0a612f8f60b53aac6a6c86cd2cea454cc85bccf50d295f5a03ad89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=34c1ed3574afae0535cdd99a3b52174c480578906df3cfe0c8b0aaeb4fe85a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=75e00281616a13eabd712c2cb1ff37c93f5edbf35d2d8a2c21c557f9028b995e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=01348bc89b806f011bc3e7577e18e952954d1fec663e096879d99affa2e102dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=45e92c247b544dd4d65967659261bbd7fc43a01e3d436a263dc6bd9beb81361d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=48fe29754ca84d77dd0613e2ea752a0bebbfd6e7580df3e46508129f0c7e7c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQPG6AQ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCreQYF1xAyTUPYeiMNMsX5pS42%2BaY3iwnrStgk6wKNHgIhANujE2LUKkndKbmrXokl%2B5U2JimKKsLPRejKELUK%2BajBKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymvKDys%2FhzLBBDQmkq3APqud4TIzCuKj8S9RcYNvK0A7CJy%2BsyiVN8FdqgLirFGOE2EWSOamm0Dk0eeqtit%2FNWiu%2FTrJhBiGdPPNS6wEb5Z2OvybLHW0UXqrY9ucOgBC7%2FqLB5KUJgn0gWmBAhCYEXW9c%2FxzZ%2Bqt5D2b1h3Gvwr1FHcddwn3E7iE5dSupcsIQeYbZe%2BUyTb3mBEtgyPR8JX6Jq0igPJYV7MLXPS6EJGGsZSqDzNbvsEgL8aI%2ByMmXPo0glElXuNDDhX%2Bpze8fdl3Y%2FATEtJlgHeuh4xTkb0ssJ4PFqZ%2FvpEcNOFPb46jA5NhK35VF%2BKHi6BwfTW95LqLAMBydoP6OnpCY2FFJmO4AqM5EEZfbSj6zvua6UWoiM%2F8z1wIjRv9WunF4mgTQS5F7XmoiAF7vUghAJ3Jvmgj2Vyh6RgpTuQMyfs0scqtGIYHF7L9Blka4kUkh3l%2FTEat5WeI7cj4bHEMuUdvIwaUBhuGut6Z7UxbBm5R4mM2ZLiZZAiVREkr9HUHjCtGGr6Cknq%2FQLHhmK3rjkVT2pV%2BF5Ry1AD47euVMjlJtp%2FkPcoYD3iMOL6n2WkX%2Fie%2BMYK%2F54RqfdL62dAT02PloBu5IfjhBm%2BGV7JYUC%2BdXCmKIhSY%2BM8H0Z%2FqFYaDC0p8PDBjqkAflns1mobIqnztPtPRpfKT1TI%2BT2bfV13Kon3dN69zC9m9liYXrk4MB0uhJJ3x%2BWzBCoFTjMXhVYhCQSQKQ6LjZaDOsIX5SvONNedGpSUbc97pY%2B43aCmcVZXo0htSifT%2BAHLy%2FJNt%2FegFO4LLSqy%2FcNQSrpxLhq2PjaMS7jovvXSpeFDQXMUp5lYOii39CUqjFFd%2FYnIq3qUYQ5JdIQjHI9vofb&X-Amz-Signature=f1b90b1538c633dd7cf5269d44469e59499b060b50d1bcfe454c8a5a75208363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
