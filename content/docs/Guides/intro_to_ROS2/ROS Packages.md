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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=f59ef9047d99933e48ce80aca436ad46ad64d42cdf98d1d3885e4cbf763dab35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=fce56d189622ca419a34f573c6769329a2a280ab2bf4453b32b66c24c5927986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=5ab5ea94ad0dcaed8a7499f82b8997d399a0ef8307228ea1d5fa982891ab59ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=ede7110eb84067cbf96e5e553db7ba88aeb596e293f11cce8e956374ca39a134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=9ae14525182d4d65266ee41f136b86ca63988bcd96af1c9105f242dc2054f624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=65d3109fda1247ece498303edd2555208de5430a568cbed671d4e2d5cee8fe4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXUKILA%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBJWTLCdq1C1jevQTSXhoAY6XdBGOCIkyvqDB%2B0tYH8JAiEA2ndRFGhAq3XM8IEDvMq8Wi%2Fe5SBmU3hqv%2F6D8D32RcIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkex1anqHBSlOVpfircA%2FwvN7jL%2F7Ya6SBUX9JCZkRY4idV3e6PqpYzFNYapgigciAiJu2cqfi3vxR0yS%2FdFrrwUNg%2F%2FnUwKwpoBQoTmt3UaRd5%2B%2B5o5en1ByqB%2BjmLB9EFXeuKvr1AUbO1ddW5kuL1kUVT3r1pJGZpE6l88mlHCHVX%2FUNOfLoznUWtXH3AgU8F486%2BHSZh2SK4wHzt9UNO4YtC3L9ErnLIWAPrL4izd%2FrXg1ewjAGOQFdHxkEvfLTZIzn3U3EEA%2BKcUgxs7PolHn8KQl98ztt2hMjB4EGK%2B%2BVCBMVGx36ZDLBPrwmXXky7hI6mFhqme56916nm90lLXD%2B9bp17HgERW4JVdREcxqhTen2xXPPoVl4aM0wGtDiIKPE7vJYnUe%2FqZk4lLLnB7R3F6zBhBQY4fLz%2B0%2BMZ0iA%2BLEETgzTDRszGSTaVjFEsaPXdyqD22i3Yl1yGpM41Z0qFVvy2iJopmKGW9hubgiG%2B4cHWi3pdwwkQIKxgKChWQwr4gmVmp1yPT8nJdIYhkzVoKeVLyoQYY8luVKBQK04lcrWGf25kS0%2ByukQty4LEtBU248BKnKXLzFhc3Kew%2Fz6kBVEuif8HfcILms6BYaZpoRvRqXFS7NPqeuLNvGMofxPWMZuixB9rMLnn3MYGOqUBj1ylFeRnTiC2Z%2FQXyGkz1Inblxjec%2B8%2BfMyN7rEcd021V1Z2jHFt4cHOKcBQ69LWfPZwVCMrg02h5xZ%2BPbcwC8Gv89ur1NmTa8QoV7SbwfO6ztdsC4wpsSFiJblvtgQA8wUdIkb1HDL847bf4fkSdRT8YLYe2mregokF6t6gZ%2FfGlJrzLViwwi6h5yGV7I96%2Bwrg5X5NGK49KJyM4cXb8aabRf25&X-Amz-Signature=15f53e88fd2ac0ca57cf62e1f300ab4a4ff086bf118354355e5f27a8eefd0f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
