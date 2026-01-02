---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=d7c1c53d044e79a705272025d9ce71a30a00d303bc6c053b7df183d9e83041d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=df5605e094215b47cec6aa54c05c21ba3408c2ce5cc905a2910ebe5bdb132c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=38e802fc9d8b009d1c7425bfd613857e2c7011cb8fa727f9576464409ac0de15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=6968f359acae44229fe11ffc2f357f63bec48b2e095d5d62331bfecf4d524da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=1be6ad4ad24746055ebbbf94d978b14fc5701f5fa8a65761c9f925c91d2629f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=fe3b8d9c7002dcc00846a0c0d34ad7c2dc654d7cadaeca62f107e3f20ca29a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAZXPKH%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEeBHR2KaGt0rdlFDVyWk4QEcn7un5Bp48SnjMhiyZaNAiAU3vWpt9WF47wLXDpxSblIbCOMnklA%2B%2BcQXTbliCyb%2FCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiiE0G4kDBIIzC5ahKtwDq9LW8aVnTuJupBgHgC0TiYyUhBHIj1ztGXGcpUULf1H2WxONn1wMOMzEnMq9vcGlW1Ico1DHQ68O8kZWc8tnVgMPUOsuhHN3YnJeI37X0zN%2FMPaSxgn36MsZJ8Zbu%2FZ8CjV%2FZdwzBBUz4SMOKG2eIFd07AgwpicjIhBHJ1KJwroHehiUmCbBotKhQGGa1xzX9t14iJUZMkmRsIDPDBGMFf6QJjIXDadSL2yl4N7noPEpZFPAE5s3D5UAd%2BPDDvwuHRUO7XdF9fXxPc6nZrnscqdKZedm89UidaGvDA3P7S29SkKeQ4qlyATDgQOOrg5YmEIzPrf3eHKP0rbcoP%2B7dR7QTIHfHkvSGMPfYh4i6IKlxNeme7Ab7vITdT%2FfjOOBFJgcn%2FjLfA%2BwNLsmOrfz0TczCCoHOpXE1cKN8f%2FI24Khgg%2BohxfM8UoWLPJcpHk0RIwLeMDXrzYQghFiGAN0lXc2Dzcdd9aVQv6D93PSkLpzxE9VFLukWguHS%2FH3ij1kddB0CFp642rDtH6OjMyvnZIz7LLXkYdBqTTXZkoN4THZyCtr1m7%2FmQoiBjYmAf3Fnxb6RNuqsytbxeOnEeoY4sTvQqnMKpbs0SciR4Z95tL1nrwlmvmgTDtitj8wmrzcygY6pgHxAITNUIM9991SbD%2BYzwnqm1cVhV1Ib7ges7PTQNftyzmiGJWuQh1NNKhCIXhO%2B%2FXhv6mC0r%2BOM8SGsd8Q8J1GdLPHKA%2BH9F8RGBNqupwD2gX0l5DTKkMFQYsBPxjvdvZKHdCxSbacyipFcICvJix5%2B0RZQvi33qV1w4fohsckO1VXqVqeXv%2FyMmiD0PFWlSjv1pPsVUmKnd8iDVdfboHbJ9IioGH4&X-Amz-Signature=bb10fe1e881d78b5d0edb63df712e0e42e143b6957f4d6262cf872c48cf6705c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
