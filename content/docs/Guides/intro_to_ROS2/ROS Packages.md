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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=1f38100d869e9687cf1b26d7dc62ee619b08239c4e9955cd9a1681a3a606a24f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=d254d2b130db5618d0506304244c6f2ef1cb3d902a5f2cba24314a4a1ff11f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=f41e63fa2f1c69b563c20aa9f6574d5d086d552459e63c5172ef177d888ec27d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=e3ab829f36af38fa6db572b3c002a956a68347f3ef7de45882dd1430b2bc6364&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=6eb95598eb95fe3b94ad7c3cca35a8e82b09bbca5cbabfef776591a3e162d402&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=2688a598c250e6a4f1af21c05b7a0f2eb4eea7325a841df74b34e102a6c22872&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54LW65P%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDOaUIMRmEYERlL%2Fe5IjrmwrB%2BfzYfvelypC7PmYxRX0AIhANA21PHPIF7ES0EK3PYAeeBEG02rkb7VUE%2BXz00%2FomrTKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoUB4ik0hR8xC0PvUq3AOIVl51wYxYv84nWnbjWy1h4T2eFUTSrEmsdXE%2FC9%2F2OSaS5H4flVnYl1KzYfXZUOr%2BWQfZrcUI4k4tiSg3FjeVXTw2nvI7we05w50ppwVyPQ6k1B%2Bw7Civr%2B63Qp9mmNS8vKkRHj8%2BRYk5s3S8001l7D6oxRNcUQSpkteCuxMJ0QPQr8ppxn%2BtWf0k0caPnzYkrtS25CkGya0yd%2BGaH3LFPiv%2FEGxb6MsjIGiwKmX9vV66G8FcBfKmrXXOsFfqbBYGXm%2BtrdG00jBZHMAjXBDFZzpIwsrkusC5O8qDqF0ZaemRqzB7%2FT4VI9KnUn23imDC6%2FUGXMQX4tRZKyq%2B%2BRVpy4PKDCyj8ad2WKzRsuHmU3V0hY0eIh7D5Yp7u%2Fp0KJ6sw6nSi4rsfeRRAojtSSBxt1iLpuxx99DAWwqVmEbjz3cml33%2BhbCBTZbSOzheVAzIq6q3saz2CF9%2FBoMbIpu4lHrHDm%2B68%2FjczI1fjS3iMZqmIbd0jvtJPzzXPkfBidDZWPl7%2F4%2FHwD9nXc9HMjAZt6fXwhhnMUZOwhSzcQXiubtcC27ZG1t%2FRDX8xSxobHT8ShcCHH4QUxe9GVd7POUGJjb5QAw3l3%2BuROUiEGI4NXRjrw%2Bfwxj5nfHBLjCO3u7BBjqkAQQ8f8pWFfw9yH6OjTWppsRN58%2BCp79ojyMF4KEnFQjpO3VYlQHPPRxjkDl6SkdSZhZDes0gg1plBfEN%2FpDBoLnfYJ4d9S4ebdJz8PHr0%2FO8kvMDOwW%2BcKY7ebVVeFpQdjtrU5mDhy7ltPZdSTLpbN13r8CxiXqzOkv6myd92GHTQOfe1uavWmjrNpjO97IDEJkWEuAe7Rk8iM6oos9WzJOW5pVj&X-Amz-Signature=a89c1e818072a95a89655752e595e98a8ec0813b4862d9ba6be47360bee35978&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
