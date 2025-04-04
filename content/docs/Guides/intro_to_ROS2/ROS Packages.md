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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=750f0d47c1cd4f8415b6ac888916390e11a38106775d763828a04c4423b6b328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=2899cac34f934a8081a6069c932e1613593629e506a75121ce9e08c588f030bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=ff217560309a360da22b8bbd2e256d6f7038dcb181ddb736f2fbbbd9fe27a9a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=7a2df1fb6acf23816f06cd3440ad09b6c21176c8bed806dd44369a30728af8b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=f8ba1117a7c0cdd73838bdb89679e0164efa33f8241d5f79dcec649ad7cd563f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=2838589b513c5250384be422cbcd7415c6c3a39a65b580cc937c8350e6c997aa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWCZQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEZ0aJcy3pjSJv3g7KDFMyfOPSXSk4sMcZfreaPLQC9AiBY30KAwQ2DLzFp2n%2Fl50gtOQ%2FhMG1y8wB%2F9RkmQV5JSSr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMdXPOqRnOHW1pWsnYKtwD9qtItz4phnfa1HOb0%2FFCgkxSjSEB4wgOYKcmJ5RZFD1RxFqc072BvIt6gswjV7feiYA94qJ%2BDYsLIXG0Qp8r20xYHmXRIH1%2F67AXWy%2Fynk1wzxsk5rCsxI9kn2%2FwAmVg5XJOy2mSYG3foIH6XmGzCPQe4hj6UBNKso9R4KAVLEZ%2FIwv3WWjbXM6CkzZo%2BzSlRWQdJ1MHO5mfUDawZfnCV%2F1e9S7JPOgNpA63hVOiTDxPuFtbiIa4XNiWaduZeYC1l4ywV%2FosYkk7bImau21CaofHKZrXkf%2F0uw39pf5R5nOseYDrlSfq3uSOKr1tzBq577UxP9%2FmFx7NsZXnHZAWaaiuoIe9%2FSgKeYRXP0N5Gkk69%2FgRCJfdk3I%2BD%2FsbwRQ0X%2F78nuOu52kDgzjZuYpGOAiw45bcrdB3722WKm4j%2BwWI%2FjwF3nKuVlBbP0KftOlH2S4BRaLlpqtGp%2BrX65PRmgsuwM38g%2F1R19WmHLlVINBcDtnbSHey8PxHu1V8UTrITyl8wgYBOM124YjeQ%2BlkpZyl4lCJc7yvGuoa%2BzE59EOBdXnG8x3KPz0hg%2B2m2OivslZ2k3mES4WsMTh5Jtids5y1nYJbTvLdRIvFrSCMNhH8mv13Yl%2BwBWrPSnowhYLAvwY6pgGtAc9ckdmfZEaVxsdCz1xercZPIu1fDXYNXToyxZeb2FAV%2FFAXUGX%2F9Bj%2BZflULi557feTjqBhkHH3KXKNLrfapT7Mqd8x13nZ8mzGUZyakKoCM1feCZegOfScMSc9ptNecK5WNUC9D%2BM%2FZTaeW22sYG8mmB7mBSQASFoZWQircDqjapgLsyA86U3FVRAlDdQEAgQT1kpsVCPnRsLz39GR2aOEa%2Fkn&X-Amz-Signature=260b3a9edeb0568333e0ccab8d0a615f42121f4d30a11c52441264ed7d9a8937&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
