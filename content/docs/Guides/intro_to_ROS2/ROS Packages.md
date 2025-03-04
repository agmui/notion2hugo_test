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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=40e7ae8419963dff00c9766bddb733bbc700b98d23e00d5de72eb4e692eaf756&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=8ba59dc50ba340a29e2c1dac519156e7c874b5de8b1757ddc152b12aa8b338be&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=559bc43e9419d29dbc42b722aacf30ae4df99474dfe79698a626eb9a47c98ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=198f5e60dac795938b310bdc6986de1ee3d95e6046214e9864374d8e3f032d87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=3c2962b0e7c4b6356e324acfb6e45eba3eb5efffa96d1101fa6ea2ceadd9fd84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=5950214b4904557172b2f56d5cae6e204559414146c1a6cbc0444c9f689c1189&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R36J5ZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELfXwcJnLlCB8%2FSHGS4h57jIxfkBAkMACegcacKx6G4AiB%2FQId8c3WQzzPzK0bS5nssMdkR5%2Fq6LQcNZY1KSz2ELSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IoSx6zEadrFVrfCKtwDkrconixv9bJpLqEzvhtoHIQRXiCU79WavDJOJcvhfz4hpa7B8Fr42NydwnNtP9OXBAs7clHqXLoWCbj8TsdmWPrljjWSuNz7CvlT%2FImo7xG4slO2hOkOCaUM0bjN2%2BYryi0ZzhidQIIc3XRbljdPLzjHLcDLyizfPQQ60Cq%2BbJHXqYc8X7Gvvs3aoeyWpU1tEWB8w8yvlwo3pMe1HUjo8hPIhpTcndiip1ImqAT64Ocf%2BsGoG6Qcl7r8pnxAD5QJQLjJz%2FnC52SXs0fZK0g191QY9ssRyidh%2BokA9rYNaxwvakzQG4RzW4r1cu5ztB0x6jGClSr%2Fdl6V4Hq3Omr2NdC8tU%2BelHCHZ1Y%2FtEzM2bquWk%2BJNbXwXrwQTf15v9wtnREmLbFgcXGuUqePrnmokSGMcVTPdjpHqywJ8%2Fkh5Wy8bx7c48vSue28dhzMv6neGYV0wpLUqKAF1FqbP9GNv%2FM7NGx6NevEGZbd2VLmesAErmPh6kEWLGRG87MamGRwfvUff9ZYT94W8sTsuQ5W%2Fm1iDjkZrY6Mkzz07M7k0hXsJYmreg%2FSB69W%2FfMmIOVW%2BAmMTnlXnwBuLGYRi01Y80%2F12XCHzgPOFIF9wiZ89pr5a%2B7l4X%2BM2o14fMgw1K%2BcvgY6pgHhtG%2BaT7ghLpoKLe4fClED81IWqeV5ggLIL4u5cLuWBcKNz4KynXqtoyapMmBbtUX2zlhjkZEhApjbUe2nSZ%2BYsK%2F2hucGHae%2BPWuqBOyxiFHnwbpNTVY5vbJ%2FQQhWXhQID4sDmb9ZQ5Y%2BaQms3tSu4BX0R1AH7%2Ffd00osDH6Lm3liSBiACKm2SiZOqmHdkezlw9qb3UkpYPss8EnSkp9hXCws3EA5&X-Amz-Signature=93216a95ec355e3028ff5bbe599ef6d6c4f2b3988d3cbfca161e71d3f574a723&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
