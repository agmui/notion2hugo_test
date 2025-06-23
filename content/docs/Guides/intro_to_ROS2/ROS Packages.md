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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=ecc5a4699fcacda4e08d0d3ea9b581d07c53f2d3a59c833596dad96b2c54119b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=cc7ae29a04898142b1ab97ec2d5f16e315aedf3d0fee838c5bd1ff7a2be614a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=c44a89df486554114bde305f4e38956a0b2bb62121d76cc43121c2a83cc03e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=695a0a05f4fc46b9c82448769d81883c30b0ad5f886a2f4440e3af2b9098ce74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=75ca9e787579ef9241f3b2a27a56d1678b74ae81c335e988797ddab348960c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=f4fca6b821f4ae681870fb53cde5efbec085dbdac8bcd15f68dd771791794fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3AUEI27%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIE8Pc1r2IoXTyuiz6afLfoLocAuk1cbcNu4dn%2BJ57eyGAiBhsCeMES1QoaHWlZYoQRT2Hg7oc0LGN9gWKUdBscLTpyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTw2%2BHvQX6owwPJ39KtwDsg4o2%2BQNy%2BTYvhlb%2FaOLUi2YWH64byj%2B9p7V7PEKvBPRVujU5m%2BvYDgp6FqEc7ATUF4aD0s8aIizT9WjBt2nha6oDUiGQGxtYbClUOEfLqZR6v7fPWC%2FAPSj%2B7dpvrlCp8AxKyFt9V8nEHvhkc9rRFgtXpqcJWWsKI8q%2FMps7Hu1Sfyt2HcOoO%2FO9zSEQOW1g9Pv5umgLGJORKWjRTvd5gGvhsIwjUJ5qzd6ImNrq7JnIzFLLj3GRq42y47r0QqpGvQ07hEchTXBnsMphEpzqM1LbPJjsofdO4ffIhG2h1gEgV%2BkdPt%2Bh5UiHu4GpSI%2Bvl%2BoBoDdimP7w63eAINV78RaGxrkTyOphGOIf693bNybJ5t1R3zvNIKmELDaaLCW0vnyzQo2ZTPYnYwdM53WfnpunCE6sZQogebpr8MGotrvJNxaKqyzKdXd1HTVFO3GCAPYTX3wLKcPMAcr0MomAZmietQAMwY2UeuYFJY1%2FocguN15P%2FaxACVEdou3JaVwiSCsaCA3fIsl69muFd5EYA%2FvTe4xnZpUypCzcuFt8PbVy1831%2FbxKjlBnoAdePlYUDXyvKwYG1n9u5Petp7RIMR0FIZ1%2FSsBEFzOTIS0QlhM0cIrl6oD8inqWWMwhqfiwgY6pgHrj7a5eV%2FstOQl3DJVZgP6BdQqumG9KDW3e%2F8d8sP7go9UTL5jprjAHpwHlhQFRjSvtbwBUB6Avx4Xpg6YzyCEj2RNCo2viAq8%2FWOm2AeCiTFmutBaASnIQde548bO1BaRiy42JUhK5TvreMEYWh8iSBqara%2Bb7%2Fd4MqYQf78iRDprPLVejQ8yHFyidWuzcefMNmvBmy%2FhrPOb43WWwoKVkpCf3JHN&X-Amz-Signature=2b5097ad204618409696a0eab6a0d81340da16d6b92c5e6105ff2b4391c75c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
