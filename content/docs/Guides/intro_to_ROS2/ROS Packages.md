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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=925c8a78cf1123a96908f918d97b7a4ad8d946be464f84e896e4d5e5f09d3178&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=b567cbf2d9e128bf5b9c682046ae06e8cbc1f925978f4133f38b12ee89f1736b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=af85d9ea60759f37b49cb84f89a47fa14e11f75b096bf339448060ee2bbcd6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=7fe801167d5873c3f67732255a46db6e65e1ebc0da284f8553a9ae47ad4c2d95&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=cb9e1fb0c5faa24f6172ffa03e14378906e01ec187349ee64191ea3be0649086&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=4f785af21029f8ed634ddd3e6dbbc15451486c0ac8685d0e55298145245cc39a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DUTCFG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAFYdSBXBlCe%2BW5W7%2FrRHyTfNv1okm4uembzkRhZzESAiAVFvTMo5He8EbjXLxImxgeEbSIcpa%2FwI9qN%2Bv03Yba7yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBCXCeBO8wX3Do0eoKtwDpDOfQc7VFHhK1FFDyGPa5GvKDmLe2c8g3ugpq%2F20%2BdsZPaIh0ZS%2FCCzHaQrAd95BtdEoBMivRCtEZLtoRTGxq78kBSD%2BQUrtTAjC995trMC5V9I5cGUVysD1JV%2F3me7bK77fsZ02EU0sTTCpV%2B1PgnZO7t2vIPQZ%2B3KyIVcXqDJsdX4y9cKD68VpFa4dVEW3YvUtVCcT3SphWEXySAQj3Dze%2FMp%2FLOd01M0tJFgGWqtv1jAnfIX1CLNnhpwryKSpBQXczgdcBIAAE38MLiETeSQnmlYX3dIv2laYg4mxHpdjnZZtjev4pv%2BkSYQZCqR8AvyqZhObfpKIaOHKqO2T5XcXBlduKI7AtnHeAOqdqRzdewg4bTjCAfM1keNVf2ayq2jf8vta6%2FewLf23PbcT817j7okUeIjVgTOyQ1Y2yHMLRch%2FXUo0QeZIih%2FqUKC7q6sNOwMaNYu48un34KJ%2BCo4YEPKh%2F0ZGyRjcdcAgp2PkXbvl69QiGRcYyjiJu6TSUfV3YWDtQ%2FBjshZR0vpiEiiVehw9lT2acO1d9dw1u8q8DN8EhqpcDOHTbAWSN343aOxtB7IsRWnyejPDmOSa9NG3HiI7alhYy1Eak6bQvopiLg4TlkY3XtseBLkw%2FuOhvQY6pgHpQTlcziHEUjepdc%2FMSOS4m6%2BMZHkXp6Elvv%2FE00LsonAWZ44ywJP5vsVmjGpQf5BEXd0XAi6WLQavd0V7UPl6DwjtNsuiOMTDTZ18aU%2FdH351Q2XA7YbfClU1OuRYOvZwM6HcdMosINEqK6b13zsHf0nsAXTl8dV1%2BWJb7yoy60X4yf0JWTynVWamws8%2FSslEeToWueyFI5mj4P4Ihvt%2FeZuCO5eP&X-Amz-Signature=413c5185ccb140b1868f9f5e7ae5669dcc66fd5a09797dcee215231b9ef29aed&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
