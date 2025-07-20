---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=c1f10c28e59bb65fdde1cf25b241d4f86d0ddc889b84bb368fa7ea710acefb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=2cb72e57064d3358a81e8d8c18646fc110d59c7e1039492805087311bb3bb249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=b265b7c48cdad8a6b7a28cf2342c779f392c69f867f849a3f34a9421e0ca8cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=dd5e9d2f3a47caccf5ed115f71b53a6af5492d7f52d11166df9b0d6a95446aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=4f4340bf1c7ca42c787385695043c948c088edc3e1d52003b2ef99ee426af8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=0afb6cac84821c4fde747be253a38c276988adafce4f75e4c7ac9ff4f71016c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVPWCTH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTkFS4tFOGbuVSs1uh3Hjn3kxILdhqDVhoaKgZ28xJAIgODSawjxbmkw2tdxl29v8Q%2BU0YHq26QxS4jG%2FlmV9Gl4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH87%2FvG8uqLIFZWAlCrcAwFP%2Fw9rrmyXTD%2FS%2F6WXdIPDO9PZ0c6KaFAmChwMw7pNhjDVrCu%2FBm6qL9ZDXa0%2FHBeGCSmirA28mzGSq0emKHvjfMsc9CTiO55g5zYFx7df8%2FpqXVcHsrRsK3Tgqm9L8fled9ARX2homw8FxEISJllsjYbCHPCArH6PnmALGXVu%2BdEkwkFxc78QYnU%2FsMDeqrRw%2Bnj3L25YV732WJ9LACJp6bWN23pR3mfYCA8Y62E90NHrK%2BaAvLZBso6Te20eilzLw7DVMM5Z%2BiB2REYDHQxsZr%2BT%2FIH67QqTv3q947vb8ig0WT3sBIAGW88J1y24k0mrn191ld9czeBWeL2dHslqlEovRZRq%2FA20Xua82itqkGQ1C1211JTjRnh0PTA5Kl3drfzRIjwDoOOIsrio7nz65aCJ5MdFvY0HmCjGEEWjtrAgpuOp0qLddprz7haHwNAx1%2Bx9X0WFpSohCAOr6ZpQANXtaq5diJNstwyzQXYwBkdqZ9%2B2b%2BcIzKPlBt6X7AOdHTR4s1jg4mixSGe3c1OIqw0N%2FPxuY%2FUY9ub6Q555CVGYcxm1NCPNILHJwHhrtJvSLFw6jKS9gdPealQdhlhngzN9SKeP5VJNRWjs5rFC5Hgs35OqWO0OTTJkMJKX8cMGOqUBMyE0TSGUpuaCFp1MDviqZhOIFNNtStEC7YBltOP6Rd0FgEnYK04bPBeL71Ih0epe2XUcPQSoIDaR%2F%2FjIf2rNq4KbE0OmdK6lSbdV%2F4%2FPPOsxQvRzxcsOu9bHSzQfSzbhn0dW7XAanjWuo%2BDIlUwtQCcpPjHFI%2FMdjj634wC67bJpq1OZ%2F%2F2jL6cRQx%2F0R4QbHSt4bE%2BYXQ9NTFhCcv0H%2FEX6yh%2BB&X-Amz-Signature=a98c9a8b95ae8709c466c35d84d94eb58868ed4d05f08f7a54abc29f87803b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
