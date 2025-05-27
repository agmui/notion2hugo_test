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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=a4b48bae09655b4d95b6606670998cb67c7d5d0dc92507fb418043a549978251&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=87cd4591a3365d25f60f36c32c7fae7f891cfe59cf17bc0cd0a1a926cb01e9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=f431606e2ae6ee44a65000baa557e40dc05f99cae1e1912ea6d1c55d3b487777&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=9f89e50268bbac309bf39cf38b3b5736d7f1821021e24f01b1688418cffac146&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=c9a80d23be5d25d413d561898229b7229e6ef2ba80633c0a38c761a29195373c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=a10864d78664b83edeb8726d62bad2d7eecc9145e7c05a0a65ddcce09e91e029&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEI24FT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGceBuxb%2FKqND8jdPrJzWvubPrWFlsQjofE2RXRL%2FQKRAiEAh1jq78eDoHuL6jszMijwtBWYXZNe9Ese4HjPX58o3kYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDESqOjrWcgZmRqyDVSrcA0Ma7zKQ0YrCFl1WI%2FT%2F9L5%2BrQ8vDpHIKvOuGM35GJGPKJvGskTqKHbI4hnBIJjspyTmyrsj%2Fe5eubBWU4Ve%2B9QK1L6o%2F5hHWEafWjEaU9ctsD60a1ceyPORa5gvwf1LDBSibvM0c8%2Fv3mPx4Tjyes40E416EXM8mVJz1HfsjU8V4Yc4Q5L1TFb0FkRPW%2B40SOrHmS7ibR5UO4G8NjOfKVlMsK3BIUc6CdmjUNwg6M90braamJoZAavr6OcF2W0OWRIjmm2EV0HHWJEdZ2Tk5THB5S8nWno11G3X%2B%2Bf08017ASNMEE8ZI4IzUZEEDtO9MGzkIDFxWQONOzVt8RS3VQ4IiNJzPoAt%2BDYzLWa%2B%2BY9f5bfX4eGeRqCoh8dUa%2FG1oD67SaBRTq9E7BAHgt%2BzGYDgUKiUSwN4fiF7JJbQywUe0aU7roAsrkYc8rnwx6pZiTlaX0IZzmL7y1B82HZtMbUC2JQiwENJ1qebVlpzSrc1eeYA3e5%2BnobNOk3BHwtuNvy9xfhtqfEDpSpqkGuReTiRngGFmwQQOcVwp%2FO72I%2BS8wbgvCPvpiCq6xcPOUJeE5exc%2BUHCzCUfE3uVmz8jqC7iQqaRBaI%2BXGWJyzSfKYkvXZjaX%2BCxZKUFExZMMvT08EGOqUBCUganrOF0E4pNjlEGpbRF7d5SmkV2Wu5am2xJ%2Fam12OOPbh3YiND7UZzXQaZ4KoI7c6oUoyON%2FB3WqRebaSnDmjwozlTfllS7BTOqEc6d7FmwCx%2FmU8fAl8%2FMuwRyzhdtmZgUAU21HCbrbdhcb%2BDWLzk53vcYjyJHoL9%2F187CEAKe4E8Exog0W%2Bd38i4UsX64DLnvRWbI3XTfa3yfnNKfNJoSTgq&X-Amz-Signature=f26d1356568b1eda79096531e1c13efc3eae93461cc21e734992ba621ca3cea5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
