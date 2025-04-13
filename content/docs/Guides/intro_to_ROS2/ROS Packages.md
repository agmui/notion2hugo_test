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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=492db3d60133355e0d985dceaf3fd8a83b37e0091b929735fede741428ae0b68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=9c8e946d006d005212c4133935841452f91b882bd16c91e1abdbeb6b4cd4db38&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=8437a16dc2bd76f9634af75f1f34c1b9672511c0b70701b9db2fb110814c74d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=b2fbbcf9f52e26cadd086259e68638dce414ab206ff1c419195b6635aa62f88b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=0f1a3b8c7f769cce55e2b26b1748d8308dbab82a5643cad122b2c1630e004ddb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=fbcde64db7146e3a2ddca4a6139518487a1283363ba78974a5270697ac82336f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DVBPX2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDReqGEZFu2IINeib1ypNOcVe%2BwyvNFVvboTtVQyEL03gIhAMeqwfeCH9%2FJs7Ic6ZHgMf0Bv8ZypzOIcKiY%2FGLv4r%2FUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh%2Bd5fAFGizVjwNQEq3ANt2VZSmDYCvs%2F5xVkSdWZiMjWYsFnKMbbevvikE567gkaJkZI7FjrXiIQvbmPx265jxxkCO8cbnn4rJDs9SpBSoAbzEXJV34wSz4zwgrlrtokzCnEnXj6weNtWM9QP3iTLimSuJTkWuIfCdNQWOy44xxy7A%2BUD90XorYy6zMXaxOp1r%2FBhT5JiTlvohcP5pjJ9ELm1m4Ys5wLZ0Ggd%2B6JWrxk75MIHRIMuvt3ssao123YECkiTk6Wp8tWI%2Fs%2BFuCdNa1MC4UZ4Si7di%2F8bi4OWzcM4PQwfAUxlSIvX6KHqQfudox%2BFAuWULiKoHCrOAGaCjiQnHh6%2FBy65Aia5anfmgP3ERfOgSrCzb2rKE49oY96nTOR2sdIoyYW3tsGNR%2BFg%2ByqjtUCtC%2BZRdd7j8%2BQK5yQE0sUE1mgolIJIPtwWVtZtZFC2wPSDv%2BARqS6FtneHXbhfk5wGX6jSxCHtWmshNcVd7uNvBBzN4q22r36hvR0gMmaatVv9x48fb0LxIiys%2BPMfSkKjF0ghVs6XoOF6jd0P3c6wK5WJk3yxIuLB4sfKrN3YjwjkEM4biLPKX%2FgMIf2fCU0VwUk4fD1M6dhUv0MpkSU1A08J5BPZZ4KXOnsD%2BG%2BXYNQzF5cW2DCco%2B6%2FBjqkAWPgvL3ecSrBmB3CPAGdr0Au8dFPaLQ1xuMU3eHYOoivQcVEVeXEDOYtPPr3bpuA%2BwRxgCWdeu62yPDE8vOOECNBRw%2BOA8%2F8eGATlzIA3%2BqSVUirvFTXBspP%2B7lSaI3KWwS1D9cc0CDiyAXxhsUU%2B71ENIooQVkEJuR6Z5LGhdfLtLQYQVcDM1%2B6Dr%2BxgOkNZSYFxkiVwa9ZNI%2FvOMjh3BnjV3fN&X-Amz-Signature=21dca0fd5d9ce0412690f5eccd879221d30b820cf354208dc7389ceeaab0f4d9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
