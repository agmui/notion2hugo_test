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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=1ee5e34c94cfed41c6036f7ef62919fc40ebc99594e70c5994491e0773aeed16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=57d9c50f730701281c1177f5932ccd00323186011496c0b5809eef5ba62d431b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=04292f551342562afaeacc3501b0c38c6abc399702cbf55e9e7aa34ddf161076&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=8f2c065f18e163af1e564b7940997d2e78393518b029d012cbf35aa28e3661f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=072ebf83de6c8d28bd1eb2f7677cf8e77c2e4cdb2edb6b9499b82a7c42f5c04b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=20725abae143635ab3b7220196d09982d9b9a5fc87ef33dade108a074c095cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NKWTRL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF87KDaUDHFf1aewa5Jd0v4V%2FMTcSzIGYSYlZM0uF0inAiAq34Xlomj%2Bc7gJ7VVv7I10RcePMDMO3dYOqs5mt16lASqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdMHBbFN5idGvGT7WKtwDheKieS2VYyywiCkWhewfeNDRFsApC5K2D7Kevt4KaAo571%2FB0Iz9NhPg%2Be5yTlUy9wkrP9wR%2BochiknFt0Ayi2m6hM7qdoqYDA5h5HgmqwqXm0R4HefEBod9QmxFFK3c7TG1pzYzXi9u3mIK5lcTmyqp6zhi66Us%2FqL3%2BlJ3jnIEcQtbo7TTAEZ1dEOcz6FU45GZWumGVaziAQUUP4E48c3xPs8OMPrwDB02qozgJKMC3IM%2FIn6j4cumCs9uIBSxdyo9qUksJTMQv%2FFKf0vmRW421nZSrrfwQ1nwkqCz3o7%2B93tkE6vK9oe2S7ERpPJyGv2SfgWfyHuCyjzClyTKIBNtP6UIsXzFyeL9%2BblZcKxZsdAHAdutZaueTIZ850WE4EXf21unRtV7icq%2Bz5lWIfpSAdXxDlS112UATl%2FM2OGpKU%2FNPTSeDwrF%2BWKXAoVIm3gDH1nPqqVFwsYeJa4bi0SdzXMnd8fArHUuOZaXu3oHJy5Waxo0X2lQOyoMjaCBlNCmgwtkwYnLRLvCDrJlToXaZW44UYjnXSBkYzPIXpu1Kir8zMQ%2FQ%2FSbXQZpepv32YqLVynQzTVW8w6ct2jRAZCI7zBjuMrF3ySe6CiMSdZxN4RKimqsOThT9XEwzcflvQY6pgHmymQk%2BGeNbMqJ4Fwqz77%2BtdzRCC0bfvwk2RVM1lIC8QXEm6YHBpbiU1KbzhUIAdefkgOGQVW1YeDp9QrsnvzPCNV%2FETeh3QghcQEd9QJCqkPVLKbKUDLfAZsgZK7q4xhLlofB%2FN0CH%2FR40r03TD1P6jYgzRQhVfBXCMxazsYFXe1Vq8WjmL3seM8JlFSQdOGeGxpnr%2Fg6zgMH10iXq3ObFhHO7ujN&X-Amz-Signature=7c288d3cc520b871b181949f0ee6a5408a940ffd2188e2025eaf7b363881a2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
