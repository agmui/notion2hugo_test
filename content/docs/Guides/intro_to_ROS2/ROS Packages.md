---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=357b8377aaadc95f2240df462e875b88a0f21d38a09ff9af4a19c98a3a8bd53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=a815c785adf8cba07c0fa72eb5060445b12d2a3c5f904ea5a74e908dca10c8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=182e9531017c9f22657e86c4f6900e605a7395fc41439bd4703e278a6064b56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=dd45e29973a6b1031ea3931326c28eff795890f796c3953b726302ea0380bd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=bf8fa5df6e57c42a0ebee904041d5e552b32b5e47b4a23595039f8e9dc474f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=94b9020659029294125f5506ea9f99ed46f4849bb930de59d2db5e027a7f6a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ7HQOXY%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq%2FvGsuqHWAHoncGv7ASsDXP17ZBWYpePM15tLbe6ImAiA2hSFjRMle2q2wAYzfqc%2BwqIruqTNe1Hop08vN84R8oSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCqkEhjde%2FT5WFEnVKtwDSS14IqdqXxX4kcRw3pTIab%2FJaa7d3xZbhGld98NXJIkDieu0CTI%2BhEr28KO4pl%2BGfa%2FQDhzgQnUFpbDZZq66cUgBxCIzrHQWaX7K3zn8iEL67hRl3WPdlBhhMFhT94%2Bo6AaXoo6%2BKUjdEbXGJxrOnKwn53u35FkOwBIBAcygKgyd8jk1RRur%2FYjQrxHekvjliogICxFiTBcS4fb21%2FG0jlFmtZoSGDAmwhc7ObBLfzU4OywxRJwdQLBZbgRh3UI5nkoNZH3t3tvuy6MgXFmlXEVC7DHLLXMshFvcTMUVU8Y42xedEcPxX%2FEs3l7G0t%2Fj3EaWWvW22k77xmyKDkYus0Nip8BjSFaWipDj%2BHcf%2FW5BuIa6te9pXZ%2FTDFsxpqODZcHj8shIrrkx21jGpPikyNtmKEZc7WpTwDoqFiOlzV%2Fwzolpdjce5VdXywPAcZdJxDlwIh4%2F9N8QumnOTPpWv0rUsr3aLJYwK0GPrZblMATF0ncPdVjM8xntNx6tcJxeZMccSyyVjO2cs7ZK6Nx3ggCDryOQcCenxHnyeeY%2F53t8rdUn4gjIHvz5qzO6c1Znht%2BMlyq20heOjkAfzArzxxYHZonpadTp1c%2By9GDF4G%2BtWydNSFCoP4tf2Qgw4MKj1AY6pgE3WnGECwldy%2FVROaeMJmhJRKApHsk1azAAlDWWNp2IY3OX%2BOdf%2BqiWjlLYhhHo4TsmVifX7F3FOJqhP88kcsCXXeyP63grt2bSaV1n1Q6rs98W6d2JAv0BsQkcFXYmcYfum1hIgRGgWq1rkSjMuEtHBsqSCQISLephtr%2FtkTJvUWad4tnxoNqMlIE79946g1cfpssyYQFT6XTWwGrE0iWL5mNb4rRs&X-Amz-Signature=382cac62b14547d80a49641c64a20b0b629d38ddac4067b845cce8acdd94dece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
