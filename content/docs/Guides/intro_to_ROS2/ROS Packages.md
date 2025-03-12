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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=09ea423dc33e6b4ea4251e60f1a2a31975806a647884803edefd55f4b1d01539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=41f43fa49efb237b4219a1e7db83e4717236c852b9beaa2fdd14752af931186d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=bece2ec9f3a94941f6eb808db453b660f08dffff460d18adead22cabfe672652&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=184a9879e30b935c3d7934abbb2d2b23491e1a51fb16b2c3d1176c11fad1c875&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=3a56c23b027ffc67d41e99ff82d4ad7b18d448ce27643ba93af3b35f6bbb4d47&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=5a41cb879d7c032c5690681e1a39984e984383b9e494b7191606efb328ca2a16&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVOC5BX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCW2BSOjwhHtnEKVeUKEDFsoQEiK3HWmoXDAvm86MXjhwIgZesnJMmDesNQDTbEzPv5X1Pryfs43SFlzMsp7NnTNg4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEMv%2FdFDR8oOnKyCSrcAwZNpa7FO1swPj%2Fg2BjiV7NZAPV0dsYeX%2FjplSTkakK19B0%2B3OOTgp5RQpA5vXM2S8vNXSDcK1LjHtXZfq0djFgKuDNfXnkh4znRzt9m2yu9HneEABZIepvVK9peUGiq3%2Bit%2BS8IbzlYJzYUqa4GXv3rqR90xQHEXVf1aGIb1gbt5%2Blz5cQwv9yHncRSnuH%2F4tudjYGEaaRQBbAVHo67yNcPDU%2B8w0dWnpGiVtrb%2BYAb8Wjh9RK6uTPOdFm%2FmdWtQ5Tn7PME2X1u3ZG6Qw6nEPdm2vk%2FVISM0sOq6jD40sXVQuCw9969FPLDYgsAuTO88vzzgBUn6g%2FZEj4CBah7qMVTtd3SKWtRbJ9TNrccpiDrnKmaGAzr3vFbb8cUMG0ua3V%2BtXl2kxswnW53jZofSj8pjsVr7%2Fo1ObPP6NKpx48quaZrQAHl75mb4lkvGCbsEyXMmffmlQdQDZ0uEr%2FlqbjrmFtEVRicP8UAZgY%2Bx0ic8syGkId0nZpN53fjAYcv5w45K6j6qt8F%2BEoVTmctKRd%2FRt%2Fi%2BiVkFN8TRpjEc79AznAGYoOHeV%2BI5CLelf3H0WUvnECUpf6qlwYU0XBaVgGJF4oqNFJLBibXpU7WBN%2BGbc2pkLv0VP2mqMq7MMSAx74GOqUBAxDz36NArO1nDFlJM3BnnXcJ4AWOyIPcLMeXLm065jpW1PcgbE40licVBYGQZXVLPpPLZYTDjNjVtEZZQjGCH24BNwDfBstHkBZ1ux5kHPYvrAXcPXwb2IgZR6cl5srk9pyEj3U5dQ9u7jp5L91EAO4Hnyp0YwzRM8qsIwb7fvcZYnJgPIelrC4RtW%2FPhL%2BxcA4wAZJNewWIYMWYt3gPBe50vYaR&X-Amz-Signature=477d420fca04474c05e1c7b191b1f034bc51f6d7002fc33d71b87997279a17ee&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
