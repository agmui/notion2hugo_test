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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=c58bb6fb7745cd7a9537f54eef13326b75be6dbc782c3c328769f7778aa97678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=3b9cc7c55d41f99c83f0e9a0d835c41ac6cdee84faaae7038ead75da4c307b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=906e880bcab1e3455736f7993502acfbcd5668e472b85535084264aaab8bcea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=ed25b2ba0bdadbbd5b9031e119651c23bda5bbfc7a41ee22111a7268b44be5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=9da830c2366bab5c050b163b2279aac35faee8a82309df4766245189ee1b8c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=88bd696bee041521d1c736f12e8d1f7f96ab4834f57a594bd8d3a2624d63ca7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWDNEUC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAePFb5pGomc5MnBd7qBMWTfhpoOtZoAMeHrYfirknOAiEAzhtTLL60RiTx1okeOkQGRguRAr9RIn0O%2F4%2Brj6rD0VUqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI43jKnBiZy9Sr9awyrcAzJxqeFbSfrvixTCHzvYCpi3H5j10zJNa8Lj1b%2FBbgNZ5wFK03iDsmxjjyttTqiBHXuL6ulp7GlRxX5PzOqjCo%2BFBK0rvK2EKVxDTGSS%2FQHvMHschckhZzyB7C2F5o8uMtTYZehCcRuAZ8dUjF8D%2Bn9rSmEpHUGhqrl95XLYX%2FW1MAyE3ssmnOur2O4ysipV%2BOQQX%2FHfqHe7IPNoZ3pUO8rN0EakFa8fCCyGd1zVz7FCGv4SQr9c03GsuWcK3DUh%2FTDFy5ao4xSJuWS3vVGYLaBbfj5pi7nW9hkzTgoBOtJepJW3hVMZtNTDd0u7zWmFpWcdnJ14zQG6DydadzNdbKV6V%2BPI2M%2F%2BO0uCdz6cJ6D78NEOpmTMBPMnDHBN3uaJkQIMTVSNbejPQOB7OP7TsoV9LYGkT7z4HkDHEPCuKkLZ%2FgaenWcwVWlG4kX4Bv0MbwhXeNRTEhhkvMweN0bRVhyo%2FNext5e5xGkW1fhP8ekXPPd0vQ2nMPerJsWyZPKZm04V9Ral%2FoI1OdmoIoLUaZ%2Fqol7hB4iKdmJ3Az0ZzKnG8VXvncpS8sWUG4floQHAAaTCzcagalvrwUgnxHAJMBT6p6pkapYCwcvTbDMihBR3QOig0GwPq%2BnxHkwuMJrrisMGOqUBfBn2kPfgekHeVXMdaA3QxgEbOSCkFlFWaX6c0CuUdEywC9z6kv1%2FGdkc4XIqueC0pKDzjvJ3wjDQ33urQc30T1XRi2%2B0eFiyeJ63SSpsiFjm7gJ%2BImd%2F20fc9R75ODyJDMXcGxwPPwJaN3rTM9kBr8xXZ4i85BdCJpm%2FNvfACz9YL2i4LJSDSB9wOCREouNTmJLs0Qx%2FzyIYanNLbNnxfOY131k3&X-Amz-Signature=305cc1ca2081fa49ecb7ea9b2062e3f256056f1e2f72db200ff7eabc89f921ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
