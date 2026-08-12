---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=d8c19e6aff2a04c13f645d9bdbc6f5b5f5c65156eba05ba86107afe43227db48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=73a4a7d17c0d8382e1f30e2ce58f7d12a6d131933ad244e1df874b0ab1e7fc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=9300971bbc2e9a009083d86b1727e590f9fe536f9c7cbdbf0c052dea1505838a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=6eeaee5ba81bf95d4772f9e9be5fd3229e24bf7d17efd9bd169a2c1dc64c315d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=2af5481d71f801bf971be048a10395829ce40b00af65ca66be7e26cc9d596828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=a34befc273ef342d815ac5676d73db079e30d7a636be7ef057fc61cd552079ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=5fbd6674745f76f972c8479d40994845e7dd9e830eb5b3bc110c69b44678e61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
