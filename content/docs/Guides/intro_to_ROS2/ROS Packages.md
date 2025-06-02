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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=3472879b84032abb221efe3bf8325062d23b1a4260b3254fb7278960250d9771&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=0d4b84f07d5f6ccd8bc50c54ddc89c117afcd1bbbd3ac110eccc20f3084dfae2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=091cbb9a1bd7f58a4d0206f9d94816dad10e5093df2a3b6f7d4eedea6685ec53&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=202db4edec2cdee85e0f8d8d402f67d2025844998bb4ca5387f1f8addb56f0af&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=4c36c866901b8ea1d07c579b59b7fa31ce5773190557606933296ab69211adf4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=fd47ed0a476a8eb068e0a746926f3faa365a491c91c8f7ee92a3d11cd7cce2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JD4KZMG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCV2HmDC4Exvn9K5MLFUXLSCeqpPDH%2Bj4ed7eyR2h355wIhAJvK5N145FX7%2BZPctw1Yig4JWQRADD0bwCzX9Ff335QUKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvDoonzE6aNQf2Zukq3ANvivvBuIMxxd0t5GwCFmPK626aHv3pU46LLLLnHqUeLc1qEO0umgQX%2BcCGBlFcbACAnaZpAVlqm4wqeTCMPFyhyCGs51STq0O3YgnChbDEWo%2FhccxXd5txWnMK3aFaZ4kUuF2X3RMzxCDuWKDvXd%2FL%2FRdSHzPLRN%2FCIayvx5sjIwSmJoOwe9X4MHt6j9tCqx%2BNUWfXvKZ8OIwYcDM%2BwdBEJe6nexKf%2BPpD7wn2UQHZvPo0pSgYHxBQ7xuYCaqfcN8yt71V%2FJcoaN%2F4P9x6X1u%2FRaCv1kU%2Fe1mChhhwurtaYke8%2BPOfO6bbUlykoMvQn0fw9Du90u7fjYnPfUAzsmgBayaTQXgXOpwgWZu5ljvlmlu%2Fzt6U4whGgUKPahAgIsULVv6pyix9rHEU%2F4wL3J4ecmLk7%2BXAfdK6Srq%2BOkH0NswExVeX2yXlANKJf44tb0gEDlqH5fYqet2KJRlpgx26YkIfb4L%2FNeCXcsmbxWcdAMCPnztnZ2ymQukMn5gGEsTGAiEQzZYdlL%2B73Zk%2Fk989phDGJz4HERj6%2FLp8YmW6f6fBsJXQStTRL5E25u6r3lN937rKXlnmd5EdGK16S9BrMAqmQPXsOiCCeJA1CUYcNgp5lNa1mV9f27lFkzC2wvXBBjqkAYKtH8LdKIXewMzKwUOTMYXDrjxsO6HRvJy8paGrqCTjUs7BGeQdnGslD0bRQSBGEjjgWTEjDY8%2FvwdHKANWV8zd5w0VycVrux3fFcdgBCEH%2B5ZX4Y8KM1lUSsscA8pSOjGt5qz5fyo0HggCmUMx7xdwTpNMCJYEb0dh2iOnf28XaUiVx8RrBxaY0GucQU509Y3USboZSL%2FKqqLRDub2BW%2FGFQZf&X-Amz-Signature=a7dfb5b5e0df2b9b4b29c23ed1cd86b5677052920d0728c5e412e8e639184dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
