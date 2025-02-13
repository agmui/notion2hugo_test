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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=3884ea25aed33d061188b1f40703be36e7aeae7c97fbe82624667e0143d4a6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=8b7ddedd4270ba596f869eb88e19dab42cf53dd87ae8eb79da184e808c9d43f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=2d5a2e38f1275b31605d762c6aed73d12980126429abca7450287b309e5d30a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=8e0029cd1971dd06dc9c8f34dcb3a5bac67fed5a290a586d03d2bad137dfe292&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=79b646f72eb371b77ec3581cf01948fe74b83e5e2ddfdabef1a382dfdf038d18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=77a62841238328c0d6b09fc0d9b89dc6e74bc439f23be22aebfccf721b7691f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2VFHO3Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvQFpXXyZ8fUUxtmytwr2OCNYmK7%2FCFW70HkuAGBxt2QIgLNdCWCfXO6nVqm6fMYB1MsCrPCqs938FRuQQSi9tiAEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAFDtPyemctYailCYSrcA7nS7L2HMb6EHTjhdJPzthievelQugKqKZQtNcYpBbV9ft5A%2BI9341CPGpQBNlv46RizuTXYIShbidm5tkazl2fsCFjg0cqqvnqRyTwrPHmHsTccOFKxhRw3GBGQ6IxWtbq9K4UxiUnqxkFdyS1aL2P8ud5Nn5H0iag1B1stpcUGQfY4WW1tJxSh7fsHPoDK4ugto0%2Fk4CfIsqVTvqwpaQgLQRNs6EMtdD6IsG7u8IqFF7%2FG5XhEYjQfr4kCs4uVyldpt4PtGu%2FWENR0CyPhg%2B1yadGUlmTpflre%2FJyxF5px2eN%2FobuB7cfMTbIXkfFDy0jrVu36NQLu2KIl%2BDhMauRBwWm%2BU78O3%2F%2FQPR%2BrXGx1ehneE6WWH7pWqqvrCeHGvZJApzupX3RMbgE%2Fqler7XQAJr4IzhjBuYehwzBT6rpqJvp7vY0ja12ggMoTip%2BSyWgKs83s%2BcqZq%2F1zqTNJHBAk0obMETvZ8Wbk84odjWS9GwAZMjRKLZEb1uSgjeeWf8LMrI%2F%2Fp7OnC1i8NuMDWnK5rdMUeYnig6DRmnZ9y8ZcgH%2B2B%2Fnxj%2Bnz0abPEY11obC7i3WsGKUXuIA536XYrgRsOaM2X1Jok9sFYUxoRdYKFhU8afjd5eVWhielMNqqtr0GOqUBFGFKMmVnszaaziuqh4jhCDiG8L7qPIiD%2F20zTFN9XvVKTjqV86pj0Ddf97hFJlDTWyZPYf4oft7eVz5aDdQeD%2B1IFArc4v7I4xR4q5trMlmHJLe8%2FHoWwaZpwgwCBTVmlD4xClpjvuCE1OgPdFFn8tsAl5oCzX50GiKGCYc20wtGyxTjhrp0axcGKFqCTeFnEG5AIo9LmXF0FAhartz7NOkNY1u3&X-Amz-Signature=0b64159f8928f617005b1d8acf6d28071265ab9802f34f3b051a4c5091349079&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
