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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=99c092aab844eeb0e195d755e1f73c6fd4a4e157885c5a05bf0eeb6eb3b0ba7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=7b13bca79cc89b256adad6ddf04422c34d8c00afa7602e881856d321a2a4afe3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=c1d04cfd12c6d4022a41e133e215fce6ce704c47ccdb16c984161a9a0e74410c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=059d2258a21303e22b8bc2525bb5d81cf9f693a4f8281d987260a3b47c7f9300&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=2114cc08b2a69a21365249a0e4b159a889d384765cbb48c6425472eca81d474f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=d009bacd3754596d6f6b9ebd5016b062406b63b9c8afe4a8fb8ff0dbc3b8c6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q4UXOFP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwTzicX%2F81lhss4i7Uo01zY7EqIfstcjcTezNIOTNTKQIgBKD2Adt%2FGFbeEjFteDNYz5JhCIq%2Bvf%2FkAUQ1dw7RG94q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAnO0gf8jxo4pWuJfyrcA5AC3jjFqyX8l88FWRIAEzpefLMSpEBhZyfeXNeYflbhKUl%2FcSdfKmg62JUolF1RBLxdqlwtoNbXRxvDcfZzsipKnlBtVNGe7xkAEwA1BDUSWGOCE40aJIHCbSoQzTqg6RKkR3camoN%2Fu9aYJGDyM9ygZ0%2F1I5IX1heXi1nfi2WNiGlp9IqihcXiQMeIJ9QwKipVBsUNzsP%2BTXn%2F3RrhFkuw4RrhAFtcxXOQGXrBrku%2B6yBQbxUGcwiENCbavCGjbVpmMBRnqox8CMC7Pi3xLOb4fDAPLuu9gNjxrbaHi9KrGECFRD8sAhLIq5EY3CHcTCu4YugswYG8EsTZCAF2I1EzIjT%2B84ZEqX24suC7T8%2FiMalCUZPlGxUXp4Gec3kNw1z%2FP208EP8BOt8aTVbUS%2B%2FQcWuB9T%2BpT7805569g2LkjwhJi0icPgVTiOFfIqEkz83k0PKaqdWinrOYE2KJCPZIaaCOAtr%2BhknZcYEUnbEkoWthGaPYUubNKjM7kww84UEB3C7sQVwLt3Xhimiro1sy4%2F4hVJk4NnPzn21CtRy4x5QjOkRYY7osspq07MogzJKEmTjT92F92E2VSay8u48WWfFwpz%2By%2BbRpDJm8NtEDQ9jap6S0nLlYGdFMMPn%2Fmb0GOqUBlmblmX3gtBXn5c5IYiDWvkrhVzCi9jDyZ8oPKaYiESxMG6bFqeIUxWVA5jHfWcTt5XIUTKTEPFs%2FmOFcdWZyaojbAljmD40ayKbnMCGt1ltOXLbmUp9jVyIpNedDFhqh8ekEAFmjTKzjW4tGUQzHdl8hdNiwnTIm5ZSac3knFKsnPEv8cce1hI52%2FD%2B6kXZwN81S10ol0t778ZXzNHweAmeUR%2B4O&X-Amz-Signature=847024017539ce970ee1aea5ba71ebd75f04b85dc749ceca07bf0bcc67e7103b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
