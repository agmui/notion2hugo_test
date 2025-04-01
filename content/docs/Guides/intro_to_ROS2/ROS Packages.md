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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=41bd9a582b52208ce171a8690e223fc3b9978e22ec8c48e84ef1aaaa2a04eb7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=2d113d99e7610d3980c79221557136ac82703a8171a393526bfef18085050c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=1a3bb8be1ef9a489e588e52f1d250c373eab8dfa75b214f78ea66e65803ecaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=62037aa7b24f4e11588ea03aa0d2c46c0ec63af077b3a0d8eef241d69d89b9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=2c59a534e99fb935189bf71e27221e0021d6bd85c877f2b437b50216ab115d96&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=a2e6cceedf0dd42933b880b9156744d3f7229afa2b166f7a23495db7504dc2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSJTJBU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCvZhIG5n7fx3eyycoqWKfMrvssMetoherU%2B%2B%2Ff8SMpIAIgea92q1kSmhOPdkHtQMFJ2r%2BXCRf8Ve0SYSUQt57udlAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETTJbCcIzgOS3wEkircA%2F6YYUHFl0wiBfzqupOXLrsT%2F3GRVcJUSyFK8MPM%2FHZ8wt2mJl5ajUA2jBztf3ReQhNwrpVClzvFFJQT3CfCtZVkZIH6mtYDu2E1iGbR1EgUPXSXDkzfXj%2BgIrLh4FsGDXF79RcM60oCQeDTi%2BDuxM6EQ6HUBA%2Fc5amsQc6QlnIFNRdP1KAoiw1i%2BTpX3%2BBgevisoCqG9DEWAiyEGN0LPR%2FfwvaIv15hM8vK7J5b6oCNqBPlf8JDKHGbIMwlMTo%2B3n5CDt1PCWDMluone8FLZSZXJztJ7zCC7ht73D23trk%2FCEvPEW%2FwVCah8VDv8Hki%2FhVdmkvZmLxIJXCjvR3vvrTAkDzndMh4gipRFr%2B5XNRWUIbA%2FlI3psA15TU%2BRBMERyX22ihvuO3d80aHLvYfMjh5SwExdiyaYvqicW3ULa1rpAwn81dEMZV4srzx2505Y8H%2FMXRbhNemisKfbRNhHcH7q0bsrt3LSMCmRdklTGBAUmwYW%2BFAu359vbGHXCVn1AaOhzpPIlMHjf3yHWYEjyMsUSUAck79YkJCZQKxlnklcxyq85EUTy2pUisEBnVTuqpYO%2F2FwGVlQQF5Z%2BiTWgySCT3JfddjZA4jkErMdladaRPV3RYNgrmgUQgRMJ%2BKrb8GOqUB%2FvGZYHzsltzqtgmxGj01GlDCxAjr4XxHTLsKcpxOp4kvsb7a0spZd%2FKQOrLaaEGkpWvGDep%2B3GVG327%2BFn%2F4%2FKCHzjLs%2F4hPqqXoPVg%2FIoqywoaoUIQoNHePbl6kL1svmztlkFuoSa61iwAY%2Fyfar%2Bqd6wqK81D%2BL23siVCGv3I12UKvaounYuh7nR3Sj6WGJgWiUGjcmnAmZ74J5wz6qO2INvjU&X-Amz-Signature=e5cb7f6f5e13151d86d20d99711730aa519a3d16fee07d6791ebaf3a2abb26d0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
