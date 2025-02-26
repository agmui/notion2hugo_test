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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=06a0798b4fcf47fc35e6a20e639ceecc9c0b06fc7ec480390277a1ca589c8d47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=0cd22caa0427bdeba49ab66c779da247f835ed932ff6ceb9a43dbc66d0c16894&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=9659e08f8ef1a2ab0a8b4cb1829d02517463c7f262810db1c27ed81be7ad3181&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=a6e46873e0afedc3d7236b17ed71942392ece824962b0b873b54a0cb8d18281e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=ecf3478d302ca38e0dfb103b07260b96598ecc3a9e60ad1a9a18907566f5fc37&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=0bf3da7ae8343b68dadcf64319dd1753bf347f148305374778014eda4adbf160&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQ4NUK2%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDBZQhcVaeC2Qg659FoQyF0oZDyRs%2BmQ8mpKPnAIAj1NgIhAJNjGPzBhw2R%2BslMbqPpYqgdyenMGncRaWtpQ%2BHDdR2xKv8DCFsQABoMNjM3NDIzMTgzODA1Igx5Edh3lzpzkOwqsFMq3APjDkG58b3mrAD7H6fGsO0AUAm16qzSMGxIkm9t1utueBhhXob4JvhOGcyjJ%2FAzvMidsM%2B%2F0F%2Ftsp%2Fi2gtK78zF1xW4GAtnGH1OUq2RlwphKRQJ0ZUCSfUsQ26lPQjlGvH5PO3jcB%2BqqvtQ96xKJozB7FWg0jHRA1kphhldql4%2FsZ7Yo4PEwp3tjbxC1KkCw6IOa6KpYoYn08P0DItGXnGvEzlVzu4Z%2BkFZKx%2BO%2BzHMTJnC7USd0W9A9tqxHB0IpWOmUQM%2BHxSa2bQgDOalPadhxdiDICczpEIeRCUGTuX6ZGow%2Bb3XCrkW%2FhOLyaFBunvGnzxGLpW8aSxnrq1nLx4GgC34N5VylHMeF75CBEhcaLmXlEkqo5DKnChq9fpskQyzalQe2CNq1w3N58rkb2u0rRwG56in28eHcDEfmkA28U7H%2FBXfcGTuwf2x9BlsnG6d6o35ExuRS5a2TbtzpuNSvpoClmBCmvHcbu5QvFgSxE17rF4%2BWDgl0z4ENaXzXqymH0iQEDeCjiCvMoLSko95xeHfCN2c8uMTrp74QyHoj5yrhQyXCf7cBfdqygfYPiFaIpCzajeiTqtW6klDWHnsrvg7ycNqHj3tk0RvYoz1AVzKU51CZodFol8dsjC3v%2Fu9BjqkAeG47WJMrp7m6iudMLt%2BESJQuW1EfXjs8wTAA942cLnaL2E%2Br2ZD7XJZNgQAO50jpWZq3ejmGhEiXzHVbqero%2BwI8G8%2F1g8kAAXAtBdpRAEWsvbP6WroUE49GHnTQ2EkNxeecWjF949PYfX2N8fsMpZ7gayFNWltJgDPlnGm6i%2FBlDr%2BKGzxdCwBfc8%2Fstgjm0OTFvSHyT6I7xaYXLNA4dCn0NSz&X-Amz-Signature=184fe8387d60c35ae8908f6c9833e2efe4a4e65d4880a382539a433a759efbe7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
