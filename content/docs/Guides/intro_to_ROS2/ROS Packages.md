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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=07603bc40dd4c593b0c380cf3d042c5a97ceb39f0561d9d6e1e0b222c2419ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=b531372dde94999704aaf5cfe6a1fd635a31520f29c262cf85311b0362284f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=45381dd64aa7580f60edcbe67c8ed1b74e511184e2c0e640c84ee3fe9bfbf3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=b159d55b4b406e87bc158f89149247d7dbf545d9ed55918da44363db48610664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=952b1d7359ecabe63dc7c4e609f9c6c8ae061b454b22d145aa91b503c6197eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=7b279bf31ab2d76ccbce6349025c47dd97813d3dc5bb3def6bb8d1b5ebb1c8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPRWDXRM%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNnB%2FJEQw0em%2FF180KPTgpGzRM%2FGAMXhOZuB3S4sdYhAiB1%2BsBIlLr2Jr%2Bc%2BSt9xE%2BmpOWOHzQt%2FuN6GY2PrBG4ySqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThTeRjLmq4yZPDHmKtwD9mJO6cUB9C93x8j%2Bg%2BCefQrsuUkrzC%2BYdzpyTbO9xdVuyLWdTNgZAkhuNtFs3VwLpv2%2FcMvDFn9OzpfXMrlUkqRfIfmvpRLMbTafWbR2d1Apn62qns8swaii8qXnpsJ3MQVqpY%2FiQG9yNPMQRb0i40NM2QvCMhqZbF23EhnP%2B%2FA9ymBozDrnwX0vshiRva9S8xXSc5TF%2BFXdAr9OixZiT2skknMGYHXnNlqUOc868n5yjTFltJJn7tZ%2Bzk2gxktsMIvh8ffgrTj4G%2FuCDJoyhaRIZb59AeEdqUZ0rhHu3WAFXWJL0kyAzMYWUs5iB%2B8X13Pp4wBg829C%2FNwKLOb0RM55Hvj9xoiZ3mTPQ7D5vAzZbH6LhihONpJ7%2FmcrS1JrTbsiuWgWpbLmuW3O%2B6Pi9sGCuCgCg6QSc7dF6z3fEGd0x32laI0YaP8cJ8OZeC09pkkojeVyKqVwsb0uyYLytmQ0W19xYK9e0vO8Deq7d894szRvgx8PexlM94KlN2W0prRlZHb5yKl7GqMa%2BCZveku9MEZV4HuRjNwAhEo1qGTCtgilUt2rC%2F2MR2AHbuLT9VmpplxnQdfKfrgiUZXIAMcyKU7OtmVOd%2Bkti3iBvpRrfAXVUSPBgRRNEHkw7MmHzgY6pgE70si2hKffGSTjZQYc5gljnsAVMdJnS%2BuWmXSJ%2BvymwB7b4ensAETiLg2iecxZkB3B273cXDThT5WT6gsiEOw4xS2V2ityFiSkfRfI1wYonCFfwqPnka6bYUvZ7shevLoKnsiF4J93PfYhomvSiJmqxW73RRC2X7rcG9NGy2F9ZzrnayEKOBkXiMTT1vcdJcTUDztoeOtGE5Xm1jrnPPpXRAgt30EG&X-Amz-Signature=c37f3d9b86c185847a7ce44e5bad9a05edd47e18a98a3e436f30198dd6dbdf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
