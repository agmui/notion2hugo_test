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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=ade0eef65b624ee1168418295d60198985144bead2c19cbb4f94a99915d9de53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=345ebc6f1b5f433cc85ffbdd04d4264a377f10f5a894f1cceaa1830ff85e482a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=0d4746349292f6aa63ca750bcc56a3bf0e4187b443ab3d8f9c4e3ae10896926f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=feb7f83c883ffe7c4cb9a51c0760c02f33624317e028058472c40a857e9ce9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=5e555c0c31681b18da52aa98da314aa534622b0bebf41affe3db36b882758b42&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=75da91289bf3abfc85d8495573440c2d5fe28a09246ee773360be59583863043&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2AGVEZI%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBZEj6FvskRPmQMsVPPLAe%2FT44gHFZAkiO40Gb28zFo%2FAiEA4nRurmAaI0WkMj%2B%2FMMLHt5EkuHtTTLOYLJRRV9%2FfceMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDIfB0Gs7qhnXdDxcNSrcA5PMLsjzvPb%2BGRw0N0HW4zU68DoB2ZrRku0gUjsw6BWr6OdPkHbrykSHHlIN%2BFaqFwXpVXt11zqNSc2PMKI7Unlsnluzc4lFU4iVEVc8bXx%2BuwYFV4LgWQk6XVBDdWFYTeIuN%2Bnjcve4KIcpyDt%2BBr6m1qx8d08KH0wc5nqwlC1K1cbb%2Bfu%2F0W0gX1uth7QogCn2JEfofoPo7p7VEUTvbq9qnbbNJ5chUil6UnE7dDvNYfr7tdhO52rKYBca6CNwM4BpT7%2FPEwxQqFSaO4Jwj9TxCF0YNpV7GNjz7DmOqhfyl4c3RbIaBFkXcRKmXkpZ2uRI0Yv2QccNibSnDoL99HDr%2Bt%2FNzvjJ%2B97HGWIXFhtO70qxgx%2FE2BvbschOloHAj%2B1HFzDf5eMl%2FaZwGbuuTpc0nGQ85AUSniHCY6hDYrmk7alooqXV5%2FJzOCKaT%2BPQ1UtaOK4FSEYrQLVNvXclVRGZuY%2BKKJRt8dfwyyMDdRJh8Xjn0%2BHq%2Ba1lBomeRV665XWdVm8APFlGN2oJfqsRSdl%2FHEP4jjr6B4RRVV7bolj53EYBiiAqRlIY4UlEZOlWUSyrxgL7ThaNU7xy%2Bb7LGUU6efP5F1TDtw8tvDD84x4JnFqgrxZg30SsjVz0MOWdz8EGOqUB1IApwdhheEbdqncE6MRuue29R9IHvt24MjGwwrGS7ilD1jcbdnZdFcu4ZvqrHCTYmqHeWTryAkwaB1%2BdZdU%2FJaHlYr%2Bvdgz5Er8QHVfXHywOB3wqFwykMpvjMAwQKieZpQTVqVBhQzyZGWPDVDBOZUPs3hpfEK1iod8VYisrLvtuqyguDa%2BzC4bBlr%2FbCpmqGpL36VLojCwHRduFyzb55F%2FdzQT5&X-Amz-Signature=c02e8b84f65f67b6a6148b42a45e0170a2fb3cc8a7bf28ea378f3b96a317e662&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
