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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=d0cf6261bc2eb84300dacfb381c7a10b53be3a2b0f1de5eddd75d30543c96abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=07ce0a7351ad40a15a13c0f206bce39e625f54505729123c1b61f7a8277f57d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=a428b336b110e5d64f60137821a5e0634d55ea58a76746e51d1034b6d4e0339e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=e52867ce37a1f91e9fb58e7180c2beb3c58de7bb037bf5d8f5b2d32dfe3958f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=85aa78fc8de75f9fc3f577200108ec6dfce29d3bc1f46f750f945cce4d310b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=3d367785dff6e113da9e8f3ae57bf0ff12f646cd6357886c73bfa5c656e72d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN3MCIVK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRea6Piv5xlPeKsxXyKg7iPAJRiCqveeAxaz%2B%2BZgTDggIhAOetGUpJYsiEWD3EJY6PSRcGJZIQzFlSB3u3NuGGsgVSKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4fYPhKw%2FqUqq9IxQq3AMWG1NrrKuyN4dZqE4pNs648WJcuuunFlaLWvhjl8q2%2F0cZviykLr9owco3f8kZCNWhvLdw6kBAXzqk9oDNzDQ5K2IPrQqgkAIbSJgriZk6Z4z59dQe08Mj2iCWSYY7IgEpJK7JIzjFF96R%2BZGs%2F%2F2xLf0gUBWENjfmgIK0QnOvW9DU1XN7aF6RlKmnXMN3wZvvgizy0biZ1ZfGtxMyzfh%2BtljyjhoPfYtMUce9JBMbs9wiXcCzIQmoq5IyNQJl9e5wrET6COUEPJ%2BBmG4GVEWcgD47dPSfwXR7slWgJzNNZChnfRV%2B0EXFsPrkVF8rwo%2FaIwqMIIWmNr4S4UtAaxC4OOhFyXa2UDVxNyaexiYF%2BnefTAWc7sBXCbw37wCCnUJV0UuMcbIw%2FKRKwIrzL2c%2FE7X7ramBetz9lyoXMvF74DGpQuw34dowFOTw858n1I5qTOxVZf4qc80gOs82OsXLC7m4ZQ8SQ5CWm5%2Bw%2BdhllyYjyHbfHiKWD9mGNQg5WuuvpqUa8j%2BxCSNzl8n2tqRwdDAgnT7NYNb1i0xZBPKeVVXrTuIWVwzqYZV%2BP7yKE0cSydH%2Fwmlf9hlc%2BgB%2FhK3y6UfGEIApII%2Bd57uNlP7G9o2Z%2FNw83PR%2BfGvTCzCBsNjCBjqkAcOF3n47YC0c%2BEvg0jdd4dOiQn269Acc9chISvvGzZPQbEHzx%2FA5V0XLzLNe7VoXuX51Ylfy0A7wuPJtnMjisUyJE4Q9jTZrp2nCk%2F3VrBA%2Bo7U5zUWhb4fPEAI62jtIrmtHcqkP5J%2Bf1lpGxop07nVFipbptWtjU9vRorFoNA6%2FcyaKseIRwCWPMcpSV48IYzOu0UwkmbjmXsYz2oVaND%2BD8Ihz&X-Amz-Signature=0fa7933042941611aef7c7c005937d76a506d619d080b8a8451bf5505754653f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
