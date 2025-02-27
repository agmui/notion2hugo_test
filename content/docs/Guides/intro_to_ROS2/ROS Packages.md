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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=1e00cbad07cc21472513ad25cd414632233d312b0554b1ff249af86b0ad5c3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=5ebc0a2133a0488ec11ec3cb962055334ac8d47eede95e0427f7e45d7b7c99f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=3adc6220e5e5eb686f3b7b2ab4ee82cd458559478d78dc89a41c8247628fe656&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=c1c42b6637f554d0f30f190871a6298c2e622ae2867049f6b2a622197e44b82c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=df255221d4fe9b86f42a89c11c26e6fe9111ec107e31f44d3369adb1ca8edc05&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=bd289a3c7b6c01526a61807f2f723fa276ace803fdd4481ca5be5a0c020cbe1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAERC3B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDl5i5MueqTlEC5tc4da2TUQXLMY3FpzlCNyIJbIHFsxQIgL1p9%2F1iB9rfZ1FMI66O%2BwoZMBR8HInRc8qteeF%2BnOn8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHay8MqMCfWhnHGwmyrcA4ecfXEJLWWzwyZ9FFTUgaN4%2BiAXG0OpQxDKmaZE5L7%2F%2FwvRlNeWavZm1i6JBIQDIvl7RYanIAfyoQf2bS%2Ft1SQqPgITVk1yu5SQ8QMg8OzWarwdJxRXh2x0S5JGkfjGcL%2FBOmBStfDzRAtTFDc8dJP3hapkTmL8KzLtc%2FrgpJkDcpmTZ1BqeYUg6WnrgLyn%2B3MvNMa5vLHhvNST1rtIubJhXr9gTz%2BMzA40YRfC4GAe9sdtF%2B9fkycejpc8xOeyhra%2FzLW916ees%2FqTzAPwy2hMCdW9%2BIWR8A6CSw6I4ckdQEyw0%2FXa6Efa1l3KJYOvCy5fKy3I7gHEkxQuQAkNzi72a3eqkvNHEaT47X%2BZ61ACIg39CLP17GH3Np0u2GEo9hrwLwjlgNh00NXGTZsdDHDqyapE7l2qeTHOu50L0OgpLMbjmjgLzLuqJKHxYTwBokxrRzD5QVZrxoF%2BjpLeEyXtq8fSH%2BlGum5UN4N3vWDi42pY0ZEgzMg3cvG%2FN6QIXQVkubsdtSp4W1ZhlNmurjD9stt%2FS0C6xAejj1gWj4B88vnja6xTon%2BlI%2BHYNd5htSGIHmuAecMzmpg0gnhXiOnmjVlmFA54Q225oz4RaXGepZ%2FxdxUSp4b0BIYDMI%2FSgL4GOqUBXi4ebOPC%2FOaWwvEIgzwwA2SH%2BLbCqWDOIxzgFlBDRP9RAkUOeGkokBCFT%2BPFf%2B%2Fo%2F7ZEBsoLV8op9tmy533RSWUGtEpcKT%2Bnz%2FeJHef%2FpJYZFQQT8jxKXryZ9DQTvuVAfnr8al8tnEAqHn%2BFeX8p%2FJ7hxnMazEOrXxU0iIMWF1DlgqkuMP1RzCdZxxH1N3Tf2tG79Rw79i9DnFZi5xQSB45De%2BTH&X-Amz-Signature=1b3a39181be90c630b0ed9fcac89480edb16aa5cb7e10f08105a48107f59ce30&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
