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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JNSBQO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHU1feluDHSCD4uwKvzaua5mfExisO4YeJE4XVHCBMonAiBVhk25Gx8Z1Qk2PNu7%2Bpyg%2Bcr9VDqJdqQhadwS10fkoyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMpUVJBuFLIgvfVWYRKtwDW31lR2QgXoRHqTO%2BZRCOBlf1f%2BQFseyTF43dN7rbiCPz9kShDo7MQEASA6Pxgp4x8ESBKXTVE%2Fn85Err5rQUBiZoM8wD6YVPcgBZyItny9h9aRWs8%2FTHZagPsD0rzy1lm612%2F7IrKJnICezFekILJxM%2BO6T7tcGvg30C9XcI1YErr%2BOgbSw6gtO6qQcSP0YAV9YPFt9Cywsx8wy7KDhVaWMDrJbVYkZuzmE4yZxB8Q2UgLRCv6Is90h4jL3%2B1X7KZcOlzMM6O%2FjKFbjnFZ0a455xCmKv7NQvibHLwvvepO32JlWGoV5lcbDMX7MQ%2Bmq9q4nYsZc5VFTzkahzriXnFJAFgVcDrGQouOd3liYHsyMyrEI87EEvoY%2BpxuS10nFmpsLcE%2F%2Fu9cI0HsnYiaIfmQ%2BvRXBUZNKK%2F1%2FCgvYOfelDvqhebvS44WeTj3tSboX4ZKHdlG98DJUIvHWEF6oo%2FfhXkQExSdTfaGYtVtRD5GAyA3JusiEZYxUlG8yCMRLq5%2FpQ8rIlSbwjyl2IV9ms2MvtZQMJV2uXxYO94A6fTgz4BB%2BYBUQfgRut5%2FkgQelk0zqVJcfdZBCXPqsAjiAHi9udeVCPtL7j%2BOKJIHqVkBjndss0FLfjgPD4hBkwnf%2BqwwY6pgFG7ZOw9dL8CmcCT3z%2FfVMC%2FWomlvIoetGtHvr250YhPUfj4xyGvbSuYSkCA3lgc%2BSPXHimMHLQ8XqL7Gsykah5zGBJ8zVxGpX2lhikoXkevv7tUb%2BhbvY3wyDUIemv0cz2qn6nCOw4eFHWcLPMiExPyVVPcuTbt8DbC7nNstRdYXriZW1QLEMcZ4jaco%2F5%2BtIxR5a69WAlIb5He3GdMaNIm6rUnWaj&X-Amz-Signature=0ed76870e3b5c726c505068e8cf33c034635066b50ffed8ba28c6e92d8f6836f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
