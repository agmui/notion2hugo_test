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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=e6369fbb2a51667ff3811fbcd06f31ce96128a540efe376e07a3e88109697766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=8ea5b992eb3faa78b92f5c0e020a42749f06c6d86226e23b95d7c25ab3aa7c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=c155631fecf70e5c57311ac7a118cf1e5d6b48410d2830fe99e6c5acf5ead57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=eaf8059df98cf0394e26688e0bf6abddbad07cf94df815b87a6157d22d3a8273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=693fb218a06f75757f094a7ab697ca9ef59869bfac8e60850bff2ff5b9eec164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=1eaa4ee42c91b72ccc4a8b8b426f921236bbc4622acd6794a5292ecaf7cc56fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKBV7NH4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE5Q6%2Btfvpr%2FaGszbzEFQ6T8GqnEJ0g3cxcMWwd8DRpwIhALiytDZWgeQSAuHcD1A89Ym4TqXisOMO4DakwdfvZMGlKv8DCDQQABoMNjM3NDIzMTgzODA1Igzf%2B2pNgERwwIXBJXwq3APIaI%2BBvuPt34yNr28bKy14pOOP04X4ajTJfmnXyAy6ryZKaGK%2FO4P1NI72EHsPN9co%2BFdAfvq8xhgIAXU60ZfXv8vGAVDVL%2B0fuwR7gmkq7x0hMcObZPpGHqVlPJKZqdDzrv%2FM7J12zkgcPwTZ%2BiF3uH6jyEeffJlVrESKdob4Rl1QadrdiTRgBVgaEr6DWnuBxG%2FENotilABcglD0rRsRaaW3IxrZF7QGVVUB1MtNSBd1Fq7Rq5aNfCvqnmKpTN6IKsYi8UHBFrxxsOp0atYuXXTuhYYFhRE6S4HRHJy%2BAP%2BUmR6SX1nehz6PQnPchTLJMWufQLql4u5rzmboZ6WKojzg1H4PVbAAjqtNjQ74YP3MUyOilS1tv1H3qoS7UuPl15a2A%2BMUyyUmyZgKQwrvB9AfVcnlQbIizIKTMC%2FMluXYKGovJloPmufPOCMIrwQ3PjqPb%2FZs%2FTFjXU2THoAxZM3cCwF2CHrnssEABXNAc5Sx5W%2BojtzZt%2BwxaGcUurpV3XzRb8PJpB%2Fbdq3vff5I3gHAKs%2Fu%2BJiBbEHVp2%2FIO6xjKUOvPPuXsTlj38HzAC0EqJW8rBPkHjWi%2FhIcSQ4W9vlDB71fXJik96LQVCdq8IkEy2zg9odNSCtTQDCHj4rEBjqkAcJeQU21re5D82YMY%2BCHHoOrFYMKRdfUhfgPN4gSvqIg4yiF3wWqAaKH8S%2BYWBmM1m8D8JH9bkc%2B0%2FA6Ej0sX99HKXQkHYjb%2FTqHZ%2FryqBIvgvg1vBkTUoP8iq3DjSvd5dmmEh5HegT5mht6VRqmyR%2FzWAJnDT1vfkbFUqmmmL08qImYUL5c%2BDoXjXdsJyvSu2tlbb70NfqObtUEw6ltZ4gL%2F7y2&X-Amz-Signature=95f1357d83a3d701eef3f836624e3a97a48bd0af9c8421507ccc02bab192b88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
