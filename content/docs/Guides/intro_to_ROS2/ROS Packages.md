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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=72bac6906f3e82f9c82864b5a92b846660e69ed9ab81dcfd40cddbf0a457f61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=86a3d8150e8a83608a888ed0fea7f3d7b7bca3b7b1404b65a62c51090de21884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=23d51e8679e2d5c57f8d630f34eb96e978329e16d7e7d02544c36f505145417e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=6fcbbbbe5c9e310b0e5af2d18e970c700cde3b30edb51e77f6ff8809f1a62287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=484f8c6f568ae75bc9f2c2b91b46a4b0f1de734ebc2bc566eb6368d753a7a57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=913365f202c9a79146d843de34d776acafdade93cc7beab7f67a1ecfc9188d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMOO3VZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICbzHJzyc4b%2FzSnUA2WJmxc3kRq8Kcj2lTXdcW6hdT1fAiEAxvYCOmO7mBf%2BzK1E1DqEfZ6WErfTSqGRjrUcdtP4%2BxQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCVzgNQFo9dMyC1RhircA71C6DOHybQWdyXDYlERAyhBz6E%2BVfXGbGF3%2BFeL3kEA9gFJjx8oFygTFsA9MnnVjs%2F7BI8uJoA3nC2DmEs65XJvGoy33dnFZpGkR8L4PddPBNH9054PBkfPB02cU1jEdJ1smcqbAy0AzBRweLteNUG3yvDx9PFDqNV5oJ7TXqXZa6p8upbzKvmAJX6Q7lQJMrg1R7UNj4D5nGAfLxrIqhHA4odGo0IOsaB0ew7xNnHyLevTvS5m9tqF%2BFwQIiQ9WTS0h4Pti9V5NUT73OGAovNO3ZB4M%2FQm9kbGE8BVKGP%2FTjVqnT0feFCw442mx2lZuMCHddN3S5sJ%2Bb%2BBWB9RHpnYH6C1j4ae8rT5NZxD%2FDRIcOpVVs6yhLFj3rQXo1Miom72vCewae4Yf9mXOL3tyDysPPHMot9L8H8H%2F7znXp8cx40A0F%2FMzo%2BRciXDU9pUFcyEwiS5O3G5EFFd%2FNYsjBkFYWu2UJ4C9WlEMZFxSdBlTi0Mi6dUSxffiNARYCGes2eehLJzrrChbFToNprP6Rl%2FSc0UZi1cnlLwTahRR585QwKb%2BrfZZFwXqJipslvA%2F5%2BvGK8x0hC1Yf%2BIdHr839U1SFZsDGEohFMO2oMZPDBB2FGVcpZQDV9o4e65MM2sx8QGOqUBqi%2B7DF1SwwcnktYTai9fgMIVUjRlsV6ZjaMYH9Gme8hukcAUUUzn0eKtyg19t2wrUmtvUOAsU3P2X95hrQPPp7vhacXBqZiV3GnyzEENFWUm6qHpCVg0bbVU2r3P0UTBgHCXWCnbqTUW%2BbQsNwC2gJ63g9bIjUJBLtzJeV8VxgLsDI6haWRLyx9F4rWKgltqMVTNzUWCDSW8WADuJOP4XPIEfr9Z&X-Amz-Signature=d4079a58a6d4ee8199b26dfc46862aae8984c4d2557782f540cdacbf453f547d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
