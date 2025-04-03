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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=7158fc29a8624efe1e874c33b35c03262c29b3f21ebac0b0f739283448390f36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=73d2093d2a56fb81de7b182bf43545710eaa90a84afa20b2cece58d849ae4f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=4aa01a0ef8fae11dab12431ab2cc1c593a37c8b85d8c2c6299bda439d88237a4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=23a8a4ed2a43674c3b3df92dcd572ef2ac6fff2f429cce94b9c2d16272f019d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=f89317c45c8d82c6e6627174fcb098616ac4ef45a5155fa3edec6fa94256efd1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=5d1d966fc03bce9213e410fda03c324d0fad1d8d3d85fe79acd3fa6609382d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ML57OVW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC4BgcZZRAe0Z%2FDwAS6Cz3s1g66vMS9lzwtD24u5nYeMwIgFJUNnuo8s6%2Bt4aYVTDj%2Bmn19slZkyFoW54ibwmszwE0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTZWpTra0xg47ibKyrcA0YUEwUFVi12FWm5zf2WZiB716NXf1EoV%2BlqyBxgM29AXO0RN06QN%2B6ac8fCrXnvJP%2FJjKoQF%2BsU4rwH%2Fg3NBPKBmgHU1SmsVx97x5W9WNHmonFjeGQBjkiRr5YOI7L%2BJvYfCQJDygcIZYCqYswEJvkr%2Fip%2BSnqmuQ7hqPxUzleCC%2FLZeOfb%2FGkMbNtLYXkKEaT7OXNWG9uf3N3XASbO2UHpusk3F%2FOQqa%2F0Uae8RjIRx%2BlaZANpsPD9%2B00KVesJ5%2FcEV5ut3UzaNEgEEtqpRbYLLRELK%2FdSKCEVhTeM6ggNuzbBlHqC6MEqt8w%2FnjRNhdfgOGVBKFUXDTbDq9Ln7KS%2FO9owi2lQ3X5glvbpbGgwgJy7bXM698SJ4P3er4WvhQhaBYBC%2FiHmKtF4UksOt2qXEUWkJm0MoYreLhMS8%2FMEI7PuLczZOka6ASBueNJMxJYSisktj6v0e76vGGBlWKZ0aKp4ZHKvF11r45AQIKOb1C5ygPdbZZ1%2FwQ9ZfA5gz0G1BlnVBik3Qt2A9TdbuLq15MydlVnhYfR%2Bd1UKVAuXbCtRtYvi3KavRJnShNAaMjtN8q42mTwSrdCj7UUM0rXMWkAFeow2lDrYQzsmJv7ga8RzxubZyhO49%2BmKMLP7t78GOqUBHgnsAE1ZHoJBds3YtnYrVo9%2FDtrGPmpBf%2FRUaKY0pswA23L84zJD3s2%2FTsui4bfc4ZMfI9v9F3AcBquKFZ6DtnGMfMV1g36noglWBffcixfnx87c70qcnf2x90VHq2XWwcB%2Bp3bRm2BiUXHxN1RSui8Vlmjce0XD%2ByUYwEu0g2BbmpyuHBVsJeudgvlj4%2FeqEoyaW9hEGHGDHUsTXdrD4uPZe7%2B%2B&X-Amz-Signature=df56d8894f9cca4a8f12b94d0a884e9a2406c9e074f3a22fb838df0176c3f084&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
