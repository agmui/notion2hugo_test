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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNH5YQB5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFW%2FxNnkVJ3pUXHAvJAah2ZLQx9Kto%2FhUbIQlgoFTSpVAiA2qtIeR8UVfhVWIwkU3OvUjZWbXNLlhaTA6TzItud2cyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME8QUnyFOttnlX8D9KtwDYnRhaM5JgDfzuU6wTNXBXLRG4F60IoP2hJeQgukHpcHGeNZvpRe%2F%2BDAFqRXVEjK8z5VvJ3NF%2FUZAhbSh%2BXbAV4i%2B%2Bss95ELuMimsVRxEoKW9AQeCRKtwY%2BqcoShZBBPRiQ3MWv%2F62wclEPjcF9a%2BfzAMqeT%2FR8ewI1at4K0IgW1d6h41L5INqjKQkNBlW3L8gsGX6CUEACWoagSVqVnsBxulH9sdLr8WfiY%2B1ngdqUHCOzbUz7h5v6pweG83eL%2FGIHOr1i1%2FlhB9dBk1srVNBBLoDLiiJqUJpy9QstDIHW6yJc3ZvFOebRG1zJgvsyVgMD%2FZD0%2FbxUrWo%2FfYLXaL7hy2BQe%2B8QG1nvRbcVAZQYKWgERCCFWfQoU7YtEdqqfeCCsZrLAULh4%2BZKpRC6KMdp7sGQ3q343dJy0vFUZAHMwsnIFPLC76MTt5dx33q1HcntxEKqbeWxy7YfT4VmO55js7u1HG1p6KYYOgjwQ5JAAeXlB1CejmQKdRcTn9zdVfGhtw9D%2FogLJKn7nlmScHz12p%2F6on3Jnkff8lxCY8JXY00MA3gL6sAFI6Wxg3eebc6zir8WMaCzvL7KLkvXPxtp0TAbF70oqBesiuCJOz9W8NTfh%2B%2B%2FVCxqzi4sswgNv2vgY6pgF7Ou%2Fp35uICmyu2peCt7BfWd5HwKMbLp7tNoAl1c7JZcWOZFp96q39wavEYzhwBJNx1x2gnqhFwT5nzBiTCYfg5uLTzNTQ1Fey4%2FZgbKLMAHauyc1ujk0AkaXzGDJEHXfz%2FqbRWIy3xp%2F0kpGg7gLu4QNrbHZySI4NFnPTTa7QKsYUVLl2a8VQeMrGJjEAf2bbnF9nB4RvGAtMOD6vmzrZ8bvN6dYe&X-Amz-Signature=90b7d5aae2ad339ea6640ee2c10a7f21e80b9cf29a31ef9768401efcf1093725&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
