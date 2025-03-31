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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=856e5ce317e9c33c0ec31c66403b59d1fcbab1c770bcaaaefdd83f054158fccd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=1e1bdfdae820e4da6af080623634832f718a7a393328fa59fa19763bf6a76ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=8f8d1c5d6788700f452724cd232b3b50fca2db6c1cd1613070d75447329769fb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=cd8aebb87dd509befa3f7d1724c2730630d7d30584c222b1a20313da45f49f55&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=760024a93ec9d8b9e4f3aaf36acec3a49fe31f8dd676dcb637726b8506f1a612&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=588337bbbd5b5b3ec1af3c9f85306d87fd594eb9c4ec9a4abcdccc7d91e51fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMIMBEHU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCf4QBY2yTkKLxTbi2T3wlOTNFVcz1diRANpszgnmwaFQIgETMmFWlUVHzKNH9bNo5R%2FLlIco7gXs1bm5u8gJDht8EqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDf1Rn1Xs9znKbLOtircA6rhptwPObHQyPySVdtlfMnh05PxCbhMgLNDkBsTvv%2BbshSfFdKcDHxnIBFtjhkbC0CGrsrrtaNodz92A1iQf0au5gJidrVrLYajOi45td6Te%2BEmoBXi6B2SIY9Fzbu6Aq6GFUbGBGwbraqgbZCI7%2Fzt%2B1VymhE7%2BVIpKz7bICX1FZGEjKtES0rJqJnFx6f5GYjTQO6BPNtAcFm5dEMyxn2WEV3iG0Mu99qxNHnLx3yZeHjJaCI5G6BI7d1aBcb40gzA04UsWe2ewyTmlMTX6Iexf%2FL095r%2B9p5yeHbZ%2FEV2EI3QAC0y0WfcQYxzdy8qzr5dUq9Y%2FWEZcAMWodbfpK3IflzaBqHiq4d56z2m7n3NAv0J2WriBTDG%2FNZVjKcRBPyqxn5yfw%2BLt%2FlMMWWBMaDxdUf3ZZQyws8JmxMJRaBHIkNC8NdsgfiJMzNRsqswzBtVxg11Fim5wiqr4xazheLXXQy0pmBiQ6AxXB5RBUy5yZJn6ihnNdi4dti%2B115mpCc8QTZyYx3VhnL%2B7hyiQQQKnFHCyVhS0S%2F5qBEXp31tZ8oIhJ4ovajRzFfViLsnqhvD%2BBfdvvalbI3drXQaSKrv1QL6QIpiUp6%2FuEbbJmNofrUR7O6AVYUFVAoYMPG4q78GOqUBVMT1b5k23alkpXyZd8C3ocxRUusfjNlD%2Fhg%2FW0%2Fuo%2FZjISRQ6SsJUrJnybQVQC8egDfixaUoDSs3tChBqrcblDHahQux8nHb0mq7xZWQMC%2Br%2F31wnv0oR23ztw3GWCZNqn%2Fl95eLvl2E5Jn%2BuSMciCDVZJzg1WfqpefLWg91GtK4yDzMAPgpD%2BY%2FcREVe84FYo1d7Cm39qUO2MxPR7kQqKQI5kix&X-Amz-Signature=cec4681d05b8a29d0c89c57bc0c74b3fb16874ecb7f3ce051f1cf1aa80c1e8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
