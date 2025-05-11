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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=11065faa5f9286994013ed7c05b2812a20cf3cd96850fbe27d652cef780a0e08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=c20508863a9dcdb6edfdd7c7feb53c0b1415dffb81ba37d688ccdd16f3a35c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=6b989613f3df942f23c55a20071a15393839485d14446ed7dad2559af46133b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=070de5b873f1ec0be3bd4917d09f85a9775d5e275a9f5913af48a70b0ff9064c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=860aa0886993006503592b20f1cead053a3f68b08f2c9b4301c219ecfd427071&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=1f49d9611e286c4010d01f547764c61f041f01143037f59251a4c8f6b80ff164&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJFWXR3O%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHfcrq91ByCnP2A0qCkBMub1SADBDuIYqr4OAGai5zmdAiEAt6yaXUPuX%2FBfTjgYhIJINEQqpsaA6XP8VW95K5m267oqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlg1HPp%2F7o7iPcVPCrcA6OAcrxAfv6qPUY10x5RXLCiSMitwCxQHMPK3VGS3CpKV%2FVK3vdlt6KnuTNbQfAfkKsJeAI9QbvIZ6wPCb6xNOPyzXOjdEqXEZNkg%2B5KJ7ZLC760JGpbRaOFkhlNt4UKl%2BEHZvMo%2FtHCL8vklEh5W2UiIfdWi98jc0gCondWUXm6gsiVMn8o8a07ViQLOqkXPzU%2FGocTB055n7RTMlqkM2RC%2FQIbETkE0HqdO%2FtFPs2bgffBlHcpB12ku8a5CBecYGcoxw9oLya%2FF79IAVYmgSEk6CpTFHPzyzFKC27%2FvrSfSBjKTz0%2FmlUMkOLBlDJoa6W07%2BC1lYX5gbLwnfLAUvvHGhDXt4HvZ1s4w4POtlvT2sWhqC59lib1tbugqD%2Fnxwf0OAZfZl7ZvYpZ%2F1xuUeNu2yoAhov8O%2BDP0RoJNHTgYkhWf8Nu4bdop9GBXH2Iog4qKTiq1ojDbUHG%2Bs9Bs71FYt9KN2eZwjdNUYWob3Ml1dqfvaEwxjtKl78N6GfuwbhXPou%2B%2Fpzi%2BzYsQEUQRPwMB8FCzMh9z5ZQqMgcNRjHCvgyVIytdVVaa4uU3pkiWKHe2Om9LCnhCEolpge5p4DtiUD1gVaqJzBpvOrHz4ynUthtgtUElWqx65IXMNb6gMEGOqUBa0FnuEH%2BXKBq%2Fm4DMpRE48WQjQWrmdwmTPvY%2B5pJg2J2KrcB2NKbBh7MKBy2lIDC9eEErKiapwNKnNKa452BraCsmWIVTeRS4KtjtlTJ1sshZaq45F0vSa6zwIKGmH9fydx%2BjsH4t0qyYV%2BXdZUaUHQgUf8vnc3%2Bt6DqOSJfJlta81maShPjrA1zShV2qhcELHCNBFnXg8hleBAcgPVZoUD5y0cC&X-Amz-Signature=50bfd83ed42e53fa50bf4428129dce1187582ab8e1a770df386206fd539229da&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
