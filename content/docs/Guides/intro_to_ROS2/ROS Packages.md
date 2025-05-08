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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=def15ab1495bb55fd3d53c9eec81a4bf8f792f8f693f4c0391dad6667939e5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=ae633d7793844bd06047e55b65b445cb9ad942d3221d43249206de3955fdce25&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=5e7e0099d72a6b145a0161821dac04baa98b61de12ed949e8601b168af9d0698&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=7df24111c73c7383e0d68f1035afcca0301b59c4558792cc75c08622b8baa5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=e4e49d393a7a82ab7d2d2542a5d931cc2edbf4ebb40661846738d0b282c81f84&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=3dd6f87c1753c9a114e0fe058d0403584edfc27d5f73d924bce47b73252b0cda&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXOYRC5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNULZ5Gs7cRnYLD2tqFsBpi%2F0CBbw%2F8S9EE%2FI4LzaGPAIgWr4thFJQ%2ByNLlmu3IjDNffKuDCD%2BiGxwMtOeXJK4kOIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDG56bVJ35zMnxXAqPSrcAwq%2FjAFLgp%2Bi8yESKXQZhcSlkZFNY5ZfwPrf%2Fd57P4ntHuEYpe2hWUTAQV7dafmXqnWHyzZR2VIxzDw6a2dIPl0XNU3XbuKRU%2FCqf9U%2BLNe5ZbBPqjF2VeF1shLxs8nVfEEdGDH9bI8gDE8kZDXKDqTcIxgDQBv6vbHq9Od7qOiPri8FLIBecbbSLIPfhMtRpPSVwcBtpvzQx7%2B6YPI0TT%2BCgrSBv9D%2Bkvxox7cx6EmpKua7aZA1wazPNBzYuOgLRLCfjbukO3gliNsFhD24Da4NOeg37jADQOzJmgzf77LLEADaUNQcj81Yag6gVYdh6QdQ7JkOPhdQSGyVfUfX1uCp1bpNjy7eo3heaZKyQuNjB8iKMiGyjDK5Cz%2F7%2FI%2B8%2Fn5Is83ifJH7H%2FkbRQixziLwbsm1D9ekwKo%2FvlMoKlpQy6im6Azkh4yLpFZtXQy2L8cTCXPHrMzgdDH2K9YO1MwZl5iijz%2Fi14Q5hVkUnBijEEGifg%2B3kGLdU9FqE6vA9NRQI58%2FpDRlz0H4ppAUNM8E%2BLPlyPHzs92%2BlXe4yEZ9nQy%2BIIG99uhg3B7RB4WsT%2BWt9REQGH2ZwyqMiKPAdiTZIgIR1i7gFR66WXtuwqFhoWhEKkQ6Sh%2BJKpdxMO%2BU8cAGOqUBcshpcxF1EYdch6pY7lv2G6bpFp2Nu87RPyCLI3Q7OFDbWdL%2FklUv0zvR70Yvk9aO1RzYW1Fg2I%2FeGDhHtDR0SelGfbF9%2BjUZtGKpWtw1tKle611WgDs2yCuqaU96aukaYLfIi%2BxFtOdY5paLKypTZqWHkmbCudtzSxaX6wdb4TEXl9JL3hamO7Kxzmxd5wChVAmgPI2fywik7Ig8KXzZiUl%2B7kdT&X-Amz-Signature=15d0c996cdd21558d0c9f3ef7325b93a8cbc90e4eda752f6f7380c131e187e99&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
