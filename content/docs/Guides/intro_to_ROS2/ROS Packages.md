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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=b31b93c14f294b9567c12d6c315941669f47bca68e84de12a9ab7d14745584ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=4d0471aac397a8c8967fe939cb5c133da22a4c0392ada534b47d6631a3a715b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=b70151a65dba796f186ece2c85359d8ed680c9d00de10bfb95bab54577590e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=45fa93cfd8a947e5e6715ceddaed972c8b63bed9f75c762d1e22a240848cd786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=61db12c99674f9208ac74355c14101c5993043395458c9f115fd792e4ee5b284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=16618e54edb17f2430a3b761d0c546e2737e945e49e44fc58883cccbac8283a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORU5ZCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFiSYEyEOu00goG5lqfbnncF%2B%2B16JMq%2F365QPHjbZQK9AiEAwkJVvRkrHPlQccxxHGggf5F4FZGtmR0CyI6iyLxLB2oq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIUfUiol4vdQZJWZayrcA5Q87U%2FAQwU%2BzF8psTf5ilo7ocProdZZoNNHP8twxthWD0hJ9u6EWContjCgHcSTXxL3Z9NnlMgp2tD%2F6xi%2FMLLyexzj%2FNhh3QHQZSh2xnde%2BujUhV0uolnE%2FEyT4OgEc728S6LctxYJehsoa%2Fr9Mzn3C8tFEnRCKbUqwzn9ip3UHHFxyYI8JuFsBk7NY%2BIF9lCGs6XD2QpNKWT3%2FHf9QuC2phr72%2F3HfS4KZUuF4SeUxMA62Eb5ROfsJGuWRxvfG%2FwGG5FJS6FzOOS1nxJCz0Pa1qpyMZcrsb9CEk4Da%2FEVwMmPxjGGinHR%2FAJoK7l9Yl7kB9aHD9jnQqAkVXfqeE%2Fr3RkQ2b93gRVJD5awWhBbHwMQZk4LAPP1JnUSTyoeeoAKvHfx%2FDFAIM9ML3zBO1La2MCzvClEhtumo0vgXH8KX%2BqVoCFEf9lXgehNc1u7oJqqO3wA3yC%2B7O4QHEVGt7fmrjj4%2BX6xKFs%2B0BO3wceNpgOm4SsJwxCk5nDiHOVMlbPXDObcOw6UxsUw6mO%2B40SGrSNls19DbaOXyeOhVaAviFcEpV%2BUaRQsKk83%2Fz%2Fmfaw0Tx5ZFJ428kOygLGpPgem6RBRgC5%2FJa8xqE65v3wS%2F21FzxtoByHAfzq2MM%2FZl8QGOqUBnDonF%2F5wXNyeugQGIN0RlAU2zN4FsUwL1Ptsl%2Fn4nfdrKsp3a4qHqZjZxcEyHsUs0Fx%2FlMDGrS5yxfcDBYAuID5JtXAsAA%2FAg6Id2zYuqmm8Y80yn2rTEq3jOyB3VHGKJBrG1T5ZBq6awgtoCwY9aH1t%2BTamCmnFScRggL9Bidk0OW5srFtoYSox9etYYwItmKONl95ajw3gZp4VhhjlCQsMyZhj&X-Amz-Signature=ea5324cbd6b4145083f91bc2de52c1766d1407b7ce4278fda5263be8dd7fd84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
