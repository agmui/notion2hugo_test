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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=b11e9a89c55757e9606edcec6c97301587ca6a5ea5867cd1ca8a992b64da5428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=1b6ee002f5f28b23aa0aa0ae08a63c5147d1aa4eaa9f8e1e59f51d35c486cca3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=b4af85ec92d455732326df8dc739bf1f1484c059df19be029a7d20680a24120e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=c8a59801230960d0f8eb1eb9d6363dc54aa1147bb35c66c31d7ec92c717c8518&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=a15baf6d0a665e4856c1e3b852dcbf81c76569b43de9607bc529f9b9b9de5887&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=6039d4a0c7db5460935963e7463c75cfe558e57fc3393df3f32e171226b4a821&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353A35ND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjJoimGc0zDkF4NMbMif6ydd6LgwnmBbzAPPZ0y7ZfoAIgObwtEDmbo3bBL4kRlanevXzT%2FGwPCKwc4F4vXRDJAvcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOacRJ%2FmnPxY36MNSrcA2EBsoxdTm5HBfdQZc0qeP8WEy1Fj717HZwUaNz4Wq5v%2BApNTDa%2F8qRRmCZiKfD5crXI3%2FQAgOAeOUCIVAnNsDNMPlSUFAzm%2BPVKf6HDeAly9mDY1exrACjgSq%2F657ZSj%2Fc4dNPr3bNgznHU4tB%2B%2F7ywJ1bCq1xW2uN2QdTQNLf%2FrfexSDwCurxcCaeWds%2FOQqoMuGg9ERhAL8uxGG74bPLc8E%2FhyQpO3Cx%2FFeTk9G4oQ7CPArcu%2FcpCAqcoriHOYkkTFbVZt6pUNV8WN0lcyfpzKl0TkbopPem%2Bg4KdybRZgkPyqUKQgupq0hPbQCaeMxwUDBslwZz8Jg9EMv0lrOis1KRfv6K0wun0O842D1Xixl6ymUhVhjaquymyYo0%2FWynM9XdKOiMCQq80Q8kivoNtOBztW9pRE4BW3QoBfB%2BScqlYa9GlfHRR2icdfjqHO81uerfz1JeVs6wz3JkkaEtwxW6Ocdf7LFEosLbrkn6bv64s4wZlQOYaLNBvsjmKJAKnxUd7MafIWu32fvQz0Gi2lIxdekBEVNT3FL6jmWP9LsHkHW6ZVLVtdgI1Q13%2B4vNTsJK7TVH92Wf6elH26NLzWrR2MLU5hBtAJmw868MMiq1olNmE0Foii4Z8MNOehL8GOqUB3Iqut6QaPMKKncxae6MrXtm%2FFVyqUIFMJtrw9FonzB69fR0iTgcpnckSnqVGVjn%2BXnyukFi9VmSVbNcb63znJnSgTOoaYiZxWvynuBFY2P2RMZbtwOC7gpTVKVgXbVPNvypQBFKpzrRFM2bQsHoPm8ThlE%2BpzfgV2HJaX627M30QgaQj13Wl2bLE8alrtU2V0YypQbMUPg7PsafP8BfOVMOu3drR&X-Amz-Signature=1a75cc1f03e3e6cf9123641a7a1e62ae680246d5d617eaeec346cc62211655d2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
