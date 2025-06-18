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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=c1db43b6013bfe4e08012b643f32d88e8093fccdfe5767358da08ffdf0f7a3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=87becb2fcaf9f684fbebd3228a861a9937cb01255fac5678508637bdabc9c59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=b2a421231a7e6da1800380a4876e780545faeb631330fe92592fdd7c6862e75d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=596007a45c423588c2e69fc31df093d2f9db12bbc9b6353d42025109a5b2d4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=4bbd77e9aee260838f0325f7a732d2fbda323a6e5d7778939a9de920e6170871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=f4935e3b1c38ec3ddd1f814d4b8aadb7ab061fe8303c2b6c6555ba645df379d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DQ6KJHJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcLeH%2BQYKUZDLo8Ud7UmWm9dTvsGYrjgJyD5Xo3QLyFAiEAnFDUnKXHz4x3857tXLicmHQ%2BGyE15MUQiDrICHfPv%2FcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDJmADGTeEZMlXBGircA4Ze4rnPATT9TNLmqQGI5k1beizD%2FcQ31xmzy6OKDBnzJSw5fBWIJm049I8amTw67PbOUtE1Joits7LQaN0ex3U8FS9eFGzof5bStpdiJacjq7Fxfj%2FtfuWbAvX7mGs41BH0Vn85WJw1H4tim5raE%2BnT6JUEiej9YARLKKVf7CP4ve6LBhXi5w%2B%2FocgqnFS0oGNxqMwhc%2FZurEClfNgwNcT7D3Z8a2%2BwJ0LFQVKWVVZEj0Fqv5eitAhduqXpn3kQQV%2FMrW7Z7xvoxRLZl9QjBMpujRmk7jAk%2BnOZ5pEEMCm3QiBS4g%2F4nfyqQYx98lgfsKU6Q0B%2Bf%2BIWNlbMTAcNqoLECQIZd7J8CIphIqcK0TzS0qSn7vaOOTfUVn8%2BBTWp8T7ZSNKUtos1AglPomfGIbnweTT4M%2Bg%2BQpfKb8HwXOudPP3chN1euFLtUJlu20CR91Jix%2Fr4iSjNSmd7VWa9R%2BHWKdFkgCUZ6zEdn15Clj5voOXwEG%2BiTHYpTrjv4%2BCpjAfTvBLr4jet4hJhdeCqpNn0u%2ByPqPr3MKlJw4QtjrtDUZ%2B4SmJi76Rfp2qr0jUs7c8cMusSpPPhJuh9X0wY1H3jIBoTtyGoJ%2FREwCLg53EKv%2Fd1MF7KxIXG9GwTMP37y8IGOqUBLdeFNjwAeU8bHvYT3eeBbb6dccc3bEz%2Ffm7U6yEYmFBLGdjI%2BdP7kmI6T7LwCu4s7RRvVDjO%2BXRqqRyjwo3G%2BB52JvulpYrOgyg29Xoj%2FWwjzZnQvccj6pLzAoanXkgLRbZZn85EuTW4hfuaVU%2BJUlyH114IuSz%2Bb2NaSqMXMKxqu%2BdM0b%2FT0g8N2EFCm73S3q0RDnpN4BW%2BNxOe28v%2B2R%2BnXwIt&X-Amz-Signature=651a847eca03237e341298a5f7f04fca20f13d6f88ea76cc398b54f4dc45ac24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
