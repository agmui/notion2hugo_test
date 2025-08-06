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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=866c3ba47cd138acc6956828587bf4bac932604797f245256eac1ccef59333e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=f9de5233031fa6134742cbc69c036d5ee044bf25928cce8bcd00e78788d10129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=9ed213f2d53ff1e214b18ce4406d8c48ba5f19cfa25c043e3b4612ddee40a94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=b8fe98b8f73d74846a5ec1fc5bb723758318b0822aca99f3ccce8a39d28fda99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=b37daabb5fa1e9c431558e0ef8e7be914d60b59552e8ff8524e9e28a8d8beec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=c36396b5a72dbfcda4d755a0d02018d993c827c57ad5dd4cdb931b2cb99b45aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OCJ2T2O%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCvYoTLk0pIM9YuA76DN73xXnC8K3kZBrO8ACR7XV%2FfIwIgY2RbdjHc9YVLEr1AeGChFGmqE1XjpjfcrJ28k1aI9sAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEZVRpBqMH9oZZYWmSrcA37yzxNhhI20ZqNvbU9HmmPQRS2xCWG7Y0OIXSwyMQ1yVVVjStLzMIP7zu0ZmAbo2rZn2LoecfSVFV7zy1WgVzsFDjwmVlqOb3WOwxs8ywotCJgw%2Fgs2xAy2SB%2FbfozkJsa8nwadNv28gk6tjfErJLZ%2BuIhF%2Bi8KcbdMW41bwgCnV4AuWdpvSniOerv6cUdYikuCRgtjZuSy1hCa0EKpauq5R3SwW7WWXY6oksY1X%2FV2ydP8WQYZoSlpl6hXEkJ%2ByaP9m8SA0t2IHcYhOSv6Tinbpc2WWwOLmN8x1G9PawyjB1XNqbjK6VmjGtR1kGbP9enumLVTiHugfWH66H97xTqtVlJvq%2FoUElaJprjG82cGtuVdwQrM8tJBAv1ijTaXnBAnlB1pL%2FDMDQlxNoHGuvvc2xX5E9%2BLnpJEnyp2cAWkA254xllcWE42Uh8abetI7LezOblMam74ogvjzXq0tx0qi2tcBfMjCtdS3bcsSsGYQ5dFYICUuh2%2F9X46l2zyCkTEU9%2FYqTQO5rJu5hVJWFDpvavaQeWnAEEwMK2hM5FYy7LUepo4xqZhUSMFKynyFxCm5O8EI1lcdbQHMtbH6qpEiC13nP2e2I5nr8x7QLMoCW73O9bLXBZHQOb6MLzwy8QGOqUBws%2BSLC1TPKREHKNidGSUYRs1DsXXYNdvkk0xFlcoMK027zMQ%2FokniABe7MxgSQMByY6IEQ3aPnBU5wWYURm7lfPl4F8ueA7EaXLyjh%2BnQ8Iv7d%2BW9y59J4ubuSak9M04LR50rS1xkSg4Tzxrv61WCZdeEh2KfmpW8GW2KIFdtCOs379x6iuikkjzTVQ2TzcFbAJf%2Fm5Npl3polTo85fqHao8RsMI&X-Amz-Signature=fec0fbc19700c43549e01d125144042daafe133b13a36664586514f34176ad15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
