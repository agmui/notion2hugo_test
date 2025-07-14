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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=205ea70957b229cd49e3794ee3ea590f151045853fef233854776b0fbb8aac44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=111a316599c61c4ff83e477a113dadf150b36db31325c8e06e22d88324fc71b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=1edcd32d38585acb122a7620e5ca7cb689874fb3c99ca89565863e6e66d9b522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=8c2753b987948fd3fc8e34450e5240caf3eb9b4776385865b07f3a3c340280e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=4fe88ed2b9607e99a5ea71efb9cf68c4b417da8c4cda5a3a534c64188ec05187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=ce03b1cc98126bf97a0b82e8a8b89150848db2d23a439fd5d2144c675e936ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNT5RGXT%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDWstRb2aw7kQ%2B0blk2IEDAdkoKEK8MtHbN2fOANW0MEQIhAPZn2j5MurLArNm%2B%2B%2FZJDi1ceI4KifsRQvWMGTll30zuKv8DCCMQABoMNjM3NDIzMTgzODA1IgyoXZpkerwccVQil7Uq3AOsRXvbFQJyqEifznTTN58eX40jJhAVBXXlxFNvn9ECTZsqumbcdhgG21NlHkv%2FGh503LVbx8pVRIkIfxZNhZ7Dy2A83HdNeX3yvSuEEpHGaFI3qqhpME82G5VgPEAMJW%2ByD9SWJbVQfvbX%2BVTZ73gjNuHElXghlIreph7lGtMIChPuZn1pWgtYi3eUtXcC9Hkn22MOMOWI%2BIgXULpRonclZ%2Fk2WogIhaKu0d6W4DvCycWCtLjWnc6L5488To0U98tEvtI32kECbY5YM2LR7I623YMdjA0CZhx25oF8jsvlCf33VYfIhMHsUnhvMf0c%2B38p5uP%2FnVs8Rmpv2eAuqnXOfpbnRNGeaqKRmAx9d4b1pPb4f3vKUpbocDOf1hjSPQzc3GgBLw1eRksjSUloO%2BkZqPf0pL%2FpN6WT%2BQYg785H%2FG4mmtMYKaWf3J4esBjcV8ZhcJEkEMI%2Bum252ZOwyz4HudRtN%2BnL0atFYrzAmtxEq417lVs3%2FT%2Fjez0QD9sEhRd8L6MMxvf%2BsCiglWOlqw%2FuPcZ5CsZRrasxqn08i5tgrZHTORDp3eUlxoRJfL4ueUd8l69MOf864LylCLHPBpVqlY2IyEs7HUuIhYUGvyfFWev0ZhVzxBqPdusaHTD7zNHDBjqkAa4etAkETwVqLHdpwzXbD66yJrA1zhHSpkPDKcvFfwP2I%2Bu28AmMWVPwVNxy1%2BbrfI%2FubzaiLR6GnNMXMLRWyubbKWbTq6%2B0wvZLz6vuApIGGkRdMFf%2FovVDvCMFZjmEOUI4sq0MgMTmLhzfHGyykizXo6TjVkw0YXKVQqR8tji6L%2BgpJECQKUeo%2BTHeW8evci0HAUX4erUMA7mwqNf6g6KvbOI%2B&X-Amz-Signature=ba9d711e63a55296b69c5c7b6a022ba995dc8de8d816ea44837dcf1062295cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
