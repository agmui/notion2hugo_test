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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=599d89946728382a23653ff413ca22e5623eee29bac8d6f46a4281c970b890ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=6b71a49c0c31668192e822ba8ae18c3b0decb2ca12ec0e415717785ac7e06b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=759964bddf81b7407b50c5bcea5383ed32f28d4d3b10b16c67534ee958078a72&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=5b85291d94911e5c2bc342a843ea78d2b504ff770b0c63dfc0ddd96fb6cbc139&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=e29f7649e838f5f5a30ab08490b6f7644085bbb264ee41daa897da806f1b9723&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=ea85ae2a7be6b28d00f5d67744d7fc3885128373909b6610a02aafc49c80da0e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDH3Z2VG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCuW59mU2g0vbJY6e1oDF0pZQms%2B0TMyr7Ukt20y3tnGgIhAKpnXyrrufVRtjtev2krs%2Be79ZZJ9%2FEsx61cCGdhss27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8vbsWSMBVsIPbk0q3AM0UQAJLfu%2Fb%2Fc%2B2yDjSNJyjbS5XULjKkoAp7u2ArUzuhqYV6u9j390NQdTS7c0dFKABH2dmpUGPS9Aaf6Q2PwYOlwTYTU%2FyEuwe5OPqJM2wSYBQoM0lNV8Kb3W16aFKF%2FjIJpRWs4WAvWEvR4gnjLOiVlkGrRnLxaby0GmzZQ6nD5d3S2KJued2LTkCE%2FRY65CeOhSA4nYzajSGUjgf540BfH5wzAJdurAFS80fMH6%2BcdczsV8m7gTp0x5F15H6lD1kL59mlRXcu23rB1VxOM0oI9nxqS248O%2B%2FV3%2FYS%2B1g4Vb2cwzJGFuCvOTDVQQviMzOBxH%2FZcT3Jt%2FMtVP8Gz7YdACOxikoNU%2FBdWXT0TyBVk0kOCvxvPt1W9%2F2DMGMJexyl%2B95BzxVr2OkB8yVuHebppm4XadwyFTbWrNvONKHu3MFtte3s6qqK0wJXRt299qDMoLHZ12o2HApi1T9tC2%2BwA%2BQA2IHYUEA4syjj9P7ovaNp7WJtGG%2FthiRE2mPAtvYxvOgMnhFeWn8Hr9q%2B8FashO%2BfOq594bLoBa9X3VwcuEvwsuR79aViQAogYBeUnyVlSkBNTvgV%2F8BFRLyKicykqN2jrrlu91VyrAQytvxOcZuNH6Ru4C8Ay5PDCT5NPABjqkAbtgV62uuQbWQolYySwq2nXBsPEvw1DAVP5O7JDiJ6ToJJ1sW41iD5fYrCmlNZtF6g3TtTg9YL1R3a2Tb%2FVoCwp90YIWkKxbXDTaaVPePa4h0ugR6gCoDF3Gg8O%2F9kGvNva5dnVyS4lyzLU5SZJPus5FpAIxyf718OnGu%2BR7cHIe4H1SqrOBm%2FXGqzyKDmbOArauP4CKjg8tohLpcfJmb0FWVNR%2F&X-Amz-Signature=eaaf134ada762e04ca1d3896a6b599734e58b5187d1403ab90f9cc759a9561d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
