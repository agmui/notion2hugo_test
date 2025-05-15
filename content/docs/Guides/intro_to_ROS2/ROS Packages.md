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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=cd4261967305540ae3327ba3dedc2057a99794e11d869aca90edbdff54259b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=04dacf043757812e53fcd7ed90608b4340b30428657a5f0ba5c707322af34ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=7a86cdf1af5a9805417e1b8916fc493e7e84c635656126f1d230fc55b78b7b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=55c88dc5c2435a77c0e0025563c37f4c34bbff7839a4728df731eb1f40c47ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=bc340201e2c16a7eb038f510ec3e3f0945360e9d5ef97294f11e9f25ea8dce19&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=cf781ce2507e291d3eb6e8d34dac08c8bebcdf05bc385549b10ece8765ac43b4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4OSZHY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDPsdr0C%2FitX4oIV4Rxl5EhE3979OUTTEKPuCMGw%2F15GAiEA1JbSS6pGP761%2FtmV0wZQpvl0MF4pFlqELemyNdRV4UYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDODwA7NiS16MWqBR2yrcA0eZKbRFTmuDpd4jvCMk2LhWPUC%2FrOuy7OIHzAo%2FgDVSX0TD9dTtJkpa4o03D5ivI8XuXb3L7mewNTIxgWpN3kuFy0BFdjmRs6lCU72pYQjM0AeU43jq%2F7pZOrHhgJsHFyKJWNaAuQWThC07UL7NsCOkNtPIv15xcYvJPBiGFOpukoN7KtTns62vzRbVizr97NLD1KA5haivj6gwgdbwXTlNuwjQDsSbJedr7o99OIQwC01XFGLoe%2FjVUCaCNlb5uemGXubEGwlBB%2FQe9FFu2PT6ywCDGMiASq0kZrh%2B9BpDT0f8NMPKz2%2BNTUFa8nt0DV0wjCU57sdR8pTsRUMiq9%2F8vGre76S0h0LT%2B%2BIALRCin8Tr8YoT7ZuPu46bPEB5j4M%2Bw61iGdNe92%2BI4tNkRFwKnBlcUyAdXRvqyBU23mZM9skFgsGJJjSXW9fHew1xd0PEnf7%2BFfd2JN5XQEPf5kZdmYsCsxwzs2ScvaDj07uqXG4ZzcKBfQ3TKV93jNYXG2mT4b1GNc4pfbzMXTv8AAGHYQIrcrqkU9UZClB17PzreF4TbVt4V7Ay0eksvzbXI60P0DLtgAdvJ5GZAcK1G%2Fs%2FGob68I8dzCnaqdDDNyyrT6KEs%2Fco5Jwfe2n7MJ7JmcEGOqUB%2BPjBHK3az2oJSdd3d21XDSTby7wdQyC91z7BXfM6pD72CS6vR6P6ctp7GUjJmxTZvzUXhfZFqdSjS2lWYEY5HsrOPvIhHoUW6NEagUWa6UC3s24ajs6roKa0LhIH87aH%2B9QLKqUAMvheFqQS15TIwsEYSPTauz2lEVjP4lWwNLDJAK%2F7pq4%2FyP0x65VOp%2F5VXN3u368hlRjXwfOFS8RxpO78Gq10&X-Amz-Signature=0592a0c1db9985e0022800de7523e86e4fd23a3ccb5735b9633313484d199916&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
