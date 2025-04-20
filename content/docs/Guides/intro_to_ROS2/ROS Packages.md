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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=da3df771b4fe3aaf82d1c5096f4f3c1775b8acda623aa8262e8cf98ac81bb541&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=b11213daf367318cf927a7f740b888c9a4401c71734b41e7496b74d894989ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=d8927c5fff39072be41e5937225813ebf49eea409a891bdfbe06b87105f31401&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=1e898f5cd8560c9dc43dcd30cb86da16d1628e408c5203600987f4952ebba3ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=f033e0244fe2eae53f9bd756c65fd4c118b4ab2f73360dbcc662927636ad82bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=22017bc2c180c71f6ec20bd07c150457bcdf4eebab829782c9b417f21a2137c4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCTXPR4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWcQLugJn8iuMTKlns9Fcv30Flu7wbBRM9KMAf1T7l6gIhAItrRHmWgz0FTytyXt2aougO9oQr5WjPFctDl0Uts%2B%2BoKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznH%2FbiPq0PP2PBaWIq3AMmYauH5zL3aJNy2HAaYj62E6RpZrJPTO5C7loK5yAAvmD%2BdbwF19zro0K%2F0g4YNzUSPvhdMA3VUwf0zfkd8T7hF5yPiwK10IiTBEqSCOEsDkCjX4g7bbiUlUV2NTFImGefAjMgNPQFcBNm7eIHfIVTXguvnVTbb5jL9L8rBEFpaiCIELX%2FXJ71ic2nnrX0A82frpaoZz2WLteCaMfzOodLwRo1NIoxNkvY1FBjS66vDeeGoX89rkurHCTmDQFMmsil9BH4Go2p9kAPdHzCxLOwmRpGrWVU2p6z0BmVg1RGwF2m5NKnIpuNeh%2FMjRHY8xn9G%2FZDWpuuKQnc4FhH2yYwS9GreE3QYFGBladW55xjtloqml58khiYKFb3UpqlFhPdz8P0Oxsx2ie66ttbKhVXlsSAI2GXBOFW7orVK9Xkcl4sJxZy4eVKplWWiivvvZbYk8VsxtUc1PF634zyBeTpg2gE86%2FYFqsXPxfnLu%2BNUFo4p8bF4SVnaQ3UlvdfwnHoAgyaZFYojWQBjVnf8Lfk855Fw7bkJ%2FragX6UZtZn5bLLf1dOXDI0DpwGQEQLx%2FA5bbrFwN9MYWhKwpmGMUtDPdXnbujQfUIWwm0xyRXOLnaW1Sojr2VVgskPYDDagZHABjqkAUVDty3wgu%2B8rBUM1Hbt4cPQZGU6wpM1VQL7qxlQX63yx0NqVs2nV4rwDsxfc8En550zuMETiJMQvA7uefxtRIrPD64qs8YmCg847woGf%2B%2BduISjTcpPNnY17nglT3Oyrj%2BsMJXSNRLOvzetLwr4A3rlAbfbCp4fb1YmAUtama%2BgjWvESH1zg%2FbUC1m7P64UieznKU1mx1jXZcXqREBaiOGmuDK1&X-Amz-Signature=9c8151cb777a0d64cd3d44ad6985e74a80267b1adf09d8047303f22ff25bc1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
