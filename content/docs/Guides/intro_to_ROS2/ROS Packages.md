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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=fad2bafd5a1768bf1e285bfb09f86331367b54984ee81ae13e19a93558b5f409&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=7063e20f7c037c0ce40399da6511403b2d73a9e4ea38e70634abee993fc00b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=396b33adfcdde6529159a4cc6f1320a06f1de102923629155149ad29728f9180&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=0480c40a85289b058eb6132b338eda7b9275cc62e89b1ab840a0c5f1fbd2ed55&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=12227caf78d057fbc6375a71b28b2aabc67387603ff001a8f09e42a62fbb86a6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=4c5f05c576ed66442974bf2dca58e18758ec74e5dbfa63f9d625d47cbd39160b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4SEHPP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk5bXDBXLNJXQi0VXlSW6kKMSMnSi2conqhOMs8HgQ2QIhAJ6mZAGdiDDVwZJ%2FTO4w%2BN4EZ7PuxFhNI8h5jwkaSu9HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXtd%2Buaq1Wujecqoq3AMJZ1v23vFLU91TNC3l87em%2Fu84ZTyu34TD5rsdJFNF6ch5IG9zQ%2BJVAMBNcQUBedbgp42njI31RP9RWjVooJVc9tlxfmFi7zRIjnzWyIEanSXfr4ecTebyQbNh8mfMyP7ZsOWO%2FqQzdIqDRh0au%2FEWnIy%2BpF0ieO8%2FSUjI%2BHSrKkHFZcGUkVeyPqI1l43MMcsMSLdAYTsTeeb60LqxZdQVHWG4RPqYWoFJmw51baXixzXnE2urBwB8Rt6I%2F3NNRT1WLmGWTbP8%2BX7%2FkVsas7oJqj88h9Qg52iaBJ6dCUlOq6%2B%2FtyE%2FeQH8IRR7fYrrN%2BsaUefvkr087s9c%2FWFzZ3CEQlAFOQGZ1VQeAxsBGjTZ%2BuGD3OlTuiOdIIPGDPi0tnTwkS5wGbfMSU7TPvTECTnLPeJ1T0zwICzSpUbmK7acRngsfEvY9li7UIk3b7%2FCoWUTstII2t3PgiGG3goAEBbeQVFpUZgwcL5arUuQeOkt4uZC0akN2pf2y9GNjz9nhYo%2BNVY46%2Fr0nQRo8TiRDfxj8IirRPuJinqAKnCbE%2BV%2BZF3783Sh6fqRIqZG1w121mULtEj1cMAXcCmgRFUaHRQHLQZ3%2BM0PpV%2BWtkBDNCeTpQnmEm1yg8bluSrITDC54pfCBjqkAcGNRJXMDZjy3QaBzZIssbPhyAXaoPiZ%2FNy1LqslhUOKXJ4pk%2Bj%2FXJl0vGWrJgjl6IFGo%2Bq4fqsnj1am6dxVQD15gLaaSJvtXj8kgZnmt%2BbCvDJlHW%2FvmCaTay46x12DNSbagodEYJM%2BJFNJ6NKOi%2BSK1phQVV1UmC2fDGljQ%2FxvJdJwAHlpwA2l%2B4JFhSpPaLt8aUEOFeVoJWb8UtKsYGA%2BjRyz&X-Amz-Signature=1d297bfdadb649a93446f7a2f3b6d819df81650543879abf72457e354c0441ac&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
