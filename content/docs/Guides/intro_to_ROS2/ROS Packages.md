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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=03707f96e37ab87a6992e1157e6de3a05967be5b04c00069425b1a394deb5b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=cf9f34468d363f8c8c4d6c4dc813a572f534b382fd05d2ab86e369ea3b8ff9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=35d672bee5e56e16b60d0de49e721efa01bfd5002fc5ec1d60fe39f595c5de91&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=491b976e48538d1e6d45ff3be138bb30c2850110b0dce008f0c3edf8631e571e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=13de80b0ba14957cfe3a84d366af9ea428c065e35704e58eb0a50137ec080fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=825fd4ef6e239b57797a3530bf73eadc2ac811f5652b7e63286602a73518a3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKAUHK4F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC%2F0K9FQXCejz%2BgLL1qss3%2Ff20mqtnIUzBD5H%2BfAe7MQAIhAIYB4O8nCvMOxTah9dDRdwJL%2B8G97Qairj%2FNtW08WKR2KogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTNfthGojnbuApXHAq3AOhlobfb3KPHWBbN5ZpPXR2XsMJS6abkPRcUfRmfXahciAgucyku9gD1%2BO1CY4s%2BLOwH2yBSN3%2BtzyvcHaozxdSr5KCrMp75KIb%2B3JhqJ0bVZqZsc%2BWRQgoA2Ni5Ik8%2BDBSBR5aAKVmNimk%2BszusfTPb9fwWdT5wrCcIgRDa5kaDx8H0IFe5t8CB%2BBQS0I61Opl9Ffx4gDToHQ0lmyXsYE9%2Bvmy67Bg4zxOehdj6Tz7I7LZ7RfUBz3a2StA4MLsnJXxnzZ7ka4u8AsPHzPUHFg8C%2BwOhA7xts2p1ZwqgL%2FmHEvmTRzwnReTOkjrfqaz%2BM8VZvKKy19WuMaxAHwpN%2BEn3TAvdQ8qB%2BtqCOW45HlS6wKxkQ3rVR%2FG7z6w4n1Eg2JBdlv6sZ9jEsZnYq18C7LNn1MiqrUPA5dIMMYgbHmXBGZDhCgMUS0Y5rKkN22hxBaiIgaAaj4j8ScluiC0b6lWWrx68gOVuXyTk1PDg%2F3KtmcCRpfdVr7dHjIbSMu%2F8j5FdfGMZbETLv9Z3z93SSeBnPKF0%2Fpjo1xcoqESjvSpgS6O7fYJ27nagcNbgWf%2B4AQC1JQBRZ1jLpQR9MiEOFEM%2FLRVe4i8Y7BRXm333FOB3gDTh0Meir0UA9misDDuqry%2BBjqkAXxelCPX3y489DKD7wKYsG0EFfdLgoMGlRsb9fuz1MSNV8trdDJ04RStEncpilyqc5HeYD12sFYFl2kuw23YXcJyaxqti5ki9ofixcHQVOPlgQ8VhU%2BjMZD8iSmg%2FtF17cT%2Bf018jJYnwelRlym6KXjzsh8mVbVwARyI4iUtX7E%2BvkJzBlDtyQxe3ceKFWuZdbKZJu7L8UpCbyGK0PKy9y94USeb&X-Amz-Signature=2e9ea63ea98a0aebd2bef2ed40a82fc24cd4705f401d54558d345f2d86237ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
