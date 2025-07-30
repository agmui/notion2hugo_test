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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=d6a81988639c13aaafc3452f1222b7b5c8d29abce1d341b3d6b0b645093e0ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=2ac51b0c10edc177c02c3a8f8e4a1cc4bd6e58c71072378db3a15e73a7f68079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=e185ec2f7b58a96e5cc4931bc118c5aa063cfb1e58b00e41fbf5e398e22b37ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=193af9715c01a31c31954b2093bcf02ad7552fe53524fcfef97a34fb050eff16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=3427c6767514406cc0ac26a7899ec29d8adc10b135dffea3a078fec355f5dd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=5d91a3467ee0cb485cad5ccab7c07d2c8064a5f7939070354d840053eb061338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MRWVAN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3KMow5EPIPdt3rOA4uIelq%2FVLrq80pbVHl9tgHMJ%2FAwIhAIy6GYTm6bxeuLjq%2BvxW7yoIfzovNLoLOltPVLNvsUJ%2BKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8uge8otATD5wiAq4q3AODtOqRPPsmjvT9qCOinRuXPhuDir0HIcM7eD%2BIKcujMr81ARCWIItYbYROAvHaONxOR84ZsdOZ5lmk639XNukDVgNZ9KPNy3PmFg7PO7udVt%2BfrHUS8ogmChv2%2BtfU6RvdnVcSdxTSCo0MRLz7N7Y%2Bay%2BUZ5za4MMw4siAGzDfb75wjV3BcxBNNxNsiGoG6d3ZAoyvdUekIMith7rZybI44dygy7YqJLpMSkfaO4UGrJLsKdTM0uQWA6XngyMYNpWICn2G4S8LrM1ar4gX0WqG%2FLfkmSVS%2FBD6yzide%2FNKKstxhrF2NLKz89giz8B85pYRHN0ZEV8SFzT%2FW2VFhkWJJ5d74wHYHopeXIFkiGo5%2BqXROO86cBA9DPlpAsGBmZGYA6WrT8BtnbwuF9jtN189ociyn5sxTBN1k4Nq1e7Ju05PA7gmxd3qKrwTOsrB6Mcne6BSThTjYhsnV0w%2FoHwxi6lemH0NLnxEG3SdjWEjVDHE5GaQt6QdF0Z25mI%2BnZZafSgMyoebgA1wyaAqC2R8mS79%2FciFveH5yHf9Wj%2FiQx6qK87mkXTYB0ZJFKgh7OZiOSiC8RVW4gJvfxVMiMYB3aDou0d8MyttOFuD2ceP53BTiwMiM6Hqv%2FEMvTCJ2qbEBjqkAfb94ZGebi5UPa5i9u6M2fxroBmrIMWqpqOqD%2F3dFsApzaa0lgSOq%2F22TNFIa0O6iOGbGG7VojK7FOb8D49yBQKoNqzVUb%2BrwzbAXSjkp9kcgp0h%2FqNADEY6QQ%2F36zYGWAoH0JcSpa7tiJ7nbEak8nvWhoJkHgKnebEWhWRSngw%2BNsHL42Boebdjqjq%2Bzw7Z0zYDFOtYp4eAJx4jYnC244gr%2FKxS&X-Amz-Signature=7681c29db23c39aca20e7ceb25dcce8066a520dc60b953ca7454ea622d67cdd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
