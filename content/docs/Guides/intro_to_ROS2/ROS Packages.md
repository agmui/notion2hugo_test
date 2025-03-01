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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=03bf550fb18cff7b5d423dd7ee015051a1fbd612d408329aa8f9947fa4a7e993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=b3a2888287774df3e4e30f133c9dad1d3c45609002d6ca4a001cb40293ca048f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=be6c5812f3204a99a0838749446639c1c6acb4d3fdb86e7cb020718d8b0d14cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=507a897c4f52a2dbbcce847b5c48257e9fa32565deaa2ff9d1c6c74bf4c997d8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=3c4c28aaa9522858d19f1a80e0a5527af9e3716cd3a9468591be0d0df667b4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=d10197525f81a0ad6a95d5e241daafb8e9c920f6582b43849b1ca836ca067efb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DINCSOM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDnmaKCb0qOcCESa%2Fuc8Ml19UuZzw06DWEAia48U7UprQIhAODHKdzNtCAH%2Fc30Lyob1E371s3ZPksKAVfQE35YqJRaKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR6dLB1kACrUtggYgq3AMV11o4Am5mFvAiXu5K%2BhgUCBQhfcRbypthUWsuX8ueP44V1QhvHTIwKxo8sXKzYQ71oJmkvC4FWL8c%2FD7WE8rD8SbXaETIPVbvKwyIwN1AHUaRnbKY990neOdTAhwkxf0is%2Bnr7Dy%2FrCpEtIZ9Zassp1kmwYMrPx7DSaso5P0GcfVyPNXsQbK2Z7F9M11UP%2BIcyoioj1Ltayutt1n%2FkpbcNtEZIL49lOZWYP5HWp7DMU4WTPMyMmUOwA56RRn28E4jYfInRcecjVCex%2FeeYsxLOn86uloykcfrmksCMzHhkOoKxv%2FajxsTaPXAVYxgpSqjatnGFt72svZmYC99Sp8hjG45sZcclR%2BzJ%2F67Tjmjixoy5eEPPOnyIiw7yCijzyuCZc8NzCsEX0RJKDYE6uSoh6y%2Fp%2BEXiNwLRLI58%2FZOUg6gufFawHg8%2FfYXEfDnpxNwLSM%2FYXKRRmusEojei%2BxBCIpV3OlPsxAQNXhpJ1c83hwGML3IleIVK7E92i7eQ57OqD6Nhiuy7GQvJ1xG1tQBVB60CBKu6RfOW5R6U1u8tVgEdA1ZPBjU8cSztbxj3PLjpbTxJi8Tg77cjJ4DF0gM02Af7q2eViDKz9SC%2FC1uabTY9P57UzuoOQzBZjCduou%2BBjqkAaxNITgWRWGDV7Bg20t68vPJAJzlwa2cRhrjMGAzSnCKSKQLPT8%2FkOqUlA%2BNBZO4T9FtQzmjCWKOXAj18XkgW0K7gOZjBKy5rNf6ttTbBTPJ6GeYmw0kr%2F%2BlRBXav%2Fk4DknEqyb3sQ1TDqBp5W9K4upWh6VyPiBK9KebCX3U4Vy0aNeINekA%2F1r0oqwvG2VFS11aum6hkl51LoyP8L4y8xCbPF2R&X-Amz-Signature=834f71d5315089b5d6287b685282a168b6476e9cde395c0a994c93777d271bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
