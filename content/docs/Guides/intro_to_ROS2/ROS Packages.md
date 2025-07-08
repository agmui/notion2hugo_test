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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=4a9771ed62e823767f1cb4452983ab45302a6650bd3807eed7954faa55b99ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=6e4fe9308d209375597e2e43b999ca3818809479a5d0b0a071f60ab8c7d863d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=681fa4fc6ad1244d9905f4676adfafc2b210c53caffc78953b1c37b67a7e2b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=085a098e3ec193a3c927c7b5b7177808868bfec21e2612501638847ae93d7767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=1e2a1c8c9986e3f9e7911fe23ed1b5b25e976362ed2daa5a9d7582cd931bcf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=8e7773fef9cf15ab976182c2f091e230d29ddbd995df631cc62893aaea0a6e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDVEBLY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCL08FEqovzJ5ZZT%2B8PekUey3w74%2BQAMK9KVdeBxvbG0wIhAMbe%2BebHBtPZXYWsxCLg2als%2BW4qBsSZoiieo3qwHdk6KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqUh1QQm4rYWI5kSQq3AOBzX2sm8%2F0TCFwLB5fe2maPIj6fsxVk48FYi3tD7UnA3BAtS7HbfWYmYPe0KGkykyK8mG2Cg0y2POqlDsmD2nfpDzC1ZQcpeG%2FXB3CbQ7hyolK4UG7iyWeQk7zTK2ITKtTuZGAdVCmNxrLBD4Sfqumegkn7acIOQhLsrGycyWswcY6bmGpDT%2B00OsiyXey%2BM0RMNXuLtt8Qr%2BmSBfb9biCAcQILpQq6iHeEZe4XhUih5wVx%2BPPAzLgx%2FzcfsjPuo8AUBhAn4YGka2Wb7yOEytloNm9WAPj69%2B1%2B8ivr2iXzAzx5jRQK6TR0NsKXutizvLXj2tSGRXKo1s68TExHS%2FKu7HshLSN%2BATARIp1Gdg4HR5fpoquZ0B8V1QzoIeE1XIaycBw6j9lgKBgN3PrRpy943DS3CF2vnxadDvdz9Ul0ChOZ6z2BIMlkrEx8aWNFOCmoUGwhGFSFOo91nlJr9SSyWWKS%2FfsdYXXtVBXeU6thWZbF378bR4O9vANloL4d64MWqFaAFl2bCwz%2F7I3HV9eEsfqXS1XYk%2BTC5xN%2F7ZXV32TzDuEjKz5LXd3AnSLvjJlsmfhnT7I1uUXZ0aIncFzqpNJstQOjEY4uoe%2Bq08cMP5XpJco7CJMkqEfJjCihLLDBjqkAY%2F3cI%2BSeC1HQtjEJyYhRmgJwavS5h7isw1lOK7%2BBkIUOgUpHTXKtrzuraJre5K9HO4guYYl7be6IReKmQ%2BA1O2xuZou7w3s9aQKFMYV%2B8s0iHo3G%2B84A0XzbVmx0O7MfU8VaXrjLQ3KPRsUfmyu38cr%2BiBQX%2ButGRK8PP6WoVICQzajFw%2BktdvfcQAjUo%2FJUNS%2F%2FdqoL%2FzrPB4tXBPRGkjan2ly&X-Amz-Signature=a4bc415bfe4c309b5aaf2bcfa4fb49fda598c7ed35e78cabc79160a85ded6649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
