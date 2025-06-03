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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=4e0759947533df85ae411a2d84e9ebe2e0800081915817a661b5b73f661d48ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=3fe28b4ccfe317f70b77f097a703153f370c1eff008951b20353f50458283b94&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=8aaf32cd578fd154eefbe5d37d399c8217d866b71cacbdbd8a30b538eac7c0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=d9367ac2c270ccbeb5373def3f956a246abbd749cf016735d846059cac55f5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=fc3bd4d0760661ccd9442c1d100e6d4f70abe46c79b5fb0fcce96dbd5af8fb0f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=a0b2e5f190db20264c2445748d18b729f4233fef9c4e773c47a0b81bf4355447&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZXYKWU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFW3WDKW0ZajoSCwm02%2BWrw0RsOHSruKkUxD%2FaMTlrLXAiEAjo0FI5n83U61u3o6yR0US8toy4LI0pDtgLITQz9%2Bpvsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAffraoZ0y6eMZfdWCrcA2HqZTKZU5bjjOmXFqyqx0EKS4apsDWSoacJDeyhXwvfovYXWYV4N5K36lHBr0gc0YVoyIImar5aFLP1a9L9vBxXS2bs9b47hQgoiIT5Z3NxYe3a%2BF%2BYWSax5GAyQ%2B7QpdRZFHsZNrsw6xGU4%2BNFxt4IG8oJerTjjiBwx3XCPDveHpcCwcyCovrtXpFWYGQhLVQc5Tbl1fxYcg31N%2FMTWJvH74S%2FvKfOiMrGfP6i9D0zijuiZpz8ha4%2BQq5n4Dn2p9Wwb%2FnhRh97dHbPWh5eUjW%2FQeEvu81MKt4j6AagyYceatAWYQB3oQNHaGdV%2B4CKXoeUy0h7MXxaRXLBfCDpGhF8tZfrwX82dh10E4%2FQR%2FcfOCnc1SURWdNai6Y9YNGBDjQ2CT%2BnPhrEeRhdEOT%2Ff2JLST8kj7MO97Kr3hMlvmI9qv8mLflVCd4q0GsN8yI0T5GqQU6iDj1xkFd0DKKea7zOyLgLhFze4HYCYZRXQSmMXCOwlZ9Y1p0XiPVbFXBQyFh9WKKoARrmd8QC0zZ0AmoabvEFzYNbPd8IoDH8j5ECT4Ayt2J%2Fftk8SYqxQCMmf8QOOtCm6RSUF3ih65YxXs6cm70gCsq2QF73Cf1X04CTerSiMKtxbdu%2B3LQJMMvm%2B8EGOqUBF5isstdaq88roZ%2F1%2B1Px34KYz4aZkBks%2BA8ZV4i%2F9V4bVtgnd4cBdcPPJB4qDYSF4YxxaAmF%2F8qS4YH9TrcuaNBbvhrraEibwsgB%2ByY9qSBKLYC%2B09jobRQ0jMQontX0bQR8dRKK8coqomTJJZVRAVutDYna1vJtlNkxn4bv0htZ4vgCpHm3lx8Hk8ajzavgSiFcOjHHZwDE3KKDS%2BvYZUzcwqOH&X-Amz-Signature=83555623adbdbd55d77d36ab8e510f96a1d1a99e46d1107a5126cd3b73d9989a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
