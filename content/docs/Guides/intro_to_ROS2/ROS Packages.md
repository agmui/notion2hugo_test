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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=2678e25d3e62d13459b7706b294b91254fbcb53fde9006df3f7cbfb99e6fe03c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=68c6aa56d347c4f4f33d10baf48c77a41a8911d195758f51ce236848ea6fe29a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=85bbeb4ccd620f064e601924958b13d2ce267e704f923327a7c7d87fb32612ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=863f5e268eeb9a466bf848c7dc5176e21112d13b44801a2a3b34ddd12a6d7e89&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=47706115ea83e0400ba0f074a2c6d41986605e0c093b3f8eef00950848834739&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=8e064ae46a43af54e6ef6097a5c66c66b4adf14304dcdc9c59aed1904bcfa3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHQIVQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T022126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlB7OpujoAfT5SUfMQTagqoUKNrAjRk%2BJWD0Tnoa%2FxBAiEAhEtNWOmxGj0UJmepdBgbRjV6g2YORd%2FWKFrUxLougJgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEr2jgNb9uWkdEm66SrcA3lpxTB1nMhm%2BdFr4v2CwJ3ISepQZ9WUE8KQtKQa2RyUSq9%2Blk01QWTu6LUoZ0XfTY4JvN%2BnAsW6%2FSlXP8NjiRmGmBua7viIcnUsTaSsDoe6TwlZmH7jixnv%2BdUQZq7CWoXKcO35GJfn1MaVPAbvbtp%2BTwAgX0T8D4oMxjjBvj5Ikyy5XTXYdrtuPXMwzlw3kRj8tzGtUSLLgxPSfO7gmtBiEniRfRW4HiCtSWdorIaCj5dHjqJTFve03yT%2Fe0MuyqPLzVG%2F5Rh35B7%2FvrjI6Tw34qahib8vQaBJFCKiTepPJz8A0iTstF22ovcXsQL4ZFaGZLBh5K1DlB9ou3yfKZCl2icJo%2BMhW8RyVZadzrMijVc9Kpk6ZY%2F4gu8wUv3c2x5ESbjtEMJqRycQgK2zQJ5w2aKGfWyV%2Bx77T1AHKX4vdjTWSjjNMLnIGkVuBmzIWE2TbzndGf47BACU1Ax%2BOqhAKPlKZHlu5rsmo7ouhb3Dd12KMJYGVQN%2BtEHpyZeyxvzvKBZrgfcAhRCPi%2BnKlNH39C3skSaTWBkGkr2Wx7CKyvtG8VdLvh3bdF0fQYJmzzaWvd40fd6KvUJMteGG2h0Rtutu4xgIlKtni5oTRBudySYl48WOXXWOPh7kMO3r%2BsAGOqUB0uVtXYOJUSve4K1bVUwYR7Sb%2FcmmOhW4vFnRP%2B6wPzNdMJyRgGg%2FJ3Zs6u1GhgYIL7iqHdDceKdsA8kgyOnEncMQYZpeTaOUDpxXLBhT22pZrD0eGHei2mMp8k6b45saqfm2Rb5Zc95rICwwHP5j7Ar9%2BuDxJZjN8QJpcyB3%2BewHFlMA9igP9k9ioSQgDKwkUCWNIVjGsCZZPlfGtB6gwwCec63K&X-Amz-Signature=1d11cc8997c3e1c0a708344ef51c3c0062eb5e58d349319f6a064b4c06953f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
