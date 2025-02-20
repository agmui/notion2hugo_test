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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=a993759b3c0de3725a3afb0a1fb8eac8655b2cc9008943005856e1cae041bada&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=0c44583f6f53c5ce8029bfcd0e0b633fa474a82709bafc1d1247d91f8484e756&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=d088f9bf9a92189188bc8a67ce879a9b934937b4065e7206b55586014602ae8b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=ac25d0d613df5caf13260f61851ccc14ef127592175f249a6f1158bb2ec6039a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=b3b081075b51985b2bb339900f521ba12fbc503ef0d2d6755f4d38428b3d176c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=acba168ea16a00542e8dcbf997ffe0ad8a6acbe0bfd97cbeed03c86dc1515be1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PLPFO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4eNqhRj76AU2C4RquLm90pG8Ce470JeD%2FQYXOSd%2F0gIgO0NyzjXYENMf2jWgaPnpHKArpBSwh2y8Jmumoin6SS8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTMOw%2FWdSTdgN%2BT%2BCrcA7P5u1Mp1C56BG%2FT5QYPOLOJs9SArY%2FWBRpTDcPpvgajUHSk12SgJHvErL7wY34n6wU9tO%2Bcq13FgGkORQ1G2Mu3vZSZotR33c2CdTRu1JfzXsyaxu92iRCnCv4uWrX%2FxyD35Alu9tK9Yqk6aubHTVQmcUkpajXpt40aCxEnjAHjx3iwuVlUIUi2FGvFIiFjzhXSqj0OxYC4D%2BHpx4KZJcURjOcYpssF1KXdJEpzd0Se2SjwpUekw2wjmULPKd1iLDgcVxOb%2Bp6fT7G%2FnMMXTtldtPCNOQcBI1JHZE6Kc0akKzEW0scQ14iLE4Yu8zg0pQWdJvUikkKfZVv0ISBRHj7auQRQTl9B1Wx%2BlPAHWKf%2BA6XlhTzA3KM2%2B46bLNh1lE9Qcn5PZ7tU9isH1xs4%2FYR4Lo4aoZ0FvgJX90MvbOp9vqjsnEllBvdNPfUlcMtGk6Z0LwEL2FWlxfAKN8ykylV9rWe5jQ0jp45QAMqaLY01DqQ4JjrAi%2Bgre41TWhyvpMBHXce%2F7WaQ%2Fum1qbyquLoakfOIofgAz8GpW%2FN%2FbRt0wCs85evA%2FOIEF%2BAWg2Uw1PtfkrfSvlj797B%2FmMIIFAyNgaAj3ZLHUI952WRVI%2Bh0sQfTEyqj7UiqITbTMMX43L0GOqUBNqU5iAO%2F5vYTPq%2B8HNXICwsUn12NaG4KtFZHGV0KnRFkPyh9FUBWA7h%2BGtC944THYaYatXisBkT58XUGeTNlopamzU0fYFZqgxI9zXHVWqvsqZPRYUZoggh1uhpQxc2J4d3gANPYg8zVFzxQu1vhCTQ424%2F7G5AC8lc%2FrSmsdJouyNFYLOtMaJ3IQnZG%2FymT81WL1n2tJqs%2FaO89GRlMBur8XYTQ&X-Amz-Signature=465665fe954de00fbe15596941ab2e64750b00e534f61fc55af5138725b3c50e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
