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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=bee457253060f1d7afb2913eee66ff0442f87f0cf84533d462142b3804fa5f52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=11ff3cf8f8cb972522f4dcdd731cec4334a41084e14554794621ce4f5cf6f771&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=77174e194f2f30ed726f8eba2f38f0c40d1f3af9dbdc2d530898f508b80acf30&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=81c023ab70bf32dba38c947d717b6d9dd4f121232088e8c07527a80dee4ffe2f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=4bc545a27080d79092981c5cc93b679f1f3e803e72257e131a268fbe02e47998&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=2851d9d4fb137f8edf8835d29d49c6f8dd7cfb4640735839038c140c280c28bd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZAAYLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDvNbDB0nfmX4i%2BmFmaJJu%2FUBjhv7x19hyQOHU640sAcAiAc4SnfQijqedw4hpuVai5uH84iZA%2FNxFn8frlZEroPPiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBk2Zx%2BiuR8OTiEJfKtwDF8eZiqyNuL%2Fb81ajpTl4pzPCT3i9tqfckTnrpN92yxwzQgh6axUXlYX6MqiComxKIGK4nA9i3eQ0s%2BxJtmGoCR%2BcmiblDHV7bnaHRexRazRQQijB7RF0dvlvOqk%2Fz5WJNrCb7OHHAERZoqdSvOVTW2wqaaPyCJPHuoYht1yJmz8YaNQIHmjrwv7a3iEiTkrRxx04xtjVUOoRw9iY652l9gLHzM9sqPJ5LZ4KTghNg1x%2BT3T1JHhU3LLwp5wklN7pLXkGgbklnMuytqqih2rzGkInlNvvkGH1iEmAqp%2BGTiTtJW1yEA1AGT5jo7QMQMm9QNGGQ3xxYP%2BBfhMZqELoVsyEXNgFzYbhxj6TiWfbFL26AaR0eMjBURSojKCWfaiy4Nbc5ApH1fuAhmhuih9iaabQqWrM8WEVUGS%2FtqJ4wlzex1OQl60sxAX6gfCaHimVp9JGWuiCDvkofVQfJYOu%2BuW3p2xlqzxNvjzd6KWMUPltsB7Xl%2BVanxQ8M8LPPah02dP%2BV8ocJdE0GR1a6Qwgc%2FfDYJdzCdZlocyi6lVtU%2FEH3hj%2Fh5b0WUs8qcez6rX1TY37gaQ9uOuxBSCnqjEBUVQhLskn4uj5DNBrA3HAjiLDvNrMLM1qgMxM5gow5oTywQY6pgHVapMY7wJfKWmGTeetL2L9aExwPHFikOeHvskqm7obzGYxkQM1o3vlgKjUhjAEkNZoD5jrea4cz%2B2TqQvyeELymtTrorEuqtzpgI%2FCr8nwPp9UR%2BPnT2%2BD6oeBh6MO2yelSa2FUlyUwUoE%2B4kDkcpbSVSE%2F3EI43jTIy3l0ajolFRwyeIPrqe2SO78ln%2FO5wu0Rhef1sqm0wFBQ7wZfOGSudLFFWl4&X-Amz-Signature=a527e4f466b6e77eeba82dadfeca8f31299048e5e95bcf7d2788a4019e373723&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
