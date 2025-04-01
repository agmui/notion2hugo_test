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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=ac2158a8a0c764dd834bfa67855697acb823f3d454fb85408d31d09711ba1bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=187fb17e831337f38f667566cbe3897c1f29c9ee3da39e8a9bf4b1bac24e1cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=43785c51f1585877cc6b8f096fbcb62a4061a6e5d1efa393e276f13a1a3277d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=a886b5688d60b14b2918c69efeb3e63c953c2764151e3448324353800e648e40&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=29659a238b67604be61f784d00b491b8231811e7c359a94dc9ff679443437727&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=5ffd4815350ed98fff53328afc6b3deebf3add6bfa1945f3155db866f55074a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OBFMHJ6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCDuX2RS%2FrNTn1OtpAHKVlx8Z95bhhh%2BaEYdBstt22hkAIhAP28PfJoE2m8aUgOntLbvQUjgNkrk6adM9Dqfp2fZajCKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC5aYSiRIHAxLEApMq3APMgjQN7VfoIu%2BJXGwNPXEu4ko%2FumSHGf4GpoYWdNzZh%2BWbng6c7tKOk7nBEpdTUK9kHd%2FZSSCOr8%2BLjTyw%2Boxvoxgir1tVF%2FtZwm2ydSzXXlrU8q1LYN0dtJqd3JhPhstpBMMegOkRbcfnvn87A3yu6npsdtHur%2B9BpndR4AAIkQm%2FQjghdsInA4Zquk%2ByF%2FWzprR3FBAjOjrSJKqhTEo6aNm%2BI2TpL9FA5LMPq34G3ox15iK9i%2Ft3fGv4p1XzWXJgzZUdBh2BpodOqpew9uNUkhiMnxJXOE0lOTBMiq7eCr%2FKWzS8DWSqRDHaqth0IekdLyIGuWiMVQXx0oyFA9zle%2FhIIBIAG9P7zacEL%2BnIKKgSRB7de4TME199NtS%2FF7k1ANmcpMZi4%2FdMh9CLpUkmXP0cbCQZgAWxb27QlPd7ghUsIgEkXdCrFIDrFKYug029keTK9RT0kSGNV1rrFBHuC2rrailxvRSxhrutBXe6LCmtOvlG6DnvdRUiLyp8d9nzBzv4nhYSZeTEGwB8Q4uya8QSMbxMoWUp%2FeXlNg4UGb7KVB37oB3zIhJb5QMihFdGSR3fzrs96zu0tgIZHKxpfI55Jv5sB65Tw0YUviMZjlJ%2FdLFq1RKHUvnX5jDqg6%2B%2FBjqkAYGu1DNgRtoOiBT6tI3YlI3lq30%2BHng6EccgT%2FS%2BNmt5ndbeJjslCo4p0lldOQpyExQ4ba8Yzms6RiD8wOuY%2F0Xa56VH%2BDBS%2B4%2FuR25qMuNNSzVAusTLr8thgxgwqDqixVgwTszjjvhdHz%2B6DH0q3JvSgVeYu43lCojIJZOTBG0bl1Dqw%2BdTqsWL6ZXYO3NK2ydOaNNwqFtGeqUhfZAvCvVbUQQH&X-Amz-Signature=3863caabc471a3226dbb637bd399446a5f00de73527f87155a62618c84307dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
