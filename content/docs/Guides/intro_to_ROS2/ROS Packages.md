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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=acc4388674320d24704ec02f0a09e204f7f4f7c129e3ed204af3d2343c1a4feb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=ce48c3f77959088847c00561a924db291ad567bdaa4b23256993557c82630e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=9c1b2a9373189091b09b5885d50dda8f65115b1441e483ea802071801de4d87c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=170cde057035aad8e738d4bfefd3951f9e20403bc968b1ece7e697703ab32c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=5722d3f885aecfb82f632c8366553dab55fbf0e1d6d221273d2ac66da09dbb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=522ec2b9d4a5c32f9626b19ffb2fe64735cb4352dc4e1b1f002d393cce4537c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHHE7ZX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCFuGL6jH0ABK7Bnn%2F7DepAnHCzU6i8pcb%2BmrftV5tfXgIhAMk8CF0Bkgb%2F4JD7A6NbdN6bCV8b%2FbOiCSgeWydNHnydKv8DCGwQABoMNjM3NDIzMTgzODA1IgzybHK7e7eUuJZGzr8q3AM4T1b1JvVZYrMYn2FBagIc7qTTr3xICMRCI1aYMd8T09tFzJxfHR0kjbiBfXl02EzpNgf3Jk0aM5TmLeG6enHSupiqmMz7H%2FD9PeBWWaSFNuSSeNAdpPs%2B%2F1m5igvJwdPb9sTX9rQzdr8YWKKp%2BhkZWukTZ%2BfQUHQAiTGzdYGkA3u%2Fk0CU3Yz7hqFgsElXk3H8HW%2FnQMgvQ86QRJ0YUaUeyndypvXNdnc1EPBUwfIip7xd9az2JCgkeIAG6SB1nDAp5boVV3G51K1YX2D17GHsG%2Fp66GwLHrxZVEb09W5r7LBWJlPob0jx5m4Gfpwdx2NdV4eCav18mcMWqEW01OTCvNWdOIBmZzmt51WlMHwTE07PMnyB7ikmgIrUqMGIWmg9SAYZVBKHHd3qu2VqtNBP1wywMKXV74KQ5Dfkjh8JVeBcg%2BgN9h1BcgMuJYuExsZSZiYMsUJgF%2FBdaQfZ34rze8RxXT99B1revG%2Fq6%2BjPVv6Ac1a%2BFT6xGnahUl%2BZLYZhHJs%2FSUblrwe3sXe6A122hh1L7H8XPZv0Vk2y4BozdkIq2I%2FIZzynbGnYv%2FqWRB3j3vGmayhbKl39yJ5pnQPuxe8cKCkOB7ggizh4t8VEiVu877j9jT6GYOgHlTCXysq9BjqkAZh3iXvi01xoQPJhqg67iuS8pMZp3wd%2BveYW3Q9JPabjC%2B7x8bbDcmQGE%2BnDiAY%2FL0w%2Bbg1kw3KKfbLBhtcotvCMrxtD%2Bqq9NK5FGYlmkZ%2Fp1%2B2z430%2BJKY3LiYsTMy%2FPGL%2BcalWSgVvvv%2FXha7XaYhFD4UlzCD%2Bj8%2FcsEUFabHIudWWbFNOx4u5WxQqPJ4JVeP3baxfpmKcMzjNJfqJXcQON2zW&X-Amz-Signature=94fe13d78808e43cbbd8a4824d22716d99dd42cf973904241ef10ffb2c23c2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
