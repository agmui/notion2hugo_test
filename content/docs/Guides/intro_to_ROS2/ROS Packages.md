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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=d1334c3944f6c43fd83c40308346e5ceed830800d82384c9f0981793fbdba76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=1c9b474a2d46cd6be87be7a3aae25eff28239895869931891aa19f705d00d449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=6a7dac7136100d4528d1d521780411dc618ba062857aceb3e79b6e2831499adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=fd1e0c49444e0b8937500eb28ea2ffb57c78328d3ffceb36a02ae4f55cdcb17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=a0faa72e5b28605e3c418038b97bbc986161187585782e786feedb9edef536b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=a59e23f76292ec8b7a7b31bcef63c58dce25fa0221484c7fbe4de7e1bdd78914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ADLNT4S%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHixEAfbAMx7rAqMijR9u9zX%2BmrgnRh5a3iCifQVjSy2AiEAzuP3%2FbhO8qOE4Vz3QTLNr0YF40lqQcJu81HY5pGXj4oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnPPgoZZ05AmOV8TCrcAxFdgQUG5jlTA67sSSpdUh2g23iVSvrtCmHm8ZxGl5vhX4gtVRKqs7KMkxLJeBiWoPeo9p3p8qZ8LfUPAmvampu%2Bm6ER%2B9SHSzt4Z1aVfWUmfY8fe%2FRQ1kJbmgT71DAMXVMjeoZV82h16GlHc%2Bf0ZmfTybQsIw9ZVwL%2FKFEB%2FyMDQpBtWq%2FYRj9zrjZIqs57HtlOZleOdHNaitQzyFKbr7YBca%2BCt5RjLJXAHmdmQ82hRjFMfcrCk42ArknmnG4Be7B0aX9Mj7QEtS5Q%2Bb1fyopy5cH143dUQFbj6IkiwPmwfOPLNvji%2BQ%2Ft8r99X0iYphTSQtrif5unG2efEaElPHtKNQ6%2FZ70JbAH4fTpXYC8crQ8oFtVXesYYy9DyaSlwWCwSbIIgt6ZFet43lvL6HQvlMNsy6e7U3HjEYImxrh636YoVetgV5Spnl0JT4VbFXMBRgcQ%2FhZbnyMwaEj43pJfuQcjlkYdMwmK145tjPmA17Aj3Lyr7KQ6kBJOoJqQQyARfNbDW3BPYOzECL08wKntaTLCse36GHt6H4A%2F3zfuG%2B0jFJ8J%2FCd4VTsLmhRXoIssVA9asD2nwvmixmbeOXfC0gu%2Fw8Wjs8eUXxJb9h0gRK%2FSfdBYssi3zyDPTMJ7aiMQGOqUBeGnJMvtbsrdY621CPJAu%2BOE9OS0Gni0%2BLEwb9yoDhsgYOsYUxzZ4fJ%2BLrwDEdJblSvS5FBcBRLOWAqg49hB8Tg7NslIFyDNCtSbB0JFqPuGX23xbchke9U%2F6nb9foI8nzsw4IcmlxtQVuNNSLYq%2FhCMugDkYnAf%2BQXyz7BJjwVXiJidfh0ECoptoSsE%2BjNVdgSHmaWUM7Bssz0jPAJJxEzFTMdZ3&X-Amz-Signature=422219025699e6f770b92cf5c12f0ecb7c172e517419a21fb1135eb5f1a11220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
