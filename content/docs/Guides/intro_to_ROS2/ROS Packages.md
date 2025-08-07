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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=843b2534946cac30079e1894233d623549bfd6c3302e5bb9830d360ed924ad13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=3c2073100f170900f2a5cc2d35a6cfb613028658e09ef1c4ede11a5733a09fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=7decc5c6d43df8227345684a5559e122065d280afb58a25a06a001d2c14c8b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=2aab92867b5d2135d2dfa3fe225d0dfc39fa85197353f30a78aa349dd4bdf57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=3734a03ec8cef3ec31a404de6f431230ab74a9a789b6833a59eeccc159d57851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=1986d4b39debbddcafea415bf1505818d19b4f6cdb02de87d713d34f502b04ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336OFQMN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvHW%2FsaKAhx%2Fb7zRtiEjjSgLjw9AV%2BDdPs1zRgkJPlMwIhAI%2FFGv6utPRJfxXmzvd3YIPyJbiOhI7t2w13DEPMLQWhKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBiWlTuQepDOoNrVIq3APpTGe4X%2BS7Eluq6jAzIy58rKbfLpAQhPn62Thq%2BLAKJ%2FVwIj7AQiXxEzUFI3oK2%2BHzJWmbg0yToegZJvX3Vw77r0i6cWGDUtA6X1S5o%2FKUHPtebI3NLzKEDsQaM00bXrI5bZAg7eCRvFCS%2FRSD6RhBBzQEdeTvKoD5ECbK74fV8l6kTjGSM7YPlpWsOk3Lf9%2FMLrIVD%2BhDzCrGiaIMxR3u5cHJNyL%2FBpox3ckYtFDBRPBCcFXIEn4KHAIVDk6BMhfoJmqrTD7B4qeJJUoadv6bLIdpewHt0kXyG2Vc%2BjeNy3ERRXAmIt9Ax8moaeVxKGCI0THY2ozntdp1hoZghIaJg54aTLhomPI9mYQXx67rpZLbttI36YNMMYIKFNi1HUvARoaP8Jq1%2FBt8mzZwh56CwrASanhiEmwjNsiJwrCYjeCJMkx17js05ygxpwH1McepITvGizvfljsG549q2dzeUeMl%2BcU715fqmKPJA0GwiG5ItIMuPWL1m2WemFKZ3LSNgJ6cYj32Xl2AzDGyE5R7ubvgpE3b%2F40N%2BNWpIh4emDpvkE5jz%2BB1EquG2fY830aj6vAY6%2BmCoqMVxcJwElgfOhEnQf19yCdNXPTz4C3bWKfwuQS6so7%2FwZGhwzDV7NDEBjqkAbnTCqABEyvMajl%2FdM%2F3UzHHQz42hfN%2FbDvAe082a%2FfGqeGqq6dEsyfKvGVkvg1LO2%2FBw1u3HgEjuI2lDEHl%2Fksdsokp8%2B1T3J1%2FzSDnnnZTqCr6gM3KtQnLg3mUAf1Tsu2Nu7SJ9Oe3DL789OX5zSCKBFouTL%2FaZRmNNE0VBwaeMjmdYmbnpSYTOiI7KmWb2gDqFqUi4L1mqXx9J9OOuWyy7CCW&X-Amz-Signature=f5c4399f32b2964fea14ced23d154e9b47a3df0fe8757391d145b9c170f60f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
