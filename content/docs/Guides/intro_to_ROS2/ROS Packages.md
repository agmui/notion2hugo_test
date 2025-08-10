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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=c5f81c33d8d90e4219dace7b6fd3d85c1a68242843de77b4c386f13439bc5943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=867900c4c92df0bc5e212a81607ab2f999f99908fff3b2996a2b3786d4896e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=52687b6a9db82e6862d974a363ada3445892d0e6fec7f1a7a6cfadd96c87bdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=e14dcbf827158d87a727b29f05d629926ebec4bf0237ba118985b5726c93c04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=a444914f2e86b6d2ae4dfb5bce4079ca4ed30b886fc98939cbb2e9a3b553198d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=8f5c3df3831dc32b8da9eb47304180cf91b2a854be35c32a0d60783e0b9a73cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MQZ6PCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW9wycnS0aERxSd7GNO3dFhEAnElcC1eN0%2BsS3TzEnrAIgMoY0oQ6SCxS7xEKV%2BbCBssCBU6a8cOkY2kfDe7sjHrYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPf8iBU28NqzETaYhSrcA8qZAQku9a3%2BZu6rumiDbL5zQTEd1OHGqEgMHzQH89kCYr3f6k%2FMisupcs4oCnQfgu0iAgRzVK6CPPyUbnPr19F2I8HltPEVP0RT2K%2Frgx9M2ddwxsyj0SkneZ2w8mSMtKFVX%2BLXN76T3VdTkB1WCeFCObnkuoAxudcCmnd7riOo7X8Q6fglWpOYkQe9MRS5P4VJxtkA55QPAnZBIOVUg20iTl5slVN5DrC6Ql%2F5b4kl3nM%2Fq8HeLMhwBApJK5sYANbQcu%2B6TRju7ag19M%2FB9eQhYC%2Fhdr56KWaT2bm3nPaPXHze1cpbf%2BOaA%2FJvtgk8cMwU25P22TIbV9ViVgoumedZRcYuWf2l2Sc4yRTdYo43qtQsdRcsHBB%2FC9KvLGXXHULALaKUzgei%2FkUgF7DPDJ9bH6CW8ApQArJwe0i31cKKHQggqGPAsjGwwjwOdUJp0ys7ySc6GWIWA3dE42tTd0%2FFg65fQJFJEAZlyvAL8i%2BV6BHFhVifRC0aZFvsp143NUwACqNxLmg2wmgVfCauoJihA0GAvop9CY%2FfQLqYVu2h%2F%2BklxULZqYSCkxdfbjDViaCCQYo8XJP4fzBtOSi%2BBpe4IUGcpAvEycJ89mQxc2msBMmit6%2B5rt86lsSJMIT14MQGOqUB13LpV1yKSe%2Fa32az9zlYmPkNOTGn3ChLbmZdUWQTmVvNKaFZtzLo1P%2FnEqB9cVQAcCHMwYm0YRXPal8560CstJcggnF%2BRVbAvMtQipGJ%2F%2FRnsz29gl7ORKyKUhdgswipfe8%2B2PRa%2BdjcEEYQjoTQCPyYfL5m9rbhHsm%2B%2BPvYznhew1DDisJls1%2FRKb9JpTYKOK%2FQm8jTSG3qKeSW4oJDS1uBgfWX&X-Amz-Signature=97c6487a58717083a2d1b949399cf7e768bc10e0a62ff73f72a68f2160ae2f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
