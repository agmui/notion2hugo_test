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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=fa2a4f3de732f0d6e37399cbfa27160c267468fc4534745e56c1816f9c5d8891&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=f566036bebb8158c5ea4b60f9406b7beefddf8295822ac5a7f208ed245409531&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=8421607ebc2bbbbeebef3f4b854f5bb217f23cf7982b499a7332de353d391c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=3a2f70c2684ef2d959ba1a08f88a978702e902d8fa7c6dd0f97411375acdc433&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=c827d963209dc6cde7714bb1508f1aa9c2b34ead492d4f776cae01ccb5bbb898&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=949b0bbb83b9da6d90982d84462324de61bdaaccf3840bae835acec50dee9e77&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VL32Q2R%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCCLRa%2BfmJBw4zadkIbqQxCj%2FNzYqT%2FX8jmtg5lmNz9MwIgSitHiklJ50fUp1H2T6m0wr5e2faPb0N4x63r8WwvVe4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJonsF118kZJtbdkfircAxGuubMutxkYW3D2JK14x1e3e5CZ5%2FMEM0uBJeLQ6S9MVGbRj7kpQlZDe6qloUc47f7WkuzChohLXqD2yImM%2Fv3xZiZI1lgZx3fLk%2FV7NT0U9RGlK6RYXteZfJvb7wLihIAGd5oDGqGDEo26wmwVKA5217Sgp7vXq7nIKs4bahkCHW2zkfn%2B5RIH3FxXJa38R1A9NuCaG8YfwPlrVp3kyBqOoRdDP8Q7xOFCUwsgMev7l5K9QTmd9DtPVCx0ZxA%2FSS8Mb87nL2dA2XUbEhjiN%2FuJuXtEpCQX7VFUlI0FdD6OBRioNHos8oSXH5ZS1rNlooZM1V4kZV%2FNK0ozn69xzU1kUfTdTDzLwdtcXovfpZGpwzn5xS2SxeYNzU8A%2BzbEIrZ3CzajZeVvvBDfbw90NMjesC%2BIWGvRTvFqHgPpcnqELak6k2Pwj%2BC9rlFiBUDCNkOVcnbfGWKLf1e1%2BX1lfPojITJ8ONvsVW4feXZFKQ5eAr1j6%2F0uUFIcLU8cV1Cg%2FSL5dk5BvZNHXaYdJuCnzRubJ8T96noV1LHut6l%2FFxJ4TzHj5MjW84TQ8EzFECKx6SRq%2BhVxaHmEWGYYGoP7qkpTsO87QBZ4UsOlGVnmwHmNALIzvTJuPTtekkUKMO%2BH0cAGOqUByrCkvUiX%2B6UOFvdPTLf%2B35Nm2U4gN6DkPG2j6F7Y897DRR4KmfVUbafN7HevISPa8QnkhVaRbMgShaBLzx4iRtniebBOKC8FykIgMlfgCwISKtVMUmJAFEvfrSop4tYCyaMHMFy8fEWnNZqu8Pn6%2FBep%2Fmk2KWZH4iainw%2FP1AYp%2BqZ17u3I5wkz%2Bj%2Bkg04b8A9jiqi1r1%2BwuK9mu4Ke%2FaqnaugW&X-Amz-Signature=936465d1b28b00856f38465ddb432bce8ac286c7d02ec268c6edcc8b9ad2abfd&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
