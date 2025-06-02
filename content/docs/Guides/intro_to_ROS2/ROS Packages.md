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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=ac1e17f941d764c9d267ee5b50084079487119fd2a5c6a83288fcf694bd5e596&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=5c6b0e2f662407566379a4408e1a29f1aa7ef566502479c139c2f73ecf173e82&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=8c068f4a7364f55fcf9347bb0bad9907555e4cb31b648c215313dd96453f1d92&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=b8ecef4c39027f36be115127d8f3acc102bde60c2cca4359f2dcfee2666fa2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=e19d288b97710b8dc7b57ad73fcc0fef9f03880ade8d0c873e5f9dd9a30406fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=9454a5a94e0bfde9360662d5c2a6a98919bf4fa5a10de90b23f9b21688c1d783&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTPIF5V%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDHbd5MHocXJ4puye%2FYjDZtAO2GjNeZY0%2FaUwGLGxzcWAIgSAwnHFL4%2F4LAqY2QeuSytoKlROx3OzKN0nQLw%2FH109gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVzo2C94K0QpPORzircA2FUHP9zl7jGHJn5jRyMpG2%2FSq5QK9LFwqyPWfNSzfRch7spdKpF%2BXlQL4RLEvFOqRgD86hjq2NK08Yc3r1Q%2BFpStseOIMBe8ozgmEG5cX%2B25BdvP%2Bs5KJ3sTm4dYGofuxczRIhxfSOV3sLcfx%2B3rPUIoXTsy0BG6raBQKanGYjFYXun0ClXWN7lr%2FWgzWZNwv%2FsRSBAoot1xm4NmFDaWTLPpptTULaZrKzduAEGM3hzC7RYYHKjQP6lukgCVmlNFSUn8TA8%2BcjT6tfv0ByaZ3XpmcB%2Fxm1JGTgHuerwn85SsK07AkSn48AMgLyb3KYitTeUv6BbQ9dCxyEK7PzNVMv%2B4IbXFe0365oekAtQPzfYWEWvuN4aDYjr7%2BvMU5Rk5GZJS0n73rLNjQ4dygzo1cwjOUCFXWo5roTe2XDN0RLt07Zi1LH4KcTAP5l%2Bv72n96Rm7App8m6soEbE7oBE%2FgDICfzcLQayqc6nJ4q6Ml3HUD7mYRJ51hanXTPUD4VXm2syUi3FtNg9TLb0Ddq2TLg1UCjGxy8FSv%2Bwvvf5eMrfCNsMRdwir0dVukePkF6V6c5U1ljCk%2FspmQm8Rl5JuhLAmC9pssl55SJh9YdflRLvMR%2Fye62QSVxQszFaMPnX9MEGOqUBsKyVF971RdEAqjU0kPYHcpb4NMy1tacbMdFrJZp6ozSubiNBSdD9IykxcQtw1n3KTQDAIcnFlP%2B8VBR6JNOtjkFIDNodx5jWNCYaPJR4Ja88dATDpMkpIeEn8f1QepfXkgS2PHm0T2lk59bDEDZPz6ftQse%2BYlW7dOr7B7S%2FxbkxhXSIrAbjD3IXnR1LnlAm8pZKOkgYshH%2FbFNG8BiN0TgSrCJE&X-Amz-Signature=740574047596b93c5de44277197c5614f3bbee3715ae9ae89a3b4ad1a674b6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
