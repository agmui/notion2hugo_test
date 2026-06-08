---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=9692d7882d8cb5751cdd5888b55802ada0f52b44957fc71e5e18e6e4f77d9ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=58ca4f8089a0934203d572342596afe3bb9345a620185de92935d3c703cabe80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=c81fe7d1ee889b91657812a454b1ed5c3eaaeec69a271993b1fde0593085e928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=595d07fb37d3ce88e7a14bc36e9b71fa1e46c10e5d5924aed9c1109e6fad663f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=520c1b29885faec6ee455495a817a5bbb4a6bd7ecfdadcba0e0a1659406a0d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=da40f851142ecc8cb7688d98f6afc2efb2b0c44cd9af7fb6eff5b49ec0003801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Y5NAFA%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUx8B2JiryntJkzShykVYAedAzD61TeKsNNlhPIcDWdQIhAJS03xk15i25YPr5UyfU%2F1bFR3%2F26Zx%2BkzZSq6fa0c2QKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKRp3Hdvc%2FQX6GT9Mq3ANeHGDrvz9zyA%2FAEuahgmFmMBnB4p9jMtOR%2FSsNy4Ufr9f3Yga4MJHM2HwFWT9ibWy2sDqTxQQwKc2zbZmfPXchYJ2N9PlEIolorwaCFXZwPg10tq4skYxVLVsoxUDSr4JMeWNwXflb2FLHIx5Teq2xfkcY5ciUCzPFWqB2v3Rgz1EXs%2FpKtee8xO108NUb6p1Q9pS7auNTeJ0EvV8ARDzf5Ahm30DVcAxLGAh06GSrHmbjo6Q3sEM3bC6yysJ8vz%2FuZ4t12fShc4uPEwLAwWYCh3QNsTen%2BIVQDzSVN5Udbbwq1rLjzArInpOlhB2%2FgFOOdbm1qT1gcaCWUFecrkxrkwu3oXb648BP3bplfqMiF7z%2FDpD0rMTAtGRNbEzJ3E1Gs%2BhXPq%2Fcdt8c4AIJvvhx29FJh16NfgcxXY2BVwYdfVbdJwymG7aXc%2Frfx6Ma4ps6mh%2FqugR0wVeUebE3ndD0gP9KQfm1NGlpGOwGiNnlJh%2BUK6qNz5z%2BV7RyNCILIWbR3fBlrt7cNv9RxNF584EJHl2qskX6IPl08li7ytNyS1mcSO7seVtaA0Dr8WOUDpWxhjsb0aE6J%2BzVDUHXvCBOjnyky8yJmNEvo3tleJtVyzP3yMeiz9P2hCyzjDDNv5jRBjqkAY7zuRF8tULuWUErHKSXHcC5jquHfOZ1UwJuqFTRoocyxNioHWlBQV1yOwaVpDq87HUeX5g8olKSkIHwBtSgl5wn%2FCHqQQE%2FgnK7FJesVASJ7mvoVn0oNXzfI%2BKD3DN0l5V4%2BCHbh7EPvb7HnG0McNHImUSMQYtdvJIat2%2BJWdI5VluPZOBTJaOPFzf1JnQB8499NjU61BPRaHfTY4jLJaZA32Yh&X-Amz-Signature=55c2f8934898f3457cb13c41eb99a226ac3b688de54452e137306f1302f14ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
