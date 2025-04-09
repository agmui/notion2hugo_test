---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HC7FZKZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFOz%2FsXE5ieeCfTtaHjkhuyjjb%2B2ewBnDilpSZxZTAqNAiB%2BiExEoy9OjsJVDZRKyiDVIyKlmoi4HhZeIvNkBeimbSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJg2TvYdL98EDn7UsKtwDN22ZlSWW%2BwRaFZJwI52A6hY5wY8qqYUNdqJsf7bvyKBXme%2BwyToQt2y890vvI0C60qtQ4fzXCYX9JJW9P3vkSZ%2BH1zQs3a3jzbxJpd0U3jjxr2h18yOmMc0voAb%2F%2FwXONyPZQO046Ep2LheWJHwJr6f5anVL5%2Bro3unDUBo%2FUn5vyP5QcrVrXjPq77fMj6PYvEaf5FRPTRgMAME5mX4pEeZvy%2FuR%2BqQO8FArbBFJ2492fi2DrAfs0H0FwnTiAdtJqns3XSbDjsFDWrm0%2FmKB8SXwZ4fTjJTpZ2VVdlljErPUq3an0Ic2nxI%2FF2wd15yntsc0Cr%2BCuwIoXDggMDmlteIzpf52OiI5fHzW9Wi0lrXqFNsd0cVsbxLiZw4r77sEQ%2F62O1kioAdk6n5CKh1y0QoF5xg3dGbHcmZITbeRFYdiHKIr9oTjXjlaTJvyrG1WHHKZ%2Fr12i7y2rbvNu7ndJPU%2BrSKQue81o9ZnywxDcxyexlWP3rrIA8fOU6Gtxdkr19CeRLDK2kTFrwfm9aKMbw35l%2FuDfsTxmMVHIZekVhthnYCsLOq%2Buks%2FQgg64bpKFw5RQC%2FQFgWVNwXFDNiK2DOZedJsleWLubtHWaYpFBDGuHE0mefzLVRO3vkwtMrYvwY6pgF%2Bw7pGhZuBvLwEj3%2BBMfzVJrbTRaVWVaPCMFrsnd90F5LHatN3BJ%2BsWaaf7CrD2LWfejFETNSNRuAz0AGQI%2F3uDNw9OtYGsrm8jkfYHFxOSNV8MTN7t2a7QNj5NaKeI7jcaNXU6837kdURKGO4uLsU9NCP8WzbaYPqAC9hwy6swjqvCtMxQAPVnZX31dVjYZidAM%2B6pkwXreZMHJjvUEykHw2wU1o9&X-Amz-Signature=ce4300b9d990ada9c79399b3706b55e54882dce91d6b751efd3da4c3764a65b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
