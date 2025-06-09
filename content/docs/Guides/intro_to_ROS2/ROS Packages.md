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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=e91deb99afafaaba6d5c5b34554ded1c90363a63efd97ecb4fc3e6a842599ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=cffffe6eb902670422e9ed292b385aa9deaf09269f876128f83b5be4c9e549ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=11c1fadb6b9ea55a661271d778164d61f592ed29bacf0d6b159c455740670a87&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=f2041793a5292c17ec4f2bf8e845d6c10ed5294b815603718b9f750f0d253a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=3ddb766c5bbc4be7238b0e1e926f57cd2af1731b857c5138be6156b66f38aa13&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=c4cf47dbcb8581e5c47d13be83dbd57cc01290880c49acdf9a6d98849be3dd28&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPA7VZT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8XieiavCZClbJGhdHLaOCsGGokdoM%2BNx%2F%2FVPDuDpUAIhANHJo0baTuJfNLv4JKS5drwcZtlcaa9JVoJSw0qX06tkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCT%2BBXdARt1cTe2CYq3AOCx2XTdTV8Iiyhh3F5n00Gt5E8ZHv%2BQt5os1kajZnpAqtJHCb6a3EDKicg43BYg8ZqQR7KLw0BNAeaCs8HqvVYwtycirlRiIo5c4mSkGbsqL4pqrqcTy%2Bi%2F2lGKHpjGQrbvc39Wvn%2B4%2FRcRIXQPMaoAcmFWpCj1d4xxtTbwMsoz6LHrvBq6Yn0c8y0JQr%2BKgf5amso4GAtXVz32v5gPy0p4nMxTn7Gn1vg0qEEguI78ZIS%2BzmHtR29abPIxAAjUVX1bMw9WvylOzyD00356vTxRxQBgvLQMv%2FDN5x3C0zHoU6HWto8fgMe9A6VAgTs3a7IFbpeVrR3lGMjh%2Fg0fuV7TcjnkZ4CvESYR4L3gXIgOVq4Fskhz%2BEjvD7KuAycmH2dA%2BXBTxZ6sH%2FonQYx4qnvibS14644nbeHdEuDrTo1GHUFEUnKWjYixyBFLPqrfBouJaE%2BPcDbWLxOpAAzLMrBvt8lnq4X7A%2Fu%2BULTZBGJeLMJXsQtSMeGD5FSp%2BZfxqizS4UbxWrAkOVdIKDrsov%2F30k4OGRc0YEucE%2FcvPnYUGR2sLrCpN53ce5IWbpcOAfD0doP3J7D%2BJQPeuX%2FTtnvS1kKnYQUnGxjD86ZqoO8uiLXuxuHYnAhw45i9jCf7pjCBjqkAcPToZdbfmoORhYcT7PqilWNT0osiT73WacaQQ2XLssOA%2F1K2DQv45fuiTRXiDqNBypTtYI2IdKmEZBqYNM34gcVchpRsPHMWxFQt9KDRAZJyAj%2Fv0F0PpvPNcZPzpspi6NA%2BzS3wqpN0P4UmBcjIBzP%2BUiANpfpTnsj3i7HGeGqAMJW%2FoBaEjYDGjcdfmRVosABGnt7V3iIaBFh27sMH5r0k7u0&X-Amz-Signature=f035d09b491a88d69a994841ea2f36052186acb6d0008e802273b505d430796b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
