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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=df4f6696cec40e9d664916eaa5253115cae18bd631663baece39b8a95243350d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=c4264c52cd92d8c7feb6bc591658524f2186c57d4aa59bf2dcdf53035982e50e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=e10bc48524dde9146434e6a635413148efcd51476086d5dd1bb14e71a53e123a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=ff113ddb1d2566497475b86b73a274b737d60da680dfba752f1e91babf4ca575&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=f33213c3baab914034b7b9d0b2ff8ede2f2a895f75583dd517da24f24b3d7625&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=27e34e6d6f7f2d73b585c352b672b585111659dd6a855373061d303b2c90e465&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQLO77W%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCm%2Fj0Va54Hz6cc1Z52idz2pCGUYse2Nn7qpTY22kLFawIhANm4jtpLoRZqud0lfiQF7zaMsbtWZCQH6HeFqT%2FJnvITKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWIOv0q%2B09BwiEeXIq3AMClBYLzNjFUIFWwwrHNHHXHkonOrMv9YOiSdHnHCVYlJTNYxFA0OjT04TK%2FTcZ6%2BoAhakzbCIPqCQcGvLE7HprQWVVCFqpLDU9FO3ugXHh3QYmwHs6n2F6Zt4F2hB%2Box6jhIH69e28n5cFd%2Fyewee3KL7TsQT6x2OuEX2IO%2Ff9lgxhz7LS9THh7AO%2BoJL1sj8ZXtUlP64mJ7kCRe7EStend1tAIYnpErqi6q%2BUdq7wMV9k5crzLXFmlRJPMhuAj5n4%2BGoRHhtKGmB95Kf%2FnGdk%2Fc%2BW6wjKyVIPHChB1XWYy%2F0C0FvcuNlVmHkQMVDI%2Bh3GHmCTE25Zr2hZidyGGWjkNHg97MDehKSuDRN%2BJEOlr6CzxuuZ0qYJGv%2BMREw%2Bzj%2Bzp3QThhtC9vWHPc5WN3o0pUxCx4pkDVpYixmzWWvpYnceRH0kRlvooCJlZecgFQg8cq%2Fh%2BD1t3gmDbIlHWo%2FcrW%2BGBpIbofeae%2BHduJrcu%2BeTEVyNnb3i3Wl4Tn0ooqcCze5fTFdbuw7fRLJhIIiivxF1iQOwQBtUxc0wiP%2FZRneh%2BQr7FcOFfxfenKphy%2Burhr4Z1bXyvginVyrx%2FYRdO5G3GGKsp3AIh0rjQvC4kLi8iidjzDXy1q4twzCBlLrBBjqkAb8omYHYU0VdbYMu9PsiKr%2FGNI%2FyRyCHGodPMw3Aa84EUQmHfLchVaL4mz1wKJiJwf8zEG3pKz2jWKqU5s9Y1rCy8viNhlub89TYi4PfYYX89dFB9C%2Bmoo9Uq4YL26uzqfLFSf%2FfQ2uVPucSrG5xyxlIIMMaSXJoIDn5OftUGBr4Us8cgedHfrM7KiU1uDWZ%2B46d9ZwRtcy4ycXhGpeZQliAEuCR&X-Amz-Signature=33c5c880632cd650d8719d6059bf07ae3afcfcd266781145fb266a50ad9a955e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
