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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=b64e33f7d5bd500284ecae01876682f20eab2c31971db958ae5fc2ec420d3241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=31d0a516088070fe16004d30a5a3e3964d8bcf99e7813d49ad147f24857d4620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=ec13fb5e4bb3b011aaa01b27f2d9e65473c61cc6f067d09bbecd70a8af7af466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=90d83478b715a5fcae717f65f15b8e79bb875bd8ed843ca959f1c2bf0040412f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=434e82418d9ea7e025d0f4625a4fd498823e7b5c13ba2b2142008107506f2e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=122d1060ee39d31d3289f7cd979beec7205060d56541ffb5bc6cf5c3e747688a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFVGCJT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91sQDUzI33ssvXWJJa8SGzLE34pcPVtYw%2FmzbPi5VqgIhAITfpv7amBHwl8M91ctn0vnBrMny28B3vWq8uaSKEX2kKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGo2Q11tuIelUhmmkq3AMJ9km%2BJZPvbK161r9OtuNC45bgMUIW7SWz3U7Dctcnj%2FI9RLQtRWwolwtYmEYfb4lc9apWCsmFAPyR%2F20ziPmbVxRE%2FP%2B2BVKcohTUuddMS1ASuOHZKJ5fR9boGaCDSRIV027WwRt1H6LhD14D1QCXLiJRFQKK1B1Yjk5nytVuE4hoYo3iCrMNNKO5am0%2FHdkgoXaNo2iMkAjrgxhW51vKOaJniuG5h8vtvwAU6NSQmHj8m1eHpcUik3ygedlPDu%2BLGeZ3iJzvAWY%2FGOcGW54iFEzo46G2gT12vTAupCmHZe4fqcP8VApMtgQ8smBq%2FMzuQE1%2BjL6PpclGeGqdvfUKsDAdGbVrJU%2FqfaRx3BRvTc22pt0%2FZLBmPBq5E9xXjAHeLQ46jkE9ZwjiwtfjROLPWZft6z%2FvSUUxOf8fvns1Igx67OnQ4UuQjxg48%2BuAConaPB40Jmy6X6yss0CCTpQcrWK6Y1WesSlER67veTvoWDksR2Zk8Txmda7DfleWt%2BYV5gVomuvM8uCCbr4fZip3MntSrAC3DW8Vqgc5QquILjDjwxbZjvPsHcq7o4OyAtC5tt24JVxUyVzwsB0e7XN5gOgGHlTBK9Usj4rrLK4WSK2P%2BoPc4HvXQOjAozDZuuPEBjqkAQwVqDRvHICoBC6sWZvYVT0JL1%2Fz2olVP2AfnuNWx03oVkuhoQclCxwfmgiLGpLEdmLbwTR5vvuRpjql4iMo1fZhGD%2BRYb4XdZcvA9ZJaAHdZMw9lOdXdOIxxoWimtxQaOlPekMjtkdHiKC7Sv9nRyk0lhlVbGObFtlbN%2FEWUHydj%2BrXZNk%2FXNLWOU5CotryKJS1QBdo%2BkEwFXJWB%2FsDbOGSuXMd&X-Amz-Signature=8033998dd47bda0e7e5f5904335ba167875ecb6e5fb77356541a1090f3e34728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
