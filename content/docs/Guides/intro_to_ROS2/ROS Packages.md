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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=dca085134c803a7376cf81e6adde3d7b6ecda5d885d87314a1c35ff15cc64b70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=b88372b97421e1ac1d3ec4daf2dbe3f2d0ce141d60c2eae18a1c848dbb27b7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=2d97992131dc7b495261a2971de8676cea2987a669a0b95e8108ae0a4ace31c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=4d8ba3841a7e9b61f2d1f5d76cf333a939c356e8dd9d0a16d368b849b61e371d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=2d4bb2fbcc1a9ad55a6930b078871feacd0751c0fea12d0ed8edad9fa4478dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=1fc53b74308d4108f4c9f848c8d0c8965e9b4faf855e939f1304c4c5c3e0aecb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCBMVBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFn9il1nFQ5H4yHQZCK64%2Ftitv9Fz9P%2FMMMywRvDeOXwIgNkPirnDy%2BnaNiwYCE4aoxE0%2F4%2FM916gqzBfTcSj3iuQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKKgeM3bi%2FkLPVTBTyrcA4RIFzmgpbE8cljf9T5wnrsnomUZsAq3%2FJTgss6APJ95zByDfcbHnGRl5qr7yjQZpAnuwbT1S%2FKzpBqIUWDB5kVPWNDjbvvnj%2Bx6N6E6rLvqFTCDWYoCTsTVNU9vGmFS294jo%2F0l1kUj3ivTeLgp0%2BsgjDwon7trGEo70XXKz7vOexdldu6gBeN7OnzSGh52ekki5xQYQllI2nmjgEcEO8B8VjtJxdFluJCWngAsYXUXX8bI3IaVhZSUrv52z4vyRBr3LeJ3DsyTD%2Fw2Xv4w6AIebKB4MY9DO8V90a537Oqv7Uy0xAEZIjB5rMKCw4K8rIRHYqMcwvvUGYy8m0MMqfVZ5O4e6ogw6xXWO9Nk3tvViWlnpOhZ0IqhZ5AxYG32PR%2Bba1YvbIDIAPZhKS4mZa877fz8WOwKOJ1vJmQ%2FzxtdGnUO2sSEUwRvtre816UbKT7CyaX37CmFYbGeK7wSDnYQQ0vQeYZQkKP8Mw9nrh%2Bfeksme9%2FmDMYBv4OnrRFDPz1XV5qrW2VCHDOk4xDp5jExSm8UWuGM%2Fl8irtf%2Bh0RS4lac5p%2Fk1%2FqA50rASAIy1QbnBldSk6yyPy7bMiiCG%2BVvHqPiZ%2Ft6XIhSnarfu%2Fm76zD%2Fnek2%2BF9%2FAPoHMNTY7L4GOqUBUvjc5WBlVYmK1c%2Bepu25JmBVKV6xa7mrRilmNxuyj1qMEEyl2J4YOK4oihfYh45Eq6UHSBHbG6hzAB1yRffDh%2F0lqKR7%2BrOfF842O2MxuJ%2F0KQ88Qxbrux%2FQs65FkGITsLPJk4q%2BTMeUr%2Bw3h8shC9ZZ6a7HWpNss1v%2FsHKcrPNEr%2F4TEzHGFSJPC0z1LPFHtSGlWAdlVgh2qcLKFIjnYzONRNd7&X-Amz-Signature=b3ace295218402873f975f4555086ec808b3f0ae6322aa4e129e662ac6e71079&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
