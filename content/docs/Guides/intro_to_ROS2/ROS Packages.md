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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=0c23ae0ea793d7b1be2e20ad4eaf81476e3639039ccbac45939ad358ece2b157&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=45130872bbb9b034ca769cd6a4f364ccbdb1bdac3135f390b133d5971a486157&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=3856831c78b21116353e3f6007b0663c323df20b33723c9d6757224ca003303f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=e8b760bacb56c1ab775d533fd243dd3b736c219cd8988aac553038d53a6aa4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=59c68fd7d9564065ab3e2e57d70fafd7326a0bbfd0941f3d8132d9fe0e606a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=9043815e3c7dbc511041d9b34ff2374e0fe059c36674f3ded0609506c75f07ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R7JJ3XG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYP2DZFZCpQOzL1eMI6Xt%2Bv7wMwxEqc3hrp7pA7uoSKwIgOV9UWKauYSwLNm4qXqqnPPgQ01GV7FVfFNd6fgvbV1gqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BBauuljS8jz8lxxSrcAx0JWHkXA3Nvl6zie0aKrAy4J9Qjj22MODYVWA8Du8l8UYoU%2FoGNg%2F8O0L0ch6SV2Ej79fNjtumAF09TmIgnKXrFUAjL3nONWubAaOinaUNbq%2FFLti9YXk4%2BVDpe4wc54vS71eylqJChbn0cljNpmph6LPGEr0ILa%2Fz9%2BchiiWjcdLks8TTpCVH418rqQIJe1SSU6K8wYc9nGbWqKq1opJ7t%2FAGKFTy7OPymgb7odjTD%2F8mSdDckvAz375xtf%2B%2F%2F3AzByUv3SRNSCWDqZdtwAjxYgacI0dpmmDgU9VN6Tw9L8tL3SaeM%2BMoiG2TORMN5hzst66AX0VO3kEvMumMxlj9LpGy%2BPelV2FGm5AJvAtq1MF%2BtBhvU8SnVaHc5HJKDRUb9ZOUeK8bzvwgmBfwcvcU4TbeSs6qBTQWZ2bAhgJvvA8BPT8BZZPjUE3Yj2wuwkUpSKVDdMTv1UbEqdn9cObNhSLW%2FCXkxtDiCHEY%2BsbvHiDZwiiI062kKcFhph6NHv3WmJTcfBJ5Y8BdI%2Fol7BdLNvKlRtPBo2EmHdDdByuMM85IQlUK9c4%2BS%2FoHe%2B7eZ1ISKMl0Sk%2BCs%2BYb0TlAtfWLP87a3sDlc55aMc3M0daYMvrCYs%2B99TInlpNcrMISMnL4GOqUBrr7D74OnUXGe4cCQnnJ%2B5GKm0NfDSoXBgcSPDsnzHSkyaG96NfDhjdzzxQzEjgt2X4cVt9VXx9%2FjSgZ2acxSt0uvVMOmZvy6J4Pci1NEiktAKUpSdKZUnXXcdeP9qjAcAu67%2FrMaJLow2EGhXdaLVL2OPKtFsnJ%2FkhuhYzbzQUh%2Ft3lSBTxhz6HZkqITNGZE0IpUB3V%2FVc4bJtdKgfTu4SgHegNu&X-Amz-Signature=0c34b5b014c8a1f30c9f7c6951470007d05897b62a64467f65ada185daf3587b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
