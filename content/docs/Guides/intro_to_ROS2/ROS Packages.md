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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=18b4fd6204d3d2a50af3dc95398a8ca1c36c884bf0168045f4da9eef6ba50bee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=147e7bf3bfa398e74cc3c2e82f8662f9b935d57d9dc445a930599452ee7d4099&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=b7d62405d830f2c12adbe9f0f2b5c129d77f9c7374e5b0a5cae604cd847fb312&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=0e9f8a2bb5199b898b00246ded3dd8ada67a3fa7f7c1a2dfa89fdbfa4e9d990f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=f6c918acf7243357dbe6f41584a25987784bb787221ca960e65875fbe2bbb85b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=ef612e78d1cdb99b7cdaa760f422f7ac5ae82158f4cb0cb2007f27b0939d2485&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZHK5ECN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDABVWCZx6qQ8mkhbaJjZXXNqMhkOiI%2BaCxuXqqFy3GCwIhAMgYuaRE6RAGBKXMqQvC95HnC2OnE%2FP6aNUhDeWbFxogKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwem3tPbNkSbEOFaEAq3AMlV7YvWhesRfFHlDG0MoaC1y9FIFDSmQSLL0BEudY5CX6P8Z0F9brgURfuBeD%2FC%2F9ZQm4HESmTblcElCViixAFUYDueWgdUxlDOYbc9Y3LKj27xq0W07mA6KoiSJypSwfy7bo32CHY7OcSFmW1tW70LV7V9P78tFtCftk1wMTKyGL%2Bhp4BF%2FRdY7ZINOYa2iJY%2Bq6uUyjorV6e9s4VcK221Qp%2BVrKQoLk1fWPgGZSeDNxNRSZx2TMwuauT%2FfT37S33PvicPQoYKl2NzGiBfOpCFSyMG0SFBmIoCUpGWYNtJrvxRhNMKaUh8A3DGmC78o8dvI9qS2GVMvz8A1%2BPfVEffCdEr9fGdqKYvMCq4c4Zkl1Z6xctjsBP86g14aUTreG8THLUkggFyZOngH%2F2vB8YidMOCuCMaDy0x0xCglBpQ02gmm3cM8TkSKg9BYBAjWSE9g%2FP1QggCHd%2FHFJ7a1d2%2BbtrAcqmb8RWdwLa10YgeuFUwzXQ4hAQOnYa8JGjYrO9yXuyEf%2BeCGOf7hU%2BrnZC%2FTxhA6GnV5vt8qblAExH8Gbuq03ffVxvw9EgFwY9Bnh8uDSdhpkQKmiH25h%2BORwpMV9WeUgji98T0JVejUV7qMPimAsob39J0DITqDCE372%2FBjqkAWbnteVSgQKuer6%2BkxnU3bHRR%2FoGb2p4x%2FDhDNS9EyfrHOB8jwoC1G2U%2F4JQqAqaLrL9bvFEVYNEBbjmas9%2BMmpvYCpIPNv2Vp4R%2BVOyUoJSzv4pAnMWoFu19QKTGAR08G2Cy%2FinbRd4IcP3pTtBD%2BVWyb%2BJeycNyi3S5vQlCoPo8i3VhZisd9s3Vukgf0Q7ZEh%2Bx9Nokc340i6CxHD6UFWZCM6N&X-Amz-Signature=a70980539a2858f79dc1703a4ab9ce013beda688f486e6710719605ae7549b50&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
