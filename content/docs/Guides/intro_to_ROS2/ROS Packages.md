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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=a25070dd419d4f66d4ed4426484e5a158b062abea01c003ee04f18340a0f7678&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=e453a7852c3c416fef49a8913ee3b4118028b31f23f9f32954cd5939b0640967&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=9642ac5a239e7c7adaee69856e9b7a15440cdcfbf9f18d9dd51c15118b966747&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=a8edc9cf1aa1036e4cf5caaa3d640575acc50071bfbfa270c7aa8090f184abdf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=843000ea606dfa8e22d5acc947eeda11e69ef72afab5882c377ea325cab0ab1c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=3464c0d0afcec98b3becd86e04e07d66b2ed0e96cca09e484542128ac95bb1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FEPKK2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIFvbVb6%2BixwVK2ZqLDH56BjmdrOA9Pk%2FHfr6F2R6%2FRMKAiAtACBSBLz1b1UWJ0orfkwtmH4QPq31DTdNj1bg3ljBGyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5jX6NISl0HxpcvtYKtwDECdHwCVJomP%2BFm2t6%2B1hQLbC6dW4axPlbBxs9dgWDUEDSlwSLz4cTawYzD2QYLJegCDRSxgLQTKsQunnLB2v0InX18GamKORCeKx6OoZV%2FRBIU1TgD7lk2OLiD9fSlmunUtEDoP%2FSr0JU9f1WZDoYQMFWzm29Xv7rIR35tGzAsxZcv3Vu1nmlrlGpGKeuudKRtLJXT%2BpwbwLRx9zUCb5q5k%2Bspa5KOn2Va%2BEDfULXMiAbawNv7LFZOLn%2FlUh8detluvhw4iNj3s7N02zyYUM6lAXg0VXiS0l%2F0jlOxfV2yy66Uuxpwi7c1LMiwqCNo7St1d%2FfjAeDz9pqq4bQ%2F2efX4905qA2RFGU3DjKT3gGiJKtiw%2FlcR1VmMVgD08LgnpUwayduf1bCib1%2Bg0ydSO1HppTBtBozGFfi1dnYyUoglIDZRUSBtHKqQ2pTW0TOEvVhgJCg%2FL8vaCt0uTqK2SNsKN%2B2dWpHJ%2FvvX%2BF4snOLqTizj8i5t%2FGoX7gQZutmu%2Fr%2FH7bpndJ6cba%2F4HdT1qXlO3YZW0xtHI7lAnMNHkgJuw%2Fc5hberKYw8vDJ8x2I194m6DhJswu3u700iKSTGfvpoj8udN3%2BYF%2FfkUtalUeNbEHXWEECgMqIqIJBEw452RwQY6pgHyAbvCRwWGwBLvy0OmOh1B0ehyfelqvIzJ2WYJWOTKYMT61LpUoOI91WRuW%2FNZfYksg5VjzVZZ3OxZVvtdWaXC2mJAoWrMKCJSAIKchmqzU4TIUqdO6H%2BlDQ8enMS0y03YDodFuLPz%2BQHXZcil1TPyse0oYT0HJRL17OhNAUoN9DXMgyo%2FjXBblJLgrEQGkUERk45ib%2Byf56nxA5yXfBQgG15zrLFh&X-Amz-Signature=368b5c91550c0fb219ebb2ad7ad4ad993cc27764d079e67ce0b96e5d5047a674&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
