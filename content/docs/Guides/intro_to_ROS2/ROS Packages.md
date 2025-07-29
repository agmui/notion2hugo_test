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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=ab531641d58ec9304852f7ed3868032f76e9b062a96373562c3f568d89f4c41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=1b407bfc024a32b6f08e683904aee855ac57cb41fe83fc4ff24b0430bff5c27e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=a7dd40d1c33996fd773a86f2490b79214ac6ec6c019c6ac9a8e3acbf90e745b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=4419f8c6019c060f474e49c322f779488d07f82b1a9cbb13e4d2fde4245247b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=bcc7115400e3b7bb4bbf2b2c3213432ac6ee1964840c96a4f8b0d455c56f57d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=9046e304bedef3db87e9d10268be4df2dc500739c94af77d9db4b46cc6208bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP563TP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCBu0FJufOPyArbPk3VkwBx4LcuTH3LaZbVI6unUrBRCgIhAPGYnVtuvIAhYG5C8N1PAEWwoUJwJDETvX0Xjul1XHWNKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxsvHU6EncCyn%2FZ9kq3AMY3ozWEriXBNlLG0Wf36sPlc4PaBwqGLo6pKPXztbZUWqzPfN84nkls0cLiJvYBwYm9i4hz1VltwiMPdgLdNb%2B13J6%2FQKMwPz4qYz40PCq%2FJHqCnAYtZY5KgLQcqw%2FXiHbXdc1ROoM8aAFjKMQ6NsJi%2B8%2FN%2Fc3jv9E%2FIlR3BMSks0zm8p%2FfrNb8tcy24Qp9qV5wjPzrTd%2BnetlaE%2Fq9QZaJdUzBF4TKEpqTa3mE%2F2ZYmAiXm3RU3bJjsenFYflTQnmwAYF4WVxjmknMBMZd%2Ft3UdGegoXIHOOSim9vvKhIMpem71MsG007kjP%2FNpjoFN9D0ylDXpT0PeQI79G6SKHjxxQgQxwDwx2aDEOVCi2wpObcJKhhKtBAbRjnKl321Xl0WQXduT%2FE%2BOiTtpOHKu%2BZ%2BieDfqcQ3trYvb1yYU1d2Twdy46qoVQtoxPeIENWLW%2BTlaHmxoXtumojTLMBljgNU1pkaSj7%2B95e70szo2JaICTfqEnea6QmzddCpn8lfYtHZCM0pW6KCJP4IaLQpxe%2B7bXo0KIP7hjjfmd9%2B7mkRcPw01p8Xbvr6ZNchIBi3zSg9Y%2B2PNaW0opnp00fEMduE4%2FtTVx4fEoi916p2H6T1ULNurjKlsHkxY3NXjDdl6PEBjqkAfUx2DrkI%2BBE3P3v1LnJSXUuAjiJDmEntnkuItDzp8B5Y2nPPOjszncFMJ5xxZkaBqrsvbSzuSrJjV8k9Dz%2F4U3BVR5H9eG1S1GcfSTIuWE3kpFE9OXCLQNav6CaGdGuywJgH96aPUmjYmQAFPHh8SUXnKu1MFa09vMu9O%2FAPiwDLc60Uvz5Z6U%2BCfYNTCR7AP9%2Bawa8hFiFKtwY6719DQCBo5Id&X-Amz-Signature=c493ca6e669340a114162e98d9d69c09123bb3c4970d82e3d30ddc1d4f17739a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
