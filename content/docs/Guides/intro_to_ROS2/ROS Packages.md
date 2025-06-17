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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=7932b16f71072327ced3d9aea72237a70aea31da3ff8d36f0363f77f672e3c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=f1ebb2dd5e3c5f840e874fb53d9a9800cb8391e906dec2c20b67149141f08e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=eae8a965b2858e62b91f8bf959524a82065eda74b8c05e7b4ccf5f8511253134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=495cc00150acb90a2b0c17e4c1aa10681c3cde4db2ee9351a03f861c3cb16133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=bb40e21107620df5b7d63226fb229e2dbd536d141b1cc2cfdc964a9323f341cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=3fe3832b8f4fe9c661d0f10f32a01aa8dc8f0d181d0fcaed726e8b778ba5cf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLH522XH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnRftSdODXFNMQq3x7wOpZgAttBTQyLUD72HgRgZjHXQIhAOZDKaEOwhNf7tc0e1DLe%2BVgE1rs7h6MLqPmovJrQqxjKv8DCH0QABoMNjM3NDIzMTgzODA1IgzG59HfJreKNssd6%2FAq3AOkrB1Brghoh2YkiheyHCk%2BJaIlC98lte3A2zA9FhlDr6edHt8Rr1%2FsvyJYegaFNCrwZT7IpHNLPdPOpYlOskUz783TrzbE%2Bi0VpfhUp68GchpwnJ8mnmuV0C58pPAjTUwJoaNcYM7TGVxdjzNGI2rGFdBZ7kkIELIGi%2FsS82PDvNQsEPic7G44fqMw7PKDWYkmV6EfUCVYSJAfP9loKhm7yWlW1y%2BF%2BonwwrmjEitq8IDtzpXzDW8IpqQa7GXmT93tjBuGYoNqeWwgI5bJ4%2F4sHS1PZ%2FyA91E0sKKvjjpFc7BXzJ5b2121cfMOtNB%2FQOgTProJmG%2Bthlghfx8RJehd4KFWsXlIa8SWUz7xDvnn0lxP61sjHWy5ZrImphao%2FeBSxavqDdzriBL1xIdJzyczwJ7teDQAsP7BAJmGelJAF7TN1Mi2PvewNJc03QxjrWbtH6HEUgRPGmxfTgWZXpRsaQvJ3YOXlbZ4yDkm5T%2FQR%2BiWa8ZYq54mrXDRjyYO%2FBKEx1s5vdMKQYT5fKRT4CBt0LoGjrVQIYXRNmhsM4nilXwofnwA25efkcNxVcvPv4sVO8JWWist8dnhzXicEkVGZ5KwOAKCCKij37PIjnmLDcYPyL4CvEINjqiVfTCmicfCBjqkAb8zWPt7PTrn0eAgC%2BgfdOIdPa9US01ZxOPcO4qYhwrKbpNSkGyjcdb%2FEbcPOuC7S81Xxkfbk783ei1eTQXw68Pbhz7r3Ea%2FAos9xtU3qB0FceKPXdafAZEtUjoRExyv2aBY8P5G2ohYwZRHs9WzcwC0R5qQrIvKxWVexnsm7auHPjPv1GcLuJ7CbugfDbP195viiz0mqG5CXLM469wQ%2Fd8jaiq7&X-Amz-Signature=b235a1d6d20bcef4718806730ebf281e9213d0eb55bd80f1b3f7e116493b38d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
