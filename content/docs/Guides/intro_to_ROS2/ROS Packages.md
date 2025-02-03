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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=d2160f051ace8dacf1a62f89c0cf74432932adf68d71f82b0c18834368e50264&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=3dea017ff54e4a07824f359cd4a587a89cb86db9f3cb7bc205c6f6e6bf81af49&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=03d85c35312de35145e9b3c44004e61c58ffad735501d7aa4efe1687866160db&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=e63275829009deb1dc2b84f5374b96a343738458ef19d6254fee6d0dcd00a88e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=5afaffb4ad8aa4dfb1e2b0497a453dc528850102f2a0245bbcae0fe2c3ede447&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=d8d98c182b8dae4c9c5ff4588fc0966dd131cb3b176082ffdd7033934b5c4d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7VHKZX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXYYkh8MWLG0CzLWRyy9GjvZ%2FIA%2FIlV%2FM2lapfnZnXAiEAh6AD02lEoZ1H913WoSzhaLzp5uKnVgdWjfXd2eczkmkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsQdum5%2BmdS%2BNTxjCrcA%2Ffqb8Y4hgIl%2B00PaQiTLsFIoBT1V0oZrXNZDgOnR7%2B8c28Nqjhc5XW%2B77l5Yd4gxiLd%2FNChc%2FV7BISFjYF3bUXne0OnpkM%2F6XQPgnAG6NXvkWw2U3ObfquD0OXyiIg7fKWZrLUE6vHJEFYwD8zilrGdJTv1yeL%2F0ezBdfnovsuUwj6r7iJ1HcZDMB0f7IEibrnyzipXMlVq3YyVWy0z%2FgqAGHh50iLAaiP4DjLDd%2Bhupesguc2llM00gfpUJOZpgFwuoSGYP6RwI0zzLqqUdsgcPAIi3HUQHbdhl2kQ3%2BBymJhWCF55c62etRW6NjQCYaHqvAtMvuk9ugH%2FW3AykjMHauVQPEg5N9rxWRRMguXYGeaxCOizghZGf2w85w%2BRMn1dALtosHxOtzls2YBs1XzhczRtciVAcxXCXMw38q9eZYj8cxiVPTSkQsn2JzK0KFbTNmZwvH2lZIGKAW6GuOWjcdJHV2U2rEacU%2Fs7CEpTpg0988UGrAhXlU9WaYlyTNvhip8HIABiYgmOC65utblTbOYQmArfNxziEimeRsK9p%2Fgo2UvcWh14Bhv9YNB79ombxOO3cxtOKfYb%2BVJn81LzWrOksVmxmguBzltB%2F%2B%2BZmmbG3nHdTkNcg%2F7lMNTm%2F7wGOqUB4VAUInzeMYH0s2xmL3A3VJJ70vBrOKzRAVFKLv1nHLRMXXsxm4yPj%2BKs8URp6snd6shHHZ0n61msINshbtbxIiLinctnkZJ8IIDNrD%2FBH40DVMwclCggEzgJA9aKV0jO7TzWYiENcjLmgdtPI%2FM2xcKwKrkTKKp4Qr%2BwHnFvwcWyBQ%2FCtQh2JIeReNw0yx6sB%2BXFaNAXKFtzOrwl4VYbLnL5lUjp&X-Amz-Signature=cf4466a2b8179250b0983a5d191bb54bd42fb71bf58ce081c26fa307ddd324fa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
