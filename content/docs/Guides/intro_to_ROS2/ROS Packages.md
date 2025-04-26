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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=6ad0d5ed469fe54d6ba1e7b86eadc84e2d0e8eb823a6da331558d3c011d60020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=58003fd8d4fe7c5c221d0c53fde86dc208b2ba44c35b451962ff8015fac5b5e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=e939e6581a54b10e291d4046512bd1a426ac9ce571d6f0709deb891a1e95181f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=b0e35f6ba69423689cbe4478b97938d0e2c347eaf22c2a2c6bd7ded7dfb008d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=048a1a98a3715d5dcaf122a576de861009b4e637dbdda3cbce7cd6997efa1a70&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=eb5e4b6a7b1a2dafb212d19f9f57d27f6146ecc0a60f75629fb110677c5cb94f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5TKWBR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqcw9ZHaSNlTi%2F25tzXQf%2BVZLYFvmwFCoPeukLmvGSRAiA1AkyNEjGKbi3ID5BAqfbqxdZWfPZzo3U5U2tJb%2B3Oeyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMBOuwTGQrpMA1hAmmKtwD6noo7KA6GM7eSpBQ5ZCUV4uhpLVkDSw0K1pdpMWuQMvGz%2F4dcav2%2FwX9FhOxmm8ls40gjciaIAKUnL11nqrz%2FboQZgm%2BN1NiA4pHPkFJMoS09xtHTSrpLvXnI7jtbQg72A70EJJcvKdwHV3gY2W560acLOPZ4FcolHiaswf4llGVF1LhavzN8NUgJeEvqQxlhWFBIYcLfKaHoZiDGPsEFZqbTRqydmKN1QRKDqsAlnLQFr1BYBD6oYM564Q9CWwA7fktoYWNpU23rwyEDY5qJlHeCxsPQZM8X9za2dFUDJ44r%2Bv8DXpetTXLxiJKn0%2FqtpGFQZwrkQDYhQ4dHk1NR6BR1OJ13QaUc5Vuh6QC%2FAtRjTLryQFxBrNEhtn1mPhMP2NivNgd8OfrgZQVVMOqoeCwEQaawrnzU%2BipQ1A%2FO9hEe5Nxs1f1H9ZrFCvhzpeQekyTGEAJ3CJRqjEZc5XUSUQK825GYQdmUKM5ZKZQdPsL1J9j5MQSoGPDSWxVQeq6QrXGpIreRwmCq5YtSJolPXHOvvHPhSA594ph3DpvlreB%2B9Cg3tNtKKNTZn7Bczz%2FcSKSXMFL9HlFFtP81EswBGVJfABY3D8GGTyOzZPu5A%2BzUznnZVBe0B0Slm4w9bywwAY6pgGUxIGMcep7PHJkpUlY8BWVoZqmpzuj16FEf0OtLtwKemIau%2BbJHJFtRAfv23fzWeikfmfxLrF0Vq5g96Cz0qY7konOsqNvnjHyFKD8Pz3Zxj3WOlfCqAAlW%2Bjq4LxAG5YA53lLYsF6UJS0oz9WQHKgE0pWCtkRJS%2Bm2DaFHGP8Sa4Iwxj5o2oVp%2BeBuIrqOh%2FVgeTmmeS8gBqpYHRiKxwufVK5IhPC&X-Amz-Signature=d89a4da766001b19a510bebf24d3303da8b5c7965f023e2e504b42c3dd350c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
