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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=4339aeb8f24c669dcef519fb64342dbc48ff2e3859a9d0859306a33d0aaf1578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=793e6ebde25bb2728e800efb2dc5baaf1b53546f87d5484ecb78b86574d51e04&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=84bc2b836e2cc9faf6fa0cb88235b9412e9f469eaf128ad1b0121cfc35cd9a05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=28ed44a030020b40e6015b90087c993efcd62dc0c65296f703bfc6b6fc674617&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=e33b26891cf6b626249d003793a96919f751fb3c643882c5b5e0e79cc9648493&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=54f7563e43586b1a883e4c8608a4813d264ec73560c69488443f8fa5b0f10cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4WILXG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCMFsi1Sy5%2BqJVvPrdv2zYIQxm%2FEOen5ZDkwmbr4coJlwIhAKExkN7d%2BT6a54DpBphdXQFJMMsX3N5ZcnspLupJO%2B%2F7KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6rv5MrE6PbYTrDRUq3AM%2Bvi2EWNVBT0m9MCCFuo7EUFgGORdcNNelaAUJyDu41lA6hwRMN1erl3jyVz3sV7Cpo1QUI6rDX4pddr8SK9uNZ%2FP6q5QgAagj%2BJQSPl7sIY0QwQgRqY3J2d01H%2BAyqdg51M4hD0ekA%2B5yuFrwtVnbgE3tDmzpOdIf16zd2qwLtYOFKCK8T6IfPmLW9y0%2FKgispd2yhF3XvZIAVMoI1mUYvE3aywFD601nwshiNGDss2rmh9c80Nee7Ih7HhY6F0Y039X8hLSoqdSxrduRBoJpSW7NHbk3pnkUX2v72DOkqjj8TgdHDNYjDCJvqOqZTfbksy6eB9yYCzLawBCPOfJonzWQjZUJr7g%2BdzkBw%2BevM5uxvbW2vm%2FKBHvctjxg3AFrUotG%2BB0ROGf6tGT86UoG6H46CplspVlzIDWCL%2BHC7itOHVYAwj6mpNjPQK3IPy8SJaDlgqge0tRU7hybp6JBaTKEhTn3hOsWqsUTXFBiYN8rnSDxAGNZgBEDpA1GmLz5RFKtk2d5YjCNeeRBwVA34Q1nscocikSI%2Fwt2mYUhxbwGNTm2UIs%2BQBIKTXc8ek0ySYpBnsocH5KXltosMpgqFIKUp1iLVlol0ZIOQloJRWUf2l5Lnq61ciAu1DC59%2Fe%2BBjqkAaNNgATy368qRQeLkowS9taEQcpBoPgodZPLyed2nOryR2V00MzdrJuXhuPfeO92T%2FpH41ykAcXswEOFHbxOL3YXIIa6LaR6P1%2FV4jjNB7HkBQPLoyvGXTyZqOK23W0Qv%2FLwSYv4ZuuhWkjWx8CJ%2BHHXG2hxHCod%2FPNMK8zbjztScpm2djfnQe478OKhMGeZnvWGACsdrKsw%2BHld8Lx2IcXiLZEP&X-Amz-Signature=1d5600e57208d9c936f7ac788793b303edf91093ad7f9e251fadb86deb10cde1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
