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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=4ee69012eaf508f56e44945bf84ced857d6c87d1a8f0e5c18f0e2c078e0887ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=faf468a29278dbe1bf2dc33ef3a5923c2c05fbd575891d051b373fe0b981e6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=cb8928bfe6567844a8e2fdbe2e4d56ace14c06aab0af53f48d1a683060c7f6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=8bb690690cebd2c67ba86509237bd0c83f7cb2c06e1ab7da59b0215af2407f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=dd434b3c1ee15a51ee2bcc0a0e414c04eab9936bd5ca3bc1212cbb378d6abb7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=832590a46fe4e89629094caec7ae70bfa4a6c7bcaddc3096831a9b318d3bd47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDDZBY3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEoodR5GbltphnrpBzFYjUF%2FwUUrHALoKOmZFg5Y2rVyAiEA09a0iT232j%2Boj%2FeLRRyZkaPAiuvN4FgntQrpR2Q3Z2sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWX%2B72N%2FHyqIazkBCrcA2gK%2FscBwaks76zV84Ktdk0R1q1UvZ36TjxndfUIMMxGbjuTKjwVtLmn5wOPfowqSi%2BK5KqxLm2z976gMSOk7BWueekztONDFvv6ZAMZl7VQInIm7nm7j9886lkozaLRC8QL05gkMqkFeS6kkSHWK5USkr8DrcBUgJkuqnN6y%2Bd4KVsn04LLoA6zFek2U3H4bVvs6Rl07wUpklp5zDKrXR5lEazEeZUTlt6bmzZH7P0ADW1Lhhv4iH42ObQy2WQr7TqM%2FZq0u7hqoSqJDcK3FZJdO6DMe4yrlmaE8HShBmZuU%2BhCA9o8ZBzpnRrDFE%2F54Vt7X1oxaAh087fvSzY%2BzrxQShULb11UI%2FThiIqaPPGEV6ylb8qqGnfk9dnc6c8f95IC1cB2eqNxf7duk5DRpjz7fQR5vr8M8ctyiz566HVJJQbgo6BKDCpaYsJUIUwbuj0cPfDdEZ26ktCnI9DNmxu2IouTmcI%2B6aQMtv7jOejKIfjnI0OEfRDLoqJMehc9GhjkNP4f7G82BhsKVOnbe5SV4kc%2BK662h2R6rLIHwzqkS8GS3szPIdbQnig1Vzj8S%2B%2BErjLnQO81RTdxFGtzfbbl4QCHOPMr%2FMk6ofhbEzcQYj%2FE%2Bwz84fGg257cMNPxqMIGOqUBxO4YMiXku47QTDwNZr5FAnFs7eqHzhOLx2KxMMgcXWzmz5NMkNe4q1tZTAqsE6ocR3WcEmbiAbMtplm%2BsCSVOkCdow%2BzCvOFlVYBes%2FSyHNfWl%2Frl0trIznqu7a21GqozMEHBimgMtrhtEB21acwYQZUjjZ6Ydj4ocC4NqmqvE7F3awNP8kw1Mrd8rXuWRYs1igf2iuFxGu0QvOdN6ajOYuK6y6K&X-Amz-Signature=5f04cd9c108d2e4d9a46f0af468ecebcaddedd9c773408223000a6da4cf5547a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
