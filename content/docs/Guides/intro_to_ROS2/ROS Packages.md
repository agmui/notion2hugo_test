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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=7505cc4134ee32ac1577b70e7e0af7abae41b77b297b43a96b20952f2c72e8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=05bd37a84cfe125263aa76cb43bcf1fb3b04de5dc01ef4fb3d11d67b630484de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=2760085a0cbe370f66d45631771e8737c04ed621accf7495aff2472a704d732f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=63d353bbab336ac5f1e0ec29a52ec650d8ab9736a441eaf55a49f853f4a55642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=10dc0fe52a54eef789bff0c54e29b30ed02c191baeb6fdcfd7896eec5fb1c52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=4206b2ee55146db1bcfc31d70f79055afc349a5537d318068ef6050fdbbdd8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAV6VBN3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWaWxUIQ6vHKVHtP%2BnjlSkIBo50BNN%2FWFnv5%2FnXmh68AiAVI013dpY3SgzmPxVw7a92uyBGqBpVQNcayFGOe9cCxCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BgxxEPK3GfRZFlrOKtwD6nNy%2Bv3aOZifpHuh5QADq3%2Bmaot6uPcUWX%2BwGSz7lEkc0h2ge8%2FHXF0iMSkQf637H6detWtUlzUd%2BWJfHyATOHW1xPHFSGpi1CdLbEAZG4wK5JSgop8ZZCjY5VCl3HAgLO3Q1xNaCKULtyKBsPSMNtbxOmOSRs1%2BbMAWe9ycLaOPgwqkx9LjR83ozYBA3f8U83lKU7bual329bewMDFG%2FOk%2FswB%2FA1hUhuWpO1A7t6KoPVE2q3TBARUw%2Bx8vlh2fNsUnI20zsWqiHMcKQ1q2%2B67mt6HRFhlLQ0XgQt2HbwUBMknq1%2FeePvDupXbZabQxkDu8RgWPCEuJDv7cXAR6frPr4QqtcM1lpEte0A6QMKaLPZqiRzngSUIH5XI6aWURh84z9Eoqld7aakdpbI%2Bo3zKF5RtnghE%2B61mhbqh8l3MYRTjCBNNiT1vQ9mlu2ho3V8NW4fzGyeDSRTWeT7ZALg3Dh21LfK7EgqcbSp0mq4GpjHL4ATtddr6UdXxBdCRn5GaXJYayhP7nzzcVSfCezKS%2FIGl6EjurbPU9jJx8JeoCQLHfGzHAgsmKqk%2BBH%2BJgL%2BzRB%2BVh3GjaP2vTtzCNmD1BRRkR2UwKLVhc9gnL2ealYMOjyBK6OfZVPK0wyLm10wY6pgG4XBFxihPcqddP4iMEUwbNHagmwDEPhwKXxvuBYAqP7l%2FB%2BwNiPddyQvcL%2FbzWrC%2Bv4SKrQY0zxblHSulUOM8eJd6dmip3zsXNLtLLXnidR3tDKA6G9iG%2BpH1vw7Wu4lNQzwyOiw8RSINWAftX5PRCMzK62u7aJAlitjXeM3bkcW%2BDova2tnl4n7Q9JY%2FxHpEA4Z%2FwwGO%2BJQKJkVVHs%2FQobI22hyLO&X-Amz-Signature=6c2d3c41402d58474bc67455fc135f5fd7300b491b9faec34fbffb3d350816e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
