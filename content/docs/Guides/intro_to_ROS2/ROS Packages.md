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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=5396e04c96295f23631d360251b045dd0a0a41ff7f8038f9353befc47c476f68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=ad3f9b26dab8b8c4eec61b6fe6a98644cc110c8d507195fe2e6c509c3735efc8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=bb783d19ac043077e04033f8a86f11b48c395ac407fb335016309ea3045000ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=5ad7625833d0f2c7360895291d51050bfdf5c988c8863a77841cb4f88075d62c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=1443fccdecbc18eeef969f865236ee0e470d9aea1326564d1b81009523228688&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=32403c9d4582c6c86f4ac1ade457d622f232a7c39086cbebd2c9cf48f992f6b0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662T7Q34X%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC3AhT0Nzg2VY%2BO92DIKN8fcZUl3wOvm9nSbl%2FHd2rDOgIhANXduJ28SJZY%2BDIDM27frUxE26klvszRDuXgGeJuZP92KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyc88nkCjTArYBmIqcq3AP%2FgA7mzPvq4%2B60VmBJhnGmxQZTeGyH1GLkHui0nTt%2FfQWkCxpW8RTvTbgN2R6PzW7v672x3b9TMAuKw3ga%2BGtvpEM0a8AfzI0IYZeZbx%2BzRQ3wBUaft1H9TuTg%2BzKtOEPmLrMazDdskyslI%2FUmVyWPrta8c7pSFuUprVGiQyOMNPetS8T%2FPUTlnGDPElhBZuoAK%2BlH%2BQOKytAuhoR0dfQbg%2FyS5BZE4rXXHkwO%2BgwtwhgqrGq0J3Fc2GUVmu1NoJ69SWLaPSuzvF8FIIMR1%2FkHVMY4ZOGZgbjX2JlOebq7N5PSMbV5%2BGr2SvaI%2FV5P7d%2BK5vF392nsIx8DS92d%2FzCNqUHuEL3zbSbOw87S37S2GH5nfFWLUa0sg4gdTv%2Bb6SzprQ0HZsApbvPPUmb1I1tXVYkCNVimZGAHzCNznTB6Z3Og7b2ixNel9aIkqBFM8%2Bcb06vqs1Xc0EZELtTTRN6qP%2BSMxL2GhqVXn5zHwfAbXgg2eJhOeGb0QaVWRFLEm96Hn5Se3IGSCSZkXOtqWKnFGh4PEBd%2BBReOZ3PooUOLQBZeOWbvseacRL0R9JkH49swLQTPUCgJ8%2B989f417AXCX6AwtZMu8LT3HXW9TutLUSYbsw9xL68JYJQ86DD7oaq%2FBjqkAY5SAKd13aJEZKEc5T3fbBiT%2BEXJ2BjL6y27wM4qDklXS7efrKPnznMoTQvAF0VpTpFidHNMjUDo2LSxeSReM0A5lMnshGyXtSKJLHvi00YBsfqiHeRAZHx6Wv82f%2BeZbkjbUJu09vwbKVzEqbYE79kL2ar55HVQboeYOnpTtIUvRr2uWsquyo%2FXjJYRwIZ51KlStoWgQ9SBsILv4d%2BfohBK3qnr&X-Amz-Signature=da90e51dcd7d2e416a00e39ede6996f1dadd93d531388683b84f3a9963a02840&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
