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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=d2d9b46ed3c3f53eaccc72344fbef57d230a9c235fadbbfde98ed279414824b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=ac0c8c2c1fe62a2c7915e15ab741be4f478909bed5a6bc01cf86514fe11a66ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=c55c2946232b03c5384e8d0d6cc052e680988a13a346ce724b75c7c821183d43&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=d1f0b38446d38c889375731272974a5df754dd27a0c576179761c006309d42db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=217cb0c7cc68592df3f1e103508d9afd6853e3d80be1afdefaaf6b51630e54d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=40bfe0fb90c3f93e246326054b049c2c88b0cc91b146a5f2afc8112063d80933&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FI2S5DX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7iI6AS9mllM2RcyXKBKER9eyRQLot%2BpwZo3naw%2FsUwQIhAL0W8lchJNSD9U%2FIBWBjWt58jIFOga3CotBbRgWs0bRnKv8DCGIQABoMNjM3NDIzMTgzODA1IgxvkI%2BD3b2HSPnaqYwq3ANgLcCqoI5r0Z8QO1RlSXGgSoBAw2a3FDubQh%2FYvfTPl3%2Fi6TmTiCj%2BTsuhL10Pdz7s%2Bynu5eO%2BrHN7DszJuPmnPuGHL1TPkZa3x%2BLnQxDsMvDN6pooJZ0IdKEV5c8xICVP43Lk0XrrJ4lkJReqePPFsMau8YBTyyJmnijhULN%2FpyO%2BF19ehwt7YoAUecpXN1SekdFIx1ocSZJSC7ej3hGMKG1Nxz9ROVoHxrntvh%2FmhMjqgAVdoggv0%2BkVwCsEmwmbbwLl1YEh1dnYaB0zHXi5Z5M3L%2Bu20I23KLUwv36slo3EZCOcWzWY7Tr7B9HZwznjC05dkEsIqhp%2FEH%2FbOiNzBH%2B%2B2hlkBv4S7l%2FrvjyBA2rIB8xMcZBMJv9Qs4%2BXnopV5SRX5ePFNyqdjRg5YNUhkG2UxuCAG63c4ywNTbmFoRh7flR0evCd38Hkt5dJ9VopWeXsmwoze0UataZoQ9%2F%2BEQZ3cPQ2pJ9hqM1XWQt%2BsMGUKH3rN%2FTdTVEfAsRpuK8lNTgJGLOBX7o3sS8vAsstXcXaM6OaJsw8sofMqYd6bC5t23HpuC%2FMILB4203tXQGNYRoZbVpMK28Wt8e6NHizwq0GP6LPcDwlvK7SHy%2Bk0MtegOEWlwkwjvbgczCO05O9BjqkAfO4sNU6ykL7zkyslR7hzSj7bsvGFbvsto8KxkYWinlcTCeOLPDvgz5e%2FLiRsSm59TxsE1q%2BvOMPzueO91eOLPLaCYySo3N%2BtVfE1DiJARRKWwr247nbxc%2B8d0Rf78utX517JB8kqlOav3Lm0iakOcrNlW%2BrFQrLz8acm3NADUFM2pgMAnr2PaT5XSSZGZBhKhPWzDd%2FFnApXdHxl8xcZSsGxKKk&X-Amz-Signature=41d2a536f57394ffb27d6c400617777df6abac6decfb1fd36b9b7cc01b24789c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
