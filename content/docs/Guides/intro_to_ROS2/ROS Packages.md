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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=39319e98ede5a4f0a88a2517efe82e89ea05b2cfb32056b4738f45b08d7de46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=bca0c9d1aab34680869174a3fe500128780674ada56c2e27cd229f34ecaa7cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=da3fbc2a74bb8a3066c10d1703cb754252cbdeee2d9c79a21a895b27781d1d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=fc863e1aa55d1b6f0751f8a55dcb68ff673d846ace7c0ef06ae43452dce588bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=351712174c87d41f81cbd575ab7ec1c8e48aac225e46a830bb3b9c700e50b864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=26b93469d0449a59dd9c41f7cd80af4c8e4ff943bd420ca9fc5143e202ea29ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKW43BO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ux1EYMiKVyZHtIJviAAz474ZJ9jO5%2B1LHOdEtF6LygIhANQohUBfUCKop3uThZlCcXFl6KVkeJP6hWM4pbUZULxBKv8DCCQQABoMNjM3NDIzMTgzODA1IgzaeJarwAy2i8u3qrcq3ANMep8u1qSPo6MNxqHHD8WXLLQaX85HAeDOtkmYBaCwi%2BXFmJ5cPtfufluKRiIzKlQn7CYfQBXTaElisFtQ7AZlG5KijmfZDlNXhyr5cCGR9RpKNIJFO4tFxBVNthEWRcCM%2Ffry8je7T60xCxZyghxo8qJxlhEOHCFhynTtIq%2FO1w9aPp4BfkUs9Y5MLbxMIMkhSMcYO56ZsYNOmJu63VjoWfoDptNJRKe9mP9lqpLcqxQa0hzaIOSpDixycTPC9rE1SwHY%2FpnbLXaE2%2BmjAYYW12OZfgCe%2BzSp71oIiHyjJXHMP7LW3TkiGtO2SeFylQcvIHNK83V3b4cGg4WDNVQBg8nGmhckyrrXNLT4ue0GXKErx%2FGlHJduAsM7iFSXiSJHCciDgBkp4%2BolJKjnGS02ZvNPIgBgpCR9cziXMbIKRQVLj69b3kcnFok7hKOHUIVPoHPLicanPliEaNdSK%2Fzw5mRyfG%2FLYlrIynn9DmB3DrwZ5W8gv36foW6GaHeYIIaneY18fXoNk6w4%2FTFETu8PHrfeBkkYPLv7ZNly85W%2BT2HDaphC9JHYugQkSoDf4rHWXGwLNtj54PXE%2FGf6ihtc4I1VKGPzu8mntnXz5X%2FRnvUIm4m%2F1p1YyAE6lzD8pLvEBjqkAZT8GPSijQF5DcrPWoLwrPhbz%2BASbOfyrlQMTEpHzhweYV7KTifmBgfq3Jt2KWRb%2FWmPB9Ntonr6MO9fbDYC017xBiZEO4wMU4XBSuwLeT5AXLTbgfUEwlBnsPwcqarPrfpgU8nK5%2BKsLWS77ZnOklgJ0kgyJYHnIjcYJy3Mtm1GWs%2B4KM9UYrsCxjNE4YqE%2F1xcr6luFYjJvmK783o7oJyl0JjQ&X-Amz-Signature=1ec4d0096fb6732cf109d02b794adfd4627986e1cbe118a1fbf549250d840feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
