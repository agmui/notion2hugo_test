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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=8cd2e56008e56675da736bdb8457e69c2301034af75f44314ea31fb0c95d3d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=f72c603193e6bbace96662f2a46a7eaf6a9416dff58c03a675ec052dd79623ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=a764dfdb1cbcf95031025e7b4ca7bbdd11646d3f7a55fdcc4eafdc3cc729ddb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=c68d41bf4b4cad173bced4f031efdc168034786bbd6e2f6b71fb7721fd471639&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=cbbc06ffa3e64d08f74658af3e469b167c6e81d1016a30fcd7d5c84a77d1b820&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=4d0a841ee2feca0e2b4023443cd39d700b872e5faafef9119f1e535e69345962&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P6OA7X%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYxd1ssQE96hZ90Fugqu5SSeic7mZ16IP9MB4pcoXDQgIhAOjU8DdKomJziJnAaKwIf5GTloxNqossovcL%2BFK6BxMXKv8DCCwQABoMNjM3NDIzMTgzODA1IgySCkiPjXBBi7x7PlEq3APxjH5EOkHcwIkFSFUSomzgcMfCO3fiv5ZMv490pH5Di8DHx0lqvbWNQ2pG5WH7EC6XVBKNlBo12z36QpKN2EaXBwv9H1USrmn262QWCu8IgqUFmdovRxtdNO9uvhHzeSuuKsk7q%2BdFz%2FMWiLuKmKHZna%2BU9MV2ryGITs%2FwXhsgpz%2BhjCtKELlBXlnvwklQsqIcz9lLP2XFnhWyXDCtkIyqnSrSCxMvV%2F1Fzr6UiTx7NkhevXsmdEPRT4dyu%2FfxrtvEbWveMH5a6gRaHtiwR%2F1NfyAAqySNOgvcukZv3ejG1uCY3mxIi%2BU0T7bvjr1%2BmO3S%2FSlRS%2FBZmB83mx6FxB7CUhPCSg4tfzf4cEH3OFnQogxFPPkQfwnn15fGyFMYeGii40TKT6yTd8PClWjVyEVlP9hnIbCotnOscxnzx5YhoOpqbzNO6yQRXZs4ZyfTiAA3TrhpJkBcRYxmAt8S9sy4mJbVuA7O4lDnhrDkWWT4yR4vykCLXu422%2F04wHD4iHH%2Bj0HgUk9fiEHtNfmhIz8R94865S1%2FrThIeIG2meYwt%2BcbeDmIQItHSLyhF7peo7v9Hn%2BRxyCnQ8Seashd8Dlqrrv9MncwFhlijcyhpNRLUQK8H5waSqq1W%2FYIeTDM2Nq%2BBjqkAeThOhz35B%2Bhra5RV8ivNGn9JNJqnaK0676WD5Kbkg%2B%2BArW8qMXTMlDeEvvwGjmB8iiTFQ%2ByeAV718kqCk24Gn973vlG2xKNXD%2BXwAksyrTgnabPSW%2BpLO%2BG7MRUp74pl7ntPBM1fMPlWABJeRkbh7kW%2Bj6s%2B1CUctnitRVV4%2BSZI9Xv1krnoJVZ9xWFb7Tbbrf9JtCTP6ASGBPg77AVeThct4ug&X-Amz-Signature=138b4494fbe8d792770d436c58f5dcae3f571c1c8810874529975dd07895698b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
