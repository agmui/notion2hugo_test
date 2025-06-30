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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=d91ec43ea405bef29f9f978e2789a15922c78d7b669bdd1116ead3a7d455a7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=e67c67f38c28ba731cfa2f446870d5222afb6fb0e09fc4e5b1040a75c8d74ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=82a4f10434d5513b6adc2f7a60bfafdc5c421e917b593285cbf643f79abf2aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=0c657041fdaca6ca7baf1bcd22bb381c852cff4f70bf3adfbcfcfaf8fa174928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=34dcadfa8720f3738c3dc801a4c175aecb18211fcf1ca6a05ca31c83d8a8bfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=9c9934d16f6e8e52d0e3096e3ea221ac333ab30d0ea97325b21d7aaadd0b8fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWK24NZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9PcWkT4aHawp5NdIFS757jm498nSz0aPqVLf5BKW9TAiAwmychZAz%2BBdrvAQUD%2BH%2BGTvLj%2FjYLIQInNylMNSS6yCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRF604odqOroe7bKzKtwDyYXt6n%2FKMOE7d6pJSXcOUQr8vACcG0l%2B0Yo4CVnSXJQ3UNblLbQxad7JBcO2x4MS8hohCa%2BFhp9aeHaZ3QPMKmZVPXHx%2BopqTZ96qUHibgBuIltUdcIsX7UGmeo07NYzg0YLlDZfX9unNlVxYs8tSBOSfby0in33JLXK9gY4Zms6XU4b9uwTZKMqeH4n77%2BfYKF4v3MUcjqmUFb21lt1295zjlqH8haiQrgHG4QwMHqZT96dnvPOrNTWhV%2B7JsfotYKBCksd4GelAPpvDmC13%2BnUfwg5E%2FxJCcZLc3tbT76pWooIF3wJLSbDavn4IRx4y1mlcyaR275UhRAo2zHudmDgwHdEWugpsWeof7D5JiM5AolActUhT72MUsCZNQUW5JdicanmYz5n07WUgISF%2BdRJjHm0oSmGEo5X4ggdn2%2Bzz5mc6hcghUeAgSRz4TzGwTCvlv1OI8YTPB7pKzFFTSVRrx6RCkW1NVecio5XgIQXEXj3jcSLQeQ5ebbcZ2og61RSrx267lBDnBZ%2BaL%2BK0HNkT71UEXoDQq0KImV3mcQN%2Fsyarje%2BnOdhDVM0HYPwUcJQsbeVdQ4NGPFZ7ZcmdtYckMk3hhgkaHzfWPzmaZjxNT9HM3JZ%2BwK84gQwoc2GwwY6pgHz%2BXpTGSA6JHYUybwegFRyBYIr94qwEv%2BWqHExLfBsGaqIJQomgMo%2FjRj6YcHiXrlD836MxYPbv%2FcUvEROK%2BZUeRJ4bbb2ABwzK0zmvtMJviasq2OppGzmYWeEG406uMOszx1ZxdpqRhoOWVnzXNZoVbT5Wac%2Bwx0yW9D1zsXl%2B%2B5lFTZtpZxQjF5F%2Fqbpt4sPIE9XEM1zcyM6xJSnEQncsLMq%2BBl9&X-Amz-Signature=22f97fe4e987e5aead7d2f01f471b2ed97dcdbefaa18a7691af605a77bb9693e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
