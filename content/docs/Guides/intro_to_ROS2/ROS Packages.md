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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=915a946490fdeac6eb8f9195d0b0c51167fb49cfecfe87c96f24a9e250680a34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=0f9c6a9f6b226b7e9575becd342714c5ef147a04ab9332de20a8ebe1f03f2179&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=bb341c040ced57975279e466e6389a97dc6c3b3b61e0235e102627865b0993f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=b062af01380a978752b990ff397ea12efb34a0527155c7dcd4f62174fb6bb55f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=c8e47143c2aeb23c7ef7adcf03bf72239db847db6c36789e0d7f6868b394d5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=83249d05a682d74b0c78cd3e808a2a8367d0ef6db7eaa363da38360e807b80f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P7KHWV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHwbxkYgzvfltEBHzSBXcocEQZoYkEE%2BTXyaDcYPlxQZAiBhzwNV55ZMgidpAIHzMZyA4q14pFBQQSjAobUFaKuAhSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU0wh2VI%2B6TlQzP6JKtwDh07ZjnoY9i7MjcgPJfaf7wMrQiGDwLa502V7x77Vn42cyTX%2BqUlbWmCpveJDboedV9NpYvj5gsMGFW%2BsizgQDFQGVhT0PJM%2Bo%2B5ZnEabyVv7jTYSSGW%2FSyInl%2BIV50DPCTDBKP6Fb%2Fq0lh6OvnNUCcHcqVXUdmxwQl%2FOw9uAWBAv6IUFknkRThw3LTVxJGkzBblPDPdaikWbOdKVhu1RrzsuCYpUKGeG%2BgSC8oIIMIH8hMLhqrTelx1InSjUfqSOaY6bGcq2D30ZMRH5ckqtRcdj55duNS6fodjsPKXhTfhp1DVR1bgyBx65no%2BA33Z7lwGEbNvvdFjwOMs0ZbLAsGIxmX%2Bg0r0VsnWOyQqweinh10w14plCyiW26RXXrARMu%2FxsKRyI8xUdeXtFxMc8eRibWDHYLwnDQgKJX94RgfkCBJPR1%2B7ZVTj5uOw5w%2FQFjZFBmQO%2BDjj6RPAK7z16%2BSiCTEcZRRLpU73HbYaaeMxeuWTL0S4JlNv5jr3k3VR1DfJeljs9kN4%2FqeHoU92EanjNuLnwKHqWLWJE995XyKav8uALVqeTIvXZaq05UD03VO4Wutf8hfQDnC0zjT%2BEEmEeMd%2F4aq1l%2BQlTYugFYZSFJ%2Bq9BLkEny1F%2BYwwqJj8vgY6pgHasX8YzecKMY%2Fjy5fOt7ozdXy3sbunZb%2BWT4xUQSkmideEdH%2BxV%2BOHv7Ws6ZtjrFoFJn%2F9auj2c9%2FnGNKLzC4qnFWn19TLtiiz5l66Cal5CAcabBABVHiyPFaNwo9cFdMxh8xInAI0kpqnZUfwp4YBteht0S8aPSYW7Ni6bJf59GChCrQzwDBFI5yqZD2lB%2FX3uG114AoUkHD5ByHVtXJV6hBneFLM&X-Amz-Signature=aece241aad1d68197faa6d26cf6d6a00f13742bdac7831870a95c5d3a525364c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
