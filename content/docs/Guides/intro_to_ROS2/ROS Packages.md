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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=5c74238da75cdaccb2f54c9c631b09f4acb716ad012062ecc50d1b684a538e71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=4f97fd25c6b86d81a21a5cb7a87617c21ae882627af74c9b5e20ff049d86ef33&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=1d79169a77db34308250a6dace8a2de8e94bbd5cd4f032d1e2064d8537304927&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=e54886aa29c1d7d0d5ff4b7a3ba4fde747b792d10b0cd39a3bc8e72baf519488&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=e6d858e9db58a4f7c98785b6a60d04c9a291ecfcbf3289e83e2fd190945dda93&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=68d05b092c922c46bb0fcd9c81865ca85ee4e1e17c7660906b882b721e0ea139&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIFXJVZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFnisKP4HgbIe2Vnq31J376uNkr%2B2hUnONydoK%2FvBWmjAiEA1GzYB5tBZE4c6xpyF%2Fs3AgYJTADxmUIyVeQnASZGYUcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7dErybZfJepjmc0CrcA8Ri0b9MX7uz74NQuRuSNZ%2B4LzEtO%2BjUU%2Buf74HHJfpts7hWDuVP6T54qHeB9qScx5j9nddgkmoJ8sQt2R85KoGzD2KBPi37gBw8yu5Nk4k8wn3ekwfmZh5kDymf1ZZy3%2FBJE3UMitQoA%2BuJ8pa91%2BjR3asGjaBS0sIeO45Vs38RzqiA7TvFh1kYNfmEzayRl3hscRnbHml%2BZai%2BskxpJbuh9SAHt79%2Ftm7bmI2bkpYGfidYBv1jjKEHUpiJ8q0JG7APKAyHGioCWbUhRavyzoMJ7igE5zf6mgC8o0VLS7VDj0JfJJRM%2F1ypChP7iXkBRCQCV4frsFljtY9%2FvqqUimdtqfQrhcpB1JvPrcehMAse%2BV1etlNn8OQvXxzawANlsymaD0yUMNqW4GfYsCJnyzV5%2B8F2kaj1AUQn%2BQkYctbPiCfj1TWlztpf5PVJln9TsqEbMYQLaXaqhE33rFTxRrDtyOm8DqS4uiv9NkU9X8oz7Y6y4DuDmjZ3JdAXqb5GQod7KVaGnMYQB%2BhKoBuJVkLbZzqp6f8zX8BnjdRts4K8nX2xVG5B%2Bg4KWQmfwMs4yeSoXWtRi5YTFNTYPINFIV6nn9Cd2f1H%2Bi3D8nHKVh3AtNmtAhJKUpFxgU78MKmKjMEGOqUBsC%2BwWonzOIflsMJGbDm5Jj94lGIhiyhH1TzEGyfeCUcwnORquwG%2Fs%2B7SaBsMAksDanJjqQ1O7aa1IiglZYEwfj%2BNC8RVCp4AUhslXYJ%2F9bIUzgxqvjVW5n%2FXUUWC9NVfRMYT4dQbVqvkGTYtq1myN06SKdfnaY%2BK0CUe4E9zcvWZntCWW3vabXdpUDHMdbojWgKOU0VE8lBjyJI9rh6fDKSmCvQU&X-Amz-Signature=e8bcd8595a2953e4dd1abe4072ab961daab7a813fe798dbbe390aa913f186382&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
