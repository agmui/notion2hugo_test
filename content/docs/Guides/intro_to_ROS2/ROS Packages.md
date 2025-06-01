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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=c81a19d07e11d8cc62fcdb2abe1c830dcf12884c067ece4b0c4e0114193f7f05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=3cee0f059918214b49ca89244e00edb781c4f0e56b2072dc9623a4e2ef9748d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=f840d4c1cea65312702377ed2ba5fd81db68087d60ce652ab80cd3fe669d6363&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=c27d3947e7c581b966533eb1dd0efe5f65a6c1467aa0b06c81fb75136bbb0baa&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=75d1d9ed7cf512d1db3577144e5255f5aad78ebc0dc0c505678c53c574614937&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=146f321b75f2b5554b3ac25bdbc9d884ee6cb626e28e42f17df7707e3ce39c55&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR7QQS4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGokQd8e0yUd7I4gj7qW9Jmgqgf3syOPG%2F%2F6%2BWgYSKNtAiEAv9hkwAQIyreaXzJeg%2FRvD%2FJzoKbytlvvQZv9wD0I8f4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfxvRttBigCrbcYUSrcA5sIzQREnXpj4hBdA4uI2CyZkOOK3Wou8FuDuBOj0XdicuVcu%2B0zD7NxkvBlzXzWpbb4NolefxpXFWSH4dU8p%2FnnGmlNGmr%2BKl86LBqX0CYkxXGuZDxfZljIhbfLww2qikTM%2BNVXQNnwD79gGAS1xWyOr5EQRDq%2FKPbI6A9t%2BCb4ZVRaKuzZBQ3IK769w%2F5GvziFHGGTVm0849KLbglEFcbuiszi%2F4ylqEpRsp5TMlR2PUvWDGlZ5xI6NBMLGobH5hweyJHPv8s%2FcNFdEXe%2Bz3b0Fj0jqFEDHxYUxSRad28eMu5VkyeekJZ2geL1w3w8yEkMngOkzEYhD2SRKCsEew7EuVTfaxN8WogxM8Fls6OYYQL03fBbxF6LgHUNRmOiTk4VtYdBkKUSDr%2F1G2tuf%2BA0qqmYvKAsxNzXprH4TdnxGq8F0zN7NeLmDz0vaHpOUZmdaxDhDTgPz1M%2BgubSMxURUVsKE3xOBTehtzLQAyDwwYESSHOpG%2B97p9618Ac1tseOMAZMHdLZ9oqnvaPCPSyAOGcXx5cGW68qFxjatQRWtGeldwF0LFIBAhL61iuaO37i42y03rTz%2Bpn8Xj368EKpWYUlIr6tSSz4NADwl8L4JpahTZJ1GJS%2BFLj%2FMLTc78EGOqUB86o1AHQz0Ram0%2FhvnUefjQl%2BvGda2QNJpVd3K1LZ6oA%2BRRwucgFzDQRi%2BrIM9jI8jTe2ScTVF2idZbMFk4Pa0Sn68g1gLRRwK65bBjehCvLZu%2Fi4qqCAvqbnIVs80wE5Fu2OCldczAHgXuC9m7B7bU%2BbMTL2nyVH9ktkCXKqPS%2BlbRIMza6kXyleb0ea2TG0MaVBks5T0WNaccz5Vk3511ixJva4&X-Amz-Signature=70d8b514e634c1ae1b49187e725a1e2a632ee9a549fab394ffee406258f65ede&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
