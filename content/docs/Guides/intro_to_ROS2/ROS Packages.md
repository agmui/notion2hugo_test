---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=b2581233dd8d3ef5576dc1cc960210d98ce8b19d073e71aa617b288a96b01851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=8560bff2258bf89b44a925fac5e3532ceac28d125186cebc73125cef22a03d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=6b45ff4dc3e2dc84301f1c35cf5ae829a7ec4432d82fdc2d38cbce15b0823cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=b4aee0003283327611a3eab24f9b0639b0fa1fa4cf80410d6bededdc3dd1839a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=e3125748c435f031046b6fe11346432623a2752c4a1c496aaaced07ea6f029b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=935c52618412679b966658ae67738111ff515b7b220e2cf29874f7261878de7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NDVBKZS%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH2Ml%2FRUCxD2PNPao0Qdnqr%2FlQzLf3HScXbmaw8LOOilAiA3taxFpHHuVk4fMvTI%2BvIqomwjXoaGdyacZaWrzh2srCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMpGw6fYK7gUoJUHSIKtwDFZYtXbxsgP8b3z3Ai1vvx3CS1sQOfc3qq%2Bqweo91tgmbDT4djjbGNNIDaa%2BIRjKz8u%2FdatnkxlzhkoT1%2BpYwX0Fk2%2BLHeGJ3lrma%2Fn9dG%2FfxRjEi3dFERg%2BwEqaz9uixFbxdCHlSg%2FP%2FmvxelYdxk3p3oKTo3n8%2Fa6px0FURQsuJ5ktmGarsHjCxC6I5J6qDELOBwe8lYdNdj4mcUfca35wTl%2BfRTdJ9QcJx%2FQjj%2F%2B8tdjDfmrio7qo2n%2Fa7R9Z8Z1SLx7TlyRpRV9YimeCPBAjxG8sHu2qauXz8I6OHyLZC4%2BeL%2FatLLJRO2CiyDe9Ea0YV8LX380WDgltiwHcPEBJgzwFE5EB9jNAvgNnwNtwfdl4It9ITPVGcrZ4DfBLIPv0mE%2BlnvmBhBznJ%2F2Tu7jXLMwZHgB%2BC0iBD70YuIYODQhlFlnFXDocgn%2FVb6P53OwtOh18P5ghktnAHLsPpwSm1J0e%2FJxeyv5zts7JfrzctrL1HjfeJ98eW7rxLD0ODw5FLAv2XTukpXkHCNy2LxxqdqM4Ss%2FWgE%2BqE%2FpKQ%2FldimvzsEG8i%2BJqdSyqEnp19IzM1BVmaV9kg261KskDNcvq6S4KvRFVL3zvItm6ufs%2B4Pcf8mJCpPe4Km78wopLjwwY6pgGSqADFlk6eL1qh7sobqfeZGZuZepBP0g1m5GJE4MPIqowCWfCpXhDtgXy%2F0PTGlmdU40btjtXGkZJjf1OLNrQApo%2Baj5jUg9AhsKIr6D2F0h59TfqaTff%2B6NKBlBB59wLHWwFlVv6QPOXsgEkTgnbksHjwv%2FMMITvbRlEu3RnQQ9uLgH42KJiuGjygjIRsTcnsNZcDRyJ9BIr6BqQ7SWK7hDWMUJa0&X-Amz-Signature=2976c325afc744890d450fce38821a76866c34f4cbb90e10a622def9f75caa09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
