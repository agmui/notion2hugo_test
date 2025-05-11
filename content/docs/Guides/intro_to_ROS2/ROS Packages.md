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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=f9b0c115017b50daccd5f9a02dbf9ebfca854aee9694585cebbadda6b597650c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=c6d85e0dbbfa4cf7ab1dea21696678daf05849c2f59f60e6f840a7d9ed025082&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=d7d734e7a2432804e161298bf277ae11bade83b672bc807e09be21d63128b1d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=fc8c5336769e1a32d690be4798b51a0570cf36635d615dc3b9817c39f29df2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=1ee0741a24e0d54be703cfacf5040bb5ad80da4894fbc5fc8136388c11a27b28&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=a24f8134e44221d9784c5ad6065068bfd70b013cf8048df6867e6803e8750d33&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4PYVXE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGpVwo1ENhhs1SiOArgs%2FTiLOxuFPjEVz81NGY247xXwAiBaDo11bZePZ6sIUFI2cvVphR34pggrtj99gaAiSOsB%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNZWO1nVhRCLCA73KtwDRlLOVVx78T9UgB3ASrH6ECRnqXrlQ6h8XGVcTB7ZuzsSt2dCkOpVQ6rWu8r3rrtmoXqhACA6KLZYm40PFq6ulrhQEeXY1uVikC5hTYbNJU20zW4GBz18IucdJ%2FyXhbQRiOPKIJz5Kva3Wy7n%2BUhRYCvKeawnvNI6EkRSORcA5GuD6Qn1LtmH6ikdeo4dYYGvq4CqVLcJcllzSN0EgQI74xf3blPACOAWUlRCoG%2FUmgkKYp0TNXb2lQtJSX0UgWdKQYgDFFJiIaI2sCwcBjk5Yo6eXDTrKL9Uc%2B5iwTSGJ8YLn%2FIuISW2cU%2BHpNGr38FZMiQhZooWpBM%2FtzOYjSKBj4DIFyxLGD%2F%2FbMFP7ak9rUkOczDBDTtn3VURAPPyklBhMbv%2BDi4Bfxah4wWgfDqPsS%2F8ss22vuwg5c9p5VHemi4TG2DtEzFHEhQLZKrDUo%2BKFKlboCFxJs5izmnxq62AtdStSbKg03nppoS%2B0MGhwSn8olww69BH66hRifPp6fN%2BJJvJsO7KcekrT2RQirQA3UhjHffChtwJ%2FMIKOGANIFeZ8jLnZu5bSYweyEgeld90x6yt7kb6N4NOVHSHrGKFSZIyvWuwSZfRbkwdDGf%2BDpZIHg7q7tJaacgr%2FiUwotWEwQY6pgFMvCuvcqExO0BsvaPi0vtYgsxOAVLyZCmcDbZClEAYq8yTrZVAjAyySCIU%2Fa3UEY4qP9cev9ilid6lQ%2F62rr0emMoqSj3wsuqJTauvcg47RIOQ%2BkynTGKpIlDYl4Aqku9VsiVHDCr%2BxN0D74f36dHhW%2B7g%2FyI2%2BBOrX6kBiCbMxxT76EFhxFJXKxEeinGZcUQlza8tENOZwFG9n0zWs2Ssmv8yxTAp&X-Amz-Signature=55961eb1764868acf49d7b8aa17ad85c120ba7fbeaa4f75ec0dc3b5ed07ed5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
