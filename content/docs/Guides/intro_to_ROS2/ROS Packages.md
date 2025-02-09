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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=b4a23ad4f2bc4749bb9e77909e6c4248dac93f5e81a26ffd7c057a7af1854dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=01e055dd8188acdc3c58d4f7b5e47c13241ef741ab46624c1a1fe77244e51fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=9642c296b174e8a79b95faf8ac6dea8676cd4c188713aa14d1261be72e017841&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=ec5288fa691067c975b5353fe2e91f56a2b4a1e532e8ecb980680f6a40a85370&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=d8b5794245d9cf40f22c6d3dd5de1da066076cb4f16beb0a6dd139d3811c3f81&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=c4981b7850a8b9cd42d51fd26bb4f3a53d4af6ddd12bfd0659b34d63878ec12f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUDAOT6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vsejv%2FGLUdDiRaV%2FFZ147ffoGOa%2F1FAfju%2FiDRJoFgIhAIoKiW3GHwvopYjBJRzUIpVfKxZdUXXU7fWGlCgs7Kj0KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOiQpBaMpXvgCGj4q3AOE3zsTpNiq6Z9C7nRsv2cX1WDidZ06dj7Qc8OEGk3GBL%2FR9XgF1EeFGwjW6y3lgbASLYFdC7irS%2BFm2NX%2BFwnAZS6qnsK3bg2bFdHLcwe52K9MRy4RWKAngU6vHIqTSQHu2JE2RRThdaGpJWMVCpHfhOS5uz96xuwonPuc71xpgyqgydhBVA9ErpBYFF1ZEEolPLBN5fkrf6JPCnPPWd7BcynMD0uYef%2Bi96PcHPsI3VSolr%2B%2BrFJl1cCc4K9VkqwAGLbn1dNBBlJJ9GX79AMzuyL3yMdEQdYpu93B75YVYc1j5e9Tugs7sgD6C8NFCiynIp0AJe5eQ8KRCf4X4%2BCqHRqUJojZO8By0fuLUUS8E0PbhMiMPqd1zCyUtAmYh8VzxoVUrIADiyRcYujeRwhom%2BQ13b%2F6v8kINyks%2B%2FhXteU7NIPtYzY1EiQStihlQbWyUpjy%2BTXOQ0nj3KOHevS%2FZwc8LUqY1KHsJ%2FyfvK%2BJQn9eVf4yJhHDEoXgZnpQYcEusshnSkDcBYdx3v39zzh9B4%2Bb9XiBrl0mPYrViJ1nKeXcLuT7uNqwUR4JdbDlkcqYHsOMbPaD16%2F3YcsstlPfTL3RUFE97m4UyFi9HCQHiLjHG5yfJ8jWN70dLjD0vqC9BjqkAbC4ANuYanjJTJxQ5FQFlhVE7B6C%2BW37Lj2Kz8pEDxD3TOiE4Njp0Y3T0mx8H7QsqTY66rZWkpFQT9N%2BzsqxHHF8bCX29m75PidmdJabDDbbs8BQoH7H6yOAfm4WkrFb3OF2LDoKobn3t8WMuGOj0PJJoG%2FibCeGTobNLXfEaOh6TgIplVkI3kAsSfxYw0Rir59WClI%2BYPdGHee7Y7E2fmgDgm%2Fb&X-Amz-Signature=440ddaa672e6c83d48381a38dc765128b7ed48a9c5331275c6f3a332db6d8565&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
