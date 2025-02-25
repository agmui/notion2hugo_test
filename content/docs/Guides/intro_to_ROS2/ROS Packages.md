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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=c33d68c2cf911eaae38c3aafcc84fcbb57135d8d73c390568201d9c0fba31ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=3799e951ca5e523821cb4984fadeeb11a1c367407490cf19a8c5fbaca2ac7ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=4c6743bbac45b19f749b1362cda46cb6045e549e5f9cd3f78a7fc8df8e844a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=161ee2a4efedd8a7e1fd4d3366549945a6e4c639484ff3fd9742f60616feb561&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=19e0c21c47d10b2437a1d19bade1b7d63ba45d8bb1cfb443c3b7a9ab93f9bc39&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=f22d513b153b7e8de5a92ac5a77e3c6d80b2ae632e274d40c61c51a8c1c797a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3NMPNI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDmI7DbYhMMB%2Bq4LlnCpjJSAlqPmSGFok18DNqKdLEaTgIgLC1EMWjYzWSSt3tOn%2BXl9bRHXommNUr%2BhIPucIYWoOIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDK2se3Fq%2FKdKB2Af3ircAzdkXT082S0ZI1SFvR99qqJRZe5xIoQYKNvgSy0ex%2FvO8Q%2FcSff4jkotytmbbVnUCSbS4AiIsLtvfd8D4kSC6DkmbD%2BohQGlvm2L0vEWN%2F%2BauiW1UuL3aCgs%2F%2BIADYjlg8epRHqCObVrCJRqd5s66zpqRR6kHNDgEj6GDL4fT52ocGEGa0rHGhYHJYot5UtZPnCDMJ1CJMLNLpAvFA3DlDLfED1mkKKrq9MJEmq9jKH4iubS55UNrsfA9MyNv91nzMfyJuuKq7aSC9MrKtz7XiBG13F5kNiFikhE%2BsMOLEPX%2Fspdti9LllZsrj5qJGcvjdh7Ft6TZWduKPc4XjBDYdzGtn2i246wa25HCjLbVSMqwpmutTJSxFdHd5uPjSgqlmDP2OdLrygI%2BqlRPtlsElap6Awhs%2Bj1BbGhhR5oJDz3O23TPIKw%2B5V7meJeHEemn0Bje%2BEGwv9R2dM47JAaNVpOkXcRbJjvTPM0VcRHr0dT5%2BcPPbZaIrOj0H3X%2FU0HRHwYaz0ubaacmid0lKThq5zXTwdBiYjKiz1%2FtNgm8s8TGK71BEW2InB%2B%2Bl1AJKkErYE8nGrm2u1SkIY6%2BVcQfCMAwpy86lv9FyEAVRiF4qlZU3kFzXcuANTDHu7GMJ%2BD9L0GOqUBIlL8rX7%2BnkvS%2Fx%2BgtvpigOuzDbOgVxpFbJdMUcnUW2EiHlu1GLps5v9yMgVAILUpxcz9NhGZ3hPv57hSc6vsBbOEAFszCofzdp8BbTs9M%2Bmr%2FqpY%2BOa%2B2nYK48%2BqTID8OQf1VMZZzWj048JC4h9kuFvqn6Qz4oyvvNGH1qH6Oqtx4kNkG91FNYYSdZuPp1cBtZgujwrohOv1iEuoDruwZ4mG8HOl&X-Amz-Signature=620f5b6502fc5da8ec870f431fc486032826135e5fb5854590b9291ecb0e0ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
