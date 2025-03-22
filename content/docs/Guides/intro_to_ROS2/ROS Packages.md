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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=75517a89ed13fec333c4adc10895319f828d69df26463ae0974b5733063d038d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=9cab71066c9d440ff960a33defde4077ac724a2236a9ae90923180f1ddf4bc79&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=24c84f9ac0cf4d63cd1a1d34931c9e338b2c85ad039b90ab8b1c224544cf8f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=3b12ca0d9841d81519bc242fbfed1f7cdf3ee29bfbba1c6b2c4e86881b984576&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=2541892eaddbfa08cf4555068061a47e889639c5af80a73ece02de4d4f1d80fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=0ffead1b92bad89d65a5f16c9429d8e240cf0699dab80421397453dda39f5cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSB4QCQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIH1VklQo1FFD29TIFD2%2FIzsSLn5rG5%2Bx4%2Fqr4hBnvbn8AiAStSPYTQmtGlRS8VKGsBbvfGXQFrVSzuwrpIhn%2BwFh3CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeEsT78Pq35YR3HJ6KtwDMjnj9ODYGKgHgzgAG%2B3VbadC8vBXzYguV%2FKN90fcVmke%2BjgJnyU6OljHJqRzRkW%2Ba2XxQJu4DClRLBVB6kLEHSyh1cdHISyCcVOMFE4TzYBc9x3t3BMR3pCi3f1bLN7LYtAOVqzRhcXER%2BUPpqz0WUq%2BBs5CzFvSNDvoTG7ksG%2BVHAuDoNL86FvaKZ%2BZ9gaH%2FVPjFB9KeS7g5Imk8DT1SASeXz5sIUNyf9iqnjpMn3p5pdE1M53%2BlNuvKWWbvclTBV87i5k1rdnLTZ5O7dogbvtX6ND8EV40jBV7v2ck7doCYpQnfB0BNj35l27YPEmypgqiTVPlkBFW34P6wHLUIY5nqkgZre2pvjkFWMliOVX4kZdEvGBhxOUA8GiSn8sEt9dBQ1ZogQmpFXO132Rcu3KXALjOHA5IcIDSsw1dYZKxjdBTzJsw9hfQR6DDqwBJczOLMcz0kI61SOBBOmlYzXwgRoVWr4N8ndnZ410jQ%2FosL3Q5DWRcs9s4Y8fS5f8P7jw6IY2NJ1QsQAOMf%2BXzrVDzJeFwF25ryX6k4uAXyp99V2Bz2QVt%2B6zZprQrViKeOBUMEmMfUV37xmUf5CGRLUe1g9lhBvDdZIua19R17XDCk6UE7avJsmCWg3Awz%2Bz5vgY6pgGP8dCiNHvJ92nNPYLdRQ%2Bld5R0vr31beTtOKVbwIe3kxvePIXI3LQRsOJdurUGIMbCiZgnxwWMoDEfnZwjRZhyukJtvrXWfNkwZNibLQzsUPCSqxvZbLELpt%2B31csFi%2FYv9N%2Bq7TnVAJhaC3GH78pifRrrUuMEOvsp1AqEwmqcK0cq7cjEPcnJHKg0Kq%2FpHtXfCRoMjJciqKhQvRT3Jt4Vm4ArGU11&X-Amz-Signature=c20559bb89a8ec0c8fee409df12323acb88f61ac0f235b6b253cc76245b6aad6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
