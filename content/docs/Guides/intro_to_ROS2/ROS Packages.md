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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=0b54f27390e259c79de9cdd1aca864953a4634a86061b03f2b6b41a0ec96c451&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=84e6867796e6f472836c4f5b7d3e26d7227c4096e86497b7d72c5ce05c8efa29&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=75fd9c028542ad9d12092f9c4828a8ce2179637ca2f87d4b95bde9d67281b196&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=46197a58f0b757126a95fbf671f1ac177ee2b62a99e37c161c262b798fe8287d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=cc64d7c5ec23b0ee5d58a304d3591b99642ad888e01a68e948f3fc65cb934205&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=535ebfaede9007964a852967a5109c1e6137042fd307a64688914eb6e71a1c92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEE76PPQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDE77HuLlfpNushvtOxtoZRu3ZhhR%2FJngUYpz%2B4DTQXQAIhAO7XypWBQqV0aD9vWIoYgZAgMmTag9xQAtRMNvvpuEC1Kv8DCEUQABoMNjM3NDIzMTgzODA1IgyK1F3Lj7Uun3qPBV0q3AMujUWP1hZq7sY1ZCmJpKbSfZJonwBKkHTdtGs%2Bq%2BtA58xcNr03R95wEa9Eaax76NbMNPM6IovDCeNCvpho6WGLft3BGa4YloGvSFr9njl5K2MYePJg39PohBkSKjfpE0wQNkZcYVuVjzC92Sb46uKSUpUpRBdAM1sJBKNcBUChBcQqIyKz4dY4mrl6lwXaRTPrRmKzLoipbLAl7mOmQcjGjy9U%2FTkO%2B0OvHsmAfe8TiJ2eWmsJozKnOSVEhiMRl4gEHtxuE3xbr1j6vPCCMLC9QnDycLktW%2F4hvnZ7OjZZ0WQDEHI8KgJHzO7IkbF6jevToHbBDPx9su6iuyj5tNkW5MVlj4PTgIFmrRpcKY%2BaQus9o5WEl9rJrevCHhketZg0af3a32xdqj6HRA%2BrR0CyfINkbJ3pCY6s7z2xohpd01TJUm6y8yiIFPo%2BIkkdL8JrrVhYkeDwjabW7C9Tnxeg%2BqNUIP%2FzxxdWD1Yxo6JY0r0vPfvp4veuiJBS2r%2B8IXTupD0OiuVflkkhxGAt7UADrwGRu1B1XfKo2DMNCLRqvVtpZKuAdwc6WSZIsRowyCZfrkP3%2FiqeL8Gjd%2FVUWmlVAXtdnd%2FFrrACbLDfukpTpFkMxrJWLyP4ErltejCK3Pa9BjqkAX6XksNVOm%2Btc1DbWDt5bXKqasqjpaH8aDyvGly8OsT8OSwx07cZXwyQWNShb77lb4SY8EtPXwEl8Aeh5E5kGNGDBvUpiENz%2BscMBMn7JXXwwwp%2FBgslFlHeiugXOnuNzmzM7CQb%2FJlHo%2FMoI1lfUqYxVyKvGyMYqwBu0oRIE6h4mKlTt5HqF0U5MAPHKMkowXnvNoxFiUF8l55aFru2zMkObqM0&X-Amz-Signature=60b255621c0fe9b07660e4390d19b213e24de37ec0ab120db5ca279c6fa25956&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
