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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=4b972f17d6619af67071281b5311246d873bc50942a14419bd4ccc8260756976&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=4a52379f267356abf0ee46a519bea5c9526a395af4e1024007929e6e21c76adc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=cbdf9951825c687a273a91a6227ca4486239673dce393dfd96250056b52c01dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=a5b3ab1f2cc4c438bcaa11e45ec330e75d81ea5b7976537296efe7ea86b3120e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=8fde8b1f478bab37e50ef19e32b7374bac1b2642dc55446bf1e965e532113330&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=0a7983acf992d2923bb26e308f09e81e5db53ef5987a4120f0812252fc062bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHTOGQ7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvuDlKPcYyJpTmifUwTcE%2BXLTtPNgDuDL175XcM90pCAiAObksEUtyXgXRa8co02DfA0QMb0XsSv1eLHAxRgn8K5iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAiT%2FzigqSYdg88DKtwDduebnhiHr3%2FZaXmOQVrJuG8LDHolweyNxolaTf2KtVfmHuhzjtOqyc5tZGbkgbkP3OGVZcnipzryCFmbUEEq16zxCMizX1Rg50io%2FBDA7QFD49QBbPN3sQGmC2n1FZhPcRufIQUaf3mL9pLpVZ0pInpcu1Aqz%2F0IiZCC%2FurSiZISLaPq0ii%2FlCVFZP%2FAi2IAxeipW6L8s%2F3gQVP1I0UEK5zNLdOSrjAy5wTx5XtyjWTjzOzuvGWpfWiV5l8UkPX1%2B7wMZVBXo%2FGTHv%2BjyxRr%2BdnOitccCx0r3qAZ23Q7B4k%2BvoJ9Qj56fAzlgOM2MNrwHkmVCCmk4TX4BG4oRK9%2BzrKkgIjxDKFYRK5hPxiGUK7VurUXlmIflSt0ImTf35USwYwfFW19k4zP15qbyx8vRuEv46BsgccdELgbdgZKM2UCaN4pWppYEZjwDRKfeBCyNuzhhkWYxCcoy9x6cof5vaKpN1QtOF0gKfhRA%2Ba%2BA5v6RMtWjx2%2Bz6vyy3G%2BlKciUJoR%2BiZV8oxTHbp%2Bx48rL18H2w0FGBjP4GcUB2TW14WItDtj3418uNzkARFyVpc5QvXjl6HTlviyGjaIOhvJW9hfYa9Yefdg5W%2FnC7OUz2n3BX7pGk09dM4j3qgwpcjnvAY6pgFSjCLzYpekV17ok7lwwYXMK6sQ6k7MVYD3NVaQmASbxbsQeP1cY2scav8%2BqC80DaKIgVYHUH9aVUJ5uPpLNyAQEdtpy8Tu5Ec19TSL3Q2Ir95OA7MCM1ZDOhpgvrTvhsZglWIkiRCH12dhH1WlxcpZLnGCFBnPp72HT6ulHH09v9bYMLIgCerIOMzQ%2FT6XulodZTY%2F9MuvtKQSUA%2BsdkTS8JMzVr7n&X-Amz-Signature=5a82085cce9aba09330341961bb1981d17a60cafe38faf1c09d702c242581771&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
