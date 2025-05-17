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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=56f96a044ac3c1dab8b3ecfd3cca065fac4c4a08d3c304773c9430f7ec40d692&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=ba28089a9a5bdf8a03c2180e9765f579956d966a6dedc91c199d7329b38760c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=bd77881377dd67a4e275fd82f0e5722956fdaf253f88d402e6f3568dc84fa0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=0c3c0b76c0f48ebc18d53698fd1960ee36c5c60fbb9a641c505f71f80c62b90f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=c7e449c09b8d56051de6d8611d105eb19cccd66cd72357d42ac7fb8adb47e33e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=42390510a2f9035e5299d053446ad4ad89bb1167735630aa7a839460a536f2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE27TOKY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD00wzS1mBegag8AqnWCWTniYQBX2VDkFn6ye7sfW%2BFtAIga0KNl%2BO3V7Ku90OAVlphurtfLBAoD65hjIPiwNqneHUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBamqsTWdahOSERttyrcA3ttWjLSG%2FuQl66sIVaxiK2OcY6SFzLq40F4reECav2%2B%2Bj5GS5N3Q3K7Psmv87miw4tj9aRqWOiohgWI8UVlmpbDFl%2BYvv1eIWllqt9hPulxg7UBUTuXs%2B2wLkGyV8f52rdY9oKa4wPR1lQ4dxjv810iE8yMoJpCjJJJ1Mant8m2LL%2FfUMJlxVA7cpYCGM2lVOLyPsEizwDYzuSW63dfhcil%2FwWH5n2hs7jKoj6caXXngY5%2BFB9ykmZ11pEGLzn6v8YeCxxE%2BxgYXOPbX02eEML7IpmXEFBUSvgtcSXYibHiRfBD%2BfH4zO%2BvbobSrmh1aMBPjWmIRjWLXcn2BUx8wXWy6qcKK%2BaMGuLVigFwCv32NR4%2BsMlMDo7kwvPKFfuVSzERctXI5Pxaj95k8R6G1j91sOCqCr4E%2FUJ1yZIQeYOnxVL5JFxtaWtqMWpdkHWJoRncdYgVrMqaYE%2BljtSruNO6%2FWmzR80sD23hrnrCSQpBJX03Y1BRuQo%2FWgIWI1IonDBL4H9R5%2B9bZ4roo%2BQ4j9RS3zIUH1oS%2BhgbWcxDcJzooUpgIXxTMBjrfyupfKgi98S3GdTRWcmbzN4OUsTj%2FAAajILMBeG%2ByS4ANzmXMy564%2FcZnzXf%2FFuhuSiPMKy8ocEGOqUBRU%2BX%2FgVDwfI44sCtiBZGmJFKchIegGK9zCuVcuaEVNYP71BEr4JXDUiwPrOGVIWoWEqVdhEHR4kJpUOcdqHvt%2BpDOjA40ZiB2wu7BdM5fkrUBzzu%2FAZipRnf4BBBpZ5KQJIUgaSJmp1I9ooREV47nz2o8Y2HG2UXVEN6ffraOnrYJgzDdUq8cNOYQVMZBb2Z0oRp1lbYJItFWiYRUondW65540JJ&X-Amz-Signature=964aa62aa97853f682b8ee9f6af82ad3e43bf31cc683a85bde4f9d959d7c22f8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
