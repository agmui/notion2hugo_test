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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=a3de4315fef9d3fa6fcec33eea1331d2d687f9562b2dbf4eedd3c72febef7dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=a697b53136c39010cf08593ee4a7bb96e6e397663f3b7338523d4d16fef83497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=da38ce128ea49862119269506030d8a47ffad8c3472cb0c944d05fdacbdd91e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=da5399667f670b15eff6d072fd312e69fd8fbf0523e6a637747f987e43ceb88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=8f26402f67af9426ab87de3663a8a7873c2cbf18f60eb5fac67a178d9711759b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=cc1d0fc28956b6979a05924e1679783d9001f4d32be905574b7671363459363c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG56SS75%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLhgGzEfMOXmUN%2B51LpLTuoD75eUMyDmdSIlNMnAW0OwIhAPaCra0gp%2Bgbkc4MHEJHgcxXszSjfsJGVNY0SPNIj%2BvGKv8DCHkQABoMNjM3NDIzMTgzODA1IgwOe7WmGpJndIbhYLAq3APojnXkhX1MU%2FEwenfLgCMEr2k%2Bc%2BkrmTONyf91SsPtHt8j1VgWJTL%2FBF6fSmqF8WwprYhaYoLJyTaM1Nt0udP8pHrJTfhFf2gKlkvjwFlWhLzUNoybxJYjkQ8Gvz0vl%2BgeeVOnFXpAEL6%2Bg3O40P06ogkLsB%2FQQEdhR70eNa63FVIQBEYgCdyE0lWPDPVCvJ0ON1rC8RbRyUh5yCCxhtSPuZdOYnajdprB97D9QANPPDJYRIr8kihTdiArbBOVIKdXoinEcistZ3YsH2q9bJyaoCemHXwpH5HBH5fYJHIyAuG1Umm4t%2FN8wce9Wy2eWxg9LNJV0sbL9SKzOBT4ehknrhU5DnCOSamHlzMumqRqHzltdLg0XdBJw%2FatXuA7xuawFWQTWWWix5O61ZJMTqA%2BtlZFi6HXEdJa5ne0r%2FSsbHmhuwJ58evNroHSgkkQJFhYPtxj5N5qtSMNJXOjzJIwodF%2F21rnoJCybl8TTQqMslo6sGN6Cpy4beKr0HpyFfEinFi8%2BuImL6w28oMf%2FMxzZB%2FgpsXunmFramblyg72xS9McuilorXe2WI8AKmlYkIdmCATgIF3bviVrifGu0GTtuTUWxX2nZUZq7B58BK6PP2NahZyKKz29L9ErjCa9%2FrCBjqkAZb6nSMP9VxSZXvJVLK4jaavYmJzaS3YxDrtVTLSeXU6SG9xaPnVbFlK5L7s9x%2FpBJBohCVDI9vpuumNEZ%2Fij9E%2F9U57cVqjpGpaqjBjO3i8mFVWAPPTFkl%2FCw1MBY%2FZlw0s%2F42YtkoKik8Jn964pQKQPOIKnmR4VL7NTbtPniQwsfsJPW%2FhuRqt1RxP%2F2OfF6te00lcqKDyOcZ8jMzWYAqso%2ByK&X-Amz-Signature=60631fe4c545ff8cba2e42b07474ad1383c010b5ecfcb41dc247abbdf6cd36ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
