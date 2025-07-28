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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=a3356fa4a5eb35ce18e5bacab74dbd6ea6454914333819b2905f8e41472791f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=ea8e4872ca8c637ac987b8fb6908e66df9b73634d53334e589f7ad0e27737281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=c494de4c3688c8aa7bbe0c2ca1a1c90ca481d451b5d37ba6f92f4c1d6b67114c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=53b34895c84b84f4da8234ffcf92eb9f6e4dfac9800597ecef51197d8724613b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=f5e694d292c34565e4f990b2536a5012e083d3cebff3056edc51c3b71a2718f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=01c6a73c695077307b082bc2f35fc8b1dc0d5494f38f39ea4257e572dfca2801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQRTPTGF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCTaZqT3vnDimfvsbStROuCE0c243BsZ6ZVxMAY3HfpeQIgHKWN3PN1WE37IvpW%2FRXXAroA9Fh6b5znWiN3kgyXPt0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzdT7y6AyZItC6tbircA39SZrV8C0LflrOyAcXp14gqPMbvH%2F8%2F7uP4gUhK5%2Bunls2kvAjkzNmNJp67nrsMjNItbaUcnqYg3hjHm9xl0kNgVjCuz5CAeNvw56NH0mdisMPRgYFWa21whrVb4wzhuhFL0n8mL%2B8EpgoSab7XFNFxb%2BicTsV55yVjFGz0%2FIdtiozQItHTud6Lm3OwLWfGexNxMCL6x09k6T4tBzRhYhxvnoZrslidvYN29sA1j05lPluGPR5gTU3JxxEHpYmJlHvMiMQGqDFPcbWLUiyUuLDR7embkHY%2FTP2IO%2BueqBeiTvFIQRgykGOSsCRbD5RKxkSDqPpE4REhpBIkSAcyZJwbN7FyBK46QwCrHaIpFnIHwxEHtaJVDlAq75Ww2C5d3Hk0byvIV%2FNY%2BhZQdrvs7AGv3zB1Cn0P1n8j1rntSvuT3RSzk7LrBqzugFiwe%2F9z42acPHHlUOG5XbbT3P3cGegLJyaiLaiIpa7%2B4YmlNH4VvjvCpUt8PVd4UKyyzLDw36L%2FEzgKFcUp8U5%2BmD%2BqMlne5ODa0aVKurxEIPoUiua%2BqAr0RmkM6EBINT8zSjAQrttEFoFv2d8DjZAncijHIcs4XI%2B5E%2B%2Bt5d5M8ViW9WGMpzJD1ghkfVHc9fciMJ%2BpnsQGOqUBG8WqBK%2BEHBazua7yyooUfCQYVPbL8fTznsIA6enbFx1JPeg1WlWrAaEqURFqmK7X5PCMryJzGZfo0DDgGTbCauqsOalpq0qs1Nuh60QhrEutEenzzFTbPRfS7GlYuMofSFrg2pObFXquS5kP8RjdRH3TCoQUIPAn7QpRpoFMwQLEUne2bMu89hJEluitgJfxRLKAmcTjKGgUMCi%2BMScif4AQIQZU&X-Amz-Signature=083c8b24bb56278df2824dffa8b6d9828964b57564b5d5ee577aea80a58f194f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
