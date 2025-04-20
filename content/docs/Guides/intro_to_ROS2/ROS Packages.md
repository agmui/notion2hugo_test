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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=1488ac88e003b8247e96ca3c5bab7ecf2bf5165a3e998aa65b53cf70d74a1d01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=4616aca7cee15eded6c7c795fe06e08f1f934ad165f23cc7fe05cb79aef50f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=a14b8a50668909541e92bca0f382e739eb5b58a572e0ffde4adf7143a3cc25cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=a09387393a6aa5f1995c982d54bbf11a4126a9fb21b1e990deba8a5279d61c41&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=ef31a88b2029742180c2859928c32423704e5a1ce24fc83910a4a509d84a7844&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=eebedc0d74c564d19ada1defbf67081cd8ae25c1f784231a6fd9c015fe25ac69&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GQQR4R%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFT0lrym%2Bhvw09pmcoGLIv5LcVE%2Bmam1goNa2u3gf1wAiEApWPKU%2FkN97pmrZdEiGD%2F9OoDl80zbRfEuf20KadflsgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxGUS0023kDw7BoEircA25mfpL0TfPO5BP9RZhd4nMAOGSxG0q6t9rCdAMKuZfqEpfiXYnYWWOcGtB9CXkFYHndEjrMUVmy7Q6gzKMUmiBZCqmPqdm32MHxIkTMqp4L1wSmMI0MzPo8k%2B7mZy9nx7Oz5AhaJquy0SI%2F49%2Fq9WQUPGZNh7qOKGmWdC1HRvQOkAsAHAM%2BzJslPas%2BLVCnxlbdmZsuRFMGRwP9ljnB9l4OQTtlBuhLWU65zkIfaMlPCdN9%2BSb%2FqoIKjiTh%2ByfCrnB4%2FY4v0HmPl7cQqa8m6WTRZKpgIoMiZPiwnpKwtlzU%2FD3UmPwmJlapyYnSgrNawUZjPSFlBib4zxq1EPRlWmj%2B6o4vJ64smM4f%2ByxhGq4wSO2EtIqgR8EXpya9fjUnEcMHj02fCh5ill3oIrfvyD7pdxDIOzhFzFzb%2FAUofvFVW%2FbfmJmXMyWElu7hm2vjzJLGFTce6Zg891yD4xWBwE6UycJNvvxESB2CNh3ML9M0d7It7ZFm94m9f22FEhhHEkDotVHeOm24%2BzTpN7vge6e6Fx9OG5V%2FUph9KuUye%2BRk6GKchlQVh93u34xosmDD%2Bgqbe5bN0LKIHWlQLwJsRAtsn4CF2laGOk%2BHOvI1whjnzL5EqeJZS4eKJqZmMLukksAGOqUBXZYeWGtGt%2B3q7ozZWGE3eyXAM7L3K2ltqFyCP5hOjCisA50PhSSERFv1Q%2FtKP1V4UxTBtmPfU4wAtwyQhYYpV8514H1qOJkKIISqxG1dElBIy7E60hsR4SwYOl4ZYucOC0x8yeMjF0asg0mtEVYL8XFisoo6soTy24F2Ykex8VuBKLU6OUy4GGy%2FxzrAA9CCSkehDGpVub8dtylTiSsWa5aNt5kC&X-Amz-Signature=0b1db565b9f91288674b4d4974ee0f78d9ea62061624fe4ca474d0c7e52274d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
