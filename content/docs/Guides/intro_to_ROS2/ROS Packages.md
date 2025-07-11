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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=f6845ca7328a5bcdd19a79b273598530f58fd0e0d00d88d333b3355b7bba515f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=ab2a66ec9d6ac6ba3fee52ca98be58f071977bc0e378e6e0b22fe4927c0b610f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=05d6be4023eb0be128fcb28ca33ac26709db12f04a284e12165330db0ffdefc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=5ede22d4886d5cdfc973fa30d0212a747d9a1668e2549b19e223f1d3f45c947c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=332355f0a8059fdd965ef4df6b4d5f2d7754ec34c1c2ad4976f7be7b63a1857b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=13182d20ed8ef8dae4bbc7bc23b4179e378352a61e6eb210fd88c4a204f2c8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZSV7MG2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ4r6WWjixC2FwjmeD7kDRCH8Xiswb%2BQiDLJaGIkZjPAiB%2BJ1KoxBV8BHbwPZZbrLOOnBQaY34VzcBSjfU6%2BfPB%2BiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhgXSumOSXtxKxrKKtwDg7yOmsQmHXdhd95R33N%2FQm9CdQiKDZPWmMt6s1ad3%2Fku0f%2FHaBKw%2FkcmXvoMWu0XitaKN9tm4EpWHA8MHtqssFYopyaf0cEC0gavS0d7M9sTkznW7bwHZfdEsP7pdJMHp7n4pycXoKFIYLXi50YSiTwmvmbT51FxwSa%2FhWqpyCxeYbwNCm1YT0YUbcTcl3dc7tCROuOlM1VgcohpYzOnEN1Omcy2o7Z86MJkkBDXJYl91D6YxHHRG87yU67n2QJs2WgpLEAL0C6O1uhf22iqq%2B1ejCoUaZcJE%2BTrPBxoj7vVtMJXwjdVHxAAcEr016ycUgk8fTFJOa2V4h51LNdepC%2F5bznIeIf53tOu2OiJecSnGPg9%2BGqKmMDh%2FBFYc7Nm2A6PfgZ3%2FbpykMrXT2l0HZb72OeMNefkVBeNeOo%2FPKADH73ht1YLVu1CaTvzd%2BWEcPa1yrguge36ggVSBaQM6g7dOfHx9UulW50KBpC6QElQUvUAd4NsEadWC%2F%2BSa%2FZpqh7lWZocQVKfk3BnULDzTD%2FmjwOJTfjqKQx0daONFQ3%2FPdrR5ikb3jf3mW595c0YLNWfrZ%2FizOKqUpYV9fYaIwixCrMBCBJhE%2BJ9bkRaAo%2BXnQu8mmI%2BwQXl6uUwwP7DwwY6pgHM8XMAlRCRuLBXU1pM04Q4PCXRaP3qWXDki40NfozlVv%2FXEXUfbP0rOGv2kwm%2BxkLQGOcythZkyqYX79qnO%2F4Z1rFkOphHZD10mBNxxNwQIbnq4bygZwRSiOj7CUV49Z8fqncu9TQAzLFn6HSvh66K%2BwgbnGF55%2FQC5yBhXF0G52npVEQaUulhtKXCoem9NguliJJwqacfAzdsNdAdM9gcrFU7TtSL&X-Amz-Signature=d20dda02c4851aef4ede4708cc78bb1c3aad17f0b7bc4aa8b0ce23e7acddb776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
