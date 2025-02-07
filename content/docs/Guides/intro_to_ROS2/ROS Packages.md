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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=4a254a33c8a0a2d6141d9c994bd7852a9e7f732b553e31b3433f662bc6283059&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=1c9e94baeb513efe703615019407b7877e5e791bd4c520b2933297e8f4cc8cde&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=ed0e2ac862bd2fed77f86c6163a7766e7a63495697b8331b095e33eedb464e39&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=f630cedae9ac92e720c0e10eb98f6538414fe803485897c49dfb5ce75c95f18a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=5315a6e8d1eabb2e832e90c76c3770bc99d94c0fa6a8d3547748d5814ff016f9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=525e56d538e0acc903fd4db518d9d0ba4aaff26dc24380e8259486e7202c114e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFPKQVN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDhgEPERtfu0L36PdmHAihDiH8t7A6cjfz9byUnXMQUUQIhAKIzdWmZkxgcSN53RQRTdzBgwMYlg098eiRg95BclgpAKv8DCHAQABoMNjM3NDIzMTgzODA1IgzpVz67dXxOLb9xqJEq3APzxYzuE4oB65JqpndwK%2Btv9CJ%2F6EWFw4MmWyJV5dMSmD26MGSJMA3N33WZPChvKB8GbXdWyFZ4TrdmduwkaH2xrAXm0vqmZvxHm%2BvP42BvuecYy7zTrdylRCc%2B4J8DvF%2FzA6JiGfdypYX84RwsSzzwAjXOTgwMDNVbUfTTW4UNo8%2FWQkgm3ZwWxfDNAfKQsUodbeBjjZDrg9NdYv25Q%2FphPfH9TbCxTaOdSXs2rDP%2BD1RAJ5HG3AYVoVMsd2nGaddpGmMpvqgyHGCVveq8gdnEid0JoUeGZSfnxoWNlmIEDOhCMtlRMKNxL%2BZNU5u1P1czv%2F04U1EvuzvmXWgq9GivrZ33b%2BtW2PkiYmj9%2BgmOxwI4qrTmqD0oOXDUK15GXytM5e7xC97nL7%2FHlR5KDceDWBTSEny2UzyFJ1rvo3AcV4oR9WQJeN%2FICdrrAPllOeqTYMZodGEJtnss9Hp9swIYFuASiAwmuJnHloCHco9qGAAH4Z18wlZ%2FkNFZ3cGSFii8Fn1kPgyATpOlFebHgX4LjRCvlgbgcXJkTXPJkeR2OpbgS%2FPAw0Rgh25xGjcX%2Bozq47phtgG0pZEgVOBjoxwFkWwAZe67HA%2FgcRkbC5kyj%2B3%2F9XmGx5LoyqSrbTD%2B3Za9BjqkAbTWgZSB8ywXDzJ6peNEEA1EVJlNvO6qUMKmZ8W%2BjBTdZ2jueBwmxJu5HSvN2SydUk61QcHPjV5GZe1n8po3IfQekjrRVrDk6UVWf0DXO1W7BJ98db4S5FVuab1Qi8OpOC64HW48vEGkneCezMnh3YNbi%2BJglQa4571MUoM5zHOGm1z4awQNTE2Eb0xiRB0URo6HVrJt5rs6jP35ERcha01lbSxI&X-Amz-Signature=b9a3f0cc1df641da195b0339581ffc369d918ec777a578ca76491afe63cc1272&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
