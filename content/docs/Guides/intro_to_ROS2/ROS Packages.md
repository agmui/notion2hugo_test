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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=b654cf7787da8d167b67a7dd027669ba39d4aa5598ed9c2eaef33c71898bd45f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=8dd03d4112af7c8801f6d989f8818ecc8e49bfe6595141d8fa5a5000498feaed&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=4af9d670d9adfeeac8b4a01c7c11e7f0dcdd74ea978d3ae0f0f9296287767653&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=dc53e3706d4e3a177289b1dacebd4f7b7f73aedcff01c8686e9227b37b33b7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=4fb8cf0a2dc78b9c9195b40f6ba4717b4346c6d9bd18ea3c6519fafda4df292a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=fcb4f581650fcfef099c12520486b1eb061f61527664f8315a2094879e029115&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2QRSYO%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxEj%2Bkp%2FYLEk5WBh1lIZkCpUpBF8BP97TucvFFkX3oKAiEAo8KigCikAOkLIw1Z%2BLs3tbdt9zQ%2BRTsoOJ9lzPEu2NIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5Iv%2F5sAFMAcUU9zyrcA1cwhakzdpU1yvCUHl3Ja20qucSqcuSLWhxpKLr8GyQnMnADLSEgf%2BDy3WA1lYzlz0N42jSMZpgvb2kIiOUHjvuviGD7UJJP2pMPBSD4BnYfz4ScT%2F1X2VvU13Y4mTrE7Br9vNd8JpqdR8jXrRfoQ8i7qS2257TMpsBIV8hUbzVrOcJEE6H6E05HzGLP0TqS3Om%2BM9MNCoppTYWx3xZiZC0BdrtmDqBJr1UApdO0T%2FgMxW7ze5fzt9PyBJCqB5OwAwn7Z0xTfInwfwSiV25V9WFBRL9qEv39wdLcnCbi0XUswXT8M%2FuaBGsbnFmRdmpWjzzlMIiGRl%2FH%2F4h0Zg3%2FSgi%2B5ymqqt1qY%2F1zZRK%2FFKryFSfo8wV3DYSY3vmoGyKPL4YWgixO07aKax0ZHIKAv7Ler7UWnHUNMN%2Ft1coPpDlYP4mDs1fALaWnl%2FJHjjDy0ADkrLuVPSLIxytlNFGqdqopnDQuWATSomvCt67883yS1tyyquPPrngamFTptPSx54v12aM55zKtPsFAUnIpmDAeY63VSdqq4x%2F6CtR5Tff3Ejb38xcmTsPuk%2BSj6mIMRhQTclbMS6krRMctSeYOzivrW70rD%2BigzIHgHv3TBwOJ4DkD0GKIYjurx%2BjFMNTemsIGOqUB7rnKbTpgJNeMirymfoBayufkf4wTk8ob4GicT0WqZisAdfcCVjHg7urmmrwoSx2qi0tCsywa8lUEGMg0Elqs5Mm3OjyKiu2Z7xFMneYxJT%2F4bnfngctnepz7O02oDL6Dv6jIplezIxuLAk%2F1AwN8XoHpcY9xJPWyiEoWJMMy13Rm9eFt1i9Rl%2FLzI9J%2FqSGfY6Q20%2Ff2L7rtdkFCzjY6FcnwHR5w&X-Amz-Signature=4c2e6264db62626f77a2471f362b18976b7ce6c917d7878cefa8ba6e1b3a2947&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
