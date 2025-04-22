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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=981d3bdc3245cbdd05676c52bbc2bfbcf86d0502aa2b42e52ed3459c536af0af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=17aa4379a0abcbd340a27e95029a46f137d62b0ec9e3967ab444b4e579a4768e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=b51504685d04bb6a26f860c1580237549fcecc5946a0267ea3fe7ca8095dd273&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=83c107fbe21415e130214cc1fd1fb73d1ae9a2d30954415cbf5f3e65df149444&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=c7e97af6bbf7d2080b4e7ab908e5e9560040cf746a743587d81d5cc675d45574&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=e3612febd057bcc7946014a5c28211604b8cc0ae6cac02627ea8721473aff61d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBD2O4V%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQCU0HZKnEKdYCD3I6dZWm%2F18BC25bVvkEH8owD1MltG6AIhAJi1a%2B6U1as6Pgzoghk3fNfhVZn4tjxng7V40Dn1hbKkKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxbJvvsrF2B89Q90q3ANi6bX5u2XvC2bKhqtO81%2FvESXk9bv9ZlP%2FZZOVOe0aT1XIMtGz2yzhnnHTzHSXi2oGwSbY1NicUB%2BY6GSoBvX0MAIDjan9NelEPSdepB6G7Ek2B67hkN4UAcfcw91ihWtkvF1%2F6c9f3RuN0TRsBVOJqfHX9hkJauaNOOsGCeJ%2BsGyWYrtIYkh%2BNhm3j%2BaWRePnhjGh0N9Voq1HwoA2hXE6cfTz6UEgMWdho9suRIBR1et4tc3%2Fei3QNfPtLDVkAu29gfswVqIGKwCU3pLJ9GYOca2kBnrZT14I7c6v4TXsSvcdkdZlmA%2F2I9zrMEHnX3lcYp%2B7k5EKglrBF%2BvfotOjkOzn5dwMzlu7pfTf9zrpd8wB3i5tDejNjCYU%2BzzNq6hYp133XEWQOHkU8G5HmDj5voawUycILsL55rE1ihyis2NdsbTQlcmoruI1hQBZpAUZrHEmkGFCKK1xE3ersXIRlwCAoV6vU%2BQm8XH01MXvZRkEmJxIKiN%2FqBmY5lrfgkREygbexCFx2SWQmTi%2Fq80d4zmWIj3ov8OU1oK5fE2Hq2Y7zjl0vAEtWuzr%2BYMf6VNe66zeglPZDXUp02%2F8Z%2BgXCJoXsSkvDWtwmvrfRFQRZzpHHV%2FD%2FJbFRZ2RYzCIvJzABjqkAe0lWge7a7WxxRF01uepR8%2F1rYTllJ7%2FxCHOlkVkuRpH3GQMDq%2FOcdPgMPD1TcZXGT6%2BWYpVXB6cxO7y%2BocsnzTOhEEYEZR1cGrnJqsN5kqYDs1nUKl50oXULdwkek0U65kB36rhThWhJy8mRYmj5GVwYoRqj1hXkAG%2FWjBExk%2FoaaT5fnn1KUiRbfMa3to%2FfvdJP1zHSNSD64tc%2FJwKLX864ktw&X-Amz-Signature=e6d3828e4d9cab4b6592a480950801c9573d71b3ede9d0df0ed02df416de5fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
