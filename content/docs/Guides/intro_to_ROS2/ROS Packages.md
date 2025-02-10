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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=7b06eb78a9851348abb1ef06c673dbda6d9761dbfd7caf3f07745568d844e81c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=3d1a4e7820b5753c9d5c08d268fe679e732c73ef57a6e593dc0ec54ab30ac301&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=9dc3d021f6b5d1038967a5a3de2f1f6f63e406978dbae8ed3bea721d403c2057&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=555a48183bc998f44b19ae9900502c9539d3ed8df431b469d1cc26b827ca5e61&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=0c9453ddd1acd5fe389b879a39db97937fa576180872aa848b1b835902ad2415&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=0fb665531b16879a1bb8b6a7f3c51891c798c22826d889d54d27c9a49c8f66f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJN5IATL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFidgmLg34ghCb8IvETOAW5OQ3LpO7eqZ26AciKXi8ETAiB0EQQSXO4sLIpNdRGEtGPJvOMuGja5t5PYOWEvApfuSiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8lKltH5UvQ64WVzvKtwDcHi3GnR63J3K2AxJYXaohuXUWpcpq%2BKWO%2BzfIyWxtj9SvWLvzen2k%2Bh6Kn4eTFtSW0skau9yBZyVHUm5nVUP87OJOdBnbkE8d%2FXfpmE5wzgOyaENoG9hQsKzN4qfHHn1QymI%2BkaGI5jiIg8wk%2F5%2FnIBn5Rr5LEPOd%2Fx8F0ez%2BwHR%2FA%2Bj4dsJFRrRecSyRXZ4d%2FRUMF%2BGKx1XQAOwpvih0suSMSVfhmFRuVHulfQyHnqCjIS0LcprSNwDaNRp0Ba5ivhddkdPaASGHAV69UTY8tIvQVT480weB80ysjmwrktH7mQnY5xjsZAcLWxqBRS%2Fof2S3Scyseg3nw2Bn%2FILbuaWNL1SfCkjbHTteTHqyPJCoWcOdNreNMH43sYsD9z9vgof9e4XUapD9dKyTQmmyTILUAYJsmZ%2BJizp6Ct0Bkxy9Qb5X9A8yHr4it1hPGG2%2Bs%2Bn3FZtLHJnATzPlzDkyi%2FYxIThSQagn%2BlI8guh7pOED%2BOlgklo7hg3e6ShM5dm%2FWC%2FoBxAf8%2BmvrFYOxXS24wTftm4v%2B5%2FkaAg31a9je2J4CZFLfj6mNsbybGnd389zo4APz4juntA4%2BbpKgXw23mgHThjU15DT1zzVAC41BuRdlKeSvV56Ee1w1Ywg7yovQY6pgHGcfKBhhpMS1WMntxJQCXbKj4Ea2McA033py2an2N6rN0dR4ptSkNo53MVX%2BITAOBqbD9fiy6X2%2FHNWEncB9Lfm4fVVaIxSAa%2B%2FJCbG0pLEkkJg7%2FnvDUq3TcXga3Mw8jG45gWgs6frf685zbnUKP45on92Z5CPpwUSJyidJUVhC8gtCDtloxWgdFM0lyrhG3aqX0MUaKma2TS5xPH7CwemlT6%2FwkB&X-Amz-Signature=06a4d1b053848bf81f4f14d4162cf702107ce436b6a2e52388af6157f34314e5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
