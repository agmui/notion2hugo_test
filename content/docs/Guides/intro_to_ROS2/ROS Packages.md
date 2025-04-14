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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=5702fe015ef10ff76365152e8e72921205ed5d8b90dc459c035f425402e0062a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=acb3f6225b5ef7bf73a71d3b4b295193db5288a9f158c26a971be06f3aea032b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=e260f683e3c7b95f5c9e3ff04f5ac4ee654fdbb0c75da0a19cb171fb3b2a4818&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=f05f94cf518da81fad4e98517de902c0394f3b86f23f78a76c72b3c275649f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=8b2cfc1fdf19aeb73d46b43283a0f2a82cd6bce87d205bdc49ef9fc35bec4fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=d6c98a7c19b74a737d465170bb8cfb013773528b642d140f5d6f23a5790387e3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674SAEL6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExrENdOVLIhjPpV%2F8KKdzjmRQJwt8wFApuxv2s1dkHmAiEA5QtTWOFGt2njc85%2BOegRzUAmGK1CKRMES%2B4wFXRI%2Fy0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBdolgiHxhSUOrGqcCrcA2ROZ5W0oxrqG8%2BtUj8p%2F7%2BuZkSJ%2BPxVHc7qRefmN3ccfWNAg0tC3dquKBC6hFeakyK7GWHDtB5KbUwdkjBqocpmqL9dc2Jb%2FcoK0doymf199sMArw3ok6rQ2KluIAMzVohXDJX8Nk1GfB7t94QWtEJjoCpVWFoDAyYvi%2FaHQ2yafaXBkampJb0zMwqxngIZCSmYBBknUokXASN8L4wO1iS4KyAAT1UO%2BRma3SZHRXUcVFzFx2NTPXS0QYG3I%2FhI4lcnwbRQA0EJEqKKWRqV4r28OeIo8aub%2B5gMie2pLcofPM341Ia2QOR9ItUJ0YB14%2BshC4umpFSFhTl7mhHvdZHYHnpNK3iS192wnVTtjPD5GYAppiO2BUHreCi2VeSnLLkOiddhexLI7sSqo%2Bhi08f0DJAtXXHKDNOx5uSq%2B5II2z1WsXjpdNMDw28t9wNKcQckrvJ62Ep7FXMntJWIHT05PnUfdh6NOzYF5gihaAXb8WEhCoUeMkTCoSzFmQFm6c6AW%2Bvtq0lSRW6QZBn%2F2DSTMyDewN1gNzLBEnJp%2F6zbuRxGzu6gYXmggM8efuEgCncYEKR%2F3tzT7zja9sWF36%2FhTkbQkLNKQqBemC1TsCJ5ujz4VIyaA07wFD4gMOni8r8GOqUBuh9J58r3SPMGbSPDmIDBYO2nZMy7FELRH3n%2BcK8615HNcp4mNLnyGAETK6Ngt1FeIJy87rCgHwoUBaAU0z4TIQANoaLit6jxKFfkiaW3yJFYXr2gRw5NBqgo%2BRuaVnw9FhG%2BWQMGgG4fXhkxSpth1ulqEeyc%2BLxRS8irqgubJlOA8xaVGdq3qa21xeHrOuusQ3h2lmxXeKiwEh2ZA%2Bbmp8bNxFQb&X-Amz-Signature=4b5d9fe4e1cc5db5b1a099e41bd70347c42fb58c179d9088d8ea2017fe57cd59&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
