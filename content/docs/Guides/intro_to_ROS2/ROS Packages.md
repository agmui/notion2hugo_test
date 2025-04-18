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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=8a546c8a1ec486173be70c9315ee51e9bb4ba8892842ae1fa87a1469d91c8354&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=1014d242694cae7ec788ffcb7152f8ebdf1d48c1d327505ded6e3e5a3c5476e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=5ae81127581623b48bca3a5d98ca4a6f9e70da3977e016ed8bc551881aad415c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=9cfc63ce42559ec32caf8b341935c4a8b68bbac2088553a64b9ab86d7f86b12a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=572e6157d00f5ae7efdb92861c17dd1c473ec507cf6e544dd4726edbf47534a3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=e783ff59a6b01661268b963acab9c1cb255851260db138e40e08a3c50853b999&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2MBM3M%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3939%2Bcw9C7Eg28qnc8PU5aR1MKKDrWkTDmj0%2BfJEQLwIhANiFqPcEPiIcHn0Ae3XwtkhHjaY00iFL%2Bts%2BKHAy79kUKv8DCHsQABoMNjM3NDIzMTgzODA1Igy9UuKcEQwKqx4LN2Yq3ANA4cJh2vwt%2BvyqNgoZI4xMhPcDXC4YWNI5DJjs%2BlvDJVgvtmolONdRuSyedRE7u8xe2zNXr85uXykRLFBonGtiaPIcidf7GkI00U4OOmG%2Fl%2BE4PI92KXQT%2B84X%2BMtlHWC3FoOl04evvpvAs%2BIGVRqr7M%2FvybFwtB%2BmlaVmlK0TERFiLkrL3aHCKqqyWdAuz3tXVIJUArNPARZ3NldyIFXTXVlSsk9L4nZnYzw4QwycOZIg0K46CGTGS%2BGgD7HATcrkCd9cYQgmrIt8m9%2BM%2B1dg0k%2FKqFGUCnaxztYq6SL8OlJ%2BbDv4gfrBhZQ3ItZsd755QlJw%2B8o7ukjXH%2FN9nAGRqPvQ5wvYGo7EohlBPfUCJhF%2FdIMl3NleKxia%2Bim%2BrnYUbUXlO0j%2FofX3GPX275U0roY8mDuaXARXKGkGsM3xepjAGwca%2BVGsOyQ9Br%2BnkBbNx86%2FOJk%2FMlEK5J0yYHWzjvmhriWgeMmZ2YAcVGAWbbtI8eQhrI9WahQEDi%2FP3KWSeCB3ZVrjDXgxtQzJdQU%2FKQZrnQEmLEaaZjsEes5mauY2XKvSzEPQX8QQFfceQCR5Gq%2FmjF82iZE0Szmt5213xOVQRnaowPTH9GmgVRC5bSpwa6feG5qg4NQFTTD0r4rABjqkAf13nvkab%2Fmp6djt83f4O0VSoTdqUSQVGRNNewJBw4hFtHDbAjbr7YtWYCeTd4ony8KxALC2nuwvp6ycLZxtC4ANBjeOFxu68ZzArAB9VqX1BUJvaSQUAVXqXZXdiqXZLbvnYTh8ElasMQa75DR8ov9yeRD8wUdEs63mKI6gAKVGPOPJ9d%2Fs3MiogIpcvpGcueX2VjOPZady0a8aLWZegPmkAOoO&X-Amz-Signature=438b40c9b28a1119c3eb6388d80625e434bfe5f993cb68f9f60e28791d366d70&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
