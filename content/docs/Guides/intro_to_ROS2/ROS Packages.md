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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=57d37dd54d1a53ba7c9b8bac02e058bd920c8bb12f9fd10563d28b16ab6e27db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=d85cf167f663d4c14ea4cda5e0df8263009f51f911037743dd74e952cf9b9747&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=8b2d513f0049922c0101838f12baedc7bffd01e7ff19c4284b0c9b4bddb2fe17&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=49e9c42f6ea2923a22cd378156ca7446e1b4e3d851428f9d51c76a5d4a214051&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=f8ff6d92aa1a11e86f91790fe29ca63e1e6d23d8f44422cf30c883be392e3f46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=6a55ba9df9394d1d60864fb8c5792f5ba62ccadc4c041125b740600e34588578&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7YB7XIQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPl0%2FW%2FU6HROrBBHhGeGxPMRRjD3BDCV6Ui3eMGQlfwAIgHeLKJ0CDSHqyGGgzrMk92DB65BOK7%2F0PbuSEi9F7Dn4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn%2BxtNJGBxgQee6SircAxPc35g8jHGqsTuKe28kUOEqxk5JaQfhOGoGTFdOEC2Ev3TnaFHZNLx80rhPJXMK669MdDZyF0ekwQmYP4aZS9tfUoipmNkYoqN8iMxS3p%2BJGzE7sTa9XVxU8y2DjBwef4QRpWhxZJWPRfrzpyQH8pgG8NumqEuWKaQRxSGs9O4nwUb%2FYn%2BdlDSl9pKfL3DJVu2a9lQm%2BMqQsxjI%2FAQhjJJLkKEvezBmQLX0No0b9edHuKJi4JYfFp6Yss4VLxnM3O%2FSPTlsYtHiaV6IOn9DEEzU%2F9WXFZWm0%2Bo142bsEJ9ohcrTjmpjx6OGGP%2FRKhntEByYcLyeJNYsP7CjvBoBNt%2FpSC9Y0dOR6RSJGHT3Ajvl4F%2FJpi%2B85FwGGZMF1A6hMhPueysQGYKc62%2BQXwI%2FpFsUU8eOY6OQvUaYCORcVEaF53%2BSQiqnY9cu9OwVKQP60jhkrp2EY0I1VloUrEV2nmLUy213O7yTEUTOwo0d3opmZzMLUbM88i7IuClMVJgtvJ9ZhMl3A%2B7qcDWGRO73dva9bOsx1FMgIbr4Aiw%2FUjrRxIzjna90Y2fqxDwJGPm%2BFl%2FVXOREyh6QCXoYfHwc3YxMPViR85kXpH0%2Bv9ccx0kCcJuJ1jaHSWZ6Xa2UMMro074GOqUBZy6c%2F8Rx4PDasivpAnSAyq5B8bxqnfamAVdXIrMv%2BOq%2FgokhBoQVhAkagQTxTxbzRc1BowuaL6jdzGtbLhQp7BvTmNt%2F5ehT3wO4474vPQNRMsH0UtQvz9iuq%2B9KcRZ1ZIyUja3pZZ7mgmttNNIjXFb%2F%2FzsxJr%2FA81JhCS3zIjm182Svi7KeFw2NLH3tF3E1ABx9Dz1zEsUdSmzsz2bcUhNtYUl1&X-Amz-Signature=bdd7a7474f15b40c7480020638f0365a48db9ba5a6e4096072e17e30ce967806&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
