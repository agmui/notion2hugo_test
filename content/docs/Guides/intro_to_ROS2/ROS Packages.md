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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=2638796df7a3eddef342fbe003b6e37e8219fe2ec1baf23970e40b7098d36195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=a8695555db27a50fc472f001e14a6d4d2afd42247736db010575bf9a45db4988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=d725ff53af2f6932ea12ef0fd32d67c1b1961575f4719fd0277868e13c6eafb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=50abf4b581e1605187490a6b6059bb66ab109da526ea14a944acfeebb92a0aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=657f13f3d5c401c25c02811bebaccef046fe9d885d9d431cb89ada2e3de5bd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=89236ceef224d531cdccce9d48edc0ea4c23342443053bb6de6d8149c2ac3e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HFZKFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHvFx7PHoN8xbMGx6%2FzRbP7nXDAL8KoopwxsgfGSgT%2BpAiAP8m48BXjr5RkMjE%2F55kIFUbzUiS1S3VnZ%2BuK78gPEUir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMcm29CVNgSrJDrSMHKtwDp2zRHjpH8VmASGbm9M0LJ9erKAXOOjcKrk0fU8f88mQ7PgizplDVm%2FmR5R3z8ZoBHRgf35buVgolKCblPA2sNTUWPWTnRugDRfJ9wr4rY0otxAK%2FLmP0O50GVVSQZ4OrOBhMznUlBCfFcLIt8m%2F410xJxrwq97%2BCdFgkTS0vJnfllWuh4IB7C5TVOFutJvYcWCzP2EtiNRpnBb3DVDcn6a0KxMunkjLoKnATldIceraGNLBgq2u9TowqgE5fIKIUBVOUYOkAXWLHk%2FU3eLsCIm7ADaQa5KWRxNDF711ihmxzvinCoGGdB0YxAjXreWbDEyAYM1%2BDI3KgZopl1MxnLXRMa2gS1C4lC5OEO22RjBpEMiYqEHVQou8TgXXP6cKSdye2CEXAjqTEOMItWdAAQSWsvWxcGZOD2KuJUTyziSuADNUbmLKHC4sjdrpcHxj39T1BnKdEvKHOREzkoCMsGm7ZZjTNO%2F2YuM7Q0fmx9Vag52FWyxYU%2Fzo%2BhwkQ6UaXQeTOQlmNPgZua58xMNRs3oybQj0ZKDO4kuSlBDgPNEgVQNSvlQRB8ThMlZOu2h763k8wC%2F8dCtLAcUqv9Hy4d9KFT9ZTiJVkjQcTTlZFwjg6wF1dJ3uOwspALi0wzp%2F4wgY6pgEYCdQMTj41iZNZZNvphxYzAmteq2bYc2P5WRVU%2FL55tOsJjD8LMzrRL2agXa1zt8i%2B2NFtOdH2P1RTUKyIPKKAcKpfy45yJ9Dm9nm%2BTWFNwHBmF6eLBPOom%2FEVO2iYmJpzFl088KFVzyl%2FacKeWBJSqOGpcFb%2BscGsXB6hAIzJuot5d7HQ7vmXdCO22VGeEyQKtoREXW3%2FPryBme2wYi6OIKwEEhTS&X-Amz-Signature=9622749f1c4850cd634dfe17d46dba1ebc2abf2295a3045f5557b81217b513a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
