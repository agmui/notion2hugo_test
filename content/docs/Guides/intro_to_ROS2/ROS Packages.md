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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=c877da3d89f2138804fd166b386f1cad216027e684cd247926836f49adf0e1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=996915b9a60845dae6f808c1b8dc28daa05500cc914e96a04c3defcab6f96257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=4411847850eaae805181fb3a3b7b8d57e847c71dd73f59274fd3b42d22d2971d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=39898a0358c7cf70fcecfc0d25a3d3b6b87f1989a874a432902e9ce507384a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=ceed5561b8d726e560279c529ca9a02778fcb1d24a0a93f488e050a7f336ce31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=04d365ffe762be322f61efba873d75db3e730a1fa5894f64a22ad266665f995e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUEQZ43%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2onAP3sVAZa0D6bBuLs97C0cEGcObHHc1yQC%2BBh4t7wIhAOPJ0fh4rkCUhdXf6ViNdeLd4ciVfvgMevE1AbfypFfcKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwomRK857v%2FctnwQ9cq3APL8ayZYwa0YjFEjRdbPeRzvguTzCxJY8PmLrsXj36WjrnKs0NwLTdlfdnFF9x7GrdtooLtkBFDM%2FXoV%2BhfXKtVeRU9tebPML%2FfLgGvAAv0zyuqgXSPEHnoRx75mmr7OemNU6eNYQ1QHqqpjWGcbn3lEc3fRQZu9WuySz6PUpqwla9xmjZhLIMkH%2FHqyz0oCtXpAUuuifx%2BYQ1UfbAhwK0zvQkdyo1VFXp9tL32VVLHl74o0QvDK4VVMy8NmYYkDiVkhp1tVGXXhllBWu4sminU6OAzmkLYNpXA40RYi1eEvEVNyRM%2FwS1sQR0TEAN6dbPOCasbzjEQDmOH0wDsdhJwMkRnNBAg6LLuoLAv9qLb0HE%2FSeku5hRTVi1qkC10ZIv1ORWh1J05F4XLbbQGa2Kvv%2BsJtOsx4cwyqA6JFWVomLId9pTUy61UAeQXRajBgBFPA8xLSSWGLNe65tcFXUZPqlpzJy9rYiE3jRUfSvHlosRUAFj7dktfG%2B%2FCyfTSwCwzHxcK7nUoL6YV1bGPjklkMxrPCfB6UOK0PVDpiTsp7vjCxUQy1CVGyGJtPo74hwoUZ16HKYLTWTUwnLWuK3oXjlotIlH9xEkGqsQazf50WweqD8evPZJfShiXnjC%2Bt6XEBjqkAQyAx7xAi5l%2F%2BkX5JPMR3npvBpgVstd3A08noBrTLbxm%2FsYN1NiCXTSrcSJecM2aEcvdpuffUc6VLtglQsW2ZSiDMPEQQy1PmP5559G47WTORNiuvznjVZoCelx7%2B0CEUldkBV6QDR56C%2BBB7d8ATrmWJd81EFImOoXln%2BIJwNS%2BsKbMSDirTxtxHW6lZgLA601mIyyoONa7MM35gdbaIXdmsUbd&X-Amz-Signature=ad1411ddb4e06c725d93caa62ca94b8a9ba9a3ec57d5648f8d6155eebd3499a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
