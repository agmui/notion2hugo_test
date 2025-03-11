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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=dc9a8ce45f1a49b92f676617d53f9d29de06ab75d486a5293db2b1998679dcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=87bac0181ec8fc503c0d9d56d2082a8bbcb1f6ab5e567ad2fdda73fdf2593eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=26bac5d4fbfe9d1a9bc60b3e275128f609f500cdea0be0a47004e12791f5737b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=23442b12d49f9aa47e0da2dd623a185208b682cd88c8d445312219533afb9d75&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=4e0339414922a6f88a29e2e3c1e294f9de9b79710a5f797f9356b250985ed519&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=bbf647fd4d2fdc9478ddfbc17036b3c94ea75c790d9456580f0ae5e7f88d3ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV67LPZ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFstPsjicpEISK1TW4S4E%2BxJptsKdCy75KgTs85ZYxOnAiEAjOzVqSFoUA6OwI6CDQapvNBdY1vL%2FTwZ1kFxcyVdU4UqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0Vc3HkBpOj%2BFu6OircA9SMQa5QVDw%2BhTF2hz%2FBzzqC1Ky6ft4yOuxYIv9C10NnaAmUuGtpafA8z3wImrpUNHlZO%2Bau%2BQTT%2FmplXLnrbOebWcfQYobAKr0Vch6BRsW%2Fle5s6gc3KqE%2Fc1WsQkVdg9MDYJqGlBN7U%2BdnyJzENpi2YdcOFvEJJczMe6cesKC5JXO97tVtM2NG9MVypThHDEDzW5It3do4OYQi0RX6zF7%2BGe2lmpo1hFz0a99jZX00%2B%2BWi3CGfe1l1U%2BaPd3HxzQ%2BtSWPiOIxQNuwM7FTtJca3RgBb5996fOkaF1wOVteqWehdbTvjKKFIV5MyRJJM7jV1HG2N9Kd3lp6mg9ElmLNtvlD6ia8rJNrqjYrIR2U1eCciybBzfT5X2QaHFUOLzk5FUmipHXCwH6u2qCFfutjSIU%2B5xadTHzikCy%2FfLboHdI4mFsjjZGYyPnjWCovyA8IPzLvTz98rzSl8G%2FNTE8mDxgVJGETFMsKxC%2BkTryWta39LiOjLIkM%2BW77bKpqzHsYrJYMX9S9a7iOz8rlbLpIa1%2BMpFOs41GCpXmKoNoO64UPjjqGZDD7IdaS%2BncRwpx4JQWDynXHCCsYTGDdyTHxni5NESKsij60GEwgfmyNXFVkUZc9AWBuup%2Fj1MIqwv74GOqUB8sM2vWIKHDJJck1ByUgMOeDfwZYl1aahrcyR4d1wrK59b9rQX%2BFkC1L3dIhgW%2BnJJvRSIHn5sX95jOFDojwQU3mv7lAwaIl6vDHLiGcZ719pes6nO3L0hHS79vpInK2HfkH7A%2Bxux57Ul7tHWyklho4GZy3oGcClinZp%2BQ5%2FdtMTpuY0EWe%2FNv%2Bcl6hVopzcP19kuGy5P3dSGiE0qpMdId8s6vXd&X-Amz-Signature=03309b7b8c8b8ddc64d124bc312fef3e1e453243f86bffa66bdff3ada1204782&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
