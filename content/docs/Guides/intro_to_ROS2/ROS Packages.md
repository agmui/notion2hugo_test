---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=3c3d898dd59aa491671e654cf81871bc2e0fc383b65ebf30e774432f01b4264f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=3f3a1d9301f2df958b3fcd3653f225d6984a73a655e35e35bb9b541fd7377132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=c1a4eb6b84205d6e26d801a07d1fcea4412a26a1937e54ae4b5f1c0f60941862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=f67cf056fb0ebe4d1eaf4a0a2ad92b5dc1b37c578aa6be5cbfbd1a752a721008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=39a1ca8cae8ed989b6a39724cb6aee4c5d7dfff36cff72572f87f316de8804ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=44e11a695703d7c851bd6fc508e099d9eda670a0e01af8db72664162ce550586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRVEXSF%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEbvn8m2qNDU9xKgCxV5YrFSCDsOocHPLIL0T2RJ%2BZjAAiEA3TnGTnEXgJxqZC4br5gPHUAaT%2FKfHNgQJyz5dwndDZoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFcBJN2kXC6Yba6slSrcA7N9jbcQSyUnxKnSbEOzPJoLP6ufueBZ0mNixqMV4puilncomAJAYJLvEBeToVinDJrUmGAei9eLCwEZN8jy%2BbXyjny9zVcgkuwtcjUeYX2pU0%2FFkXZGqAHMVBPzmf4QaJeYqv%2BGzLRv%2BhcnY5MAI4fJL0pIr0gr2b1YgKsVHewfF9szmNHR7BzrTnhYlEuW89PqJoUw%2B%2BM6zUkXXllzHRGv31RV%2FFXys62j6ROdpLyvImCoRsOdpVv08IbYj1F02yGg7L%2FQpESE61cU9xAjpQAO%2FmcHmiDGHreASH%2B9qFjfzolndroTAIVpe3k8JISVIjtiDL5iZKe%2BBru6UikE6CEx4vlJJGSORncnZohrKwkPjq9uMyUaSEjGFUXQPVOS7NEQR0bSZauX38m1JZR8gvA9in%2Bpaip%2FxbY7vitgNIVrs2CGTGQKw79X3hs3iv8sMWJsQp%2BS5hupoiY3YpP%2BrUW9KemoJMaPeEFj10qMWPqlsThJDKgnpfgN6Bri0GAm8ilrj3ZjgAB4hYUnb1bRFvh%2FeL0DpVSnxwAFCD4SoHaQgTRzLeLbKmEgoWNyBu0CFJQF1tMww1QertkNqHEr0hUtYTMIggtI8PtOtLhrs8joFoK8TONTA2lqsQn0MNTc3MMGOqUBYUilOJxquG%2BWe6zxsVkLmMHqaWb6jaqhj6mEOu7hSKhf3lxl2y872YpUrmRA3xURw%2FX%2F2ZbNorOnES5Cg%2BycEMHex3ZQ3BpuD8q94bd3dV57Ln8NpSh4j03b%2BTE57hVvtf9gT8%2BfaQPHHTmXoPnaxrSP%2F4p%2BGrahH05n1FI%2BHRnwzu8c%2B4Jb1FrSkYrZP6p6o16T5A4yUD3f4IP7l1b7f%2BfSC0C0&X-Amz-Signature=b611ba20625563647b1734a90243f43b436bdb946d0468ac126f838237e0d96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
