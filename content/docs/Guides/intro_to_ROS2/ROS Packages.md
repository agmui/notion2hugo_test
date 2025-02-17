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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=4d5a7c80db1cf457aa0f530b5fa614a6c0f7d813cd9cfe7e3d46cd3464d18680&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=159cc8f608c8b29e5fd263998032ec73ef9902934c929e0c444c85036325b366&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=c56dbe1431733c1f7fcc6781be5fba54c5342d6a5638bf5f88e8fffd2c1a1954&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=b9b2f79e605dd0623b12f27f0cde31e38233de2a2373ccea8f12f5682a815ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=7e25ff6b6674449ccb4f597f27b6e98599afe551e681591b27e9fbf9d22bfdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=4ef21c1c1ae02b1961f6e71025e0b9bb9cbef1aa3b84dc5eaa2e7d0f9129a0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHDSCRQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIFPCt2y4UXzcmOL7d95ww1ZiJN55EXmvtL7f4VUMm%2BLSAiEAxQoipE%2BiTJk0RxxDf3128fh%2FcD%2BmCikgOMS9DUIuHowq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH%2F801J7tG6%2F3GiXASrcA%2Fl1Ykm93v3OBtV4xRf0iAwFcjIlA6MyqVdjuDynHFxJkUQs1NZ2cXQe85Xi9kM7OaWn57Hx%2BUxo2PHp8wP%2FPVFPUKetAyYu6jR6DdiIGU3ldQc%2FNAiDGiZaJM7rOFYHcNRRjY%2Fi6E%2Bq6mGe03CJckH7l2bJVjghmo3HFFPgcnDktWXmVkWI22dqCE87htA2%2FOdDPxrZSueeOt%2F0z9yaNSV4HVtk7RhRheJtVozXAy1IRnxt1Z76c8gvii8naFjzQW5txeFbj9WtCF8iXesDlkbIYMOGp5NjgMriCj235cYsReAoBIXw1qcwQDsObiNsaT%2BnEcHdrsxcjhSy2QclJ7MyFmtaaRRysyDHl01Y5YRrsUSLilNY2sHYFMKAQ5%2Fwv9RbTXRPUVGX1%2Fv9pnGZLMbSlyWNe8oN4yKCkjTGRegVbOBfWMcLD5k5OnycYmcKA7uLMHI6HdOug5PIPqybH1N4%2B%2FL%2FPDOEerRYBXHjuUmgDbTH3bTAF7GLPlO4e%2BGgplp5lZqFWsa%2FYADuSU1DroU%2FRHuwSXu7MzaDQG1YQ1BtmM4NVzkHX9jUrpwawgH%2FwzlSYiGJz2LVtrLR21QALWUFkG7EiMg31HSxljAy8pASsdaoqk4CMETX58x2MNj5zL0GOqUBjecBbzBSqnY9sh0oaO%2FZ8sJA61RYDaWrTNB6LcY4Pku7gfbXWQkk6UyQxuLHUYEWdkH3Lgebf9hhs0%2BMDXMrddYvWHMbk%2B%2FyNf9gsKT8lACmExnE0lOIRlHI0Qxg8X77c4W%2BzsXRmi8Q0QQJBpxhftWqwOqmKQDV%2Ftn9KctIVQIV0fIU1Nh2Z4uTt1jlzCc5GdFQMQVPkukg06AjnSp9wvoGTBP%2F&X-Amz-Signature=f44c405bea341e7bda3fb1867e501d2481283ee6c07c026805c825c49a483d51&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
