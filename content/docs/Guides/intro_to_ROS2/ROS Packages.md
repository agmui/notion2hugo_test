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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=eb1ffe5cdcd6327b2f73f2dca882836786d14d981aa153bc14d0209adbf898b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=be0e7dbba17326dd86d8eebb11849b44294538b84b2d47d53ef81949c080dd89&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=42bff86547d335266249a76714d94ed1fe9a09e9ad56c13bbf1cdd8eeac9c69e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=81fd94dc68011474047f6b26f9b0b14d0682853c41591280a59708029ec61277&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=75ed64aaeb79e9d7df980df540a287b01e6f62ba43a3954acbb189e064aed42c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=1c68bbd65827101bbf2e22d9e8d2da7e5002fdfeaaffd436fcd71467f3f224fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLG3YEQZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC1wJsYWmcUg4j20foCnXSuh3KuLtIvjfU3sijv9MsbBQIgNQpxEuMyKnMIFA0sDpArVlm2%2FQ68%2BgfM5%2Bi8dhgRDmkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkZeYDCxmJ23ANHPCrcA%2FYyCvEZkD5BsdPgQq9NYpQ7GkamVwIE%2FyvAN6Oi53FYvHBN%2BuBgmSDdFGx%2BE9q31m81hJV1GPkO37def3ZzXgHIIlNDXDi7BQPLi%2Fsd0TaaD94EMYT9mcNpM2PnkLbqN812AB9Ufdwf53xvZ3l%2BbvxePsKH3SRN4RBpDtv7mNfdjaqaZEgrgfbnsKkKfSqlYGz5Mxga7STdqsQG3epScUI9YNEppprRlmqoiTYihgKeM2Hk8vfWxFRfqgI3JCGk%2B7mug8S4ZbBd4RCCGVpFBHxl9gDJtAMfLZ0ZdB13OepHfo8oBOaj2Kvs%2BVw%2FZG9Oi7n5%2BvePo%2Fl0kqSBVrbNw8K9njzds5LYYBxAI0%2FUE%2FV0i%2Bg1Wt5GulhYg2kl4ta9kc6DvgohqiHUBo%2FK%2B29UwCJphpCxWjRWgFUjFvOd0t8RsR2Sb2PkAPIVhxrwCUuHA%2Bwxl0IUKNul03L7MktZ05EEgRinm%2BjCKHZfNpcUIx8Jv4%2FubnWQwZKrtNJHLaDjJeeAO%2Bzh7i7vC1E2qs5bGJf3UwOxd8TKumGGDNyrt96ME3lzuVHf7qhJB1mk2zeSrsvmKj8Sm6PcQb37rnrRgUo%2B4%2FVTUGBi4FpGMQepShjOtxUL4%2FwyPgNlkWjuMIWI4L8GOqUB5GwljyQ%2BcDz1cq%2B0oMLPycDadDz2z4J91xA6lOu21m3LmEDdatWgifyhQ%2BIOJ%2FnhttgBnK7IfiACWFtIMPqePZYygTKt%2BRQEvsV7%2B98epLj2mTMBFzJZuHcvvRAX5hVs9XA5xDhuQoxbR3fyxFuECJNDWmtgSx0fJbpMzzu%2BnFn7sjgRY0V5Fv3iXZBHR2Sl08Dez%2FIQJOTjIwm728IGsfLIsQh0&X-Amz-Signature=845159bcf0511bb3798745e853cc44e3d4bc83a3a0f0eb7041f4c90039c34be9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
