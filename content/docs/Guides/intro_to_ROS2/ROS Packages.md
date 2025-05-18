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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=753e7b26af69a6add0539f64bc33de08094af98e1c7251fdcb08d723fe34e685&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=1b4105f8b85650a9165cb47001b537efa3e8b81e4458298214d9aa5f03f83782&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=9bdc9ff40f93cfeefe15445109cd34552deb9a1c13eff1eff107a7c747841dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=54033d4693bb9bfa606fd93bd874374cb511d2c1f6670efc3bbe5a136de218c5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=8052c131482d0b8db9b522db4907c3fd3aacb8abdc079118aa977d9147261ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=de93206002577713ab3465938b173161dec3f7bdd01583291346e66d6416a3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKSB5VKI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZOo9kob2n2Fa1acQn9DReOMxhn0%2BWbWdWpwvRD56oAiEAwZPr4bzz%2FgVVLAUZUhtv4r5wmFfLmU0mcC1m6bhAkdUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKBN6k8h21SggNi4GyrcA4XbUgG2r%2FsLTT2zlvjau3E80hihrrYhA%2FFz%2BLW09Y0eup1JMOhTwF9XQ1UwfDD1W2Yx2QcBviD4bwxSd6IPbbl2lRTT3mUZhrzKlbL6X72%2Bpzs3AlpE%2BArfS68yZqP4sxGgzfGmilvLH%2FGaaeK6TpMkHiBENS%2FbY24zlRtj2j3iG4DGnqhtnJ2qib88%2FB0a3DeboQu%2FGy5jklhwWsSRF4nIAm6hpedJKfpc519D%2BvK0Keqm1%2F4iyyTnFcrCg59u5hbUbZAkpydHNWdaOYShcMvuuoNjdN7EvbnP0UnR%2FboQ%2F8eH%2BLjtRFMG6ZQTMf56vtn8WJQbFfn80xUTLJR6g5erSjo97Ne%2Fg99m7%2Fl6V4hppy8oZtEr5evkbXrmWYsZZ7TkAEPbqgdHaUTb0zZk4uRwOn2vNHB1Tqad%2FFP9vSalrMEyLOfqCdM%2ByewLYOEadJznUYn9H7zB%2BY76wAPKwqww89yHPPlWW89BrJ3U5IDp5JW4GH7M5ow%2FIQQr1%2BIaqH2UCFxOLkQc9n%2Bs3IbmRxLo6PENz8Wcnov%2BHV%2BfsfVvGumOKuSYlNQPw%2Bzb1Qovpsr09gULgWDAj1B7wsXG7Ne726FVkDXCDZPAWI1SNcwDmHZy9cI6Wghd8ocMMO3XpMEGOqUBue7CTo%2B26zKmW6E%2BeETKtV0%2BxzrCKoLv14FGhO7Fx0WqAO5iWgbAyATLPFEdAnDYf%2FBtO7Mr8CrEtQw5KqYmx715q%2FBtbNDAge%2FFnNIsLWTFMbpi7FdJMC1s5C7Rmeh5TGrx%2FcYYm7Fhp8EdTaVCfxtua1SE2SWsB%2Fs0IpekIDDMJQsm6EBuxqDDZTxVyVEyQokbUm%2BfjXOI0ldEkAS7tTftNPoV&X-Amz-Signature=3249d60e5e31962a012193fab9a1ae66dd363d7e08e27d9ff2c97d01298ff355&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
