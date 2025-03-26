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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TIZERS%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmhBQHDnw1%2Fw7Fwp%2BMsKeiDuaj6uPQ7PvCVkUDblJtHAiAQ3I0V96PUvKF4n3XHimVmu9n8l96v0gbSq7WyD3EJnSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMgcsOhj7v7JXtBmSXKtwDpMQpVqFA7LMXIrqpVBtmiLajxHakpK%2FBZx6Gh2VNuLaeWoEtDDCD1ZWD6qFl09h8FV1EJNtg%2Bndmu%2BBwfwUMc7ZkYDpfamlDzsvoXiTsvSaEOKuMkmpobLwwTApme%2FDJ7N4gEe5E4%2BWmBjacNkmtHbDnhnNR7CKuh0%2BVYvL9T%2FsKDgrw6iMALCtslByBEij7fgsHxaRtGNOxNYr0rftlECAiLBvlotMnFfu79JHa3IJirGF4ktRvqkQ8vWyn0RgrQxZlCj%2BgUwrW5O6niSy417ilq75RTriPtxsgoc4trs6%2B3quMBCtVklm9xvLMUS8vdYM8CORTurSfu7%2BHshPlyik1RzlegoAlcoey%2BHjUVbRwlQarLBqu4UfLzpeb4Aq3AXrzT93S3Gv4IQPZ6f7L%2Bas0QfcLXP9PTIcIRleqlmNInqHUtSvgQUBaO4DBy%2BIK0gd%2BcexamRF%2BYxUEm2wEJpr5vTp%2BhFZWaZTlnC3ujRiz5E8Q8G17UT%2FzoDBqhBjn%2B4tt0WBKiVo04%2B2%2BwSd6Tffsbbe19pMIzezooy%2BVoLp3jwW1m2YtxNo5ACWubCwqPss2r6PwVzBDgcj3HoRNSJKs5lsmbBSJi0%2B7TGppSxMw%2FGh%2Be34ILipqOSEwtoqPvwY6pgHIgAgDy4p%2FuUefOpEdZ5A80wgXTrQlU237njBiiOK9TTrkRm1Lz%2B7dhExytdnRbOo4ErcUPUoWVBU7aDJkXMTk40%2Bw8P2xpTmXPB95vrxnypyf5BzRmWVW13zkLClstb%2F%2FiNttWJptNo%2BwX7sk76LaHF4yklxPyzYANvJQmykxSFDT0U%2FwqaFSFTIFUEy73ejcvXyBj2znis9c111KQzrRl2%2FOEuAw&X-Amz-Signature=68bcb601478079579ffdb9c40cf5f973e2fa6af6fafa0bd2752771e4cc21541f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOF5R4EY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmGMez0vQj6DFAS6PwWI2G9oAbMCvIkVIuYNxCEBiF1QIgcm8OEJ8NTqAzn%2B1ESD85gQb4JvZvXSgg71o6TmII%2BUkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPwtoaNIrgnO9rg%2BJSrcA2JbtnCFvGTHKriavL9M2JxjtOePaRX%2BLpnnbKgBGUGVt3LxSCRwSsi%2FiwBfU8D6uT8RAzy1Fg3t3o77jIxu3rXaCMTRNw6ZyeqzJ0hxnBKgQ91CHFl1u6qza2abeceRrAzGgegQh6iQBXyjgiq3TGs55%2FV3EtZkyNZfYsshBbuZoONyn2zfYQgHRsBedFOgiEFTjCyp2t%2B5zki8yqTH8SSPisrdKex8iSsbDRgoQRQBBuuNmh0NOrnDYhbqqr3YCS5Lh18ZsSVVGGlBsYDePbg9rXTUg6cgr5Ol4J9k7JHi9AbA%2B2E%2Bef1MvFWnaTqY%2Fhwb82HgV5oL%2FXMOcsM1I3ZL418JLj%2FMJiD0d53BrWZwYz3EU1pKmh%2F8MNstS1%2B5b%2FY1BR9Sv3RoN0BmkEfjM3WytbvlVw3CdkckO%2Fws%2FjuoahWdKSFMlxWNsaoP%2FRAJsFSUvaxwRGWGx1TNQIH97xFUu%2FWgjenwtPaXICxe6YEYYHjsPKLgDjMPNO9TpMvsXEygv1HV9jIleYXv8gOZv63%2FSE0ubR53r5NlhAB7ZPI47fvLCsHhZ%2BbVxXafyGpCOpNRIrRDD%2BMdIvUISzJlSsNB7ttJj%2F7%2B97R3d4JrhVzNHjMH%2Brq4dqzSzTcXMNKKj78GOqUBfzl93zIMCsbVUmAFl6doDkAftPCZE5hSOa74swCyifcCoJe1Nof55rTPcoHCzCAyNuRGnaV3OWmQki4JVrOP0DOYQcYKC2RXI%2Fv%2FaeHZTDD2LZ%2FtXzPOCcsQe1OD3bu9cDsJJZOfRV7LgsXbnnkEuxLiuiWtabVwnKJtLjp0gW8r1pQl7RGe%2B3IFCmOIA3MoBQyw7zUppyxzDqei7s9yXdeAfIem&X-Amz-Signature=9a5b7f78e644a41faf5ce167c71ea18cd7d3b7a497c8289a4924fae99c0c85da&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
