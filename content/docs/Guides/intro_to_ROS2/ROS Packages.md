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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=99063c8b274885f29683791a36e97caadf0727c513432c6ab0d85db5390b0025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=4c13003662e502a6bac1872e45165dd3693f959bb40ff79a9f3b62010d97ff4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=92d2985048d31d64852eee000e6372948cc14efa43a5ea18c712c8f413972f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=1f0d56ad4b630657d308f40a1b3853e6c9516e516edf88d37aecff23166769c0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=0fc00276956568737edc091d8d0dc3e27e8e63fe4c82523d13c3218734d71c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=aac23caea347f641c710c322bad912299e92b5bee1e975ef5dbdda5330f82201&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARQBSDK%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4nRqpJRTMBowttCOGWBZQVdIZaFxXiUIeTAqDTaPZTwIgXLR%2BZmzETdm08PEsnEoUoizSnvQE76cDyC9TqUjUA%2BUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPg%2B070GZUNyAASTFCrcAyQXQqJ1rz8%2FsIHUtv76buYZsq87SSawsi%2BX6Q8ZreEaJT5c%2FNSpfyg7xOJ6were7G03Rtpoqw6P4ZycXg4cSpmEBAL5Jl10UKoRwXxmp8ysrpNzryrEegw3twXHJ6%2BKCmsKFMGjX4C0SOwibMCOC9NcJo7RYZXajIycfc%2Frmi9L4EMJ6bmBHLAh3BfRyLMxdjQsBV%2BSN%2F8xWg9V16HYkzuSYOTRXtgaMAfKk0JuWxIPS9%2FNtLd4EzTne0VfIohU6yIFPW6FZdX0l3MtcRJLA3EQ4Tqa1ifhGNEymJOQpJkMonYkYd75A1AKPxXPkj4tdcVeYlyNLnavIMTuVismbfjBbFSvyoPKq%2B5c00k%2FAm9UrmdN68WwldYZPQPldcPwpIJT3Q91wwY%2BaVt0eDmv8RvYA%2BIQylhO5jkKb4xyWvv2TWOkxBLmzirOT93T85hgIqnQLBm48%2Fsa%2Bzvpkx9N30GqQxIcRGjfrSFHE1eYIXc5kenrLdLYR90J9fZtTby93iplIuoq7z9ldaSR9QjOjmKpnLOSf%2FI%2FKtlkEl7ECfvs6fg3MUpkFjqpQa0uSYHxEjLRKSDs1%2BPrK5z5AdLIafo6j5rtriyW%2Bfd5hIPY%2Bszqn%2BK%2BIx37b9TeCckSMJ2Ytb0GOqUBL67JRJ7HkXl0Pg4jo%2B%2Fg%2FYLKJhYsxiTDt55RJKjlXu7Uw5OTTIdDCpt4dTzk29i3qcaMNEwtjQ4MW1vKNcp0To8bk%2BbtaJOVMBwivywctzzpaYy6jI36x%2FRbzrzWNXFeNhsJ9CtvU9NBKztbRS9DGFIdLuzEZcpKer%2F5%2FYGHzg3eoa0T6pgMALhDKTjpketuVMJ%2Fvv1u0d8DGL%2Fi3iziFuyRn7eR&X-Amz-Signature=30b22ddc4be6b62f941c3fc5d346749bb08a259956d51cdff60784baaa019c02&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
