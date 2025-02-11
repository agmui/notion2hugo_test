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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=387509ad97aaaa4c934e7992a6e8f4515d26f0280ea6f16c0c883a8b8fcc8c62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=6a883de741fd22d3ce9248b74ac1d5b3cc13c52c60b7af5111ca9d3f4e62fa51&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=8d6c211fc559c9bccfeca4e366624e1c6f8228144b949e2cef777daf1d1ef7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=53d44304090084be2b5f43774c93ce2b431f5da4bfb55c20dc36601137736641&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=b3f3a2dd1c45cef17297e1b4cb427e6c22ec450871cc5d6cd87652134afad329&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=dac4b4ab46b4c56b40dea4c1222dbc2868168959f20ce7cfcac66ca6a48b9531&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KARVP5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9xJyMdbKkNZy6K9pHgX%2F9U1M1hH7gO7HsMMfDYLKRWwIgfChfifpAq%2BD%2BFxdSTMunm62u6LQ3cx8mU%2B7dHobtKpAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAatoDqpyEoTv5vySircA8PByUgflqCrYkh2f%2FtQRgDzorfOtZoKiPKHexhYlbB2ixAO8iuYrg9K1I1xkEJJcjFwJtGIfFghVCJw9%2F5Czof1HsKbnHHT9SxFjwG0r3SiPjZjzlFEj0%2BC2m5dXsfdiUc7GCH4WHODqO1%2BLkwg3kR8BTkUjTTZy74TJY3e%2FA5Ev4mM8Y9ug%2BufjTsJBnjZXNdDxMWGo8v0MAN5nsAC5Dx46wGM%2BZ1lar6apa1Zb4bLg8a%2F7PsPK5Yp4gIH%2B6IP6NutKlMltt242VyiBCN%2B8V4aOBUTfotdBmkk8Mmno59I0I0HXrC9e3WtX6ozR4qg%2FZJbtx%2BVnRAM6fKoNvuMV%2B0YM%2FvPU4X1X%2BZysJve5Cr2UTigM8p8EgczvvVzetMWtW01MfTEhEGXBbukYNN%2Baz7PufzIPPvBc7h80hV5qelNqO7E2CeuMZGopxAOz6rACn3dagV4AwF%2BvyYX%2BNRw8FCWEbL%2FtT8h08qf49krG31KOIpBSGR%2Fl8sn6CSWc8Ateu2z3Iq7Q7M8Hl%2BlU14h4eRU2GpHhFKknNRLswHuY24fM8ZX8nDkIzJdnxhin4%2BXNTj9OKuLcmTfpJQkOyMjTjsQl1QlESgyq9XARxsA2bpJAtzvplrwMGDXdWlkMK6brL0GOqUBDMJAUy%2FNwyBUcYfPh5oq2iDxx3mRdZRO%2FucYWQWu0sXSK51%2BXXmxcqJUKOq1JUz%2F%2FnCh10w1xdntI9DhXJAYbIwM2hJRM7VKk0NB7m9SHnUdZztrmkV51dPXiVhpNmxhQv6G7Yt9732pl4yauUx37kpQT0cpgOKMZyd3njQcbHCde9f5TCZBSboN8KJJma3LlbxKwt3ZDS0tHCfeF7D4blGMomhg&X-Amz-Signature=03a3aff51ed7f2e35c5a784757a5f5b10bb62c060763ccefc8e3b2002334effa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
