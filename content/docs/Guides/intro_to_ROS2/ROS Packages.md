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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=62579391ca610cd6c96e35690e089af91335eaa1150dd86bf4642752ef633b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=273ec1286059d91950277d13588c5c9502da96b59a20a069e810bddbd39ebd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=e592d4a620ae7a6f47adc8cfac76e48aeec243f8140416c132c644aa89333658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=0a881936f109430320999be8a7097082f93e5a393d2e0f0aa2194149c8c84cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=3c3e9075514905a08c24d98705cdc8c276a5d94f2efcadc3def4b10f87681f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=1e8ac8bf942e1e1c9f1eb99ea84e4a8a5384810741c4e68c2a146f8a7f96e15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBJMMVR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxPtogyXcGzomK9mdw5TO1NY%2B0A6sM3okxBmA64fYMLAiEAi%2B6%2FQ7urLEaloLlK%2FhODnFoaDmVIyKIqaDg%2BPRZ2pAwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUh0GQmtqKOs5x5vircA00q3lXeqOlZuxUJjuabT1hKsuLATui7I5NnXCkZ3N3yf%2B%2Fn0auoEwUUSbete9NOlcQYiXy9t20eH8o5unMXI1xfEhORcq7Zxv7UgvubztctHdXjgdXetJ4CCjRzdeM5qsR0T7cQlsDA3BEM03qtjseH1jzG0LleM1D29VQM7Ue3RVmCAUjIQygWQAWz%2BrcAq2eVViUwOEb8c1I1oI1TQnDLfLTG72ITHMejIxREJRT4Kh0U5KO9dwPizPHSKpHLazhJlcusDmI%2BVgVJxCsP9kbpj3J3h0MnR%2B36E%2BHIYKxtf68ZATN7tCYC62oSl2pywTqtGe5w53v%2FnWUh%2BzjGL0AJO024tydtHgVEHA5zC7X6%2BCPuUgvWP%2Fu0m%2BzqlcprJYts2iIdk0Ab39fpbUyCTAWeTlWcOh%2FYSDZpEVYEV%2Bsgwm1c1ODyrG%2FzeDNjYeYwonxydfR5f8E6E6jlCOLGeunPV0RE1VRSOTZU5g%2BbC%2BDwT8hAduGfuPInPcrJuVC%2FERUVYPKXpwtJ%2Fx8VL25ksn1uSnA60qPhpICnjzVguKujkxjyWuAcidyB8MBXrNkTArpyWj9PJPskvuBQwWvlXZH3pArTbpMjzL6KWnQ5lBMtEfZC50iDIdS3%2BQFZMOCXusMGOqUBs1nB7GPVWRzhgrdZaubB%2F847cQK7Cpx8ieqeoor4Zi%2B%2FTtyxokfWrc11gE%2Fh1iUeLtmFz%2FBzyqToHrkyU4ftP9Ftec6rJYTMIwdScm3gGZ7qs3c5E%2BY7dO4NFOPo0jZU3%2F8Xq1sqkNoHuR27ybBsNhfhkuMzTiucXC7%2BVpxzBsYO4KMw7ZB8Wo3pSiwdXq4DElcwuvICReDdeSR02wuDyhnirUzv&X-Amz-Signature=a022d3fb2321c7c7805667c34947a5c501fc248385d988b974b7bfc34796a58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
