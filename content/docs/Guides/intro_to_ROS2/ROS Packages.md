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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=b1a00d1924bef89cda0247f86999e004f2fe353bda0f918ceafca89f76f113da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=c57280aeb31e81ac7e95cea5d0533aed46dd060da38aeb09a5ae7bae5edd1489&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=3bbe75ed1edf78ff3df29d7524f93193d6a293cf997f85b813c86ef2b8370baa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=0d0d5e1f3331276c0998811f0a7c07cec0e8e422eb88f44a12749c7fbe44a63a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=2434fa455ffdd9b79cc6e3bda694a8e0582b5fdbab8196a61a1e1f3420d5b9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=cd121529f29d0ed356ee59766af6f883e86913d5a74847a2a06b0dee04a51f05&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB3SJNA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEd8shaFJa3UEWiMAho8VC95ePU62YdlS4BODeMssiVEAiAFmhYqP1QxP8uIW04mbPJ3vj%2FtYAukCdF1YdXU8xvJJSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMZKwHnsu%2FfGCQoP7uKtwDlyXvOlggeT5gh10SLVLLwXC1PRIjarokMCFrFHoQipPRmRKMoqzQJTCDycqUX3J0tkWQ2j9mi8sIMvnA%2B0zk6Y%2BCS%2FSkvcKELjcb7s3QheNWB8LrXYwLBV8Qcau30Lc2ykRxJurt3JCd0TSSEmljaDb0gFczLZKxWIkW%2BCvbe8UrFBxpYKOftnDMmt5O6C9VW2nelt0y%2FPLp7C8YS8MHA2XZChdhhQJjzdBprLD7PoZj2bzBmcOaP3U2%2BOnzQQqptHjBWLuksO%2B0nPZogvhX6fQsTIf0BDsfJ61gwKhDCNto3e3MQ5fNTL9BV98a0vl5IMqwdykQI07ZQhJlqpTnxA0GDi2FDybh31O6Q3DjGtbLW3lIld%2FuA4OQh88GOcOkBgEKlygYfuOueeDY2gaQ8R9mo7lglIJC9FKmdnJKjc4JUrRyGTSlOZO9gP9tdDMgnUbCqWPGaigxGvQRorAc9vP979wcQTjoNiktDh3DU%2FZ5FfXBBCna8VLYfA7oA%2BJ5ZnYYEc4gU3aLZgy0nT0wtJSI4dwkuRNyvfgG7CFXyYbfuRpzGtF3WhI8vXQdwZaACDuqacWQnwrwi88zXd9h%2BPWBmEc5JbWPX%2FvKIKKLbfxhRHyOCMsYEFExY00wn8ujwQY6pgFUAvhTdmcsJ95Lo6UKXLrUHUDcyUdRfICA1OHPU%2FZxAGGGVPe%2F%2B9S9rRUf7FdMBlpkyZV8D137AfBRDTmGkkqBwU5iKtmdLMJb63vXXwIoyEZ1qKr%2FY210Wlxto107RrY66E%2FHhjPI2riD34Oa6qkUQnZkvbNFoBkHf3DR4VgK9CMlhbKFhpax2V%2FZcC4NKCNJQUCXVGeN0ATmBvJYhdvn7AuCv8fo&X-Amz-Signature=cf10e06e0cdcc8ef34c923dd9675f5120432d4dad81403848076f35c95e10a24&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
