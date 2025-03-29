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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=61b92be4cae54056ef2bcdf27c1e9177e84484d6a3352c016f66dafb3bbefe12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=9ac6da2861bb81762e17e7a41e3ba6db932b38a8af4b600842188ef4e9b17b87&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=81c8bd3331d0d25f4f7d4352fe2866d2d4085a8433d3a7cbf707599a80a55c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=5e687c510fed65be5de78fefc1cf59779585906f9fd27dfb63bd4d093885db64&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=6a10472ce920c2922ff60126bf06ad7576e21e5b1f19293cd81c7ab28be690f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=296dab40981e8a6f5f69ceb4bcf3a42087cea3688a90aa6305c34509199845e7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YNATCO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC7jYVDO3SJk1ICsb5SvprRjJBbv6WzYQYkBfyOWcqYBwIgd96JPw6iwvJmRzfBw1lB%2FnOAgkHvGyS1ITtEBKAV4wMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEzBFp02t61t6vwXySrcA%2FFOejOho%2BvP787k3U6FsQQnRKK4TCZqiQqMWz6RLCjLBCGvsM9em0avseDGXE8d6bRduGfzHcpQpEtCjl5rEVBgo%2Bylphiza7xe6tpXSgPUvxyagFT6i7NgRhdGox2NrprDLeVuy7fYwusIuRRZJu7puPvBBAu7fUoHKeAyKBHgVD866qw7RXk4OWEqyldCZTdWVLa1qm7%2FNCRUdeiRMMaObpD3CjtCE1mKfNTBwNGI35vguchLcbM1TT4%2FY86KGtfidzv%2FkhP7ERRvlvwQQN39NgLBIYdJnA8reoahBFPcZDoT5Nz62tKCt86jm8Kt0Hfgwj%2B1a33ilXGTIFKDtG4bB7BaLe086iZP1DbpykbPuD5opDjXnVBik9Qx01gOlTM6%2B2KSI%2BS1lAfpyCySWlLg4wcaeCjz3U9YR0vnKZPxqtm0OwN65mH9HKOL9Qdsi%2B4I9e0f6EQ1LUGU40QG09%2BDlitTF1rZ2ydBgQpFkZ4xcjqB%2BMyDsxKIOnt480aEf1OZuo2tXXVjYC%2FZpZeOkGmoRL3IrU4afo5AnS9p%2BWoQX5hyEsDava%2BydJjkOL1bzDIUeWpbGtxXYY%2BAdi3PBerK1ORKncGe4569t3J0VcfV28tIloH40CnZu2lIMJCgoL8GOqUB7DaUaKm8bFwl%2FCE1idK8o3qBK4fGVQZQ%2BC1UssmEYHEw7QlwqtYUuoGuGtON7K%2FkAYcGw0J%2FYlnwINGYIS3gO3mlJvXeh2QBIccleyepLF2ex3fmTCn92bj37jPvYvdtwNTA9kZIK0P4fmswUX7cl8a3Ovm8w9zR3xkRsT6OtOfjUC7xKCV4ecOcrUOZpLqWhqDWOLUGy1Lwsg3wePKuDEN9Jczt&X-Amz-Signature=0f64c2093ac7c7c2ed3c84c08d29b483db4a4ea3a8cac0e4f5abc2062a013285&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
