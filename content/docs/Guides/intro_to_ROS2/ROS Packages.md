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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=c381b12e8c4c73114187e43e815c0a8bba84eb4fb4ee5609bff1539237b956eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=fd646edfaee114ff44ce1fd82604a5b590293335bb1593b4f8b59d54bc53b048&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=6ef013349f933c5c7576e3101ac6ebfa5d293b3c8531f261da9993941d49e109&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=39c7068caa357d35fe5641d3997ba3047cafc030df1c6e6325cabec2571a4a50&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=890a77f3e14a13da9860bd312c90a4f87702cdb3bf5882cfc7114ed6fdbba691&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=4f8b49540299c68013a6432319ae48118dd2d51a9c00b6e28f4268228e83f5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGOMHNA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOpCa63GLvAgp4bHyIbdUSZJoudzZGIDmgkpe5LO0C4AiADe3rwnhi8pTiuqOcFb2oz9Hy3SMjrdDqty9j1IlHjoSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAJ7QiGp7fCaf2lTDKtwD30c1y5NXuuuXnQJ3eW94FoJmQeo%2BMXm8hBPDKJ9I50OUPhEMK%2Fs%2FSpwpwc2xhm1STkAA03oZmMm5YF4hvwvhVbYV%2Biikyt6xGVBtBhmDB88oFAOhWAQWLMKuZgsvy1Fro25f6znouQcl3akKONJpoS1pyNnne7EaEl4o253tgNVCShJuHJpB%2BJD3bq4JgESjTMeNZurf0e2tThI3GfkZuYkUNHRsw0uaPi8wOYKi8b4SpfuZLdR0hrDOqf3i9aIQxp5kEidqBqFfAFt9YhDrzTkDlxEnAEX0IKb2hShR0oYoASN2DuvL0rZAzM7paIjmToYrGsj6%2BqGDmdnqabJ9ir10ZSR9XD57Oz2iVNyTPKJeeDIPWOcyGF%2F3NpIkls9xYp1vsTZqPe25Yh0%2FIzAnhhCEZ%2F%2BmGbl3ko6Jb7cJHujftsVdvIs4p18J2oMYg4CIBIRbYlUdMbuo5eUEpcIgd0Wq%2Bci1CV0qVCU7ufukYwx2c18zOWawmMAxeFsZzk97ZwtCl4WGmYWV5YXtAIx%2Bc1%2B4HFYSH7PlvxmH%2BE5S9EvFoh9sOCsKZ5nkztqD2EsSL1LF61KU3rREMYAxQykfJidu60NsB9P1K73DENItltX%2BjVZttHmrJ56hNnIw3tnVwQY6pgFVmt%2BCMXSY0hpO%2B6W25IdLGq1C6epP%2FG1cpkcu6atVoY%2FvHMnXBRS2o0ATLiPKpcKVN%2BDonhVflMRYMIgrAN7HNMqQarbfTf8Br2ftLgOLRhJA82veTTfeXRxPnflpZnnk4HfVc%2B9fWcWPu5fmxKXJf5seP%2F7XisZM5SQuzD9h4ch8HwhiZiZuGnE9GRySCpIsdZ7TGmkYpIq6MVWb%2FxZ%2BdTm%2FgkER&X-Amz-Signature=a870ff5c8d86c5b0138a86af991cd59c0d767b645a3cb49975496f0d16ac742a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
