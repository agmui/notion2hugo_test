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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=8e3526c9f21e266bfccee19c5568526545faf6e21bbde4566c3f7d38a6667617&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=1e308ee4fcf0ffbc3433e9d13a246ce29d6b0cfed7b1865207d4a1d594adc15c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=1b25776a45ecaaf223d5963d5a78790a5dfd30653a2cfed8241d479bf7144e84&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=c2dd3c2ca04f7e4fe7dc9163cb62748b15017ad1a3720312df8a0343f70f2333&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=41fe3f32d1d2b286f79cfdb1c2523a7be565c465900ab06807219c29b70bdf32&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=2b6aab950aa8e7708a0e1f4274b29d48551b16b28458620ca0cfb9bb9912e00a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI3QKG6%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDyRFfuxb3CAHpFCMTWbJH%2BX6GAG2MRqCrOGmVKZGvfIAIhAOf7IidDFWB%2BCWO3v4D6nFbzT7%2BwKCeTPL2ZlzALW4KnKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEiAWWbGd0W08Ri40q3AMBpf2teZETlBB8jCPobvB6ugOPvjS0pAn%2BWm5BYGl3j06IpWHYEzqLPxceeoqmzck9kVbX5o%2Bbex5PSLDtIBdZWRk5hOvuBCwllOBKWIScNtqc%2F%2Bx%2FTkwV6m4Jyf%2FQeOxiJQPHpkfjHiqmadnWMgLhbj75YhKJ9oUcZn5l6259GkgETxGQWxV7rRu2pRF7rvQuf4DCcrLSkRxSs7GqpT2i7PguFYPVm4b6iZa2JA7QxzeO9r%2Fgo1nKAMMT%2F1VE3xkrnWPw1Yw9DSAaqFXG0q%2FBMryrGwiNF8mXdZ6jj5ebvs63jaPuCJzU3X9TTBUtWNpnK0ofvYLsyy%2BWNcEl93bwp03Yxs8D9RIDZ99QwoaM54zVcts6sKvOdayt5Nf85YRL%2FviZq3MSmBN91B8RI7ujV9K722b5igpU4vpsbvSOzA1%2BohmdW5bTmSkHgHQZNRsodiCEkl1WWnquh2t3to57dEu0HukkIpgzaGYsU1wncu8frmLCO4tCYuMgO0A1BD6wgpHNQAeHGqQU0wml7vbCGvMWBUi9r2UchzV4j0CA7KM%2FXZei4mDPTuxBCEPjmfjDb7hD2DdqAShLCOCI%2FKsWClubbPmovx%2FjnP5TIJ3c3TKhtTgExZCvLFk8mDDs7ZrABjqkAc64AXA4nJqRK1tvQ%2B4%2FO6tkhrZkUHYKHH9%2BYSujlzCksobvUaBlMer9J0lV6nEw08DjLiyxEnUKmIygtbEdIUuHudoqkGnxujWBIEEirD5FfZWr9VoV0pfc5YgOvAol6vT5Zwm0Q7U5BxRAvJoiCX2WmbaJRbFnDNtV0VROWaZFpNMKq3JreQzKGPuEX1%2BqzUkqyGvw%2BJGFZxnx06g4mxDjT%2B3R&X-Amz-Signature=b0e10624a5b77f9fbd32b0f3e502743a8a5c12bd00da4b79eb548ed288ee49f2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
