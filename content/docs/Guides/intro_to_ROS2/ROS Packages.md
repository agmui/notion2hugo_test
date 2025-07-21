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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=78297f6f819b816a1032fb16826ad4722897f0bb6c3a6ff46c2d82d116a1bb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=ee57f8fcd8e8a3a5f68ee2535fe102808303252146f457cb9c92c0a5985ba9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=a03b8b5b82f598401437528c691b1b5593eda3878a602e1b409ff670c4ee7482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=4999edbdfc7248170948005670924ec07840053ae690c0083b71250405e25486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=0dcb6824d2534d8b6fd1a379e8a0d2e9a2a40d68a1122dab9fde514b39229034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=d68c8ccd8fde9c682948b6fb406a7a29f9552572534b9c872af579a9107efbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6LN3AR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2F1kqV%2B1dgT3uRv26EbRjmLE5hHKuI4TOslZW%2BDbG4wIgQxUP%2FKtMi%2FmXZ9EOtyp7yN8sL%2By5%2BLvVKjVLeK2RlRQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtQ9smSx8GwDhMY7CrcA9ZuxtBmAE5BIM6NbX%2F2PjfBbjW%2BW3%2BjbS13alwkmNY33tO5qXYrptoAqGLG%2FWzQGPLkTlaSs4rEuXjRxvcL%2F3uIzY3BPXFnRgTtKdBlWXxonBoUO3RmtJy%2BVgpz06JOS28rcAMrMfc2VWq4SW0IxOKd7YRk4%2FF9fmFrHtAkLOsebVt3DvKnBuduXXVtFV%2BBrZ1Zw8215X9%2F0CAosZAER0s%2BtHozrYQTd3vyUfWGSD847ivE2uODKlzIhDaQPgnEQYcMKh0nUmwjVleh9xBxZYY8H3Xj02%2B45jhocCmtDjWAznssvRGaHhG480a6PFPVEEnKrmqaF1JxulW%2FlgjPTVO0gpl4KYxJ4te%2FESYdYHxuWQaVsiKHfjjPK9sk4UZtQ0ie5kI0vCduvFX8pC77AyoMFNoOnvwAY8MW%2BckG9EryKEXjWGNFETkIzts3v8dzUKQ6xepoNALOxxb%2F6bMYkQkyXxv5FvYSRF8pmiQ3r9ygcRs9laOwwu9B2ovjhLXiL57I5MvYLm0%2BFnX91aG30ECR4kKJvgo1AcFwegsjWS9GDZoZJ8jnalplqjaMu89X8doKhlhTCBd2GS058Vr2pyrCd8OkiVZJcvm0s3b8prynt0MxqX0YyiBIEu8ZMKbX%2BsMGOqUBFSj0MAiCxmxS%2F8WpT52%2Fct5b73%2BRxZSw%2BnqukQkTykAhxlmjDT0zO%2F6C7PefIuVGZsp5IqLih28ngU0ZyH7I5VfdHI2iQ8%2FGrMEpOQnTN8ek7mO1nQrRI89BqkcE6EL2Xr3vCpncXobUCEJeghUh0UIf2wmpUy%2FYfFq3uMGfyCQcJKndyCcZ6mFq0oKqlbFw1YOPxBynRuOI%2Bq9aBbv7JD5NNs8v&X-Amz-Signature=a540d37b2e5bddfe9a48a33cd912dc6376971062810722196baf4434a084eddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
