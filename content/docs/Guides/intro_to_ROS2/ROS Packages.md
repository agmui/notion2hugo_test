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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=cd8f4f809d77dcf369bc1bcc67d6a16f135cc7968b4c54ef58dae3c8ae219ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=59053107485d7163d29e2202fd445965e83fc8e71a76a96aa915dca5ee01cd27&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=cc8212827ba78015141018f4a7ffcf373c1552d87b329a29cc5b22e9030e8a10&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=32907860b11af36d87e37d49549efc3916ab086e941f074f70863081926b747f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=f4e1580e4058c5d8fc76c6a322841ace84f2ccefd4cf86da12580493c02bb3fa&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=9052d68a35175a646f1166fce71c76cb4f201958fbf3be124e05001204dd8351&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKFNGQP%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T050743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXbYm2kSrO05mywTEcoBYHdTF132N%2Fu%2FhUoSAW2DdzSQIhAJ22gvCTRzyjSev56kh2%2FpLE8R3q%2FKd05uh%2FxNdsL5e5KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwISm8HH9byz2alJ4Eq3AM9kT%2B5oQEqL6ohVyMDh0VxUpsPqlQjvstkCEPPD%2BM4UXTLjRKKNH10X8Z7MqmpiW%2B08L37m6AAIcP2UpXTXkQBnMdbHl6g5xPLoadmZZwmAOPipn95rWb3lnE9tHyrmMsor%2BbYz8Jx4gOBfR%2BcPDmQSfQDvzJaF1Nj4WCOhLf2d9NaTRjWTM1ETenjH7CXpo2kG5vUBHiABAUS%2Bkcs0sb13sSsOZvmQ5LOglRDWzpOAnjjMNBWPCbmAeVpTN1aRSdVoqt9%2BOm96VsRnJ8Z0OTwaDyVf%2FRPTwJl41lV5a5B8WIMzM3qJp6e9QGiyUAon4YdMAQk2dKblZMT9wIyDNa49E6itmccsUJRuAIVnmGGpqbBQ0dU1QSMUY9JfN8FrzE8iG1m2BefnuyXxaIgRe28nvU0qbp2ogEc%2FevQUkNe%2FwyJdsgvxq02%2FsQBirBHCpYw%2F%2FHuhGdscN%2FBrfGVngrI5WrMnFEIGO2JTtqQCvD2P5Rd2N3BTBBMXhFyRiVeY8zsu2A7tZLUIKdiPl%2FEA7n59uuHBFRvzbBZRaF99IvHRSU2nKicrjocniFVMms%2F3ycTOxUGHrRORxa8RlB6RtDmqaOOFdt8UtqXVmnn0sd%2FwMxbcSb7deEzFQum2DCDh9S%2BBjqkAVEwtw8PRjR%2F3t0fpWPRS9Pm8BlfpH9kkfi84ThggTcjkdIT7eCPAjdLIVqnpFoE2kSjhT5uu056L%2Fd6Zu9W81QZlwYXLBvKm1iN9fOXDb8FC0kEpa33pVQp46Y%2FEtFKRUWGUCx4e9Blvz8akWMu4iRk6%2Fk4I5MAK82wCNVZFyZZID%2FlHPA7e%2FPiwZCUjgY%2BGEnxSppBA3OuIyLNiDpBQkwJhk%2BJ&X-Amz-Signature=1ebefdd8c0bf8b8c58cf9624c1ff08401c73c61ea4bef55b66ecfc1041700d01&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
