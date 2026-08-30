---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=a03820c4c251b035069b50a10a28dd5912bd7abaae1326f6ac73f021515be7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=57fb28c2089e2d954123bbaccd964b1f8f0bbd116214522719fe18b3c02cb85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=4479828c64052ff91dea0e69e36d83720f5ae51cc14362db5d061df4338e872d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=f72a8ea9817971249df9b19e2db69df057db7c9910d1941e1e6aba36326987fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=8ce0ca2f3a132f8b52cf45cde2cf7b17579a1aaed8511377ea57e6db7626766f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=593398e5170f95864c3322599ab6c6411aede9cbe3d9f1293f698a48dad81368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDDW23X%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRg5hho0hdb8voadzP2n%2Fl1kznNdk1WfYRG%2FEABEiiYwIhAJ2fk0mq%2F1jHi2Niw320pWd3gIBckd9q5TwNY2vOxLs7Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxKsQXMI5y0rr09ffIq3AOEb75arJ%2FAMtuXrZ1r64LAqcxVSVnKaUfp4D%2BDpZphlh2MV84YFjsViPSLP%2FsbKLCKRITQRZPJGsrEowooUUodqWK3BKOBnL%2BMKrMdRs3xkrIQPSVF7exzET4v%2BR4LZ%2B%2FSP3V4CZLToBT%2FBSHzmsEUlNdxxhzYCtXCdwSDu2EwIMpMgEQDIZ0m7tK1S5QKATeTW%2FbCGPyDg%2BudoziRXbNPCMNHsQMbX4J3n1BW05HCCeD%2Bhw4agxkNcWWj9R6cLvehmOC%2BPnrVar4TqQ2fznCsRLGDsIVEo3wjMIKirISrSUE3utomDvlgE4YxuZqFGs0benwYeWBMMHYNDyMTV38qww8tXEUS3syc2hQg84y%2BFFK7D37pB028%2B%2BNiUXybyOyUWudaAasnI%2FtBIZp%2FQ4Hge4h6LPNaeqc2cnxwTn2H5qk%2BpOWiulx01BVCUpq3lKc2CdhIRsSDAd%2BPZ22IPHk%2FXh8%2B6GaSY2P7ltnBz6%2BoV5yvMwel2fQsCRx64TmIL4ACNCYWOKpTqJppH%2B%2B9iX0DvShEMcMbNgVQIZ38Qk4ltTYeKmZPtgdPXbJbi7f38CTR1NcXek6JEMMr8hOnSipoGJL6mAonhphiQU6ZW644QShnsExl%2BKN3%2BBHSUzCWzc7UBjqkAQBvjCxFx1M4FcmN4zlHCe9KJn8ZxLTd8JwFjmHESTjjZ25V9mSfLN6wGW1lWk7ZiOJBvS3irrZW4TdkXNszapJsg50orPNn1n1pLZiVaySGVmiLqvHDy2slrYLulntYb0ebkZCjioO1d8Ybb%2F6cWXcGqKZNqdkkba3thCwe0JJjkCc5xOdNN8zTdtAJqT665aQBsxoeaeRCsxD4ijUxAAArjEIb&X-Amz-Signature=5eb3c393ab08e678055481c576b02a73ddf022d1d54d662d146a981371da99dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
