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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=b8be97becfa3257ec50a8c2523305273d232a368ceb1178bf82d21fbbb1d4077&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=0e738176f4c9d65fa2d04c4a00007993229997dec208867cab750c9bb12072d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=784b689df97defe9d4b2555a5e03f022b6a0718d23f1169d1c3e4d1989f5054a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=421626df94c1c3f8410f3487f48af4804829dbc16ea2a20c3ca649728f2b1c77&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=19b4e3a6b24d4c36c97da844b89438022b0465f9a763d9ca89c19203e70cc6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=52a12d2b360c3e88c67d8fe29d49b79bb1dac95a8ab5e627c56c940ea33d2f27&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7PBWY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCID%2FUMFwepJtVg5U3InNCtOgb3u1R2EzKd1FCfJfKj%2BxXAiEAp1Aqz4tT41GDrcpFvcD2Q2S0e%2FckBibN%2FghFsDhaiJkq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJbpcNeZCUr9t6CRGSrcA4BvbGFdaO%2FwbFqjraDE0qm0820ETYuSaOVQ5bCdenhGZtT401DLsaNnZL9lpqPhjoRNtDV1rzYk16E9T7bAJ%2Bem%2FunPRDo5slJWujv5RdCyFWiQttVP1wRmnqHaEDdmk5yFXeMOEF4bUMcXM3mBBkIUNVm3%2BuJOTqdstblOeCthPEKvFOx%2BHb3Nphu3DYJ1L%2Bi0Cn0fLvNZqsObFaaDw4NEdMDTFvkJ7L255U9rwTMkllKZfPR%2FAYmJagYF7itCI3qGJyWWhAgSE%2BHoENlHaV8jUQsBoHQZ3toDB7Nv0Yff3z%2BuoPTPlrIrkd3EsrAbw1SQgaaQV%2FAV8x14SKYKNH5vFb9ThS0RzUp1gjpSRDl9ZQKEGQskQ4IEqUCVpOWbgHkvuU4gl4ONeog9dEo37w17lhABOQ%2BbKiAUG45W0t5UphL0M4%2BkZWrcw7zeZ7cNS7acLyqOt5vydxadhXdVMDBZiWgejt6DNY5xELqtFyIbwWErBNl9o8sx7X6BOEWn%2BfO5UsGSV%2FubWc9pC3CvUlQK9NRlIyyF%2BYpI8nxrY52o4Fcqinl9AAVzi05T53O7Xqg%2FA%2BRjRxNtua%2F7N2lM1MaB3%2BCuTvfYnYGG%2BDfJ08ilt%2FBunW5SiBNrwpJQMO%2FuksEGOqUByrTGQ0Y3Gi6T7CV0ULFAzysmzpFczTF4mYt6hRXivgENWcE8kBvMZFgv2DoCUFbyJ6kFOVzbsSqKqyz0tU1870Ewn2EMyVJeQU1jjh9VeFlNBH%2BPEqYiLg6I88l3EduBNxZ6pG6l4Y9ygIGLnEf6IgH%2F5jk0Ak7ygtxEVCHgk2tqr2xCNH%2B%2FhtYxLTPE5168yiWPD6cCImajXu5otYzQu1d3zvKB&X-Amz-Signature=e77d9da220a83ad9b24cd2d0dea6f72d09a4eae1510e4f4a37e0f129ed759c25&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
