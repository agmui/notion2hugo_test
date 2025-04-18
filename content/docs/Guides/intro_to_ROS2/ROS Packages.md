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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=81d9a212704a6e69fde0d792e33605d5f1785569b6afc4e9b1292977305072e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=55755d6fcf30398e3f6f5492bc92faf0e01e04d8b6456cae508151ebb6b06f77&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=e8b0adfa3653664e152693b074b80d65986c6b2488145818acd24b46d62bcdc0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=0e4fa3aacef4d0ceedcc9043e4f8e221cbe5a9c812900aba06f6b352ff3457e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=39f20c957238921d045521608f8942e891d52e21968100b47befd5f5b6d544e4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=9ced96e0fb3015899dd5bdb959ecb5e720b0c855a8e2ba0c906b3980993cf40c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673IXCMQQ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw29b0OsRlVDvHPUy2Y64n1lrx%2BJaMMaFLK3kF8r6zqgIgV8KZ%2FK2EAin8A7lo6boIDpznZ0oNNdh9bBLqC%2FxfGbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHVq2J%2FVkse%2FjIdYrircA2GdKsYEiivU8AQsl38CPbb%2FjsDC%2FhpXKay5OMCIHF2hJGeDohzJO3wxVN9%2BJ0rygBeA9fN5%2B%2B4CmUfWJSkh5Lh7Wl8ebq4fbw4lMzCcJfUItwKkCOLRozDQl0pKK62kZ5dJdlfSt6ae%2BjSU9os6h5KKmUG9DzYW7JxS5Yxdrz%2BK7RtHCMFql7yT07llfIgBI8G5tsTGk0BLJMaBsm9Zb4jscw8%2BGTwoEvf2e%2FtdCzEFb1Gc%2BZrn0GygzJRKGaImdRy9hMYVVKi%2FBzycx8KS6%2FCoThkKYCWU%2BA%2B3U2oi0TJE5%2BV1gxidOdod6GBGuXUe5bT5I26y5tjEksBlwz%2BIZxtVpZSIoVQ1T5UVJw7H6zEW3PyCvd%2FPR3aHZAlmQqJYLpDshHIBxACO3m6mRxxEyJsRsh3IdnNDbkSE%2FfsYM1ob7EFl%2Bl6VfItUTRvUR2PYF46NV9hxEdKqQNYA8b8MFHlRE4nOuOvlIpjRzKgNswHVyWLzcNquSEC04ALDB3tRZWryULfTILZuAaCrWXTF2YOGmBjJQz1z29sUEzZ%2BM6bdHSd29p1klVayleSIo1AY4jTr1QvBmme%2FTPM9aQ9Ya5cyoeJHcgFh63OIet7tBmq5S3qWokEtMGsAuVm3MN%2BTisAGOqUBkIRTZ3dhnUN%2Bg8F5OD2FfvEOFTaf9Ih7JNsr48JqBjTw64vcVNKiyi%2Bm7KZGfQohP7xk8cBzznabK41tdD7p5SsXHmaypShYRBsUjgUj8XWOFL4NILoP9kZI4uA3vjO40wK0%2FN6KX8jYnc9U7zbY8%2FWq4oc%2Brl2cefaOmVLQSpEexKrddWQs7PqHox2%2Fc3MAHiXbO7VEbQVvFWNVGTizvNCLtWTo&X-Amz-Signature=30ccfeb2b081a4982b8a8498d0b9d443c195ab3efb9d822bb10c75cf247df130&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
