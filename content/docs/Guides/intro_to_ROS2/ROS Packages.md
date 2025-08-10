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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=0ab2b017c9ea5899afd1245057576099aaadd2bbb066152874f57bc6ed66a0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=9fa7f1fa00d5efaefd8883a3eb0159d71be2ef3c67dd24d09f4f1c0032f5290e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=aa3d55983462999cd716b6835c406123f4286636e320e05608c95e40c3a3ddb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=e13ab88c47c1df2ddb9244bf20681221b4208f382d049c40ad5eb3090cc66d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=73625737c52a4a44e2dd301676b00e31df02125b9df1a5cd4b5c6030bbd3d1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=1f32b2e315d9a123b7050935d92f893b16c3afd936b3afb9dd66c66bad45ba73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCVQHUI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHO3BZO5WpmiuMfioiGR5gzM66voGa4aTLTC67wwQVPpAiEAzJT%2BBSj3oQ79QMrxIztAymmhJTeoUb6TtZZLgyrDS9wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILogiUYAZODxAF9ZSrcA9EA8I%2FPqXalZ5xsq7EpLRtJEsgI2l1HiJ1Y5NsgA%2BGEgXCViDGwO0SYMbCfeE1TCr8%2F8C3WnO2IZKOPEJpjsL%2BbQpMFJLMb0NUfTQCAFRehjMXbAGySIzA2jSG8q1Hr67yDxrJy4wvvzYJu206aFQYSCiATvAeUSVkHSgmq746fb8emL6F31frXX7WPt43Xj2swlmBPRvRhRv4UShEAM04O8qp%2F1AigYU%2BB2UBLEMTVWXazbtU%2BB6vwCahhs7owQ3%2B2UBpjDtpM%2Fal%2B2nnplnEW3%2BUVs2K4sL861d0T40KMMC6jkdh1lF8lIErup%2FnUO97hIsaGO%2Bj3oX9XTDqAjO1%2Fa5bQD2EJhO66k1AGkubVlA5jwV8BJzqftsnhjqmj3H7tjj2zZ8wqPgTuzFWJ9kT6%2Bt%2FfAd5K29%2BtkOyJ19SQXxEYOmi%2BhZctozmxZE094E2yK9nZXdTk9906kkP%2BI2DGsfHUo2atiyfkudPv0FiQHs8jJFxUTIH%2FF%2BnSPGrSqrDTuGFhUsACxaXk%2BBrFq3NxlIp7aYZmcZlN3j1K4f6g8Yr4nhcKMUjY%2BIUf7ElN4hC%2FHV3Z90aKI4lSGVI%2FCrUXxKydt%2FtrZ7f4pM4ASWyliCc%2FtL7qYj%2BttdGsMNC648QGOqUBCTCvreMeLA7SgJo7tz%2FdGBWiiHJr3Gbm0zkjg0yFrP0TORSYhE6pRaBz0WPTkDcyInr6YqWiZ4vmroYy7dDlALwmzp%2FlQIJltAwrXDCx7jY%2BtHuOlxbheu6Vguz%2B0xnkGPC6KvXLt%2B%2BqZla4DzcVyi%2BglVRnXpNN6wZzW0akcuOpD9CMweKih%2BXNtVdXcSJnRC5HOv%2B839DlQTkWceNOs%2BQ3azdi&X-Amz-Signature=75fc0d6605e1fb9c5a1ee37bc9b398cfe32168a9f43959d7b6206e4b41fd93b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
