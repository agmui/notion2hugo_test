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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=8a3a1976cdd2cfa11ad455dd636a4c06f4a8ae11e0053500000d4cfea04c7ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=b2b468766ee012e47e6e3091d332c96ef0b7228f15f097fd46e8e7b917f4728b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=164262dc7044d036a5fd1aaee27d31566ebd5fa2b14c77b0cc83de45fc17e212&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=5061c483abaf38f7662d6f432c4e81e1f0dd6eea1e6ab37238f145a4ea785f70&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=8b8f116cfc51c4136a1fd3cb7b5dff73115967b8577083cd906e16edad352c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=8fac08f50bdcbe8bb6243faafe3480fd598bec67db5fd4a85239e66089576cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNNVJYX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIG%2Bpywj3sCNPzNtQrlJlM5w250tx1CDKpBXxRozQB3HPAiEA7Fkmov5wwIz3BuokhpcOIH%2FyAH99ffTZadyecdfb3xIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHxxw5aAfP1vokuACrcAymtEbZcdr%2B1AtLBQarHRfoSL7QnclhyN85d8arD4SnU3pY%2FTa3syLhjd8XEg08a9cgB0uHIPEtiTqQGkKbGHSzNkaoQSl1gxxirR8rqMIc2l2uhxsj1LKOJwveayQoXYuhxKcll29gK9PlGdny%2FCTFwvVSQoA9YhtcL%2BsFfs0RADBfq62hsLZLskChPmgjnqA3nKoCdUsvuHw4wZ6xaFjBsQaYeOI1tSGHq0zDfG0%2FobyNcgi1nJHLIyBEx4tW7cYuyQ5kLZbY5%2F1fMKewS5xI%2F6r%2BW9Mcr8TROZ0AB2mDUMf2V%2FemUTifROGBQqMHmLZTbvzQSvUfgJk9JelRtYAfABbYN7xNVuCsrtwOipACjeLdhyhg3wW3B9cl7Q12Vw4a8KXLMbPxKu8458PQg4wS6nOs2ybtH0ZO9fmEfQAE9OZ5yeGc54bvI4CuEAT%2FmF3oaX3Qj4dtpczDxSry4WmQX5S%2FrOt3R82w9yVkThUR091QUJX%2BR1nrGvxK7guOnrrR70MCJPI3xrfZ7qPBdaqEckcsGDynSIsZ0RLZs3DQfiewwB%2FbQrkX6hKvNCFjQD90cHr%2FdjVodhSu%2F7WcN%2F1jPTL9GfojJ%2BaMF2HNjGi%2FP2fwSzEm8vB2yU9JYMMfLvL4GOqUBQxAyU3thD4m%2B4dX9RZPtIvo4AWjd0lB5%2BnCbjZCXQdybPJzlcOYBx9vu4ehjump9KNyeVG28AWTw16WOQXnPjHVYU3dPK9eS%2FWLoiD2zXeZSjlTTFQMpKXWgFwlwgKqDkEO6JNtZajQj4nGn7H51lR3osOwZ1MkxcqwBxYLVh%2FdFShws%2Fs%2B5zlA5cMcaUm4MPYWzaYvKCM17rkxUStRO9b5hFqY3&X-Amz-Signature=4546dea19b55db4650732591260e5c09ff458b723a7780c59a5f06bdaf95d4e8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
