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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=fb42c5cfa3b5c7720e6208efbb893936bcaac56d9d31089a38d5eea97c6c96ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=ddfeb8d6e1f1be6f72840d595931739d32b65347590a47fadaaa50a058c95450&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=fd6fbf0dfda4fa8c3acd33996067e5019bf13f37bf04b7dd4ebb8866df397d40&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=fe931d70ef49280388f0494874f295296f0f346f5f7b2a2101586fc226b26020&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=b62d178a267ca4cb6bd392433a1c2293a1bf42e6ca7ef8cf101257d553458aee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=77a5c0c30aa525015cddf6b05de687b4e63cdb25679eeb502085b562579872d6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZINGLFC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDMFgy9tW5GG%2BfmltH6Wt4MtMs8cYMAlkvCr2bLGEKOfAiB2iXDXsT6gEnHCOZltwUIQw4fhrOhNJc1EP4%2FuTDRypSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdN6mpk0YihfQ7%2F7bKtwDC6oE7ZgqCvdBpHhXz6QhjK7PmBVozKdi9SXX3IfPX9CDpFhd6JzBd9kcuIVeIyPRFzCqTx5NOoA9Gsm9LM2A0ZMJCiSb3acIohY8VGklfOUmWN8rodXJfNEudBZOXQkOj5NfYruWFs68ZBijcVRTk49o28OkXX9XOrJNPkm5T84mH2RimeDcr21PueLuIQujZOnJnB0eNAkMOiVG6YIrOuygF8%2F1bhZhjMv1pkMQpRzJg9no%2BUOxom8tevObSAs3Yn19nfrbilNxPQi7zGPxpDaI3LMCzKA0hS6fmAvqOcarn%2FA7hKMfFT3gdNvEWU5UPuLFMFZX082r7XyAZaLdcAJ%2BJ0KCFpyhbZn%2B%2Fg27aWyNhENah4wl3wLIPVgiu1o65cPKpWuDRbpABLVr%2BPxMaL9hDYjuYZuk56tCebjXim%2FxDd86ESLi7ZfLjHzseSN1Z%2FI303viO6r0M35afm1HEIHdpmA4vdrvzXUhQ%2BQZRRBgXH%2FKDHOtBC09hHM35WawfTTUO8AH%2BE4pcO0m4LXmaIQPGJjv7UMOT1edmjqdjNRXjl13962PTVqkbo5rhWZ0s7ta2IMWxgAYuvuj3Z4MiqZTmvaJiX%2Bw4xannn15ZUlH1wHY6xJOq%2BU3pPQwqNWfwAY6pgHXfudYnTVxDt3Dlsl5Byeu2fcfIur5RdJ9TkfDkjgKJFRkBKoFWX7JN%2Bc9weMEMmU0I%2FcHKi6RxcIE11OO3U4pNpbD3UGXcleUBtivWxA4ygO836EpcsEbYcNRkKOMBsXvJbU7dZEmAF20cIrLREoloipeYKwlIp3pu9j9S7fESnR8C%2BV25NRqa6eCuzzdR6IGlq0X0aAbYv4fRp4AOY4xYxuM6O5U&X-Amz-Signature=4a2c0ca61aa1529a0508e2b1f2bd311dc820d6bdce5b83e177964bbabd8c6439&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
