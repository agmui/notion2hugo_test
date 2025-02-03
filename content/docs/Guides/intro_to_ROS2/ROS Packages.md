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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=09f9ed396eee5a4c99b8224725650d2a0681952c729715f2f942fa7809a4532a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=229d30dee3925b9f5b7a11b65cd06829114926614ee74eea808e6de181e87c91&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=f7db68440b23e4ff111854d0dd410c763f160da3cba4d2f6e8ca250fa523c0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=f7c2eecc6a102aa4dbf0ce87e9ec5a7c88ac8ac6e8459b0ff96c600dc76cd9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=868719e666525488a90872f87e070ff53f6c24468b6b55aefb818db02427b6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=76ef0c6669a0ad53d7b9ef9c298d4ba54c54b3f44d05248a1245b79d5fe27851&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QTICIY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBIdmf%2F6SNcuhlymyLdj%2FPGgQpMDuyT3u%2F2Dk3bTFMjcAiEA3OSmDBBQW2vb1jJ%2FpSxekRknwylSF0y09CDnmozhNHgq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAbT%2FYnlTe0Rk71IECrcAyccknXzUF4kfRxoAuOTgGy9s77hCe3%2BWQPff0NQ8fvC9%2BeyZ2WH%2BfalkhT%2FVu71%2BpBYCxwhKzl4gFFXe5KaBelXc%2F4hhEpuVT3GnmcYtg%2F5QQ5deNA49NFQAb1s1hoGNeBkShZNZuwk0VTIAHm7IBfQ4wg%2FVAhCcrPW%2Fuu7mXg0Sj50r9cE2Nen66vdnlO6sauzUts4NKLjHHKnAtoAX6wJEX9kBC4zYqFdevHWaD4UIs3sYNVk5k1n0GxEbevqFajFZWC4EdrLQqRbaQL9sNenzzqpzvhvb2PV3oEkZSFD0OPhMC4bJdYBYaIySt7gC1hIVI%2B6w4%2BKwMwafEPASWPwt3crQC18vZGz9Ot8QylcjWvkUkMpfiMm%2FYdE%2BQfE8xntFjTeR1n5HzL2kRK%2FddItDO1KX%2FfIQCA8Tqy8n03rdjfGFRuZjlkECK%2F7iQCO%2FpO49qeqpiLfHKAHzFfDk7zGlJ3Tjey9Z0tDypJOus8A9kWObYsun2fT2h0UtUj8LZq3nFFi%2BzkXn37bMQa6B1ZMANVFqVECvE3g1VFc%2FqcOfRdBZfAQiGYfIIvYHJhfP7fgkqOYFOfUm%2FQULQcaKdbfBMMzkTx64GFuP6V4fUi6%2BqKMNAmjjL9qmOZhMKjbhL0GOqUBL6va%2FH88vDZ1lOFDvwnd2em9R%2FmYOerwk7%2F1cJJJth3HYJy%2BSeZsq2qkv18WEouJmkbL3GhaMSzA8NMcCj8IyXb1YMWnsOK9n9upq0Z%2FFjhR0u%2BTNKk54P%2FFn49dm09pj%2BOm7K93IsT5ZEfGT5in3CxHQ734NwFFcDOfM4UWBowlAqjoc06XrA1hLz4rjBrOFwcIDj1mJa3gV9fEoPdhhT9E%2BOE5&X-Amz-Signature=53e0f3cfae892ec778bff31a7c161f4ae1bbbb919648dc0dc5baea1da7684ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
