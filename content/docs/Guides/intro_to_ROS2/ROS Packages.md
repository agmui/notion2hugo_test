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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=ec39c8c75fd1ce5c491c31d8e080c31490a6e4754e931ffbbf63a0bb48dcc248&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=db01eba25d295eb7cd00067646297ff70e76514a8b3c50c978b53a15355d0d87&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=dacb3cc66550a5635022411b58047d0c554adc46cd08bb096da4b15f50b53faf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=571395d8b14274cdda65087786d3af83c06aee420b3081ef6b7b24b17161a396&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=050356b3ab624dfa3edd8733ff5b0e5236f546ca63db912d7044ec6380285be3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=09444c40f99b6783f3d031106ff16d75af2d20b70b152bf05aecf89bdba3984c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TRYTL7N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICmXBfaDNi%2FNA6E0nOH7Vr%2BoYfN7%2BhTErm7A%2BwlYrfsaAiAalOY39suAP2kQCHviFfwYbayTpNnkbEXCBi3m2BKKOSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWBPHIjinKphIGH3XKtwDSXyyeU3qcot%2BV1FX%2FHtNlNR%2BGcLgxvr42boK%2FHmC2OS8pGuFRTHKxzzR6HhmurCsxa9hQTTAY6TtWTD9wj4Z6Dtlb7rkZUrUtwp8JyLiZDoW01xZUjq1F%2Fm2FsqeBLCWSPQw6%2B7tQ5Rl1iX10aZs1b8CqYy%2B1fVuhZR2Nj0U891t9Oqnz6QPs86b9LBHVYjzt9rQ216byBDPKdoqEkoE7kc36Pah%2BBodysjQnfapxDNVx93OOLv349ajvZEailpTQkRXxlr0WsxjF1Qme%2FQNvGPHKxTJNjT02OPjv0IewEV%2FWlIR9GBa%2Bm3vRTrKpdPs7LyoGeNl0VS4T%2FTIiUUlMSObgKITSpClD8rfcre3T0mYePdC0Ba6awd4bzREvbvEEKAZ86IsQvY1Om7yPuR%2FI8tUq0vIT06fzLVxqGM%2BmMul9W1hXtHwDrb12c4ogiqRrbFLPjavKGBUWDZCHP7qfP8k7iFc15I3vIzPzxb1F60ZyNAIHsc2xYewgTzPQWYNPEOPIDMAuFQS9c9OJIRcbsCzmuNTOMT8kjzlqUiTy934Mxc9gIx5v2ArL0eoUy1PbrQN%2BIIbWbmTCss7mxVOoeWzGpX%2BHkZ971aKk9E3ufB5rxu6%2F3VNviny8T4wk9KQwQY6pgEEXxlCYa3x%2B8O1zOjYqFUWigD30%2BxfGoHWo%2BgbluIVbS%2F%2FjO6AZr17X8M28jDMAGpO2hTb%2BjhZCksBnEdxlWrp0ZwVNddhPl%2BBWQhyXx3cep367gFCrX%2FGjVQu9SpIMsW%2FJLufI2KisSQe0O1BXphwKeW4uRzTQ1f4lQEnHVdPOGjYJPDiL2O%2FbzRBt5ribLhVxQXUdzF3sKOK%2F7x5Y2BqA5ml%2BBHh&X-Amz-Signature=c1ea7684e7938f823fa27c47e348de8b0255b7bf52a8185bcbf449a61ad53b16&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
