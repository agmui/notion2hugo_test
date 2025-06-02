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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=e7eac08cdcc656e5a3b3e7e6fdd66edc8f1cacc4098115b06c05620338516528&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=7629fb00316b807a0974f04ff6b687ef456e9d427829e6631e287ca351edb727&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=b83ffb99936ab6f1eef277cdcc7c91bb58bb2abc42b010d0914b9a4cc45fc984&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=5b84289c595943ac5e0d307cd7fda4112aba06a4d80155f867bdd2963e67de3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=952c367f0f1e7b5bee584e8bd08ed82bd0fd2ec997e3f2c06b90350fe52af32c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=eef1efaee63ad42051e7514794cd079686ee64e2caed78a3a632437491cc7f31&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXA7NSQ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCkq96QisUKGVVH9Ih5gaHvSbwm2%2FJmHCNIln6k21CBhgIgR8AlQ%2FQuMxi%2BYPzSxV1vRVU8FX0KR6zDKQWjnm3F3yUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ9969v%2Fnpzhi0H4CrcA9ppn5zBYGC7t6qiUzujcfSGKQIwiTbotZtZdew%2FVKGB6Q%2FJF%2BpXO%2B%2B9IrOK2X7wdgy9Cng3qgGwGBlXC1RaeiLoECZ5BSCjRvQ6pY%2F%2B%2FQHQ0pne4b0rpne3VlWRmqiHXlpu6rx3sfTXMzn4FgKE6cNGw%2BFyA5yynhnY7ieqPtgEqU8FxYhZp08d6s5ngJX0sNQOtl4YsATVep9ivSLnHqbA3X%2FGP9EbBOks84sMmMixBDd62kjjBzQAOZ8AFgq9xcModysEShBLYS4ekKeDFStH5hKouZOYaPyjLFWpHLAOdznniAUYGfxSvGifdrKr349eMZxIUDFMtZQTxxa%2FNRtgTUwcLLNZdjsD01jtzGn54tjPzjtoZSPs9OglYu0t8Iz2gMdXX7iwJ33Lg3PmPdcr1y61zBlQlnKFqBDEYxSNj%2F5qZPm0rrycD4qSm5%2BB3TYMHeguf9CxGNZo%2B%2FQL3ZVUl1%2Bd5ziDm6QHTIPkPmm6SOhN2NFw51FmZLTgcmugloWnlLMTfMxZtJvrK6mpzjj37WAvs75vEDeddKZyAPfn60wA1N%2F%2BecRfJxeziDwKG9YO81tfnpahXxjIqneSjEEAfwgKKRBR0YiQh8AgjjdNu%2B6qoAnIWzQVwNx2MOP09cEGOqUBPiZiCCWQFiAH0MvF%2B6hlle8p3wvJ3J1x%2BnlI2VV9iRaK6Dckzekcj5%2FqaElc23O6QWVoADLhOpJait0CRw%2FSVveB%2BlU7C8q6QD9iNa4vW6izJmy1xnjrNdeOyJig9fxIvxEsn4notJ6X3LkUoQA7DPyqRLx4d9Ij6ybYLI%2FTHL6vUS91N4%2BpzQrbVBeZ0UeyrHBd9fGBDpiQ8DgW%2FQWhGxU80%2FwG&X-Amz-Signature=c1ee36282c570850683dc14b6f56d2a6ff63e552816c27ea4528ef1225de5af1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
