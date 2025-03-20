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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=acbc046bd8dc78b50f89b9cf2cab56a956f2911e711aedae8a8f6bfaf9d058a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=6cd22590fdc8458308a5afd6875387df60dcefa11bd0099fd7d29a902b865eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=9aa72afd274caf751c8c60928569d8880c249af4a9b9e9ba7e377c6e7f10a14c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=8c73e192ea731c8eb8198d6239104b8c5aa6aca19f5d01d72fb80f3634239d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=461d6f7a6d5039347a521b5ab7dee8def76a029839a194daec52ae847f918c45&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=816c4ac101605c17a78ae9149b87afa2190618fa890c49179e4ae90515ae6632&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKU5ML6U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD3nM7OZHcaM5SG4Or9N3OEXXx1l0LBjCHE4PQNF9%2BXewIgIJ4s5u6%2FZLxoLoI4gho6TW2tWaRYSLEIVTYZdzrhE%2BoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGSAsjLdK2HYzGG2yrcA8NDjqZdv3D4vD19avTlRBYYg5m3voPYecd2HqEGxczD2Yx9CQcSFlhHEuKhRNYbN32vAydsFh%2BelJvroZUyopl%2F3lzjdEyc6EKrrKyvk3phJdZTB0j%2FYGli6BveYbQffTe7ViZQB7yHP7zWsa%2FHVpA%2FIZbchOw%2FScrSg0IqNjm6TZre6FnNg%2FFjbIqD58duYJpkz4t4HNuOKtKpNBgzMy4i5C7wfcUPWDkmAXniituSSvq5Qm4IJSRRPmU0c2E5Lz5ZyFVpv87y2ZZNbrogNQHlfTkNkcqZq5V800QINMxnEPxOKQL%2FXtUQRwlsY2%2Be%2F3AxiH%2FF6hDB4Kos7WGMyMYq%2BLbhGPbYTTgspboNpHS57gr9cYLtgsXIz%2B8iUW7kpAwyAaor0KmAyEtYn1GURxVyrKqKzwgAk%2F%2B3OaH7VNCK%2BNgBfQaM6r0spM0DvHDfovrR%2FLVhmK7JTbD9BowyliiBODza82W2%2B50KbraAEKZbg1N0gcjJ1lvCWAOy8UUV2Mv%2BqST6qh6R5CyiT1wD1o4X0vk8lp1oMZ4TUdfX3aCS9b5T38bjLROBeNUprsr7s49955JWo8jdVSHFoZZCJCpgwdLt6CzyVq4LD0C1fFeT8qhivQRMyP%2BImsdMMNjH7r4GOqUBp4CGFpRZQhFJFVmXaIg%2Bc8mT3YVJdd2FJRjTU4mOx4YE328jr%2FCrlT%2FSYb9jVAQjodiUbS2jrsiec7fWDf1JvWyES6bYbLWd7cKqEP3UIAvnVTyb2UfV7MY0vlYeZEZ6tbHLFjXqIIPL7QFhxYhpKgyQTa1KWm5hHHCCDZgIlj%2F1D%2B%2BJmqLX%2F%2FvoVrxt%2BMota7qyCKe6a%2BIacAyQNF0v0BNEep%2Be&X-Amz-Signature=df4606a0c2687827764a939acc0211b39708af15b3cc5590f81ec3fb3a76b5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
