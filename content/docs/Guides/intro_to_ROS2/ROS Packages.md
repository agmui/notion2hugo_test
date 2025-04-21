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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=074357a4443ab5394000813ca5f1ac5b0a61c7c2d086a0e9f9e9695241747a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=3d44ba745e2a60a653c0f233043e02aedab19628c02bb169a536860bb02ef5af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=b740cd313d06a2ecc02598c76bbabfa40f2531b2699b21078b7f1533cbeb1b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=75b2b89a07246a9fb29485d3ea3b89b26bddf822d4726a9697d1ee4c0ffaf52d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=457ea8a7cc0d08a8d4de9b098ee4a90465934f999547c43fe41e7a8283ec5904&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=6f951dd735dc49a18e219e24b77a2866271aa20534dd9fd7182619e4b035b6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3DZARY%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIH2FXI9HvMbYwUma5fap7qfmhsS0akoAAsMdUqY69phyAiBLKA0E2OSkajOedXFPBFbcJcI%2FcEKDkATO8U7nsB7MSSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWace1Ctx9jUvx6I4KtwDKQszh5r8VPOBlUHGlPke9UfZxt9zD5R07BpKJ4NX4cEZRh35K7r4AbEBnx79fgMoYfmwWseeHlL1ZG2r%2Fc%2FXcvULJRUR10UjJt2z%2BP%2BoAWejSU91Hw5yc1g%2Fr%2FHJE64pbIaE7ZLclbdBfTysj2f2br6wXRUtGOqI9CqPQVly9MqY1zHZnN52rGSUtXOoylBQ%2BxvMiFefFFHFFaPhkLVuZNHFA51qRLkmHngzu4oyLYgufq3an7%2FTV4833rsNFX0xScgxEEWLtZvcMlPJd0Xf8yDzbfwVQIBN9N7I3%2FTdr2VjIP%2FOknajOlWqvD2gmMC7T7%2FQoaRH7iGqjGFtQFxUZmfr7sFVuSA3NugjS2nCAESG%2BUKAHrZFPhdrZ0rsvqOph3ZtTFf%2BDJxA40W1gu0AX5%2F8fhSt3M73MrielPsIuP3cBjj0IaOxmry%2FRnWPnQwKvYSlfstNixqIK2hDy65G6vQ1RY0XY0bBBVRjVsCm5FRATLw%2B%2B3AniyQCudrOafAvoK14DNEhcsV13DmeWQfzp5mzun0yr4NmWCI7jVU1OXmB25%2Fb3wQADoW6QczizIMuRIWtW%2F9bPL6S56Y7Zlk%2BikMQxt48UiOcZd1lejD3zQgrx5Wmdu5%2FrdcCFVgwr9iXwAY6pgHmwVkbSBooHqpD0DFPbWJ%2FVQy8VbZUPLMhosRLZTl7EKbh%2BMnaV4v4ZyK1buvUEXWt7R4Zd9Jqr8%2FURJC9BnFnVmEEm6cqiqTPOWnOtzMeaFW1z9fZtAQP30wF%2FXB8QoY3i6X%2Bh5a4IxW9w99F7zsUjfLI4g7jgNH%2BnAFRZC3AZCmnSsAgqsOEnAftzl5EFoMjGHgNrEWk3kwCuq%2B31UGyljfZZKpU&X-Amz-Signature=2a45e3753f3540ac3ce3b4926a5bb22f28629743b56e49909d0b6cd624f46601&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
