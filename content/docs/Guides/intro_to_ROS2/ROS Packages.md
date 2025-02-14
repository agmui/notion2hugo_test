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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=9e0912b311e5c56e18c9c276caf6ec1f5790860487f557f35374df3f93c9c262&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=f8b7add5171397f849ad07a90ae5bd7bfc3a3a94b0464a70bcb63af84605a94f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=8918dcbe893a92d36f5594bc72e904021c329cea26faedc40007c4fcbcd980d0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=c29a585884d9aab998b8457c775dbd4cd9ca873a0e9f14e0a255b38480adaf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=1d5a878775762b308cee95f459c0126d8e54af451965c919d0e7ef3262a50dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=35d1291ee26d486ee13f9b55db01e9655c353434a2aabdefb0ee961f09bbdb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PMIWHI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAvjOdVGhQiLggOiVMusKHI8s1b7lRk%2Bx0SkGN4Rz9T%2BAiAjLOM2DvY1Tb9u3BeFy2rCaVyEKfrxo1z13%2FU4lQviCir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIME2zs4wfM1z%2FhQX9JKtwDtHzKSVIEI84gg2uuYRTNfPfu1gVo%2FfL4LHYh6pzLg4mDrSGAJ6ZQZoDKqX2oIUGSFM2Fj3bUFC2ZlAczAJJWZgScTDhjf%2BXrKly2nb99GetvvmjEv1EH7n7kpG6bB5cVd3kqgLNjmYgIYcQpiU6k30WC6YxCs0V0NXVnBEg3F%2FrPJWwtaq2izbANbyxfs%2FdTBzX49LmLtQUseDzKwHXgeYiINSl6u9v98Bi5ytPMOm7hmCWKNR4TfSUBilDnofbm%2Fnu0e2fQ87rayTWq0Gn0YVc8O5F4hldeW8y4wjJKB2uCvFisbN9%2B1RdeM6F0BVFQhRsYUwEw40qtf86l7gtxo3o69nqFNvl2bJIEfVnZOysKBMsY5F72dieEpNZekGxk2tBmAkqWLmomk6liMlohBJdFC65Ynx0KzVc5B9GW1MQvBs9hn8TxYJoJc%2B51AwnM762udn23aWLumDgBBJLDiSM5A66A961elYw0HE9MqE26nQUocgVviSz9IuvOUkjYGy%2FAX2pEYqF2%2FR2rE3UOdvABFWs6L7h8H2zPb9J%2By5R7FAZUh9TkXcm0FEAtqSdEt68SexZaQPbcSemVFR5UMJjbCOscaA%2FOxIfxqT0mUNpBScgOtV5ZT4qVFCQwxLW%2BvQY6pgEw849dVddw6ikSut0teuAXo7IE%2B113Iix4DVMVfnTLaDIsWCQYvQgugyyiCYw%2FWqSm1qt8JloLwagaRzL4ONu6ykXK%2FfMgeIhEDyGTMf3xLNs0gB1bXXCyXzKX333%2FkRqOyELMuK0odcz68Ke3R1RZgQiYV3xTpKHSWEhFm2uSXhlqRpPaE38jdZRCrnDjXwc1gCboc3rbOQfFadWm7FxyCLkcgo74&X-Amz-Signature=6eee3a637234004cd26b2a22dbb0b0b11b181b2b3fcba33f28bad360c2cf422e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
