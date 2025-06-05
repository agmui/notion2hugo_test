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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3GWTR6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDmhpVHgCEzVxQ5BWIdMz9nKoey%2FkC5pMM74lMx2FYOJAIhAJQGrF2ywQleKr1IxE7sifsxqOMBJ5YRRk5yNU5DGsZRKv8DCEwQABoMNjM3NDIzMTgzODA1IgwxCUmlt7ZfwaqAaDsq3ANIsoTegVUbFJ9H%2BGMgEYKEovdxRyo9hRxmdHH%2BzVHCnbmYD4gbZQ5u1XXMivEt4hhduQcuE61gTzvqxD0jMr3jYKHb06XgLIsxkY00rfbx9A0INUtDC9dLM1AREOSzfn1tP5iaQOfFI9Stww9L%2FCQQvHNhCFMXjsfmtSH%2FPuYZQE6jGDRM2%2FcTt9phxgfGMLFGT067MjfntQ0qx1E7joTK61PPR8yV8GU1PoCsry7wRKvmd6VaAmWEy0tOhRvqPjRnCCjv%2BdKUVLUnIf%2FWIA1pGgJPpdSlICy7COwaxAROBEUY%2B1hGoDQTq3F3hgFoMFo92kuG3lb5NDFirTCxBSCzrOmDU9nIwOXREceOuNrV0hmOWePa%2FLaSPL1M3QMprknq7lerdb2qOgpxwOQJvy6TT8fhKV1hHPWUum3nMNP7A9JDe%2FCv1MyXUKVTzS2q%2B0I66BHdu2M3%2F7jEMS4SL%2BpwtVQWB1QP2wTv5L9uR%2BeBgHNLERMtj6oOIBteOVxdAsLDrQvm0%2BoJJb1rhs3VdsfqgwEj9Rk%2FabvEuEckjq9iJBQ4BLLYoJTFgxE8FasxWlKUPXHQCW360FY29babMm2Oc1Dw5MDuUZYOSHXbY8tX3%2BFZJKOUJHztkb7gJDCu2IfCBjqkAXLApDU5sDqfLzqHge5RVnkV8NdxmhxOXoyaPzY3E8os4XGox%2BGQl1Vyr0zfQrAL2tckgXnquLZtQvLLysNIa60NpKz%2FnXHNw%2BveVSmChQEkAMeMEEM3E85tVp0Lw9XHOwLjSw0zjDg1HrKiQAtQKApLgqoO%2B07i0UABkX5hDXu5wkYqg986%2FlV4xvzXBx8NsB4LFMI7VMsbPM1MTRwQeNkg14wX&X-Amz-Signature=bfda0b66ff2c124afda4ae4888f5c2659b91d307c039fbcd4e696b974c1f48d7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASMKFZU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIF5arBCNUupZRY%2B7xis0mY3XerdKr31vVCcs%2FqDs6mY0AiEA2EuJEobg9NraevZ6bLy8%2BUHMmXo%2F1Mih9NHTFOoLlwMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3QnK3WQTHSwqOi0CrcA67YxGLrIWe4hB1nI%2Bd1%2BuDcJlDd9bJ6qlnlo9W9oCqechBdlYADS7S%2BLsI%2BDDxshulylN8GF68Mc%2F3ASIbd%2FOwQkoDy72TKkiwtm%2BpgKGi2E3MxHGOaikf%2BJbJ1zhhkEDob6Aqcvu9HuvE2NSyiepakY73%2BtzvEpKq0JIOtOtTIDJXua0umI4pNXHwq0NERl0E65ZLM6YswNq7W6lDovq3pEH9B6lNhfGpZT%2FctT3USnWcQrcm4FpRw5O31yXNv5KQzXBytuR8CyHsJ7hHoLH6WU9%2BliuBq4ahgwJ7N1rri2EHBcmilZtrID1jQWN4fcE35Aq7nJyDgsZGjnzvwi8d%2B7hY4Ishyp6QlskPAiFqKHjYMz6RHiEQxYLYwblMPd9v2pUJL5A0N%2FTg%2BxQSWreQi4IVBo0fXoWyycfp2rTpDTA5qWmxzlxnH6LVpUtInjU9ogF9IGNhsy6%2BviMd5xGJQ6GQ674rbIlxThYRJOY88aos7LI73x%2FcJNpMHk8k0JDPbtSmE3KJH7LylVG3N6xqS5vwMIlsQTJFBrtByR6AbM4McYuGNVIt0PAqw0HMUkbun26I3zd9UoNYiOd7GSWmgYdBs6eZCJ1iwUmcfFOBnSafL04binVTE9LeIMMDYh8IGOqUBGMvHkPSQCu1WOLvk6xaVGapH3xPqJccoCfLtruVehL385t717AZkLJVQUOW6xKRIxNERaG%2Bobv9M36dw80TUQN5xkR6%2BGRTyIekAZlKJzSKRdmC7%2F3i3gPF9M7HrCxRRW0aZ6OHTD5GddlyGdNHSaCaH%2BQtKGQDTVqxoetzn2Cg6E1jRTjeRwGQ8eTUwfedKLC8SEmLqfz0ei9%2BLFCMFbI8FG%2Foh&X-Amz-Signature=0628f26090f7c8fc80e57f2506add8ccd3255b389cde168f921efd78d23af526&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
