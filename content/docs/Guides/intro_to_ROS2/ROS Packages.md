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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=62ad31039f3a4737528c96c485aa96c0bcec52aeb8a8bbefcc0e8595c1d18b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=f43ccef97dde109cbc7d2a2a254cd8da37468b6ba935d40cec7c34c5ac7da4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=3309e534ca00772538db9ccc1ed510e8810d5222191d42f7259dad5e8258305e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=70fc0b35dd94d6a13fb8da3ca8a51bca5a73427717863da67c97704022525edd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=5b458a55d3ca3e4722ddf4c948a8104149ae9abc77c41b79df94e2d642189a16&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=e1891098ff8bc614903c0552b4a849d581ac8901bbd317c48e508534e74fe59c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THQYTPX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9F9YNL9Xmdigi4AXq1jVkN%2B7Aw%2FFpaAEXTef8cXxHkgIgd0Y%2BO3Yw%2FUaES48JMGWnFQjA0fuAJENP6HpZokMc%2BOIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ47XjzK70FFne0AYSrcA62ARZUqak50HGM5KAJs4dKYR%2B57OsEcKN%2FZ4lzRgMUHZXDoTzSp7L3FuaPvfmMFbgrp%2BdBKMToqRoxMtpOvv1FMbZdrF5GvX5SQV4AZCufeejwgXwRe1%2BPdMc%2BpSYS1RufAT9LQpMYreez1Byi6FZIwznCHAhI3xC0TI1GLI4S3h7UNFkd65nU3kB64CqVTQ6parsmYCjko6ADCrEaa0lFKQZLnakFB1j0vCsGHRlnct8DtbnxiW0612MpnoxzQ1YKiD12Bad77L8o8DnyMY%2FXfQ5SuwGV08UKwRSbHQXaBmLbwvrObqvdv1PvA8UiDtOxAC9bRWLEnoKy8TPlGaZ6xNr4sBhnWRu7nn9shoBUD1f561vQQRxm%2FugmoYBG9RD2PN%2FN16gxjKzWXXwitrOjAmx3MJfMWH5nZ2%2BrS9hATkVFZlLZz8OmX2C9%2BTXlb8L11iCq14A5ieXS2XyVaxD979fSuWGNU23vpX8oZpE69AnBqIt0Rg6lD2EGR7T5evzyCevTgB5UfN%2FhgswWWwB2BBH7j%2BV0270UPRthhY5xFpKcjlvz5SpHpk1P13tlXgH0uSZDVeMc505BBQZ0QSI71w%2FJgKtTvOcg%2FmEfCs%2FxvLYNzPpQDLez6FyGdMKW7870GOqUB9vijMgLEAeMMzST7QJZxRzSUuNJHl2WHjncIs1I7YisxpiwlyOqN%2Fjfz7DN3RUKfOpVQhKyrbj13YpzqH4MBi73svbYGj866%2F3%2BYdOW05KENAuEHJ01LM%2F50%2BSF7mxG3ZpkkjQsSBch9bSEa4vH%2FZsP5QObKaRordsZHS5vHzrVXLMKtk8JVWOnoKbvhv0W7CxaVSRJGYRxE2eMPIPJirfPRSObM&X-Amz-Signature=dd8fe2b019f31260044989b5deb0b746457491527591e3fbff356e4128ed4f31&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
