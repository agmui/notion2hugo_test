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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=63c2d61501780d1d66d2ea40b1f87912a69716070d0212af3fb29a5107019906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=3622602b54315afafe00fb773201a6caa09da0c7300b53bd6955f6cf4d52155e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=007b39602beef56420cc8965a44de362b05afc7248fad2cca566b0ca134b8257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=24813813a46806f4a625fb5b6d848ab0754dd4f84a332890af47e17ebfe9d67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=1b6c229f2573deac55ce1f5f5a149b5b1623e6407973a4ed734bf16d380dc204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=4ebcc716224048a8c4608ca38e1226a9eb713a3741d2ea00d83b9c8c2e67a1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAKJZ3YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFUaHfC4SDAASnSkpcJm8xStIzeWco7zzWY%2FVVn0%2B1YwIgGz0KZjOKxIeq5Ig5AulFCryUlP01IRV9BnFyEdaYYTUqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FDHl05ytev%2BdyI%2BSrcA%2FIEQlMwPyF3L6Uo%2Fi2gPBe4nnH1Y2vAmmQ2RL8AocB4U3p2oI94pkB2uvA%2BVl7x1bnHUSQuvdmziryIdabSoGjvR%2Fq2%2F9ETxBAfd1au%2Fx49IOPtK9S82%2FglQmHyJYXemwyCk6hjvhOE1FBnIGBk78kN2Ojrs1MZJj7ZxtTtmNUp4n%2F0bAIHlqZm7s5hb%2F1osxm21uJnEa0TAotgyeiv7EXj3IG7BrIidSvwuYptFkFgVLf23ndDfkp%2BtMBx0Njs13Kigi7FudAlWKlQD9rdVEu40B8fbYee2AR7rt0OBt6ChmzGjQcN82aoyZjwfQ1ZpSfgYsdPLEaIjetcaj6rKPd48EVeQbeFvLojEOhPEhMUjyrW1c%2FiaD6sSd2Hyh3ywBwhPzobONJjGWBUX2eJpL5y5XuhxaUyrWW5xQSMUM2wsusKa5OMSyJnT9nANapd%2FWVMPO7IBCqxfknRfeW6kxGHj0rKNRDlLQnNgiXjiw%2B1ymm%2Bpf5vbIVwE%2B7Am7REboTLPa2bGykxh8NxJPe4sj6AKC2lvrr1jWKGpLl%2B%2FNJEAtwYLx%2FbXvEa6V66f3E3JCxLBy7mIDatvUA%2BasYnyQ3akyLzQ2HjUKUBz0Zt%2B6x3tMwGQhiGxTt4Rq2UMJL%2BvsMGOqUBrfgoBywfDmVu%2BXpnm%2Ft%2F4WLPt%2BLmxfsKkZHwoXoQsCl7fAL2WCTZ1jh%2BU9Ccs7SqxpWo4Xee2AUBCY%2BZmn%2FljGyaqlFKpIOUZItDCeist5cI%2F1OPNvTAHEkxjHJuVTlgsbMsWZRkGFjz%2BX5idvUUv%2Bj3MPmr8UE%2BHayY6CI4qyjYT8PylFJd75hyKt8O%2BKYQn7AG6AtMPbBul%2FPiRGsC3DkCqSzL&X-Amz-Signature=7a3cc842397bd7583e76051052d73bfbe5df070115c2d44b947137a7df7b62da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
