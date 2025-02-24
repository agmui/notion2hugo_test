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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=466926d7d3357817ae1c998d04281fd43ab54f5f8887ecc379ba96afe938f35d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=f2d91a4c80c78e28cb9eeae6bb13833834e35f28432cb8631a7b56290ac7bae8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=21fdc90831ef6f46bc4f5d891e4b227d2c05590c4332a60b1a9ecd4e4481ec99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=ce575e94c454b843c9c8bdea24c35dffad60ffae8f257b9211ba6be1b21f1b87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=762289547b40f435b3a2262eb685411cd00083c8c2fcee704cd691225b7863c2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=510bfed30d3dc812f8be80d89e8148ea3ab9bf08209e5eb9c7e645aec2de5252&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBILPEA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAV1YP%2BEbQMLg8bTNYIbSjR9MjbGEERRGP%2FNXC6zTsssAiAzO8G0eXBOiv1ObK1S1PRVKxYB27GWDsYwg%2F4Je8eJfir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMHpjzUN%2BjyePeNdC0KtwDCITcbu3N3oMNTWovj8I4kI83xb6Ev6BKZAewTurEyKBNBSIQE6zd2DhBSdwN5N8fZK0S60M%2FjzkXlXQ8uKPnAVRz31hcSitgzdV6rm8AMBbqCzzhdkqoN5y9KmMV%2FzeWKbwwakjkk52eNhHyNcgRhWYl8xbrJYuvGV%2FwFILNmp1S1TcK1snlJIj%2FEFQpgL%2Ft2BKSVU9zr%2BCCwg3ckHHwJsbadXPgXu6RhtsgllmDRgcff4zk3VVYYkK%2FmdAVtzQo%2BIn3uyDyhh7rKqHQfEv5rkXkbaOzOBvwXfccY%2BGXAA%2FMUmlWZnglG75YlDxqatz0JmCoPKCct4Rtt977N0UyVbOwSAPKp7kjEnx1CSRSFu49B%2BG%2FBDiLGlGGRVnpxKvmTNPGeafQRIeDcYJjH8xxJaUf0LNVAeItzWXf6BPafSRrv0aywZOrhmgKSb2wXrspYIe5tikHGxi89imwoynrYawjzmutl8CjKw3X0UTb92S8RkGaAasieav3hG1nRE4t9B9oQmA8s7CO0iSBAVeVJPBBBBZ472Ai2cLVGrP%2FvMGMOQPFc4o5Mu0ML5QVh%2FfWnku1ax1JCnmqVP3yizicN0rlZo%2Bo8i9%2B8UaK5Y6gYbFoP1olxTg0tVvIK0Yw5NbxvQY6pgFlvzAxRhV66mkW3XzLYqw8nfWv2S%2FvdN8ZyoeA2u1tM%2BpxsW4ZekbxT5vyGJONheCpT5gNxgKuCMkWgpK1BRD7b2slC2cgyi%2FLgPpB8g6qxeukqTN%2BoRibIkphrCbzhmpwSs6Cah2lstz7cnX05QAV8k7J1h0N4Sbi54oyQqJPi8PAXcfQSNVIcgeYApmQ1AU%2BTR0jhcZtEisSYIWUgzG%2FnnNRlooG&X-Amz-Signature=c1b0493feab5625060bb7d38d2377a5b27106472a838f4301a17efddbd59a020&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
