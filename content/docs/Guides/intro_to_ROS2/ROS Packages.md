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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=16863432ebafd37b8d2e277776e7d51d5d1f40faabb84663efb87cd7397fdf33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=e096a172e45e79c0353ca7282f489b3c4ff7f43475b7a072c27cead36b687011&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=f3289ca644df8894b5e749d0c9765f029a8480ffb89c283143c9b00ee9f3dc98&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=5301a26e34a9a7735bed412e9ead210560ecec57448dd6e5fc1150dab070a1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=9ede86129d1940a672284e53abfd4818ddfa65d76c4d4d580631b5f16f4572d4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=df935524de594598ae6add24b744c65f22c782f14d802e5399d150c36a29964b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7BNV24Y%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIE98tQhTvSsnAzOOuuDnV5OBQYuhwJw1JrBN0DIQjR3mAiEA9vFUoNaxIj7GRCoyWatogNG2fIHUR4gHSno6NTZa6wQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BByywrz1Gb88MJayrcA2FHTxtJUc91bYr%2Bmub%2Fej%2BKOLMstq5f00c9O5DwYkwClYU2OW7RFWwI9Ow7%2BRGPWS%2BgB1Co5TRUpFdSYtzHf3LFrQRD%2BPbVsO64qavNjx0aRSHhQHJftQ5aDXTCQCkNo3zCQh6BGq9w6H6NqnZdDyCTL%2BgF%2BEwDWKNlq0%2FBfPfyVh5oy%2FCoSBbaUspu5GOsSZCCO3iixAJwt5SnqMnsTBzrFF5%2F%2F%2FahRU59hor%2FXE%2F2oLGF%2FRsj2AKM5%2F7HFGfvgU%2FMbqoT8pydEdohiAmK9YNJ5KbU15Q0CFNQxrgO8lgeqYWbAegiYYuyh3kvnz%2FOuG2ElCsInmaNEhP5cQDiaq1%2BEKkY2j59%2BzJaSV%2BJMwXdrxDxQCtG3%2BRYIy33smcRMi%2FsS5q9OptRy4GH814iyi9C5rqT5fWgrjjy%2Fj%2F84TBdyBLBkfPPtmAhjPg%2BygnPYtSElXlHLR0bPoEcs0d7FTIyHF089ui4lDaqeP%2BMUJWpR24wwx7Jh8IfDlZAvtYy8yxIdzp3GSeD48xoCxFccbTVazH%2BDXoSY9a2c1HbYtPRCwzbAkoV%2BgzlgQtkSxs7KWvwn0OQhydxURNmSv6qgIESZxITKYwsSuavPkerwaXHV82FfNu7BeGl3%2BfnMKr76b8GOqUBA%2Fwtvupc6wldEE0UuWT9Zdzj%2FwbGXKZG%2Fs5SS9SIvyJlECicPLXjUHEvvmOC2B1Xj9UCkaMJlWv5xhggYW8EPSLtyxp8%2BW5EVrSm7l%2FoQaRLM3zsl%2BFYljvL9i9J9zqfeMrDPLFsOPU%2BU7ONpsKw6Gdq3U5CtNmNIGAf4ndixgJUYC2OOR3FTO0v0Vn5duX2B%2FJ9s%2Bw9wc2ZD6cMUliNIWs2LxuQ&X-Amz-Signature=82b6240661270ef018a9f636c794a479ca9e9983c16ad2ff2678523abf64b0ea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
