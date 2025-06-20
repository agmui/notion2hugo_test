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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=79178a47e7ebe0d5f0cfa51161610285c3c029d643f9787ed9a7207f70a55636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=fc949945f25bec9386949b3646640732afc036ff13fe1a9e81d02ca89f0a23d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=b94a613565d1f0aa4a3962d0025225f5be4d0661b2e96d4e35fef76957059a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=a49fdd5f906bb583934c91e7f674206ee0e937c44486b9e3217a152d8d473bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=57d03015a4882ff329b47a77005115feb6a46b37aa6f513c9b1fbcae11524fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=14f76ff3864e7d4ad96869d6a82ebc6b0f76052d31c5719a392e084c443aa0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSJPAB2%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd0uR55TWHSxbPZ0Z00SqRx%2Bhf%2FjuCdhHh9VYuhIeFTAiB9trRZNtngXYqzSHDCR8L%2FPtZKXv2nfyB%2BFKC7%2FOW2gCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc%2F5PKyxfRokGvxfuKtwDOS2DAx%2B8p8uQyD1oMFinUMnXXmJiymTcxzLeD48Kx2t%2FBKuFitcGrebxP4kZXutyWr05cdYV1cHQgMyDzzX%2FJaKBIvIGQWpshJb9y%2BHE55khfXjkTzyLMuNartNx4CJpv7kbD%2BPg5dzajmCT1wiEXDv04nfTQS1e1WyUHOJOeBd8%2F9k8S70sIP%2FVXZCu3Y2MTbtdrpan0KHGqpXcI2ygxsKsU1FgzFGaSS9uyQm0U5t8PvAo9bc8QepeFaW0flVmEdbNwIgGDi4Vf9lqxU1Ua6muD5hZ7JxGNh0awKPNpzjF9JoKARmutsfVWm95npWkm88JpqVoWYCNTLn1z2hoZzgvMU7fWNjiEdXfx01V67v1DbkHeN0TZ4NvzignOoU8qiCVcKF7N8p7R5OYH3PgVcEeJMsd%2BGQ01nIGwzsY6L8BmqUQch55k4kT8PyotLOjIsU%2FozNKBacV%2B6HpyCZyUbkjSnhYY9jTLgMDs8%2BD09mTJYFsJHuR7Le5Lq6bwrKO9KTfdsTIFJkoYApsToPpd1vQSTQgtQPuCTPbRywxcEWGsX%2Bsx90SeALK6a417JMFQEP9AkdW%2B39enDDKI7IxOvK6EjK7SYzPe%2BRQZp7NNzF842EtalieV%2B6G5f4wyL3TwgY6pgHfreWhunr5ch6ocwNxzsGe7PKazEwKmjV2S72ZhOSfC96zzlPdR%2BBKwPDxSSvGG%2F115701758g7y5kCDCsFVeR6nP0rL8p%2BvYl9U%2FMwy7nedWjc9dlmlMN5ivAAqMtm8M2cf4GZAItJKOnCeAG0fOdWb6xgcZeWU%2BVmw%2BkjtmD4xGUIMXQb5wIFlYjQq2GGrbWto3K8mG2gYknZlxd0Kso%2FXbBwQ6R&X-Amz-Signature=95ac050f4e389fbddc55a73de34edf1c448f7a65326860c8fac2e4bec8482ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
