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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=edfec3fb24b3097d196d4cf8044731e04be2d6b511d2f697ccf8235b0bdd374c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=b3a48e915f221689641545c9baed4fc94a8525491ac625457c37e4b75e6a99a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=988d9028725bf328d590b0ac923918806169af0ea94b7294c905ada095bf654c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=d3c3708d56c064e707faae150f6a5f58e815be29e9ba02bc3da7fe2fa425a410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=2e39ebff97ca0ea8fbfff577e277061e9d5cfb81f1eda5469f2b37ca7bbf36e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=61b777f1ce571ad63ed21e26a33399b30b629779fc72442f9884e718dabf480a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3GAJZY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIDuM%2Bf52NGHXFr11vH9DIPTPorI9GqRciDR7%2B%2BvDE5ujAiAPG51%2B4m1EWizJafGNqdmyOw2qgq0s2S99PcsbQfmTkCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMeBS75EvXserGAWjDKtwD9JU0Awz2uEOp25yBncr02bzu4FBl82EUV6FNq1jg0U1MpQ0oX%2FNmriqcACDhg%2FM0YISvVGP0o3h%2BilGHwTYeh67UVHiT6OyrNo7AaqdX5D9u93OvTQt5c5AF37bvzZ64I28vFfKCDgXl3m1o8%2FlY5Yk74TIB85m362eYvoD%2FZuoZvSBvmvtSg0l4BNZ9nPHJpX5S3rXL7JN9e3jAWUfFCepDTyDuhRkSn0AyksjT9jac3BARXIcNwBpScWYbsDa%2BDqN%2F9YJf4a5tTkzVrH1%2BFAlXDvCWjzv9i7n5OO7c2XjbdMyHGhDo%2FjpsmFb0TS7oaB10s01SRDUPTxgkxUmGjND%2Fy5TVI8QBdn1nG6PjIp6AoEGRH3iHf8bBhgmLkL48iHaiQNtJZjxQP3XjOtgy2ICqC6KJRldUnr3H2i9f6PmQYaL3zBNeUjKh4PRCVmzyEmc3uv1pzp9dI9%2FXmLNmYyVF9sWb%2B%2FleacII%2FzjcHYhp9JVimccpVhJQIAPOYtxrxFnw7nIcgUKq%2BzFNTnIdIVJdHJhRWxtKEL3q9B%2BY%2FZeR%2BzJ8nQw%2FkGjwvaKrkhfN91b0vBTIJFuuYzK9MlDHmj5t5Ur4dqzNrf9YDniFp1kpwv7z6l3w6uskAGgwzr7kwwY6pgHcc9BNgcd146ejQ1tNXSHT3D1m%2FpiFlgDOhgTxFsiDi%2FMmkXhSWNiBLLvkX15sTxFwOf5hEdBp7xJEZnNHci4JL6zDyev8w6o%2Bbzcpb0AFiRvo%2BrYzpkIa1%2BxxZVsdR23aWRWITEEKJo3XBXZ%2BbK4HmAMV7kIEkTHTSZyzJ2ye5GDRftX4ZoEao7IJqy9V0yhCUvqPyYLabX3raB3hQCnHZkvA1J6j&X-Amz-Signature=96dc2a0e8d6e97dadd03dd5ff3877236a38f9657009a685c8fc1774a13297ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
