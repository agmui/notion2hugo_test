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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=1f3d324edf5825c529a4e0fc5f089c3f20a6540ce72e5f5db16a653b61454f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=a870674cbe3c47771981ca251fe763dc42c5cef93bb9ed61940c187e17cb62a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=5dd2892c5738bbd7d938051e085ca55867235961c466406928f8cadcdc972eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=1a3869dbee907d9b38f1b94ab15c52262e3107f1de0ec7374a2002e13618d937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=618ab3210557574574602f89150c3d187a68c63afb19cea313c4d0e08ca8b97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=47dfb44a4aca43e7188b5d392a2f9f648f2c9450e16fc26ed2af58b8118062de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFLZI5Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIHnai8Oe7ihoMbRAsCFI%2FdpFDgnkc%2BwCO9xhVI4EgUW4AiA6Cu8WVV6aXuFLdTXHwQUe%2Bzu%2B3r7kcd0LgjdwlJVpjir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMiBoVKRzVPQ8bLRSBKtwDYrpjxb8m6dkBEcKll7yff5NjEO4NCOuknO814XXwX0%2F1sG1nxDN%2Bir5EYjxEZaJ3j4zGD%2BNiGR9o4hpeJR5fdYOYFV77GR%2FTwyJw7JI7%2BT354Nj3aHS0tzmT3BmetzUdWYiTuUE4PUdIZIOaQODqXHLHqq62lfG%2BIL%2BVTvTPj9bjl8lh2utOOw52vvTDL%2FxT7aqcZvlNmBpaa1R35eJVKIvuWDldiudY3w9vH5NAU9SSrSNiSmNmFquylSPZbyv0%2BLTShMZRty%2BoAstZEySnt9iw9oqOLegt9LPpQs2o77U6et7j947rLdlhSVJIvxy9j3xCTvPBDd%2BMUbDD%2FuLHTb9OeIfgqvlKXa1Nciioi3y%2FWyg5%2FdGqTpQ8wzjm2n2bHXhHiqJS74g413mC%2FYAK4piVfKkMsH1A2ipmnXco2R%2BEBJFPodTShZEnm%2FUVjj4vlhm8hDSiEYg8wTVypV1gm1xLi7H3R3goEpR3CuIXUHHiyRwpDJCGW8%2BMxtKVFn0%2BfjPCMB7uyVr6Wm%2FBX9e20um6jLbgwuvOF%2FZ7B4DA7PIBwP0EP5eGvR%2Bcu%2FovBK2opPaH0b%2FqoN7XG5teNVEfjki8%2Fc0oSxfTSSx8lh8L3OS2ovWqkAdO0AoPwwEwiLKjwwY6pgHsTKQ%2B3Ly0eOtoxIv1a%2F1dy2WDtQ02%2FFLEqkDQUH%2BdAYD4tMRN%2F1InRul4P83WFUu0BRXWqcXEZYM9ztCajOazbP9IfrJwNgx3QOGpemo7vs97LZkiLg7%2Fi3WtQu6xh5a4GTA3%2F731sVb2hvwU6OysoRPx62Jkq9rTb%2FajjkI4TuLNx3HRH4Vptp0bsmiL82z1JcQodQfKJpO0L7ei8WaV%2F5o5suGX&X-Amz-Signature=9d9ec6776fe2365eb1d3c3ebd1a06a6411bc8f2f024eb77edd997d1ab8a16b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
