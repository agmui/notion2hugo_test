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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=fe97d408911ef5fe716c94b227fe3be9ab1b7cf524a001c43333d91195dfc972&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=7604a18b8bebefa1800e17773749edd43d3dfb08b0f55c4fd427236855104fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=78d5981e671f8a7ed7e48d6c03de282076ef2c7eff81ead87ede949daa33600c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=d3c470d234762379e1d783b40b57d26a2f58f3daab49c15b2b6b01fba381970d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=3c94c0d7558c38be3e4fc26cc2357a5f2e6d534c98e57436987834e714281b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=2e78790ea75ff8af4168c5c5f62bfbad99612e3bf1f724e1374d0beb0705279e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAIR3ZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC6iUzsmYozpX4gEU%2BjuhcdfkmPHeyB4nqASDIzFdaLvAIgWZGjOfluQBArWNlrPo5oe1T5MnAfsl%2BTs1Mn8%2BE3nmoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FfNTp26DA%2FYs0nDSrcA020BIa4U4Iu6kNv3%2Fzccu%2BeY58aUKmlG1v4ivYfLRIv8xsS1Bu4OQiJ9dEO%2Bzv0Eke43tMQyfSTSSMg8FQsB%2F%2BgVcSbP9iBPdSH15HED4iC5Fz97f0BYJGjQc8AL7PERpH6XejZL9vcmHa%2Fvc60M0HZN%2Bax2NbiA2Jg6EUhJ5uEDMYrES5jaDRh654bdo7g4KDGAM3j9y9SclyvrS6wygh5i3r5w%2BgElYB75YnxvSEXgknOBrj0xuS%2FEDRgi04RfnSqCXkcdcDehS%2B3zwkcNWcWw1r0xm5Md5JDlK9Gh00frTqhT4xtsNhv1E1%2BklzDhT%2B35BdY9tRoKDu6nyTsLHJw1zXfcz%2FeskxAIqQXViSUB0USRtyqBaAVLvScwWp4zh%2FL5z7qVK1353Nbt2HdwK2Rp8HEiNyLopNKySUIh%2F%2FTGIZWelJKBHVSRRw6xg0XgcAigTx6u6pZIOLRXj9be1hEoNixCtLFr1ISQ9id6oa8yOqPOj66Dyg3EQbz65v7IHno6rns6MLtPOfjY1gRzNjNoZeQnJQ4sfHdK5VoHGJGGxXtkFt9Ro%2BlY9DdwC1lpalxUBb0JuDd8V94CW5IfB84a7xRyvO0mI%2BdrtqyE2CgFq2HS86PzW4oN2ggMJzJk8AGOqUBoi7gAIg72d6zzdhT7VY4%2Fh5MkE2hccflVm4vw4MeMgcfYannI1k3P6DvGLlYn%2BvXKKtAaQjV4YeZ2zrT2DNtVJq98EDZlzgUhyHZkFVeaKZKlMX5eDitnQya4D9ITUncywFn3PzY6LZ7T14HfkrkXHZRUmFRn474%2BJekUgeAPu6jV6phyF54lJtDb8u9j3XbMMmt7C4RmdK00neD7P16LVWObW7T&X-Amz-Signature=7591e2f0b38f360ffdbe28893baa5f3747b8ec64fab8f220a3d84e6487c30d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
