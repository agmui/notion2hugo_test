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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=d7e95f771ee6e0689cdd80e517d0ce9ce356f3f0dceee2bf948797bad2284ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=390a7be45e6153863a34cac9db0e1d3918941766b6daf0b97f91b42481c52add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=03fc8c638f83d9e8f07e9e1b8f42e91ac634132e1d32274dbf9fea5e735af8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=4b50f0d62e7d944c06f897ef3d4d06b320551f80a43237c07a80da10260e8061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=c359ecd24f03d4fd74aea653ae38314fc2b6a132e8efded9bcaed0e12403b33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=e23bdc17778e23014f2ec2ff0b27332aaf4c0103dc482c01b94d5bfa72c7d9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZLC3MP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDfJtLDHqYigyXvNYjBJBmxDtINNYSs1rkEjntXB2j3%2FAiAxaIssLrEMRwxB8s0BdcA2wUIXzUd6oxWWNSAENrVKqCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMDtrXmYh4r%2B4qEknjKtwDIllFX%2BMK4AcQUPVhPF4Wa9BR7FATwPc6%2BN%2B3%2FenfgVnPiZJQDSc6HRlOpmoYhq1VTrA0vi51cR1ixyZQCy6xakej8ZR8cl82Qj9u2zupiGaSRRaoucNXpudCxZc8smv%2BpZ43DGduhEGe2aDmF5W%2BlqH5KVnEcSv6uqGC8BDemDx%2FL5%2FrDzJZyTrRgHXoMHsMnUPJ%2BlnnaLdX7ArIUV4A%2FBd1im8mfpbrUwXF1MzteNAqlDDa75E14%2BEDw%2B3GbF9wIaBpjSk9tDTF5cUf1g5jFkQzZ7zDYCaJNk%2FrPIGIsOuRnnPzA7y3Fy9MEe%2FntLaYSM%2Fl36%2BNZKo9Sp%2BXFB9tKWkYuCidYcz%2F801M83kBo4iIiPrZOndnPLeGUS3439TwFJFG7ft1pCsd%2BYypqqxBJRve12ZAQKEoDz6L33naj%2BwvAmWsZx2jX%2F5QAwA24UNn%2F87B%2BOnCs3fPZRaewLMeXH5wvSp8OsKyzK6Va6YM9%2FxuNcYY371%2F5artzNg0G57BNsrsxt2tHQMeBKKumqMKu3NEXx4Lmgrx1OCqa9wZ2ZMHIaSPKru4EqyD57Qk6uf9BvT0OVc9rbjMsVYBdacX7RdpETnc5RTnxoDWA3Itomtw%2FZM5uT5ubCMf%2BCgwg7WowwY6pgFb7JUPeGNuIlgfcS%2F%2F6bQdjteLUagUHBTB7St18ZsnJjIuKBp33VOtGGENd5rOoIn132QLXY6YX7dM85MgnPzXqQtrx%2BFwmW4YVc4xDW6EFeVKJNGW0OTYkDduj3TjrWJpbZSdkwI72eU19rrFF%2FzzFJEpXuMYUOB7NaqSoNdRSo23BVNUAGIySjkk%2B4zsfMsb1rlMzrDM6Fa1Sb7yx%2Ft9xH8CpVk2&X-Amz-Signature=21f30e07494c5ad9f4fc09a14eb4f52d3f16c312ec0c412c3ec41507841ec1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
