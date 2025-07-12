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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=03cbf000caf5a15af866c5ed839c759e4d71a969b286f096dce8e995f4ba21d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=15d9e6781acfbbe6e005e8f40739ef9d91071920b51589dca9f17048be84f778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=6f401af6006a895df6dd96e235f07bf69d4fbeed84d22a239472641f2b036ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=462b020b15af16c9dbe03e19eac2d73d688848a69b0ffba0a3c96e92ef23a5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=68dd0ee59aecb3b36b467b0cd8b237eb2b17944b8bb740df0613df0a2d05948c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=23183c7dd303624af9e647347181024ba8e2bd3bdade8ebd047a48f94ef014fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNCRDN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz24%2B%2FaehhgjTt107XM6dNwW2xZCEaIzqMWQzvAslcaQIhAJrPXQQwvW1HDNYJiSHsO%2FBIVxrV6YCFzSFqZ3Ma7nV5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F6iHiZn8lOoZxs%2Bwq3AN1r1Z5h6Q5pXq7WhdwEgPzKw1LQ%2Bar%2Fk86DQHPa2z6yrRyDnYxmcWOwgcFXOysSXXwbytgjBe46o7Rp06I9WMMlSfE7IzvTp%2BmZHIp41Jihsz%2FKkfkxjnwqYrLQIzl4hmqYx%2FjiRhJ2fayie2xsVnzIEDGbJTQSr3Mumvq5bqQK4xTiN3NZlmV5oVzP6U6m88EhKIG9siyzPeubkSh%2FeY4ZXhKbhhscThO8yYAuobZfjgt5HggGMGEz382b9gSJNJXQsOIKUuGNuOFvZDQ12fC%2Fd1B4r%2FFKuB8PaM7RKblVb7wNICgDMX5PIoYwEe%2Fxh1lIAFvxflUtJcTIFa%2BxCSPiHwnAfjjWLtDEls4KONk8QX41Ro%2BZfGk2JKjzjtwQWL8sZQOG9FYpnEL5oCM%2Fff78BMJHMM6sN4%2F8k7dRER2IucJMC%2F0VGre2R7HiE5ysb81oHdD89f15fWhyOQkxdiJQZVfzpBSNdZjs3FCYknQKpO4VDsfMdo1eSwnB3wP5eUS7uityGXWuR1RlvftY6MA1K3%2FGbkRHK3plcUJJGEPaoDeEQFrc4dtEdDTLRDqe2xFv%2B3S7KdR%2Bb2aDAu1mgF%2F56KNu4f%2FeF%2BUjns%2Ft1NUvObndYQ69sJfvQ8vjzDz%2FMjDBjqkAUU6SSRYJz3Y5W%2BbCgn3GMYKBq%2FT35XcAnPkWUI7%2FdM7GE8TxEe4UyxiWgJWqWGbG26RU%2BX4aK%2FfKDMV0S%2FNjoQWEAVDUn5pHnxVEXWAyExfpOy0%2FMpL24EMjM8vnFlKvtXEvE5TFFVknEHudLURutCliEOGm%2B7t3ou3hZTUypdf2L5JFjtX72Z1Jto777GHD1Glg1g18U8IUl52MB9uLGEVyE%2Fx&X-Amz-Signature=e773888bdf857cc85f44c1739b8365cee8025bae25bd8d652d9f4d211b4f061a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
