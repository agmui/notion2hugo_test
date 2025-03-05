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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=0bf51997f8c8629887663afbd694939dc3f14ef2626fbf85e5961f947dca57fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=d5a7224c779246f0960452a750e994af25bbd86c6e3d7f4bf452375e217772ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=61f575e0a175bbcb0b33b6f721b7e1a3936cd9b3f466e8e5c456289f3d93bf96&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=1e0a16493b52fa12c924e63ddde99859a15d4379e8e7371cad901cfd2940453d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=8f8325564cd608f9f887e1422a4a37e745a4e208a9d4ba6632c5d10b4f31d8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=bfd2f839989a0ac85d398464476bfd0f2c9a23b132fc1f000bd2740d338b06a8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRV2K4EG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPtvzx4ThEiVwtAIG38bA5z8hpluFZHylNiXXQ65BouAiAgoFs0M%2Fx5szPrTeHAex3BAbOD9%2FbSs8dd683UQrK1xSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbAZO0W1ksMTikbqWKtwDhbklJaFCS95fspbePYmbMI0yt9APujcsGHEQ7MaqpP02GOpwq%2Fq6racIL2r92PU0Nfum3fODUKgZ0iAM5LLKZ8X%2BzPT9uAAO60LQFpe%2Bw0CH7YLAyRAI0UY0PvucEUIvnz3nBeHw6Ure51BOftS4bwpG7cJFz5do7a%2Fbk%2FPn9D6OE%2BmiWb%2Bc3o5SYrcJH9grt4%2FMiuETSxhj%2BKQNiqRfCAarxpy8asiUAxvDs23L3YfskIdqkClowO1s%2FAXFGuXy%2F%2BI%2BY3BD56ZTEaAoqrvdSDYxNTxrkrWvyRqn4NOXaMS6TK%2BRIO7F%2BYHMAk0S3GqSiiCU9Zb2JmcKox1F%2F9EOwCBcC8zePKBWH2AubFTYqgr8dyWPsN4vGXA7Jcak4sN6D5IMZqyCJXEv15HSd3cS00utZoazEC0m%2BRLYdgbgo5KuEL5q%2BjBwVqSnEcecTVF%2BUhmc%2BQMmAyQx1KFae9TDBTU7zSv2bptNrlLYk03F3h3YIECD0KFt0vU2pjc4mmFbd7Y9AKHco3xeMk4cig0xnmK3gIVoLzxlPS0ws17dRHcQ44xHZOxyHEwLPkKCzgCGokhJm7wWYmjafloX%2Fli9t0HJDVG5FvDL6pW3OfZeDFgejTqsPjDCyi4Zjlkwj4SivgY6pgENE3yy1tAyFeL4m%2FENZsuDzqqiQX7mR2NgbqDEKFCqHQgH2oVrKccQzzT0sTwRuH22gp%2F6LXBLPtULgMF7mfVMdN6VKen9OSiPtl2xiGaG4x6e5J2aNApqWqtWurnWGqLkaNO%2F%2BS0KKKXzyrUccMaDQ%2FfU2wLkHBnmt4bAnSVlOQO6IoFlm5etrZv2o%2B4AQ2cPe4q7Xjw8%2FaMiQJrOlmLUk7o%2F%2BGF3&X-Amz-Signature=09568f5a2e6fdfbdc30064cf8186317c052ee402e66c3f806e658fc2b5a7cb64&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
