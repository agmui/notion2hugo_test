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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=a68c1189fdbd0c7be9429f69d3c9c8d4c443f9618f3a97f4edd61ef8b5206cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=08109fc8a7b6dbfb44fe01ade16db52487880afaa944d5ab6ff10a1f5f346156&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=4a5895a567664ad69d5e561b1b257c268a63eacc33d5d39560cc06e4b6ef9e55&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=e42740d8292a2fb371e3f53408e4e4f8a6e6e6d3a4c3135646e4ab7c2a60a083&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=827c78cbd67c719a8c24b9fd6583e6069ea01763e31f463dff93c3e9c6b6c663&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=e048cd0439cffc87c1244487e2991d7f35d7008345b4c2b7394d17ac2826d4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNN6G5L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAL%2BF5bwm5nUilZvZGY8NQqnN31DLv5b7VST1W5glwHGAiB%2Fx4nz0baY9ZuufJp2%2F58wcNgaBrsDmsb%2BxTsFhj%2BTDSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJpSNdVaxnWywDrU%2FKtwDYk%2BbWY9RRIoxwtZKKHgBEaTMymzL1TwMBBQr5fKjzbiu9TJtKcYYzSSyY49n11hkwpxz6S%2BHJwTl%2FnZClQGq7ohsjnX%2BSzn7ocqqjuS4%2B2zytLcgUZLhZHBNI9kQhHegqeyej03iryyFtctHXMgB8nmdFB32veflzT0cugoGx0lq%2B3KTx5FCepXRcVUn163sA9nV%2BTf7wSzxvpkTTMYONnlIRmY0UlUTVZWPIz5gYGujeZNNRB3Xzpo1Dw%2Bw3QkXm%2FOZHbOZ77BY4FrpIgGw%2BoC2CIjgC5RHepRTOByZ4SGtMPQFmRWxGADGWqB1UMoQpA6TBh91K6YC4UAWsUthfKzgfmzDA4Y%2F7DF6YqaqbRtfy9VRoi27WVOzZYDFYPxFGP1XDnXvhti2hJ1pqievi5WWPYa1DBLSP4oEXJeebRYqwc3h8GCfhIu4MWR%2BFSHMClC60P0ACw334hCU5Th050donGEePbqO04lKqwMCRhyIyYCfcuqvXS3Nv0262KYZTVe7JMy94gjBScZJp0PrNyQ%2FyKesRPL8jTTDW4whG0SdBh0cgE3fUCccfzkswXfNWVjs%2FM1vO0ThAbnthhnOIf2AZFWxx13346IxIPdx3FncHENUBMmy6x%2B8RxEwjZzFvgY6pgGN97mQZyjK9zidKM0s2fJazqj2f%2BQALbfXamVv7G683LAFiT4UrQxezZ8coLo0zY6pewmpF3XTgfUAMs4KGU1LkQ%2Fukgtdpf%2FGDwXanRvtTohkk2Jsjomtk65xXvfQcZOVsimi%2FZpI5kNqpcpzZsMUCV7ee5mhoufStqRFi4vMfHe78fAO2aO3%2BdA0mGcdR%2F7u2iGTTzCBcsY1irnkrq0KoJxIAE7E&X-Amz-Signature=535df2ece5b82de3f673ad868e1fd6f96be6a21ec5dccb406420d975d17f7df9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
