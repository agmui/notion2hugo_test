---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=8a746aadfac77f7ef38047de9db3ee98ca1815861a3a73f566378e134553d025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=40cd15adac9a4ab977d682bfd6a4f50b762bc55efc6a3dabdd687f75b419a7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=32ac01447ef46cb4504abc2088e76597db606e88812bfb03d5c541f03f705f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=92993a82f4d6f396cec8bd4671846da15b795bf5e16771786682aa8d985c434f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=ba94b48e32107a5e5f832461f0f22eb3922186b919f89d08bf57a7869362b156&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=54c304195704b49244934d5893994b13b761a744e74cae50b41c2e3fdb498c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4BZCUM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIFvgm9UZCwYc1DIbNe2KhrEkSyveiCBeD9A%2BYODwM%2FRvAiEA3YeqQM5UL8W8Emhe%2F4aBxIRFpRmF8sW2sllF%2FNDFCc4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNJc0HkOKosZmZsvrSrcA%2FFyZ3suUK4NzuSp9eNr96ZQLo1dk97nx5J45tPbyo94a%2FJDNq7ayPy1QvsWmzvMpOyJccZXdYsH5ye%2FnDfwOs7bYa34al%2FvFpHsykiCnOvjMuEU%2FbQj3hPU09r62%2B1sNjHIf2xrWcMkV7vTQQ3MjJ3gkPiT1lLepwGQdqQn7TBohTHwTU7LaXoZ0S4YQeNp%2BxD7mBgrQdcqNySR9pAaEqyWIrrNqY7UFAzhotcDDArDLqveZS1rNmvop05wS3o14JkwcelGHP49gm8BVK0zM17fogsQ3a0c6Squ1bSoX0FqkUYkEHO7YQW78lPxeIlwOlv%2BPZFi65h7wl4InGlDQr5sBHiQAsHcR%2BrKJCydVx5oDDL0WD2dPIaFnMTaewC9B%2F23ibroAmltmhI%2FJktDVzIzMITftfdrKTcVc0z%2BzXLhYIxq9o9tN3pnobe22Ow28D9%2BcFeCJNRUoV7LT251dpvpwaackYsUa3bBEf8ese4x3veY4%2Bwsn7IMr7Ajzfjyc33DKsuTBLRbYfLhZMtw0K%2F9Rh78DFKLabMINdol7TAeWOgVc3raYQpMDN0h9nd9VV2EOMTh2q%2BqsNVKOXYB5vCplohjTQJIhBWfJTummjICZUW6Q%2B8jJIEFLoBTMIDPir0GOqUBE80Cqt9zQoEX16s8HXp%2BVCj5fr0hY63U3Qj86xST6dlHlXgQbNs%2FqIVLM2FLnlX8qXodidLc0TGobwWNk20UMhdWNLswljIYTPL5TNxeNhPDCqzBzucAJZcu3YYRzARIM9LBP1z0XAr2NhmW%2BhVTwqqfTCze5S3InB26qDAJ4h%2FTCum%2B%2FZUPZ4lR48XmXbxupAoqEZ30RujSAxcUVYD1HyAJf%2Fp4&X-Amz-Signature=30642d80157d87c7ca1354134a31fcd88b2bb6863adbd77ded698c0baf872ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
