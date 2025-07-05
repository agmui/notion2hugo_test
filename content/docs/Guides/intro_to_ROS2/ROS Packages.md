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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=7aa08ad9f6ecf02ffdad85612a5ec6b7c751bd935c06b4f6eff4b9a1d973d213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=da8326eda6188bead861215e01d507e96131a2948c027b0ca9d25bbb806fa14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=bd01a52995bfd46268c932d93a52ce4d087211e299c9863d4f64213af34c7be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=78de77feb9d2e79520fee76ebff7cbf6d0f4201c004a5f28f6e77d7f8bc34e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=570ec4e265f778ae36b72f8c94710f19fe68d8ec394622506e4d0f212dc21e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=872393457987b367619f0a32d85bc0f128f5a094bf9e0a628899d9bb831687b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUATEKIM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T041426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHYngtoDQR4sm%2FUkIz0ZpyT5X8PCrk6pJHDZW8h96lZ5AiEAv7mZwpTh8U86B9ZoBjRflR648P78S%2BoaduqDFn0Ra%2Fkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFB8ZaOMqfBBjY4gNircAx6mQx8pp%2BVnkr%2BPQxM9jvBQuUfHlzjJiJyFe6Mg7KMylnuBZkniYU%2BL%2BEERZBwEulHLg3LH1hQsLRe6NrnYbofcD9h%2FgUjDKk5ckLeKDyipsXs3%2FbKJcmnXShNJDn667HxwtmbOPoY3wXrA0pID9jUJMmPC6MapwY3LMBAQMpWYPcp1qVG1xUChoa0OhJvXbqlBMcbWCEE1Nqma9Gg8Evc%2B6p33PzRf9lCafegZPzy3XM8lBvKeLEPQHvQJ43uPcY5lITBXSnYPavGsgolgodRlIIoZPN%2FgKyUQN89Zk9SxP7N7xvhq5BXMdn8fNms%2F4cL%2F%2BfJjjf%2BfaW4EEkSRRHEqev%2FGg%2FtweK7OY5LgnROvdmSkLycoLvSeVzIcmDbopBR247j3XpPxCJk4ueQWCUGLHrh2LpO1ZEM%2Fnc6Eg2v961TXzeg8rx%2BYLlSV5pTnR%2F7JyQ1Abc%2BIs5ySfecjKyVHPQ0Khjx2s23hFjuPEb3TkbIcgnP7nmFhEPMRL1vDib40d%2BG1GeMwcxo%2BMbr8Aqemd1ekICrREzhxKYW9rUQmL8o%2BBwBMBqULHsUePJoNsUf1zT42eNZcwF86ptXYgHG1qtlWTW1kMhXwKXEHEPO4tXS9uZX%2FUQ%2FQhe1lMLaOosMGOqUBkKwLL7ncW6yo%2BwPEIjrs4jwTrzB7S8hYIPw81ZKwX9SiGTRyGQgIu0RF%2FUbl60qMByerSIFqWRw15F3OLGwDCqj%2Bh2DcQv7%2BqYmZFHsAUiYzBSnAZ24%2FMrVt3ADe4%2Fmykzt29Q8AT4%2FJbbowKreDbgw6KbYAxU%2FygkX60XFBCbohj1DANoLi%2BxEV2mzgLQ8%2B1VVIplkFDF3EU1pW8v%2BLe56EVt2a&X-Amz-Signature=7e069c7becab48815dc8f75b38585a66e8224ecf5d0a09c8e9af249b7f1f102e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
