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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=f0a1d4929aff9eaf8db8c7efd3e3113f2cb125ce597b987e9cd0e473e96d1efa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=9a41341b538a6a896cbf5d67e58fdfa8c69379dc9c64fbb884e99b55916d0c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=2bbb53d070551f4c85ef05d608daa289257a566760b3811cbddf87402d3f8ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=605c7398e95be2f8ae9f6cefeee34ad1984b448c57bb32f17ce029508ddcac25&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=ba18b3f7fe518ad8be4635c0527cf4efb79a46e7ff18671bf77621d1ebe513c4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=0a9aee67110330aeebb31d29fe37cc9d9a151865017d34ce254c872db5a9a869&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MH3GFJJ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDHhp5FdD4XFlUGcrHc6cN1tWRRfsNVif3UV%2F709ZJsQwIhAIIOOuSZEZC0QrpuBbgx%2F1hqOpquI6Kiw5xuEskY%2FISFKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvKrhShBTqKIv0N4Eq3AOkAhLjmPt9L9N8vLtJfIPnG6bA293JPmfJZoCJ16tSPTA32dIfSOVr6iUXPEs7rtgsfNAyldzNgAY8m5%2FIW8U%2B%2BoqnY3sz017eESHgtpLri92CfroDjBzZL8RQQI4avpzyzrevqbOCg%2F4pL1IxCBPq7sg6%2FEEKqJhaCk%2FPmiiJzTgTNfUOgGvkI%2FAMxLGPK5j0Vp3tDC7ATE%2F9LfhFuLPT5jM54d0DPlDmWOVuBm9N2L5HBSuLtIIF45lzHr%2FJCLW3I%2FL08Mml6DU2pYv4YLEkgvvVAJ1syaQxL8nUGQn36mnVbmFdGoUmpB0tgS%2BhaeLXRIf0FueSgQVBZ8RW8gr37zBWNT5AONzwKqKu3OFMlPE4o1dOkzl%2F%2FInJwDBwpMNPsjrizo%2FLzEHvUOSgri72OxHrQ8WTIfgiybOmT8u6IIgnEc5dT2u%2BUmeGA6iluetEo30c9I9u4OOg63mQNAHptxVKa8WLXmzycZ8oWOzlZlOsr9yts4cttlURDClMKunVrZeczFBt7Po7gkLwuue%2BY%2F3y8kHGMcfyPvWbQnSFtOxpcX66I02civQYGeyIL2wXQeX%2FJopTQrCLwrgOe6zHfj3%2Fjx7b2fCFsizcZxW2w9w9FqumwS5OiL8qSzDFqbu%2BBjqkAZFq1JOdsQEICbTLbw%2Fr6tHbM8gBjtfq2exjzTbW4Xcg2RCzQkxIh%2BvAg32HDkvXkap8nNuthB8c0z11OqlG9m3z76GY5tzeIx8EcD7deRs%2FRtyEKYN6Kr%2BKfzihZaYv%2BNQ6%2FEbmhDGr1S9U3R%2F3nzkNYuJ0HxexRIOJ2Xfuk6TExgj0tggQtaKKZYVuS%2FhTExxF9ZKskMiS5dGAarO8ju96Np7O&X-Amz-Signature=9501c68ab8502de7b038d1185e1e0ef8735ff0c22bb0f51cb2a91eda8740fa76&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
