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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=4c8c17c3804cae595b86b47aacacefaf2adeec68cd52a57b996724671f1f8bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=6ca56845ecb1344681ccc4007cc41d8d429fff3d19efd573fb6c1a3d24accee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=161486c53a8f29d0b4b25939d3bcb320cbdbf0ae28998bf56a2542348f4b737d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=94957491f2e3bd70223ce4073c65db851781bb91da8a1f5624f3fab9f3fbfa77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=41662169d40f069464b18bf68bc477318a5ab7fa499cd370e730e18a97034591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=3a14d349049949b396cd80805de8019461216344f0dc2762b64d14406c322686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJG2IK%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDHxspCV%2BOm0ImJ8h580pjl6q8jb9ACP7JYQI8HqISmbAiB%2FrzG%2B6UOt6jea8ZPsBZh2xfc6qFxI4rCRbFmE%2FEI%2FJir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMw%2Bx5GfDd8g0CvMakKtwDAFHlMVL2um%2BA3vVG9VOVRIcCobvMzVLBkpzB7%2FuQXc2UF6awswmAExSCuGeg%2BW2gTtAfMYwqyZLY0xe2e4SMySnV5cTYK38wNVelfW6A1Q%2BoIhwMYMD73Wc2P9YBbgFL7AHe25G4XBT%2B52qpX4cm9SPpCZwkHqrYC3xlAgCcbOnJ0qZBea%2F3UtOuxAohv6cKioSCWtRxE0Pqil1uua9UOaLeVfaKQc4%2F%2FTfcB%2FuJ%2BZAk76iX8d136MUTFRwJCu9DkkBZnDQRTmtthVLH2aXahJ2yNQ67l1mBuNgn%2B6lGW9E3N7XXj6ApzzvwQeP2b45ZruVZUDe72j161yx7%2FW%2B6RGJ%2FsHO99hYWr1eODExJhIglcpIfKo5JuUGWBtAnjjftmlI5bxN0LMS9hmsBNd9ItBX%2Fu9uH18%2B9zp2NXju8dw51HayBOJHMTNnBVU1KSgXZCECU38wC5M2g48fRwMcFU7nMixeTprtpDYD%2Ball1DIn7MTFYIO%2BZYrc9jxA%2F4VoQcZBKHzzKYZsIzwM2IlsxPfwD3lGnZw0lfNDvOEE2WFnWONpudM2EV%2FJh2azpKZKdAQRhAHURdum69DK876xwH2PYN5JEV1ebRHomrNvw3oH4bu5hqz9doNt9BZww%2FuHjwwY6pgFOcQPE5L4zJEc5VdKIqZmQmEQei884%2Fzg1Lj5olTt%2BIwlMbHmpIV1U7SIF1%2FLPXRxC0S6mIiSB7y8i1IR9Wb0vjiwc%2BIsH4Qz6r7JJdaZo6YtCCLQ6zh7K0Xc6nn1tVCyzVL6RPBeE669amvwcvaeFHsobM3dMwWg%2BWWriFVnQcNpRgrt2X2N3GpunI5YNsHVPsZ8sgp24VAaWbQ6y7e7iCAx0zw2x&X-Amz-Signature=93fd37914e97ec03c25e743f917b4d6539d3a633cb16c3276660403884cbeac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
