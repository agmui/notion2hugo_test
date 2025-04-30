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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=75d3af5af90b0daa01180c2967381de543e95dfa008515b5fe79c706e9b784fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=54e54eeb0d4b9e003e5e398020a55fecb93cbe263fe785fd6b501e5e888a264d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=ac974bf71304370afbc8540d274a05246c18a5c99e4ed9a1aa78ab60218e14c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=6e8bbe135622c600f2c6df2389c4202624f4432041303af3129baefddbb8fd29&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=711d06c9c6d91a08ed322edce02132dad4981cf50be240e65e4c991ab9bb2d37&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=69dc12065e5c1c5b43132635e12ddefb5d6a9322aa505eb85658286a76e1c3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZBKONM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDC9BINgd0XNnlse94EugpvsD2gUUklr78N9U8l%2FMVXIwIhAMCFHYATrFSuPC0x00RQmebRiQqX5c4yNa%2Fb3yNCYnLwKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDiNQ0GfJSm2LgYEkq3AP4NAm5V5r5oRyhdmSpCZY%2B8gL6mAoQ5q2DV6cGhEtKy4Ygcf00aq5Cf4F01rh904P4oGrBMeP18ZsfOmegZ%2Fu%2BleDdVqT%2Bl1wKkXguUfzqqd2pqCJRNWfIPlpt5m9pL7BYccyUWPlQaVgT5FyyQGfhydlCDvNG%2F7%2BBVl04jpLl7r8nL7nGx5ICpISlZdjuFk5qxRfXXJ%2FsRAvGYRFpejzo56NX%2FjXxVSo35vFZTK%2BM%2BEIzFwJQhbMJ0lNB8i6UZ2ggLYaQwub6a8EqsGnpJbuXd4K%2F5N8YlcZbBo8Q23T3nJLNzABVxVDpPLVIOaZoaxdOa8qLQVvkhgY6cB9WB9xFPttJ4wdAk87mjaXhP%2FzY4fEPDVs73tyTdn0SwFDPeyWbDax%2FCJulfivxU0EM9ybifmZnLRS9eWGS977Rl7ZRB3AciGNbJl7IoaqCQBXNM2VhAxOwXu%2B5%2FRmhkdI4rwAfqyU%2FscETgxxxJz8ck8y3DLqgbYoE3CIa5pkNv7uC4H6BJ4TOYkZYNZm5SufzcaDIiip8Y2%2FdqZS8yGMg5WhN%2BNpdjEt2c8SghPQqajQmjJHcrblam31PuLGJvRMDj6At4nzZREMpLiEYgiLQnuWNQnxoGgvvUk3mHcBi3DD%2Bv8bABjqkAdbncrr9qFsZUXPWnPzXYkzwPUhLqb5zwURIs1VLUwXtGIeJ2oFJfVeUGDl%2FYC9t2wb1yjGwBxCDCjA9h3HsJodVD%2FAOTGfA3MqKj0zgj2MtJdWS8DmYiGcJ9D%2Bl8su9ky2fJPswkPzciGZpd1edMsFk3toRTnSuFMzfx1SSwEU%2BTadHR06iEtz45ETAHV87FFaXyZVsjak5kfFsHJVnq%2BkZCWf0&X-Amz-Signature=af39bb43ccf84c8b21750d168e7a6545d5307285226c1d49acaf05bd9b369d35&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
