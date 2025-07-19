---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=76dee62d6072eb2a6f124c1a1dcaeb52f52b132f8b08b1a1546836f16868e9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=285755817d72c1d3f3e68bf3803a62752728d050e39bbe120987a8e3175501c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=c6a81964e392ff81e32f6c49a8b5782951ced854f186f0a09c7feb588dba0daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=4289ede125cdb600c37c1b0beca211659de3c9c97018bc3823abda5da4cc959a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=7748744e04a0fd691f8ef57ee92b5515c1128b7263153dd1548884821230f86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=e4f60d642ca38b7c479487fefe523de42eb7186180a797a9f6de16e042355a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVVAF5W2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCYt9auS%2BOCzK86Nezz%2Fcm10DSqW7z1Jvix0BpB3ZBd6wIfExv0FrsN1TEQVJGOLgMgys9VZ7IBCIr4KAhNZ3Y4RSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtn01MXzztk6EWZspKtwD1k2CdCrSbmfKafh5bHz35rvN1wqoEmi94nYmlVBbwUjfkwXELqdJaVt1%2BDYwQe4sKyn%2F3hfksoPQiB0%2FpG%2FF8W3xkhy5hdt6QrTV%2FVcdCffGnwsNs0DBJY9gHRGdjnx3ivUYAL0nW%2FbJS1rlm%2BpOuYEekhDh3JyAjPPzCwYBeOBEwYw6LimDioR9IN1Wii8L0%2FnufuoeW%2BTHo9IwYy%2FUo9zY4Ao3vWqrneYKDmCEbcpr4ZPl06R9Z3pvLNVKQlcEYIQAzGl%2FYyvEvdgLmq1d8rXn2WnQvX7evVSfOYNzdeBv6PA1FHTUZrRArdVfPEBlFdTRXtxZV91o6agzhNsn5Fk5lLY2C6jMeVAlL9xtSLMWT%2BzZGoGEt%2Fa7HMKrxMJSM14Kmdnh3MNUchszPsrTYMSwKl5N7O6%2F4N0fvXWHufHNU02ds3lMUc6cNXPUa%2Bh0sukmtvHibBykfz2%2BtlrMdnM2i5rPiMm5RsR4B3p7GMpJcq6DNt0VhvGWDlwZ7fF68xFAyyAc9uMsRM75rEt%2BwZ3OLoI%2F%2BzORozCH7ENXotnef1kIMF52JnmoYudWkjUGuJ%2BJlrt2TTp58%2BMVZIpUzB8QWPMlOuCpMi74GS6QZqj2Nj9w8fQz9%2BQ9F9kwwa%2FrwwY6pgF3PqRnDT%2FKItfWgLS9CemyR%2BEQRWrvbtral6d5jKHtHFHII%2BQy2VXQP%2Bh2KRY1k%2FKLRDfSKgXsUf%2FH5WGpo2AFv4ztVwE%2FErq1WhzP4kJFeRn%2FtuVAoRaiWRgSBBSKmZGjLTOYNtpE0PSpf9P8uvklLNU79VE0mhPsDbvzJsistKLH7%2F6blrlOAJVK5nb5NYXGBZvXZXqqR2etDbH1LoZZDF%2FIEnaq&X-Amz-Signature=2f48cc40cf678f19aaa395b9bb3fdd9bcc8529de6954bfbee8ee8a904da454ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
