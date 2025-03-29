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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=52b31e4ccd0a109a0e11d77113f6c75403842e303bc217a4577d0f0719985620&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=167cf38ff437fe9300735900835065292f94d5a2cfd5cdd07f6a8d19c2070dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=b12a7732e1e91719572fb4fb28bee5a8be1138b6ce31d2e7260cb0f0ebf0efd0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=8274e45be5d47cb93c88b701398649549f01c62bbe1f3350bc74c035b8998bec&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=caa7c73b2f8aed1ed51d42066d0dfff005ab93b7c8ec1e607c0ace50b3713e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=85ff3d383dea3973f2a7ad3a941ec04ce073c25c0cb6e7de8af1f1b4e86be336&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6YIDVTH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGm60zM23Sy4RAGY4Wbpy1aV2s7plWo4gbVD02Ex%2Fn4AIgY%2FFElSjWgckr1yLZ%2FJj5eCOxgbkPTr5zU%2BusvLMF2tYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBo4hrYKCbEqbha7vyrcAzxIjhycty2ihuxGXI0slL4HdSqBuYty8VnrLQp3CEWz%2Fq243pJosMj7m2en0ki9cLPeHk93CUaNkIASbThNIePti9FnZBFAB0%2BoSgbxPA31W%2FSScSeOVwuzIyRt%2BXrhmmEl9Zpsnfo1hmf0rYqjYbLFw7Y6Prc5ZIkU03ePG9IwKm8Pgmfsh93G45TGIvZcI98JVl46gasKYPtca7S1sOffShYe41Z0pwfyj%2BbFnBoVS0ma%2B%2B2cLXkFs%2B8TGNFO6dEAUyASFlkbSUz5Qb%2FJ70exbgLuJ83ClSjq256w0mi%2BTc0QhwXkwk3BHZ2fSv%2BrFMstFHd8idoaOJZANCS6YXzSbwM2xrx8b1vaQx72rc3b7OSpTZ6VU5tw99ynW1CKp1qeZss4oL2sAh2xzDWFvfieunLzn7%2FDYRhLCVYWvkff8CUeCHtGMHAyevu8LFwUWCcpVuXYF%2FEhLFgiuQtDIycC9Nf%2BuixC5BOq%2B1%2FXmSayMBrmrjUDQ8ymOz5avMnuppiZFcx8Q48H6rd15sfd%2FcxD97W7STXVUFDR5L6kMiZiQqoAW%2Bb6vlq7EeKMYJ7WZYaNV7gpfVvqUmE7FA%2Bnj2en4QI1IxOAB0%2BGVetB8sUO%2FRlmaAM5Yg24mnC0MLrfnL8GOqUBBo33fpGIF4F3JBmD%2FygSEXu9sEnKYuKJaeZWrk9QBMNDpCyHlHYgc2zsWBmgoJhbqIWfeLzUgvxGV1TtxQe2fusEdyLs3OoVKi6N%2Fy0RbKIQIaSpOnQcOHUPEG1KSPVv3om8%2BYWndTirA2MxH3rlbBwJku0fPAAM4%2Fmj9o9qBoV%2BN3%2Bi%2Ftv1pt3kLmMr7mV3nfaE8gzTom%2Fo7Fnw9Dd7PeQCys9W&X-Amz-Signature=bae82c0b96302711dbabaa62e8e2d40fffd38262499fcd6d15dfa07321db6d10&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
