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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=e40cd001cc2cc9c87eae9df95e36014903569d742848c9800240c161b599bd56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=2a3b06639f3a6e88de57f990c34bbabc184937478d04003cac66eb5027fec5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=6371877c7550caf0d463784a493d6386f14e737a99cfeda59d97adfc771d9904&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=e6f0f20e6a8b5edab2607532a5f08d3ea6ec8ac22a547dc1e6fea70d68631ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=79a1ba0819e27f2c745a4ecdf0f9f2a6eb0326906937e4c8253fc02afb2f3d10&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=661b62844abd5d22c9e248311656bf4469434c53259f1d40e628aadf9da11cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BF4A73A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuVDsf%2BocaJz4ze3LLIXL%2FFnLtag2q%2By4igtbvDXkL%2FAiEAwZ0Qf1UR9F%2BvgSlQdxHXGXSYac%2BdTQCMCBNkZ4WDKsIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOC1ZNXkD443nC4c0CrcA2GTIQWOuodlERiFDgCOm74i4gECJQ9RXe3ayJ%2F50E4851Qm%2FI9ZR33mqTPdQ28Cmw3TsSWW0y1ePqFyqRevM78UKiVvQo7KlJdQZpVJyuBfw9wIXx5r7G8rjU5CyGg0YY96xX57prN1OgralClYgkhjWwc8zBlZQbTHoP1p1cEqpr4mLqwT%2BIVoJsHniTIC1apUu5lriMkOT5k05kqAw%2FyHhvQN7y4tTTaW7nsmzO%2Fyi0Nv9wkvz0AD3bwg5y0BMWhFu9dnlqrwW%2FjtQW7iOFWJPFbIPqjXxMr3coCq8pNcL73sjo9%2BrsNXuH8y1icl%2BcNmGGKMsK8lF0AcM6qKfSvFItVlPJT4xhxQICD%2B%2BEGn%2Fdo95G9hvMqqJhW7zy12liGfqSQDRLwxzDd0fCnpYu%2BwgWjlQev%2BQMn2glCuPX%2B5%2BH734Bemx4NK8sHxPyzCafshmTK1HmWUlFjLIsruINYiZ6c4gd6sixUv7iliCrSIJiCUacacKd6VT46IAkaJxiCtRUZNVV5SkmkSKds6B84ntBe0BTqrWBfenHtFdNGDQiDA7MvEESuPimtLI6RyAfD2L6FVVST9pJFmSywsIT6TmmLvTMlw%2Bxu6HkVOOasf%2F2XxWE5LgVK0ap6aMIqF%2Br8GOqUBM05Y37WNi%2BSlKIEYhzt7vjZh%2B3df6nRKeNWFKq1Cn6%2BQi%2FMuxEBcNBNUMl9za98fHVchvzMUM4q4xTQkYInzquLCzpR8pcKxIzcEnOLD6P62YDHuQks0SWfCto%2FehqepuTx0QXsaKn%2Fz0kEGLgjuOUWkVg7bKutaC7t11yToNJqmXiMed7Qs7DftgV9YZvTFNZ5FsIlLKvSPU6xaxaHbmvds%2B5v0&X-Amz-Signature=715ac4d0e8557e7d36431d9dddb64fe4ca455021deb29e0ef32dc1eb906bbf72&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
