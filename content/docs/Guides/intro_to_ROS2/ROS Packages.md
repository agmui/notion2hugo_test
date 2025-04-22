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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=46470259886cc2e61da329858c152dc19416fb3827236051cf1621e231e9feca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=35a18275060c19221eb28665ada7b94c0c8bd93d90a15a62d8b4c00063351703&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=87ed7b256500e3594288b63a063d0e86e90c2a0e0a72b0b0d32122286e02326d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=728767580f51052b1129ee5279506af25f5a0956d88750e9e558605464c43d26&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=7074b61b9d0349023e30460b8947fed6e891a778a3d6e3aba1ec09ca338ea349&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=0828d45498c38345f15f1f4a684f6202e0e54b15059ec445a80ee87ef49d365b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VCFOGC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICjqNY12ivAwdqhy8AnV2W0ZNwBpBl89ltXuNPzuwPP1AiEA0R8fKPdKTb5hXdbmlF1n62e81Iu080UoO%2BxAbgZuUZkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8qO09KCf6d7t16vyrcA02E%2BZsMt%2BUiCY5L8Z1%2FRvPsvZTuIm6tKMhEJrFEv7jILa32rrlnRGGnwQdNue9xEJJbVriBhyMxqEr%2BY0PwEowVQbriUx3JChsStK4WT4a%2FMh%2BmUQ%2FPX%2FpzaFIMnC8un8mnf3xAIZmy6LPisKmxBAUDLwqYCIA3YjWheuN0gC7B4oR0blfZesXWnuz27jDPXBZx4bQR0qeb8JLhdiuCPbqWTqSoFITSqjXiSZaTOeb%2BYw2hUd23M11CdmPXbS7jrRH2SPeBG5i%2BvpnKf8Hf3482runXrR9xYTcFhK7wWPkdAfwmKibnVmSXykwjSg7U1IewIab9nEmqegkZ6HMWyBtwaxUIozwRpLaSjMGCMd%2BDKlnX3beMZuLo%2FP4k9p5124aure%2FeOnj5t%2B8v5Rwk8mLFJIvlKSBCCEBbjnjRrgKqCsNiycckXW0UClIP8MZk5SDWRNYgHzsweuDivS4ln6Kxx%2FXCBJBGZGXYKfODzHVfDRlDzyA%2FeiVFKwF%2FOrflJUpqr31OcRapLpD5uKq1VQD8YZKBlYgCSmDZM32bY1%2FjUTyeu29z1Wbu5eqXzyTfwXaNz322TsyWNiJrjDec2t2c1QF%2FUYBwNSIMaevI5UvMs0yQUhW%2FjYvkwsbZMLG7n8AGOqUBklOfKJ8roXJ2VB7Q89sOf0jHzKuqr%2FNEn4wXS%2FskcR6lCIKJ6ws%2FE8zn%2BKvnn7KrfKjbFfxxIZCPQvAWK%2Fww1PRuwXfrMfA3icGL%2FVyqIE8EoHOxXGvIn3BqyF6t7wLcs%2Fgso1UafnirP872Tt5t2gpoZmzMApOuGv0Qjjcjmdc4VDMPGbYTNLV4mPtr1pYa6%2Fi%2B%2Bf8flo6C5ue2imFy11x43bc8&X-Amz-Signature=2a235f555a4136acae2146b3543f9c1c09831437220fe8ffdee4cae2205f610a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
