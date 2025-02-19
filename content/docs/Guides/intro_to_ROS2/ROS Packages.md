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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=7b72e71c6e5c41ed07db60e5814ce24001c56cb35b8f504d481285b26767b299&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=c81902ce32e718155b76e8bc5e45477a3ceb5bb6148b933a1a1e425617ae8452&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=332052952c3cd856d23c627e58a60ac4f8ffe931d3dafef20d478fc00946bbd7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=f003efc4af8a533e302cbebe6cf68728860ac5733cb61beb01196409ac49b804&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=44472e601ba60f93bdfac4e943d4b92d1bf2b103f501bd4bd713bbc544dc3225&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=122eeefb5c292fd0079d9a502392fdbaaf59b6153b0c513be52a3b3ff8b08b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQYCCP7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC7Y%2BKrYzjjQgVWsxnqGRa02wHeu6To9r0Gq7Rhh6GunAIhANzsUjQvb1Xd6on6jbvXTr1ZU5XNdes9AGIyuNx%2B%2BepMKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2JOgcyhGmPdF0ZOsq3AOOlMlv5J5K8rrrNxFMD6Rpm9MlIVO4K5cr6c8BD%2F2%2BMUHBsRrH9%2BCwEeSRbyS4rpwks5IXz%2Fm4u%2FhwIc53sCVttmx66tcxykPsw63XvjZ876RkmDqw%2FOGbC5VfXtLfsRpguK9DIA4mPLFMUrt7Em%2BJICdRVQDHVX%2FBNAx3fAajMWLzFjxLomJydyNOsTgzpvM8ox1bNr%2FAVr98BKjUu4ruLde%2B2p%2Fq9qMU7%2BoB05380PuQSCGTfU5dbX0Iyk1o4kmhegLWxV3tkOSsUFy%2BBsdJaGkpjjE7aAzmm27LSVjWyjDxX7%2BVpzpCpHOX%2FVWiwrVizw8ne24b22sGoWcNtuD6KFMpdQRuP%2BvW%2F2hsQpjMcPP7guS9LRz6dE%2FpKsUQi5arMvEIxqPusXAL2FTUDo%2FjaLAvylCIeo%2BbZps9vwxND8%2FuZ7%2B6Hsx8jsCo4htdJm9he7T9VfkkaUGroGlcofCAUZVOBAkYuuO0BPuD1mhU4E6ugKEzp8PiI0I4yzqHVY82ADAJr29IMEvnuzy%2FdI%2BL3ZHY6jTAHWZjn0aq1K2j7KPvwcraURL3H9y%2FNhSgORUGfpn8ZFOCOsJj2o0%2FVzSbu043L9ETfwXIt1EjWPr8FB7pDdPkmo1O5pgh5TCgnta9BjqkASzMaQpe%2Fi6yyOmMbOKhbOBOjC1dYzwvwjWZzTy1K7BaUUyfVBtaw2MJJwMRwaQAvhP61weSepe1Y4OVnIVuBEOWGBcEpCp5vMu5gWl0ebxpfAw8d%2Bmx6YlZMco39YKRNquV0wYlzk8Vy%2Bb4pHVh6Sd3Sl2qHnJMU7xWlX%2FiEGBEqshlDVP3yuY%2FnTAUVV%2FBaSpe8hr9b8s%2FpE%2Fd7TyDPjwIE%2Ftb&X-Amz-Signature=01be1715f257314e886683b2d06f3be24c00abda2caba4b15536e8ec08940e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
