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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=bd14abbe89462402d1900be66ad6e5425d02065597708ab5a6339d836bb3716d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=9249d4e7cfa78c5a5dd7705b4ec1b73ce404fac770a526c1249c9e1cb4f55276&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=658b24b2539495dcc31201a55c93cf4c26d3c81742b5f3189e9965b16ad21a95&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=c7ae6fe48e8d4f93fd534dd0b6c8e7702a44742b0e6084994c425f0aa80310b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=286ce4665da8b81880f5789427d9f39b37fd29bbaf738c4583609e19d16a7e56&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=b68fa336de7c5409fd238e782abdfc28b5e217798cc817859b47861322be223a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIDOQJBY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEvAPcBtbXhfmmFoO2nHgh%2FCUxy2%2Fs%2F%2BAsNUEbjlwkbQAiEAwY5qwKmCJNi%2Bpqk2BuFJOo5MtKzj5RWDch9IdCIxkGsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEpFCkTLVnKpkE7yDCrcA7KPwC9%2FnzaiBV9HeRY0kQGJO5UJviLfnApPfdYB27YtUywID024AOZ1vnjU4frL2NBMocOz%2F%2F3vzabH6uZ25oIRDAM2nvTiLTHIz20vd%2FUDKQ4BjTK0T6B7M00rR7WpiDAmAyZ1g4XSozbjqJtVtjtVYdN2Ix4hJIviAhtE%2Bozu1X5ZVzrTILN9aGdctY%2FghTxQJCttfKyyoKZf6z5LDvfEL1opxlrNiUJ90asqIPOz9F3C%2F2gUDKXsIxSvUTSOckIl7i%2BZ4jAo5Pq7UeR3NaW6mn4bdcU%2FylKPWzkPfUAikQb6nMX%2BUO%2FV5LrAPxBmdT%2FihGmeGaZLQKhFz8H8pqghxJRe%2FjkZJ5%2B876MPFNlLH9eRHOoJ6rR%2BNEh9qAQHbNy5Oy0eJZIq9M4kZFSi0frEhMzf%2BA%2Bg%2B9dj4qpOevodDru0sVB9Dv6Si9u9xecYfEkhgeHni1pGl53YhA4ZF8XlKwl4M8UOhmFj%2BMm0ml3oCbzjjiMOeJ%2FemCIC2REW7WS2GuxaWN0G6xO4GshGfUfe3Y%2B3cusxEKEF7fOE3OHIAppKbF0sz9tjtpOvZ98BmXL0B1jsmVTqyYBHxbL%2FQ%2FnmgrTp3m%2Fwi26c%2FEAXf%2Fn8EYaLEI2bBFnYNtMNMN6J%2FL0GOqUBf%2F0nFB8KcbZzKBlN23U8ONODkMzyzgOzWOBRn0aXiv8NbUV06PdgBAKmw5uTwokKY2U6owLWyS1R7qkTAQ9AAanQ%2FjBR8PeR05fEpDMq86d9Z6Bf%2F91GDMWchUnkbF3zfrEh4A%2FF7MqZjcNNgjpbTKeJyFyQR3%2B3nPyLHucfUabaR8ZYgVzEeZnIGD65hu8mVrM2wfBv8%2F9HmsmDzFiJu%2B70ExBp&X-Amz-Signature=8c1b9eaa76abc9102c0121a54296d8eb6372630a7dec4412bb6a3487c085a4ef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
