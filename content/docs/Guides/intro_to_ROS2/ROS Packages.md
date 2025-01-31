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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=9a93ed974afc553bcf1938696ccec5156f99bc8b8abf59799d72472e4e4883cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=ada2d714dde3df89993ce55b0be330ea9b35679729f9643888c3e67bcf276570&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=a06d770756f71594db2d6ae07a000446fe919818299e83847e2c48c447765a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=43ef064e8988ad07b4a7fa8b39b1bcce3738c4673d04a5aa491d79f58ff0c71e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=574f69aec28510e856c961e9a22b09acc548853c737b64e8e930ab819351bfa7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=0e220b3cf7711a81cc8a8b21f6074f9cfe0ea7f647372491b3c85198fe7c7f36&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUPJQXCK%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoUnT8NREcPemnyop5tRTjsQgoEARLuwt84Tmw%2BbvOAAiEAv5d2%2BklfrDTRtwfSYFZekaeVUALKBbfbLzzDifpSjU4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisEMWnFBqLqb7SuyrcAyfyvOxeYGhJ83SFVE3wcLRy343FT2VU1V9dvC%2BEuB5OpjlDrU9pz49p4%2FXYECHImmDlR7dyOvu%2F6M%2FSXUNZxAs5U2GDGrJ0t7%2FHGL1bCoA%2FtdRH5EWwLerFsJzXJQXBF%2BXQE47jjiDhpOZCqG0sEHfLnTtLoijIZwkbXlQO%2FI9juX%2Bqa%2B%2BiVEAzP%2F6P9YVsVBeDOpAoqHR6BIDwdS8XL7I3ysey%2FkPjZ2rIE%2FDrde6g7sXWVAUBnTiq%2FdAUeObEJ%2BSnKz%2BMePv2VF79Wr6pZkJ0Kvc6rxxSWTzN7bqUd1eH824UNsnjE5U0IXHm7WMi4rmX0kw1lpba2SzffAts5la%2FqC8LRyQg4%2BVD4x5gntFzJfVlNiPOQnib8om%2BEAo%2BB4HNSbGy1zK5sZMG0hvGBr27HbfA1%2FVM8H8GjDvOHZt3ADoeTopYApkxagj9OtQhUOS1lpDFyBd3sJ%2F2Lwap7i7JGBS2VW7fRbbvWb9tOhNsKXYXx82EvB1D5OCRiqaY%2BxdOsO7YjaLNdIU0mQnOneY4HNXdNTkx7y2eQybjziM%2Fk2xMrLeWU%2FmEQPCqQBttC25TnDzdvgjTrpVwtP4%2BREcui0vuzSKCi0kYdKdvuDdfpOSZNuk%2FpOA0y4CnMPLR8LwGOqUBonGknJeUHUPHOR3KJorVficItnavBE0wQ3xZYPXCtlmzg2rz%2FUL0oMx1odKSw%2Bdq2aNkGefdeBeagaH5CCiXkV71XB1zsp7I6%2FjRBPycBrFGYLB9SwnxuLVHUJ4He%2FGiiBNhgwCmt4Xapf%2FQiUd%2FXH%2B7RDFduCj6thc98u718GIGM30hXDNHWLc049Kx0Yu4ZLfMQVXgx7wYFuwRd46pzoT32oY0&X-Amz-Signature=46c3ceaf258d99147369e8a694de2ac80a32eb872b6eca8a9f64e11f4af91aad&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
