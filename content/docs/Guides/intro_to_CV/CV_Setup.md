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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=cc7eb7643de257aeaa343f051e5796f228fc58c0ba20780828b21508c3f35bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BEVP24M%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCID9eti4NklAfHs4WnT3TUGHOyXyNsqy8%2F8s29I01bB3XAiEAv4bKmh9KxifQZLxFvoYk0qpPvOg3sJEZU6JPXdZWC54q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDTXx4a%2BmEMgbKioYSrcAzlt77AwYd1hQlxwnaufyFgYZNElPpYS7BJei8wEAz0Datr6rsc2ibW%2F5oiwBHMOoVspyzeoa69RcEvt5y1M7mUUAuzp0UuH%2FAk3Vf9QqJKzKinAoqsHvKLHzHpgGQXTUFQXhNk4YXagBJ5PWJCBWfkkZsdP97MXkhTdaQSEkNBN3Om%2BfW8QPrKRdR3FFQbEPQVLLTRp6ytmhkTB68WKfP1jDBs127JD0GkwN%2FbQvGtapRbxheSj7frClVPVUDCQY5K%2Bd%2FPu%2BimCg6%2FIwgxkGe9lmv9xoPOsIj%2FBKC9HjhC13ueq3ss7zC5zSo0WPjm180Dg3NpfPKDuHpJGF90BdufqJ2zLfnTQoHrVQgr%2FPuJU%2BsbxOo7pcP8%2FLx4YMhUIuJA6RQutViQRDAVWwopjY4jR8tcM8sku%2F23O%2FFtfpG4c1DSa83%2FJ0Bv%2BlaaSll4p5%2BaTpGixipCD64v8lZy%2F2oRNYLYlIm4wen0XWlY0NV2pRPhN9G5IaHengOZh02rFJZZUp214KdiOfy26H%2BYUxx777mdoo49pjJebprnpe3q%2FspQn54sM4tJ7HmubQZtMs1tbrLE21IdDeKaAcrBv5YfGmmlXt4pfTpWATRNt7ufwptNyCGuQjWo4JgCVMOKHosMGOqUBXgvjd8CpCpnxDByIK00rEcoR7h7lOqPTwx0KtE9pekzQHI6SlobCD5Go5daX3sURqZP4hgRk0lGyvBiVqWgMVi7IcS89hH7U9h8FterKObY9%2FDYF5n5RyX5h65LWPNRDgJaEzdgCTaSUTMaWRYUd3TiMtQRT%2Bn98ty%2FPQjHIhFTtdb0yKd%2Bn9C7xrs4PHd%2FjEW1rAR2JqJrXMTyCstXNcGcrBL%2B%2B&X-Amz-Signature=350f13fb5004a2a11ffd3a2e99e3eeaf64fd0f01170f7229df90c407e3245493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
