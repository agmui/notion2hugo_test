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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=32c21bb5d5d15a04624fc5270f0507a94b77f6e3f7f9a884de45c75c169e5398&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=482bdba75a191cac51dfae89da0d6af7f7f0d48044caa1ba9de1f0d60c618664&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=977cb07499f84a3548cfd4648cff6b6e0984330970a4c70253a327645125f01c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=07cf6a832930fd49cc3b1091c13828ad74a89c0133d06c88f6d9a9e59a458785&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=7772005c1c9028a57a5c54cb7abcab6085a36d2dbf85fb24dbffef635d6a344a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=c1f3b6120708214b616828cff99d9bad968f16d1f19b8c7baaf029c0b9c768a2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVHY6X%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7o2uSLADEcFnshfnnPLbVDRBSGTLsUEKHCIPP%2FG5p8AiEA5FqkZqv%2BySVZvAt9woY8nwRxkD89zeGQjF8UHj7D7LIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMxh28ZEUeqRQBRe4yrcA2Wfvwd89sdtWwgBB8%2FwbV98zdKrFc0I3UNyxngHAGZ2qTAAU9RljUk%2BWN4%2FjEUHoHRgi9i6fxjUm5AHDNbxQwZJR%2BaO9q0%2FR20LuTUXm9FMS1ryWKiL%2BakS9PHubPXNWEpSD1nIygpwIKqN%2BS2tKrITauRoJCBXraZR5ERFmGCdGZZ1jKr3WmGbHmfRd5wKUlQJFK3vZUJ%2BUGu07fs7Wgvuswr8JUenpg14KPrlI9meOtMBXsj57Dy30lMAtJP4h%2Fzh7tgYenY%2Fa7ezWumqk3hQ%2BPyE1Ry%2BzgC5rOgdBh%2B6yU0jj7orDqnORtg7YsQvbsQ34YIHelk8WcSAmY%2FilqUWdPaUthpeUeMUxUVIjGn46ujADHXzTf%2F9xaq4vHxxFQNZJdcHJ1sP430VhJHLOee6LuQW3pH0fTJ3m2f3EuXukKbbm7iH0rwM0mNwJvGv%2FJRgKyzYnalO5TNh19xAuiaxOk4U4s97RrWrdy0eb2HJtLWaVTxAUg2vPGBSX9fr%2FkGrisJrDeqbDlRi%2FWu6h1TQnBxYoUU7ZnO%2FCk7tvUSyCxR1NK6eYbdsjYEARlOY3mbfSAUOv%2F7wdkdgtAnuIBsBpmQfLXC299B5f8N%2BoB2RQnvV%2Bc0Yde%2FhAsAFMIvwmsEGOqUBCNx%2FA5ZtPsttYSHEbZS2o4CY%2BXHMNCNHWl%2Fu7VHlHA6yAdqIy%2BcKXdAmdH2Te2uBESHAvZqMnIqJMiSs8FhMFCY0V60mhbGrMwvUooC9%2FYqv%2FL93dvdWVih%2FakaWqT%2FbyDTtQya%2BbX4eWM%2BvnnvuW3dn8GosaTbgUU4EZS04eKzdYQ%2FECtLa9DJRRxqP9EQBv1cYgi1x%2B9lvjDwSGEFauAYlYBML&X-Amz-Signature=3ab585f5c16b20390cafe69b7a541c0886fe433767a9bb118087174f71afb180&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
