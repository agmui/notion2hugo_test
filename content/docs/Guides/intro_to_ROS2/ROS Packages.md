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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=5b42d61c1ea1735a555e2ecd34a0a5129b5ccc21ee908c7c813a35a5f3a47888&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=9bd7ddc6970f5de63aaa56b6858836d3437e190ef6fddb1098cd93a07647a08f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=0306c8f37f679af263889f43eafe00b507b715eca446d63543086e21717e81e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=781950727065a88e62472de40b15649d51098ac1a65964a2027c739a404189b1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=141e020b853bdcf16705af4f5496d9f5e24d181897e51bfba3de4dea1f5adb6d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=ec49f077371b3f0cd28f9be7a26f1b5bf14620e2c69ffcbb581f2f03a51c20e7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIJJWMW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEd1vuSwy3gaR3QM972Sy89ewpDXE29vyX8IKulc%2BY%2FgIgVi2p7aD%2Fc8RGw2KRdoS2uw%2B1uICak4yoMxDhLeTN%2Fowq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDMYfH87JLytxKxfefyrcA2%2Fcrlb6ygfYJioMwJIplH4N59DXucd34AXXnzB5e4fPjC3WtwVC64GMb4Yw0sCaW%2Fb%2BTU8gbXP4U2sBjuslWDTHb%2FpiGiZNIgCv6qOcQ%2BV8dVMay5ktta8NKbPju1zKS%2FUP1B%2BkarFuldlp5KtE6yVnjEp7mRpXiu8chWnaaTrLSiZrpDplnamFNLLDCuN2bHg11l7G5JvKo6jnZ7n8rGf3r7Uz5kVVsB4nHAhPdCz6hq7%2FzlFUExov5r0ekmseuFVxB1C7gjywRR6Vd9LQqqOS0q9m1IzNlnYlWeNVQIK3Zm2ypO96bTUWagGJRusPGkFf%2BeOf59nAZttu3Iz0j5LTbLYR9PPLYQx%2FudLxwr4CLPMIO4r%2BiCbQCXJhMSXG6qsM6%2BSR%2B5BX7ywfV89itmFXn20u30TjgwUT7l6leg1UL%2B%2BIaOZm7sHC7r%2Fh2N%2BvFsGMlTv3SmF801jQRGGgbN8qBwfyUbnzgh32iTD7I45473i3A5B6n1ulvbE45JiHsgMltkFnZXhygiEPfKA6vTnhmKrxDZSFjdwjr755bb69I8wvnekGzTqtnAn3v3NNTPMdDaMxbmOSFCOAM%2ByacPVSf3gQTvqwAmEaSWhMYTYrAkzSfcaFqOg%2FrNcMMJPLjb8GOqUBOG000TX9mUnOZnpMYJvxuPwX4DeHHILZgrOV%2BuHUKgV085V33ziJ09EgUd3d5xcEBmjlO52PRe6uvPB4oqu%2BZx%2Bx%2F1kG%2BZS%2Bd51XqLaZlLt%2BOpjNn%2FwZW8%2F3wNXuOipJ%2BeqPJCICo%2FrwdVcxqyS84DqU5sv%2Ft27GLBcDT9cpL2s5cI%2FNN5q1AFKBxctYgN5FREZAA6UlKtorZQ7LZytRBYqXPlHk&X-Amz-Signature=92c1af879cad355d77f5e83c35d242751107d34f8171c27e7f100c18a892b81b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
