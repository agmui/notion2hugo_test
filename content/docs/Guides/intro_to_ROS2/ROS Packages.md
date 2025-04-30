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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=2d6a41fe14db9d59c4449a7a72151a9bda2ab091dcc1cdd9e06d559832877570&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=a8308b0a55c008bf533005444583b1e006a571790c47e1295bf66f42f623bd6b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=abe2a8fc09f10fad481d766e8d59fba8ff770521972ed1c7ad5f417ac3b945ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=532f112c9c0e8a7e261ae480ede304ac5960bba3a9e1633ccf320a1b56ab097c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=98c0471ffa7ec3af5d89c171b41bf89cad7505e5011c05d0a26ff115bb29e07e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=fd2b3425fa855e89e92cff276f142a9c6bf0f361bf7730bd3190d783d8b53ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLUGMJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDseCeoeww6aItpEyne3c3NIale0%2FftcwFa18Q3PDICsAIhAKTJxhf5l7C%2F3UHrT2wa2y7MwwRQqBVOmL3s2BAFAsQCKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK2ITo1864i0m036gq3AOP0onNjdd2ELgFb4q%2FVfKB8FLhDJCwKLdqUQvDRwnBUdd%2FgiQEnXywj%2BXMVC1PaW5be0Ass1DmA%2FIkYcBifjLA1XXsE8Yhgzh9RAswow6edClHJyNH7TjIYsmmn6OFBwvFZoRrxyXyl5DtVOjnf6%2BgGy%2BlhThz3EgFxscT6QBecbi%2FRz%2F0HtdWEiACrzjYZ7spFlQigpUe4j9JoE5Y9Zv7uYQgGr233uvjPstcT5NS%2F7ULVb1Q%2BoS8UKbhnmJ5Svon1Lqs%2FA%2F29o6u3fmK4m08x1GfJ79%2FRG%2FUlcI%2FceARdpJIQsIEPyKK4rZpws7NJoZfwrs%2FGwm2B%2FatGQEXZ8tT7NNfkQnDbJiWos63GHNfEgfwr6JAu1roDavV0KBTwRkc9m7Q4vavYqd2zULUwghTcuO8t6lmYFHxg3wPsyd9PNgVVfuSuYZ%2B8SueepbdOnHeMMTXPK5OT%2B%2F%2Bd0cXkSLwRpqCzTAh814EXatQUzEEgRdw8uYk9oY%2BmIfrBOm0SPOiOtKAfMEyIfUQMxryNlJNBdM9zpymOHwrg2O5iYoSqDoDozT315xOOTPkyMv%2F5OgOKC4vurtGt73soed4rXvNTOquHcwUY%2Fs0GXH6TiQ4G7Xe6ckGGqH1l5RyQzCPh8bABjqkAUfAML7fEeM6i1gOxTVOvGJCs375wGrnNbS2%2B9Zeq%2FXTELzFWQzewoOkvisTEMypVLIhdhh60g3GX4OqaMOeUpOsAJWlCBUJSbRrMlpZ%2B3JMG%2FhePItU9e0vJ6OnypDP20%2Bu1sP64fc8b2dhepADjryfVb%2Fhl6%2Br%2FwxW3SIEAtQgKCJoV1L3AsdAHyl6Wx1AGbIyzHavmKmB5CJR60CdxGS0iQNC&X-Amz-Signature=797235b355bb5beb5a849b74aed4bd891650ccb0bc286e59d4c49bd5711074ae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
