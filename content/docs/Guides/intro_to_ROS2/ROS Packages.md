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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=d187c95a2bae1b90074f5a148ad4ef6eb5f1a650eec4c9498e3a4b8497981680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=d9e40df11b0f03c3f7a9829923b6fd982c52c6aec22684660bc470b5e219a31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=3a43a6b1c12c05389b3548965cd5f97cabc9bccb371b80435e51d132a270333e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=4314515b76b27b58f7d1fc9730629acef32774feb41a924167a6953a8fac3595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=3624d8ad9c3410da2c8d1fbc7c9f1641f41492401c398fcba8d8622d9100f4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=703c10a0049c7dfd8a01d9bdf50d5208b7ae0cae7b09a1d27b2c33c0db4f3f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJUXF2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHDxunC%2B6M6MawmV35DJq%2FHBT7TldcQriFyz2ghZATz1AiBxIw%2FTy23hKfH30oUKpAbtHqJSfrbr3Zb4Sip4kY99cCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXhu1ffLdqB9%2BKobSKtwDEfUMGjWXxFU1zBDicVDT19qE02ll0bBzKwF7ale8NuQFiJK0NNGc56ZGWq7HHb1RcPUHi%2FYl0ZWozxMuy1UOQy3LfQVT52sRVn543YNOL4LHhudH2YoSJYgLpEhAaTJVrgAUit5r3YqMhmyCzVWtu9VkK12Xhgo4T3FKOOkwXGl106W%2FH8iggAArwJATVbgzmZTMyw7oH3LgHmNGNLSRK%2FQvK%2BWDRK8BbfPNm24e%2BNiS%2F7Z4pvWVWV1pu868o7%2F98y7Hlm866nB9G9iT9QCXkfhIIUharhvPV4X0jmD%2BLNo3FzWF%2FSgTod6bQj28%2BWP8Wo2bpmtbQnrAaBq63009NDZ3rfIiyv9caRmwIwSTCA%2Bs5Zs7gFxAyfeKdaUOHqWYRESK4lrruuSI%2B6sDuScCH37y8JvHeUg2%2FY3mbKgVRmQfSCxOfpabrStlw77%2F5rVHiPD6CfLacIznjxFngIhKwDzMrYEsvCe5i%2B8zZkuHIJuI6sNlTzDjMmqLGKMhVAhcZ3KtvKT3cOO7Ni%2FdjZ3NuRnETu9MSwy7WgoD7qWaMBihc5%2BVLS1lW64lyeEggPHXKEVhhG0flVGgTLKjcVY9iKkZFdJh%2B5yJvc8xo3mOV0MwJXgoILnzlofLlfkw6JPUxAY6pgHtBj%2BR1wMOpI90YFh3OGzpkJV%2F9ec2AkTBMK5MzHrAugBo7kNjBfm6miBs5j4WkEVFvkSkyp8O%2F70A4wlrSd8pN7JssfnvwigIqyKGXVKWdiY0vB8I4EwrVx51zrI9hq9W8IRad%2FagFQeUbFOrxrFZmO1DZJnLQSiuc7ziQfEU2YN6bV3BV9JGzosQRCJvWiA2YTgGnqZ0ub22%2BuH2raSuVXviue%2F2&X-Amz-Signature=90ef718dcb8dece3e324318bb0ecc195156cf109774501a998876df5a635abd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
