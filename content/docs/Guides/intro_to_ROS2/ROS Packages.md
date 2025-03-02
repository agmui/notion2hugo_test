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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=c824b87f3bff4c1b92703dff218d9d751e49aab2ef0feea167e3c4f0a4a35589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=69317d10aa976a3768fd609b57d46dde490d1ca88e418004e5b79a07ce7fc668&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=772edbf8ef3d83831019b469bf6f9cf86afc2d842a9bc04faa15e328230a4a03&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=7ac7f433686b373e1c130f72205279be057eb4d54156975948a0b597b8843439&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=7b2e9013fc34bcaa049e54e3b7474a65bc1498a15cb3b5371761639c6a0d2fff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=b5745dcca3685de42bc5a84949997283aa43d45d5714e4bbcba33dbcf66dda40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQLLYENY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCRWE8t2qOA1cELALV3y6vLY9RljgzvIFj8LFhwRx0ARgIgPlujrnlzKHcxkBuTy%2FgbRvkuEOOl%2FwQyuhxntHfym2QqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2WYj22iW9747IyoSrcAwfhacTH27cbhu9CyzqU7yEvH2Jibvkhb%2FTiI%2BS5JuWslM14wTD8nyv3NkbA1xpcA%2BEmly9JBGN30pqi0Iu3gRM2OggNFapnYKKxP6EQyxHVrjGspkHcmje1pALPDgIQbT6tLx4onRm%2BbbyJb9kpihomhqDI5n2z%2F%2Fsl1rvgT43ePmO3GwgkYx0xz2fzUdHlWEgEZDvvcDPWTkdskgb7%2FZQfkNgtN7XBNgZLBq1k6hTdoO%2B6%2F8vs186mkhOUOUSXgEXE41yr3tdDXafQoEFHYBdRDY%2B8wSorTu8IlvgySRz2Odv6v2oLEWqW45Ds5lHnm5Eu79mIgJTpnSTl%2BHDVxZM8nHVoyMarHAJBlC4BVuECFzFTnDz8hyWNLzAeyh%2FYlHogeBHXaMKoa9Qqead2h0dEyplSSNWijqmtYqFdwKhOkELSqVIgAqqGujJmWHVyCSEthluVBr%2BIu%2FKpIix2JGbnGAsZvdVQYETDD1RkOikTfvmzBNREo%2B90Tr8uk66UFuaT8P1Rj0%2Bx%2BzBnZyS6A6HcH0y9L4OKq9xvfzNLTGhZ378bsDJLsInEdKBIQ%2Bahsw5MvXIYcxy4%2BkZLh%2BGqH6dGV8KeR9hs59WcSow4GqcEQPJh3MoySJ3nMucYMO3Xj74GOqUBrpr6dac43pGxRU5vr5QVfL7IG8pDY8myCODMExtBYAw8IM6yAI2eK5iyyz5BBn%2FyqpV%2FjI%2FpivGhRkGBRlGU%2B%2FNPl9PjdR9B3Lj1ro0kAZeM%2B8hQQRkjy%2B7sS66dLlv1b6%2BI0NCv0Wtruq87mOwGxXB%2BIvss1wLRAqKDnBvB8rHlcgNVgoBNHqR3slQ%2FMIkaP9cLcOgZhym4gl0MaNpOjue3vf93&X-Amz-Signature=064970ab19be4b5f36e29dea19a3842a4c507043abfe4a388cad584de2eafebe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
