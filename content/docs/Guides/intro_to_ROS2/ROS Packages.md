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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=01863c01d587ef8f15d71b2e0b3694a016b320b190a37d752a32d7cd26e718d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=57706672bbbe1bb0db7e5dcc7d2e1e15cf64cc28c12947c4e9be1d5834981314&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=00486e95dc9ccf20435fe581394b75909bad241183b893d99e4369044f26b47d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=bcc3ef5de6ac777cfc8bb81a7bb6af16de65778bf5b344190aabf37ee098a794&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=88505fe47bb8691500f2a3bf06a7f47b23b628e04a5ce4fa7d50c6f8a6d6a086&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=c6d5ce930132b0b7d47ec634e8a01c9d482b746d59768df0fe5853eb16e9cccd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCA6OVA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICGoVX4HRx%2B%2BAp2N7KbWmxjQQLWdj44S%2Fuo%2BXymRB5TLAiBrOBHj4ah1Acf4ZlcrPG5XmQ%2BnkO9jghLdd9ipnxAblCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmC480VrO8ij7aUmxKtwDh%2BCUFOTlPObJU8lx3Z2L3HRBhXO0MFuuYiSJVnJoliAk4bZ%2BXoXVFmGsEXO3F%2BQ4wdXf2Ri5eIzMrMv%2Bo2cTspCGOV9IGba8bRR6DEnjwMQaNRufzOMuEbqbuU3GLitCcRSw7RZaVCXFeQZ4nAshCqhET8%2FVshsp4lOONTnyj5KeW1y65KOhgE6DXmMnswBFBJB1DjfqFNg20FjC7R4TJ8CVIZ0agns2bCgR0lR8NaWDfYq%2FGiuum7nncW0rnpPCbq4m2V52xL1UmHl5LuNzTmCcblSvOi%2F0Z2%2FwJuTwhhMyvuVr5rEq0OTtmY2LGJX8bDl1IuA7qZcF0ei0EUxB2uasCRWRPzl2cqAFTbbgUqBS2BgfHItbSIPE8Qxl8%2FlfFBUTbFFYXVJ2yDf%2F0UfYMBtF2TFQsxjGIRw9WghQ09l1yb0YlqVjIkcRlqHVxYqEzxzvWRL3YzrgniXbGM8jFxlfwOhzaUK6GrryitpldSgBIyCaQJYOuHalnjwNp4xuooz6%2FxT2AwavXZ3HJbKi5%2FonVY802Le2V2ouGnkLQ5hM8Psivx%2Fe%2FQqpFGhpB6xgoW6y8HAkMJ7zpnnsNf4Yst4wqxhDVcfjHXqZXqOmCi4vBa2TheHbDFJxTjQwhe2RvQY6pgF%2FgAo8oYsJOaRp8mTxdak0h4LGCl%2BDY%2FUcTuONpDKknJtJhTo1LfR01GId8WTZp4u6b7k22UoTc6%2Flz%2BgmPOByF1QYwJGtwoXJ447FRpo3YIhf9v8w90DdKejn2AtNEKd6zqcqekw2Sw%2BEiW7ea4F7AR0BnlnkTWtJ7XjWW%2FcDE%2BORoqQS4eO36XIXKWvXWi46aVaPUIGUpsmhTAvDXbI0kbHKbDWr&X-Amz-Signature=d54a4701cc12267f8689fd9db287a503a0e134c18c04d0062e52bcbf45be7f72&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
