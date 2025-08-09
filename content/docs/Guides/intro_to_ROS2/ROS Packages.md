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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=4dcf4dcd5fd1e00fe9d3ea6a275c794869bf31f56efa432eaf0e17d4e3d42d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=afbedf36ed87ee734584a4970f40dc4affd8f90f661d153afaf7cbe93a9d2b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=94fbafb6292524922e12b9a4dba5c23ebc9eab2ad4d8497a01977c77333e38d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=1d3ca85bd27a6c39df422f7b8a82e22eaf18a7d3bd781047f8753ef70f330f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=e8b3bbd5b94dceb6bc026ec9742e1f030dfc5f698232d45236bc4532b6297463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=7960245b4b7b0157af7ffeb2e5963958958f728b24c720ed74cbb97808747a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIMBZQY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFO0zXo54A7YvMXYNnHdnlJ1zHJZ94UkNj6kxDcnXuQmAiBIGDOjT2w0gmQhg%2FJ8SsCKONccvsz2SClR9UyfsEi6ZCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtH5kaJ5kdA7QhFG6KtwDSytsCDXbRyuA8Wl1hquAhDcvfruFCpXG4ChOd2Xo%2FJcQ1RHedzSWgnzO%2BPW4ZHuZSdBcVsJGx2Mfgqww2Kv0OdXtmwkqG2nClArjXSBzGooQP3eAy%2Fp9g22RvVDulniGg26LfCIGlhKYnJ30kqKrUbtkOGNGltNYzV9NzLpANxhyVMLnsCtdFU%2FrAckuehNUpdp6%2B5SQvR47Of6tn3OeF0khK4WAPNh8slMhxs6kbr1ogdovvqH1uduD1IRrMqMMPteyq%2Bg0d4WyagC4dFfVObNA%2Fr%2FN0mbHx8GiFKTXDirI6NGpqItrbzhY663k%2FN15076XOrzSe0XloX2sbBj5WSmgeaLE0U75tfvYwTvktRC96o9Vb0IDpvxVAz7k1sAIxrSFm%2FL00VIuHI9Vi1LEmjxrYGjueNEPi%2BR6dgyJlf6WcX5FyBtCRE7XcdArbTZahuoOyGIFGIsnhdKRjRXzFiG6ngHXnmfrGVLq2dAYIVyDKr%2F7jKEANy1uiHsJEHdKvPfth6XuUBuamsbCBxtc6cOuQBnat6QM50RKvF4P5t2NI%2BvIkvKkCoAoqPQdQ0vlm5593Hwy8n8BfeTPBBa7scyX%2F6Kyf5w6dfKvT7uxWdA73ckUkbPUEcVHVZwwlsXbxAY6pgHst0bJwEEyP8M0m7Y5PnIylWgkQTfACrnqfzzqGBDndJ4BBlYGsi8mK8%2FNUAxBVUZXy70HMh70aRU66h67XFwPflSY657yxf6yCmj0ssLEzJMHwqBpdAhrY5OiA9rje%2Bo66HwYUsFWF9YUub00B2jGnWDU5MIWptHsrFa%2FSUdeQ0soT2yg08CJYkcRIuODnwZ7FSZnRmzHA9yVIfQxIIHp6d7KeanT&X-Amz-Signature=2230809a8962951ef9ce11cecf28af93479e01ce8584144802856eaf284805a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
