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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=853763ffefa948ebc85aa057408fdb109779c2f1fea90a2453df1cc86b849597&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=3d0089e7526ad43640ae47cf90365de41d77fb01d31625b559aeaee543342f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=327a6682154888f22ef2810e4b53cef7d688aaed2acb133986fb296c8113b53a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=733c991e5578f064835eaa5e7ec8644d446ac235b9371e983078b48b7e7f7a65&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=0ece982fe34240aba8ab81b3a61119be81d38418352f539c479c8ea0f53e35f3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=0c3fed49b1c62d66166dfd6f5563b48ef7ac1254a9d458ebf16b1dc1b593f307&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EXORVQM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDkTiaqQ1mtB9cICQ9HnhBo5IB9Ox51HY46BDoMwxEaJQIhAL%2F%2FoJGgcgjnvOvxbgVQDQ%2BovyX%2BknLHuBkoQOIOUm8AKv8DCGkQABoMNjM3NDIzMTgzODA1IgyjNgwEdIifTSEKKS8q3ANVeyDf8mR4gIkyoxuuMDcryG77UmDpstq%2Fvhdhtidc7RhaJyuisXpDBgO5IxAG%2BpDRJzCLskic5DH8deX9z5r4IqdHk78EuCH4joWPfuEPlRBQK0UEVyIGhX6y2GPg5RR9vN9Ic197eEh1xwD3bz%2FJYbLWd3DVv%2FpukfnRvvveShBbKSbgdRpjZ0R5Y4z1sV7JJeKJAI8t818IItaprgL5Lnues%2Bu8WYjIRn6Ew7VFaDhAwtKCjAnHLnNKEoZ6SVmsPQXuE%2B5FgH27cfED2o3vH6p0wg5XKQS3u%2FRLD7VDws6vwVUYEnb%2F1%2FMZbFEzBGiO5hkI3NKmymUOrRKvV2hw4aQvKXEKtMGHN9ytcOrqcaAQkzlxTCoCTnfcZKa2PTfNSaNLot%2B5d0DrpjThmORgJNm3GKmz2wQ31Bze7kFj6ivAOlwCYfcsU3oOkIE%2BYdu2ZTW6UMA%2FFtfE3Sen6HL%2F60zX7nm6cu%2BhEb0os%2FYoUJSlT6A0aywoIc%2FPOlExUwJZQ0AfFlE9ShqeIYE%2BXQDGz0ym8XPcTiR3JdjtqMUSno7Guw8%2F14oC2tQZpCvzUB6PoK%2BKYH%2FikBEDIYLVvV2c1Y%2FLGFePZ%2BhixoKR0hucop7QoS%2B%2BsCk9snPnujCbrLO%2BBjqkAcoaOWacHO8ycDtU4iCXhUO27wPmhS7jUZHTysyWdvs28zCHgMW3N4xoBK4vQwJSUMVltZmYEN4YzHm4VYtvoUkXW3Akg8wW3jJb2l5D1MNzp3b3oBI6%2BYlg23j6Kw4AOLShVGL%2B04r520jaSfvwEXr1wtf6O9Zxe1lAPsVAZ%2BOUf1AsnAHyejjDp%2BXq9Np6WsH389PoB%2BQh7SqEfeVm1O0d8yR6&X-Amz-Signature=30894786bc1bcd8c8ee0b77fa1796d43f062fc150cf85953b2de85518de639d1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
