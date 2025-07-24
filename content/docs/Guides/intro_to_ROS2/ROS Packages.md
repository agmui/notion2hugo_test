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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=b14d6a8c70675e276f1b5aa2144c6daa3b4ad9c89bbba9076017259b164cda9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=5bdbd0aa59b5932d041a0be0a2f752a9b8429424380c72baf64d355acc7cfc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=06d3dcf6eb505240b01b2e8486f8e44d7ae6bf5dcdce3281f0168de67abf8a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=7aa119e0fd11a9f1e3080a79ee05dd2365ca0cc3282165509d7845fe27871007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=020ee1e9e00749ac7c4b8643a1364bb5b3688d46c585a52d99329dd55bba542f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=1be7c33b8ae3bba94b271a7483ade2df8a18aaeea035c156033eedf7b1c61a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPG54DAY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCHFj0gEdYVJbYNAcnuJ0EtyzFcVi3fHFW15xZBcxPNEQIhANWszS%2B%2B9ClsgCjdD%2B6Sxws47sDv4xeVKXUv3NH0ingEKv8DCDYQABoMNjM3NDIzMTgzODA1IgzF3a55tE9poQtbhZMq3AMmI2i1qLzFxiYBg%2Fd%2B1NR9w4hOw0ldIVD3VO76NdkoDalIZcIjtLZJMmgphx4%2FNqo6IHZax8FAZoL6m4TA2RRMgJke7%2FPPSy1M0C7wU9O9E5LMH5qmtP%2FY71ElOw5BiPbdiXGc%2Bhj%2BJl2TwkN3ib7tEMqvOMYVKoIwPJLW74DyM%2BNZ6zzFdvRr1w3ka5PSvMxG9Zoi03jXEYsle0zXhHUxsPWwo8xhSza6eoFdNankLvG48DSOYemeSSFNqCwFF%2F8dJh3gTBKsJdLQ7fRaDiNm%2Fg%2B4p%2B0p%2BzjdqMIDmsFTVYs%2BV3WPIlxhWT6%2FxSJNITA764ZHq0ahBWAHOcV8V5S%2BEGPdxrKr36qybCPCgq9oFdg3ft5yUOsSjSqa4ipLC1LzDS8FlmaVsXdbcyIXrIhCbAEakWOszeaJxIku0zeqI30sXsIYvHvjcdoPEZe%2Fi3X90gjZgD1io0C%2Fgz7mUlyM9o5ONGNA%2B3aTR1q5IuVEjtjcZC65pQ%2FRUlNFf12DSh5zvFyYFI421vZRLrr9SPUcbq4nHLMxSPG4EmiqwrItXYmsZ5WvpT3IHk0e3BXLInlrHczG6ITV7Vdwu703oiTIFwfG52C2j20PLUcRqhoeSpo9sUcT30AiUWozCTDotIrEBjqkAf5kRRa9amKPPxe%2B28hjrlKozGn47tgamvrAekYWMJGjxc3PiSZ8UQAByECYsyTA8lozk2GlMk%2FzT%2FDBR%2Bg09l5TBakWgpU91UOA%2FrT7Cz5NRgwv%2Fc95XLUyaZNGJ7mw2l9GSdTUSf4rg6n1kd5UizxAsW8ZaqQgJSK23wScnMYWydZHeJee5xgw3cvrfm%2BA1Ekb19G3uvjhAOA8%2BYP%2B0I0lXiez&X-Amz-Signature=c354fb6eb81732902b86142fdb6c7183805373afa3cf1423a29e88bf26884677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
