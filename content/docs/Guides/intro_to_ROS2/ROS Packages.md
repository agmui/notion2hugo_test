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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=86e33315c6e2eac7e0eb77d3b2c5d3b706f8cb37481356b5dad9f50582eaff3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=964c440f0f00d82b047b2f6792adb823d827ed3e09359485f3d1356d67290d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=676a0a204c670b600b08e05f96b8531a40dab419ceca06f53e0eb0a733b7e0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=985086431e5f26b7c17c12ac6d9abd08fcd3b3e5ced0e98c6d7c8e23d0a657f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=b95031815d86224ca55e2b58820e08ddc459e7ea024253ccce313dd9b201f528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=d96f8f8f48cac4a28ac1894a4ca3a33eba2b58bb1046e22d2da21d6e97df0b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZYJZR7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnxJvPXkIkPRhyELFRMRqEti5c%2F5vODVxE2zLJ9abQTAiBl65P21oMaSbNrLkNfg94IdTfgNxrhv2AILcMa3Gu05ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMaehhcPzSiuzLCkpIKtwDRot2V7pNVsjWFCEDJK8Ay2P%2FiOq%2Fx4bj3zmJp5deV%2Bjba9olKphDj1Ahhmw8G40VTCo7wUr8dd0uHYgozSySMOoZ5q%2FTbSHfZ%2Bda%2BAyzDKeg9NVex1n7hvNy%2FBNSgNRBY6tdASMqHV1qJGY55QkAdhzvX8MNQdjUuEFVkgjNtx7zoZXZi6FpUkkCK7MrLHWo9DI3mnDr6YY340rCkrXL6oWpYBKNwkkYC5YiqU1nvJVU1b4rJSGzTQIryBVJX8upGe0xY%2FIVf3bYfpregCZCSpR9eM76hVerpSgyOeAlwoY%2FpI58%2F7qebvy6OV9bESihUuW%2FoBw1KbDRnlkVAbkhEZ04J0pbrG%2FN2ya9plZs7DhCSQgxu08KoNLWrniC2ZaSrK6NNqbsKnQX7rJF5i3PL7eim87Rd2j7O6nU2Y9mzC%2BsNdmkBzZBB7wPhG6IntXUYagedEKyYoywy78QL4ndXJ2MuLAYDAhXO9N%2BgMIOrgI6HQ5T3u3y5Qg9usbEqC44YTS6Yd2n7W7YwXWi6dIM2zSw08gRZBdtTB%2FAmD6ekJNsLRExP86FOvM6ToWuCBZ5KqIYeko7nxa%2Fe5JwjqiZcUtVacfVuW5BTXjrQOTATw1PJWJojjTdl8Z2Uksw7vfjwgY6pgENL9rqR4Hz4iOm6pASZTbUfx5MFtJwWKJGD4cXuAX6A%2FvcWbwOEQ7JUD0tvj6YK%2FT5aiBrFhspbEMHH6fUCvQYtVb7FVOGEJI6sqoyJje5rAL%2BL%2BqROqnJRLLUWIpr%2FGtlUw0W3f%2ByKKiXLcy3lDvYbQbq%2FF4ntGVNocHbvkTjqdgJiHYsrgCpZgTfbe581EA5utVBHLCjg8C%2BGC1VcuRxNHmecc%2Br&X-Amz-Signature=97c0bfa9e0865ad6e3b1a4fb2b96106864c419795514b3d0d002f297ed02c772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
