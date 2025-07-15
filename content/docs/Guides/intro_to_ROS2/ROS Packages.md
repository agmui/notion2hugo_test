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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=32f8ed69ffa23bdf21d7b10abc8f5b59a0ae94bdc50cb56d2b7e7976261e1708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=499538755e4d86df4094cda51456cfed4c5e9156ef1d670c018b6c2284362023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=6f4d78157ec09c517ba5f161ae4845af9ccb53a443ebf514e829e7af7f2b0fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=731f2a4dbfdb55dca94c3ef40b647a5f804a7158ff85ca59a5807e79b515610d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=3bd7d1f1ffb28ab9295efc1222ecad1a79f32e41448d745bd84debb9fee5b9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=1d702f8d6fed8f40ddd2bf5f871349f04e24ff75bebad0a7479d5ec950a3ade3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TARYYZD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzZM3ib8VgfypQqliJ19RlfGbzkWwD2NVntb3HOQUM7gIgItR1Mgeaq8CktVdG8AnmpHEl99v%2FkFquNaoxZjCUOOAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPn61%2BHjzr7M3DjKICrcAxzYpvz0pGEW5J87eBzVgSHBs3RdVfN6JPA%2F0pjUkHrThhQUWuZcZJNWzMkVofQvcJ4elv%2FyN05wWB4baw2W2S870PcsI0guzcvlakA%2FdzweZH4zVFCiyQMG3VVmmYKDg8SAYRyq45TrA%2B8RiN5zEea37%2BFfjXZVPyIgItFEte%2B2pT2gciafHl8xJ6iIXi6Yaho0YZZUvBTKg79n0b4x4yB4pTvM3e9NPQkeXbyCeulhVrLLzL6TSzKpuiqKQsZU71aFPVcwha2ocNRw00qiN%2FGqnzhDdOQxdAIWDcah5Wf%2FDGQaa1skE%2B%2FLoZqeLbebaNIkP91i1nbp8%2FaI54kJLr7j%2F1BM%2BrF5qi%2Bc70%2F1nbdFBtg9Wh8A0aHmc2f1t%2FXA5u1AtAl5QJ8jC0OwB7yNF7NAx42Z1zVsVPmo9bbdf6MUKiqTvLdh83RBPqzCDlI202j2hbpsAXlSVZVYVpBFs2%2BRzm6miAS5JbH80Us2%2BPK0qhYbtEkhNmSe8Ko2qFozKJ7%2FEynTRcM3765GLuJzoHQCs53fpBLJ%2B4xos2N8ephkhoVPMZmIhaIEt0UfJW4yKeHwL9j34R%2FwkyyBXGPHC39ZsFepkVMvqXKbX6yXoTFdGcxcs37ZlkhD0LZwMJuq18MGOqUBA2HZ3MnaKmvpmE%2BoRmJIf5seVF1jF6ceOxD0avzufLtMc%2FE8PRly8gpRoPC9QmE4%2BxswpJi0nisT%2Fz8qLAjTMLyE4ITUllNGZS3QURzUfdlpECIdIzOGIJySF3K5TnX%2BOc5bE7z3zlAMdeB3IyXb5XSnnnwOyoFmOkrI6JLvWKqhsqiWzHIzhXBMHeIwyIhOOTtMhA723GG4exppn3iEAijrWEUn&X-Amz-Signature=7eba37deb4f7872785a2c0e380a1c4e817b2cd001109896a4887dff74e1a54a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
