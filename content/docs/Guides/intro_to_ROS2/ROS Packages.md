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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=b6f3bfe4cd427b046f10e9fb3789b2d53c87031e671c080fc7a7e81c54804772&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=c3c0e8eb5a439cd680a31f8e705a90f3aa5c56dda827edac81c4a726deae6819&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=f09a617f8ceb084a150b22e972ff86af97bb138aa811564c118db13f8b5a056c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=7b05f1593627b294d6f2667fc5be0f767693a91f92b61f836fc4819cf344f0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=87646c858a7de935e6a5a55b508a053f5e1433f2e014460a4f3de9bc36ca01d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=4711bc2c5c187727dfbe4863988147454ae452c04f402431fb3df771e645ae5d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7RWYGJ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDKHjT5dWm6W4irlJ90VW59fV9BAv%2BhXpugiUVYtyf2hQIhAPHCzisjqRMeYAoqAE6CVbcvWZ4MD0IXTIMGyIJiOp0hKv8DCBEQABoMNjM3NDIzMTgzODA1Igy00sLhGGcu1KJDToEq3AO8w5OlO262Jpa%2FNGG2clE7dzF51%2BvNseL%2F0ybHNQLGP8Getk%2BmcKuAKdPrntAdU6QeqPvjDGj4WH8N5Uz%2FgXud45mGq5hV41D8rzAkeAtrYvMKN17N1w0fuKOTNFGN46dHP9SRC5Q7FEEHhSsGwGblIbElugDYfiOYBxbaGco31SxgCgxOpBjgH3vL3R9F3hqJEXwfC6Ric9H%2Bn%2Fk7t4Uv22bpaQgU4pVfm20FKCAATfMujwoUNFt%2BORVNxuML9HtjRCJ9VyYmQ8cHD63GPrTcmQdkB0V4p8GSBuuR%2BqmJuNIp0m8nAePC%2BUiCoX4UNJ2vHIltHYePorxrila2DiU7vI39Xa0WczkDnefSbiqU2BfZ3xk2zA%2Fp6HFRrc4b0scIiU92bessOxOQTCe6UhDRKBNhyueMv27IYFFUZemJqcQY60OTB%2Fm6FkGy3GPPyGmSBilUiEXsSVt14pVpB6ovEKDbJ6%2FdklvAok5lHzsuCQ3pI4y4ImAlgsjGKvC%2F33Wy%2BhvCkcdDvVpqcywfq%2F0AJQNUyNlKf8%2FF0nsptsiVhfI20C8hc0AV7XNBKgBzGNJ7lF9ET8K3gevGAXqSzgrisqcvhkc80kFPs2G%2BsgMLo2d2QnM3eb1OvacSETCXgMbBBjqkAXnR2eR62lZzCUzw%2BcqBLAj9A4Ro9eTtoa33m9jf%2BXmEos6yO1O78VR7NKVeH5TxvBgVWGBJTDcfZwlkOSCWXzmjL8fb%2FHNPJ0vfjZOCECw3TjLW9VuktIysMjAREHqOfVp48RwmSkuBqz1ZNs9OnlTN5hcb6UZz12VtwMa43oX0hdhYonLcDy8ykcEGWQe6Ymc2A1LsPY%2FCswJdsXC5QZLtFTaz&X-Amz-Signature=d5bb75e36520ce8168b97bdede2a9a78a372ffb2b0bf8084f82522ca26f0b252&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
