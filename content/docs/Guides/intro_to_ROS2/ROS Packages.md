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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=aff6f0c49daf714f569e1576f1f689b94ed68f6a38f0e8beb96b34142c6752ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=f94f637741f9cdd7cfddc2064b5d685a7e4097ae47703da09d23656ecdff4405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=5b138d3efd31ec237683589a12f924c436dafa5750d2a3535d070746d34fd800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=cb7c440c1591b69316e6b3f96a1252cef04b6539eaefd2fd218cea19259cd4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=7de2bb1a740e3f3a53df308c00815511cb0d4e01d4c09d21286a06875b8c2a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=30ddeb04f12e816b7b4c028d9a02da07870305310b2277e98835236e8bacf043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLODYBTE%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDROkmJVmmwcNs37I8fDFgIEm3oP4byVj4%2F9%2BU69pr3kAIgKE4o1zPs9sZo3%2F8nZaJAdPM%2B82ckDPYReX8djUZcxUAqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEUA7PzBKwG4e9BHyrcA3i6L2SafxaKT3mHum44lNeVXD74%2BC5vZsrOVdyk6QNx%2B6rFxZjDX1G4VqTf3oeUQA2tYyflIrdbiTluf34mr9i5HcHUpYcrzy0W2XTPD2Ih9klf5sxxvpJWSs1No35epYAbjzEeiGwt5uCj7Hon0qDmub02gUETJZqyV7b1i4GN3EnAbKKJvgC28ongU0R1jDgWMwyV7F4ZhTUFncKKHPWIlbLam%2FyJNlvFw9Fz8QET9pZ5S3nBQMOwIW%2Bl6r763MQk6lcX45Lvar%2FCT%2Fkf1KabG0oAPlmatbhUVev%2B7yjIAq887FOYHn%2B8Gts%2BXMtBA%2FgOt7X7cOb2bOSudPbuJoJcQCkEIaHr5mAG6PMfXzjx4862v4A5%2BrUGlpH3DdMY8YH8jgoKPtbofAskmEjW%2F8gd8UgtbRICvVa4a%2FlISbX%2FzeV4QddrAPdWdXldVKmeJq%2FxR5Za9i%2BAH%2FUZ1mt%2FbWrgmZbKvzyt6ExulTaeEuJxrnSR%2FQsqdCfIHVsnRoIaYNp3r%2FSukwqdWb57pm5hmMnJoGFg5ndNw1YKJIb%2BCuovGF%2FYs8Vdxe7Albd%2B0QMQlGwGi0OF5knUU4%2F30xeGUB0MBkowovw7aTZfiT91VNWQcNYOknKEHlkd7ybfMLCws8QGOqUBseO0UT%2B%2BoQmwpMLG09c2M6CWaWywJosNw9coSXd4Sd1hATl8V07qmN8y7IutdEKjQouei8s9BAAv97tPnWnv1%2B%2FXNIrxWESg6%2BCfKyRlkP6jhWg3IjIPjnG8IEOu8hsFpGydK0IoEzSl3Xbsoluls7%2BguJPEF0tGCJVdgCOldeEW1%2B%2B86LCBjkW6V5QBM1T8yg7lT4BxI58Bvf7XIJweRzL2ZWqW&X-Amz-Signature=71ccb4a25d031eb4c8aaaa3f872063cea4a9cefab9569b7fc8623fee02dad503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
