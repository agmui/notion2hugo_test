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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=2dd5db980dde526eb30604fd33724922165de6e97eb47dec14d9a81637cafd80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=dba23d4308ead3d4de5351992299d096a7b00137d7c9e42a916a9128010a74fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=860cf17f83a8c61979ea14091076bf169d666e31aac8a9a028300efe5c424a79&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=8eec30b272442cee2c135a1c17761d50fd3634633abb71613cc96bf715a7582b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=4777641f9b7b9f9770859f69b6314a587619e7ccc2b0dfe830b2700ebbc9f79c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=2d30efa17b312fcfd82acf09351e826a75ffe03b22eca5940ebd5858a84b4089&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTTN3SS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD%2FE%2FFVyROTonjjUF78VSFyw3yUc%2F7WKgrAH0J5V1ROkwIhAK7GHHrBmN2zgmNeYDPduYdRtmnki%2By3CAaodaAGNZsXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygFdd7mfGQuzkRQDMq3AP%2BAa7cpztnU9Vk5GyUs%2F8vnIyLbhdCDtTduwlR3V5Bqhvq%2F%2FgHNF6rqG%2FKbpXYch94tTxjrw%2FGVbDqTyKK8i26fscfIdFi7iXaq8j7yOAFJuZluuEZgbGtwPnSQbHpfHdoDEoloZdV5KqK9E4BWH1Idxln6opg5rDlCo8%2Bb%2B5BBqAondle81saSr50SEk8AHQ5Ub7lUOc2LjH8fPOs5WFSyOqASBErTutpUhLWFav%2FYSY01XNa1x5YH1OYPdfLUEJnhO1%2FaTj1eGKRq8KkO8GdbnxSOh96Hu17xzCmM0HXVgFzB7yCqhF%2BCg6Mq8lVQ4Bcqp%2BOw0D%2BU%2BKI8KsfWLdlCAndIOG%2B1zLPD5dMFvxC67Z7tgnSh5xvkMg5DYPM0vWB704mso1WYvlfgIUXGG1T3pBnejSQfpNAhLpppE06xhpibaeOqRbli7a7A7gHtbwkEiw%2B8ilugbE1RsTp71fEWsgqwrlowAp1%2FOH5Ov4I59D9EpUiGgUkarIEm0Y8086RMYBetTmAvQZ5%2FA6ZGd4B2ffReNtQ%2Fp6d5HarGATLBnFix8Euzaaiwh%2FLMLu2yk6t10g0IyH2B1PTRsG38A7GTz4eslYVkroc0Koa%2Fq6s442wsqAFIwrosXVInTDZgZHABjqkAZHBgjehiT9On19Hl%2BtH%2FMSCB%2F5HrcXY9tgDKNNJPLfQtW4KTlecXQdUbuztInAZ4eCVIy1rfaKmmLE74kFGPfwJY%2FR6BtpuAz66o%2F8yLtuS0xBbMrflR%2FfVu3cwTtudF%2B2YkerZ0mp5FIXEcFhq4u29xfKIToppQVCvMq%2BIxiGhHrAg2pxGP6Depfy0CkpuiL%2BZJwOk0tGL2rjV53W1TJh8QZI7&X-Amz-Signature=0d96b5997f4569970125c6a3a3a1b98acf5ae63b75fb3c2d3ed333833461d7e6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
