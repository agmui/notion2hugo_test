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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=6bb49ae71bd7956bde68153d97523a24eed5cf6c39144d4c502a8c7ea055ed20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=636900d194807618ca2bc879207dc292b92349637e95b5a4f917c28f685a9f33&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=d6978acc8e7904a94fc2add766692ebd5e0c93252277ef2c5281b5571a3244f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=c14beb132129186bc714e2cf4bd3b8c5ce69a20355fdaecffd994c41a067e8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=7564011709ad8244a2052ecf0983a8a26b912759acfed835f4837e16b8263319&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=a9ac40f5d1094bee0923c09c75554d8fd3ceb45418cac3472a0fceff47890722&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDXUWORW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAEJ99PZT9dUpILAjmvn7v%2FY1xsjKcPNaL3pOBFTmsoFAiAxN3lGweAVntwKDHbDAIovdvfBaf91kxZjUOssQGqM4CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hkjc9sXzfmSVwBHKtwDmZEKnjd%2Fl4C2vUkCO%2Bp0w9Mj%2FbmfGYnpHEx2ESAG89cUf32Xhvto5UpTyfOcXLtjKRp%2BEaiHgsO4qf%2BB1VQUW2lJemfO06%2BmytJbQslLgVGwy29CMHM33ywu3mnHtd%2FkBtx4sCPTOoEDEek%2BT%2FepwKpOyhMcVW%2F%2B%2FKz%2BsOmRP2eSE7lSqk3DySgzk%2FZjGg6DRZyzpWG6XUN9jTo%2BUUqMbTA8%2FyAQfdrI%2F5htrvXQf6mr2wR%2BCk21ojWLzGbME5%2BRQBgd4CjctL%2Bs9olK4LYZOsvGXtFWX%2FB6B9CPeb7JKzdwc5rNYWSy04HUpUwamQyLVQEfH1CZWl%2FL4LzpjndhOvgyg%2FMhp%2FST8cXKHZswME%2BFZ0gfPERTAZ2vMsYezI8yTUrcT06rd06AnOSztJLhhnKqU2iKAI7yEcMipC8y35pXUKUg7V7zPUXCdcgP0CqH8bQ6VYTNiiA5X%2FTc8WzSi%2FOgcbqV%2B3AFODCZW1w3w%2FuIMc2fqVkYTb3FlSolkQsz5ktvHnqJ%2BPVj1OSTAD4Q9cXaQ1bEMzgQhK%2BLTbOCg%2BiOdfSCU5RoI%2FI5cVBQ0yn0HNAaqv6fbI%2F2Luk8LnS%2FoDBMl0U0J1jLHK%2FAu4Kg3qMPxffcJhenGJb64jUwguKUwAY6pgHCZXfUBElA2%2F%2B7aejoNk8bQL3IUtn07rJc6zTIi6f43FjFOkmI2DYMzrvlIjPFHNBcRjjjncj47vKt843B3zqe77ekjYXSniulenbG9ePXurOis5tMeiMEfWzsFPsUMhHGHfG2rvRopmaP7WKhP%2Fg0ik%2BYtd3QkZwVIT0I1Wza%2BuI4rzgvceWRxFHNRc64n2o3y7ZCxqpjNJK3goY2smp9hNHVuEV8&X-Amz-Signature=f4946b2372438a4b8e6bae90073a4cc4a7262bfdb03a72af99b7531f3e80c2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
