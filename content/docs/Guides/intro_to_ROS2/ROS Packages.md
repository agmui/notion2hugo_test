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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=82e9cdcb58e653253fa9f80efc112d316c0792ed02b1c2b6ee6265aa998a8434&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=a93fbd8595e8536aaa9138423b9d5c358070ea2452ab0b11a91910539f4a0ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=57f4acdf2d63217f279734f7f9c45549017a2db14b5dfdd7026cb5532fbb18f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=2834dde8a716df5ad468ea67fd0bbc58c8d0692fede7d09d0a34fded9ffe1b58&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=0eb1ac5bcc1dc224ab87c388368aa249be26960e1e159c6b3f0dfdf29c66a11f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=79967a66db1f158f98ae2b9553c0b8121bcb1d3abb17cbbe61ae877e4ce32db2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAUJDQAK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNqnM%2BTLugUsZBZhad1oQdAxVAvaWGcvTFIel8HDrkaAIgaZv0qqNPfO3%2BjXgXoU%2FIzS%2BB0pCdZB9nMLbodQs%2F988qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAmcd%2FUc4ugkHLypCrcA3CZRll3I0pHLWePCkQ8qFPRgcnA%2BzYs96QqXAsAUspadSufA84qj3J3bTu4xUClim6dXRVMXuJZDflPTHpv5Z%2F%2FcV5MzPqfkbaljlLB0iRNZTdZIvy%2FrJ2griNy%2F%2FMRClzoCMcAmRhaxFp2IB8ZjAD%2FfYceqHW7xgGKvGN8c6ZOoCV1SS5GdJNFXhdssP6WnjvdwwKebGQK0Wh4NvyRUIdDdTeLBffjOU0leao%2FlR6McmzhazD%2FGI7%2FGkW8tN3TVIFG5VYiSD6kuA3dMFsyBiXs6eUlefqOECuxVlauHjA6KagjSZ3iMr1wfVkumcgsiqoFBkd8aNgWnMtREVsk334tQPlMaxN%2FypuK0Ax28cOv9RiD8CTWPiltuAoLBl2yk%2BPLXTvKLwSG4rhGGnbg65zEO73BSxIQJz9ZRqBtuguNftQxEmgUSUxdkWUoPnQlDRn82QyZptJ0B9Mqs6J7MJK3Wj5Sr3EC4%2BHW9MJY6rSW%2BICotLJr5JrsVxFHnSlS%2F64zuCDc%2BlIlcLv7uCsaqsYh6LFrB6glW7lzSonx64FGMsZxuta2CVH3YGBX3fDypAdZKAQ75QJBJjonukEQWyPl9tYsFiDw6Ldb8%2Feq4Psh%2BrrIaxfuw75%2BKWnxMKzvtsEGOqUB7pL5jIkZ%2FkmM%2B5ncIjFTvMwGZNGuXiFk2tQyzo0gsBH9YC4k95Br%2Bl0g4dwTsEVuzBF1MxPfvThThu0HqYFpGeYtvalRMSVkHQPmCakXUedlNjekmv0L%2F3w6DVjoNyvjx1wZdaI2vG4V4LGpC6nWhiSeRUz9PoAUujGexfc%2BLtYjZQy2Zl45j%2F4Orz5QQEMYqTtOg4KKSeL3Hv%2BqE7VMpTED2xrz&X-Amz-Signature=ec99775ba61c4b3b0afc9b859fdba6f588f58abf23cf17035916179aa4c0f51b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
