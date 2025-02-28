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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=64be6bc0b33a04e7d6bab7c92e59934aef7b13f56e86c250986f8385a7da9bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=197660008eb21434e1a9714eec8da5d794e5d6c466552ed99f85ad27fa050286&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=3413b8bf0e0402c822bf5dcdf75523a4bb6fead5c5f0d6799f0f7d2771d50013&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=6d95bb1c40c51e54289864c235bc85b4b3865df8167e4431c6f416b761dc4035&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=db45e514feb9bdb54ce0aee3361635ba57e9a7f1afa987e68e12c2f04e8a4144&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=6b007b8d318ebb9d6c8162f2feca8828ad8fb9ae7d705d67d234c67e228ce242&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWZEOUZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgIr53z7O5XRjxyilPjZQDQpECk52LwrQeOagUFmyMvAiAbG7IHrGjcOyMciWh%2FvUE0DaPonaa75MfYT6ZOBa%2Bs9CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQOnzJ%2BchPIZR4AB8KtwDFLZ%2Fsy7YYGKUhshPTUi3qRhj5he85n3YA2WBsNgn0pdb%2BYWTE9ElWBaafsVZQHQtMER8c0F1%2FoILrM33AmH1SecJnoL4m8D6RkSNtpISt0VHCg1%2Bhpc3G0r0rSRuwGcVgX6geIXGG7vJiv%2FUStgLA9DEwFd%2FYs82Nc6Jtqr%2Bgap94R3mHgGMBY9zhTUzLk0UXkNZbC2QU1l%2Be1JvUuZy3p7iwBM5g5ejO7xHSLZ2Hjlg%2FgImhEFciOCRvpxf9EdueOqNq38Z3y4%2FuwediipGxstrQeccYxm8ufC5TGKhHoanEdgblIbmkf%2B9wsGU%2FfgzSUgAOmG7EUxZa362jlRPh7mPbJWmyEDDnzdG9xNVj7kFOCJr9q651XBQpDJifQZ%2BDKcNE6ROW4MD5SBPEhTDeiB%2B0CR%2FOWq5Ejd0sbInMFWaR%2BROew8BeUMd%2FSiolXXN4v%2Bm%2FXdkqAK0SGUwYMF3HpCqE6p0eEHtWYCMqj5g%2BixQDqKgwCaihZ1hHLHjyuJ5RwKcTV%2BYYrV4VpR4acoeLYY79ztSjemPc%2BZFZ4q4Qt6%2FOM%2B0pKjcdRwkdLOVJgxHLcHK5IHMdwC70zk0KKqk9Jqahk2IRmouO0dfg6A5cAWsYr7dsBMK7yAcJ5gws4uIvgY6pgF85EW4o2wXGwLsbSdvDRTpYXeOqSFmbkgiUB9PApm7n8%2BEwhRdK0Zd7XESJvFmvtJTnLn2ZUM%2BkHFYec6udUZJgpWmgM%2FvqczwA7%2Bxb5b5VplaDE%2B7gi4K2MkHulwSJn4NHmwZAAM3F9Xx82kSBTf5xO3vJKJfJFW%2FKb7Q5nfhRh0DmXdp2BjjvmStmzeaXyJeH2X%2F%2FDWHtBWGDWSP5Ilc0kDLw75%2F&X-Amz-Signature=01d5ba0e718d219059cd50f0ad8002d8855ea7bf4391cf74fd44f00f8867dc05&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
