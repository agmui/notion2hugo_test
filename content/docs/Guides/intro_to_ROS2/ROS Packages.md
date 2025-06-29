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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=499161951831e1331aeac654cb35ae9d98d16ec12db63ab3d8095065e92f5ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=ba4b39420b799ab733fa34d3c032eedd6873a5df5918b1ba73fb424b0911703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=d1e28baecd0a3e3726129e1680a4b1ad10be4b9758f7ddf5f96a23e05eecce20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=f639bc97f92d4d2376e3b066a2e7f554ec94c9df1ca060a7a76d5f21459fa1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=4231b4e855d80671c57c6cacaed9ad6098ca314e19e33bc2c599839c52a5fe4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=25c0143277b4b2cd4ed81fb72e818f2c20f8249b8c99e8078b3674bb27278fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=19aaa6f033ff0da35e6099fe8917e1fd81d571b82c143e2bdc51bbded6e1d002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
