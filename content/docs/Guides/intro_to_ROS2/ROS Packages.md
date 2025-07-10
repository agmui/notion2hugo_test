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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=4cae56152312b95eebd8a9074bb67c53219e50fbb2cef139839768988a1ee52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=828c530bb5abf0214c9ca5a4bb5e6fe1b05dae9b7ad4bd81802d93054fd5cf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=173224c0ef2a4466478cc96b77d5110e87ec8541a1f42fd84299cb85c1bc5f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=4b47cdf9c978914403e224007de11c569523b0a9f6b22d6be267281e8a016c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=26554b7b7ff3fdd97748ea9e1861cdc077ee195c7f9e7dc51789a861177e1be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=421cdcc7fd44775bdabc77b44b562d7bd08581c37d67c2aaeb04bd9a8444e88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPLV2AG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICbhkWhXyOTAF%2B20en8fiezN2KtUswBGr2w41jtWVX3YAiAcqkk9ffeazMiDPp7c%2BMqxOMnROAB0qBsE6zAqx2aWDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxnuk6yrP7mNuQ4FKtwDYjsqGKmZjEwEiVFjv4nA4578JUOodml6jLitLAMzHstG1HXCUae0gVv4aqNWLEWJvJUPGVnSKu%2BglZL8rydBC2VvqujzWjtQssUApQrSIX%2FOskfKz%2FThy3b1u6QuAEvmwMPA2enromO4DmCxygK8OWSaJG5bbtfKNztlq8gWH%2FlDXuLrCWcP%2Bomu61p1KUvRCeKQqmKOyqY9c0s0lU3p5W6rXPoz0zqqvR44bOoc9eA18T0gM9lrAFltF4WvX2Cj0o2cSotzHnPHRC%2FER%2BAUm347E%2FfUgHvA74EvrYQuMOYRHNz4urzOA3TgEBruonUf3LHOQfto2s1PN60i7nxyKKyGcQFM73lIMZCOVJFqEBqhGqXeK3r1gKU0n%2FjLDV4%2FBojzP8IiDRbwYpjRpLC3o84IN7wuVgWHEMuC1CDWwMULK2wrbtnoTNnwE1CZFdmbf5kVUJy3zfWpKdSFpb%2FPAJdzo9IzUtlQ5wAH8Gb8KRcxNVEzJzOBBXVh8c6t%2FX%2BPB6zRq3dD1iK1wX%2B8NTTEqguVaqpZpT2yh4imiDx9dMnhRrUwNL1tdOADURvR4SEDfJrjL1kzLR%2FBvNw3hx5Fr0w34Qb5voB4bkFw1gr3dHVXaA%2B3GWbf2Hii3Jwwi83AwwY6pgHzzFcpiU1d6mSYGkt%2F%2BoCXZESSg9N9adjqvbptzunP5bUVVugJCO9VJYfJAIyinSxej24N7bpZeB0CTexhWTeid8DoZWNFywqBNaXOnBo5FgtQnI1eqJpI9%2FiYmKohZOSZU66MI%2BjRKEtXm5V8XRsuZ%2FgRgWMNTAr7qTNynkWYyrbOJUPGTPc3sTmg%2Fwe5psjmEo5m8czSeEZUjuwUiY4%2FDt0fGEdO&X-Amz-Signature=7c2ef83caae650dab40234926c7ad69ec89d92733770357342f74b55ff82721e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
