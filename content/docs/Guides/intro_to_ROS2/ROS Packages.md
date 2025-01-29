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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=1bedf1bc96c4c17054b16bb17516b1a407118bd79dd3be5ee6855529848916b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=713e33b4c8f66d0d943dbef2b9dc31d236347a14ed09776fae5d9737b42571dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=38bb832d00a391f0470de8e7112c1f92935baf639c8da2c8355ca7f51b61e616&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=73fe8965445b242b8a9cbb156ce14d44c63f157a9f28846fc51fb0c38c17aeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=cba86a74b397e66a85e788de418c0ddb6c900d29dd59698850a509f1c1f77f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=3f5d1481c80ba0c0809806e8791f7af6e16d1440bb43bde69faa79ee813565a4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC57MKPA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwjS8sz2c1gUv49WlbcFT%2Buu2Rpo9qebqgC3Ad7DxIQCIBYQUcZuLh3QJuiT%2BUG6ygi5B5mnxz%2F7S8sTqgFQQMTEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwubYKPPykFvyn%2FDtkq3AMBWSZL4axq01Eg%2Fd1UPt%2B%2BMiIilIdiTwvfQNgxQebQdE99GxleokgFNZCOWVOPjcD9du22J%2BI8FE7A%2BUSKkS7GUlP%2BLPnjwdtcRGWwsuZF2lNcHQ4QU5NltviqLYaHsAF63TTCtPH4DnGX%2FNp5dOGodFB9Q44AEuohU48BmqCt6BA5X8s2%2BkWwGePHSnnm6mfTEAxswfGdTqDESVeWZr4hOMldCUb8Gn2is3t75mnshZvDqnjUyzcoovjMpdeJLJBbD3r2X5QibQqkseHUxqyi3j9q3%2Bl%2BEfc9Dm4JowHalgl5JPC46%2BfAkkhLV13PYyFxVsWLSV5BA2RU6JchVbuz6Fq46r2QI3MCuwF7HzXUg4bKcWmxaEDfc5K4y30Wmx84vjoyLj00GpCjUusu1ufmeEK2U6YhxOOZUZR1FSJDb5v8vZUe7h8NIZtSxVXcWeVn6bQehlvF1BkPlOOUQg4ShGAU44eK87O8OLsD0Z8tfzw%2Fxq136yH2ROlIETSR7wmXAgL38lHG5uM57cDNbgQ4YkfaD5pVL0JGTw2iOhwcOuvlmXxnFqy0hkptwS7RzKkbP6Q88LEQssuooB8N%2B466uZGKqAOzJ2kfaFmNQpxbLVVS633ae0KFg2iStDCzgOi8BjqnAUzzRPcym3IfwJw%2FMrIopk0xYc%2BUn%2B3n83eD2BCAHGjZg9%2BQBSptzeJKP6giDuIx%2Fsmy7L4TY9kfsMzEP%2FR9F4R8Im%2F2UM8K16UAK2mmwn5laQSD8zVCOp1xrci5Kf81YwZ2lBnr515MByB%2BQtV7AceGZ1cJlFGW0G%2B3Vl8lX3emMIcEdRLKR95CciWz0g9sRnBOIS45G0EWu3KQac9c%2BWsFF00IuNno&X-Amz-Signature=d82ff300162337949d314cbf5f009695f250adf2ab6b9d40d08930e8e7b34409&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
