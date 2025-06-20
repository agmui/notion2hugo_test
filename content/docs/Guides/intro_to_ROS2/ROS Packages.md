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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=46be746330492f0bbac8f628ce430aafa0078c8c752ba71a6d13a3bd68a08bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=7a07603a620e982691b7b0957f38304b5891406cd29188d30d8b9a2bcf24fb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=b0ba4e0ccf29e4163d6bf284df71441a6d27301432064947ca66dc8e51e5904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=0c3a9356a8f65b7b07e2591a06d9b2e71a75f02a4b38610edd37ee150058d73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=f97f637ed9701cf7e3f352dac122bffd554a7e7a43c087610dd8091030c8114a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=30ba11051afb09983f785583a26f45611a8446e000e2239cb2c03e096e2f94eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHZQI7V%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8B6DS7FofSp4p81JTvLwl7oZUOZYPPrW%2FAhVMI6WHcAiEAyiaIpBMaLOVHyNf%2BhcP%2B4qIU4skT9DQnihj5vdgLrYgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj7TWYvTN9gOnhjbyrcA2M4OkNhle0ZCjK%2BHh%2FqXmEORW74tMpA2%2FjgJWHm80G0pDoP0%2F%2B9jj7X5E1qPgcX6ltSFKkm%2FFhvE%2FnknxkcvF71ZlKnouuu0aIn4dVyOqDNYIXTNE3Yf8u5FoN51izegI8TZ1Getuhy6MoTzZjM4OcZH333B1jRXMkJM%2B668EFFgdMox%2B1aAIYOwVuwySLLHVOTAuZPhzCTf3BgCfGTVeQDCCMpL9%2BsZF09Gxvaq8p%2BKhZ4X5mwoYhxQKcXCxXPMgr0vRjbNkr%2B1u7qOUfgsN%2FqqrpTsV%2FHl6E7k2UMstx7hTa4U9sm9240BeY14NE5wao9%2BgzzfHUrfEQ5OEHitbwPpp2ilOMHfRmvPHQNjXoDqTInyq7PF2eTLNgmHAIkFpInai2NJHU0iBcWxnz1G5Jwv5gisVVaHuQODwU73tZh2coP1r0%2BM99%2BRSGpbFIA369%2FIiOZtqYhx%2Bpi9P421F1%2BTD44sfIvf5To%2FvI1y72ZQBT0metalKEs%2FBZsnlg0HsdlhwfRVW7FKvIsZ%2BdKEy0aHYt3O0mexpFae8xe%2FRlnk2cHvBTc3RYJtYq%2BQRuWlg2E562O7rNtPr%2FTRfiQ7Mx7YykC5DZBHwEjfV2Y5iTyZTJnD1ltkjWhfzY8MKSA08IGOqUBN4tIymIPp3m0mREGRz8z0EMkBfS3T2khxH26HtUXD5WPJsR60LOIcG8Cc5QDemzd%2FErbhBtyfLcdquAsKIaFo%2BEI2pJuh6z0aoo7ayl3tmF3YvFprcDb%2FqhScgclNm6p5DeSevWKtWiHeBDKSWzfuc9CJjaLtXz4mfQ271%2FqDnBzof2GhVBGV1KlacRwZ5D%2BW8Qu64hFsb0yLOYI3Hqog7DheAwC&X-Amz-Signature=054e01014e829a04b3aee2b1a57f69d9b0358d4bc119c18fb36d854017b475ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
