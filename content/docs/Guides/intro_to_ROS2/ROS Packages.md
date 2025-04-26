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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=68802f9ec45a5d9c8e1bb80fc1be7c99496fccc39f2d1a10db6c663de200944e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=7d09a3495a265993c6899e874582f1196d744f9ec5b7b4f35df91d3051e9f364&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=536d71bd10c8dc025ff03f422302e55e17ccc58efe1732769492e878a0faa7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=c9fee1f237d2b3e4c765970872cbbbba6c2f664bb76f9d162c585bb6a3a2d889&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=563cbdd6fcd0050e5cc760b3490f5a3cff953d73c036b2c1aaf4839b911f398c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=cc077bbc181acbc95c530fa0bf20020f3ace6ebe27a2a0c8a6a76f79d3ee80e4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5OIKZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFc1cmb0FXo2ag1wpL3PwgmACncswSP1NlT8RLk02bQPAiEA041yh1xB2gQtFKDW%2FjkKtn0pvUroDTdN1I68fcHRrgMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHDC2u4Xwake%2FWnhBCrcA4HXS%2BaSa7O7V9LuUq%2FED712L0m4W2O73jg2lmW0Lb88MjKA04tw7CW6evrQ0Sky02bcxuoKB03sXBAQG4hXQKrKQB6cIJznCs8krfzQZmxeEF0LrmPXkKXdfmRZqstow8cFaFWlXohmtX3yK5U8%2FhFrlPAfn4ia8jLmyP6O7exYw4YePVnCmx3O5LIhJHgN6sSWX4ZzcNf67Nlgl1Su59OTG1bZl1vstyt0eyP8Y3JePUueQc%2BMu5ySJiQEjE5hHlkLEYff87ClFW6nYLfs%2B3fJfX9UKnk4dKZ1PM8LJZO1f14sMmrjB1lrL2rISrbcWJRratGjVYOEIA5urSs68f3RhibSiFwZNgXuC1rxRFuTaPTDQYdvNNzN4zgjSiO%2BX2bWT3fHpPRpoZfV6sQotDms44k3rb7OhHBMCppssfQcKLiUqDs4xf%2FMOHLNtdNNlo0UhmSARL90njn4gqN3wIOXauj7vMBob8zMKAw%2Bq6QuV2R7O%2BFMhEUxCzg7mQNx7Yci5r0z%2FHJun8Ewo%2Fr%2F3ls8lg3AYl4Q8k6qL1iDUaKbi7ZS7x08lY5%2F7G3p2CRavMIj1q4HSqcIWF8ucIDo1MqVyK7yZluqAZHbR5F93X2tpZwxhriXa46WxBH6MI7kscAGOqUB8%2BNogL2jMg%2ByKIOI85BMWIAggI1JCHG1tioTUHqWcDAljIToPFzQcOu%2B75ePW3lMKxYBtPkVCqqZRSjzihPk8eQcGE1CNkn0Aw4xU2CfQcpTR7Mi9I3vdoAYJyBppc84RyeeReCogBGcRbltlwLNy8kZq8ze2QTMLSdT8cCWtx5%2FfvPRjTKPvpt9yJE1qNIQ4QWAQ6RX3klfbz06WhwWt0oNPQ1p&X-Amz-Signature=f1c0f9eae4dc56edf4cbb33bad693d33e13f5374cc1b19c45eb6f42890ae986a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
