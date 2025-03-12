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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=5aff84092e97f6b14c23d4cb3211dbf0a907a412252834063ab5226ed041bc20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=8ba5fce26ac9016b2b3a222cf86f1d88ed5fe607b90ced1019a8aeb0cffa7cdc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=e9046d49e96085152028db7f4983c88cb0f5536d3a67a4c92ca8b9fa4e3f9d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=43d24b9a0cbd740b04874fc894d70485d1741a0c2af126040bdc1aa237c7973c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=2dc76154b2b27f3ff0b8ebfd13df13d48ed8bd4bc7a441002bfcce75f7b9ba86&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=a8c34f5040678f5c035d5f8e6ebe69f2de1ffb4ae6bc6deed5a38ee94e7a1207&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LAZAJ7T%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbcVUekbBtq2gycJ9x1ZERcAiZc20DW5wBSeekz2LprQIgGItk%2FuvKLGqaRxuFMS%2FQEf%2B8%2Bw0mvV3jKf%2Fa4qIPjSkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG%2FAvm%2FM5B%2FNhFQ5ircA%2FA3K0HtwiAqnSOvE8zHA4MH5ymu3aX4LymEQu4NXr1OD8JMTS%2BQSyPrNdhTrfcqyGiNB9EMBWIGIdwRPKAuNfRS3UNFR3kYK1DNU39Hzm9kCkQs1%2ByVCpGpWWrFZQyHoZVkhSqJBKgIK5li29ulYvOFNEySsKfy%2Bzq54rX5SfB%2FW00kHyXkQVY%2F3RYnKshLXirw1jz9ttBtVuJKBQCTliXE0aLQOn%2BicLr6XpEf%2FMZ6pm4%2BdvP87isRFBh3tO5xmb9CTD2X3JTJr1ko9%2BbEiqFUN9TZ7A%2BHs9bfiTWcCBScQ%2BfM%2FT%2BIvqLZJ%2B3%2Ff%2B8GqxhaHyZLNHc3l2o61cA6n8j2WeQAXeFHmSL%2Fhz0ksd7Tb3Tu%2Bxk3%2F%2BuTd0B5VioxayGZMiYPFMul3miQ8YyP7wWsdPkHhaBwsyBbnBdu1SiLvaCfKhgeuJZsqau0ZbLuJspxz4iRAksWZtIWDq6ezK%2BMnww66ZiOpHMCqY5WtZRxhVI9vcxYoLIL61LYblLGYsVu8tLHdt6QbzZb%2Bh8dmhRBT9MKly06DQprho8c6KLLt4Y%2FNGx0ikn7H7KjCHcvtkKbEEBuUVxa4mlxjzF4NQidFrH7k6ML%2Boi1ugOfCTWD%2B9naCqibUQnVugKdMO%2Fcxb4GOqUBofkR9wQwVQWUuVsGaUssQj6FF6fNMudxtBMss6KM6Cbp9MLd8zTHBT9whCiOSOneOIp%2FfVUsMLdu6xQ4SeAwlNiPz16%2BXxZypDGBR5Qrad%2FLoMjyyHQMp3yWsgHAaZPagUVi9KUmvC063XRrEBpgmuQajaCs1YYvvX6fM9d6atqXzSg8CeFDzRXgEwUqXwgK9nIwwtZd2sMHQVnbc3oNVYB20C7T&X-Amz-Signature=a430078d47e07e58f9f2c2542619242b0497b5a3b8db9879f6a98fabff08fe2c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
