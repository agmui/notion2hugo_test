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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=52c2414c9418a3adbba52ae0de7c0af290f92a5ebcdf8564e296966607fcf2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=36f03f63acc3e86a734df24782472dafc4ddfcfba4c4dc1b7190c5dd63c57d08&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=a847b0368c27f1b366576d35941d82948b6c4b8de5c5da8be0101426ac5a07d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=0042d2f4a409732a12cf5c2a3dbf8b4e36fa81e367e7fe44c30bc3f94da7177f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=d5c3470357c49fc1a8991cc71023a6f99a74f0341c262499aa5d4e988e761dca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=1d1535f9ba0e8744c93a42608289f961594b5552aa07b478e6ab6b430b1c73f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFTZ77D%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS%2Bw%2B0%2Bcw9Z66Z5NIVKEbzB%2Bvy11jdjFZ1i02RtWKbHgIhANwF0fUSD2WRLO%2BUFTLv5eFsQkpXQ8elMCpVFei11nkeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5%2BADeO2GGYynkKtgq3AOmLbtdS%2BsRVmud0zY7W6ptzTe3hjbeJsFXPHqVIw1fi6DX6Mwi6IJg4xPNLW6jWycRhPThbPiRXVuYKmL2koXIBW6gwHCW2EgTkOttb0BYjqzRV%2FvzxLFGWxbgf1MlGH3LViRWIp9NAOaJf%2F8QGyTb%2Fg164wbT3G0ykjrvHjtQGRgMghKzophyR9NK48QvqiNhkYIUOipSz%2BATfyLfnPzInxDeHuO3V%2BIBni15mJpTbDU3YdMGVxh2jYQNGZws6ZwXo%2BKnyAp0wa6BrrKSg2%2F%2F0b%2FhFqLTfbZgUGbhCeTTY0KkKdG2W7CJ4lQJj5FAFpAvMqeiJKQhOeRKISriJ10qMoVO09GtCk1lRukVaYa5wcOjOY33b9zWt3gnHpGYJYv109AB4SHw65mYLfSRRaFacOUhPMTzfNEQpegRqfuaUDvGFeYInqCFKyog2wjn5mswTxdVBS8mSSP6VEplVf7AZGwNC4VW%2BVsXPak8cBfcJl3iXfLjdgW9uxkYZdafGbLfDVrmD%2BcvsvM5b6qWWNWovjDtU%2BVjnwGydl7a9pFPkBKGcOsA6CjXQ%2BHtw%2BckP1gUoqRxeKeFectEzaiyUo8jaOJfQxaO%2FmKrucL2P%2FD6W6rIeNNXcgKkzk6sBjDylrq%2FBjqkAWgEYo%2BSGoDRju7vXnuUtmckwmy26IdThfU%2BmegCWNVop2yYr95S0CxBc2IgbRPk6OSLBByDihbl8wYuFs1yp7%2BVmAgwI5BhyVxN9qA%2Bu4N555Vq4g16rABrggVmy7gTnQ%2FEbMIFG%2BtekSV1FFK4Oz4xcRzevN6z6Lq7ZySfuZTzZZCjMznfeLCLKD0tHy929hLs9UQ76vmxVsCTLp2Bqk5SM5ZZ&X-Amz-Signature=d738b314fba62482a8f9a5e0aad144c6337bad24d46a32955abd9739d11db958&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
