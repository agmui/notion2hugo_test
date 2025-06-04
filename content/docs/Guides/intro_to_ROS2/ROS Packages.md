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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=9674aa30395f424e4f8adfc5a0bc378308fdf81424a9797a7d2296640debe6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=9f2ed7682d80ee37395bbd6c8ac3e1abcec743f1f3acde88ec4536709462da5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=51c06666e6dc6a34e108e8d809ea137efeda3a3d10b80a7a046722dbc528bc36&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=40fff5f74c347ff8571261122bae8ae0a1b52bf83fdf361b7e0f1a47d2543ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=1ad3ebde33b9d6041459de78cad4c3ffbc0113be2dfe51bfd63f83a372cd0152&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=f6e7df6011de8b9cbc5cc1cabc659a6f1b8a1bf21ed2ba3217f5ffedf0390bee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFQZN76%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCXVAEgSi4O84lcu95ui3Y8BkceHzBtjCSx1%2BxQna%2BA7QIhAJT%2FB6A3fZwoy5fwuDeUx5yoBnyZly9GL2leHJ9Vjz0YKv8DCC4QABoMNjM3NDIzMTgzODA1Igw5ddHgZbxNQxvGTBYq3APcy%2BzTzfZzkuyra41Pn4D090gGyD8XfH2M539TGe3FJ1HoivgaxvL%2BkFv1M%2B%2FjpMk57AkN87YmCh5Jg44nUBcaRW9yfitxvLYbl5QdhWESVFE5mLnKY9HYX7yorhV8yBRpqceltRUhhRiky4iUZL9dq4sZJKfizYkr6YcnndUySEzdEg6kC6Ox4mDregk08x8%2FKWEvv8G7bnwAfu7gPjtje5q%2Fhh0Lpqu72eZYCoXzTxvfERpbd0%2B%2FJKEdKAZL7LV8d9CumBioi%2FXnq%2BpqqVzCAQRRmTF8c0%2FlclFS1ynaGNajeH4283rO2Ze9ov905%2Fx7NDEuIF8xObqk2vcqmP3iMR%2FQcKzoZnZYLKGKC7Iwx%2FleYzkonZmnh84IOKWn4stWBUxXakp2Xz3d4URErXW6aWi6t5bRWfaIbWc7b7l1Ogs%2F%2B0WhKCqemLr%2FfKTRpD%2FokzFI1GCVNY9nlmhu1i3wNkhHOdzCstFm49%2BLtem42g3ZjfnlwZdamgU%2FyyfhtFNZ5pYn2AVvY3QRWVBHtEC%2FXfXAj0y0%2BcsuTpKAkRE6PuF9eUcjzJuHmYlCJDbvORL75yMoopAChTYdKgi5Z9HjKRL%2B9yLR7YQK0StWrFzH3%2B1KdXvSZGkApp2TeTDXgIHCBjqkAZPzLjvPy3sNFn6MMNj0tDpn9UUWD4gJ57A%2FfuP3rjxKjD0JVecGNC1ur5Vn07mkB2n9OgIVzUhcZJ3f0AxX4ThJeCKUMII9X9M%2BRTu5UZxda8nM1aay0BWHqWB7%2FbDvqbZPoR3eTl4T4c6TH5USxS%2BeLqeca5z42yjTdZvTf%2Btjuz9uv%2B%2FUKHUYLL5fXb9cn%2BX9ZjPPIFtVKsaVKgSp69QwWVDt&X-Amz-Signature=df1cb1b2053193a8337dfcfc57cb645253590c41172c890fbdc003391e5932a7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
