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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=cc12b11a917fbef4bdf3027724fd8c25564bc4123086e60bea85ed7856aad50d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=21b191e964b0e10bb1a12869aff6548caa6b31efd7cdb0e258eb04ff52411a11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=351dd77fe33d8b8832c87977b6c544171252a9a52b9dc69f4873831651ec3bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=4f79b0e2c752997b6d898f24745e3ad416af962ef50f2544fd65b4a9e33015fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=fb3402061ef32bf585ea7a44ba0049e4098922a06568a3a33b4472c814b5abef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=b7a1141e8982d51264256a116df8c85d6159e431fbc0d1576fc2c7be6a6b992a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJISK4B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBWTO6lVVsjEOjSsj0MKuVo2D8frG%2FihUMLktvIUus6EAiEAqUADziRgVPOPbyPtdpiR0%2FRqgpq4B3tRw9p%2FKH2IrUEqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BundZB%2FQI0mKasbCrcA6k%2FS6s0joxAousCCmGcvRXIWXpBwx9SrE2dZT9FejSOVkw6aMtprsBR1NlC54uRV%2BhyZNCUR%2FCJ3ndI2LWGWqvBQ4%2FgDgcg8l5ZZh%2FYzKl9FIq5ySkhQYefxkKunTFH4wOTurfRadTFh%2B5eXCCkCI%2Bo6084izdG9iudQllU7LWgaFQ1NFJg2S6dSHGDFW1S0cW3L%2Bxd6Gk1EryZUzujTg9lRncLmv8Gbl9V8GJfVS8kmLW6suoujTZLhFIrAlMlV8AF66DmKcI1oNVX07FufekOuHEENpciCVBzCctf4AOf8Bli7W5EMUdINlDPkLtTO2Y5fG51UE441X3vVbCsnPi45sCCtXLBBJc1u2gyAiG4sLl2xAW8yWajRGwibLVrtHs0EpaAoic%2BkFgh9%2BgytK4cdOL7kQ0Bew3eLTl4OsZH2II0IQ48BRxQ76de3M5DeqCDw7UvyzitLUA7DBCLki0hlI1EB9oFJAsIN%2Bu09uIuGZl1fhBFE%2FJgzNktj51lt1N%2FKYKt3bOQQs2Ob8w5%2FekoNZg2ZFRjlB5sZNG8EhmDCQNiR1R9w%2Bkd0ZSqJNRC8ojufPTLXO7ULB9ENyBIgn2zmSZwWtsh3Fvu%2Bh5ASeXaPF6%2F%2BgQ2CWHUgfBCMK2dycAGOqUBXnOIyjHzb1GRL4Z3kPkUyi49%2FVw7PpbYOf40sDdX%2BXtBoAf2LRs4BmVqIi6p26MT498gnMStEAI3tcBYn2A98kZBudG62qOrp3NpffUo6DlifowTXC3KdrJjwsD6xtZ07hRA%2FUllYqHauMBGOo%2Frnh%2F%2BZ80vKqyXu%2Bti9adb93lPZvqQYsOe69FwKIdiwrbp2mX6DTsuubpdJ0Z0BZpb2h9yPl4L&X-Amz-Signature=b9f60522ec2db019c10093494da74c4fd0a92677e6d543c506f9f750c62fc0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
