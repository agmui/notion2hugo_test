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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=14506a1c9259dad5ef2151726e2b3e0301d07d84f91c903f43438b08caedaeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=9b358a108186708cd43e8102237f589bbfbbd9fb14f01b975e01afaf0068ac40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=ae91496df694c83ca4e0673876680f93331fd3032628437e2c09f2ef91c0e5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=663c28a27e6a64f5526043a46051ce23b82d96c3abb099f2ab7bbdc3d6372ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=b85c6e30771546d8d7fe6cb588823d5b6e89e3fb688444cc118f5bee297a64e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=6f1e3a8a61f9fa6ea0759ba4fe075264b0060723f35de6a23d46ae7a980cbb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627QUN4WJ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIY4pSPnG5TGrGc%2BIKODp3Wo6anQtl7%2BeOuValkZycMwIgWhLHNER536%2F1EHuM%2BMyamqe3j9lv38RgJdYWHMn2xa8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFj%2BYQpNelQYaAtrSyrcAwUJt5CPNV2dgCJf44gxBu6V34tbJrr18sBvymtfdeg4FLJNfWITKAD94lg6cSfXyU4pJNihlIV0DenTmNusnx4P3oL%2FBfEhGI%2FxapJ6rRlddCykQnFu3KoocTx7zXKmEF2gqdKkXmggFPNA0Yaelpud3x3%2FKd5XW8OOY22BIYr3BePgNd2WD3rxZoXr%2BSSURjcjbNBS%2BGbgqfZNnFAceGo1KkNUMXlRDv%2BMdSJ%2B4SqRzif%2FBV%2BR0lIEevTMUV7elx%2Bmrd8SRXFsjxfu7QOiqi1X%2FOnY2%2BAbA2yXo6gb3RtoR4wZI2TBi86n4Mm8HHQ6BD66KJM4k05pFQwrEtLf1vLX2P8KtxDLhtP12JiL06YLnyoCcfgzvV1xW7234qEFwRAASvRJP6YR%2FLcZDrw9gqwlv5dg168vJFPlH1j3FUzZBKhJCn%2FLbSY9IonZBUd9e8z0RIAqpsFNZNvbcwizV7vojz%2Bglu5WDGNQj0u4dwJgvrprtTMdamxE8JXWlW%2FklGXi4zO0yibQO5LhfYjTW%2Bcsw69UOG0OQDURhsgOCxz8tGTZdc%2F4nC87Q0SpqA5Owg8CN5GErtwpbA1GV19PmypCwWKLBCcZ726ZnbZeILmxpNdC8zpY6cjihHVrMO6LucMGOqUBv2lNru6IPaxGCC9CJVI3E588KenamyyeNsN07cVAkpvj2Vyp3zZx%2BIevvBWkfdrptgwWNoO3vNGDUp0p8X7sPIQRmvV7vSlrph7lDxMZ8tqi2nnmnpWyb6732bPhgeENWhwlGTbDJ%2B5IQ6186GS1%2BODyGDLiaXs5G79l5RNAKIYNYmPVV%2B3DdHksuhzadKO2M1ynvQyRbfxudyEtRaHQ%2BHg5a0vj&X-Amz-Signature=18d4d8bc75df2bc841ebaf95f97dabd7d7ab0f0b76bce570a1aee0e4ace9d689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
