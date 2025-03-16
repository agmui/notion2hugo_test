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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=5193b237a5be177978beda438ede845a121f3f6ae34ed2be8e64b1f12f46ec68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=63f572a0857c178a44830d8bb3546132fad0701b66bcd76df7a5cb380169a8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=5fd3797e85c15c07885993419abf788dc7d5773d946c79c8409584bd9d09666d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=ee291d063b8fd0cfee287db56c134255a289144238c4bac782fb1d873426e9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=c126e28dc446290c39d682432daf671b3da9e4ffbe810f6051d7bdaa1ea311ee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=fb904a11b40428e538c1e9b8eb23dd38432ab9b2811b5087d02bf3a488fc24ac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVNLXYX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS9GYYAYRSYtTb9whSlwH4sT%2Bnt1g%2F5EMedzd3F03bFAiEAzXcD2xvAQhLxVEtSRbktsS6gDSLWi62px0MLNGXCFwUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBeCYnyx8Ls24Kv%2F5CrcA5r4MtrQqL9iVhhMq8BcPlILAJRNElUiIDueRo1TIYerQVcXV0eOPRi1gwoKKEUX%2Fv0qga0MLZUQEGXcaiXPjCkkjGM%2BrQ8JS20xftviiz8DaMNqrFcRr2wsvYx7H4sHE6RHmdcKUSsCxcwX5NCuMhGK2cfmZAGXBo8qlHA97vQp7lJFhq945o9XyXqNJiBnFW16p5PYSbXAn8NuAsEbrm9iUMjcY8ekywfLzfk8HtiqJjAB%2Bjwy%2BN5xf19Ro6vhPTdw2xz1O6tRsbuui2UG29tifETUs1kan9xUlbDxoNuXJTFDkmel37fA7ckgDDb%2BbHZp%2FWjv%2F2%2FW6ymd2tpctQOe8UEnenwczs7xZYXtKy1KKEHrERRdnMf00JF9lgNprReK4Ys9gGA6iRU6sHlmGlpfh5AFrocrP6h%2FldicDu%2BBoop6HGT1a%2F72g5n7yPSAghFcivek2eqfd9qMhUnrhKLM2%2F2neyUZe5VyBX5Cc1fDCaUjh8jCnTl%2ByeCxFd5ttehhzYBBkHcR%2BUoeHzWMWjLi9SjDfkpydsckrupwvamfVoxIhUdId4L%2FO92kpb%2FnCi8l0dPmVZx3OWt4t2FTgOeBx8CsqGjqU4uOy0j6zZVlRUJy21IR0csiwi8KMOrq2b4GOqUBpahrAPOV5mvQCxZePqW5jZCxkWCUjsXteCbQHGbcJfHW0%2BDncXBm5tw%2FuRDNjil9BhH0m2dp%2Bf5m%2B%2F67rEWbyC0Vi2Hd0wsZp1dr9uhEyJ6Q4LdNBE6umFnGBFhOP1fzTmiSqQueio1nt%2BuX8FRzNzQ0Vi6pAQHETnJJjTM37CmJeXX5UUCUHU%2BKZkohMny0zz0s1VBT9%2BCCfC%2F5gfPV%2BjxjOSXP&X-Amz-Signature=e52cf4e6a71da32cbc63baee0cad4c5b10f54a50866e7bef0ce7799eab0e9d78&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
