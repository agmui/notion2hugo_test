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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=c9180819d65ad0a2efb0cf0fdfc4d347bf7222cca589b43b5e5206d985d373f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=44471f1d06397428eaba7fcc72ed0e8e43442ca4c2af6a68e074b251a45e3f08&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=c50271edb30ccc4fbdafe6b14fd0f320d69f6f158daa00763783e9493ac15a00&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=626165a007267819f116bf92575e62aef4362f1bef096e9ebe4c06e7cc4e943f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=d5841faa44c30c494b0bb5dd27868998ad15fa279f889e272dde293712b502b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=80873790c17a8de799ea4163ead94a44547ba150cec0df08f5949d6a51929237&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PM6IBP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFh73QY1qrUMjZYiRx1WGnjlwme46pvGb%2Fl7x4FLnLoTAiEAh3M6GXQ9ocpK83KWX5d1eCZvcOPIqv3atNEMzpcR7JwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvHjsdPrJmgBRWBWyrcA0uJ5kMST7BnBw6GCY0qWaesXOXbAEeWhWnvqI8AA4mQ78asSiKmiD2yIVJ%2BKJJK%2BFSrZthdp5SXQPgneZ6mb7gW63f1SDru%2FxhGgR3R3cAfnlCI0kqhaGr87V1pM3Ad03j14GhscYB3rsVb%2BwkLeeZoAhQUo2diQK9pGv%2BOvl5OkH5Y%2BJneQgY0Dmrdm0W7q2L1cWKTTX%2B66HG%2FMe7TcbZ%2BG09CX1W0lZP%2B3P62viH4cH031aZMpYEbgwBFZDInRLjdIZq7uVvg4xY8%2FRlNOx%2Ba9NcNvVIqAQpHMIYitFVlN9caJpWI5YIoQrNx04A07FSTyInrhuaEoCbRFEk6JviE0t4RSjNMkSRb6YrRk2f8XP2iprKFrt7tQRL9qocl3oaNuDzo4%2FIjYIblhtaTccNcwlwpld78VacfCc9v3Z0DcFX9rJWNqQ3ihk%2By1A0U0jyfb7tziZgvm1gPH0f%2Br6V%2FOmIWu1fdFiwsl%2BMfHQF28xsDkf73vx18OPdv%2B5XfjRwmRyicfs%2BDUIa9%2F1z7a9nY7IgvcVQznYq2lOoloIKNr3eCjlHst3a6EmaDZWIAW5EqecXzzkQHMJBBR%2BAB8n9yAWQph3RoAdc%2BRuz8fJxNf7uNJQVjj1nK2a%2FcMNvd3L8GOqUB68OZ2e9VW3%2F3enxsB4vZx4vQJjmnlMZGg9k5b13xOXpJrtj8eypJMfsZZhEwhVl9ChFwaSwhOoHYt77TinGVX%2FM7Y79388z0brvGQO891hXSYZvoafXhq%2FpdJHi1iJ%2BP1fiwqUH9P6xrCwhGEQJobzg7uZzeWH0Vs9S6dO1Ex0gw2UCJUyCzdhgCNZPgrFGvgzfVyfk7J7yYpCiZZPruF7KG2nM2&X-Amz-Signature=db711df03b63b16df349e6b089b634ca5536df9bcd280213ef3da1d1b0b0b0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
