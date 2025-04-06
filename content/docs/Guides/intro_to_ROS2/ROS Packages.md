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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=4fbf9806c97e417403635939d11424f2dbcbf7727fef0a3daa28530aaf509522&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=638d33eafa7562d5f0f645e064ef8e746dc40b08807f9f975c6ae9198061fc71&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=183073497212fd73e313e9d782ef6a7410ecc88f33c7c32616a0eb6761a97aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=a0bea54430d4bd21a2fc064371b43881492bb9cfe3dd0487f06b3ed7a22b9540&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=dd978940753512fcb63ddd1d4bbc73a6078a726b5bc88684cb40d69888d9d7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=0ccfc369f8e4230bfb67b6c3b5069baa5ae92f0bd53e4de7710928517f917680&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOHWTUD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyoWeCKREncYxeaiqpIxpY9Mv75peHbXdBdHoSlUNDwIge6FaFDJ9YEpz9bs18F7MKufgeYtEBWW5XW0leB3Homsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGUJIZeOLBPc1V3nJSrcAwyl%2FaWmK8vpbIX2gg4tnI26Fi7wZBeY7wRzlb1DiJPtk2nwl5kZkbgxVXwcY6AFEJyF5RPjWu7naJunTl2bKPk3D836E3stYIndiqtcRzN5ZdSwrI8gf5kl71lE8uUeeMIUJ%2BjAzvCWvXKDgMkIdCBn0jGChPgRiB0exbrudKbelRByhXAASeOIHBKYiVnWihtdz2aLUR%2F42AUkKrT9F11sxrqjHfeU9eQn2IHmXZe%2FuoW7%2FjpVD%2BBwrfHGabdgd1ZJqOfl%2B28nvp9ROpU7u9R0fCdan0HD29Ovwl9kJXW7HNgcgiMjxTGm25whGUv34AlQXAN7ce9pairDGyEbCqj4Ki80c8hdM8Ec%2FZPc139ACJRC3VDercihQv8IWNU%2FVCT8vbtcUHpuumsemdv4HjmRp7qECCqm%2BgZAC5i%2BCtwb2MnMUjZKc5V0ufZxzEKh0MfY4c%2FOCydQ8E8lY9VHjNYwDFhDlDg0JmkgrVqTflUO1GwUggzteFwJyfq7EYCzasi2nvhhMVgcrin24j2FixTQSw8a1S4vFii42%2FxA7BKd5tQEP5uKVdAt1OkwsHHw7U%2F596BXREQHPoBpARZjVothJ4fODcyILDe6igLXs0M4YUQwjCnoZDTnsUHmMMT%2FyL8GOqUBgKAeHZ8fePrVnwN2HaVxkkhZ4jHHSdfpEss7r3vi3awAvtU7Bq0is23dHN7Hne49M5hTbjX7mCVynxupsRkvkGRXVJHoBeam5kelTMRJARBFOFmMqMmpasajI2AmAgaxIAWhDg%2BSg8Zg%2Bm8ZHiaP5L7%2FPCQlf%2B0bQRGQnutVpFfUyL14oC8gtq0eQfS2P9pkA%2B4LkhhBriuNoHdu15IOkA7y6678&X-Amz-Signature=0a238fe7fa790e9f9db964fcf555520e13b5a49c1b5902df65cbf7ffd08002cd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
