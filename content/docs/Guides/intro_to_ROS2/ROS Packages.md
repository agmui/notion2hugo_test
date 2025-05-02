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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=8487743c673bb33c39067419238ff03adc54df2ab798ccc055dd25529629713e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=fe52e497c9ae3bd98b097ea4c4e98767365964acd3841ca6784291848b17fb28&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=21bb391b2ac2f99026c53fbc517901b4a4fdee1d7e21d78d6b7097df425aca55&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=18721205cbd466d49a6f2580a8b6914edcefefe6930707c49cc3872a80d410ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=90a4386ac23aa6032f87615aed319ff736acab122328109749170c9e2672393c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=c8c6ef2cb325bd1b52e22b85eae438132607749be760dfc4ff1a38ba67db2824&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BKUXEN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFYbcuK3U74%2Ba3twiFrGTRXxIHEcvHFxjdhjgvwGsFiuAiBtIUVuzlRn%2F2FCIhdPTwE7odfnnFdovfMMM5rCuBf4KyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bfc4QYsdasK%2BrF%2BhKtwDhOWhe79NmaW6Nwpo%2B3km%2FQpGyNiIjxSd8T5V16t5HxP4Xx16Y21MR8p4m6EMofSBHiLih3RF5JrB9C%2FlhgzksYTbVvjJzJGLQCmQR%2BQEoc3Y7X3hxUgIjJMEV5E39O3JqwclcnIYeg9bmvVd2%2Bj6VsbpyvdUqugIgLJFXY%2BYWisSOiYMExiZs9%2FPcVHpI6uHzvQydiON7Aw9d6WgVW8q8iLMk1Ux5Wh6al%2BjSj8jt1HUPVSwsa9Oz1r7M780S1i00Xm1YrSPDzYPVcYh2AAeeZKzueRe6i2ho1cSLpx1XSnteIhsEwqhsoGuhi748WYHeyXE6l7IHN5fDjpHgOro3Rwd5RgGMkGsPF3PE%2BWyS%2BDwJTs5YhaqWHYkfgPgB3zYQ6ZnQY4jOoQKwG1wd%2BQb5QC90pe7JdGQHY5KwfhHjSTzxercRb8VF%2FUynyYOPq0QM0cjRHEPI6boVRUKyRxVNrMyFHl4ajG2atZoPwf5jbEAW%2ByN2%2BwP5GXPfIdRO4QpHGWKxlXtAo6P8gb2j%2FdpW7QcjzdI%2FjiKfQxAQjiL1HkgjQ26BDCzA0y5KTVDOUr1i3S11rQeniLxQZ9aHUx1kJqeGr5e8KT8Y8GcOnE887p%2Ff%2BwRz7VfbBpn6B0w%2FL3RwAY6pgHi%2FvSATJ99SQlep62ymOGc4vk3we8oR8oQ7xxBZUh%2FBVFsbweL2ZKMNPIVNSA1aFsQS0bzWmiwWbt7FkpNA%2BbnqrcIUzmCkob3G9yyKueQnAjckOn%2BHYXqT1gkV0UqRadECu7dwgeio%2FUkuHsZNzYXq58S1wjdzYSW24KKIXbcpvQFtC7DcE7AuGYr4zOTxg5c%2BG%2FRFWDHWnG4OqP0bnwqAG3r9BkW&X-Amz-Signature=3a568a311b1b77069497e6bc5bcc487359ace6d3782892107c7b642b828b4e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
