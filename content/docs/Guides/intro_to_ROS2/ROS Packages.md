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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=53c2b53fdfb058ebb6e4c8a44eedbcfba3337879aff702edaae6e210386a81e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=7ca2189522ff962adc8fea3a75197c09a80ebf84f7aa36dbb96884c69255793d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=3964912ab27a77ac60405b1f4d8c5ab11e5f897d1fa879116d34dc497d2ccaa0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=7d6da62bddb45ed27d65f3f1144dd211985d79a35a35ae1c1e58d28baa277911&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=ed87470b2176a3a45904f547fefc89f3a17fbdec89a214945d5edcf485ce80b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=afa51804227ed5fee890a3a7aa1b5247278a4111ac0499b0e86724a76d800b08&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFQKZQR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEw7q0eXW0ViExs%2BlUxRwvBE%2B0kXO4PNsyclYbxBIc%2BlAiEA7d86oovFCYle2zJSvvG82K1B%2BNAN2nUJN10CfE4IUS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEZ0czge0N5qTfaVQSrcA1QauiaA%2B6HFgI%2FGCmBXRstUSQfCSq5UGINpy5TYADidF2susRMVbikEuelbswPeKvgOTo1fH3B3Vr12mYQpNe6N1OP3BT%2Bxw%2BbDr%2F3sW95fF3pziSuW6S0AVZ8lDuL1LLuDytjFenBNhUolslOLsNinr%2ByxznuaJji6DW6lb5riLAQUKq1VVoCB91NOWRQRaEDLeyUN%2F4LrhytILHGkRd0RtZa0daFbkoygPGvziQD84gaMy%2B3pzPPZkxw%2BV2lMjhEMBIXAFEaq1RovsEdwiuz5WQEZx74oHpw9VVLW93Jew9UnodMpjpURpIy8Bm7DAplG0tCL3Fe3wNkRa8s7OdXEriwF%2F%2B023dIwUAiUrWwG5A%2BiXlOPiLgqLUSdPplS1BSzUYWfLPhozKsFzUENYVtAYtcLKqF7gqkS9hy1iQOldxp%2B5I%2BXgqHhm%2Ft7M21ARk7u4JrGyYF6s7vPcIfmf2b6PUvNRXp3iPl0BF%2BJKi38TjUjjqnbZhj1uciPqUK3PLcoILwnj%2Bh%2Fm7gbQXegvTw22orlStE9XA4uqzCvghEzPH7LQAjiuAotLDuKNmKNyzzgDnvkP9lOhcAlygDsXLs7PJyS2z7QIgECJPDq2fNmWGcyLZOKMOOB%2Fo9NMJa1p8AGOqUBOLNn9tcvDwR6s%2Fa2D2yHl98H7H%2B9Yc2DHIU%2FKfYly9%2BZMdo%2Fcus3ldidNq6dXRwtXVf03qxLsknXQ%2Foqd0faqRsrLmNXZROdxF5FDGqZMVs089dO5pYNMKUwX%2FvAjozai%2F4P4Ic%2FR8vzOM7A5u6VklyM4mxJXsSxAw6t8NRKtXw6XXT71ZRmcXsFhUOH%2BWnOp2GWiyWc1SYfRFg36QDEkqp%2F7ZwO&X-Amz-Signature=f319177b67462d2e5f2e2c1f444b4753074cd4f959845fff06c95eb52bb2ee83&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
