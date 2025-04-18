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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=26c4474b10f2405c76c6708d89365b1d351e55a2abb3479117b0ecdc044987c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=c4b1cf71fd694a11f2474e1d163a514905dcb8fdbba61bb2f630a421384f3ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=af2aab7279d598b6b38639f92acdd9d0fb82e81643757d77c161da34af8f2149&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=120890222bee98b4e0d280b4a5653c4034fffaf4276a9b5239db753b1ab3218a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=dfbc25e7e8be3bc926f78a0bc5b69804eb83de5d2a1a79a7c3a1aad83beb3577&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=e44ba03b0c198be00ab1bfee9bd0a6f5244086bd7a897d13c24f21e7239563b6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2VFEI3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuXJMBewmVU2CPYvNITTIkQSnOWyzKHa9qCetT9WpmCAiEA%2B4LtLug1EE21Xdzn7LeqF6CpdSOHmmDHxBfdP2Ey0Jcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPuvm%2BQ0mBOTFNT%2BACrcA6X%2BfHOJxLQiPJAyeT0zBLDTJrL4jqXAbR%2BAPt9zHnZluwgd0UHpMBjBNaL6nZoxRw4OP7zOUbXZwK7SyF%2B2d50X%2BxxtYfLYsSO44LRE%2B5pMZTeiCgZHZ6%2FXExt4cIm0Txknle%2B0xDK6LQOG6cl%2FFmmOvcyEb2fFEQ5hw1%2FicL1bVWVAhuK5LgST4RD%2BngjgPS0UlKxylvvCDMkK3QNG%2FoKtXg1NnZud6p1%2BbCTRmsr%2FtmhHAJ%2FDwMhqtmel8105pJDxU1qwmQOL0fYNvD5UVnM9a7RyhFhUDpRwX5Jn1ttOmFFQt6LXlA%2BfYtr%2FtLbLiYt8Nr2T5N%2FMdLoyVXvEdF3GPP7o19h0men3hfXqDtuAzO0DsxVmFlJqOeE0L1l%2F%2F9ExNFcXYPuBWCXz46TLVK8EgRejEA%2Fa6I0QH60l7XhSQPCkKcmn6zLb0%2By1AW1CUiaBFqN1F6o9u0uBKZODmDTl49i4HYTMhJkr9gtNc9IRe7cJ%2B%2FeVWdGA0I1SL8IKXQRVlgsN1O7ilI5CV8SQ%2F%2FB63xnqE7Exgb%2F1%2B%2B%2B3h5J3HQRLcx%2FIUeTh2pf8HRueNwYgz2ofS5UIRtNdqHtZxnUhQVWUDptVaf2J1J7mNPMcXs5zHg46l%2F04oHYwMOLeicAGOqUBKmVQS9ShI%2FOyGnKIvpW%2FZeFrbpMGeZDy2%2Fksu%2FQs5PePGQW02TQVHpm4Dl3sapFlZVuKUDOIF9%2BZmqc0%2F8gcTYNlfMgzYh0q35b6ZIuHbpgdGfDTcq9Hb0RS8uaCjq8gOhWK00vgmmQHm4Ng1ya50ZrIgRiMaYdzdhwsMEax0VeQqWJA%2BIlBsR02SppI7LJkkqlc0iF8yeOQ7AZM4B6dYvENzJ62&X-Amz-Signature=a9a3a8581d3b0b3d5ddb09f1fd6e0917187cab2cef083e651b3ea66ceb24f712&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
