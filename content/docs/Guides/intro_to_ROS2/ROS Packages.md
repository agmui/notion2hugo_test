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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=a9568caeeece06e08c834215e4923112664a5488cb0ce2149076819baffd3e63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=700f58bcf1833d9b14cb77e373270eb91132f174ccf4d864078d5c4ca59fa6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=fded001a3c2fb02dae16a29d641a080889fa052bce5af2adaccb31df28de6731&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=1de726ea8134b4270d91ffe886dff3d2938053552d643d55927c3ebc628a1dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=840cb638e485391471b641613293bc95c36f96b537426d625322712d720bf145&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=7ddd62ddbf7e549bf994e7dd2cd261cb2f51b8761504650f6b2cdce41fba598a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLZAU7V%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIHn4Iid2tOMlK%2BnKhYr8HquRaArlEc2FZJTtwr8lLZKVAiEAqCms51QOH0v4bxFRZFgqby9q%2BRY4MUT9JgbPeimR0CYqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqqMv7ya6099kuSKSrcA1aGnU7f1m6CmnfFKXdnb99vnIPOMWX1RWtMg14kV3hIfE5IkkGAVrWiC3rJcYtQq6EAgJt4aq8%2BC3NJSoPuYJy8G0xxkj%2FOgMOSzbBJaVfLiAChu5Z2Kth1g%2BimFfJAGqoQfcJnDDhPlCewEs9PccE7Omtagjev1cfPQ6RExl4wrRBIBq8pnj7HzznEapN3t08xbCx70TbBeBLiS7I2sPFCHRDfdIE3qYnmchYeXqlmIPYOOyQcrvjyE3HYY2oO3PNlFcBd29uomHN63eQZy0HMleTRUoBoXQg28t70nEUYu21BIOWUnwHVFmhTu%2BGd9neDXcBdn59IK2BKDNkgg0548WQaJzRv3XfhstJ4iU0HFvjN%2BOnmYEbu5vkxLGlxOT4mOy4xWk5vLAqjvNDiDcoInmfVvrJxcjOnKq8hY3e1Q5PQ4a7a4kerpq7D0jlAcYy%2BUHDgC0kfpj%2F5tOKqIM75SeYHLjwN4zYaE5HUA34mPR8rj%2BtUzoTIv0YesAhgFL7EqgsLH6PTqy2C%2B52Q6%2FVKiU%2BUaXD%2FKnjzklgoMNt5KI0tP8ITPXxfiONr5eKJT2BpIHemUmnGlHHZP0UxYj2uhtQ9lsVg8dVqbFeM3wLF9k2vQKOV%2F5wTV6MSMNe9iMEGOqUB61BOPI%2Bgnn7B7D84wvNdhziMiwy%2F2LlLstBiK3gBuYAet9IlW69ZA7GdjrpuDwaOLkcKdmGqqyJK1ZHkGTY7KDO5N6dxEZTq%2Bt71z6ZUD45dSj2zsFycYEY3vCr%2FzFofXHUrE8KBOCyjH9JZfBPHH26TXrwCpKQgqzWas8D7QENL7O7W6JGB33c%2FayWIFb8t%2BPTrU5KnMG9VyUNFBmYAW%2Bnpx0hE&X-Amz-Signature=82f1bfab4e20157125932f97edb5e7eee080ef5fa8df3d3c50ff917520dc06f3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
