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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=bcb2d6cd4e9961436a2063dcd43f1d9e49b013d8aa5cdc0b8e8863d714c32144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=8964bff9ebf23c9bc1a0f33d5386378cfe4dc54ed53782f0133e3cba639fd1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=0f1a231a96a936ccf4f4231aaa70ec11a0ffc54915dec47bfee3b73ad0196b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=f0e2ec79840893dc52acccd5b542a056c028bcfb016dc7015b201dc7f1d88b06&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=28a0bb7cdd71df9a2a0f2c4c981c646b01b40691d2d7a107f03080bae9cbef59&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=5e3afcdaf36ee2659c2db5d256f711c1e0a4e93e7359402e964f1d5863472ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5E3LSD%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPyT9hcPlMsdFcbp%2FYUSq1Hf0SqyJbSbxEAR74JWTNEAiAvgJv9S9geAbo7EVTeA5FBFtdU%2FG8CxsQH7F17EB8RZyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHT671eZdRq5hM2ltKtwDjtHi2ham77fFa9YsTouYFQdxh8BoJm%2FT7qdIMBFE5tD3atHypU2t6KXpQWHQ4tEm5cDVpyhdsNJhBJTeD2bepYYHhP%2F7Ry2kIYgNXL7VPWZV0I4wsOtCMjtXp5wJnQEudbggN6xICqpgTa%2Bfv1Z1wd%2FO8n2MXQ0xxsokW7AciKItJ0p49dZ5ODkH83FA0ijT4deJheDl43UHCcF24BAxtLFhLduRSRe%2BQkJZhwmbV6ifGfySv%2BRrqWCPOkjgf%2FriwZWRKH8q3gsAshRGoLpCGAgl4tN1eywGJ%2FpRCwwE1gYGmGWNRh7FZ0Nsczu8GZpTVW2OdN8AhqNZSO8jmUpj59%2BpHa%2BpUUpkiNjy2LVnQU5tzYNntP2jBWeCew%2BuuDS4zFGfG2pvRgwdiNG7CSiVuHT2%2BaE83PT4XZDbatYgHH2kHygqv2L%2BsHFvis%2Bn3kwf%2BV2JZyxpK0zaGYiihnilGSW%2F62zjzupWm0Q1Y770ostOALBtEci59Dx2DrUnmJS08lje9ZmRElMiH%2BmEXMAVBlg5PMAnUNO7edRhtMW0LQBHd4iMSYzc7L2Y8%2F6gNJ8vikfrj55liVxMZ78CMkk9mj63ZOPJNKtFeXFUe5qjGN7YUCs70BmRSKOvrIsw3smrvQY6pgFHWMead8QX83MQFJagKLMoJtWGl8XwCylmdDeQ9aYD14tTF4uK%2F9mEGVB5tAq7DXN8i7sv15rXsISEdz8YyGMwOydVEzYFwWV5ZrNzjcXrMtoOtkBv2VYKV5W4sp%2FPps6TuekGawdPKFPemVeiKNeFOuc6J8FGoy7pKNol9sS6yWqC6%2Fq8B79T7CU60jaxlkzeWIBCE%2B7XT5MO7B0Hw9elxGcag7K4&X-Amz-Signature=8ec3bc64165a62977abbb35a541c1a0c2b93d1e02bd4ba2ab895f7b36b9fafd1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
