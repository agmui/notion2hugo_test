---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=816b9437dce2943d5fe0ffe829995846417da41758245e91f2c3ddccfcb396a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=27b8ffac8a768c6d648bf5ff335be99e90a8524a1cbc806bb397ad86148cc9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=7291e1abdf06cb2a4cd1f1dbc70d46783d87e221b3b4a8e2dcd8ad2d15dc2b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=429ab72a980e4cc72beea8b8880a96a3b28075cea7c8a0b3f0d26f00d2c0d7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=4e972c4e6f6cbd6efe5cfb9a7f8532ac88c3681f9ef2634fbf3fcf2b2cc31933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=ff6a6c8e8e846ae26cf7b1f0209288de1053e801284486adbf5aa145d9479f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTYCCO5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD2l9UCLq%2FJnlopZcEEJDjfzThU6Gs8ExeAY1Q%2Fso4qngIgFL%2BLs50jIDckt5BYL3Mueg0Qq7Hoo%2FOWPYlRZaEfWjMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1VaGtoXr9yiS4%2BRyrcA0KFKWSmcnYZYVXaR%2FfNJfdKuZxHLna0TpwWApqYiA9p2emOVflObm3m3BaYwLMSCshoafcBJZdVwU0rq2SaMBiCz2IHz8VZ%2Ba3C69FX715ND68GEAgOFqa7VUb9KyLH5TPd1%2B7dyFdp%2F0HjjkB1YfCUpgA1DNgs6XOKfVDIsRxntiLzP9Qou9fk2bDED3UUEzzS83FOjn4do7EV%2FHGUQZqr0eomDGa14fjvN0i5lPn82OAEF5roKgYL%2BkLXryoFLkd6TknWe5uX790cfCW5HfRTurcxGHMpI1EOFvMZJO%2FA4AcYhsmZZojXmWrd8sNMVcuUASOknkYNgD601nIwFBrT8OIJzFc9WYKhskkdn3j6fnDxEQKpXDv0imZHHokl6Gs52%2BMQoKmtrdjRj1alH5fQymQyQwxcTePNzc6JPd%2B1YOG553c5SSZSkmfUuAa%2FHgFsz%2BdbL%2BqG2JeC83d3YjDU25C25fnfqy8xshVh9LhI%2F7KT7AxOOG%2BWc7MAAKPPSabXd4gpxlAltU%2BKftNRAHrx3HmXOSEmm7VekL7Y11%2FZbbc7sYszh64LdajNFoPFNqRPsCUhl9AbAukEG%2BGi5yF6fpbnSW6LlL0sj%2BUddfHhY%2FNh7ToksvxaRL4%2FMP3E28QGOqUBL8Af%2Bxbj6gWS1uQLj%2BT1Y%2BtV9G3AFgOHb4rNUYnEqy3qO6YlYiiLZQZ6p16pKx7OSVQUUDsvGLDDNv4h%2FfCaMDZT8xBbW4CwUgmUXotJCeQFnVN4m9SKuGWguYx8stsIJQzTbOqkVfxJOocbGLryCOrDMXppdhaCAxhRlngt2kPnfEZB47Mzs0i9x25YNbK2AzZU8TtV672DUVHGys1SL4JHxxb6&X-Amz-Signature=317fe09d8bd043fe4d1320e74558adcbc1492d81dcd9ac28deb19f0a5ee294b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
