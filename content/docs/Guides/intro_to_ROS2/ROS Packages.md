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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=7a9a9939c7ea444b21a96deb123d70dd9e7150967456b434411320e49f3ac3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=7e02f10ec301e3805ca94d2fa246f886c7a41f28fa9b2fe5af2d594d7bee1ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=e4dd059bb9ddd933c22e2c85a5d90cd014ed7488f894073312a48598fdb1926f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=5e9d7424ce7fb7e8e4e66001c868a811c02afa1a4df8a308d8de15c511cb7ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=16570419063442fe23e10242a71427e504e65ee0bac6656c0d4c11c8c3d6541d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=5ed0d9c0ac00c3dc2386125234f94ec37935d0c5beb2206b9f9fc2e51a4d1c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOYO5NYD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIE7cTV0dISyrftVK3Gyc80tYyGHsxhgRJfjkPve5xfdwAiA2ZVAv6tY2%2BGwG7S5jXvDXAee1CNxl%2FKdz5%2BFFAivHiyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM%2BSZV12rtYwDE0BzgKtwDhZB77Et%2BRsev3hCdL3yX2conxUXcusION6nBCkL5SbTUVEtgwZ66HXuAonZimrBeLIehHIg5%2FWc6yt3XsEGTJGLCIzcxNdipkRZD%2BVrn9K9X%2Baf6JGRlTpqJE8%2BmIFmZSbLjdKTTqexf9ANFMMntnmwm0WwtR3SFhEFILP7j3XZEfW89Lxxl2R1t1ToMRn2LiqXBxUe1zdxOfK4B7Li1ciO7J%2Bd1T64Pk9ZGwM0bPZkvIJu7TxCxsdqm8xX0yOaf1X8LGPcxvCjIhVUzmpanNL36LK%2Frb1VsZm1SFY5KgeakXCZgvH7Vchz6%2F4lZiuB9bQ1w55gSVuywiXged7Thk1InHkaS4BYd4Dig5C9JLr9umFtJEA7C1jIZQ9rkzL5O03VgQMhxG22P1q8csTayzx27qxqs1eHJcn9EviHQBK3M0o1xGdbPd1OFwaPZ5oC6%2BLrryU2Kcc%2BAaVLIOuDDe5BIsrfZBtN46%2FxcorJCxGuZnz0KStxW3UKHkMirWSubyOEzGM6cK3Bkwf9YsrkgwUFUGvkWw1tb%2FRum8VnvCJMC4znmJzgGDhPJXck0N%2BJMtzQUv5O209Dtv0%2FW%2FWmTL9iv6bawpcgrOQTyCLLYdnuNhh6IqYDN0joVcBQwt6D4wgY6pgHSujqkr3SnQwk2MK%2BuHcBdAbgajL6757cCk4wuLwvFreXH84pTEsFqwMtLG8n73dMltWcgenv0%2BTYAsbPxWxLGMTxLiQa9CyrYq%2BBiMcKVGO5sYym0RVQrRKp1Ks%2FNOSBu7UHOFX8OYmrM6BsH6DN8qeU9o63jHApBe6XuSvhzWl%2FkJazSQGRua3EL1qxEcKdGfwXEOU6zUVHrut6XjnjZXaVdSNXP&X-Amz-Signature=03cb12a0d8dd48cd96dc2c3bba8ea6631fb046828d53ce78a29d005dfd289875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
