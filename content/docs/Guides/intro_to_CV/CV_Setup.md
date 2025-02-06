---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWTODJW%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCwwva8b8taO5A3el21jy1gsX0yhDif9H62%2F7vn3S4o3wIhAPL3%2BYmX8A2CF6msq8XYogt8wcTAKj3EN%2FeIEDgn5OFbKv8DCFoQABoMNjM3NDIzMTgzODA1IgwBjIgrKu45ngPS0y8q3AMnh4pEqTFkYJ0IN35%2Bqmtx2KQT05jszd7zjXZUDTrOcFGZyqtQB344Ifmq7MOeFIkVNuIKGQve9QeRQcrGUCaWdllMMOzcaXPdhur1C7DS01%2FFpnQGluupHvAKZSHgtWxZ7018a0fuG0l8ySw237RbHT8SkaUKilA9StryKUMvyasDZPhXuSrHgBrSHH%2B6SiO4U4VcYCOwYe9YOxUbKkO5YiZUyCaKXZqGro19qSosIW3NWtI%2FAh1W54N3Whu4b4nkwhGIBx8RzEWqATT2KF2OImK%2B9hO6gj7anXVF1d77D9YBMXMMXOAiwOc7vC8j4RtD%2FWNqjzM0I3MFI5h%2FDxHsOuCg6kbBMQZgajR5NsNLvD0Bmb5JWuZCLbc%2BvYkuttd54xyngwDlSbzhhuRXWQhhMST9SpgB6yHqQVHBOizbwE%2FInvJFfrcl%2FHGSUo5k9AWrv11ATisuwHvTdsjOBlyVYwj5p72fGcKPLfY9imaqOf0KAS23m2U3%2FYEkdahU%2FnYS81vaCym5TzKNLKGCBgV78q4oROZJ10mp7XwEsfL3egFy2wDlgq9aKt83QZGHQv6H46g%2BGXJHPFRLJKyH8OtGm%2Bng1H0XO8lJxHoMokGapIvriiu5Xdd0KWzFCzDc7ZG9BjqkASck55DmqeJVwQGGPeW9cGTX0%2Fz251zayd3qXKh00vA2%2BEQIzqqBYzJ8TY73ZsZ6849MNdrMstjb%2FqofJv0FLeoMKyMphWmPxZcMSlE1VvJfpa4N0bqt3fSsuPZkfrsLldesj9DTLO8tTQpTy7J8Mpn3EPElLbjspGvrwMdyqE9R5YAbieoqY2vvCK%2BdR6S0dGsojE%2F6s9hGPOZrBJsGNhwoeZbh&X-Amz-Signature=fadbdf14eb750f171f925f9b8a525d9dd3e0d0b3d637e99be4bb5ecd5a77997f&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTYHPDZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIBn78P%2BGQKCuyZPbZujfFbukAK34X2xTrxUZzafv4Qe1AiEA7XjWGhhR43ypKk9Px7ci7YGNjmlUlS%2FrgeTV9D8JfTEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDN42fidcXPGSH8tUYCrcA12nR%2BD%2BmKG7YyjAUvIeaJlh55rCHlvKZc8mTWbx%2BRwfVRDdCiLoYrat7uQUc%2FQiqNAaFdFeG03fKSZlKBzrr%2FrG8qZNkHboXJzFbtcKZc%2BSb6j%2F44hLekRnR6kEcH49sUX5rZtHdY7oBvUKbfIXfUboMOMZW8DOkoNjVVa5Dnj2ouJTXWGtDRxNd4HsSAK5PDcjc7aQG4nxb1H28BdjZiyT8HKizqN9s1ZH8%2BQjKweoLj9avujPHg8a5oQXOYLU6sXmShgZ7hm8FpykEaYAEzeXqiPJj65SCNqyW0U2Rb5lx3LbK0eCZRuglxF0fq5vxwIbAcF%2ByuVMmYEaCqPdlcaFADbqf4pzHG5Vc2lo4LUzpfpMiS0iJIVh0PhWGNeBD9f1knysKOykTTsPJLAKKHN1Dpn8ePhozoywbfT4BQ3nGJM%2F403Arp9t0e01uLUqbNh8Ewj2%2FtgFUg9mCi8NipqIHe6Du6vGjjw%2B5HkjTF0hUFqGEffC3XRfUKwq64yxPYk4qkn3WJP7%2BGxLjBuamLIVtU3GF1SGGyPYQpOghjZIsgXUqBB%2B3Kl5Emv%2BWOSiJw41Img4CtSZT7qOxtKNIbHHbaKXWpP8IS%2F3xVpgHiqbtQG%2F7fHVj1uFzf%2B%2BMIrukb0GOqUB3e%2Bq32xBAHa%2Bj6Fb%2FpO0Cjl0Yfwb3pog%2Bsn3ZV2IIQoWF2psfS4WiQ7G3xonq4C3BnR5TvJbW4yODmoLfGG7Yu42rMOU4oJbRkofr4FoETT6V5gSNgO7hxj24Kx07rcy0gYr6%2BLCKK52mklRUIbHzfWIPuLEl65uHEX3etOu8%2BvkhX9fdYjf%2BklsjOBOA20UhKM3mGjqj5CXqz9C%2BBPXzCxw7fun&X-Amz-Signature=071645921451803bbb6c649b0f03c700ea79982ecd44bdc1277c46383e6c93d6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
