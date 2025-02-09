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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=8177150b9073be9aea2ac00d4c81a127f2c6b86777a847b3146e39166d54f9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=bdd111ef17b141653e2a9ef2ad2e95259475bbcb6261cb1ec897203e4cefc482&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=43ec7a6e3df587620245e4cb650a3fb2cbe424ebfbdb2504420be3702561331a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=202c8806370c5f3b99d34db0eb89f043a9d654760bc9fff0750934095b479410&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=92a6e62072270524198447fd2a04f99c62b6dc166ea9b843afd51dbcfa828d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=97138bbdd86ba47e1a605a1051f17bd3844fca197d8db9e98920033a17aebd54&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVK4VNI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhNy0WNnzZ75b30ut%2BH44m6YO4yaYNsDbiusHCoaVv9AiEAhWl%2FMFVJoxFj0haBGNx1GKHaAFbxmZ3JEpUHfBYC9oAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpZvpbEyO2qqqAz4SrcA3%2BQmhra3ga5c3cP%2BLaD%2FJWx2adq8ttzjfX20yA7D95Qu3fBApjur0vFLeKrOCuuLqSnSGVd%2FTKLtTSQHN0m4kyEobpQVbvIfUIsx3qonKr3wXKcekeUUsTPf53LhZVU9nk0Io%2BRg4oOvkTGihu0v0y0E9cu1H2P59RRRnOfqahtCPgLCWVRuG2gbGb5h%2FBkKL8toBzHbhthg2DXq0%2FWB2B4rTd0Tthq%2FuRW74rZn1lvW0Wc%2F7AEbJDLiThtZzdmHhmf0dKNsrtlKBRAZ%2FI6EbCSf4nfCCrDZ%2FZmo9SvMrMaasSJHkwK3S6oP0gSeA83OB32NOE8Sgw9sSolITAt8lIbQs%2F43pOsNgw%2BU5lifsYVNFse8qSYYOXV9OxDbPzTaX5AW5dG3w%2B4np1FVloUMuftpn0Az%2BkybN2INCmTTSZTDlpMy%2FnEXrkiqruGiGMBLnhfAB%2FDOECIFfV%2Bx0h60WgbvPfRcRiFec0EAFtOkQD5VPgsRIWUWQwf0ws9wqovY4d6zBB%2B0uLYZOvkAAoOFLLHqUQoUjeVyXWwUV8tf1nH4dRmKzO09fy%2BSaFacv32b1WatfBjg0dJ2Q0qiOWReaVOSi5%2FT0QdZNDFkV3aunt%2BWy9bCrgevX%2BTaz6AMKHgpL0GOqUBAhA5gQgx39vURYzRmd7zdlAkJ4%2FTWntcziYT53EckpOxhiDRjNUAeD28SrP8W4BwHWzKpMx2dSbwO9NeRFpQEpj5BQzDP0z%2FPwYJO0ceFVUKDMzpfx7rv39BrVP1s3SHlUqwTTb3CHI6HbmyoVo4PzPtOvAF48EyNO4sZJpzccTnbmGLGbBQy2mUalLmPkqBoVWHB%2B1b8tFAtRWb2tmk%2FI7FaxaE&X-Amz-Signature=3f39a8abb73f3c7557512a684f967d6e787f0fe181b3492dabc03c06770bc47f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
