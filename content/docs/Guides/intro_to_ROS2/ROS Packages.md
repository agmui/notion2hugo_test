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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=c52156f30c18dbdec7bc8f30e20724da3ea30d3cbda79f684d114eaefa4dc2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=406fe3f84262892c4e604fd36cd206edd4cdc1111d78f418c16ba696e430dda1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=f50d4968ecdf431cc949c5b100cb6aa74bb7b595a5f866a56c9cb3cf3ea5c738&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=97a655fa2b5d9c3bc74357ffe658b51c6bb535f20b5dbfd5ca56dae46798dc96&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=2169cc0ea39ba98d022206553d580672f0e74f031ab40731f5e23d7db59165b3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=39b5f01f861749d29270d1da725abd1bd6e3de9ea9f0130869bbb47ee1525779&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDLRH4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUFJPznCTIt9gAMGmqPed3Lg7nGFZU2e6R1FBKTXgBJAiAf6SBe8EgpmdnwhIBWU0UNS7wmNNwm6jYsP79SeNiq9CqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJSfHOyhGxaoJwb%2B9KtwDUW%2FwfT1RzItiEv8vokFT7lbRK1Ro%2BRkgk3jTbDITnKzbIfz7HCktwdtVv8gXbz%2BZ9nFx7wtD1u9wBDtx6uE%2FrKLMKaJ2T9GPvlNrxKIN32D%2BH787lx1z8ds5mGspeHmnkS8RyTTBei4d8ZsNoHqTEU8%2FJ0pfxjEJ4iroWFJM2Xsm7fwFT5Ah9ZgXBVqJG5QxtdtUWGPJBUqYPNXpW%2F90sBa0GTmuPsfs%2Fsn%2BzxiMjlWvEz3v2xfeMbVtobt4cWAw0Ax1lvombtuIdSrlG0AlnWBKAYzz3QXQFfKbJlHufNInOBXKbJT%2Bb6%2BimjgvPTqByUjOPkBC9aXWkbLr4%2B%2BacZ6HBN7yn9aoDbWizVL8gL1bwLwnlA48yQwNoysA90rpM4C4%2BMDYWZhmlbZ7pBZKlqof%2FlKwbsxXFfPWea%2BKCY8OHO5WyZkMp%2FFfJ%2Bo8cnslAJmadOIC4wOcWVYk%2BT37LBqyFoBa71DLfMgN%2FaaYKNOzb%2Fsm2k7XVF27Q4a7dlS0SgzVwx9pzqMoKAgR6mg%2F%2FWvOuBlRAi5INoHNAl1Wvk3oa%2B0xitnms%2Bzrx8u3NXafGYVgLhcC1%2Bp2UioIQuFbK5poyK52%2B1aVcF2Vvx%2Bm2986yVwirLacpqL%2BzacwmYSovQY6pgEkPnZT0J1nLyqer1AO9zSVJCZM2iIb89L2mgtetW8%2F4oQY2cF3akaxnQr81XjKMn2raS9XvGg%2BuIlzhA%2FJVLMJGFr%2Fu%2BxQuHV1OQwlRZefD327pcOM%2Fs4HW8e%2FcyxXXiBvwB4VRUi0NcJ%2B%2FOCYG7q6HkHXGI8kI1o%2BK6%2FRQjutGIbKpEwH97EaW8nRWkvtfHbxVZsgxuEyOBnbhSRRJoh3HxVflPve&X-Amz-Signature=6e4151def570a8474e80078ead6c23669d4c474d0c8324e07ceed3c9e49a53f6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
