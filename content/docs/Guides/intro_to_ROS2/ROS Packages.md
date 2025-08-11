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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=501c2b5a41a7e98067fe5b56aaa1d6a1d942ff258c63132fa81eac92aa049765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=11370d48c2f719f1196842017e2157cc947dfd1f7f949872b91f69b8c599867d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=c4b087596e93aa9d0990bd1a67deb84a535bde686f44392cecd74b2e79c038e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=00f0671d563637767d508c840f4806db78f51ad22985a1409d214f2e17a74af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=4e5cdb6bcd3f67d5fd71fea4a8972845b57288586ac551f1858b0cba51417f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=95d8d16fd9b456c26df6db5be345e3f039b2ac586cfd59ba8c5ef30587a84a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALB3C36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZpZsIKkPET%2Bl3zqS2yXEEORl71UlmuoZdEAWv%2F9hygIhAJXYtZ1mOee78KxNfPeHxmtz0wXrKl4xANrAppKTz37PKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB5doeYcerttjxdyoq3APw3KTC0%2BWCLnsQaquABjPdjh6fI%2FTVdThcODmYfC7R6MqC0zaVcm8Qifndn5q%2FcEfUTOPkt8XXG%2Fl20niwVmBLzDzEFiC2FPg16Vp1xt6ZLSbgDzA%2BPCUYyjBpRmUFZZkphbdS%2F069c1aMDnukNK865CJBsmmnWbaB8Nc4X8R%2BW%2By1RfMJ7HDP6UEfsi5w6svaGafIOP5GHS1DkImMZB8yxMsZ5IwXbpqD7UDhxYAGIPh5uQqiDri1IXYPlHU71V1H%2Bcv%2ByG%2FJMThBg5KlptbcHdhfKA5eQMJOz03SaEiI2qdUIdAa5Mz5066aCTDyoqqPuEiGJrfW6Vtqnm3KAcvdvm9k1HJZjS4i6aFvjEmoIepuH5J4SgUM7DVrBDeGdY3KGR3WgHO3VBVwQ%2FNGP4zFnz%2FFL%2FK%2FCHtgQlxIQ0OrVu1AajITBAzMdpglCsW8iYqKpNz2Mp8YtbWP%2BFK7ebGCXqubR6gi8Hpnf657jV6RNEpUZmpvdRJuBBPxb6h4%2BYcDPotsaOfMoA65SitEOBXKP05GnuVr3h%2FYiQTFunIiSt2CIFZozii1ZyoUWAzUV%2FUpZ0npSMAslqiFmLTi4FAz5cjGKOB4xCYS8NXF3Jm%2Bia6e2l1G9xmtvwZqATCpoejEBjqkAZDWR3QfOa870OgPUb6UlxRZfuluTZLkBUr3Wv%2FB4y1mpjraoua0mGUrLndmTBe3ygZXVCMm8Y3w2M%2B4zKyXwiCy5rPVU09AbDcHRV%2BEv1f7BtKZpDVxsWD5lx3tOtEaIiG%2Fc0OjD%2FAeu%2BvQF6bDnPucqo3yThR05NYvM3YAaNmNrtT50JoifGkvmwwIvyDYePpUmqM2iopRI%2F2ju96ZsEQbRY9O&X-Amz-Signature=072e684bc4c68a0d20b655dd86ef7d4add62ef84c7088db8f9de136eca33c1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
