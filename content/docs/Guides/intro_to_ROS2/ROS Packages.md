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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=67146d874e4bdd260ff3e9e2520b3b4ffdcec4746f08c19bca775e9ff8f7a8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=91d079c7213b74d15a6458a2135be4ec362f4b7c4e8beed6717c047100678af8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=bcfc1ecc4018c10ef66bbfdab3a037d2dab0fcf117253386e93aa18a6a6d3c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=630d461578b76874358418cbbed79e44a0222ea13b465c45bd76bc7276ac70be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=9e2c055cb51f3afa4a82eaafb5a7cb8ffbb9da2d5dbec8ecb442d85150c2adfc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=109f862b9e8a875289f30e17e2d65e6bd46c7a1c4660f7a2eea3af9528ddf76e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAOVSBX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD6FImK6c2e%2BoU7yfBKUuaOoz4MFEniFfSBNMnKBoOSNQIgAPebPi1P0dIm0pHTcGBkYlJCgcU3b0VItk%2BTXV%2Fbb1IqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgxlDI6FHBTJqYEKCrcAzxevw6oT1%2B1QjTpxtht3Y3weyaAmJVwcsCPLNa7YoOu245BJQ2EEwbNQEYffSbVe9cOm3JqW%2FxmWOlwfq8A3GItPmIMW%2BPtbgeUa%2B425STaU1LkUn3wDiqogzDkjMd10twbs9rapHQqXFeXj0sr4sTHpoT2ezaJs91Vx2y3dyTd3hgEoxS0twblorTKKdP8lABs3pu4uwc23%2Fpk2CCGdlNW%2Bci39NoCJrQ1QkaKjaQcsMlpvthBO4nHb05HD%2BR11XbVIaGSEPVk49xXBPP1szYUNClJBTqL%2FNVBYdL%2BksrBrTyzu7X%2FWx8l%2BtmFpqCcjss754U6dyt0o3%2BHF%2Bsj%2F9la5Y34YJ9Qcnbp6bojVxVeSjPkRgz0RVDwApopEhYIC5%2BPEShWVVPiaNHZv6S315wi8fmiYyj2yaM510mduSjy4TraRH2I002v5CAfjhkb5PUYv%2BHxLCT2ALMLId3Wo9GT%2FVVjejtIE4LFnJ2M%2FdkRQ4bi6HX7va0FkcFyeYkXTc%2Bj2vOhAPWodY0yJ48u6Klr0VL6yq11rXg2wEZm9PY23Mvf548JWJ7PN8z5ZgPVvABGgiqCQ3oalvEWR1SHLzHJsFF3ZmaJJM%2FbT1S0R7aGn1uxvrLe8VrNX%2BCHMLui1b0GOqUBqA%2B8YSJltN1Fvr58qL8je%2BBq%2BNLmRG6DnHTSUxg%2FjrlqCurboDwi1WRyYSyeL4fhhbgMH92XQAs4RSD%2FbojFVb0Ul08KU8T6Ux7UBiGfkkbgNINQm67AeDDxyGxFmEPL06xygYI9S2xUubstMRKtJ%2FXA3EnO6cxbbQNak1C%2BKsdjhvHFhvtiEpQyuNWCvwBorEvBooQnCWhP0vt00LGljqPipW51&X-Amz-Signature=f8a6a488d411ce5518d9cd5543c45765e4ced3baf69ebb5e34d4bbe06acb064b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
