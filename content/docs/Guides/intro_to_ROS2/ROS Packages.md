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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=5a1dc7f663b38293e67e2a8d7f2510a235a0d0f424ac643ba349a36708c9e5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=d68ae968509194bf722c5db5d1142dcfb0ce3bf741441fa5cacfb6c5f87c4ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=92e0b8674661bcfbcb23a54c9e4cc22f6a5af4de93ece24937d168fca15fa2aa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=a5e036e78fc33ab84e7a566559083c7b0e3bf326c93e29eda6c50273f540cf80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=f46a53ac874a323641204ca9bb7508a0f1b25c8fa67536619536038a3c60973a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=8b82cad2ac3e466cb5f3fd3213c07e8f81b258d1612842429ace8d39732a816d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRERNGA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCD%2BuEN4jPeAzKaum%2Bn3wc0beMrOr52FDX1aRNJL68OLAIhANonyE9q5wdMXTjmXLFbLYS9IW1iOw8O0dKJ%2FXVVvVjTKv8DCFkQABoMNjM3NDIzMTgzODA1IgxZTg2GvSOe5%2B%2BC4Rsq3ANvBVbqj4pxhtG6fbZ%2F%2BufEu%2Bh8hUpi6bveIrTmKR1y9FRdXNoRdNyo8hyx6%2F2S9BC41hPPQHJeDrjV%2FMq5fCK6xTa4kuaZgJtF%2BEzZalBeE2RI8hFDKslyYF5uKAQDBVht9y0lQzs3rYgv3NY64AjVjl9pXJydgvr0NpxRh0%2BPlCrPzoMs4YEryzCypd9IJUZ1xy%2BMD6K56ijkXsAoeaVZHH9eZ8snsFR%2FsOE3FFs%2B1Hopwlhh5o2dxEQ4eiOrI08u4ze%2B4rffnkW04w%2BLKo3Ti4BhpuGNJqmOSeXIygP9qc7fDtdMxfeo%2FF5lR4k8vtSBALY3GmCt5vn6plG5KuSpStZvG2JKh35OZxkgDPnxfd1AwLplOGIbhGdlpOVoraQYE5tw%2Bnxc69exYtI3%2Fbs401SVQ7URaq3a0FRZaLar1u706bkYdKWZL5IIsEPHdTfHk%2BVpRj0cF4pWKCyzDW2Up2ZOF042UgDuil9%2BBpsG9VUCtqxbGVUVfiA22KbGt92mi61jzhHhoMG1631TlFmlplVpPNqdP2R2UMfvVrW0h9W1JN%2BBH4RlEZvW1WfTrvJr1FzRLp0CfygY3xe0hLuTl8EIm1Lv8t2DAn2ZtYGMJnFM147zv4HFiZFIazDJ1uS%2BBjqkAesvfNxUXZnprCHIGfkXOakquRmKgKHhO3T4gGyTcaLMlWtcYW0e2jpWrAjWuMpGXpoHgTXG%2BmeRa9j%2FOp%2BkLzrqDBTNvT57V84Q2LN9KqHnt%2F59w40ESg6%2BgQO8E%2Bn7gqB8NnJQ7lZxRDfsrJp3BTN%2FPfbcGgqQZ5ZDLUbczvOneYo%2F6oqJjgNnb49ZBqvVbkvu4HAzT0f3t%2FtiHQRXDL5maGvq&X-Amz-Signature=b01171619bfabc962ed628997f8b1b8bb6ee6e255fbae9c39657e3d36544e259&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
