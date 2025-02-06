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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=6f3ecce6030ecd4cc11293b8d0921323d6b89248fa6c26b97167201e097375c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=c63bc913d15374dfa4bf02962dec72100ae057305d91b33b05c978d955c957a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=7d675e5ca9de8f42fd5172abbd84ac1767758adb761d04709424277d95d0e2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=2c0078a712ff4d01ca68e61562504a36b1b289cb84491cd4e5a88c9767d6624d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=e95005f37a566a44fb9848f3e4e98694437fbbc57ed23e0489fdcba3e0769d83&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=746e68e2e5dccb8cc678b180f915fb8fd1c4947ad6b99ff7a14e767e5dd9af5f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSPKXMZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAwfrSnGLYJQO7fz0IVHn8P2sBAuBYWemEjAPn7TKoFaAiEAkSN73eaE1JlTRwFu9WZFXqtjyXSRLxskAi1WvkbQubEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDArVCMoF1Qcd3l20BCrcA42HmZcR2lKUmhnsA%2FIZ2cpVbWbUysAzOJ1gRAoNJsj65e1w%2BsoROzWQvuFhJqimdnRPVwLfVOpchwHRQtrYKRlOHFXRoG%2FvfYF8nPhHqgfDZJrM4Mg4c1cf30N1oloPpk2PkjxsjW0sUs5uaAzbyWOqr04E5GtjFG%2Bfh6W7J7FQDXRLi5kjIUQGfetFuNMxC%2Bvs9%2BBXHZq80c6CX4OY65BN38WM9kVMd4G1N4bhwUUz%2FwPpIFVAEP3bmlvRc80csBf%2BAZd48UTHE2MDSGTWEr9UA828Dzi3snTWF9FMnSYujd8uRxUPlTzkA9CsGELk%2FMhaiSI3jgpxIIgfOi4w7DGrfKXBrF8A8FLFQgLbG7OxEolNTSN5ployxEGyrzjutMwKeZJ93jGJHGJZuWV3sOdLHcUQ%2Br1ChsFxZx7vsad7sxVfIIJ0Y4HyV9OA5KRMCrxtbY%2BCjgxm2lB03MolfQE%2Bwx0JpgVlmuMIofeLe3lXZM3O%2BMQS3XqcSo9LiJve%2FJiFQWMrZ69AEa5lmE34%2FLJf9fu49jj9rBJQ4AJiL95CSrGdnEMVpUaQ%2BUBaNS93xmaPw3RK%2FZfEmr9OO49AuEhvq6Jp8getLwwor5yLy595ADZ5lK3bx1T0iHChMPq2kb0GOqUBz%2F4oolYatRKxAJ0mZvA45zV3bq1z7mc%2FfPDxfdKdjHmIFMm0fHpwkbIg2IPhjIPHAgmnBWLHgeKFc7twY0Cfio2ednhan7SLzQuE%2FHb2AsFfswVplcDN15WUbQ6dpLtUAkxBzWKUL44OMx8GqyCFimPGd9tHmocH%2FgQYQcN3dZ7%2FQNVfodZZ14MLg6cWnhV3kB6OXYUgmxBMsxM%2FLf8Ve5irWCOu&X-Amz-Signature=bfc7e53d769ef8aef08ef1dd5591b3249a51259c6a05dad49d5c0cb020320b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
