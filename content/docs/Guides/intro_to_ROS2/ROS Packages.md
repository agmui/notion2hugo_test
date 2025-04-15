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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=d677e909c75e30118bd245ce3562fad92126827798d6b787de4fa926b03db4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=348ccdcf42918621cc0665f17fd1051d73a8e91748a885f499eda3307d55fbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=96f95989c45b3a1f48683e05871243f56d2029e0ccd6db1677e9e1ffe824b2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=b96b24fb17036ff47e6cdb51afe7a82d02aa6e0572e7cf654b76fc8f9427de9e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=b0a83d223c1916b3d29995ae1ccd952f3ca856fea72598d2c088b1b29d4dcec5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=f291f7c20057277190e75b8712a11a74510e94cf1fd048601ff62d820b0efdee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WRJVAE%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOMqrF1UpSzbrg5sl%2BDMywX8osZp4pyk3ekmjSKIWwAgIhAJDSQwj%2BnJl3Y0Roj0%2FX1ahCdiskW4hu4wqXvQq0pAntKv8DCCoQABoMNjM3NDIzMTgzODA1IgzjAKaB3YTLegThg5oq3ANWFhMsAj63nEnGrqdY57Fo37pbgANk8OEvi88KBdZWe3yuM5KJVDjxMs9wCTgPtTEWM00rvLSuCXpH%2BcEWm%2BDuHRsG9L%2BdCEMmqaQh5pSrDvfIQoHcejzH9%2F8DOpraiXrXk7XzpvoBe4eKIbCXPQ3mNCxmfuNeqep9ONmbeRWzA68o9Oah%2Fe5LZRvL2327KD6eN1wmYngqiOD9TBFj1nzwzPCyy7%2Fk9XHTvr9RTEamPM%2FNlZlxAM2BCMqqdjj9Cdy9q4lFA%2BAKrshsM3yzFeHBTKeQnPvI4vQzHQhVHZKHlNpWOunAV%2FT4wM3Bs5XJUBM32IK1nUSIscHz4B%2FlIHqHNaLARVoWJ49PoFLTNkYoyvY2A1o7ztREU2YSF456xiGY1GkVNKxtxux8Gqf0Jp2EdEapKS33jVpe%2FLOkbdo%2FB%2B3J7TnWCei5kW%2BDOCSd9JJwAgBd2dOff1X1kDwPPvLodlsW69xARpIjUOaRFSqiuGH%2BdZ6d6%2BsrGgW23xOje%2BvL%2FeqsYmlmp9fASSh6aoSopACojqtw8QjW%2BvJ2TXltLJyGM%2FWpzrbwIu5xuPjyxd3KPlIkyRVGo3ilLMCC%2F7%2BJz9VhdkqKRawfUs3mNAxDBIa%2Fk3cmqsMHlIpibTDgtvi%2FBjqkAZWGqxnpfiqmrQnbEeYmFOBC3kKI4uJ6O6McZ2BBz9MQp6hHC70WHpH2%2B6whyJ1nRemsLQxXXaEQPmcrW%2FNS5ZagIxpmqXzb2odWbq7ya7tjorcBUMbkL%2FI5gQoio6%2BFY1Mm1mJbTeGA%2BUaR609IEw7gRgNZWaXfG289sWT8mg43d0oPJuEYDMnp%2FFOFRdIcHWXsOPkZTlmdOEaVyBihNruVvFjq&X-Amz-Signature=e77e9ed65d4ce4e8673f2b74a5fd1df3b9c88defb2392b00d88c9be9c3df558d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
