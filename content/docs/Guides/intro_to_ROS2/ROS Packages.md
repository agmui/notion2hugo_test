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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=266fd78b4b2553995e6b2dbb78d694521a147b2ca0dc77ed1f1d37116d71b39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=5cf073ecee681d968fd4b395576dd43d465cf5faafab3ef122304fa0114929c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=bd6bb32a6a82e1a449e8cc1fb552738f0b52506e71762e5d39930a5eeb2199c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=fb383a314c63f317e132d4c2c9c791b66170e9e883a3c60875dfc5668c3b6a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=d009ca21a8c330722c77717d5f41e925683ee867f8b19edf4f0e04ed67d2a40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=66fc76036d9a80a729db2f41ad39b70a2d3aadf6ad90617b835a9593e00661a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FKDUOX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCSk551v33D20vSX4HQxbWdzqKreEosHvVdeWaHwpgELwIhAPWlqpxTJzuaoJk1ZMaNB882IqqRROHAcYzzfzPPmf95Kv8DCEQQABoMNjM3NDIzMTgzODA1Igxzua%2BFtnTpfCXLWcIq3APkyadMn1RXL2in1ZlC8qenjhZVJ5ULhwhxyTjG5nboP5c3M5e%2FTw9eziXzQRKLtHOwGgf%2FoIDilNss%2FbjGDWw2lfGKz6gUoozHyv75%2BxlPUBuBhLHNm1idt0R%2FC%2Btn%2FtNIF9KqYLwgf%2FGnbNBZk9mQULAgp5jxBoNatBaNBp7iunXfcq61LaNII1TdSiXqkz2Ntz9rUDOC%2FUspFhg1w5B3uZzX1aF1clamshOiPhJfKO718%2F2zmOqszenRjLMWqAoWRmo87YNGBvZaAGGqnj8R3Ft5%2FYP%2F3WSejXVx0cKCQADSzg%2FzP9NQvqOc%2FB8PFoYqns83zH1CYl8PwqnDlNYkCKGY5%2BYmRTbLrfPyFUIB8g1Cb%2BYeQdneRN2gPtWnTlmFC5RcbJ6cgUTvvB1UprnTvj5BTKzbPVhwvWVcfAfBfi6G1szv9ZHjuZbznn30OUInONpXJK1C%2FgTGIvBBL8RvPa9UrBVMi8DQUFPgYr%2FHugievjzK6PYcZIt6%2B8Jmf0c8lflWGXxR4Ez8EMPh2y%2FnTVA6n%2F3N8hRdO7lICAtjDyPbgTzE93P1O9vGcsCzAFvpreYSA5CTejcOQ%2F4dlyz8jUhk14Hh3piBZR2dpCPzwCY7d3FVi3nayIqtpjCOgqTDBjqkAQzPhT9XOHd8Qy3kZVYtgm1bgDaDfwynAnXzHvg%2BZYiAlETVbnBqkHTZSoI3z8demP6wbp%2FA9clfaoAe0vZXBk1lwAgHNuRqWJrDqjw6aBTDQFOIEtoMHGvGlusBcLGHaDOPCEU8ZceU%2Bjtc3Rr50RbZ7Of4oiDg7g3pqFbpSJuxv7vYJ5sCsDevp%2FkRo%2FoPl4yQ23LBaw0lh9e%2FgRLA%2BclAkYSu&X-Amz-Signature=798d118d2b354facec4e094eeafc2b828a988ebbcccf962099eb7a9b2f806d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
