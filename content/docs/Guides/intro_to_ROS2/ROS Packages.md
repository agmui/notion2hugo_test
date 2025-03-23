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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=cd4237fdf46f0609b9b5fd2e39238341014f64c1dcc264287e012e0ed5778fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=05317b6d0ff916a8d877844247c8ba448f80b95aaa489d02779f94513c455f57&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=75ce75e3fc32639a46a803a4d595bc07ca850549334592ae986589d06f6dfebc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=a3b83057e06517a48b8b89d02f02e350f20971a84be1f13dfbecbb9edcfd07ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=ef53bee991341609f3562b5cb712aae630d34efcfc907fe91280a474e479e551&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=33f6a82d33486b95ad85cd35874b50e5c8d4980a9c42384aa7c144d7556fe842&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWA3BWE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDvcPofPUSv7SDMKfHPzISFsZFTVxYRlYv33pKmsKeIUwIgeKLcN6lGpD%2BWSn6WWgH0P110Octwd2IQXPkd%2FmUADVYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD08OsT49UQfN%2F8gqircA3IXcShh1c%2Fxsp%2B6MRYknNPARM92IBUKhILtEvIjtwlDIfpsQ4Gtb5617PhQ%2FO%2F9IhC4Auj1MLqc%2F0987xt%2Bbll5bAwKizzr5o6l3%2BwayAgfj4yiTrQw4wwyefkD3syOXhZ9viilvKFDAY9GBeNgujrf3xQMC%2Fn9IbHnIhCZjK4GWbYcitHGFGjPcQ9GMJHAp%2FFOwp2OKWOh6fvAdaNMG5AHs2CdCuVWFWELe%2Ff7IwG%2FBJaOjNWejN5VjUxDrwl5xS7X6JlxM9K7RNm2bXxG9qMmmy8jvFE5m9ZYaBE8AgylWpg086%2BsRUd%2B9%2FjzmhF16HMK56h9o2L1AO%2FVyG4Gyf%2FQ6yxcHcTCUwlD1zC7A7cRQyJHHOVMJ7bK%2Fwu%2BrsNmvF5WCQA9ZYb7AmqnFfa1FlxaapSL%2BjwO07khWOBzQHZZPzMP5KnEVHX%2BhKnAJsjaGK4XbMJp%2FIKLJRvPz%2F3YV8BJor9LP6N1%2BU7FnazJmjfv9HiFoZYTtJ7uG8c1Mfn13Xsxn5uT%2FeZPxBFwJ%2FlIMYMlmPgEN4Zdym8r4HBBiwYlh1wes1Ca69c0nLKt3Onbu%2BeLTxzxGwdZBB0%2FzsKue%2BNomAyuYjS2wVod0Y9vyuS6XAexytoGCSFxpatZMMPM%2F74GOqUBRZ6mY6%2F9Xnw2EfokVts1LC2EoDfiow6rz1eHLtDgNlNNczppb52PoUDSfDur632YwKFQr4rvSAsAZStG6MHEe1nrrWl2upsMhdYkNw2RYUJMcvq44uLrR5M6yhZ19WCq%2BnXP2Bj6XQog2WMat283wZcp0kSemcJqK7ClJVRYvzDS9uB7UpEHesTEpXmOE5gAYP27HMzXzO%2FqyfKPov79zCXiVnP6&X-Amz-Signature=98db9f9837c899b9eccb6d3bff0bf91d0c0c1b1ad3f3332572ba0ee545510b05&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
