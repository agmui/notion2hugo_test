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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=ee98a50b8bd4788ffa2113818a024e76b2a24c2ba96ceea693efa0c48db90416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=73cfb8949c4b21c60b63841127456df675f316f69dde7e077701ee2d627dfcf7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=ce553621d699b1e382849c187fe90343f6a684a15612c9b183da64a6251a6ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=34a4504e123c4764aae9a0b31214c50aa6fb49548583f02b802a08c5ac9775ed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=75d03e94ce4046170d7eeaaf39bccfb4b637a35c99a9b47b34fcc1524eaa1790&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=c2aec4b91ca9eb1d802f4f334d655ca02096d3a69b28fe82174d59f3de0f0fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIEKDNO2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQ%2FPuKtZxo5HsinEsLiKAx%2BhhdypK7g52Ji74IT1TzsAiEAo4wV7OXGuFJKCsLsMslEB%2FGciGywj7rx9fvxEmveCRgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3duGQh71fPDp5CMircA17gf0xvEtXa0X0WTsOa%2BirLygMo1j2WiFbZu5Shkdb1%2BpUilTH85L5Le5CTslYGLkcKKCyp4TVi%2BBBeA5gg995qfZmZ%2FDeEIbcplwftA2mQXzMMdMC4HBQAaykF2Zqsf8sZpir32dDA6H%2FShkvLvPXbQFeQR1Cd%2Fdcqp%2FKDCkW16l9k7f84HzRbKySQ%2BZ0goDuVN3p%2F5nO%2B9cYH3pgADg57t6pn2vV9UbPfqf7Zbs%2BdJT2h38a0IOcvzKyuW4ZHBRZzH6eV50eS1X0VTW3BkfOEDecVgRvo6W0doEgEhyne%2BCUYuUbqkBADe%2FhOcdW0OPtPMNKim1n7w4xLQR8Au4z3sIB3RZb1GyszfqbqDZ9X0KJAPBh6ne1v38bx%2BgZYqg4xPADPxrjXkkygg7QqXp2iiRwEsux3G8ncmoSY4a2DBm8CymylSsp1QZhJ%2FDFpXCPhfAIFH8OfxVO2p5VA5Ap0mzuR1zO%2FP%2Fcw9s0%2FixJ8osD4uBcPCVZjhsaVC%2FoFSnZbuiQ1XSG4hXCoRD9TUrB3a2jCESO2q5bp2J5uPPePjzPRNXJi4l7D3E3mkB4lAPZnExX%2BeTAZbHe%2B%2B%2FwEJdRQdVGnkVFB%2BTEfZZvBRrkPk0zEltlXkzYCU0a7MKShg8EGOqUB6gLPxjQAfR6QopZqPcwgDpPuh5S090ShcYvIPptHU8%2FAJ3T%2F1yfYcHFG%2BtQp%2Ba91%2BAVoj19PjlLqhpNfpDN5cc%2BUHkAkLYNwg6oOmZCPzekknyohuyg%2FAV1NTmRX8xG6GQqY59TvU5xy1kEEa%2Bx2xkzMLO6wnnJVnI5bip6lE7XSn95u3iolh2Pa%2FVq89dib47DUvWRK8ILdrpP1jBfZFB5v6skL&X-Amz-Signature=4fd0f037b20e447fa5d390489ef7e579cf1e02037e95d7ecbf5f8954be9bae05&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
