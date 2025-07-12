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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=7dd62bf4eb804d817636a4fdd9471f5471bbae52b2ac65bde74c3577f357578a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=ddcd51160f8238a40d6bdb71c83008fe74bd48fff7af919a918f4d9d57a34b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=d7beab0fa2268f18521e4877938fd6d7247007d126419774b7cae6ab905fcde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=ba2c73af3c09f5f48b5f8448853b5d5672cd039bc456167bf2cb0a794462dd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=3c1d0fec4c00f25d4888499d71e36a702a20c62a6c3a7e67912ef23db7c6486c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=205ea3e9ab9a9ae3e73ee31adb713d20db31d910ed82bbece683604d7e9b264a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4YMB4T%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAm8XXzCRXW4ZiYnfDa3n0EoiXNILZrUCWb17ijfgizSAiAGIULZYNsdDs1yUP1OGUEic7BIqWXJIUQ6VTeJmXU5liqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMszrzKgt24pt46z3kKtwDArBPukgmJ7TFZcwsWUH43ZWc4acdhT0%2F5OJAXiyxGAOw5gza2XCnT%2Bfr9yFtRFCeHB1E230ZPTiB3w%2BdrCAhpFVJOzq1A9jbMVws%2FXRPhAr67KLvSqvm81gUmS8o%2BUzCyytroZKoYCVwsBaX0Rx2iV9vc1JHwx%2F099FLZTUz6VJUV5PdU76x2fqEgBo3i6bofd40j0SqX5gT4AfJXLKse5hNp0f9Vo2lfMTuMsyeeIGCbFFRXZX9OqiaG0d%2FeN%2B0UnvZatR6b88pCl%2Fa46f6YaIiqvXl1AmXhYmJJKrPS7BiCQl4MX66lXJuTnNl7mBZgfYs8ebhDjwpbB45aBfkL%2FLBN3RC6znZsXQyYJkXlefR1B6jGCC%2B9D8dITkInI%2FffwslDqwOucb%2FjmZW3FcuGjLbLNfBxwR57v3rJy6UAYyMmVF7LDfACGA%2FKPk53a2HtYEjNCFu5m%2FJHISI%2BPU4nGvQ2RJnSAy5023AAYbY4FGDBNMv37iupxf7vgjAbBDI%2FW38CVqfSf9TdiDOrfilQrzLDHOLckuZEng%2FRSB9aT%2BgivdZG4pk43Y5vIj48I62T0BSasQabhd2SS3OdySDja%2BaxjCGHl5MwOPMQHx43TtRWS9YH4FaU%2F4GpwQwhoXLwwY6pgGPFync36zkp%2FnVKLGli%2Fbq%2BiLwFoXKWzVNndN9tgozPm8jIhA9pKQQrEREK1cKx%2FmIV%2BoGT2mCBSdxdEG5GNlck6Sx%2ByPHz00bvtiznqtupHpzULdeWjzuz%2BQACA3vaPJRJcnYErbneP7ab6N%2Fgc%2BPYqUPUE64%2BcW09w%2BDGKAY%2FVtA7ss7FA25w1%2FpcPPAy3R1UnGfV8RRN7DtlE4b74qIgSNFhQFx&X-Amz-Signature=19db3bceed1afd140f3676e31747f002d13b6bb61b3596656cc785c418b80b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
