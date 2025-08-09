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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=3365ecda90a8f3bf941badd02119605574dbc441a88797dec9ab79a42608d237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=5968cdf62a781611a89a7c5ffd0f9d62068c42b1fed725e4c6aeb92543da44e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=abc2ad5a68cb2d30f3ab5b84511c3ec490a3b22377782ed42a4a179c818c9d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=ada43fd4af604a0410f2e86acd3e500f633e886ae819949c27ef2a5adb7be092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=e20c9ca3406f47179dd1b6dbddc7c481ac113ebba06eca2c5c521aece80a45d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=ca347e9e072ca23c4ce02958f3588a80af5ab4635dea01df8561f22c4b31f541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJYGNSU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvhezMWNQseke9N3amZA6LOxiGyNoV2dze6L0Su2YthAiB1mZPrNsxusPGuRp5T98erkBIMimHuFRxDPRxG3d48MSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMON6axyKriet9qXM8KtwDlHeF7eQEpDQYnP4w%2Fnr7M1rTkcsLZ1VVBka4OG5Wu%2FAUK8qCbJOW8harraNOr5gjArje39%2F9GbuK%2B6q45OfAqHBdJKgjDGyYuVmjO4EtWe%2FzCc%2BywyG1PrUfdYlYsKVn5zDFuXB%2FzqaghiPSXJqG%2ByBxWAj1jCb%2BNhfYIyIwlBrdNMi1P6Ajiq6sId4PIik6RVcMUCiyOLoKYUGDhceZl02q7aXnPeACj9lGCvDT2RRYyAZVKjfoMzFJq8yTHEbMDlsgyQ7V%2BEIJDSmei8T4vzvakMUdRf9QXgkApMlKLG7fcEIgZzhIaxIaTvI6Cwba8UgbNbMEvsXHYaXNUv8ll8r585kO19PDwKs2DcmFmFFIY%2B5yS0pRZ3K%2B9zTcWXFJ77rnndYjJFilzS7aS9jFlp1PBiGdDQCQUIwGW%2BzYfJwWscrhG38OZVoXPmT4AsXspWL2DunUPHs%2FxVl2f1oYHKI9fDpdM8jHAyC8l4yM1SWDbidnMxvbQ6AE3jAoWBbT70D4mA3Ei0hM%2FWZfI6elpX3TXGnww%2BG9Ld0ecN1f23ytEyJrmtg5i%2Bh0THDdxdRa2Zk1syLTywLtrhPlAmc46xkoB1TJBbr93ACjpqbnQjf3cTtd7kqTkuJEjyowgOHcxAY6pgH2NSpssAyD1uw70cGy4GrJLYvUkOsXY2BCEep2YbsXIQRbDZ8bmI0D0ZhHZ%2Bhr7osE3%2F9EzlvrvVjHLisBQNKhwPjEDD7yQvzPKCDtDzJkxl04%2FEsZ2ea0o0FaQp7M8Z7WUfFewbTvGmnq%2BKPmJ9y1BsghWjpNlme0WOIK%2BPkvy%2FzqLllxxbbnfYxfMvW%2BMMTbJEsIKuYDs1%2FpuoSqqu3Em5jlb9Uh&X-Amz-Signature=044d8960eaee0c8a2434c2b48b015f3ed1a049f939b1572a0b055f2ebe4f44c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
