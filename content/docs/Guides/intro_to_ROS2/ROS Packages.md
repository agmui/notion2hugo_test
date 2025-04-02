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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=7fd4c30e2f4e2c86c2043d8565ed761d71d3ec4416cb843307c0dbdb2ee74df6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=75f74e01344392b7a2b1ccd20a38cd099f0f0b72689ec15f13639dec6da1e7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=39a4d28748df46d3f09f662511f57d7cac1b0411731f9dec4cf604da5ce08510&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=1832b875caafaeb5c27a7af5a3d09ebfe1e860bdb0a1b633f95464fd2622be77&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=4e83772fa016a168623affc758fabdd6ebd63e5d28bb60a25e852727c6c0506c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=e975308104132261071dff6dc9f6ca537651e55576806291cfa9d637f6715519&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUQ7XZN%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDQL6xq%2FdxjFIjqT1c7M4jaLmqjLCJCLQyaW8B2nC%2FszAIgd%2FQnDWk%2FvlAnx2udcn%2F43PLgcrq79abQ7Aglmdfh4m4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC%2FcMi8aL%2FGT8UFRCrcA6kKjDwx2q2xCa1DXoQZbUs6Ixj3XMx0Z6L7Ip24rbtc1nl0d37fBrbu4XEB%2FNTJMgIbycFUucP200aIb0Osz2mpTx7DaDnw2SXKozPONTNlNSBHbiparcmRwaMAFvWuYFrB5XkkYqJoEwr%2B5m6IpQeRolboEKP5966iLtJI3ZMUTBA4wuc7W8%2FBrVMVy037pils3C47xYAnVQG6cAMjMECHjJrfBmKW04lnRAPEpFlCcxpotQn2MCWidk7lJRcvXZW0uyqz93A7xWL%2BCWZrD38r5XLoE7uFCg%2BC10l4SWmQ0ulNCDw60UrBwQ60aObe1WIlZUgqkvJdsPIxMMyIGyqLJkUPPM0CCCuNhdXOhgXXXrz9TiP0ye58yOzEXXRxHUkfupFFI8ApHiEGREYusmqxMrBHDk3yQHnwgqLGFUrn2t6VfwkYDEa7IYQlN9E3Yn6kgpweLfJyRB930xhOlouyhJy4oX811PYvtxtEJe9tmo5rDqQi1Nbt3YKsc0v%2BbZxGibpVSS5TvRmz8BIc6kd2XQ7LUtNhXibzRAG%2B5Qp1IMFQyZbiWJTURCmkgKfsMRVCGBiQeGMOInBftSRpBBwGvZBZxbow%2BXRvOMI7%2Fg8Ns175JPodLznrT3QgMKDptb8GOqUB%2F0XBbCvf8Js6CBEb6QRsv541daVaWRdwMyIa0cFn00Qihneg%2BVFBktf2wP%2BU%2BXWK8WBMu4u7G56ENYiuUsTqoW32s%2FHE0hWY6qTaV1lRYs1hw6mWhWYxzbWoJ%2Fib5T6JMCRNLil8gef%2FaZAPCDl71eZwE6cXXgD7qOMzN814gThxU9ue4AmnXbNSzaz5geXB1B3CBk53687%2B8UP8RD2U6Ylt9KH4&X-Amz-Signature=1ec41c5f7c16323469d8402da0e84c6fb0660487a83b4c77ce85d0f82c390a54&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
