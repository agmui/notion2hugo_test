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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=d652fc0c38337e76d2e8a60eb607f2c0fced290083f564c16c38ff9eb42c41ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=fcc44b45fb552e2e33a06aafa663ae13e9b756ad2ca5a0de275633892f020195&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=bc08905da3c20eb9dd08a4fee84133af5f0a1c6f123a8cd7784a622e73785352&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=34529bd049eb27c011e4b20084cc24e4b9045d6ae230acb43a87d68779a644ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=14807f049472eb1d71b09dab789bd9f6aa0cddbd39a2bce051c9ef1d622c9e89&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=7a52eb3ea645a2fb166a6e29e88ccc6f1d699ae0163c804b882a15cfcf592e65&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWOFUEW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBjTR4yEiJckZvmxggWcQjFHuu3vGam8wNOOj8Z4Z%2FEcAiEAoxcd3V6kkLi4tIf0NusPRa1RhDtnpXo%2BPZAZ%2F246sUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDPHbvzXVR5%2BCCpSReircA%2F0hudTUVduT4Buo7mYVHmao2w57TSNstMP5NtccU4Bcj8%2FxYjJR1xA9yufB39gxAM6rAgr%2Bn2zMbOF7Dt9mVtEgPJTuIXJelfF52qo1BOlfMt24caTyVcUrbyxDqpHdq1Ysiea%2B5LSuSpSrzCqualh4pgptz67SGl2bWo5E8sdzljf2taoA994eR1zaOYuJAjbRSvB1urFRoFyK8lvzy30yPnF956zjTDv9AjhZwnkwiIgIYlcWhGY5PQMnQBQdCM8vjaSaCvO2xFVWS8hsa0ZCWuaDt9eMFHuc9P33vc37hU6LIRdYFHRcL%2FBVb2ULS2y5SW4TmA5LkoJVCtqHvVJQqpaPs5dXpDYaSZGdP0xP9plkDxdt5DDgIzX9SwYrMydqy%2B8Nm9ZzqiVIfaZAaJRfN8LKsdxBUQw%2BbkK1ZIdTpSYeGXaNmetduHsHVkTEAJ3JkmAMKa4qCLLpnm12UDAvyxD4CUd10nWFYFCHYzprL7yoitM2SDjRCF%2BbZC6QURG1rdZ98X41hIsq3bDHhFKAB94LojGSuuxp8YQyituaeABm48KVLNkEnjulS4f80k0uM0k2boJp4utu0gX9IpJXfi3MNxz1Y7CZK9iQY%2FFh7Tiju9PHhYjj6sxCMOGHyb0GOqUBvlgZGwOd3k9Ei9okUNj0S4wK02k8GQi%2Fy9oN2vQmTUXpJh4QYgFCDOPakTaQhW%2Bxp4iyd8rtTczTM2SWxcIbc23fyLpJJ98a1iF6f3F0t7BLI6bxkjf%2BbDNuDJjG09eowu46b07VbCywZU%2BJSgAXECv9tpbG13ypdYrGE1hnyPPw9r8VaV9cFbkt9nFi6QrtG5AW6XUkOs2JzJ4sjjhbfxh%2BcO%2BY&X-Amz-Signature=52704d5862341b2bab44ae6da8dc38db550e107469df0a90265f0900b45ffb46&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
