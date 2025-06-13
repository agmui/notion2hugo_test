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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=3ed96934e713aee6dc82daf0da1a66ee8188451e4616859ee5283968e27c56c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=a953e23f10bc2d741d61628c6f0d6a117a4d7c277343b4ff9040babd16fe98a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=75766464bbd9c095c1f9b00a3923fc18808528f42483a2403cccc1dbcce86b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=d379807f8937e71d518f2af8a03c9075438b282a520e56abfdafe5ed82009ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=40f8a1e77548e2b44cb491a134b97d778111f4cd1bef158f958df856404a3e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=04259261809a372eed90b96d12b51e1a89258b26efa09a61bfc0c2aa06fe9ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2XG3FM5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQC%2BH58ApQPIvdr49djY8CLGivOOIbR%2FYDMv6IRWPnzOGAIgIenOJCMttAnpbMWh%2BaRrWt0BSFg7kogGHZix3x1yyGwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLrtT%2Bg1tCEUyLXQ4yrcA9uC3gcpHve6OLlsZ1Oz8lR3A6%2BAAtObCJaKJNiu%2F0VLwZ9reJxQiRRjEXvhj8vLnM8gmjGTNzvSygGTHNSx3FPEnY0B3HQan9lssEwm%2FIYjHs16x3GJEh6GvC3Fm7eZpPuKNAi5KlkMv1pqqBs4yT3LVKGql6fIXn0dzEx%2FgiwhnUNbCRBw5dTREyREqg0wQ7ymXnB%2FV%2BFWva0txzAAdjh%2BSbgk7AP8Vai9H3yOwmT6J9EuId%2FFttyWyTkBNuTIURavBQpAiFKYjgTr%2BHOiTDt6%2B4l08Xq4dElg6IoEtAwtOgx27cxZkfdPEIfv1I7hYaAmXqF58WdTKyZP6NawLr9Tn%2BXPq6QmDNW7EPnDm%2B232VCXdHRyUNbzXmsHk%2BNI61u0H1U1jtOp%2BLCDv%2BOk2Az9kuWXukOpOwZs8%2BZxJp%2FetejTSfhJqmiHnozlNAn14NRJD39d%2FVcgbj%2Bsxa1k%2B87Pdy0a1jET%2Bwhf5X%2F34vkXt%2BUkWEoWFVXy2b1QbdSQKMoxoy2zGDkexNgunEWQnDmINSl%2FDhf9PyAGR%2B2B43GxORUnzlE0pb3J4e9O25ticONXLhhIsAxtnTvavZ6MHzTulDCVc8ASV3l7V9KwboGTWO%2Beq1Wr7KGEcA8OMM68sMIGOqUB1ZTNrMgzWHhDEQKkgZgkrlmRHYIfpBFA0IekB4LfuYLKS9C3HxKfLqaz4ZNkm69UL7RQ5VWgZwi3gCrPaD0jzBFc6OPBLonShO%2BY6zmBDibtxiGt%2Fin1N%2FSFBGF8CZEPuOvqv0fanXP%2FH3pP%2BbPvmWmjCmGFw11gDhzQFhZbI7XswrlIa%2FilpLsLL8Q%2B3%2BRJy50Pxg5kv%2Ff7giKBYJ3N%2BbxI4dyc&X-Amz-Signature=8753f67212df812f98299c8df0ce7d3a8679f284f9c82c41bf2a33c752c53d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
