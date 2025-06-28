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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=ce94c9b19e22e7882e557bd6132464ea1d5a64250ee6c99caa944fe56dae1eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=73446a1a2813b885d66e9b29db4d02da14abf03d4205dcf3e6cf58d65eed579b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=77f9ba74d92442b5aec4123bdeeaef6ec5c70298d7cc472df47118fdb37ca143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=e554bba5a476d6c118df2ae6fdddbb3b81a73a17ac1ec4e9ab1d59ad9ac8234c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=b0075442367f5c2a07470ef540c0014b67147ba977bc54cca0b99badaef63606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=a2704697e5eb70acccb1347425aee136ba02145bf1215730ef3b4afc4299e95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAPG4KEK%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMUiVud%2BrhkI93Zlbra8dJG%2FCOMRsM0U8f3z90LkEZJQIhAP4TtZtPd45lfhf6ArEaH5nStb%2FHLGaRGdghyDbHsYGlKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcEfshPAPsW%2Fq%2BIRkq3AM%2FBPsaTbQF7zmi52XsZ5IloRvUGhxCaloErQKFT4S1lK5l0Ssp5VAVwGXeSM%2BbbTRr6v4MW9RNcNixd1D6YGr%2BUzQrTpHhWCgGQpDGY7UsAbgseoccoO7exC1TgXE5X6rMDLWpJ%2FXIJIgQFpVOKNvg5Oypon%2FLVzLJotjQzPIvp%2F5T%2BsIxFOVs6NPXFfHg5qRw%2F16fjw1XTkCYtzPf2yJap%2FstCYbBRF9Ap%2FnI5ZjRIZJWvseov5SR5T%2B%2FA%2Ft5mG3tV7wRJPhK9ZV3rHX4frWiUS0aINPTPmHHHgSKYgr8I0eW7XdRISJdzKNgSC5lb%2Bdp4%2FJT15IUp2IWUYyFI3ype40Vq0bSovphOJpeh0g663W2yRROobQLKIT1ma3PQBgxLgIWqPuK8frjDPjiDLcu%2BhLknH%2FK3kxfYggYxmaD8vIBze5RZOEIy5uihzlABkxXO483m21BbweNbEK0XhQOiobYIvCgB3u5Tl%2B%2FeZXH7gk2swO5C1j64tmhSQ%2FfVHIGINtR8MbrnCSsg0C73p58Ewixv1QV%2Fj1Ela81FE0nILNKocOPKTmij3mnOoycOYpoYvNHINrrRvPwb3nXF9RGJI0wGea%2Bhh7z3UDphyWILZ%2FBzo8w4QYXiNZEdjDhs%2F%2FCBjqkAUZojDySM%2B6YAqqytkyKLQz5QifQe%2BoyGCdgWhrslEApcLNyaws1ALvUboUO3ztDTIC90xeh2sX6eRGTuahdiZ3XH%2BKzf3gSVhgkvVUq8dCynEdfb%2F0rFwh4GcNibWjEG1CZnj9HO5mWO%2FH0FAAc7KqgnzDo1B57E5hpbxpx5t0cFi83CaYjLoP9%2BjzSj6KCqobgXHe2o9x1vA161vuYmBh8szbO&X-Amz-Signature=a76a4e59b06a41176bef9cc56f4e019ab4962dbd872b75d2f0d6c99a224cd924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
