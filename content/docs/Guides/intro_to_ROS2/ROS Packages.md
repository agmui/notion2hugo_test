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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=d6d11b86b2294ba5f34a146e7a718662632031df505ac8cff01f114e7c91fa28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=284a20f5a9bfa1e35b597d6f2db834ff90733f609787d4ce39df37d81744844f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=d7c9ab7630ae1a6c0b0038ce2728234290139f7268213b340bfb6cce49a57000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=c8e452c289b7f1ddf3978720cb850b6cbd8bde73e00edc1b410881c2f6952919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=2b878ceb548721d79146debec4a0dd707208e12b43fe0a273e81402425f6e753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=fcf102c00e4d8018346d46f4d3f413c7a67f033e2c5f5955deac02547e4fff00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AM3SSL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDNSi4TYT4MlIZf%2F9Qn%2BbgjbvzKq6kenS7ScRQOheCyQAIhAMslQKYEVqBXAtyY9D69A51QzNCHLAKtxfZ9Je0dg6uIKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD7lUjrQoQWwOU0pgq3AOHBXKaDqh3wA4cLVWG4CjIKzZemQ30Ngy2Fr65tqDEN9NamUkvJ4ITe%2BdkTUd42xXf5OhrxTMFlpsVsqJ50VnfL4ezmJOTZk%2FTsPV6ccl%2FIyYddN1A%2BV4%2BKGgfodLLNoUcKM%2BCL0OWE6VPYI0M1iGhF2DMjf4ykOo3iAWDlc4f2KOwoOhTfSdTgyQElV2DMXh1hRtU%2BxmWiDPlyQzTu13MgwbH0RRR7xOishr%2FsDU73e%2Bx%2BMzgOpcuWGhkXNWN%2FCrYnLJb3y2%2FqHLmIXGlHcLer777jNGKYZDcrZnH8GHUu6SjrZ51f4qo8mED%2FBtnw2PFzth7iEcXLxCVYvwYWOMIsL4zERgdLRIuuNq%2F6mYhLy2c8UwUDblq2FCdakODLxf0tmK74R1L1QP4KzbCqNKgwgZeut1%2FVcQ9gwXGBgNoLJPw9QmdBtG9ayvzq6PK%2BoCqawy%2BuMwR0fqAwh3JSYQL517DaQO5xr2OoOXxMMNJOtrgKyHnY%2FIdloWnNInLTc%2Fj%2Bzt01%2BL%2FseDBECnRYR%2Bl4YqhyLYkmQ28%2FtJl2q5JoJUPztOjEIEbb5Doba1Neb%2FX0PSAErDZjqLnE4C5Tbqg7sSf3fO3g3eq%2FHseaf1aNoaHT2Ix8G4zuzNOKjCwiKrCBjqkAWbLTWlsAcnKWuaMsCTZqCzPHxsNTAhMxscvjeKvd%2FqQafMPz9Wjt8WOxyv%2FBby2YTxOnHoIqcTWukGA%2FVRay9m%2BeSB%2B5E9VSyPCda9l2W4pDPRNY%2Bl5%2Fj8rKp9aNZcJtTkvt9LaDXupe1nuEdlgV%2BZVt13hj4H3R2D%2BS%2FRz1uMP9Us6bz4a51qAVNDlV02Ggk%2FQxPnb8DKSovJzt8kdepriqXZ0&X-Amz-Signature=f17127492de6ab52151bcd10e4f98221a98476c4cfd874c8365f0f5779d02769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
