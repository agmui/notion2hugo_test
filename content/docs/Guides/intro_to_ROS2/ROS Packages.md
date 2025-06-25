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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=8c394b2625f2966e69c2683d20250ef0cad9f999a22cd8b1c901c33496988c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=c2b8f344ab8834d76d14df81c02c9a6d52e0ac7dd4467698e3a5269883d98d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=ebd3fb3ce0de952f00811c4c544f74c533d89616a98bc5cac15e535daba31664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=9f7ca811e237e388eaaf117580af5013c440e16e8c9c204458b74da8dca374ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=2968b6630262ae8315fcc2531992a60d6bd963940a1e953a355644fddb55fdf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=e56aa9a21d750b4968501e8039c3a6bc722e069c78fb865b1f2039c775bb300a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B63RCW5%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEOxKLjQFJql4Ix4id1tUaL5Rm11li4r15md62fNTWTiAiBG09MjK78Or6cEri9plsDoN8O%2FpqjYyP927zQFS%2BScDir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMLY8XmfOPTfNQom2MKtwDhffS4LtfwZEDgmBRHXddmQXKTQ0C9VpYedGWvZ5yxX1%2FijPRDkctFkAYEK1p0iOx1m6bHsDKUQ3WLn3O03%2BvTrTT2NDBBkhbH1lhoIr9p7DgIjdzSHfLSuQhGEq2ZwC%2BKpnf%2BFjv2nwOVRyz5Y5Y0A0fLi6HklcQzTYCSs7hq7I8PYBXYbZs%2Bbkl7Rg4bykB5iLB29A9Gsvf0vK%2FOEVeoHhZnUbBuTEBsYh9q4Y0w0ZZIpveRREXYpbiCuhKXech3QV%2FrPsHwzxjqAw14D4BxpA2xrr6Mm5BFj4AXpWH9HVDUKVcW%2BoRJ4IQeK34O%2Bn1tBlYSBAkkGmlfakVMjLy4khKUy6s5ehlIUIsHIRXhcGJx2eNQIaPeUQ%2BN5VX7weIt%2FuMAQ4TT6wHWbAzl3yJdDmiLkYQJzXzmE%2BGLcd%2FnOKC%2FRnDOSBbPnLgerAxHq%2B3AHGQsyiMafblClNaDYXPi8rEQEzN%2BczD%2BIGDh3T5tw4M2I0J3EnSYmWkBpBqw6JEdjyKBFD4Gq1AFozWlUuX0plOUAspKjqTB6OhtgrFSqi3vrRComg4MT%2FMoMd2aeqyZpJ%2F6%2FmWbPGHub%2F9ai1RXB%2Fr6PeAuHSipnORF%2Fa6G1jP5peAsa4lpZKlq2gw84zxwgY6pgE5jrYLP2eeSoCj7IgFgSq3P%2FOv3YGv9qYLVtXifHF26fOR4MVQnd6ThEV3y0W%2BEHe85YNxOfeomUP83hW4oHT8jkM189NG9GGpP2rh81Mz8dE16lovEfqcCYEwbyD2ucKt0EoJuU3urHjLucUsrTQqzZT%2BVEPeqtsyOxcq8BmX4fC4Wfbs%2FrBXI5rXYrGrGtHGJKxyZfyxHCk%2B1vX9C4vHPMNXxLQV&X-Amz-Signature=dcc68b0d8a09339e052e54dcfffd9d61f2127960070d5d0c95be730dcf89d647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
