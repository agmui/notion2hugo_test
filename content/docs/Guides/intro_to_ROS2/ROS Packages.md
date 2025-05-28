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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=954176dcee966f39341600a74a8a3fa1f5c47f736b8196ae2968e3d1f224e37e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=b6cea8eaefc080cdcf9f75232d45f7495a38af0adfc496d7453f949131ad6827&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=7a55c9189677a6670658e479cd873e94f18c375a8c05e437e80bcd17d80d5da8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=db83988d8543fb7a465740b5797cdc7935a4cb576c0604306152c23d398e60ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=1907f2e0a99edc598c34cf6357b3260306774e58920719e3fbb57f586b65915b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=7cfc907a42d9f396faa16b7b4b1b498e1ef1143a4d14a469509b46746eb98b05&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTZGVSH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcqMr2nQWKYnOMpQ9iUD58Razu2RxCjfA%2F5x0ypLKGxAiEA6TFrlQUCEHGu5GV8ttyAAiz1FYfj42Ietv7dDabfMIgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIAwTe1T0tj5sIq5hyrcA2GxmwGmYSt0aQ5p2z496ks4BRSaJErn1aIE%2FwoLavwkVVb26J1f03KFcmFdycd15fWtocmFGFWXXh7Xrn4oaMmKPRVaWg5faPZThrYH%2BKz5MTg6YRuydlQl8cBI1kGz%2BsRrexjoosKSdIPvc6axSa7NVwupPJTcyu43MIYd%2BLL0aXVnHbGR0IOyHvoMzMgUXpqH5YJR66oLA6CmnCV2ZUlT7psi7CsqJMUYmuru2f1yZ8sp%2FFHujrh18wcg49d5BwslGbDAuufdisy9ulTRmc%2B%2BxS0vXGLKHanY8PvouV9B5FmSBvH%2BH8iCLW46TR6y6y7FXpXhwtETMCVMM2dzJAtf7UOtCY5E8w56WJ2kKlcARP%2Bf5Zypodvwg1WxqKMgME%2F33MfohFF1fV0t0QwkBp3UsaIEuZa3%2BgHCcgBP89Ow27UQiS5Y5c%2B3M1RU1%2FoLzuzUVFANoQQk3YBoZHL0BOzrvb3WVutCJzuhwZ2SnrQ%2BAfGLIggSt4a7SkAx6wVa5OeHyN9y7ClwiumtZcANEDDMpWlSSsOvZALQB7vYSJIbErLsSsqxWRcfJ9IzyaxECJlF15wNcxuB%2FWjmpYZ%2FHfJ91KI%2BDtUPRZcOaSrDWQaK1Ghb7Mi9Vo%2Fp4c8MMPj33MEGOqUBYwoSLagcZrwpWgeA4Ef7AE77xr1kjBE3tyTj9crOpggwl%2FY3RPhk%2BFCNeTXFenp7noP%2BH5mmJyjWWN%2BU%2F5JzeAa35xHFx2QAebra6A8ZiCXosZmxxFUrTEHXGOX4EkFYrTkk8z2swcGMiY86hUXIG6PgU%2FkpwMhSxOYuQOOq9Hpir%2Bl2KIOxh%2FkHfuZHGAV6V6lpCuBDhv2j8elnN5g%2F4r03mjke&X-Amz-Signature=4c6ecad147204788a298efd26d6b82076a098efe62f7d6b00e2a7ffbefa3ebae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
