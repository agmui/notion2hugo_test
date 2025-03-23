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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=1a22f63cd0ef49dad68d7d09d6d6d7d14cff512cff56b7c3c460c0cd7e7a72f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=546976364817fa759da95710523c63fa1e0513c2ce9609768b83865095df7d33&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=a7a56cf4b6af817b8243689bae8b105f0bc8033caaf25bb60a3e2445830efb86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=16c20a6dc62eb5fa346f80ba894cba3ff988c2121ffffd9ec01027e82e56ea6b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=596c6f4f935af5a2f95b0ae3e4c602fdccb8fa54a84f01bab517d7b58419b05a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=178dace94672f0854a86084d96b20cb3961cbee6e34230e26660db3be01bf296&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZW3QIVG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNybE6s7PCJHnj63e1lg%2FKXIV02ltrW%2Fd06CryMCa5VgIgGriukqI2teKKWp4zVpc73b2hoC%2BXQ%2FJlJ1Dx7XC581wqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0GLu5xCjIl2%2BfyrcA5JuZkeQ0fp2ockr1oNrA65RQJvedUh%2BRLFmp2po1hNdBGAqNMoBrGVn2oENTqtjfynahrc2o31jXHdJu8h4n5rAfC4vtcD3lWpH0Kg76JYKNnhmHunpX92AhFExl9RpgGqfkrcA8UpHIr2OnrV0rwwCoQahDmLhG7Ha48tvC52lOeZhcPaAQS%2FnQFu4zUsbI5egnXNWuQAZAKVNhZWEva%2BgipQ%2F00pPrlbr948K5KjBxVRQ2D8mGi%2Buw0nIy9yNGx3V6YwcHoz1HRdaRgX5OpgjsDRe9%2FaGE2ujho2e%2BhSDsjHo2sq4juT9LuUCcTPVLbk18m8V%2BLpuGpovqq5nL6L%2Fbkh%2FUu9TlC3Yg4jvD2NuVMBFWC21q6TzbDy6S4CQsSPN%2Bg1eb6vD0524hAwtwKTO5AJQG1IOxHx4%2B1MQCHtqjjY7wwwhPpofzMgvfCKbF7xt0Aw4Jo%2FFYzKUcVeGbgW34kqU4m4a4se6WX76zwKNyRnYdxKvugd7lRvScZ3ww9XHLWtsVOrbPdlnelQdw4fInzb4k0BmCk1gedX87Zr6526n8OJjmhySdfLIzsxUNCYbdaVEWB6W6JH1TdzwkCGvfPj%2BpasvEIh7A8NjJdfgdbT4vfStzJ6duYntMN%2FLgb8GOqUBbKVcqRpQmidlr17YgAkoet81uAQ%2Bck6z6C3wguwCihD2v4Hw%2FDb8LNp0kTlFcnuIZ8mMakeNgkWDiM5hzJVHDmgVUkQRppVRl%2BPqWGogLJOrtllzWYzFsAqhfvnGNnIhfJ14DQAbaRBjv1rF5ZLKoqi2fyQyWsE02TYpW5gONDhIAusHBxZAYtS091yC9f2F6Af41i82nsCEChnil14H6m1KF3Rc&X-Amz-Signature=7ff9f5090a30766a686f3ff7c56638aaf5702c5deb7b25b713a753dacdc10faa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
