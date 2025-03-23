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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=4faa59997057ebd7e943a6f5b92efc974e478d1e40cd3b9d88b231a307eba982&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=0ab44448c412a200a4f42e46b6d8a3cfff1ad2df0e2c43af6ac4dbd59eac204b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=be8944477dd0cf8c587eeb92577d9902e74f8e324991dd96a5d20c465889a8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=ad82c10e84615ccf49b1d7ee298cc5b4486cf7d2651855da0a02bb75f3247192&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=b4b93c00f8138b0f8ef1465712f61f5e1f2a3fde93cce6ba6192a26494d19b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=27cbfe64b4faad76dbbe9a465c6ee99167c8aeda51b8b317ec521b17f2cd791c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2HOWT3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXk3mVLbtz7k2Z9vsKN2cm2iw30tRaOlq8GflB4QHOHAiBYm3%2FM2aElNDKXfAZWrf1fqgbCxhQimN6QGipoPREAviqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJqmd5hI2x81Xf4IJKtwDD9CnvEDmmzw9385ZwoRx5ebawPPDAq%2BaKmCIW0%2BF0OYtvbRtZyWUogCHEKU88C2eEiGV6zDKhBg7mBUgBqe1lZ2Zzd%2F789JuXuVftWcA%2FjDr3HYGanMx0iITR%2Bxh48IaGfuqJEP3LceJIK2eiMD68BgiSKqb%2BbZ7wi0D8yXYAS2AM%2FEQfGmljyHtQFf7gi8V%2FFz39ts%2FhfmF9YjNS48WQORjwbdDJksi0io3PAoxb9TbmMUXbcKE%2BE8d%2Bri8yLdTatU315%2BvWqwfOLSRo8s6F9UF%2Bd2wkIc9f8KlF4Y4Bw%2FucPIWyEfkEoBBajWJ%2FxVevgvXVHPvl6L5i3tN8lzJM8RtrTOd%2BuuQ1TxjG4XwuQFicXJKighifx4Bj2b3%2BqgmzZPBUN8DbdxvcQAd44j3QWqetr%2BhaBI133C6HXPoFd0I9cavap1%2BFxB5h7t3FWiFOu8sTVlK4uc%2BQG94ASpigHA61PP4MscEe02M5gkmP8OnXOt18qFBz6DpSs8grsmbMboVqPtML8Vtaupy1t4mLplThatSGF1W34M26xGYcWuwjEAur3hjMgUv5A3j99HXpb%2FeC6m3xgUeh%2F3LFNW5WLpmelF%2FR5Vb9UZu%2BGtPUZ1TO9%2FRgxcp%2F7Uz9rIwy8qBvwY6pgEII8bugRnXOeur1FDtNEveEq4FqkBpV%2B%2FaNC49E8HPT2pSTC2PWPwcp36NTqWPpwbzKHp0t28Q%2BU2c8zrXmfoS3OA4tndjIe5ZXkD9N2fKw%2BUmaO23tOTvbWXvksWnq4nvl6R%2Fz6pcYiegTcL5ULvQ5AlCj9b5k8n2R5vlblI0KYQUJKenG0AZ4qAYSeiJ2y%2BUIcBo7qhKxqL4pnHlZW7U4lMjOR3Y&X-Amz-Signature=9d458619db6410880edd06c59f9089e936314c511bb503d019b2cb18a98d83b5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
