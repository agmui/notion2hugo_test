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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=787298f2025d5a985f67a3bb6199b85ff4903a9fb1c68d275d82ae62f5445902&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=2cd22c73d05f1b9126e77b952e2205f609f35f3aad3b1b6b2aa46b799df00f74&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=f8a2d8f65b99c3a91adaeac8de55ecdc739e1d423cbefe140fe900080467a83b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=7235e8ceda64f6be3da2c6c6c18bb2816d480b2a93e1dbe5d41415f3099c9a70&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=c7a50919f3da12ceb83babe67634e2b6965c29685889764a6fa42dba9be18a83&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=893ecb9cbc86c58bba62d9d8517aa34904810ac51c9b7d4a059854220177039a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PIKK2%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcSL2%2FjuQHEj1P0rZ5P1kzm5XenyGx8Wtx6hvXTuUcgIhAPbFAk8if8PaCxaZouel8CvCMATr5pMN360iGZNqb8exKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxcziJ0sycnRzaNaEq3APTG88j0Z12ZEH8RMej7L6%2BLarHFhkF6Re%2FsFTINSXWXpiIUue9P9ouxSWyz%2B1uLYW8T2Obt9OQwcNIb%2F5uFUkX7JztTnUANzXbtqe2EtSNzN1PtOT5z2IeytUUeOA8ZV8cIqRe9Qq52HhPeG5dLuz0G%2B%2F%2FW6bZYtZv04ElQaCaLMCQimoLZYoDI%2Fb%2BcqKTgQESg4yVnd5HIBvq4UN9%2BYAKIHZGNx0PY3c9Vm%2BTACGasN6fmQCIW6PGf5bvxY14dXuRaaW3FD6KOElpLYtaqVRFBGwjd%2FUTbXjrPwycYUuj7smRfpcJmEOz6%2FjZUv4lMJFoxQpccPoxiF6qCTaJMqKTAPWuKEJF2FkqzK8Q5HKGJC2NmLDVAqh9xwkahVFSWu3cXP7oxZmOD8zDKpN4VHNqayM67mwRvg2P%2Fd9zw9Pk28N%2BhqhpxO2wWaO98E%2FTXSYwRDZ14nXeMvTv3gj0dqc8wZbSzKIDJlA%2BhjNDD7ZRgeqR3YK%2FhcC4r0DwQTwwARQqlkRXDsMA58fZ1vL12GGKRalSlVTIt853gATv0cd%2BqvtyNmiFSlZ0%2Bq0TNdtF48PkZibf3dzaBiggm88rNe5Rr5VGcbutyE0BZ1Dtexmkti8pYrWj4c8DEBnHpzCc%2B63BBjqkAXhzlO0fnxQp%2FHKbAvHptQiR4gKQKUC%2BYKHX3ddBtin0lqKP2kxV0xxmpOhaz8PFfHr9M%2B0A7LUi0NVX7u0PZpTDrnO2c%2BQJD%2Bpo681WBDyfiTt97J4R1dfkFyNrLqWDxQ8RPvSG9cyRv%2FGV%2FeHnkxhkKjFI6VArOe1DBSJddv84JXQm8q9D9Eb%2Fqguv413AJaZyKY8a0Z57%2BQQR6D5lyIbCPzvE&X-Amz-Signature=d1dd9cde7dc766d9e486f4ab209b251846845cff3f5f8641df165b05f0326f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
