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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=ba7562a876fbad9f5af173c79a2513edb3529bcd47dc09e7d778313704da184a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=6d28a05348a2e789ba46b2046b277614cb465ff896bef12e4e4a54bfb3772d42&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=245a65b2065d2114a22032d348c60cff7336dd8cf68e4d0065ea325c15cb6fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=9e02a3de62ab37b32de89428d3237e8052386b947c54a955345e16ba7732a04d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=e43345eab2e41de9f1f05537835b81fa3d7652399ec967773d87aade1ef751b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=bc16b8bb34483ead24f7fc07b4289d927eb2fcd75a0911c51ea3a70219b90954&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5HDRTV%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEARnc%2FMQ4mNL4TuAElz3dJZ6iiD1WFrLMlemWlMrIlnAiA2AyNCd%2FKmdOfojTfFu4YOA%2BJq5iPegSl2tD3Sio%2Bl7yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcD2v4vhAnPLuXcBKtwDeNNgglb0zxybLa3i9gGELdLjuGnUla1TKKdjRCo%2F95ZopxXQ8sJT%2FFs7ECIB%2FzTMEaYKyYHWHyaXh9wknLylQIsoFOt0jsQSqyLg6WCWxfE6P8TKnJuSsspR0EfzGID1hEKjr6joXVhe9fTgpCQo5qN7FEhWoL30lCFboO6Evp9PL9Y6fQwwew%2BEtVRfaZiqYs9wW0iltC20Pz7%2BKyVZmVMHZYiud93iB5asEBkYWdIW7KeBgvC%2B3DwveMWahyODdgPmw74LmsS%2BMpwkXc7uxnxmYztYtqgibHe3D0JG2nHTGOJ6Y5Ec8hx4VIQRYW0YqNWptcv7J5%2BaN9envJgaj5J6Yaw9N%2B7RRueIlQuQAILsfU6qh9SuGqA%2BROzex0Dq%2FZHiCo8%2B6rAmvGjf4InillH4GnjrY4cW1UlHtKAsEHLA2KS8yGDMG8b0ipTLUQhw6Q%2B7QZWNlIsUzEUfQ77ENJ934iFlhXO4NtdhuYJOWfNUl0zxD2d6nj5H%2BwKZCra5fLSDJb5AJMLZHzYZniT%2FOub8vEoKIEnPxSn%2BgTbAzRpJAJ0aNs6sO1doEw4VR0D2A7aXwySHDIdeEIsx2jf6hlFRkj%2BqqJZmZYhShWvppA3yyfwfa57H90506u0wsravvwY6pgHYWhOzmUhKkPtPjBcIlsQKeAkwcowT5u1wYC49K6R0EBzzzMiQ%2BBFXgya6dfXsLQ1WrXPzywDaRVggMLUzWW6HJRmFeuR6hg9xk12zaPw7SK0KBBh76371ltyVad%2BpH9BsnEOe5ZO98WDRvfyLxcn9PI71sU2Smn%2BvtnV4PG0UYoDFXTMBdcFf6pHt4Cb5cz3EFX%2FFhoe%2B76k797YuC%2F5F1VqkI3u2&X-Amz-Signature=a51bf137e0dc26a01b6ce7d92f9a5e1202667875d6230398b255358f607055d9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
