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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=c3bbbf68f9da1636417cd3d3dab7b97d66f0c4ac49e14346e7a8b2cca35d0df7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=60e87a224c4dd1614442e8ef3be1a3bb07c7612b08f5f1f6e1bda98e445b2d63&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=b52f899f6fbb95532b83afd20e118dbad0bdabca973a06c4e185f09d5ced14c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=4c53c3219aa7107fd4bff53375200bfe1f3babe0092a0701a265d69457a8dc13&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=47867f0a319cc595ae0623a3045fd613458d53f0222c468ebcfdfe81e3c2d63a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=dc2f0f4c54628f5b2c97779666fc89baf29b4ad360eafb1aefbb5538278de191&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGMYAJJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDELJOXaIidvSImGH%2BKtuYjTgXrqqZKHMCIZ5ChoJD18gIgY9%2BM2HDYuw6RWaRw2s%2BIGVhkky9y2LK7JyHS38UgxeoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcCh9xpgKzuioApQircA97VurUoTaKNkV7Od%2BNZBRWCCVwDCEaNt8ebQ1utWaVXNjOhCHKAirV18PJUR9HUX69iWbFV7FgrvQfkFp6P7vXdiHgiI0tQQWRvVSRyXm99e3KHVbcmDUAqYkeulP9n8vz42oX2r1nHcuu2CV%2F8VP3hgY9Gf6gLvE4UwBL7P%2BWgdpbvm74ob1hd%2Bj4pellYBTR%2BzPehkCNNMSRr8bijebPdlRLqPpvF0D5ew1%2B%2BtOHi605X3NPVNi7WJ%2FItxA4YGwWlh4gbPpomiVJyj16zEiFMdgEWe564mzgENU4G%2BQPIPRoAGhKTRZf6aXu46Tcx5uwQpxyZVktvmbmAg2Qz5SMICPPjvT1G%2FHAZ2oAW5S4YLW8Q0%2Fe0KsDtkpp16IHzXFhubMHWTtTRxDBlhMeo%2BZC2e1NkGEQ15Sq2NNrYDQ3tR7t5IrGX96inYJJFyHLMPReSniCo2LjtjVpzdtFdye5xWAoQlViOVXxZOBCJdfQMsPFBCq7tzKTrODELIDiPEgaBSsBl%2BZG%2FJKnVaxU%2BhmquAZ82fyTkMNRcFh21W5mgbKJhxCiLC2R8%2FR0GNpIe6ZyMdrF3Qu%2BTHUac8H36I3RbwpUL2wXolRBOA0XWlaccDdHgNkocEl7bMurOMLu7xL4GOqUB5o7YKnACByz4iGZS3v5Bjrusv%2B6JLU2osI18DGalD1XXFWNtFGgW8bRel9wbD85mueDVnqafRfbJlW38Ks1tuKsEh3xgiq8b1dtxaDuqReVIdM4todqU5NNdFBUWwPyJlcCGRC%2BjTn7u%2FTCBJacmuEdRHNktsC2ZGfKDwqtjknNksGGO6glbTODYCQCVpy11UFoeNL4pvWZ9U7LDTZGuQUwDmDLD&X-Amz-Signature=53b8406a355f2728fb05afa5ace94d3f7a5923d6e9d6db607f224f51bacf776a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
