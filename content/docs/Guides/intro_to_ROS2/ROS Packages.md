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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=f2a959cf0e5805bd4c2b980618f59881e242ac4285297eb1cef9ed49543957d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=2a9a14810be971c9782f39cc4ad23d73a0e12e172d102664c5732713ad222097&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=193d3d894b13a0c2f07af5ddf1b0d439355b6a261c7a91d0e0dc03e18d611a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=4367cdec3b0fd5b752a722959df952ef1d0da44f5e101fc283931e1f258a2aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=83bcf5cd615640804619dd01e9a44328b9d658ca219bdc51d6eb4e918864a245&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=dad3e38204dde15312dae8a8c2e923ef23b5ecd80ac0a82912dbea3b3740fc92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWKFTKX4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCK1tsz%2F%2BSL5tVZP1rPkpBKoEOqaxHfiwBASQ00pTQ06QIgJEuhwK9RuJVlTZTXHowXd92ff5n%2BK5xpVGW3ut0iHkMq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJo4R%2B7bEGzVAHUnwSrcA9uVbJAPjZmVi6yhXJGYQ9a4oSZn2%2FZcT4a3SDYIaBPppM7ml3QVyA4LaxNKc3lGI8y%2BOTlrMTTHOK%2Bf90ljfcsU6pkd8Q%2FoXfDLGveDw%2BNdBEugGPsJdULYFfAKd5yi59zbnYcK3DDeP%2FTczdQkxZkXdmfWAWi5XSi0e3vQ8PCodMgri7uCJfpjlCBvc8MSV4Frakw57aLYaNdNdSqeiIerxaEZNgrHQjuP539LPF3q6k%2FNgrbAmhr9gFltmuBM28JaxDy8FPL1da%2BDbrCkaUVQ98qHBt3aC6Q%2BJKnkh6b%2F5RSa39SKbymXaZAFkKh33gtCZS5Gq3ZC5vXMRm8Pry0UBaLkRnBrP7ERqE00Ln9tPFbCYGROMBS0wIk4xfRhYI%2BArbmX1UwQFjygJoA2OkHnfZvR%2BUgLbx%2FDyLOyCTPJ%2FJtCpILSFFleGNnCKZ6n0NiaHoPRfSLXkln54Lnu1xOcMCG4Rm3gWyg1X3EQz69wDrWAR6gcnGF5XzbS39R8Ye6KDbkDAJ%2FyFMymHsyIU1iCL7fNxPK3NI6WBBOq8PRwJzbcETDMv%2BKMScVQVadVdwjq8xim3Eu7u2CNsHfHkuZY9kfTU%2BscauWTl8EeTEoTWkols9xvcvm8NBhEMLyJ%2F8EGOqUB%2FeaX5zqJj7GjXZNq0Zjx0elv1%2Fm3aC760SritheLVP%2F%2BjqZSRz%2FLPZZetlCgxR924fDCKQRP4OgpIR%2F4p5yhY9m8Cp83I9K45i7W1nePE1DR2T%2BwOFpnN1bUfj6lUQs4byBH9CNKk356RLQ%2BnCpDXUb5ZsjEKnHqEKcUiXW3hdjVf38D6CQoDBRaxl27SEg5AoIG923sEGqGNeQElMW0JfiW601Y&X-Amz-Signature=78c6c36b11c16ef3af6a814e128d87bd31dbc233bc1bc8b30cf077ee63218d23&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
