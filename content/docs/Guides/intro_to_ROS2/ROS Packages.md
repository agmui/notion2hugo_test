---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=18cda1309ae4595d9d93644bbb25ce4155d903884f8793f4605debbfa0ae3662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=8e3177f31c48f01549d15b02361c9c3974892b201a3cac8a4ded2cb39535f0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=12aa840380ad4f5102e040b60c0d742c374dfad5b41c81629e4a047b6a6bfe69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=293518583751b5dfa1133b5f4f03352b036d30752b8d700de98c47c21ba79d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=17dca09d3106d2bf0e62fb185a1a2099a0025bb44b0848a7467b5e23fbee9ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=f8ab4f26a6afdf92343cbdef74e74d1c393f542848016046ac634953ed93dad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SUF74D7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCllIXs4IeAzWMn7Z2sK9jvDl1IfTSpGdDjKdR3GCBzEQIgR6wx6F2vUYFP4zPCcP4f06ZdmSNfp1qzRZU5zwIQY8Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ4knvAzT55GahLd2yrcA7JR9HwI9xPjjhUbwP9z4GhBdhwpOMp2%2BMAhvZ75Rxn2PGSZXwWkzlIYYk8HQz79y3CbbKH9OUM7YGf78Z6ZnH%2Fft3zJX%2B%2Fl5V6CV4ZfRA46YtdHLL%2FAEmlZbZ1fJ1X44Hsj59b82y5YVFc2aDYjSiX4afe8zPNjlxkwvWeYFppAPJqC3CaQkn7UF2LWxstDCmc7YSg2FCTfKgu4zIj5bi7amdaVVjZzLUQTcg0i3DvWc4cWvM71Bj5tQYeIs2lL%2FerKgIQfSodS3eRX3QIcK0R5%2FxUgG27hBkJpXUlyUkcEandSBlz7DRQpBXxGQUC%2FdXZScIETNz9a2q5J%2Fz9gd3L195GTA0ohinrP0EPnGxUwUKus70U6wu7kHzR7sI%2BBqi965FPiqfBXxVIh2URkykXuS3rszh4RyxzXmKq4FPcLOlgOrLFa%2FpUyEA%2Fn%2F%2Fwb2fmyT85ssiZTHhNrUm99AQ1qi2DKlv8OOSz0spPEX%2BkzY17gKLgRhZBlyBWpQ%2BlZv3CnN119cpYYzfWgw4YeXLQ0t35CrwqvuqPAj2I09xIJvNkkQE9oK%2F3jz%2BIlZE8J1dK6d8bY5gR%2FTWWtumAEGObyfqaSp2gjJTWnnmdlemDuAeke6DetKFSQDgEJMOvZvsQGOqUB57tmg7o0Gv4CRinhCiRN1%2FZ1E7C%2BrNsmXxZGBli2W%2F5HRM6Les51dXechEye0rAzRL8NMarHAR3mPw6EHcuLd2QDPDfvwTtrK%2B5X1evcfxfHyCk3dTdssmcsPJnmQJxWK%2FNbMK8Mporh0c2jnB%2Fgau9g8U3VRvtdJjZGcvlZsctL9KNOTQFuB4savkfW9uK7Dh%2Bsc%2BQy67%2BFjuV7lTe6OqaOgu6z&X-Amz-Signature=7df5e5759f4fa3c580def16e035c8c015146898b26e2cae58e5243254982b11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
