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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=b9bce9ac448a69b06586719457c6e3b05aa56b7533623eba67569155916f2fea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=b20e37a35f810ff4dddf7b34f3b19a3e60c782a5c4e21ef8b0941a31909e1078&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=ad1dc039fdf1bff20eefd284074219495732b405dfa0087c2e3e4591fa57f4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=7c876379cc43eae0125af9493e725eb7ac33634ec12ddaa58e7614fdd0f29e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=f443651ce492d5390c34ffe95422da6bebbbc1853208ab4f823d058b741b095f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=8ef661407bee02e911b8712c14d308a4008a7501641aa7a95b823736e26f260c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFHREE4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU5%2FzQMXFIWQ1c3G2RiVdnfeHj5KM7cRSEE1aNZdF1zgIhAOdL0GExVFUo3qJSKNioqO6UMIZYn55%2BsJdG3VaXh3o%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztGauVc20jJ8FG0f4q3APA3XjAwM3yS0SqjMBEOujdJtAl8wgL%2Fnd%2Fd0kEjdf38YUAvS8q4DaCjv6WE6VXWeVccAnVP7qCj0J5FpQTHoLxEwTtWG2x%2BsE643%2B0OravvSPugDpgg5s7AGyyIMkHpWR3Gp0MvKRHsJF2lHA0c7L%2FNKkPuBxlV94wzlg7I5dayqA8TJ2ZNeB8MXTYBaMNNpSNo1w52talEtQIL7waUgeaXaxL8ka3whKkM902sp0bVT9AWqiTFstw2kWR64oGnkM5Jm%2Fc6PIU%2FoGEpDRvQsNU1HZrOJSWQ3y8s3vLCOs1asemrri%2BodKFouh%2BGRzpgWvc9vwe%2FaIis46z9WxjLqQLB7i%2F1esbX6NnoYoRCiZlr8YcPxeKyaAypRh49fBIey1xf355%2BqyNsIUlUzuSKt0GY4zRFl0NotYUstoFqqpfFu3ztZ5nWc1WAuxzZxZnLzxKXSUg2WJaDZ4pya%2F%2F2fAbaZRLjGPH0wjrjkWqkwAc9YdLJGQxCcEueW%2FSjD%2Bq%2F8kjCQR9Q7NCgkmT22G7ZpkZJUxXHOh5X4mEtWQJLwq4VE7SChtxp31VHRInsUmqawfesbY6e68N8CzUFRSBOh8HqafXwUR8ZrpHLEfJXP9Jllgcox3UJU4JdqV6fDCa79i9BjqkAakrLSwX%2Bhb1UxCOE14XEOyU6AQiSY2cGJy5KxBK%2BeqcJdUuftuxt298Q%2BrtLdCkQr3xhtRMDe3eNI%2B7KLTkAZc%2BQY2Gm7HurkEtfvKI0JfW8v0iHyFb4mGoZMS0cZHaXcXqvfXHUY%2BunjKqoTw%2BWxPOD0Civ0LnnY4lXt5UWOt98we%2F8gLTOllZ5nKw9WQBLuxfBt2cz4nAZDDoUmT6xhzrna97&X-Amz-Signature=ec2cb002947e8ab528b07e3ea8003a9bfc04b166aa8d2c8d6c4f2e6265b1d118&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
