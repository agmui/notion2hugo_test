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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=a006b002953ec985377374f29799a3969adf6f0dd36f0c459726ee4aa232ffe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=757a3ce56b5f653aef3e8e870cfd8625263414e795605e490746fe56b96b53a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=baf3b3d870bdf3bf0b64188403fd4c23d9abec3af27d460132b83780f09cf81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=fe0b03c72fee510a46cae1948ace1c1b2f97884bfdae832372750daf24132f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=65c7d156979235013d57acb636463e19a1996ce18e2510412c52472c915e98af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=ffb4e76c323078c6e30b5b347be63c0349f6c07da924ea0a6299a74b697fd232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVZHAKY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaagr6MSBVnpRyeuKftnhEfId4PTgwFlrtO8%2F9LznDwQIhAM5vd2dQPsQze7vKwW%2FhYl8zL18lTBwxlfU2bD6wq7HdKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpdrfa%2BlMIiFzjdwcq3ANSwW8ytfh16o%2B2topmgKWNLL%2BR499f9SRZhZl1OTzjwO4hPH%2F%2BQF38s1BI5wb%2BeiyPvjVUy0ptUSc9cOsvsJHrUSM1z1z%2F0Jqijs3zcroNwqHjQLxCgt6B660Xp8YysdEdRu9vB%2BU9y1k3rIN5mI7caJXYyo02QTVlf9lSehq3HlXfNjhEuaaQTs0fYNzGWB3GhBA1EpfLElA4%2BVgtrFlF1rD5%2BpMc%2F7sueFZiser%2FABaPCy9RGuH%2BcIg%2B2PJ6eSiMp6tmpLmGQbWpXzdmYyCk0n3anzDTaECTKzfWYiGqD4pMFe1d6pG4OG4p2aX9BHiI1uQKbgU7a90BlSrINkO0p%2B6nhaznvblRLi9WtzLyM%2BSmqJeCr5MvtLgySGJZi6S74oIhEIlp427yQpZNKDAmFyeSUrOVQois5a1wqCOBovAZmUG19zcP97EfoVH2A2Lhu4NoQWguFlRpfShmC8n5%2ByX39INpeZ2d9EM4DqNQgFFOHbAGo2rY651Ekg4fZMdB6EhIHIRRtx2SrT7Azm9WwiyIhLQgiia7DRC2NOcLwF3s9Qg19GSR9Tcag3quPqnNI1YQLV7%2F8Ap97Bh5jRoev6ZNpdsQ2O9KDolKKpJnRJXJscDM1Nt%2Bs274XDC39e%2FDBjqkARu322lvHGaWXJ0xnSAI%2BNsi2C6ng6GflAYrCUpbNPzAerK9InN0ghxj3H%2BT2Fisydjk85ChMsoBiyhnYQtgmGqi%2BaJ2MQGKGYy9u8UmRjwCondShUnZ3M9kQDRHxzBYYX56We04dHaKcMsz66JkUELUWUz2zs2BZcp5%2Fi%2BY9nI2xwHPE7iSt4sy25I88hn9Ie%2B4k8uY52BjJ4aQ8YKoG3kiiPTc&X-Amz-Signature=e1cafcecfec45e9abbc1b7db7e8a5035429092c60d4682d117cfaa8dd1cab814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
