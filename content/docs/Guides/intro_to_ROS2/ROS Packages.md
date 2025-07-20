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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=4ca5c84b56927aa8a7a5a3ad06d467304945ea72d2c19dccc16fe7295226355e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=3710b80c5ce941ad7d7ec7c37b5f842eb97aa49dd7bcb92f89c0bf791138ba43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=97f8f950536e2761cdf61a7fa06fb6c95ce7419541b6e3d81370a16c93613f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=cb43f96583aa2f821143be1d308cb4632924c178235bfd07f3a0d150e81eb0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=6d3718c4735a0ae27ed2a01ff001ae4931da6a56f11338fb72ead89076908d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=7ab6e95fd2c1e15c9c1ec598a3656aa7adfe2ccbfb1f8caf3bff6a4de0afccb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVYYXTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByHtcncQcHI92k7u9Ez559VHVPpy%2BpOncX%2F4Y1Zpf4fAiAbHCN1lNOpQZEnxzSXPuqG%2F9ZFlG3iU%2B2X4C5plPFVvCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHL3CviArwbHVkffuKtwDtMHP4nJIxy7h6w5aT%2FDysboGODpv2khcF7qMr09DfKR6Tjia5c6qSbIj%2FDfHbMZLKEdZJ7vZadiOviQXQw%2B52rPbgffu7SPRDZNo66e1qWKRd2QJXmTZ7Il6sRGUhHtyocufQZMWCpq8TG9wtKQbxq9cVsQoZaiZ8eXEDr101JnO%2BCoqNwpYhWmDECYy9dEUz5%2FnvFPRFN9PqPyeCggmKYo45HQiz8eHjBPzYWC%2FGwNPsvcVPhTh6o36cL2WZIyI%2FE3%2BkL3O0LVktdIrsx2pxUu3p7FTLRcvZ5JNOPuMfDEzqyeDj0MnrsSeZjHUbd0gUzkSqpHI7T9GcaGkhEyW3EHKnO95OI6TCTJO0qogCoNMjWLxJBTKb3FEipSNiMgnyq2pYOK35EFUW1ydV4j6kUorlLTD3ZRRj%2FvCkhmPyJ32BozSzkHqjNYIzNrgzr0XxIkdgM3dkFW3rgTGgENnXr5ZBNGjJ0I%2F6uxheYXijsoZZ96MuuiopIVTkW5cs6MU4I8JTEqKPE5qNHUqcltS5L2XeRrj2G%2BLxgICdTrNTma6Z5pcTo7Js%2B33jOUGEpQV9yO%2BZ9M1pNhhvqthHKWK5DT0wBfo3FQ26U6q%2BHyhTqnwN4NJHtCIEMgXYLUwm7bywwY6pgGANPZ%2Bsos284frjrahW7R3jbOmxP%2FW3yXDmJpq8BCQ%2BF%2Fm8ZNRen5XIpBrhGylz5oh%2FMhmG6wpep4GNuQ%2BfiNabo%2BJ4xp9KxOcjl9P7XLpp1Zi3YR%2BQA7G0zZzydGmG4H6j4qgb%2B2Mr1dhMfZsXGjOFe1atOFcueJzoPwVeEHRjP90d6tIIdqrpOh6tdA6LZB6XROkCUMbHeRUhEiu0YBHS0XcxF6d&X-Amz-Signature=046130ee5c59ee56cea4dcad51780c366f9108739e0559e20cc4737dd8e72bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
