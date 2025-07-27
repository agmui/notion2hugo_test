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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=ffcfe7831ad064086704f81adcded307147f14890814d3ce775139361f8504f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=71fef0f21e6c97532e2d9df3896dfa93a7d37f3f1d617e714318fec03dc1f050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=c7c27a49b4ea215cb0ffc3ed8b48efcc0c26a2b331a1f979879a69a604ba34ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=5f44542340fa31316abe30eb9f089a31b1d04cf0bcd1e9fed9b03d11060f2701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=b63e7986b900c0ddf81a3d4b39ae3d60476283dda5fd46f29ebb5de2a6c776a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=de281e5baada7dce4d1fdd0debd9de621e22fc8964130ede1944790f62d8c4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMGFHII%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCAitaKNDh4QM9CpUMMLeD7ZzLsShDjO57oCSlaXg4TBwIhAK80fL1NjKcLTyEmQ%2FaTqmssTtfFQeYeWkyjtomWrRqtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyVK1UOl3sZmlbmv1cq3AMyGH5caefWPeu591kFyXmoWVHU%2F8CMUGMKSDqyrZP8xdrzMLtlc2lGOWQXklEX2OBnLvEG9AOob7Oc4xJrEE2yINFDR%2BuIocticL%2BegvZpDpd8EqvHh9Q5QflayTj7rQxUWS9XUSy2Gjgk4Ge%2FXpMyYFis7gpZhsfQoCd%2BGJUjS1HbgCPKp2eBUKGs1fIFlx9X3xXKMdVQaieiEk4JmyyaZ5ffWzW%2F1JIEscEklFNsolONSIT%2BOLKNduuWslJDv1121pVIEQl69NXor%2FUFbms4WDL6h119n4GytmiyRSKJ5lPxLMOKfbs46BcioWQ943qIKQnS7iNLR8sZdKbdwEqIMbQ4pxTRtFl2ubq2wjRGGMryRIQbilpH5S0%2Bj1aAc44cnjjGjT1eakWlDHNiCzvvbRMYvkp5bnTUZSyaV1ktl3Ee6aIHgEC62f%2B0Ig0qcG%2BtXykduMTSB087mzaCR175UqFWK6YddO0tOTm4nut8T6NoG47x8NTmYfEkU9wrOacGFEvrmAguEMZ7l1Ztc3UnaXFPLc4wETmWAUvRH4aX8FJX8%2FethZNn7JnkatL6RaXpDKGHTpRRvd6C1wQT200YBFqlK5Z5Avc09zUtWSAehjbYIA4q1HEs0jmypTC%2B%2FpjEBjqkAWfSDzwiDgEXsVE0giEo1B1I8hjzyyCJhME1w8uprmm%2FwwH2983K1NXzaJQV%2BFETYI25FEHFhbcvmoXsxO75Vfki0LU4BUXo3SNTQ3ZLdK6iqFmqFdNhZuVkyLLZNvLGZkTHmi9HweEC58JzEe27e2oKq9OP4fgmknkPj7UrB8Qel%2BCpjP19VU7yOXcV1Hoqksr9g7vHeguU5w3d8Y%2BHylNkj8tf&X-Amz-Signature=092dd8468d19143dbe59b99c30e56d87ef4412340a1d498d32f10e82ad274c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
