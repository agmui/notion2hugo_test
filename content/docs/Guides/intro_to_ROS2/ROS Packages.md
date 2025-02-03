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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=bcb9a5948c205ede08ad6881ca681fdfa338a6ce72300f334f4875647cca0097&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=e8a3ec5a06809f92af3af1dac01909cffe31b431c0cf9a74da32b661f96654ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=55a404c8b65ea279f72f1f0451e0df391641ad8b424d4b7f1a793d072a20678a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=dbb7b312b0c754444a8e60ceadaad70a0ee9da3158141a06207741f958be46f7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=d0e54f13a37a35d44b7839250e4975d1faeefd6ee6b1273f350eefec0c126124&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=826e6131ea85a85f3fa0ea00a39b691fb6bab9b98449e0bab19f3950ed84f0e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIDTDRG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHAerWOyjsRGUOddRenBTP8pXjNZ1Eka5D6YVAbpK4AIhANAyZmQKhrhrPneexXhkTYG3M0INCozmEYmfGSGg%2Fo3EKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzB9Gsb%2F1lXJG2k4PMq3AOfQf6OX7PmOc5gnQj1JhnUzcgH%2BMNB4XtMkP%2FiKMvKX9rCBEUY8iR%2BMLVJ%2BdKuYk5s0HgIEy6KtatKJs1Z8BVFfmD2I573OcMVhkiXdFDZcZN5yR8ESYwNRhEoAqnRlFMPySzmGfZQY2m1xOWPxhYXe%2B3qdSXdYXTSZifZIYmbU7pnck8rFYyy5r95g2TarysOpTR%2FokRL2thdt7WgH0sXKLr5YjylCwtyKthvagXcT0qeURCH3AGwBMmmlWqvj6hTFf%2BKjRpmwcL8mb3XIQCDwHjZn7sqHIylcySakG1EYYGT8uBuxnFjE4cYHpNRdzk0IkVAEziWmV%2BoDpBBwvTBx3oQaoRj3GXBeWWAuCClTv75Yl60TnTD4S0lFib9cs08dRCwzhrg1OyCmRyUVpbPnCmxxHIp%2F65TxUsVvBk6vpuRbLfLs6yORP58GfG5MezLo931Y38f8oQbCbD7g8RFWekvh55ffOHzqOwoELPVer3ZBmymnlTDxMQ80eu70bxTorvUEIRNkZlrlGa4nmtLZo7foiX7Km2Y2Nh%2BJR0zP45BMvmoSEI5b9txwBljCxFUyl7mp9Mc0%2FImNyS3Oj2O%2FEMX1gVP%2FwGUBKokc0dv8SGG5%2BhHtp1qOXCcATDMwYC9BjqkAcDQSKqr4yQC1lh2rxDRXswvPJgOvB8FqzQAVQTAUJsUnKaFAjQZfE1sYEcqIUStrv5IJx6YgQqH9mxmPe0Z3rZJVTigwGOghVHV1uOxA0ezYbaqX3SBMPZ7GdfOJX4ylcrJJ50pE66R9TBqu8iQVtzjw3Xo2uqC58r7Rs9qUNmC5QfaqYcCJzG3dcqJ8gzII58HIi7%2BuPGMUUzb4KGknFF6zacV&X-Amz-Signature=4bb8c38074ff560df0bddc98982216b500b16e0144897e4440ecb7d721c0d1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
