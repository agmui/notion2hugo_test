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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=1f6aceceef1a4ef80a73d9e0cc0be94f8c0e05fbd13081e8460325a3929a42c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=7d26431ee3b66dd9823e30b6f98ba25f8f4ec3eec780d00044677bfb9a55bcea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=5a416cba1e441c4542ea084cf641dd6f5c45523723903b1d8f21bc828096980a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=bc86b025f9612b42440e7ee8432c14c635a5ef45923ca41792bdec82ece70b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=ca9dd44a74e800e6e459c3194c34131a52cb1dd794a20aa257959bb64704e938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=90df060161b9170dd57610dce4a8dff3ab9881479f3ce02f106e2f4d0c9664b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7KIXVCK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGtPhrk1HGYI6v%2FQsA1VIjFBg%2F%2FBNR9nHW0QW5PNUnPwIhAI7eQs7c%2Fbp9HJmVbFPEz1fqMU1IlHaqB%2FA3PsFhWEYPKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jT66dievsEGv8bkq3AMXIsx5xkggv0B3knQB72gqr7BSVLTR8NiQP7lJsWAe1hiAClQu2ucTnC5MU9UDZVmzoJVqZoqAMkq4lxgeUmZJlq3p4pZEPj0s1ZfWh%2BP7smvGs2wH5MnYOMf0aX6CWfMMzu3pNXiG6sphLJF3hQU5Bsc5J9ua%2BboZirY7JEgLuhOT9r9Mw1Un2cOz1DDeOD%2BpGcVb5lqcO3Gu5lw9Keel%2BRBLv%2F4SgxvOJsbyxE%2B1rxlQgNUmhtf6dNEZA5XH7D4kT%2BttFwAcn5tjZb75iP6eiqHxIc2cJTZn55%2F3uGIRS7gyDwU6w%2FIR%2BLiP63jxjoe2vjq%2FabvxQofVLsdmp0VgnWVvrY8UeVwqioeK5qIS%2Bz1G2HuR2AJcAi8lADlJT3ZEFhbqsoMa3rT2MtVfbDoN1lUfJmNgQ%2B8f2BMGFV6S0XfBuqY%2BTl89xDjD4%2BXfdWk4kRWwFFA1Ssx55K1UvJsUrnFSsiI7iVu%2BYfZk74oJMIiLrjreeFQyDr6GfxY%2Bv1Pqx7tPdYUFYFgj%2FnvXPCajW7ESBIEInUuzV9%2F1LvEp%2Bhw5zx3JZQIizP%2FliCgVMmyP2ZFgKcZpBj2eEdkzzXU%2F5A3%2BpRZBYz24wR64SStGnVps8yzwd2BSkCF5nTDBydPEBjqkAca1c5p4GKObYTnGs22Sx6Eo6FAlbnDfyvV6AX2Lv99vx8pUKnII1%2Fn1yOACDdQpfUC4SaV4MxJRbksoc6SEMan%2BIyzsT4TMzu9dj2q9DkPJORAdDBJinJc3%2FVDaY%2Bi6Nfx5%2FWfGUojROMTpf71EvUUmiWHQSDWQbJgicJq237cW%2Fq%2FMLYeTDsifVaoMY7wvMsQSDIC5Nz478%2FgIy2QaLEnJkcXd&X-Amz-Signature=27f832479a90aed4c9fc92f5ffde1eb94a3c8b0e02ef8d2f2f315f0a0aa28e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
