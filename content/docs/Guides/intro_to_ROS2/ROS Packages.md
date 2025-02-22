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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=16993545406db74c5c4b9c1154aae51c4c64ec34c2eae4a9e6ca811339d12d84&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=72a753d697bb973ae81afbfc40902cd72a0416c7b413ac0c6e918bdee042a1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=7491b06e03b64a0632e441d5f9a9116e121fa46c64a040564de0f1f6ad0658b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=2876118434c7a36f8d653334d9593b45b2d48252fa10ea2cb9837db7b91d60d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=1d661604e2dbe89b06a2cfc6c0a5d3ca63948e6a0abe4b89eec73bfb2fcd555b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=8ba36840ec7d95b97bbb127793341eef2342a9b202830adb20641e5ca9a8a879&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTFSYSDG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1iE%2FxujaErZrsbl6K9p5CXOqPjiYcnZIfVURBWQ2LQAIgfLOQD03uuMjaYNMb0HwiWXrO7LHqOoclqYrry9LtQ9kqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa3kKRTn3ksU11AhircA9ti24mss77HIRmA4IzvkmQwgYpWfR7WHNNdmZ%2BhNLNe4UFxHrIHCVcr%2FdGSGUJuqHCiZwI%2BMsR%2BiDwc074azlllEaCGbUfq%2BfiwklfmGI83QDuuoiZvrDTq9XwtbdKyFWGaZvF9g9dH9VEPKoyuKN69kYgyPb29vzb5G7G8ZNnOGNWWhhqLgqiVKe%2FR%2FMTGzopawoqmzWXoi3BGD1tavD8cJx0GA3dedwg5%2B5C30D5yX1co2ByTo18lyS3YtkGTgSsC8cV2ij2v1Rrfy80Fki4ucpI9NUTMyXSoJ%2BLBaO3Ceo%2BgjrZC8UGvEMdtDGwNEwoU%2B%2FR7BfT4SeZ1SmiCI%2BqW0UXzoQk32hwX6MDy5MOuyf7biRcKfqB3PnHeicqYBK5F7EdWCKRHDTP9QDXH8AWfry%2FyEpnrzrAyBb4aU1SbI61UbWCp85RJbFV1WncjqaQZ5CcrdaqQhCjLhXRkANhl7yR%2B1njWaAGXWYoYiS3wSiH0BuyEBpSCXsBYqhQD1qrvJI6vyMbalU6g1eaLe3qRooqEcE2Z0cVRShaJ8Hk5chfD3o0FxjlPhdkcRRs1PFhcdA0sA0cXzFAHy8CtabPmPTaa4qoOXcvf7xaRcbeCqUKqj8kIglaFepMiMOWi6b0GOqUBFbmFKN9Tzp4F5j%2BnrHkf4zwqCj0mrqOV04NqnjnjUdbdZREprWtjHqeQFElrGDC08P%2B%2BEUxKw8KYByutJDXZv7uTbT4%2FKcGyUZhsNWkUwLPpBZPT%2BMFrJsQhuGYzs4tPUsg%2BbH%2BzdjGJUUAy8wTwNpMNO3%2F0eA8bn7p%2Bqqj8f9kF7SgGD61SOudA2rMBaPvesa1DF84ucRWTdDLT7Jzq1AYUKcOq&X-Amz-Signature=78dca45f7514141a7fd988fd50620e3300c28c28629de5285e2641b590245bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
