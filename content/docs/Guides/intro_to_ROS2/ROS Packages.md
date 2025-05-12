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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=c861dba60157f1851da2af12000cf9333e171ca1f908c8af80b078a72dd181ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=2abe44d0bb5f37ee14b5bbe09fef1141555dc069f9eff1a72d80bf5966476b85&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=ed19b97437672cb591d5a91e171ecdde7c7e0c7e22c0c5d7d0cf01b6fd1fe7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=a0721009e69acec0bebb1d1d68db962aa275586b17ede4dbe4cea869851b2487&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=60ed2fa886e7b121f41566be93f0a1427ce24572771a73a1ed317e09246a4c87&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=ce160aa68640e6543e3f23c6949c7799f0236e1f685b9fdd670aaa95f45f5eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOP532V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAF2fczKsqoerKRo%2BJKfShlKPgLnj7%2FSdmKB0mOdGu1nAiBYY6RMTkpuBPLGDfkKIg1U9SqfzTYUjyHzIILuX%2B%2B%2BhyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FceS41F11lzd%2F6UKtwDZA%2FPAWxu5jRhbbZseALdD5R6Maf4itJQHwjYFD3XNQdZ4dDL9GhwHJmwpKiOlubXHPrNlkl05IKhkQnLVn6Tc6hmKQADj6D9FhTgWRQv05TT3drGRzkFl3JRxdXmun5%2Fr1tl2YbXPYFBdq4OnNjr0eBDIsJ3ubudSPhv7%2F%2BNWuW5pf6OewL%2Fl%2FVnK4NzCLegNjt2l%2BHsVc%2FF8Do0Sm5oSDWbXcl6OtD42lr1Cca1j3u34I96kuxnXA5D7dSBvFYwlJlkR0hfxnqIb4D7JHRY4cL8uhabldGCmeYYP9DCJ9Bjw%2BBL0h%2BRZa08bPo8UqyHVZep5oC2TZiINf010QScla%2BptMEt%2By0WQWggiveWuipxNzXvIy9bGfKL20BKRUladdGE2DJ3X59gx3hewok7IRuM%2FloynhgQhK9uZ%2FqE3vKqbwbYnDi8mMmszw6HnEs7BRmHOByFyDhuY250ow9MIO2UAFx2%2FdxfYdV8ENAE%2BKSma7HU597ApYpqwOiN3cutlcPiD2fiWkTafdOoKfqjYq72f1KRma0aSIod3vhu1ANGEtlHQK9LYq5znXRuFRhw7PzcPFPa2uPgTk%2FFsFiS1Q5uGyWVSLpyGlj1KmD3Ysf6H4PrRGONAQwGdEowysOJwQY6pgFuHeebKza4f7IdfCjzRLrK5NIUQouPj2w%2FxJPhrPepz%2BSTnOx6huACmoBooTmDG4WoTQ8%2BwX3HwPNBK0zBDGqB1YTKFOEIAZ0Vb5TfVLyVokNeBLcwSIBvoAV3YNE4psgv1P0SkRp9ufPahQErq1pbtb4MUtFsedGDzgJD0g%2FL%2Fvq76VQ1H8r13IiqodQrUpQT%2FEi4THMkSbGe%2BLBTt1i%2BO%2BWCLM0M&X-Amz-Signature=ae39327deed23b270fe7f7292ff3ea8662137000ee0b470f41214224f59b1d75&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
