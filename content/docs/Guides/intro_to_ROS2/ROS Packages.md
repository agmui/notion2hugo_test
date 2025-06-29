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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=3699a310342d3cbabe92ddd23935ce38a8a6714f119861b6cf8df239d3cb0866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=1f994e418a35d50b0a83f747f82f62b70936487e2190c5a4660f33b8e808b10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=018cecdbd48137420e655aec075631cf6859e3b9b29cfea299e409d4bcb6495f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=742e225e43e4fccc62f8a776331e641d59f469727e576730c39583c7131d6737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=daae4c55b0cdd4388cba0b187ac303bdf03633c12a39626a85dfc3ee6c2c2366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=a2ba04d21ea7f03627a9b75175103d5c35e3f24ecde75e17e6e6456273d7e26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN7KRP6X%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlJZz3rHWakU10%2FGXPA3GPB4qsexrzeOXlps3t5I003AiBmArYdG0u0WdnCt2%2FmoGICvVCIiQ%2BYUCuMTAzHhIOOjyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ckI1nDCsQ0F1SLpKtwD7brcePgePOQpmSvLYeYBfFuXRRGydOhPaDtFMwEn4th7tjQn9MS2FnPUhF3RX9Hsxsx%2FsgurcHpMS0Dq0EvuTZuM8aRmxHanNAQvXigdA7ZSJF%2FYkeUU692eMPHOtPCekr2rruhjGb0bLYfpQlNatRmvfUWXaPixPGahPxw44Tv%2B741xAEPLvjjbiHOupa5lq%2FMpLZl7dX8NFlECaMS0D5%2FBGqXQIZ7TyUMEt%2FXkzjfWYagzpmvIU9Yb11dtI8HrTsZd%2BKjYVbmjlo69zKYGP31bFL30Rr2du%2FPW0sijpRAn3eFrK%2FQRYm8EE24M2oLVOhMimDBEa3FkDEw1H1h%2F1LO01OuEYMhjmTzlp%2ByendwBiDi6wPCgUwHosTX9cH0DYg0bdbivVZnoS3yYOmGjv2Jk585SCaVRkMwgCRkqxmuE%2F9BPVsT91Z%2FVaKm3RkuwDW9QzXM0ZN6C3N%2Bmg2row8GtlMPWjQ%2B8B2Ifi7xokqk0q2d6TyV1iiTCUV9HmkN0NoyR1ffaObuudX4eiWpTLBvn3qCaPoHza2ew%2BWHhKvSpCuT3zGt4puDjycAzoJkwjRnLAdfDSyTBMyS9wn%2FMGUVyyxSV00UT9zlE0wN8ijIUZDUXvwGpN9lF2dgwzICEwwY6pgGwetCQYKJ%2BD4Illm6xar2%2BJPFaeoCYQ7pcN2IJmtWq3Ba%2F%2FELAARDOttZM1frNyEZ%2BWQGirWX9SpyUMlu4%2FftiOvY8THEd6RSOVxa%2B1bulMa8hX0iuYSHuzD9vuede%2B6Y5VfDVXi47TdkQACownOCJ6yn%2BJkvNTH5raFDWMAgJ4SDE2b3a7etDG%2FqZ1FOLRqbzt0c7DsiXrpWnLhwvn9i6elhv1uTp&X-Amz-Signature=adf88940644a1da4ac08955424ae6b94de74e2acba9250ce93a546acaf77357d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
