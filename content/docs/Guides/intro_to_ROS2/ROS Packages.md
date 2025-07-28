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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=ac192e36a6b49bfd53b80ff16920893129b1047c8a7eb6f6610d7ca25b884fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=da6b03f7940e2cc67e1f76ebe10cda5cacb5d6fabed7bf333d8243545b0cfc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=aedadc7d696adc5273e9787efba96f349a15711bd423aaf8f7c7e59f8f7604d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=fca17a5411043171acc90040681664d2caea7a6123dea8fb73806b3055d6ac24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=84849bb9ce0e86e44f5420eb12de516cdb416e1672ab5380222f37b61816f3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=c64707c6a7d20b94c307f64abcbd7dcf5f5fbd106f72ce3b84d0f8ee1c4d57d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQL6UF6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDBVgkJgkLrZEcEPo72u1W2qrSaJZPzW57z0O8etBC%2BuQIgeJ9Rd8lVLaTIeCH0G5BhkZRS16JWk9w1%2BI27JFhCaooqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJH1JCj87PEsuC73TSrcA2yGsxfXJsAS4EIt4BAnRBVkjmzDh4%2FnTdHA9eKezbOYRAJ4g7sQ5lAPiyFysvaNV%2B0DtjjBgq7YJmS5QHo12aWLl89OZsifLOtz77sVYMgGoBsyuTsygwvZ9qH55kt6TpiIUzl1PJaEFislgmErOkkEYE1sXdjMzgZ%2BjVOMwsBRVUSurqNRYnupLCWyD%2F9O5e5x3f2iMdjJ%2FpQciNzYxV59hvQTCNfSvdDIXDqXLdLnv2yAw4h5d108Ew1%2FKkBvL23B5MmNUrH%2FybKEcZJxNvuh0%2B9VjUJHRi%2BnU8zfVW30tQmDgdn1Tap%2FyOB2QwKiaTf3CvpNQAVCzJ4a3PksiaVsRIRH%2FOzskOcz8dPyGnTdLfNkEjhcrTcY2dzBo6LEDawEbpxcVlQl52%2B5diS8oYGaT6JdFiiZCUVuiXW6otCYPGzJy0H3yJ%2BgjkdHAbRpqdWLfGnnERIm%2Bqri3Bwq3yeY0%2FK0z%2FuFa0V0XyJLvK2dC4tDzmiIMsua61qPrk7RZ6QneovEFW9jUacYNjqMnm7IL2N32D0wVLymIZAP%2BX%2Ftb6qxuB0nfEm%2B29y%2FsNhLJCcHIdD6i%2BXqW%2B1RjCzXDuWJyeDYMevJkrLXlguCF52MYwl26IJa3iMigH56MLzHnMQGOqUBRXI58VuhLVucrm2zw%2FldHqmTuwRFwx7bJIr6fEOl1pxwFSsy2EMPSaJNqzdVURQ3hLIon13bAKK%2F7GmshSojCDVivNszfky5Q1eI1wa2WFoxq%2FoVUpA%2BmtaqH7b7flgMO4ENfwVzjTO5ajeu0tzJX3FnqUK1n%2BOeMnrSpKAiVaa%2B2Lmg59xATlBtKAvo1rHSTDar5LKPDYOctsW3xj7msYa2hW3C&X-Amz-Signature=bde8ef8d090987df846e4c5598745684c04fe4ebe387c2222bafd68ab41d94cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
