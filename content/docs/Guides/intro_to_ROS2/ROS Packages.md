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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=573d9af0c7fec232128ba61e2079ae456f1a907cd5915b4a8318c27b3108f107&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=51f1a69254b68e3cf97f2b0b41785fc1ecf46ae446883e730db9961d7cfd9dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=48970d40d3cb0846d0f5e6f27ad07ffbbafe199e4ff4b0f0af90ea35be6d4775&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=6b37af7df03e4429a0d67e1d1ffb59ea056f67ddf8588d3318c5e9437fb2f42e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=16edfeaade3b4d53e1ae968b757aa44d6c5bb7e04039a96d9e2023fe893fbab5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=14855a1a83454d95dea2c2f81c3c1a8e4004876cbf90df4f757a6a948e2747fa&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7YCWZY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDRhH1bJ1eaj5PXbjmpxDJVVp%2FWQ6XUbRIlsBpi%2BbrPFAiAwijLhkopV3if%2BSKtZEtjceDFxKOwzH%2Ba6uKS4AIgIEyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH4n%2F1PnwnZA%2BQIA6KtwDYRXnEjmRl6BJF78LjnFs1VbuYVuMUBTAbsUQ2zkjsjM8qH4ILRS5qp9ebVa5Fps6C%2Bn7DwosodNdIRAwPXDnRw4xr28wejtN4%2Bdd8LGviRrexka1ZzFdIvvEcgi5vNoWwmYMjlidDqfRUpB9IhQTA2YuXnpzLNfk3nKUikDk6shSlyzFz2LFcs7q%2BvC9fwUeJdxb3F3daOb%2BTCVjBybvx1jwOSzO2WGiKm%2Fj9CTEEYyfVH%2Bzqotj0khhKUsYa7JrlKkF1Ujv2KbiKRFUupJ0EH9If5Gd9c6KO1ShQVQ6rqHXzu%2F5hBOIUA%2BCH9G5xJ%2BB6tcZMzezxQH8SXF6M3HNLvzwwsHzcLZEikmWwtM2PIPivbIybGAMl755GdT73sQM10oN8ovElHrS69mc7c5ZkWqdV7%2BmREXQf9fuQ1cdCb%2BMoAGs4SHQvfpEoVtuSUO7D%2F2Mc2AF4csuGsP6FTht%2BaKv5Yb%2BmPUb%2BdySyjnjJNEMfIAvBg7rolV3lyK%2FS4wlMKCubhgXeGsrZSesw9L6eM%2B2iKAb7ON33294M2%2BZo4VykYspbIUMfxSjUUh%2Fx0UtuwzP1RGdEW8IaXA95XJlS9qw%2FouT7oPtBxo%2FQ4dsZ3lWQk4lyNUw95HqvwAww%2FK3wQY6pgGDnQ9qKPNAV5h9Jh0NlqeojuoMlKXOl74TybqFHPyb%2F8QHjuHccMD%2B3hWbAxo%2FRwXNAqBZN%2FRqTdZs8xirpN9P6Jmehk1PWTfvIFL13XkGFAtkfZ7T%2BXFiZZ2fDgsmUH1un2M2ip5vuDZ5SGpn%2BPHjPAeYHxRKmvXtyNw6vd6Y6yJVR5cpuofOWTP%2BrR%2BaZfwqDtMat4fLWiR8B%2BJZ%2By3KP3DkjSQK&X-Amz-Signature=517c15daae960338629544f33f5b80e3d52cc4bdb573001b961003acff819542&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
