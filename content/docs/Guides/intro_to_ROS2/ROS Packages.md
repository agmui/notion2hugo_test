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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=30d4bcd06e5bd4dcadc271f7cf11307f4af8e892b24d761074e8c13f191eec65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=bfef865db4425a483507e4a541ac39289d39376eaa52d3ea3cc886435c03c38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=6fd90e2ac813470a5166395d33ffef8d626e93dae3305e6235697d6b27dfa91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=e4e88ca4837e103ca59305ae4451ca1836f169b18f610acb280f0bf25afe2fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=8bf6780aad3f034e706db90fdc64404ee2f61d4a326edfa3ccb229bf73de8393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=6f64df63be66db0e3fb786aa90f044229eadab90341131d966583ed5a3416895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEUZNP5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2Fm0OKH78gNfnYHAWDu6oZJyYX4v5j4UJ9Jh0nqcAWAIhAJSlLpExsxdVSji71KsD0fhmBIDDo4cOAds%2FTNv4b48KKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoxMaB0QZBKFKGCJgq3APDt2y8L70OX42lRFzmuFTOP4xiqlRQEBHezXfu2M99%2B8XIO7N%2F8aESPEb8u9AiKBPUL5RCHQ%2FlRcKzvyt5JDwFzXfGwz8C9HzVYwHJmUDWEgWKrBqmz7paOU0%2Br%2FvDit88PMWsWIgMPXQjyww6nyWO8UdGN%2BEXGg3lPsD%2Bqt3xmC%2FSqpDhphZhggmKL66Gx%2FWgrKzACY9%2Ff7xsz6h9hjfQkPRBAcg7BygAvFQDjjGRrwQWoxZ4A6J5hh0bxUMpcWiA81ZHqe%2F7CZjk9VCfSCGBnceYuTJgdui0v6SSdK1mFtByUBmwnrKthBW%2Fw5qTiRIR5484rb0N5BOQQEMKRLJC8VonEbvbfr1%2FfM2vPywwx7lU1ZAL5hGE8ziUuSxbxhN79oM6HiVm3eXfZgjwoFKFJCV4cluPrR9WwAs2W5Xg2tEtg2bRI1W5qFYx35eyFGzyy6amJ4%2FQE5siiR4W1w5fgJJAKsz2fHFBPuga0EBimdCvg5yUPQ495Vrk%2F0YXDnWPeU%2FARREXP6rMDaEbIjrss4sbazu08Gmp8WzI1uQutGxPAdaRIEFmvQP7sainqIRhiNIp%2B9DTL%2Fp1vE2GN7KlCGirHjRxtIwyReBIcYM8rP3NR%2F0l3u%2Bxs5dVfzDpx7PDBjqkATODGWcKwamYAAEXhoZWwSmzYH10Y50LHW1wLh44PCzFKMbnSK1CShouZrzUvYc2o16jBN98pnODefpF2edfEOiv2Cu1QwGNZguJ155ZfH3pns58Jdr583iofG8EF8V0qi72HILnkYjlAYCtcLwF3AYHkvclHUJ56jQh4SvEWSCOROB4AzXd08EDJgPgq4ENzaapdp8GVolA%2BIsXfVBCKtNcMxdK&X-Amz-Signature=1bd11e31b9defc2dee2814c1220d9d635300c2ba099ccf4664c2072c0a27571b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
