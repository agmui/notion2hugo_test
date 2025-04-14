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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=02fad94f4c7a07d44b3c5230702d72f7aa7a96a389d1295e7006dd6eafa3e047&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=f79d95488b7325946a87ffb1b175eec1679688481b09a0b5e66457d06d85e6b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=31ec8f3594e94309c71e0f7226f6dffc9949c013fe226615e1ace7f8b08a2896&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=8dc9d0eddb50797c15423d0527e6fa4b7530ff648caebc12d0575488e5607028&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=d872c024b50081054551877784087a089c45bd4a4a163d62eba25e31e3b9bfa5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=2da41efe208df71e66bae0ee13d6d994b6fb8e5451e9cada6f80785886684c3f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALDDKPD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxA4TQ3ruQaDwaHMaeV38fIxP0mZetMJMOvUkqWIszrAiB95aeHg7Ik9OwkMJtxYbamzPMWoxYfe29tst1u5kcheyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMzAlo%2FPBeDR5NyPl%2BKtwD3GCklJEqsV363acWug1fNVNganCA21FXkwXipaJKLRmqIrfn8Ya%2BScE6MDynfiD1FytgZcStoqvduMpprC6FJWb6VVNViMdMC0kDaisgtW3DL44PXb96agJ2juVvRwBHrQLfxwVOJj5%2FZUbhVkHdpNCGNoqvwUM52kqDDQ9QQGKHTm6oMqpddNkOXJ0p5QSKRLZf25%2F%2BG8KWxIHiOEXU9s50Or0AXVpdNQMLq%2BjjxJehyLLJ6m5Mge8BqPUJgXgN5ve1E35pjxBAHO4RXwGecewmDBTD7NjVWMou%2BtIBPALOMdXXvK7gMxObIfFB1oCMOt7Go2tRwOShdMs2QPzYMyDvrof%2BAy1UkvvU%2FuxOJljG6VfI2coQqSM0MuyXGbkq41Cd3ucoq1CK9CNjR%2FLXA7%2BNnn8rPZF5NhwcWiuTqvErKHjQqWlqQ%2BZThUSQWtrHBohCwPnrVw%2FeyT0d%2F8CudEhywwuxAGLlBeuc4P8EHagzeVB09PJn%2F1mlFubYaID8Lr6KGrp%2BTI69%2B%2FlCoRXc6g0EVid4iMgmiZBdv65%2FxSMmCSkbi%2FZpLO9WlC0Rq8gJG%2B1S08S%2Bir3gPoaW9jLTeFMhL7gYcVyDuJI%2B9o1NkLk0SSiohPW4nMdYhmMw59z0vwY6pgHUomcDCLVRKnzXKq2Tn0r6eGtem7Egz2pn%2Fmeu1ScDy5qhFg4TbQHmz%2FIsmIC9%2B8WjmenmxJ2lVg%2FTXI49VvELpnNXw15UxiKxH66ckyeOz7W9BLtHAmepcgETnCR2XnOQ7jMX8%2BDn1WJauxBSafh4N7w1EfV0gUGFreXcampRnWbn35EPKe9fKR2jznHHvzIcsLjWov0ySIJFLFJerj48qNUGp5UA&X-Amz-Signature=b1c05ba93ccd6c43a72eefd0dcbcbf3544c4f13e66182a2f79b0c0bea302ecaa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
