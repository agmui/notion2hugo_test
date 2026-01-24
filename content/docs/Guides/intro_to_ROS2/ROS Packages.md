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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=57ffad0b99aaf2254d90d1abb9a4e7d668c9f7c9c29c54da7a04aae306ac4756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=a17c35bcb5863137b86545f029ebfaeed019522fb5ed8648071b5401bf8f8ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=e0f2c0e4f2244a9901b660eb1e055e89c7f7a183216b0876421b873427aec93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=354b10a086b31d53a96630051302c2781467623f87555e131e0280c9f175dc9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=1b072afafab46a08e69d299ba2d56a4602f597f42446f7387851b94cb45f3b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=cff211bb9cd6ba7c0eb9d90d685a0e0e5c0bcdb3cdae61b597b676a9fe2e3bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRHUV2D%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCxFVEsx%2FDL23EynM7jMkp66IOVaDUzipp3bFYSSmdPXAIgfdyRbTej93ABLJX%2Fg6ppERKTqZKMFl0%2FvL2d00tsG1Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJgSUbKotXaBrol%2BZSrcAw8oEGLVUHcG2i%2BgSLlVQasMO8Dvug0oDGgUsTrs2cWJYFAx5s%2Bo9Dfy8gbigvNoS7boJMEY23dJcI0W31o6Bk48uX2qFfT6vpco%2Fe5xa2T1ucJOyxQzFQNLG9mGQC2BPtR9uoG7BjYhXvKmjVkmaKz0TmcISwnIGQsw1Fysya%2BFeM%2FXFgbdBLBarGUn9iax343yboU8AIRf9mvei%2FhqCAkpowV8yAsEomugrEtmtyqDnRt%2BaqpA%2FgncavY5w9YBLpQvhLeCdoO6edLrJ5RWgfr0XO3HM5SESJPjBbPIKFKC%2F%2F4O2LYPwHoogMxRvVIOT5ZFFWRAqpK6zXySa9c9q9LQ0bbBtdLLVDzVcC7yQG%2BEzNvsmq9ae2ZRQvDKK48P23kqGW3lIXTibHteAZfl15tz1wwWKhLYKat4WkVodXKEmYEVTIfLfe9oPkShwi4AuE55dICizuLVY682UWu7C5RN3HHiWdpvnYnukrPr87zsakH%2FEG1SLBCU45oWU7zmE4dcaRAY0Y1B6jV7OrL98aOx4oh55IwOIhXmhC9ckERKevEvlndgIWoRj%2BTsvSQ9HI1il%2FqEY9wdXBVRX41ebDh9MwhiL25WnfcGMW1VpMRuu2o%2F%2BnNpFB88ry3vML2r0MsGOqUBE5QSfZy7feZm31ApcxqDQgWgZUclPxMRMpdBpCRjV9BRmn%2BgREjE9DGk8murzuAwtLGovGuQ3RvjKgj4j%2BtoetQuFRxDjsd%2B5h0kGFC9ZXUKL6vX4Bs4vM9eTPDQJD8YDiekJUqey1i2xdrXSkAQ0un54ySvj362ZX47Td0WhGblgdx03X2PWb8ZjT6jwREProGlcDADXCacKw98APSKy6BcOM6M&X-Amz-Signature=20fbf6c33e8a0ed8ca7252a233b29fe5ebdd2b7400f22a6e04667ed6bfcb98aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
