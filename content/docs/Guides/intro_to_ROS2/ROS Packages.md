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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=e61dd727e0fa0158cb03cb3f1421676143312df5f2a4982a076fc54f1467ed37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=7d6ef083cdf70f95974a563295c853ab00b9a1077b6574fca895b88c3d20b687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=eb97b6f119e929c69af54a3205e9527405af5191e16ed66c64a251929e82eca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=6bbf748d0cea1a26d85fd97a35a7ddc16803fd44e7100a94ba90a4655324ddf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=c67f3c0297412091d9f0a68639ddcfa6febddbbe2234026cc81f6ff45e95c182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=1c5aa58fa1e1eeba840c8bfb6501082ea46539d158d960a64b57ff773f8dcc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VCGVQC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B52UoanYZXt8mO%2FjHpB4VI03K8x7tYP98XsooVmN1AAiB0rUT1si2qOsqfoC6Fn0o3fyZFgQBuhdiB9LhSm1mvYSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMhmTsjY1B%2BPzSLVkrKtwD2QVqK98ENhc2dVEhSTYYqQzbocXbmsHcptaKgr%2FWGJAkfYG36vW%2FHvFRIBkh8XbxDhz2W2UOdZrAeu55IEUPnjMGG99VYoTgNFO0oyWwulGeoAs5vvz5iaj7Hee%2BAoyYnbKszcxwco0EO2mLkqhpR2nfMmBP%2BqdE9JbVhmlCjoOpxfjUyQ2HgkzsHdFFOESgEIBK9%2F1CqXCJiY7ugHzabjyHtbJu89cFfMxl4YtUApEQmpMM9RlF%2B3eb4F76sFlqUCveim2cAYI9r8GMcjBakQlyL2LQNGDsBX%2BO59XQJ8AWiMxpsbH3tTZZzWTB988QN9fig6cnc2rNFY4ol%2BZio1crK6m1%2BbfMJG5kwEES8KksMrnuaHZ8V6TRVz6z7Ju%2BVcGLCJSlLmBV%2BhsBHTrkXZ068tJqf7CK6fpy%2F6SyjMAtULXfAgejmOHsV0Mmy2OoBxylN%2FkB8L0rNpdluDZTT22UilvxnPAd%2FETch4lMHdnTcu0gt9nwfW35kgKGd9%2B4hU2StYXjuhN5q%2BAjIoo7u%2FuSRHuXG%2B64sIIUhxqkQCWU9QEkyxXMJ6nzP5cbtzKeBiGyzba8BNUkcuhUlWVqbimCzORMFQREs6Ju4p4PFhIAQOWImfmFd5seYZQwmYG6xAY6pgH2w9rRHGMA0efCQ%2F4CgtXdQFzjWELbzckovNo%2B%2FOTUu5q2C%2FRyfsWysxr67k84jRANlbizLPw0U27hyLycH4uaW7qjmkhgjOuq6AKy%2Bk6%2FwbINfqmo9yn%2Bfzna5IP3yEC1awP4bEhoFCL%2BggsjJG6wITk4c4BNKUx3XkfvUBMRsqz%2B9eDBok4CD4LPtLgUEfkLCfhEaP%2BQdwLPfTBxB%2F53vwCpUdMl&X-Amz-Signature=61f859f21b0617862195c8c8c5669c9a6ed2ddd52ab96f2228622f567c9d14a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
