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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=fb588a1096b6982f966c93d64a1c7d67a3eee1bcec75d48076c32f09c477483f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=dee8df5d26c83e1f6a863e1d4eb79d3d2d25e8dd1b3761197aa54a2a191ed3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=870fe3800ea73503bfbf1d8f956c5057158e381600b1b62dbbd9940c01d401d1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=079cdbf7ea910a61748eb9b6eba6814835ef39c2cff39d86f420d1dc1daee741&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=cb297c71f9782dc9505146aa093d40d55914f1f1cf8afffe06a9d6fbcbc73dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=2134f9256ca031faad81be832287a24a36e9187f114a288463dd65e3ad1ed8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5LDMER%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIA1KRepDz0xurH%2F9x4dax7SDykdQYTACSHComT%2BeX%2FfIAiEA9wzQ3I%2FmW8PZhYpqnRDYtKtWPmYyiKAOy9Oj3g%2BEoNkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHsVRclZVND7thZbDCrcAwovpXtZyWnqyIU48a31PdtJnmGg5lCagbQgiaOlMafAPkddBWc05Tpk2C3vEL4mgWyBoW1J3ysaV5%2Fvo%2BJnrFblPjAlW7cXMbKGCi%2BOw4uNAMMYnRD%2FxRHU4zCPk%2BgqySR2PpG%2FinPaThKQu23Vw8gw1sv7LQTCre8ntT%2B58X9EQ%2BUZfB7hKX4D5RkXhzpw2zS4gypXHLj45MIzvPa3TrBkCALF7KWP8PjGN2c5knPfi2k7X3SPFCViEAw99fZEeJ7n0kkP9wHkp8Y4dD8DDQOEEyP0ohj%2BKYyTN0anmkgdzYHpmqCfVOZCan1DGbOYfP8QneA7slHW0NnLMjQgHv7PJ0OQGXe1ODnTkvQbO48IxEJjUnueD2CYvBWmOPq3flF%2FJFx8Qrk3GZl4JCHej%2FSsmOns6P6tq2EtjefFthfnn7fwg7aOL%2FlznCLRHPoxS2tvXmXL6E22E1LYfZxkKd33LPEQawU2%2Fy4OniCALdtCQoaJVqW4jOVEyv1%2BdJlShMvK3dpoadXrgUNqepuTkVx0vBHCEPPhXbI%2BO%2B9OrIVNS4f8Q58qk9rkg%2F%2BwFZ9S9KY0I1kDRVd4eHHCKYFoyOzEhcHC8ciiszG%2BfNhkvM0V49La77aps1iMlXgfMP%2B8674GOqUBKQ7FaD40wxlrhOq3FJzYGEl1I4%2FDgLj7wBO5p0o1S%2Fkr0OG8ILe2itAno%2F7gRk98uSQfQ0Jf3K4Fn5P0sD%2FJKvazQsPt%2BOpmLYVS1vW3922gTwD0W26TBru94ViVoIZlnKyCqOAwrOBiiO%2Fs7XIcjhZYznQRjxNsE0fIrXLoupGC9Zke2MocFFyRz0ixLdMXvzEYgavLREwj1tOKQbTBh%2FnoFsmW&X-Amz-Signature=24501d56a47d5148cae9d1c84da5b047b3d928d2c6b97b8b936eb3d11293f3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
