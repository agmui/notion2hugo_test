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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=13b44ef76d2ec9c486fa80601ca086c39f5b5feb6dff75e99d854529a2178bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=c07e561e96d539b65c8a5af3880221ba487eab58ff82ebb30691a80438aabb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=8950767c330da71afb0e506b150c2e032e00aed27db3e52b85ca7f559f929119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=d39616de207799a68fab109972c4e471bb5fd0f4556119debeabfc3a67fdc19e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=ecf7a09709e127d6723a3ac29fe85c2013508382277cf2f143b36d7d1c164aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=489efebdc0d15813cc524a15c3b17572d31b55bc6e482996797231e0c39c23b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNQ7SSUN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCcOOdsZDsBgIbRsKjWtOo%2BB0ugGmo23UaIRXdGk37rRQIhAJPl1yzCIApkJlDF8Ouhk4V0xqpTHQQS64cR%2FqXwb0%2FPKv8DCHcQABoMNjM3NDIzMTgzODA1IgwM%2B3rFVWxYUFnVVK4q3AN8GsP921MNkDsIRi%2Ffb8SX%2BHr3ObtEA5yUuT6jT3DFV2yW9BpGH7b59YDaq8A49NnRrxZsatwCKO9%2Brc4UeiQvsIhuawilSS2fIwc4YWd4sqT01n8vHL1Z%2BbbiWtvc%2FCGeN6qcI58B8BaUuiOoq0Xr7ED5PUKGX6XR0tbiILPucglTfLhDAsXGTkoGBjK6pnEQ20BBXushz2m1u2%2Bcl4tZw1mPgLnqAY772LwznRYgjiruL5Cw%2B%2FYQrFk8R%2FsYMSdMDTVbglV8N2DxUXJhABaT5mi157meQcstE3L1e7qgiIZyzsKngXqh%2BpTbTZt99oE7hZaRTO1xchDqLRNK7Ya2RXAZ64lmVv1KnC6QMYHB%2FtOY57M3jZcr5lw4d%2FyyH0cWyqA0G5TfBr70ZeHnDuIwsmftaBfxe6JU0BIxHzGnDq30Hz1yKBh5QEAaUAnUbqIv9GkEfnqjoYcp2mBwsXtYp0cu32yp9NJtm%2BGwndSHd8ug%2FNxxhEQPRCz%2FMkfJRF%2FTdeylRdqNaJvTUK3uLDtNZo0r0xRC2A%2FHKoXEUYXiQeZUj0iZhdQn907e5oLOg%2BYB1FSXOyITt%2FXnmP%2FQJ%2Bfhggj1JATp6TSflgkoRkGHpYTIIT%2FhogXOp4U6kjDOnILFBjqkAWITdDvEiDv%2BAP7QgN78idsNFfyIE2OwE5CO7eSB753Mjwis6qUQCqR%2FfmYGJMNsgd7hjBwyga8fBDYXRb%2BUqJqMYkPRy8bUyHDAiSF8vD88qF%2FeEvdh1ZZ1o7aofoMR1sl2qS76eT4nl8ZyaJi713LwzeRk%2F1JDj%2BH1JqMpRif6PFzxAg7jxfTmduOfaLfZw9SHesQhDYHx%2FDmBaNWg2LVJWtcU&X-Amz-Signature=66eed09d86eda8fc8db02d6822c9e672dad54c2af02f95379dd283a34c32900b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
