---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=e994b0f874e14f24443dfff72374dd0945f5958e8994face511a7d5ee6028dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=34c7165ce5648f609b30df5f900b096a63fe87853be3b3f2c139fd4384eb29a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=068796b34b2f84fe373fc94329eee76b5b75d4ac1e980408be6a50a96d701337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=fd83ebfd1d882e74c77ca9c4b5b8dc927b23e02d4b5d0b1134b76702e3c1d510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=16c96a83967f0056ce540d0c8caa03d1899b05d2156ff80ae863e558c2718d99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=012dd1b9ce03eda1e844b71c3ed2097395f22b4a25a72dd62e18f75f2df6da95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQ2B4KX%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlzXH%2FXiKx5iv0GZHyuuTcAVsZ5P4QN%2BEUAs1YfCLJ3AiEAxKFT0vD76XUkFkySHGN0%2F6PiwSICSQeQVpe7Q5Z8JloqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8yYQuVkoqmNcO4IyrcA%2BUuASr%2BLQ4ulSA5drnw1uNLw%2BeCMV0uHn5XmIgacD5Q7kizmgbPai8IZEZKFAqF%2FJRt6eI5kY8%2BB4DJ0Q3pI0GKaJS9NFA70ZjGJNKTQG5yvUo1qNzF1df2Satf7nlsZAmGmxmPr3luGJbKgev3HeYk4sc%2Ft3XwDkNb0H%2FlzufmSwLo5XjF%2BMIa17MwKUaDcxaMxelElCHRJeEAT7d5xBYAZfJ6cFtFbEdOKqiZi9A4%2F1jeDYTY9fJ9oMKok3awjFUVNYs7Ru4IMXnAbIRbieEu%2F7r8Ua6pDYgP%2BQA58oVBJe3XBuLBuImWqR%2Fnxe5Lk95frIpIPkv6PTS2IaRnZJCRRzizOt0M8wzV%2B3zx8gyntfU3N0UpZGD9InV9lxc7JevL7e%2FYtZUaoBH3meDvQXbZFWhukLIs04uMb4reFASJw8OsduazCKVSsrOE2%2FbIhPgSfjeq21fEGo4kigUnuIuzbPyPCYbXHreLfj5655lr9P%2F4VMKwOzfVOh3iYgGTM99fHv1sVrhNxSjzQ8Zhh%2BpOwwELTDlsdLk3xwnz2LJBy8%2BRWDWXbJKM1gKI2yy%2B29W5A0GNWrRF6DqhN%2F93rT%2FC%2FM7Kd2Uk1uC1XMPWTrAJ8ARPOkylkOi1wt2iMLGFntEGOqUBbAO90AtSfASY2MmYlEnsLnKXHjoDnLKz7tgWRlwb7US6dFPMMgis8nW62BhVie8DQ6JxkwFGWdt4lXc5%2F7ZV9AwlN2%2B8FmbMc2UATFFJXU3ZcR%2BUr6SLs%2F5eK%2BBsHskIcd%2BS%2FY4KL0jk8wu8IRydItKOtS3DJWxQa55Mb4KVjFhuLmXFuERhKghev%2B%2FvJqe5B5yZpU7DGB4NcKrahUhSX5cdQHDA&X-Amz-Signature=9006543550fb34ab0e282afb27fbd134682e86f7b80ee71d5f6ee3432520b03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
