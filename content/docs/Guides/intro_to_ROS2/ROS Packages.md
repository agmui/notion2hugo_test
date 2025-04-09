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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=5825fb54fd063d770f76d97b35efa97db11506a1e85f824a220aa4404e0f2d31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=a0205bddfb17636f167066d3c1bfd51ce13718becf104f719fa1fd5707c0f1de&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=698150608ef2139220fb92a5c258705765cf2d378919f94c4b4d493f8276be86&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=7055ff2aa4f477b0710beb35c19f6e28e16f7dd7141232361a72ec16e7384fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=092696aad8f16047aa4023f15aaeba56fef9f0d6dd5d2eab307e49317fcfceb1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=1d94d2ec822afe424686bf13ffd3a9c0384ab7630898d1946f8fd4ae2d26a5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGQIBE2%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEUs83OGyyn1tUD5zYvbafQnl1xs5SKpxK6dLD%2BJRihHAiBFVA8iW4%2FNl045w%2FOuHngjCJfRPzAzdBgrsDsMl2UDUiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPKE6oB3qx3J5%2B7%2BaKtwDN5aY2Sw3LGAQFaX4Crm41m%2BTdtsgQd23knnSRNGXe9HX4HRbF6X%2BkS5KdWoYOCbEXm09JAO3yAo10b0%2FROw3nKe%2BMp%2BjPj6zMQySm%2FK%2FAHPcsVlMzi9adKryXPh2iR0KsbR580hJ%2BTfJuahNs%2Fz9HCuY04vh%2BOG%2BCR0d4v6ihy0uw%2For6hJ5mXHv%2BGrubJPan24x0R4X1qxh0h%2Fla5oAeVjdeewTRubrOQXI4bKkuoc9BnRFLK5rwBZcZQDkwUdx56TMnDM25ZONNkRWg94WZOnFwGCgxEKdW3A%2FeAF0p0wDENmHhQnKelv5uvciys4zW8Vp5EvrJM95WjLDZd8%2B27Kg%2FNNDg4FH%2Fn1%2FNzcIsv%2FtxDvyY4XTKpvE47QA88C%2Fh958tMytrYQQFac%2Bt48KUlZLGi4z0eEs4zK3Gs0LqWmLjf85BgpbPF6selPIB49aP11pqkxeU%2B1%2FDs6jQqN49I9d6WPXxsC8VeGe5NV9ithj0cdAnv5yldSgKPU99qhbAnV%2FlB7pU0EM4dMIZJstOvCSlZOy5MgbvkEa0E%2BPW0JHZy6C2d3kd9fSO0k%2FqTjP41VTho93DBVYVQbdlOsafg8fyYXfZi3cam6YMarPYxff0LzMLU%2F5YaQvjp0wwa%2FbvwY6pgGX8Pq62zNvXNdTCpvtoUVEo48YUxWTK32gW7JLnHcDCgTkhmZFIzzSSWQaswjlsByqgVY8wZoKAmGFp27baZ1lAQUJ8qFvzv2ShWK9ZBwBBHeIMLDz4jzrA5uyyvYPCPB6Z6%2FI413TFFGgwToQWaJPh5e4pq9CW%2FNSzwAGMblM7j7elsnLC1o2l0BKPxLNBzrpkObtGrr%2F%2FrMMWgz%2B5LAPzIrgz1pt&X-Amz-Signature=ae2d4e1bd5c3f02effcd12fa38763f9d6c737a681afee9ef3239ace36ec1aae3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
