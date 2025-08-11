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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=ced7fda286d6bc59725a634e4965917246ed1d460f435bd4f0cd4699aa782777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=97a65bdb6698e6921215c64af6f7a6cb448ec4d171a883a25b9a54a48ee99292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=5940e7c4f5f9f6ac91a533bb730957f5cf729b4da842ffd23e27144e1b1514ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=b15214d26d96ef9d16f74c98c819abea84f6ce609bfee9d2fca54a92954dfc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=16a039ec49338009843833288cea6ff203614cea3054dc16f1dbc97fb82ba2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=cb6389aa8f7d2940555a1c77df4771d84ee5d1defe915dc335154442882a67da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHOFSKU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDzo3zBj8RXLTGGSPfzUuN2J0EOao7E40FsSZkdciQQQIgH2e7Cfl3YXJvJYsrkl9CC713Op6uiFbqhnVNGBHnHlEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnGF1l4dbXp3TSE5CrcA%2BASqM54GPKc4NblIGiwlFaf2f5cCKWpZgF7w2Bnp6pDkNMWsPP4w8rKQO7XWMt8ISFsunHbojBT69CIclUHh5%2FjREYLxVxtbRLwfTFJOxLA20%2BvGm8Oq8boLOSG4nV94ZOvijCwvkIcO7nqw8xW39cRorcDhWAgkJUZ9KFk6AexO5wKD8MOBuShI75B4u0Nl6nb%2BGq59%2FOkuPexu1lvd%2BNT84MGFFWiKGecnTEyak%2FqPg1WkwbfOE23z7aXq9xgNUjMbP%2FN6BKYAMtiXov%2BuusOHJNG%2B0YrKurzoMT9tR5jLd%2BjaY%2Fq9R6y4r3m4k0ABtnE1Q2WUQhiIwI3%2Bk%2F833JqLrgoRr1eVQ1d1sxYkj8B4XXQdUv77g31f1DDuJjtR8nyrs8ZKeUXsTuoCzNLNVZw55y3GUj%2Bqx7p2k0Xr32WbXZhGjbLMH0fieoiqnYy0hzSvg7m1ECCaRWEC44QcwLsCD7y30ZAy32%2Byw2Kes2hLzjfb3%2BHeQ7OqTVRwnCyzTEuajZdW89LNXrZMVRBuiffuZ9yBLB6eoa5MfjjqJFyNd5%2BY4F2HAWdDzSiMHeFb7r4KD%2FMkqUaTuyeDQb9K80VZEtzAj4O%2B9VidpLm5sGEkuRNmr7qMJNMLOu4MLKe5cQGOqUB91Jym7x0CNz5%2FqPYgpx6sAtl4rMwdNz2lsI2jwxoOeWIy7Mkg9nuXJBq3uPrr4LJAZQA7HxqKdWQ2pwHGqrXyX8jNbOTciFUzeBlMDgFEaw0Uo0c3SYEPN3p0YUVIlH98G0GORh%2BcnGj6PE1Sz5OHzbGguovN%2F%2FiGSm8x0FidkMfVUSjrV0pSCmBVhnZWg1Noyfs0Tzeoitx2Ns%2BX5uazpbjwZUV&X-Amz-Signature=bfe34d0d1aa6b9db4c7872e69f4f57da12d21fc643cb79aca0d18fa9376f5c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
