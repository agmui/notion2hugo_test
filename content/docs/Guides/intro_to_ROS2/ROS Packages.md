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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=23c817cb48e8dc3e54f70bece4287cab4e19900cbdf7cd6098aea6c8437df31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=6c55bb3270891fd48e90dbaa71d8d2f3ab6b44ebe950e84f87c517def64a917d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=3f72719c57088c3fbe934f2c54c2097265692d52bbe3f4fa00637580c085416d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=4db554369003999ba47a1afddf31a14231d143aa4a336cde736978d9a6263812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=e5fb06cccbb98f068a9140c7c8b288143049b25a4131d1c96473580180ab612e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=d93f81df652eff7e7b31229d558faf6c15b186aa36e1425d77012aa2a34610e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPY4YMAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC71zblQs7tVaKH0o2t04hOJmGqSFiZngiaGSxJHDPjWwIgAo70usSuqUi6dCvqY5itH6PqMQK2XdW2NP7rzMVuWD4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ35FoCz08SOj6I5ByrcAyrf7mozsK8%2FHz6un8R2IBMLFkK%2BZizBMU6FNYKCy7SUK0oq6MhQIvKVydjQcsw%2FiGibAedlPUNTKdnbR59AD4RdpocQll6g4L%2BqAVphcBlffZ3iGvCr%2B%2F0F4hlyfIiwk1ujU915DRmVt1uXfOzb1itkq%2F1yIF2BQR5ExuvJYAExXN0im%2BPW1QSXtmUrVdfd82Ad8jUfpzitUTdCHuwV4j%2Bw2W8bZzPN%2Bc90HIy3VCdQLVQZe27kXzh43lTa2jFaipUmsHrt7d1HKnKXuZhmE1gk0mksbt2v0QjGJpyJnaxT5STfE4W7rBcyk0mRTiqeQ21oErXROr7llVdUlrQhg0KT9TPWUTPlS%2B6AgWFhv%2FYKoEFUQm68hVRpLWW5Nz%2FsjERG%2FJgoVcDBSj2GHCCTn1lyHlklMUtjfVzF4Cxt0ag6Jqhzg3uj8JJtWIMpkK3xyuN7yCy2MEJhYTnZfE8OBtT15SBaSDIHF8nUPKLTv4eV%2FGzTm8%2FRBx31rMnFew2cXhl3V%2FDILsUB6WYn9f7idfNlZRNllxKkzWgVqlw2sK6Zn1eaPV3P9GpwPfsDER5Iz9SuO6v0ZpMwuvgYTackwgFCvHvLeUZbxwDfuiB98AGmISiZbYT0dpYATCvtMMqYo8QGOqUBH55iBVlF7vr0I4ObW7vF8U7Ii2sfb2AdqbqGh%2FdtNnC8hUSv%2Frgr5259H2G8p1S3xzJGEdkaO6OeUXjSr%2BxgYBPf0eO4lLhYGpqC23Su6jxJ7JZ%2B90rr18SKOv%2F21DTcmyTox%2B%2BwqiBgpcXt0p2%2BlIBWkoFnOaE667QF2z2Ba4Dy3UP64j9czI0ah2ReeS9%2F%2FrGq6N6%2FeT5cwsaPT3hlqUBEQusH&X-Amz-Signature=6b22abef8dd36dbf7543df7c408877910b477e0b39111b051ceb7693dbca08cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
