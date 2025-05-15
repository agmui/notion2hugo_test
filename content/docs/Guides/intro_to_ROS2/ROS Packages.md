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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=de8b4d463316804db5abc751ec7d948d506c0416bd7cc2735c6401abc919fb7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=742a49aac637014e6ec664af9e692cd49fd33f86f98432ce0963a4819a22b08e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=115c4c55477282f8f3be0e640cb7c7fbadc3b8f822670c69cec08b9b84292e61&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=863fd64288631caf019bdd12a12bc4a782acd780a23f699bcdf59830d930a89a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=000362f9ccc8d38769434f0ec0a5b7aaa3aa008802090011c26f13e6d232f057&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=022e9e5d83e658ca2e5773a428116f6d6ab9ad5ba649018d511f34afa5338d49&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UXRBB7C%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDVTWy9Xazw4RL%2BNBWLfau9U7W32Q2n9tJX7aig8Qs3gwIhAKmnS55oPz9pQd%2FlsF3Sqv7iwAYOLB1JwH3PP%2B4%2Fj4%2FkKv8DCDQQABoMNjM3NDIzMTgzODA1Igwxnz27MP6%2FOkL93ooq3AOEi%2FUmagGPWXqCxEj7on%2BUhnChUcl7g6CW4Y5eU0rxAfqCRTrwWZlRzClVmEjWWst16VrYW9cI2dc%2F0uN7cjiWAofphl362PImnob1UJgF8SKqWWYFipWTgxe2WrGlzOpn7dVBNu4Kv8kHPcJJRtIljL8bQppvUtzOIhKF%2BVlbNFqst6KKMdwkfBsUJCZvKIAW4HMcZ1nxCCWG22Rgg%2FhPpwOF0OwSJYUx%2BGwhN9e99TNG5P%2FVk2aiFSL%2FBvoLnqZ67cT9tXGI6AjJzJ%2FFzRJa0l0szg%2B1o9rEhJ2WWRZzcgzj7m5yyR05aBDrpZO2%2B9%2FGZ5dw2zlP0jzXdzZSMWml2qHHwFS8kij6XEjcx7mwSxm0pllAbncN4fvZ1Ip8FgXbqOepwZr1CxSHI3f4yaZJXf4zP0yyt8be%2FYjDZE4KrhBM1Bd7p6lPYsCf9Spk8Kx1U3r5neEzh%2BwrFgmoDkdE9k7Gqk1x4%2BDV%2BuSZlpBSmYdUNXGfWJp3RWB%2Fp3had5Js%2F9s2RqJo89vrhP5GaCV3gdirggHJZrF3HMlIau9Ose85wDUjkpv1Fu0twf73tTmThfcGWe%2FeHz3ZAD6Gtx82K90yUB5NKhlKYfyyxFB6e2sbFgE5iTrKawVA5zCu%2B5jBBjqkAVH4WaKm0Lq5zHxd4mwjJe2NEs76sXl%2BJBaOh0eXt%2FqBHF2d1TKn4j5mvOrYC3ONTb6%2BTtcRVJBfhyV78gp1Y8Qt%2BwR3qHQecroy%2F%2Ffo8ZXIp5eNip0yWM%2FYSD10FlxivJkpQf21kCxH%2F4LhwOYy9CTtLlbKt2iT2kw%2BaYKMYUay2B%2Fik259yWSqHKEY7xXgyQ3OFfmpCxiOKCrWK6PGMc8UNzex&X-Amz-Signature=065c48fca8c71e7d7f7bc64a5b744e6fdef8273518df12dc937d43a0ebbada67&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
