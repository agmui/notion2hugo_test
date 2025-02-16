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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=049b1bd164e4c45c54fd8b5449a48c6c70efed7eec95f390e852a80a7c599f27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=2c2033a3fb64f30f01c15ea10fb0c4c7a8163dd1e762662c5e42187424814bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=318b91f8eb5b940fbefbe97b19687edfcd10acde9312aaca7085c845d1e5bd33&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=c3ba7e0a8f3b25e72cebf45eabab019028cb44dd1c0a6fb60c54c5469b18927d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=3bc136fc872ccec899ec2dd20c9ee80065cd3154b18b418729a30bca471c0ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=c5c89730069d19e05b2ca89566baea23681218506efc841c2a0d9bc64f5a951e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLGB4H4%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDYisbwpsmYMTV7bJRiPE3nkogPllFoDo7NSy7a%2FkXLjAiBe7lzMGvE00RPUZ2x%2BOlbVuMr0tIzXV8dS6sVx4S6L6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKLHC%2Bt9U4Gy1vC5EKtwDmbO1sS4DtIGe9PYflVilVJmHHNYYsvoW8AA7ggsay8FbAAvXLB%2BmBHPQL1R3zXAA9N8nIChpZtFSOxnoctTpes0AUyh7saT8xqeujXrcrF6dFHzya9CQIy8SIyiMlQ7gI%2F1DjRfwJO1RWn8OetORB4q318YbfKYyl4G0uTSx5vOvyDIGXRAte14aYusTwtWim1QvZuElnaVnR%2FTK72Kuw24Cu8TCo%2FeqdLiTbi38rXZdVN%2FCsAqDNTcDLLjtjp65GF%2BMXKa4TK1xz%2FxCYNEn6MUXz2hLI74cS7o97x79fTLRCXAhbHwK3Ysv7Q1mMbR%2Fu8ggGIAeNbp8fxNxToiTv27mkyIe0%2FygszFTH9LrMtvmzadVP%2FJS%2B4wpmgr%2FGu2IhRWAMaEudv9%2FFlsBphzdsQ2f6RSZlJtcHskxdLHf5g5%2Fz99YM4FktT6d%2Fx96t6nV2%2BnjYh4yfIBdrYHYdTm0la%2Ftt76G9q0xP4pX2QG8%2BCXnA0sXodLdzgHuxLx8dHTO3un5IuuYt3B0APn95k0B6JZQU9Wh%2FaDMqlloDMvOrxA0SU2wCTNC0UvC8cpwU2glBDZdChVxED93tLe1Pw26YDeYGLn9jUgp0OQ2jLB8wRsxGy7UOSffDoCDC08w5KnFvQY6pgFFPsf3GXakToIRMgcWMoi9FQwx4C2fhVWgBP%2BmLYYKOyNTv9il2eS9rTMQiXFxwELJ9cx9N7IxP1pCwF%2FdI2Xx%2B6NjxpHgXG6Bk1CT%2FPhlUiuj0RnXWztAV4mhuDDarrM822iwqnpzU%2B5KJqVVqxnMwJJvT9idJ2Lb4nRVQCPpUOiR23E%2BwunN6UsWMXF4iB%2BXp2jGcusYJmoDeFgELCePRB6QyuYi&X-Amz-Signature=5b2828024abf030ce099b24b9c87575e5819915b71a57537338f725bcce812d8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
