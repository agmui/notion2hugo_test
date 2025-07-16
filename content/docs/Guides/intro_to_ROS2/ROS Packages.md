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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=69d86bddaa72de8734fd39acf06787a3f434ed90011e2384ad88883d5af5923e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=7ba623941ad48cc924a287f780748385722c4ea0f117d7936c4f8a865d3197ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=add5ed03ce3c819603ef37e61deb6838d15da2b874c1ba4f4ee5f0f3da20058a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=9524a9c1cd68b76d0a5e031c342258aa0a240905146c402cd0206b08fce951ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=5d623ccf437187c0943b2d587915e6f7426c7b74c990135b0bdc1cb28cee8cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=36b001e9b275a6085631661ccb85499fdd1b306dae0aa047780ae413c43da437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KEZTGG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDKiIcc%2BHsUvcGYeMPY8vO8rx703iD7mxrguAXdobw9IAIhAOgZMZVJjgP7AuC0c04LUttE60IRLUCdlEjjwIZcDza5Kv8DCFQQABoMNjM3NDIzMTgzODA1IgyugZcYJP%2Fipoe64GQq3APfoNRSHLZRMkvcoItdRBYgjGJMM50Fd%2BTiYnvJCsezcws4a9oGtrdNZbAdAVc%2FCJtr%2FCjgDjwb4QhWqrcHhQMxVarGIIQfTYRkvc44QC%2F0MBn6wfIbAzTckciPB3gg7%2BC0uNZs6thyAhiYiv0Su0kp6lCqYpph8fnmO9GxtRYFV8xRMsyqH67hzd%2Blm8Myi6YxBKJ3QUGndtUTdj1mQJN88ICUXuiRgTvfSwz1KiuWLSQT3cyw6rhm3%2BpMOx1BY9GhcoAXtmOEe7%2BPo%2F4lyImE08Sy%2FBTOvQMfcFP7%2B7QVFLk7snhegAU%2Fij%2FtDXQGrcZ0F74c%2BimbpcclVjPQ%2FwzSpip0JxE1KbNKXjlCOfR2BfQ%2BBT%2BlaQX6Yh0PXHnt3nXsiGlwwnKnh4MRC%2BX%2F%2FHsLW30WZ2prXFN3E02%2FcMGnFDUIJErDz1xpl6%2FIgjTtX3YyOcQTrDlqlm1odaKBePRICSHPJK57jzYKmd3T6JPD3rQ9GZ783L3rY8MYwgipMrGe%2B3MBbJap8jQ7mj7cPnzqblhuUHk9hmcAwI2jzenW0h5tA4Gi7Dcx7ixF%2Fb4s3CWjZuPiKujOGd%2BMGrxzGQYX0x147%2FqsYq51SN1nhHYrPpPJgNWkV%2Bf0pQlBSTCLr9zDBjqkAeyW49vOeSZD%2FFhIxG95wnQPcPp1vj553taIheI7rkhT4pkN9iZ9CqCHH%2BLBZ3EKEUm2i%2B7VaySJBvjTSU4VNHBARI1Hiw7zTpMXFjkuvDCd7kkIvwCyil8ATcNl3di3Hcf2cXfV6pkoNqgoqM1eaOlNpDjL%2FQCiZXMgEbxQtxU2Bl1J8XWYi%2BOz6mGX4iwcWKnMIfSx%2FQpPR%2BYld5jPIpDhp27S&X-Amz-Signature=ec99d3871d5f6440888e3af836191406c604aa40fefd5c07f35f76a698164784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
