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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=dc96067c30eda3c5b7cce70ac12e3a8391bc5c79802c3d9c93d4cf87f6abdbd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=96d53a9a56b68d59b65c43875e58681f27bf52e9bd55a8988d0f3967739fbaef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=00db71c59b8ee98bfc270e86b41fae8eede188cabd999ad143cfeb5ac152331e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=ffe19a09be6801d915c35bee43c4ba52768c127abd8e947872de5073c0fb412d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=d2b96e7732be0a3239d755f6cecc05d67125dcd6bca56372162530e41a95c34e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=3886e5c1c056936579d239f2c92b13bdd103d97f59c228f361f6baf45d9e7701&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62F5PG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAS%2B9Ty6jEZQBHSB6K4V9JgACeMgfOCukRv%2F9IdcBYZBAiEA%2Bb1UL6MbDajdf78gh4CJa2JiKvFkeLZOJOXtOea3Jesq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGjcsyeXdDT4V01mqircA%2FzFqLiwJmPFTKm95a%2FbkCXgGNO1UB%2BOXkdpGOMrQsS87QCn3NBgyuk%2B6Ng1PzaV0%2BVC8Q4HlgT%2F24PFeDEs4n6JragMf7M9DODh5Xr1ynlOBZ8ukjQ29rG3ZElT1s8%2FHbVnBwUYR4MFnCj6%2FnLrrI14Mos%2BXZfpM6c1lR4DN6AYIrDa0YbIbBMy62a037dlHAYq4UxeC0Kk4uEZGAFhwiBpFwgaF2nuYfQ2IvwalG0JkBMbevyotaVIytfrSViSgdsbk3xRjV42X2bAS4gsG0GCjXCBccNUMctEClvTJ%2FOC4BWQekF2hPSVULWn44ntV%2FQxsu%2FkF82m5q5KF6kDKmQlbIaavJBRJyPMt74VPuOWeaX%2BGumEU6Hqj09MEcewXE5wdzbmvUJJ%2FMSILDnBnSamVTZF9Nl3Gtu%2BBHmhl6gkTeVCMM83FLucCm3m4PThwYoW5ubn6j0phC772g0wnrVxlDyp6ZkoQKOQHozcQ0gof1bRttk6bN5SyldelFuW30fdvnmSC2tQNk5IQCvPKt73KGzQAEzPxmgxujige6SJOBOtNWqdM1t0DJfxD5JCFfcvjIvUAdTDz3r5oE7jKht%2BnySyivVhzZXv5BjuRcY5%2F%2FRkpZ8A0EWQ1jC8MOjrtL4GOqUByIYJ4Lk2t38ItXF%2FwjP1aYrFzwzoIaSTjrww8EErDlM%2BHZUQvgqb%2FPHGJbzm5yerMgW5siPaWoZtAnFfZrW4wmXv3gCa1wyUMLqzj3NAPJ6OBiqp0wivjy3EYQ9sDwkQYgV8bCek7MMuJz5mpIJQLFH52y9Beadhbr1sIfXLC%2Frse1%2BndgHCQBs6Wt1RiM%2BrHBuoSDpoUJbDvs8tFpqoj2NF5Njk&X-Amz-Signature=beb7a665032a092a64446b230c2ae02af1786e4cf19d0ee8e2cb682ca83d91d6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
