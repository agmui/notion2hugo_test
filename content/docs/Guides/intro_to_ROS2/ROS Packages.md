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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=df2a9d70dd1e27c68d6b1898c5266acca41f9686dd37d33cf34918041604de4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=6bf2c5a0c671667bf4c070fc12429ed58c3772c15fa24c54e3da28ebf673ba94&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=f56efb78a19763da8c8f18cb8a5892dd6f2757b246a1c3caf7d629ed1fc86278&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=27ed3c96c55c0a874e91edaaafe1f5bc29cd11a2fed78eb5ac59fe2bfeb1d134&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=e01098654115a489346838ee90016419efcd3fc75863c418fb17583bc15cf56b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=30a5019ae91367adbf2f2e216987cd16b19f00547a883149cc307d4f7a69c687&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKRD5TN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaoYqgpbQ6ELWnjzTaqGEGWMGigTBycaKJBqJ5H%2FrDGAiEAvERWqaoAkZeDA%2BzRpmrER6UDtVCICYp2Vh8AMtdDjYIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXkoDtkA3ejhCeZPSrcA%2FGCJE2U1yo%2FypTXpwtvux8kDOTovT%2B1f5xqWUCRARkFEcjmCIN33TYR4i%2FPZ5btWbvB%2FW2BfZ08tl8uHmuuOiHGeaOldZ83m8IurIOuzfGyhqJ6QytIJ38hlBgWYo%2BQEEtibw7royATyNkB8koTC0Tcz9ctuvjsStsndcjeWAGQVowY1Ddmx0dAfY6%2BrUP%2BmwMLr2%2B4oQvK8NQ4OcWjRmH4T%2Fu1Q1VZs5%2BJvZPSONHPxWAO2iqusEVYaAG3cgkwO84myV%2BmtxClVYEXuSL2lqQx6n4NjUZjTYgL%2BnxVM7jLb69uP0STb0OW%2FCHzcWjEdrGlRJHu8jAqLz20Dy6Gx7HeCJvZde3Tzln56BtKdGe7WIaa%2Fv1b1y04ureF4dWUCLS71iZcdxtmD%2BrD4XD1%2FHjcjVc9EPOwBMn6mtDA3NVW1TNysne8aywYH3HGYB%2BSufWCJRGbDf5QIjvyMse3LLnHMMAspIx44bdsYCIZvLOayDr49Ap9tOaHmk0xSsgQsz%2FMBOSfwc7Vw6TW%2BajgJHqLn7FnEb3ykfxQpsDkrekcqtWzB1QmFraNl%2BVbtKcfJso0IZt1dLb7kucYfB0MyYS9%2BUHOs9b2whYACVGzZ9TsyonTwvbO4m3kLua2MOaV9sAGOqUBzkYVQjSlEgmC9buFmiI6L6sWYXRujtGrN5HMngALZ1QkLUFpyqzEiiP9KqUvsLuFb4CknD8Atrc4b623k%2FBou5BTIuirIb3Pf5Ukx8vcoT0wSw5cTS6tifCzTfWSVcwaiK1SZCJx1Xca4%2BGVilffJrbIluEfg6iXX8kijtxXfFOnDryX6XxXg%2Bwp5%2BNLBgT83eLjp80uipWQ0XBDtlmAtcVveywJ&X-Amz-Signature=3c03d7dbfe999203ad5577867e8853b66a8fa5580b6bd3d4c2dfbe725fe05add&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
