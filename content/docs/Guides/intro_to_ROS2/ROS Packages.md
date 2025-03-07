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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=6c15a0d7b7a3c057a0f9536bdfb829dd0ac27bd488ece6fdf68a57fcd9413824&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=d9f64d3a471daa8ff380c57916a0a8155b91e1115c7d564e98b3ece9d446a6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=203bf803cecfa9f61c0e4aca6ab7ac489f7d44441da93d678d79783db43aae95&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=722215e7fea5e6147b40718f040aa1a51e81a8ab02bb49453d707f13b0fb67a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=cabf96f3737c159d2ca3be3458d6b3d8179a435b71ae49e5d9c94f0ffcef80ff&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=2e8b710f9a21c300bd7bf252e9373ded17b80d08ee3b51303e86441c50cf9ade&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2NANMRX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDzRVxTVDVlvHS4Hw%2F58GBYatqTocplsora4uB2Vfz5mQIgVbh2YWuLlIkvRGTOllCoMbJdef%2FjFAnk1oBSw8Wjc7sq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDBhIQMEeeOtQHfhG2SrcA3YFJcuailxQI4HuI2DL1%2BiUHYeTogpcFOrldTpjNe%2FKGk0xfaWX0QxGv16HBmI4WZw4WDM0I2FJzL8YIMZncaB555ajxB0IAxzmxfC690OSh%2BRBY8wblyUbCAiLXsINONwpxIK0aRaA4kwmI9%2F%2F3yrAsYmk3jUSMeuXwXzw8WOyuZ%2B%2BX8KgrEJKy%2FG5B0HmmXnCnvR2Ws3iNRvPzhnXKudDdPhfQNym5Io9mfcwRQtJ0SV0Rn%2BAVLrkEwxWCTedCcgBEtW64CMUn9iscpGNGtt%2BMoKANlFxKrp8VROvLiU%2B%2B3MSxSMQh%2BCJufClQxpqbwlriiHCXxs9QGjg24gVgsu0PXIbn1AiTgR%2FAS7cI7VpFLEzWKRSfNvwISYFL7MTJ4ytXgz9jFJQ%2BYStzkjJA2ETummjKwLMLoXbsRAfdMH3lcDjMwdiv8B5hR%2FWySCVAswE3RT2fc7ibfUOanPrxcYRhIqSlkw9yD0%2BZApa%2BYQ3GH9nn2G27Sw11yFCwYaabbJBDJ9FB8XGNpuHU9Ars9%2BEZuuqjmBwg%2FrKw082AXjA5a4kUFKyzafJf3DZFD2XXj8MwtMIdJSO5Xv9uo%2BzWieH18k9l03SwEXDZ7pClznJ8mMQbcnDZlznnG8mMPKfrb4GOqUBnY7zdQ14AJHVRY2dTjmGjfmiJx2wg3Xoeoz%2BUgouKlDHQXmmivNQLnUFBnWyhj%2F7orMtrkbSrIG%2BwkddHKq14lcW10Dqnq3eSxA4vqkAwEr2ax17CS1tVtK3lTMaa9heu%2FzTu3TUAU1%2F8Hoe99uOslY9lp9FxWufbDBY2ep1Qktz1dqz0TCV94EpYLoboEzNOzu7u7Xxa0q6h06O%2BJj74pWhvM%2Fj&X-Amz-Signature=2819aa1d45feba5b64255a7d1e5a513d930ac291982bd05e296e067f99dae1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
