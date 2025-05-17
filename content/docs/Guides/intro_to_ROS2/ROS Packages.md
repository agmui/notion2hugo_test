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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=12a5e7bd912d96c4f2e0a484539021c00178e903e40078c8f5d5168c85bd15c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=c71153b42fe9e40a462c6ebc723ef850632559ddc4412ca35f48cc14ca29906b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=e9dfea46f543e0684a0fbdaf1eeba402036b0e43e262041d07202929ada2786a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=4915f7889e9b00807e98faee1b41b83c75c1f4e68fc47c5f952cee93eaef4cba&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=9b45c4f95bb4624532baf2c609b9dadec7d67bbd9d500fe157b06de037828ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=65a0e83434b5f70dfc79c46ae81c49be797399dbd8b1d40e89c1aad04fb26cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB6JFAU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiSdwgjojUZLTPoIpQtBn1%2B0j6zUzOYJep%2FRhY1cY8WQIhAPWKVQD1i%2FDRzDcaym3shK4l5g0%2B%2BQfBJ5SYFxEWyjHnKv8DCFgQABoMNjM3NDIzMTgzODA1IgyggpPbVtzMvOE4LREq3AOQF0CEH8%2FvJeQgPv78vZjoeZPhTYlHA8Gs6JA5kDDAZL%2BCWjqg4eBRsF1sTsyc4F3tUG46wcTskyjLaAbpipC2LqqEqMeYBZFMxy5J3keW%2F9OULmzOB6UxyMPdVFkdJkYVc%2B21oIp1c66vhar1zic%2Bf1XFpl3Td1vwJpI5093hP9qeuYdsKpIuDTCIVTT6cCZQUgCU5Jzv3ovGgy5tO77tmx5nj7EEg%2FrtdkEGmEfmNM5aAiCg4wqNdR0AEGA5rCS6%2B4xuo9QgDBPuVjbychR5oO7RwtuqEFQ7Zv1t5czJrOVXGbkpkMMl%2BTcXjqDRJWsIQ0ZPCiixs3JACh%2Fq8UgRAExqBPP1ckunbJWobRbW0HxlQIucUj9xoZTs0%2Bkd1CPhiLNqkhcHcKKBuVa0isDdvaTKkalwFswkgBtsB%2F5QkfCYMvlkMKojE%2BlBA4NaBLJKcSo6ZmdDGr%2FsehA%2F%2F3wX7nuf1lo9TJYatZpjOdAQp19rK6VlD3VPvCQsCWXM%2BKhL8ZhYQvJH5pli3C7EgzuxxqKEoBjkvL5BvUBP2COHuYZKkG89I0b%2FNHogty1LhWdLY0XefBxwdSaNTfQrxoBEHmuH8kpWO3YQQC5LjAdrKq6M0oXi7QFnhEq%2BdjDw4KDBBjqkAUhA9mXKftIQ%2BmL%2F1lI2Vs0ziAN4ZzTR9m43RBgZmRxwIfDMIsbFlL%2Fh221DZXB1vS%2FhRHQdl7%2BFimXuYIbsvSzFygSv0uMcf%2B%2FJrTg31beeVPM4slKn6HvMvBrt3y2i4m7%2FjpPAyAxWi5EAUB6jgYt7LQ9OwRsFQdhZxM3bB3Y8bXBBLSXIqt8qlrmKwhQZhqSxCcn%2Byu33c3m2m9ZjQgVo6r1t&X-Amz-Signature=ca8c80a54eb5ab1e382ea7193dde9be3b980a1f77634132a44a1ccecb2d6e1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
