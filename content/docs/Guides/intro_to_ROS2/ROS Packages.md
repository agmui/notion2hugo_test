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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=f6a9ef6646bef2ca25dee37372a0cacae3a51f959cfdb48c01cd85fb8a23aa13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=d6a9bd815f12a690b990ba455768b924291b12db26c3996f10a5dfab7682a2b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=75a385e5bd402ebb8b6acd4a71b8bc0ba82c9a711c025a1a184d7ba338674f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=bdba37b1f41b0061a77224a4735579a8420c21a1040d02e24a899b82d10c5934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=79b4165388e0565d1f41c8a7d20db8bf06f0b401582b2bd05a9f03bfdc92fffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=b2aa19576eecbff3122c4f9d835e6f0f8898ad08ba12e13f0cf3c43e51ec7039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3LQLIJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDO8UIzC3C0DNRkFgjDMHaoqvra8Vb85D%2FU0XchZp6m6QIhAP7ez2l%2Biev%2FWxDO5ZkW4UY8Jua26KLrLHqcdoBDb43jKv8DCCsQABoMNjM3NDIzMTgzODA1IgwJJGsEqYnvcfKvc9kq3AO0NUBtvHqNu0%2F%2BPxx1GaBaMgwjPj3uMtffn%2BD9joVJkA8aQzHGr42AAT2x6Wt2GmJOxhSVgWkuPk0qkHoQwW2%2F34nwwxF%2FTeLZ3hdigR6PcTYm4AEvBqfQyU9EdW1Kh7%2FOS9Vi9mVjHqwxKop82Q5bGSYhOyywFWZWQb7EvLzJcNxhtfcR3TOGJ6m6fo5bjpsrFijpYZCb5oiY%2Bm1Ah8EXYAXV8vfMyZz3dlUAp44gmCGQHsWJodi6IvxQxtJSMRjp39s9p3mTzx7ect1d0bcpC8J3YVBBAVI8WLdDdymDtj2BKo4PZc7BTwpZs3OVzHVZg06oXKJq%2FN3oyB%2BykaWblJBiW31GZ55t1ivB%2BQ17t6gPnQelq5Sff7uF1%2F6w7KqRwtv6R%2FnN41JD4TuhCsJuJY28vgLmHT2Vcio5LqGUyz5R0IcwDhU%2FALVnElZ1b96KnsTP4d%2FJL%2FCw5UzeS6rRjCMbbLRkx8Ai8KLuxharCErFPipW3yWYyhdWwFDEmVm%2B0k9LxjWqff0qZ4Xz2fbZtNHkuvEXIIyL%2BkLYFK9Lu3n9gevRMxUWezet3suPZkRAcD0aq87yY%2FRokkAOosmgzHHqdZr8VJCLtii2%2FF0C3zF6yf2z3fBx28WhLzD3%2BOnCBjqkAb%2F%2Fn8ItVBTaM3JWlfHXGSOkLMADuVC87ZPJfH20SBQ3TJhKsFyOWT3swAQY1QTzJweTYAGdfzBAy0KfYolDRw0mFIqyYrQps9SWAh8Cpet%2FtQWYywTFikcgQ1BppPuYSN3F9Xu6ap7ifleUsnnzQzQA%2BhSMHL4IoxyQ7c0RKsGl1Gte7zdIAPrpmBnUN7ZSbjt6b2bOuKqQFO%2FqplC73E7Y1KLm&X-Amz-Signature=583774dc743b44b44b1ad1287241a446f95afa399977c858bc26744e9f5ed8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
