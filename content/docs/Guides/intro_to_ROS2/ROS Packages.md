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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=d73e18bb816dbe58be15162150d0831bc70cfcadc8908fd165dc82197d42108c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=dece89dd2fef6832a5635f4ca3aa590dd7558e6f1625ebf619f0f039634a5ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=73d44854488b985287291636be37b3a9c8dcfc8ee406db8268fe5bc64154ebab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=bb5633ebc3b014b5499a6320ac7e44ceb463d13f5fc142166ee1024e242f9b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=6ed7b882240a95acf649ef7604d51f21bb0669a9aab5cbc783596e5a0c31532c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=0afd0711415a80707c9784d1c0cdae5fd1c0fdce66e5917d9ad3df9b2a0c523c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75HA35H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOAjElIHLrSDe0BMjjdk0FQLDwpqVL6RdR4BkVBaKI%2BgIgIp%2BcMEelGcLuPTMCwygVwe96iixAA8rpCdyMmgaWHXsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMm8gpIolxyJkslyrcA5FowKeGhMY3eBIi7dCNua3oc12dQVdQqQ%2F8gDrdy7U7J0ubyppwKd%2BX0viKZ7M6hHpSK0gyc8DLFqejPAOCwl4d8WQzPLtbgI%2B%2Fk8ITPovDeAn8TKdKiwyTaykiFaZ%2BuTCCXs2a2eRtdxobtRtDHldt9%2BGUbk%2F%2Bik1QFO%2B8erMn%2BAoMZfl%2BMDM4mj44Yu5xOUxp4NuqllDKB%2BrhMfh7QN3pqmIrOx9Q0yGkFI%2BRrR1NkhOgck4Qfb5cCszkhIjsOJGkphB%2BbhnF7sFyZCqsiUCDaJ7N14H48kMljr3H2lNOWUpRw6R7d4J3muwNCOAoNbHq0h7a0eVW7bvl29KgsTD%2F2vp1DuZr%2FJADW3U9BG4%2BS9yt5YFvIUJ5BKEKDGutdAGDu%2BRj1JK28jI9352lZ4PZpb9E4ynjXjDR4E68F9viWneqNJs751jFa2zN1J1eS1%2FCCc1S0G1JNGFBm1rzwLdmTB8GehQIvkMgI5alOM7tTI1UwBvKid%2Bef6B4MMa0WPwWf0ocotKyAPe4tm2olSGJE3%2BhWhB8kOa5wz%2BHyaIgEeDsyyBmcSY8WLeuYQzxWIoDTiK4BsSjOSnP8DWK8LWH%2BE0D1XQniRpX%2BrqNJQX2lT9Sr8AWlMAoW9OeMNbR4MQGOqUBydpLoe8LsNAM24zngU0HaQljU%2Bc%2F7lJ4jsMniiXedGap8gfqiAkLGHu9KhqNfzuUtbMjsuB0zKeXs6Mm7kQTYH9Ith0j9C%2FP7o7RRTboMvA5WtX4bQDLl%2F9RfG53OW0kvUjLTrfX%2FnbXiAtYZLtLh02WrNwvapnrjy%2FImyci5pKa80ltBzaDr3LlNC5u8CtjyBfIk1j%2F2gTktTqUEVAgOPn%2F3zjv&X-Amz-Signature=2430af09c252f1fc8af5093841e6009d6fc5a299b0861a3e38d9b73352cefae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
