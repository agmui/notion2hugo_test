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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=403c12abe85abacb099ab44bdb354571041f89d5cbc7395c18a4c1955391a3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=be079d8fb607f4cfa8792d7b59e40e05de09f7cb5a5babbc9a4c958d62925c93&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=b1b874a45468f9337e47d0f0e4bcb9037dfbec2c74bedff7af91974b959cbb3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=a5e5e6238c714e90f941ab18de2ebe4afa1a46114a88598aaa2e0f41f7fe3519&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=06849b140bd5a2b61fe559e7736107f3ba9e4e2a4dfcdc157f074cf32af47e62&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=d3bc442779a264a918a57d4a0fe617d4982c3da1f842606e8ae4a020a3d4ca1f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLP6EVOD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZNwwBdiPD3ZgA71og7%2BqMD7vlAeXvOmdb54YHjQ2wlAiEArKVMlRg0ZNZM9f3IPZR4yy%2FI69GODsZQmYQxA%2Fa0aSMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1ZTMRE%2BsNo%2FG3%2FircAwB105vwHiG181F48JQTpCkagTSoNL2GsRJE8MNLA36xlklz%2Bo%2FwWgw8%2B9dwTYZutgNTD69%2FZPnkxNQfDSCtY%2FNCDH%2FYwcxX8%2F73XLQ3mT5RR52xuJz4hMSAJ4izsIPPv%2B0pz9kRonCnu1Q2m1TG4hxtM%2F8Rn4x7srVll8w9AtJzmpn0JNOj%2FwMRzMX4%2BBzeffBDa5g8dkVgtPLrxiSEypTyRcdhQf53J6wNQq9RZW78tse9gNrC3afOrQvj6nLxeUTj7qLfFaG%2BlaguV%2FmU8WpBfkQLNTw06XpmZRsbtZSsZ8azFzMBTndIaDMqpd7cIWa8kH3Yc7Hjdj9iTY8xZ9mh%2F3WPNjvT%2BbQMMGTCzCNtuoEK5PTn47VSwEldqVdPWh6sdQA0yWAbx8on0RnX1s2WPxCzoQ%2BvP%2FqQhkQNNIR%2FjdAHIDs%2FVdv09u65kyCMCjiY92SS8%2FMhPqmYByF8IKdve9evMhtElmfv31IPoV7M9BYcVamAwM%2FNpLejcUdkG0UX9mxK%2Be5uXTWegLVg7%2F3s%2B%2FbzPAfeejKendmI0tQmF7%2BckRdihgS0tbAa09WZZ7qqSupyPZdEVddEt4U97n47kaqVvXzyAp0ucsXS2zdNxZphsqLQf450rVlbMKXdrb0GOqUBVrhe4z4fR5eAU%2Fi%2Bt2NxscyP%2BPgcs7omrwUEruTZ5WTixzUXlTnYAa4KR1q83nYRoNitvgo055mbsreFYi1ScWcSpYVVhKnLKYFD9ES%2BOEPN4sfp6UCL7WG3IxXxbrxsr%2FEUJNGXkLhH%2BJSXG9coEZqh4aym8VhlZaazggyIRrXoycpI4GUMqiQ%2Bzayj5vJ1MYvNA7zeKmG5p8xPdwSChfQ9l0D8&X-Amz-Signature=d04ecd48706858356fc330c1f03e2ea37f18d915e99ed7c6f352abe48d87e3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
