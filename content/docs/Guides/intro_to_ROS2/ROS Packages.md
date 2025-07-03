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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=ede7a20b4165fc1f76b5c230c245ea14edb43b537c82b82d97105b4ab940a5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=08cd36837e898ade8cfe02e57237d8e0eca5568c53627c100d41cbc050c1912a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=f897cbc1022f93500ab4670a382714a1ba36d23bd2bb77a9c238fb0bc82982e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=e5c59fd178e84d8900d0a68be3a607d42fd5fd78307d2ce5051f4e4bded3e589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=54f2e77e4de313315e41048dbc2aa94553397bdd0dd9d874a7b99cd107b75e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=89911b167752ad95df9ae67a78e22d6f911ef1448bcd69d34bf96016c5741f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXK2ZQZJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T210841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdkjxS2HN8j6z%2FwFMmkDDW%2BEnTh6UpsMeyDlLwbQyDFAIgUmWIOCdcsi6i0peiRHo3iJXAIwQcaAJyjfb6ekEMTP0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAy3HcCRhLjb7JjSXCrcA2DWNtFJ0GYI%2BM9pNN44Mq70pfcCQXjPAcLoBo9fxdjqAc0FZEGAS65mAx8BSKYQ%2FSAkO5LPlqVsDWxlvw4qyHPbERhW1mD9JxLb3q28fvxxszMuKdDTT1it5dOWVDZEQCjbdsiTOUKixjciYyDH1mszZpleJm%2F%2FXGQgujVNfQ33lex2LSCJw%2F9omdbpQYQ9b7yuURafyXF6X8evuPzf5rsu9n%2BX8ALZ9pmZYtb1JLVTwTOyNProFpNIdgxw36I36bvYorL61HI%2FytiSzkUovrwg%2B9KVlRBhYJhPxwi98xSCi%2BrkC6XR44t6BFWtl9klvT%2FdiGydtQHUnW110Tw%2BvL20%2FmrWbosu2T6kZCzmbtdSuIQdI227iF%2F919ooUp8KQtqmtZesb7ejkXLQXF%2FBR695D0BWz4DFN%2FDC9GJEX3nrZDzSDLBYrTYjmTE0jlQyZay3pR08FrnIvWlGCtb0C2MU64figrqiIlPO9KyjdwIBvH0JM19cQBiG4UH6AjpvAQZR0ae3Zmd2GyPxF%2Fk0iOaOnSspU8%2FqeggdIkK5UtXN4KGsa%2FDgwnF%2FAN9KtEnX1XtEnrdavJIZWJJPtZV5oY5RSzB%2FWiIkrXBRRerMwZUpbLPewnoVUaI4V7pJMMW7m8MGOqUBShdxUEoo2%2BHwjxEVX5oxkpKEZAch7k%2FbBxmI0dsNHGmOeZfRcpRrHAuMb5kWN46aUdLO3GS2EMA%2FCcOKKDeMhAS6%2BvjJVzSNtrpAYCtQcyb40irRcB66f9ClMsMZwLZ99czNuWE3cTUXMuHkQjD3Zlv%2FKAs8wQUJ8%2BQ%2BO641CF2%2BEsMqA1BRR4oF0sDnkeNmev9Za8vcaU50RRz%2BumF46XbSnXwW&X-Amz-Signature=81685dbd12263a3c8459c017bd9ec4be8a1e06f4fb57e6074ee61eb39d891fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
