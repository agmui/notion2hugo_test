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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=e04d2bdf6edc2f0e0084ff7092bf68e4b50f843f558a5b502f4a141ebe643195&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=6ca297f2906569227db0e25b8759e56b25c7b5a092fa0af686c38ee691eb9d03&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=cf7acb8e32ec24c1b1accd6997036a6587e66877cece4ed33e5c81029bb3abbc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=a2b050b3b96e337aef3f121e088c20443dbe947a8edb9f879567e97f5b2c0f91&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=3544c2be59c30ab2b1bb5f5cd469ceb9027c4aa1c55561a8b6900a7b94c498c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=b3b6b6c6d7cfa8870b9cf6dff59849c81c652bca78418f2cd2b7c920f9b24ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWACJMY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEBB6cdxOpxnix%2BQJ6Q%2BWfaHcvrRVqY8bV36bqQTrCXPAiBHrQly5zm%2BoZOoO%2FcHp3JrgSWemaQfq%2FtV9O2NyXsuziqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZVV5HZZAJZL9QQyvKtwDslJOxeeJOmXTu8HjIVnlbDWSp2qMVss%2BOo4d0hxghD7eWe5nfVSTjD1RXK6ZK0TdiTZV9POGl5urgmgNPSWkoXq4vEweRBXjagzBNn8qwVKTDNS%2FepbvG%2BZ2huHT2EaxQaJOJR4A0kihlzIx1JPaSUrU44lgFrlbkp4GUwIC1RK%2BTIjHqaJmr26CNsACWzGFxz7aUUjQsL2PYbZlk08Qo04MIIzyNPIedya3Wy%2BwCdMRHOTagut2y7TiKt9R%2FeCTp%2FYYBX0NoTS%2FMCuQvaLsVdLZ8Eyv28IXbatvsw0%2BuBRuAYKj8v3UqyIUwBVR5zE6A52YwvJ38sftwLy75rE3tXQIPq5OXuOC70Ci2XksHj0vIOo8ZSMugY5gNlTAXhoo80eCko0nJQ39EImPbDpc2C99ZcVYvO42dJUK7L1om%2BEnpp5K6UpcivogNax2U46HH%2B6AllNqP00iJBXfYy9ANqxM%2Fzm%2BN5Uss6qlX40QNtVXZGmA3W9hOXCgR3yqhF07R6NpgagcwG1sISCAp8GxBtPK%2FeNQZviXLBOmjQB%2BX%2FAeO%2FurxVlOeD8hC7AF%2BmF4R6EL2ojaTIuOu5bKqEhq0fTTWFJxT8FS%2F83G81vh7l0YTSWEAi0LxyhL8%2BYwzfnqvwY6pgE%2FA7w7eieUVwzjExHGOwGelF9Eojc6svgK3NKtfkMe%2FO2bUfxTZ5%2BbYHtOdDsnPz96fvo8Nino3Arzv%2BeschDCfwgNOHeBy8uoJt11ZkIZ%2FvlPhNs7qi2%2F1okoYGJOGkFWKr0CmQ0f4SeyOedIMqc9JLqrlvmIIcmF1vL4zy4vgpSybqkkKcUCbrb1dfmF%2FVYwEDnWmOQMXq7rus5qxf0qDNiDRr1F&X-Amz-Signature=de0c7feee6df51af69b59f464f5de8528c84fd860e8cfa4e5c84af72fdf72e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
