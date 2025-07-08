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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=6f5f68d77db8c060f0bff47bf161ce59820649e063d48387b643b9fe7d845ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=78bd9c6533483e0504bbdf4acfa56a90c03c1a9d6cc2474730735e39fbe299d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=10f8899bbc17b2c57172cf4a06ddb3b050e43a8a2fa1a7bd8aa3cd25678cfac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=613fa752c16e1c4ae1c456f981b5949956b74642df7707ef7c3f3e4372bcaa87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=975e4232d174451104213ef9878f3fa05f2a8fd2ed74aa22ab41cd77ebb359e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=c4b8afa0f2edbb0e7a2d4f9a48e6c85c43338f6223ececb9524f999702550e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBWMXNE3%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMeWnjJ%2FzA%2BgyMaIsYCPgxriGb5zCykz3iMF5vv3MK%2BAiAeoJGz%2F4VsOlkeBUclaoTaryytmfMk8ODWGa%2F2bZsIpSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiOZcLZ33R5fqgyF%2FKtwDkoBE9x01w4sAi7hjS1bSBDEta8ZtOG%2B1l7oOU6vI8Ac%2F2BA8P2Z7UtFS%2For3HWhOUEwJmzmoA2BXvxH1C97isxNRmhYcLOjjC4Lfh43EizK3dtEUXb4RjHVYo4LBtJP8LOA8rS6tgoiZYL1OalwJeO7yNp60EwtD0WII1LSrkS5sW5PAaFrGu5nH99cGCyWYpZvTYueXakMJVYWjQ9q2v3QNbRW%2F0a1W2B8ygwyUiLqXIrR0Bk%2Bq%2BBz1PELyb9EHCBQ5KCiuS8Ec8TIOqJlEk0NKhjKBip5JSYt0mItdNYnbut642g1XTuB23I3q8FFSmZ6e3vDRfDik5bWRae0d%2Fey%2Bw0suHP7Fesy2e6ROXnMpyars9Ake%2BmeF%2F%2FZMNpezSwpsxtOUaMv%2Fms0hh%2FuLOhP%2FoNheaRwyLskiranE9A3O6TvYoVAUiAj%2FOEHTo2v5%2BJpIdz%2FzaPjBSMM1GCg8DV3JH4F1v%2B7Mkea9%2BZApqvrh5CwnLYIBqKrcQwI5yDgqBTHKdO1ig%2FePBI%2BWwlBUxOGNz5U4bD4UQodtT2rVAD6G%2FysyF0H0o5iLDuNay6OAhc4xdAy3%2Bw3FZu0wsG4rbgiplRaFr1nyNB90UrvIj0y%2FlRbupAg3pc8ibVEw7MezwwY6pgF4qtN%2B5O%2FnOUbYC3orp26v4n6AyjyJUnCPdhJSHSFoiKDy7MHI23dxypU0aFApnagDXVWSkLpYUrPWeKYG93l4tnZuB63KFfeUvoahRXikd2N%2FTqVJo1C%2Fqobp3dutk5TVV94vrJBixu4pGLinLh9UTkzCjNcnxRK2eKwJmJpf9do961NkaXgMKtoBIHtWCqJUtmGUWkLL5iHh0IttDVUMTazCCRkK&X-Amz-Signature=949ae92c69151c2d28b2fe27b8bc060b14aa9325f3328beba8951f9558001fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
