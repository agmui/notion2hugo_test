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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=b30351b9a2b71a81c594bbb0cfc242f3c5abf2e2412ce9902137ee2c5ac51bde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=e7b0c30e579e7cf8e64244a2720c91e4714041105d03797831016fff4abd7cba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=63f6fdff42ba83e12269b58f2dfce742a08468f144203419b9cd114c7750dcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=731f2e7ae7c404e5f40e698c38ac689a4b3c1385e6cd15edb65d5bdbbb3f0126&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=26cb14ddb509956659da157363bdcdac6797446ddbb0f6a30d1ec734f58c649b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=73e266c76f0afcf6c05de250a29e54229160726815084a2db72a5f8864b3b769&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5VI3GVF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTTY3OR%2FIBaW01sTV7W8TXlUcjibcOMEpErGDU1rrvxwIhAJYVg0YTvPA0eV8%2FGpNbNIpRUsp1Ocb%2BkVBR3KiG7BdBKv8DCEgQABoMNjM3NDIzMTgzODA1IgwYuwsX8A8kMikKaC8q3ANp4Hq88DDcBNOnSNKeHNfFgCNhJ2bDBxctS%2BSX1tMhGIZnlQPzj%2BEi07UzLD86WttsbcpUpmcTaCTMcSfUsI5LeE79oeFIWDjJFXVchAHtetXBNW0hVQ1Pi5r%2FfpAWgJvdzx%2FfX5GvwE%2BcNHyHO2SzU2Y36zNDRXz2cDCVzZ62vLTpmpuhKTMdTHROsYHF4ngdowcfvcGRQ4a3S6z8FeyIjPKx%2F8XYQi40dmZtkyy9G7nTonkWVtFsS8TshsIkzSeIL68zNeWf%2B3z40zaJerAZSour89H8YDN%2Btw9p4emPmuV0XWFwhuH1jZOVavRdQsxHLM2F4PHYK5ued%2BHPT2h%2FpvW9beHEchet%2BDuJzxqotRX2tZmcNvwVDWeJSBjpOXFbPUTtwqLG4lot9FQGibIFRCGEj3r9sM6wuDqAI261vv8erb0SMgu81b4tLyHTwAyS1%2F3S5a4dkqQTGvKVClp5aE6NNJg6WsPMQMebt8525sJnpS%2Fw%2F64LTB%2F2Oldt%2FRn9lp2SVi8LEAeaOXkIbPMsXA2GKJtXDuuTCeHzOWv7pl6v6M0wlcuuxc5FKtLO4WprsTgiBxXNGGZl5C65tKdYGLjNxyy3citQiO2Hro3dvzV45J9W1g36HLW8BTClm53BBjqkAeF%2BJf0WS7J%2FrxOIZkZ%2Feqf7eKtNr9ydJ%2BDULPW3tgHq0nTAUDmfBupDWfYLrAwmhIkC8ckORnXjfgScaJYZUasFQkCke01GsIibXqhzYHVkGh1D9vDCfrgHOu2VxEDcg5FDYGYSmLZ0EmJMuVMXc568WgH1peVYuU1xQZK6I%2FmD2xw0XphzKTrZKNOl0WV64lUKSo2QVa1gICf8lh1DtPLErVp4&X-Amz-Signature=2834980b868fce8192436732557493b31cd7cc29eec24844fdf508a142644f1f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
