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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=c9dae42a3c066f43b4f5feff814e9b66da2e2333f0a2f6ce338bb39836e24050&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=a4705f2f166072856b4011def8a62d9fb423548c5f7899aadd90694535ae79be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=a0649fb0bfa1988bd588f516632f0349eb9814b3405cddadf2a7d8754a2793f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=20173c19e11237f4d240e65e24dc34b82653c5fd1620384be03eaba140b5a4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=0ac3cde385875386f48b0b827c810e53bb9daff4469ef008784295189ec3eea7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=a45b9f35bed1690e35475c6ed73ab416258ded38637c3260224bb461e08881a9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ANGONF%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocJ%2FFeZ7x8nkmfRbvSJPRwdeHYNVZG8FTKKBDaD0mXwIgCCZ0Xooy1Qtf4jFdP8joz9WCO0rUvvrZFel7928uOeQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCn%2FzYvhL5VZi%2BjLPyrcAzik5EgLp%2BXUiugLDhkaINkBGXG8BxiJ6b6so%2B81XO9OQMyr03EibbPlppZasJ2V8RBgeu5Z72V0tprwlzRRNxkc32sWlr57jtHBF8axv0GJydT%2BkI9wEsK55wASWUE2H4axgu%2Bk4%2BI%2BBLWXpzWQ6uj5kCSyWrk7Nre%2BkYXDo9lgVtiDmrcdISiZ9FT%2BU27rJCYg7orXSbjYjDpeSXIOmXPUvW3HYv1Xl3KaX2FPjO2711mSGpId5JsgsavrOrP1zMmpuWQuAXr9fL7nFi4RsQbIwPJGt9JHXlGH%2BLGd6Z8LXatWNZw2EkvV9lBhqf4jq%2B0YGPDOLyPsj1N%2BlUM0Kg0IS91AXkFjBAhzaOugvE%2BiMgCluUm8gLrsFEA9WVaBuzQKC326SA%2Bn0MNjM2qLLK2TWAFcz%2FWprWg2idzcHWiAig3AAN2wvHxVCGVzhUaxCaWHhhkA2m1OK4%2B3a8Epxiz8A%2F2JE3waT4Kx%2Fr6kdf%2BpJk2OtrNyeBzkHhPPuHPbrDIVjEmbqekpEtJ7z9jzNtCLmN%2B3EO7%2FwFHoVoyYova4ZUWHCSt%2FuSOsg8Rnl2MV3zX%2FsP5UDa39elp%2BTfnHWtsNiK5wHoBSLIBQ60Rko9SIMP2NYM6ARqDvJIZ6MNPr8L0GOqUBqhDL1z1sgq5PcloN0m5x9d8DdezrGxRStpKtKUXHsIsPmy14cQiZ9JvaJkNHVrxAkRH81jNPBluCHfDAgiUAxfww6p2zZbuO060AQQZ0uvyKiP0hDAQ2%2Fv0EMlSMr1wttiBDVZs28eOi7Rf8Ll%2Bt86zoumvOYaExMWT%2F6OfJU6OeaEBAwQ7%2Fxe1n0IG04PT2WnRs1E2MPl6IORjJan5A94pgWskk&X-Amz-Signature=26fb167ef57bf2f84f56ac7632fcf3141b67ce2fded8118c011b9ddc4f007037&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
