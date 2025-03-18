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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=75b41f1bd99221d01817824d213222787de51dc21f30640b3923616eff33b910&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=b51acc857fd8c45cbd0579b0d4d868a22901e6f5f8e98876c8328118f2daf94f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=dacb11ad755ec49194e5964a75ad807137dd8937edb52415f79e190294d1898c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=0b076a800122f51c4642df843ca55dd33bb4c29c44ee7293098cb568ecfc057c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=85723db9c4e389a051e9bbce483496744be2112fac44b0d6ee1752ca30a6b1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=419ed87cc81a787e5113fdb6c9f011967020e942ce2afde3c7f688070a71d4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTYW4PB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCpJAFltj4VZDV6C%2BqUA0xjPdhllnUrN%2FJWrVM7hZzwUwIhALmwgeuXwtUr03HsE4SikLMWmwg%2B%2B%2FCiKRwHjWfEOi%2FBKv8DCGAQABoMNjM3NDIzMTgzODA1IgwMV4CVo%2Fc5DNE%2Byycq3APYIGMdut4ml02nJ7F4tTw8ob6O%2FsqJnByEATPaOCGMsgFMqK1UWcJKjC6HakT%2FYx1K%2BIfG%2FaMvFtxxw8zLVCh539sG9XnKRcYVvrtrOiCR2ZM7xpU8J9M9ELCm3dyBnvRowPde4%2BfC6Ypoif8%2F93QsaCZsLh4Z%2FeixMepjENoTt9ntDzaXUlsXHjh6vu3w4Pi9dTx221G3FRfU%2B7NFF3OnQ3gbmEYH5OB2uDoVlAyK3wsz4JPcoeAjdvLgs9CDAR7PRumfGi0FTy%2BPdb4YUSAAhvli8liTScB5HgNVLk9V%2BuHo2KyX2Uhk2aJnGFVIQ%2BHVLdWKS7CJfwWJqh0UhdR7PfMliEfn74PFpgCytEb63KAIjuVAR9AikIaohL2HJM0Z9tqSr%2BC8piClDvAncfUIQS%2FtPiBpg%2Fm52Q60Y3qlmxL8bC6wXPysJhUGz%2BfXe19Vp%2F%2B4eTjIMvdwwXvbP9K4ugMNiRqjFOWp2NJ32Q%2BZNOLV5XQEnp%2FVVTxLq9wr0cP0X19QmsiYOqo64wScUKchUOgPhAV3VG6u5L5Jqj2Fy9%2BUg4UBiMgvupI%2FTTCLzCKtLUWDYM5dnmtTllmJdfG2rP6z3LuBboWnTcxWsA7YgG%2FnCMLsCIb1iMNfzjD%2FlOa%2BBjqkAR1wDiOmrGYepKAgIsowxBr4xXFl42m3wPXMykT6ou4k1QG87%2FKoB8k6pzm8%2By4gF17gIHU%2B3CKldlNUtaQkrcNWCtW%2FyOVPy7lDcKvYA5LAakEZ5zWWadQREvplOmOfCdPQr7QrOupdVJJ4H74wsC3YHST1AdYV198hm62Qpv8FvuE%2BBs32qYm1G6D5wd7xXSKKoVuVRewZfMkzpx7FcbdB%2Bb0g&X-Amz-Signature=9c7649f374fadab8a7340ee790572fc3969086d2fa9c9c44dafada2f1d915e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
