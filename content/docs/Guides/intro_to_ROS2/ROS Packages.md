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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=a5757c62cac2badc5b6dd38ad04d11a34c38a7b6a46f58bf85c525657aee2b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=70ef2d34cd3e6c60b14f4cd9c99832d7a137044f6a01484c8593f0e02098d24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=51432d5fee2e658c7e4e1afc88f3b33716eb7d0f34fb08b24b685ecba3a82168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=7569e07aec41f68804590028adbb560d268177417fcaf288bfe7c6925dba62b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=7be15f96b2ea2d2613c0ec3f151f021e0a46379d184c190c98285f1065bbaf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=44d9899945fe22476a422ec832effa004e0b888fae9cc7c447d400cc33e7f757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CEB2A2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2%2BryEVTjKhmDNfwXt6DNqyLPHQ1hR0KDQmD%2BKU3w2KAiAxa8iSlwdxb3g7b0raU0COJVD2mRdTPeeMTtvjzVF3WyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkEgrIuXhuuBvyes1KtwDkZ%2F5qwelT1HwtQb%2Bbl7X1YLDB48o1nkOUldfvN6fxfCr16LbT6LM9AmRY56nQ3vfstKSvkq9mUj%2BCjD13Lu3n0tB%2FF1Uw%2FgZQkYii7lutt%2BZRwPPLwWwFWoVt%2BhJ3tl9VJSASLi2rT6ckoDikoX3DdDlPqJ9bsSPMBzJYsHjEMJpdHkgaS1iHnk%2BeA39uS5y39tL2Pi%2Bs53FO4LxSfCvBxq4yNdp9h4G3G4XY1yI3unleYdeVu5gAv%2FGYeLXUob92jml2u8svlYVEdvMz95yePIXWURteaMBijqMHp7j%2Bd0UQSatg3%2BoVbZ98RTnlsV09tAc0Z2BXzrP4wV9TcJDEqKWQMoNHJv7a3yAau4BRGmF%2BlADC%2FiMOTKHZhCp3invPr%2F5nJR%2B4GcqRSzLrO9vrzst%2FFtjuH%2BIaaLl50ySpJ%2B4AjXKjnLvPDXR7pL4Ch%2BZ9JLaj1YAC50uaFRIqhg2xLYYOTBaTFgpXIe9dEbvO7l7IFrjsii1%2FZj3YdpbO0MYKQP0Lni3%2F8xTqsUWMnKQ2QaWjXnHelH5moOnhy%2BnrgDNI1O4hqVqvGqg6LZcPFtMhuSVHsUcWmE9k8a75eWBRT2KFw6fI%2FaWro2DB06EIVy35FLTSu5n09ms5YYwv9nzwwY6pgHBdl%2Bh27a57W6sO6SMrnPM9ySRIlP0ogyXYhNYkq5YnF92jmXE65hbpuM8ZzhlOxYk52aMo0YHnOjWvrdm5j2rcjw95tA08619zret92JSbtxcjcSPghGzaF0fuJSEC5E2ctRaA15RMysNMWsFq76QqxJoiahFer4i36rRdvf3oYxS54mdatEqZV6BrOEPsBTOY6Y6ZikjgUCWGIgkAU1wLsF4kV%2Fm&X-Amz-Signature=cfe8ce82cb4e9d1eec976f1058a3ce757f6a637223920cf3cafbdde7f3853e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
