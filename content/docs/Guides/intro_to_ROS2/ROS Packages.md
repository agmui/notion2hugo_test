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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=80f89fb516404facc89fe35bf51efe957f321bc51f60ee8190d23a9e377b1827&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=74ed349f891faec78f21edfd0f576cdb09b915696fda049ff9fb9a58f3825c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=3b17af411a85f275b81a46c5b7901ff8b390d04bdbcb618aa8843ebc523b3a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=8a1c2d7fdc6dda340c1f5f9cb5592087159a4bc7280cad903395cbfb864b3ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=56f3750b70709c961064c68b7489e4925c94ac2f031d3575ee79cd3a3cb15e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=1500f8add452b621c2d8390e6617ed86a5ebeb1e3e80799bdc69dff1ea6f62b2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZUVLYT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T031858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldNsN35DPZiszFxO1Xy%2FTSyWL6wxgRtCqXIrVFqA3jAIgJy8v%2FNHbGSOWmMqX8ZDA5ci0QlRsThQPCu5AZkl11iMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFJ5u5s2flyIrMoqaSrcAxBPwUz3BCqqoV9owB%2BL9ClqJDTiA44C1MVqdx6Z3jnu9W4ThdK7p9NCO%2Fw2kxf2R8UmX4P2tAKyGo6zdgXYMBdn4DU5rDtcgvXkav2WYrDlxk6ZLcQ43fBSi8GsAaZdYMhBQjFZy%2BIbY5BuJBGzAyRxsGdrzm0EFyoPnb1%2BNWtqoz%2BdXSU62TaAQT3sNp2r8m0IwxG43qxVf2%2FivdWnB5iwcArVkkO2q%2FA1XzF8w%2BnBr0zG%2FIFcBF40QR3GpstRTZtP4bK%2BsSW27FkZKEEyPwMWGA229lE5OtMaXFO0bR6vDZ5vdVYFzIk4JUHbrcOOpt9Kl7PMEYmSId7rZXDsIejOW9%2FKxS1K3PN0eZLsbJHzmqmeq0IgHHLAeqhzjJXaj6Fmo9%2ByCywIlmszaHBRUZGPfSy3nQiHvMexBuTGnrmw%2Bq5SkYmwoxWPFJh2j%2BpO5lbvzO%2B94oomwIEpQtt%2F0AnvfqfeiR19HOjkM5CtIZNthVU0tw%2F8LEjktY%2B60s3LogOLzXZcKT0lYWKNZe9IbwI3XW1L7xnyr1TyR8X3W0QdHyHI12cLkC1SeXmGR6RyBRc%2FOC90CJRCPg1gpBgx0n4w2Homnu91sbSejQGwaQa0tJlhCq39Z6KRPeEcMK2WpL4GOqUBOC3FFr%2B7YktL1SG7MZL8c0OI0suc7W93gLVUEyIMFzrqNjQfDurHVEuiJbltjDVtkXfNegFP5Cl1GizyOGpmVoNHReh2c7UIzGkeuqq3Q0HnPN6aEJ0X8PtfdmLDO4cTkejdvTXoEpDy1qh2QTvEYPqG0Azummhnq59HNPEoKr4lM1ltnuvFwnzafnHTiDzEFerfgFO%2Bfvof6LkIsH4z8LANwaMh&X-Amz-Signature=080efd04309cdc66a8cd30bbe9ee5e1be2c1540e1b27033eedee12c216ced601&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
